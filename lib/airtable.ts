import { ContactSubmitRequest, AirtableCreateResponse } from "@/types/contact";

/**
 * Creates a record in Airtable using the REST API.
 * Uses environment variables securely on the server side.
 */
export async function createAirtableRecord(
  data: ContactSubmitRequest
): Promise<AirtableCreateResponse> {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!token || !baseId || !tableName) {
    throw new Error("Airtable server configuration is incomplete.");
  }

  // Format today's date as YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];

  const payload = {
    records: [
      {
        fields: {
          Name: data.name,
          Email: data.email,
          Number: data.phone,
          "Project Details": data.projectDetails,
          Status: "New" as const,
          Date: todayStr,
        },
      },
    ],
  };

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8-second timeout limit

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      // Do not return raw response details to avoid leakage of schema
      throw new Error(`Airtable API responded with status ${response.status}`);
    }

    const result: AirtableCreateResponse = await response.json();
    return result;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      throw new Error("Connection to Airtable timed out.");
    }
    throw error;
  }
}
