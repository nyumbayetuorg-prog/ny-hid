// pages/api/narrative.js

import { getAirtableRecords } from "../../lib/airtable";

export default async function handler(req, res) {
  try {
    // 1. Load all ECQ submissions
    const raw = await getAirtableRecords(process.env.AIRTABLE_TABLE_RAW_SUBMISSIONS);

    const total = raw.length;

    // Emotional categories
    let highStress = 0;
    let lowPurpose = 0;
    let relationshipPain = 0;
    let identityCrisis = 0;
    let sleepDistress = 0;

    raw.forEach((r) => {
      if (r["14. Stress Frequency"] && r["14. Stress Frequency"].includes("High")) {
        highStress++;
      }
      if (r["11. Sense of Purpose Strength"] && r["11. Sense of Purpose Strength"] <= 3) {
        lowPurpose++;
      }
      if (r["18. Relationships Affected?"] === "Yes") {
        relationshipPain++;
      }
      if (r["17. Emotionally Safe Person?"] === "No") {
        identityCrisis++;
      }
      if (r["15. Sleep Pattern"] && r["15. Sleep Pattern"].includes("Poor")) {
        sleepDistress++;
      }
    });

    // 2. Build narrative insights
    const insights = [];

    if (highStress / total > 0.3) {
      insights.push("Stress is rising. Many feel emotionally overloaded and silently overwhelmed.");
    }

    if (lowPurpose / total > 0.25) {
      insights.push("People are questioning their purpose, direction, and identity.");
    }

    if (relationshipPain / total > 0.2) {
      insights.push("Homes are under strain. Many are carrying emotional weight alone.");
    }

    if (identityCrisis / total > 0.15) {
      insights.push("Men and women feel unseen, unheard, and disconnected from emotional safety.");
    }

    if (sleepDistress / total > 0.2) {
      insights.push("Nights are heavy. Many are struggling to rest or feel grounded.");
    }

    // Default insight if empty
    if (insights.length === 0) {
      insights.push("Kenya is steady this week. Emotional patterns show calm resilience and quiet strength.");
    }

    // 3. Construct the weekly narrative
    const narrative = `
This week, Kenya’s emotional landscape reveals a quiet story emerging beneath the noise.

${insights.join("\n\n")}

But beneath the struggle, there is a growing hunger for change, grounding, and purpose. 
Every submission is a whisper of someone trying to rise again.

Nyumba Yetu stands as a sanctuary — a place where meaning is restored, 
identity is reclaimed, and emotional safety is rebuilt.

Move gently, but move with clarity.
The work ahead is sacred.
    `;

    return res.status(200).json({
      total,
      insights,
      narrative,
    });
  } catch (error) {
    console.error("Narrative Engine Error:", error);
    return res.status(500).json({ error: "Failed to generate narrative" });
  }
}
