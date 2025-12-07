import { getRawSubmissions, getSupportPipeline } from "@/lib/airtable";

export default async function handler(req, res) {
  try {
    const submissions = await getRawSubmissions();
    const pipeline = await getSupportPipeline();

    const totalSubs = submissions.length;
    const highRisk = submissions.filter(
      (s) => s.riskLevel && s.riskLevel.toLowerCase().includes("high")
    ).length;

    const activeCases = pipeline.filter(
      (p) => p.status === "Active Support"
    ).length;

    const msg = `
### Nyumba Yetu Intelligence Brief
Here is the state of Kenya’s emotional landscape:

• **Total ECQ submissions:** ${totalSubs}
• **High-risk cases detected:** ${highRisk}
• **Active support cases:** ${activeCases}

**Narrative Insight:**
People are overwhelmed. Expectations are rising faster than emotional capacity.
Men hide pain. Women carry too much. Students feel unseen.

**NY Brain Recommendation:**
Focus the team on:
1. Short-form content that targets emotional overload
2. Support follow-ups for high-risk cases
3. Building momentum through storytelling + testimonials
`;

    res.status(200).json({ ok: true, message: msg });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: err.message });
  }
}
