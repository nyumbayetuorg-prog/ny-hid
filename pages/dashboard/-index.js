// pages/dashboard.js
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Sidebar from "../components/Sidebar";
import LogoutButton from "../components/LogoutButton";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Airtable Metrics
  useEffect(() => {
    fetch("/api/metrics")
      .then((res) => res.json())
      .then((data) => {
        setMetrics(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Metrics fetch failed:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center text-xl">
        Loading NY Founder Intelligence…
      </div>
    );

  if (!metrics)
    return (
      <div className="flex h-screen items-center justify-center text-xl">
        Could not load metrics.
      </div>
    );

  // CHART DATA — Gambling ECQ Risk Breakdown
  const pieData = {
    labels: ["High Risk", "Moderate Risk", "Low Risk"],
    datasets: [
      {
        data: [
          metrics.gamblingRisk.high,
          metrics.gamblingRisk.moderate,
          metrics.gamblingRisk.low,
        ],
        backgroundColor: ["#b91c1c", "#facc15", "#16a34a"],
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar Navigation */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">
            Founder Intelligence Dashboard
          </h1>
          <LogoutButton />
        </div>

        {/* SUMMARY CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Total Submissions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-700 font-semibold text-lg mb-2">
              Total ECQ Submissions
            </h3>
            <p className="text-3xl font-bold text-[#0F4C81]">
              {metrics.submissions}
            </p>
          </div>

          {/* High-Risk Count */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-700 font-semibold text-lg mb-2">
              High-Risk Cases
            </h3>
            <p className="text-3xl font-bold text-red-600">
              {metrics.gamblingRisk.high}
            </p>
          </div>

          {/* Moderate Risk */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-gray-700 font-semibold text-lg mb-2">
              Moderate-Risk Cases
            </h3>
            <p className="text-3xl font-bold text-yellow-500">
              {metrics.gamblingRisk.moderate}
            </p>
          </div>
        </section>

        {/* CHARTS SECTION */}
        <section className="bg-white rounded-xl shadow p-8 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Gambling Risk Index (ECQ Analytics)
          </h2>

          <Pie data={pieData} />
        </section>
      </main>
    </div>
  );
}
