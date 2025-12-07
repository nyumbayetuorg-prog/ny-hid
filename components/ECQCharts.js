// components/ECQCharts.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function ECQCharts({ data }) {
  if (!data) return <p>Loading charts…</p>;

  const { submissionsTrend, gamblingRisk, emotionalLoad } = data;

  return (
    <div className="space-y-12">

      {/* SUBMISSIONS TREND */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-[#0F4C81] mb-4">
          ECQ Submissions Trend
        </h2>
        <Line
          data={{
            labels: submissionsTrend.labels,
            datasets: [
              {
                label: "ECQ Submissions",
                data: submissionsTrend.values,
                borderColor: "#0F4C81",
                backgroundColor: "rgba(15, 76, 129, 0.3)",
                fill: true,
              },
            ],
          }}
        />
      </div>

      {/* GRI */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-[#0F4C81] mb-4">
          Gambling Risk Index (GRI)
        </h2>
        <Bar
          data={{
            labels: gamblingRisk.labels,
            datasets: [
              {
                label: "Risk Level",
                data: gamblingRisk.values,
                backgroundColor: "#F4B400",
              },
            ],
          }}
        />
      </div>

      {/* EMOTIONAL LOAD PIE CHART */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-[#0F4C81] mb-4">
          Emotional Load Levels
        </h2>
        <Pie
          data={{
            labels: emotionalLoad.labels,
            datasets: [
              {
                label: "Levels",
                data: emotionalLoad.values,
                backgroundColor: ["#0F4C81", "#4CAF50", "#F4B400", "#9C27B0"],
              },
            ],
          }}
        />
      </div>

    </div>
  );
}
