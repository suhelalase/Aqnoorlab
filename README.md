# AqNoorLabs - Contact Form & Airtable REST API Integration

This project is a Next.js (App Router) web application. This document details the secure, robust integration of the website's Contact Form with the **Airtable REST API**.

## Architecture & Data Flow

```
Website Contact Form (Client Side)
          │
          ▼ [POST /api/contact] (Includes Honeypot + Timestamp)
Validate & Sanitize Input (lib/validation.ts)
          │
          ▼ [Rate Limit Check (1 req / 30s per IP)] (lib/rateLimit.ts)
Airtable Helper (lib/airtable.ts) (using process.env.AIRTABLE_*)
          │ 
          ▼ [fetch() with 8s Timeout]
Airtable REST API (Create Record)
          │
          ▼
Success Status returned & UI cleared (ContactForm.tsx)
```

## Security Implementation

- **Server-Side API Masking**: The client never interacts with the Airtable REST API directly. All requests pass through `/api/contact` server route.
- **Environment Isolation**: The Airtable Personal Access Token, Base ID, and Table Name exist solely in server environment variables.
- **Header/CRLF Injection Prevention**: Input fields are stripped of carriage returns (`\r`) and line breaks (`\n`) to prevent HTTP header splitting.
- **XSS & HTML Injection Prevention**: Inputs are HTML escaped.
- **Sanitized Error Messaging**: Actual database/REST errors are logged strictly on the server; the client receives a clean generic status code to avoid data-leakage.

---

## Setup & Environment Variables

Create a `.env.local` file in the root of the project (this file is ignored by Git in `.gitignore`):

```env    
AIRTABLE_TOKEN=your_airtable_personal_access_token_here
AIRTABLE_BASE_ID=your_airtable_base_id_here
AIRTABLE_TABLE_NAME=your_airtable_table_name_here
```

### Required Airtable Columns
Your Airtable Table must contain the following column headers (case-sensitive):
- `Name` (Single line text)
- `Email` (Email)
- `Number` (Phone / Single line text)
- `Project Details` (Long text)
- `Status` (Single select or text - value will default to "New")
- `Date` (Date - formatted YYYY-MM-DD)

---

## File Structure

The contact form integration features the following new/refactored files:

```
/app
  /api
    /contact
      route.ts        # Secure HTTP entry point
/components
  ContactForm.tsx     # Zod validated form, framer-motion toasts, loader, honeypot
  Contact.tsx         # Layout wrapper
/lib
  airtable.ts         # Airtable REST API connection with timeout
  validation.ts       # Input validation, sanitization & injection protection
  rateLimit.ts        # IP rate limiting (30s window) with cache cleanup
/types
  contact.ts          # Strongly typed form requests & Airtable payloads
.env.local            # Local secret configurations
.env.example          # Environment variables example template
```

---

## Anti-Spam Protection

1. **Honeypot Field**: An invisible form input (`honeypot`). Regular users cannot see or interact with it. Automated spam bots fill out every field they discover; if this field contains any value, the request is immediately rejected.
2. **Timestamp Verification**: The client tracks the time of form mounting and submits this timestamp. If the form is submitted in under 2 seconds, it is flagged as automated bot behavior and rejected.
3. **IP Rate Limiting**: Limit of **1 submission every 30 seconds per IP**. Subsequent requests return a `429 Too Many Requests` status. An automated cache cleaning routine purges old IPs every 5 minutes.

---

## Local Testing Instructions

1. **Install Dependencies**:
   Ensure all packages are installed:
   ```bash
   npm install
   ```

2. **Configure Airtable Credentials**:
   Enter your actual Airtable tokens in `.env.local`.

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Verify Behavior**:
   - Go to `http://localhost:3000/#contact`.
   - Submit the form with valid details -> Verify success toast appears and a new row is created in your Airtable table.
   - Submit twice within 30 seconds -> Verify you receive a rate-limit warning.
   - Submit with invalid email/phone configurations -> Verify Zod handles validation.

---

## Production Deployment Notes (Vercel)

1. **Environment Variables**:
   In your Vercel Dashboard, go to **Settings** > **Environment Variables** and add:
   - `AIRTABLE_TOKEN`
   - `AIRTABLE_BASE_ID`
   - `AIRTABLE_TABLE_NAME`

2. **Vercel Edge/Serverless Scaling Note**:
   The rate-limiter utilizes a memory map. In multi-region serverless deployments, instances are ephemeral. For massive scale production environments requiring precise rate limiting, replace the memory map in `lib/rateLimit.ts` with a Redis check (e.g. via `@upstash/redis` or Vercel KV).
