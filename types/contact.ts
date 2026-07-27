export interface ContactSubmitRequest {
  name: string;
  email: string;
  phone: string;
  projectDetails: string;
  honeypot?: string; // Honeypot field to trap spam bots
  timestamp?: string; // Base64 or plain timestamp to verify request speed
}

export interface AirtableRecordFields {
  Name: string;
  Email: string;
  Number: string;
  "Project Details": string;
  Status: "New";
  Date: string; // YYYY-MM-DD
}

export interface AirtableRecord {
  fields: AirtableRecordFields;
}

export interface AirtableCreateResponse {
  records: Array<{
    id: string;
    createdTime: string;
    fields: AirtableRecordFields;
  }>;
}
