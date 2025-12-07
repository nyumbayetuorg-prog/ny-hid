import Airtable from "airtable";

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;

if (!apiKey || !baseId) {
  console.error("❌ Missing Airtable API credentials in .env.local");
}

const airtable = new Airtable({ apiKey });
const base = airtable.base(baseId);

// Helper: Clean Airtable values (handles undefined, arrays, numbers)
function normalize(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (value === undefined || value === null) return "";
  return value;
}

// Fetch all Raw Submissions
export async function getRawSubmissions() {
  try {
    const records = await base(process.env.AIRTABLE_TABLE_RAW_SUBMISSIONS)
      .select()
      .all();

    return records.map((rec) => ({
      id: rec.id,
      ...rec.fields,
      riskLevel:
        rec.fields["27. Risk Level (Formula) (from Linked Submission)"] || "Unknown",
      readiness: rec.fields["34. Readiness to Change (1–10)"] || null,
      gamblingFreq: normalize(rec.fields["2. Gambling Frequency"]),
      stressFreq: normalize(rec.fields["3. Stress Frequency"]),
      sleepPattern: normalize(rec.fields["4. Sleep Pattern"]),
      createdTime: rec._rawJson?.createdTime ?? null,
    }));
  } catch (err) {
    console.error("❌ Error fetching Raw Submissions:", err);
    return [];
  }
}

// Fetch all Support Pipeline cases
export async function getSupportPipeline() {
  try {
    const records = await base(process.env.AIRTABLE_TABLE_SUPPORT_PIPELINE)
      .select()
      .all();

    return records.map((rec) => ({
      id: rec.id,
      ...rec.fields,
      status: rec.fields["2. Case Status"] || "Unknown",
      linkedSubmission:
        rec.fields["1. Linked Submission"]?.[0] || null, // First linked record ID
      assignedTo: normalize(rec.fields["9. Assigned To"]),
      lastUpdated: rec.fields["14. Last Updated"] || null,
      createdTime: rec._rawJson?.createdTime ?? null,
    }));
  } catch (err) {
    console.error("❌ Error fetching Support Pipeline:", err);
    return [];
  }
}
