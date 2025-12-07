// pages/dashboard.js

import Sidebar from "../components/Sidebar";
import WeeklyNarrative from "../components/WeeklyNarrative";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch("/api/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Founder Intelligence Dashboard</h1>

        {/* Weekly Narrative */}
        <WeeklyNarrative />

        {!metrics ? (
          <p>Loading Dashboard Metrics…</p>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Gambling Risk Index</h2>

            <Pie
              data={{
                labels: ["High Risk", "Moderate", "Low"],
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
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
