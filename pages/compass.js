// pages/ops.js
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function OpsWorkspace() {
  const [output, setOutput] = useState("");

  // Load last operations output
  useEffect(() => {
    const saved = localStorage.getItem("ny_ops_output");
    if (saved) setOutput(saved);
  }, []);

  async function runBrainAction(action) {
    setOutput("⏳ Processing…");

    const res = await fetch("/api/ny-brain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "ops", action }),
    });

    const data = await res.json();
    setOutput(data.output);

    // Save memory
    localStorage.setItem("ny_ops_output", data.output);
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-[#0F4C81] mb-6">
        Operations Command Workspace
      </h1>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <button
          onClick={() => runBrainAction("ops_daily_plan")}
          className="p-4 bg-[#0F4C81] text-white rounded shadow hover:bg-[#0d3f6b]"
        >
          📋 Generate Daily Ops Plan
        </button>

        <button
          onClick={() => runBrainAction("content_upload_checklist")}
          className="p-4 bg-[#4CAF50] text-white rounded shadow hover:bg-[#3e8f41]"
        >
          📤 Upload Checklist
        </button>

        <button
          onClick={() => runBrainAction("support_pipeline_map")}
          className="p-4 bg-[#F4B400] text-white rounded shadow hover:bg-[#d19500]"
        >
          🧩 Support Pipeline Map
        </button>

        <button
          onClick={() => runBrainAction("ops_priority_summary")}
          className="p-4 bg-[#9C27B0] text-white rounded shadow hover:bg-[#7a208e]"
        >
          ⚙ Ops Priority Summary
        </button>

      </div>

      {/* Output */}
      <div className="bg-white rounded-lg shadow p-6 whitespace-pre-wrap min-h-[300px]">
        {output || "NY Brain Operations Intelligence will appear here…"}
      </div>
    </Layout>
  );
}
