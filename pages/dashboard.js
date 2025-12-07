import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import SmartPanel from "@/components/SmartPanel";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, ArcElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale);

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    async function loadMetrics() {
      const res = await fetch("/api/metrics");
      const data = await res.json();
      setMetrics(data);
    }
    loadMetrics();
  }, []);

  return (
    <ProtectedRoute role="founder">
      <Sidebar />

      <div className="main-content">
        <h1 className="page-title">Founder Executive Dashboard</h1>

        {/* SMART PANEL */}
        <SmartPanel
          data={{
            emotional: "High anxiety among students",
            pipeline: "12 high-risk cases",
            creative: "Need gambling awareness stories",
            ops: "Airtable backlog rising",
            message: "Move with clarity, not speed. Kenya needs your stillness today."
          }}
        />

        <p className="subtitle">National intelligence overview powered by NY-HID™</p>

        {!metrics && <p>Loading analytics…</p>}

        {metrics && (
          <>
            {/* RISK LEVEL BAR CHART */}
            <div className="output-box">
              <h2>Risk Levels (Raw Submissions)</h2>
              <Bar
                data={{
                  labels: Object.keys(metrics.riskCounts),
                  datasets: [
                    {
                      label: "Number of Cases",
                      data: Object.values(metrics.riskCounts),
                      backgroundColor: ["#4b5cc4", "#f4c542", "#1a1f36", "#6b7280"],
                    },
                  ],
                }}
              />
            </div>

            {/* SUPPORT PIPELINE PIE CHART */}
            <div className="output-box">
              <h2>Support Pipeline Status</h2>
              <Pie
                data={{
                  labels: Object.keys(metrics.pipelineCounts),
                  datasets: [
                    {
                      label: "Cases",
                      data: Object.values(metrics.pipelineCounts),
                      backgroundColor: [
                        "#4b5cc4",
                        "#f4c542",
                        "#1a1f36",
                        "#6b7280",
                        "#8e44ad",
                        "#2ecc71",
                        "#e74c3c",
                        "#95a5a6",
                      ],
                    },
                  ],
                }}
              />
            </div>
          </>
        )}
      </div>
    </ProtectedRoute>
  );
}
import WeeklyNarrative from "../components/WeeklyNarrative";

<WeeklyNarrative />
