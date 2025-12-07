import { getRawSubmissions, getSupportPipeline } from "@/lib/airtable";

export default async function handler(req, res) {
  try {
    const submissions = await getRawSubmissions();
    const pipeline = await getSupportPipeline();

    // -------------------------
    // RISK DISTRIBUTION
    // -------------------------
    const riskCount = submissions.reduce((acc, row) => {
      const risk = row.riskLevel || "Unknown";
      acc[risk] = (acc[risk] || 0) + 1;
      return acc;
    }, {});

    // -------------------------
    // READINESS HISTOGRAM
    // -------------------------
    const readiness = submissions.reduce((acc, row) => {
      const level = row.readiness || 0;
      acc[level] = (acc[level] || 0) + 1;
      return acc;
    }, {});

    // -------------------------
    // SUPPORT PIPELINE STATUS
    // -------------------------
    const statusCounts = pipeline.reduce((acc, row) => {
      const s = row.status || "Unknown";
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    }, {});

    // -------------------------
    // TEAM CASE LOAD
    // -------------------------
    const teamLoad = pipeline.reduce((acc, row) => {
      const person = row.assignedTo || "Unassigned";
      acc[person] = (acc[person] || 0) + 1;
      return acc;
    }, {});

    // -------------------------
    // FINAL METRICS OBJECT
    // -------------------------
    res.status(200).json({
      ok: true,
      metrics: {
        riskDistribution: riskCount,
        readinessHistogram: readiness,
        pipelineStatus: statusCounts,
        teamLoad,
        totals: {
          submissions: submissions.length,
          pipelineCases: pipeline.length,
        },
      },
    });
  } catch (error) {
    console.error("❌ METRICS ERROR:", error);
    res.status(500).json({ ok: false, error });
  }
}
