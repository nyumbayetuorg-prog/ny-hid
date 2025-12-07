// pages/ops.js
import { useEffect, useState } from "react";

export default function OpsWorkspace() {
  const [output, setOutput] = useState("");

  // Load saved memory on page load
  useEffect(() => {
    const saved = localStorage.getItem("ny_ops_output");
    if (saved) setOutput(saved);
  }, []);

  // Handler for all NY Brain Ops Actions
  async function runBrainAction(action) {
    setOutput("⏳ Processing…");

    const res = await fetch("/api/ny-brain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "ops", action })
    });

    const data = await res.json();
    setOutput(data.output);

    // save to localStorage for continuity
    localStorage.setItem("ny_ops_output", data.output);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#0F4C81]">
        Operations Command Workspace
      </h1>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <button
          onClick={() => runBrainAction("ops_daily_plan")}
          className="p-4 bg-[#0F4C81] text-white rounded-lg shadow hover:bg-[#0d3f6b]"
        >
          📋 Generate Daily Ops Plan
        </button>

        <button
          onClick={() => runBrainAction("content_upload_checklist")}
          className="p-4 bg-[#4CAF50] text-white rounded-lg shadow hover:bg-[#3b8f41]"
        >
          📤 Upload Workflow Checklist
        </button>

        <button
          onClick={() => runBrainAction("support_pipeline_map")}
          className="p-4 bg-[#FF9800] text-white rounded-lg shadow hover:bg-[#e68900]"
        >
          🧩 Support Pipeline Map
        </button>

        <button
          onClick={() => runBrainAction("ops_priority_summary")}
          className="p-4 bg-[#9C27B0] text-white rounded-lg shadow hover:bg-[#7a1f89]"
        >
          ⚙️ Priority Summary (Ops)
        </button>

      </div>

      {/* Output Panel */}
      <div
        className="p-6 bg-white rounded-lg shadow whitespace-pre-wrap min-h-[300px]"
      >
        {output || "NY Brain (Ops Mode) will output here…"}
      </div>
    </div>
  );
}
