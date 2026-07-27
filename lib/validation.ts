import { ContactSubmitRequest } from "@/types/contact";

/**
 * Escapes special characters to prevent HTML Injection and Cross-Site Scripting (XSS).
 */
export function sanitizeInput(str: string): string {
  if (typeof str !== "string") return "";
  return str
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Removes carriage return and newline characters to prevent Header/CRLF Injection.
 */
export function stripCRLF(str: string): string {
  if (typeof str !== "string") return "";
  return str.replace(/[\r\n]/g, "");
}

// RFC 5322 Compliant Email Regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Phone format allowing leading +, spaces, dashes, parentheses, and between 7 to 20 digits.
const PHONE_REGEX = /^\+?[0-9\s\-().]{7,20}$/;

export interface ValidationError {
  field: string;
  message: string;
}

export function validateContactRequest(data: any): {
  isValid: boolean;
  errors: ValidationError[];
  validatedData?: ContactSubmitRequest;
} {
  const errors: ValidationError[] = [];

  // Reject empty fields
  const requiredFields = ["name", "email", "phone", "projectDetails"];
  for (const field of requiredFields) {
    if (!data[field] || (typeof data[field] === "string" && data[field].trim() === "")) {
      errors.push({
        field,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required and cannot be empty.`,
      });
    }
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  // Trim and Sanitize inputs
  const name = stripCRLF(sanitizeInput(data.name));
  const email = stripCRLF(sanitizeInput(data.email));
  const phone = stripCRLF(sanitizeInput(data.phone));
  const projectDetails = sanitizeInput(data.projectDetails); // Multiline is allowed for details, but HTML tags are escaped.

  // Validation Boundaries
  if (name.length < 2 || name.length > 80) {
    errors.push({ field: "name", message: "Name must be between 2 and 80 characters." });
  }

  if (email.length > 254) {
    errors.push({ field: "email", message: "Email address must be under 254 characters." });
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push({ field: "email", message: "Please provide a valid, RFC-compliant email address." });
  }

  if (phone.length < 7 || phone.length > 20) {
    errors.push({ field: "phone", message: "Phone number must be between 7 and 20 characters." });
  } else if (!PHONE_REGEX.test(phone)) {
    errors.push({ field: "phone", message: "Please provide a valid phone number (international format supported)." });
  }

  if (projectDetails.length < 10 || projectDetails.length > 3000) {
    errors.push({ field: "projectDetails", message: "Project details must be between 10 and 3000 characters." });
  }

  return {
    isValid: errors.length === 0,
    errors,
    validatedData: errors.length === 0 ? { name, email, phone, projectDetails } : undefined,
  };
}
