import { NextRequest, NextResponse } from "next/server";
import { createAirtableRecord } from "@/lib/airtable";
import { sanitizeInput, stripCRLF } from "@/lib/validation";

/**
 * Endpoint to capture draft/abandoned form leads when a user enters
 * their contact info but closes the browser tab or navigates away before submitting.
 */
export async function POST(request: NextRequest) {
  try {
    let rawBody: any;
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      rawBody = await request.json();
    } else {
      const text = await request.text();
      try {
        rawBody = JSON.parse(text);
      } catch {
        rawBody = {};
      }
    }

    const { name, email, phone, projectDetails, honeypot } = rawBody;

    // Reject bot honeypot submissions
    if (honeypot && String(honeypot).trim() !== "") {
      return NextResponse.json({ message: "Ignored" }, { status: 200 });
    }

    // Sanitize values
    const cleanName = stripCRLF(sanitizeInput(name || ""));
    const cleanEmail = stripCRLF(sanitizeInput(email || ""));
    const cleanPhone = stripCRLF(sanitizeInput(phone || ""));
    const cleanDetails = sanitizeInput(projectDetails || "");

    // Only process if user provided at least a phone or email
    const hasPhone = cleanPhone.replace(/\D/g, "").length >= 5;
    const hasEmail = cleanEmail.includes("@") && cleanEmail.length >= 5;

    if (!hasPhone && !hasEmail && cleanName.length < 2) {
      // Nothing useful entered yet
      return NextResponse.json({ message: "No contact info provided" }, { status: 200 });
    }

    const detailsWithNote = cleanDetails
      ? `${cleanDetails}\n\n[Auto-Captured: User closed tab / navigated away without clicking submit]`
      : "[Auto-Captured: User closed tab / navigated away without clicking submit]";

    await createAirtableRecord({
      name: cleanName || "Draft Lead (Tab Closed)",
      email: cleanEmail,
      phone: cleanPhone,
      projectDetails: detailsWithNote,
      status: "Abandoned",
    });

    console.info(`[Lead Recovery] Captured abandoned form submission for: ${cleanEmail || cleanPhone || cleanName}`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("[Lead Recovery Error]", error?.message || error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
