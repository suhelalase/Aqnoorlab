import { NextRequest, NextResponse } from "next/server";
import { validateContactRequest } from "@/lib/validation";
import { createAirtableRecord } from "@/lib/airtable";
import { verifyTurnstileToken } from "@/lib/turnstile";

/**
 * Generates a non-sensitive unique ID for request correlation.
 */
function generateRequestId(): string {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

export async function POST(request: NextRequest) {
  const requestId = generateRequestId();
  const serverTimestamp = new Date().toISOString();

  try {
    // 1. Parse request payload safely
    let body: any;
    try {
      body = await request.json();
    } catch {
      console.warn(`[${serverTimestamp}] [ReqID: ${requestId}] status=failed reason="invalid_json"`);
      return NextResponse.json(
        { message: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, phone, projectDetails, honeypot, timestamp, turnstileToken } = body;

    // 2. Cloudflare Turnstile Verification (Server-Side)
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : request.headers.get("x-real-ip");

    const turnstileResult = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!turnstileResult.success) {
      console.warn(
        `[${serverTimestamp}] [ReqID: ${requestId}] status=failed reason="turnstile_verification_failed" errors=${JSON.stringify(
          turnstileResult.errorCodes || []
        )}`
      );
      return NextResponse.json(
        {
          message: turnstileResult.message || "Verification failed. Try again.",
        },
        { status: 400 }
      );
    }

    // 3. Spam Protection: Honeypot Check (bots automatically fill all visible/invisible inputs)
    if (honeypot && String(honeypot).trim() !== "") {
      console.warn(`[${serverTimestamp}] [ReqID: ${requestId}] status=failed reason="spam_bot_honeypot"`);
      // Return 400 Bad Request or standard message to avoid giving bots clues
      return NextResponse.json(
        { message: "Invalid request submission." },
        { status: 400 }
      );
    }

    // 4. Spam Protection: Timestamp Verification (bots submit instantly, human takes time)
    if (!timestamp) {
      console.warn(`[${serverTimestamp}] [ReqID: ${requestId}] status=failed reason="missing_timestamp"`);
      return NextResponse.json(
        { message: "Invalid request submission." },
        { status: 400 }
      );
    }

    const submissionTime = parseInt(String(timestamp), 10);
    const now = Date.now();
    const elapsedSeconds = (now - submissionTime) / 1000;

    // If submitted under 2 seconds, flag it as bot behavior
    if (isNaN(submissionTime) || elapsedSeconds < 2.0) {
      console.warn(
        `[${serverTimestamp}] [ReqID: ${requestId}] status=failed reason="spam_bot_fast_submit" elapsed_seconds=${elapsedSeconds}`
      );
      return NextResponse.json(
        { message: "Invalid request submission." },
        { status: 400 }
      );
    }

    // 5. Input Validation and Sanitization
    const validation = validateContactRequest({ name, email, phone, projectDetails });
    if (!validation.isValid) {
      console.warn(
        `[${serverTimestamp}] [ReqID: ${requestId}] status=failed reason="validation_errors" fields=${JSON.stringify(
          validation.errors.map((e) => e.field)
        )}`
      );
      return NextResponse.json(
        {
          message: "Validation failed. Please correct your inputs.",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const validatedData = validation.validatedData!;

    // 6. Save to Airtable REST API
    await createAirtableRecord(validatedData);

    // 7. Secure logging: success status
    console.info(`[${serverTimestamp}] [ReqID: ${requestId}] status=success`);

    return NextResponse.json(
      {
        message: "Thank you! We'll contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    // Secure logging: ensure no variables/tokens/user data leak in log messages
    console.error(
      `[${serverTimestamp}] [ReqID: ${requestId}] status=failed reason="internal_server_error" message="${
        error?.message || "Unknown error"
      }"`
    );

    // Conceal actual database/Airtable API errors from the client
    return NextResponse.json(
      {
        message: "An unexpected error occurred on the server. Please try again later.",
      },
      { status: 500 }
    );
  }
}
