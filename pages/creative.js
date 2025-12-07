// pages/creative.js
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function CreativeWorkspace() {
  const [output, setOutput] = useState("");

  // Load last creative output
  useEffect(() => {
    const saved = localStorage.getItem("ny_creative_output");
    if (saved) setOutput(saved);
  }, []);

  async function runBrainAction(action) {
    setOutput("⏳ Processing…");

    const res = await fetch("/api/ny-brain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "creative", action }),
    });

    const data = await res.json();
    setOutput(data.output);

    // Save memory
    localStorage.setItem("ny_creative_output", data.output);
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-[#0F4C81] mb-6">
        Creative Command Workspace
      </h1>

      {/* Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <button
          onClick={() => runBrainAction("generate_short_scripts")}
          className="p-4 bg-[#0F4C81] text-white rounded shadow hover:bg-[#0d3f6b]"
        >
          🎬 Generate Short-Form Scripts
        </button>

        <button
          onClick={() => runBrainAction("thumbnail_concepts")}
          className="p-4 bg-[#4CAF50] text-white rounded shadow hover:bg-[#3e8f41]"
        >
          🎨 Thumbnail Concepts
        </button>

        <button
          onClick={() => runBrainAction("content_calendar")}
          className="p-4 bg-[#F4B400] text-white rounded shadow hover:bg-[#d19500]"
        >
          🗓 Weekly Content Calendar
        </button>

        <button
          onClick={() => runBrainAction("creative_brief")}
          className="p-4 bg-[#9C27B0] text-white rounded shadow hover:bg-[#7a208e]"
        >
          🧠 Creative Brief
        </button>

      </div>

      {/* Output */}
      <div className="bg-white rounded-lg shadow p-6 whitespace-pre-wrap min-h-[300px]">
        {output || "NY Brain Creative Intelligence will appear here…"}
      </div>
    </Layout>
  );
}
