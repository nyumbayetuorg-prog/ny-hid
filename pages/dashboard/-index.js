// pages/dashboard.js
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [output, setOutput] = useState("");

  // Load saved memory on page load
  useEffect(() => {
    const saved = localStorage.getItem("ny_founder_output");
    if (saved) setOutput(saved);
  }, []);

  // Handler for all NY Brain actions
  async function runBrainAction(action) {
    setOutput("⏳ Processing…");

    const res = await fetch("/api/ny-brain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "founder", action })
    });

    const data = await res.json();
    setOutput(data.output);

    // Save output to localStorage
    localStorage.setItem("ny_founder_output", data.output);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#0F4C81]">
        Founder Command Dashboard
      </h1>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <button
          onClick={() => runBrainAction("generate_weekly_narrative")}
          className="p-4 bg-[#0F4C81] text-white rounded-lg shadow hover:bg-[#0d3f6b]"
        >
          ✨ Generate Weekly Narrative
        </button>

        <button
          onClick={() => runBrainAction("analyse_ecq_patterns")}
          className="p-4 bg-[#4CAF50] text-white rounded-lg shadow hover:bg-[#3b8f41]"
        >
          📊 Analyse ECQ Emotional Patterns
        </button>

        <button
          onClick={() => runBrainAction("founder_strategy_summary")}
          className="p-4 bg-[#FF9800] text-white rounded-lg shadow hover:bg-[#e68900]"
        >
          🧭 Founder Strategy Summary
        </button>

        <button
          onClick={() => runBrainAction("national_trend_signals")}
          className="p-4 bg-[#9C27B0] text-white rounded-lg shadow hover:bg-[#7a1f89]"
        >
          🌍 National Trend Signals
        </button>

      </div>

      {/* Output Panel */}
      <div
        className="p-6 bg-white rounded-lg shadow whitespace-pre-wrap min-h-[300px]"
      >
        {output || "NY Brain output will appear here…"}
      </div>
    </div>
  );
}
