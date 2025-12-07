import { getAirtableRecords } from "../../lib/airtable";

export default async function handler(req, res) {
  try {
    const raw = await getAirtableRecords(process.env.AIRTABLE_TABLE_RAW_SUBMISSIONS);

    // GAMBLING RISK INDEX SAMPLE
    const highRisk = raw.filter((r) => r["Risk Level"] === "High").length;
    const midRisk = raw.filter((r) => r["Risk Level"] === "Moderate").length;
    const lowRisk = raw.filter((r) => r["Risk Level"] === "Low").length;

    res.status(200).json({
      submissions: raw.length,
      gamblingRisk: {
        high: highRisk,
        moderate: midRisk,
        low: lowRisk,
      },
    });
  } catch (err) {
    console.error("Metrics API Error:", err);
    res.status(500).json({ error: "Failed to fetch metrics." });
  }
}
