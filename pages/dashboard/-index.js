import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ProtectedRoute from "../components/ProtectedRoute";

import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

import { Pie, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [brainOutput, setBrainOutput] = useState("");

  useEffect(() => {
    fetch("/api/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data.metrics));

    fetch("/api/ny-brain")
      .then((res) => res.json())
      .then((data) => setBrainOutput(data.message));
  }, []);

  if (!metrics)
    return (
      <ProtectedRoute role="founder">
        <Sidebar />
        <div style={{ padding: "40px" }}>Loading founder dashboard…</div>
      </ProtectedRoute>
    );

  // ----- CARD METRICS -----
  const totalSubs = metrics.totals.submissions;
  const pipelineCases = metrics.totals.pipelineCases;
  const highRisk =
    metrics.riskDistribution["High"] ||
    metrics.riskDistribution["High Risk"] ||
    0;

  // ----- CHART DATA -----
  const pieData = {
    labels: Object.keys(metrics.riskDistribution),
    datasets: [
      {
        data: Object.values(metrics.riskDistribution),
        backgroundColor: ["#D7263D", "#FFCA3A", "#1982C4", "#6A4C93", "#8AC926"],
      },
    ],
  };

  const readinessData = {
    labels: Object.keys(metrics.readinessHistogram),
    datasets: [
      {
        data: Object.values(metrics.readinessHistogram),
        backgroundColor: "#1982C4",
      },
    ],
  };

  const pipelineData = {
    labels: Object.keys(metrics.pipelineStatus),
    datasets: [
      {
        data: Object.values(metrics.pipelineStatus),
        backgroundColor: "#6A4C93",
      },
    ],
  };

  const teamLoadData = {
    labels: Object.keys(metrics.teamLoad),
    datasets: [
      {
        data: Object.values(metrics.teamLoad),
        backgroundColor: "#8AC926",
      },
    ],
  };

  return (
    <ProtectedRoute role="founder">
      <Sidebar />

      <div className="dashboard-container">
        <h1 className="page-title">Founder Intelligence Dashboard</h1>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="card">
            <h2>{totalSubs}</h2>
            <p>Total ECQ Submissions</p>
          </div>

          <div className="card">
            <h2>{pipelineCases}</h2>
            <p>Active Support Pipeline Cases</p>
          </div>

          <div className="card high-risk">
            <h2>{highRisk}</h2>
            <p>High-Risk Cases</p>
          </div>
        </div>

        {/* Chart Row 1 */}
        <div className="charts-row">
          <div className="chart-box">
            <h3>Risk Level Distribution</h3>
            <Pie data={pieData} />
          </div>

          <div className="chart-box">
            <h3>Readiness to Change</h3>
            <Bar data={readinessData} />
          </div>
        </div>

        {/* Chart Row 2 */}
        <div className="charts-row">
          <div className="chart-box">
            <h3>Support Pipeline Status</h3>
            <Bar data={pipelineData} />
          </div>

          <div className="chart-box">
            <h3>Team Case Load</h3>
            <Bar data={teamLoadData} />
          </div>
        </div>

        {/* NY Brain Intelligence Output */}
        <div className="brain-box">
          <h2>NY Brain Intelligence Brief</h2>
          <pre className="brain-output">{brainOutput}</pre>
        </div>
      </div>
    </ProtectedRoute>
  );
}
