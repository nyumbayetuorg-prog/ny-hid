// pages/dashboard.js
import Layout from "../components/Layout";
import ECQCharts from "../components/ECQCharts";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [output, setOutput] = useState("");
  const [analytics, setAnalytics] = useState(null);

  // Load saved output
  useEffect(() => {
    const saved = localStorage.getItem("ny_founder_output");
    if (saved) setOutput(saved);
  }, []);

  // Load analytics
  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/ecq-analytics");
      const json = await res.json();
      if (json.success) setAnalytics(json.data);
    }
    loadData();
  }, []);

  // NY Brain Action Handler
  async function runBrainAction(action) {
    setOutput("⏳ Processing…");

    const res = await fetch("/api/ny-brain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "founder", action }),
    });

    const data = await res.json();
    setOutput(data.output);
    localStorage.setItem("ny_founder_output", data.output);
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-[#0F4C81] mb-6">
        Founder Command Dashboard
      </h1>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">

        <button
          onClick={() => runBrainAction("generate_weekly_narrative")}
          className="p-4 bg-[#0F4C81] text-white rounded shadow hover:bg-[#0d3f6b]"
        >
          ✨ Generate Weekly Narrative
        </button>

        <button
          onClick={() => runBrainAction("analyse_ecq_patterns")}
          className="p-4 bg-[#4CAF50] text-white rounded shadow hover:bg-[#3e8f41]"
        >
          📊 Analyse ECQ Emotional Patterns
        </button>

        <button
          onClick={() => runBrainAction("founder_strategy_summary")}
          className="p-4 bg-[#F4B400] text-white rounded shadow hover:bg-[#d19500]"
        >
          🧭 Founder Strategy Summary
        </button>

        <button
          onClick={() => runBrainAction("national_trend_signals")}
          className="p-4 bg-[#9C27B0] text-white rounded shadow hover:bg-[#7a208e]"
        >
          🌍 National Trend Signals
        </button>

      </div>

      {/* Output */}
      <div className="bg-white rounded-lg shadow p-6 whitespace-pre-wrap mb-12">
        {output || "NY Brain Founder Insights will appear here…"}
      </div>

      {/* Analytics */}
      <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">
        ECQ Analytics Overview
      </h2>

      <ECQCharts data={analytics} />
    </Layout>
  );
}
