import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

// Fetch ALL records from a table
export async function getAirtableRecords(tableName) {
  const records = await base(tableName).select({}).all();

  return records.map((record) => ({
    id: record.id,
    ...record.fields,
  }));
}

// Count how many ECQs match criteria
export async function countByField(tableName, fieldName, value) {
  const records = await getAirtableRecords(tableName);
  return records.filter((r) => r[fieldName] === value).length;
}
