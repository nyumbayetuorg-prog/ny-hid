// pages/creative.js
import { useEffect, useState } from "react";

export default function CreativeWorkspace() {
  const [output, setOutput] = useState("");

  // Load saved memory on page load
  useEffect(() => {
    const saved = localStorage.getItem("ny_creative_output");
    if (saved) setOutput(saved);
  }, []);

  // Handler for all NY Brain Creative Actions
  async function runBrainAction(action) {
    setOutput("⏳ Processing…");

    const res = await fetch("/api/ny-brain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "creative", action })
    });

    const data = await res.json();
    setOutput(data.output);

    // Save output to device for continuity
    localStorage.setItem("ny_creative_output", data.output);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#0F4C81]">
        Creative Command Workspace
      </h1>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <button
          onClick={() => runBrainAction("generate_short_scripts")}
          className="p-4 bg-[#0F4C81] text-white rounded-lg shadow hover:bg-[#0d3f6b]"
        >
          🎬 Generate Short-Form Scripts
        </button>

        <button
          onClick={() => runBrainAction("thumbnail_concepts")}
          className="p-4 bg-[#4CAF50] text-white rounded-lg shadow hover:bg-[#3b8f41]"
        >
          🎨 Thumbnail Concepts
        </button>

        <button
          onClick={() => runBrainAction("content_calendar")}
          className="p-4 bg-[#FF9800] text-white rounded-lg shadow hover:bg-[#e68900]"
        >
          🗓️ Weekly Content Calendar
        </button>

        <button
          onClick={() => runBrainAction("creative_brief")}
          className="p-4 bg-[#9C27B0] text-white rounded-lg shadow hover:bg-[#7a1f89]"
        >
          🧠 Creative Brief (AI-Optimized)
        </button>

      </div>

      {/* Output Panel */}
      <div
        className="p-6 bg-white rounded-lg shadow whitespace-pre-wrap min-h-[300px]"
      >
        {output || "NY Brain (Creative Mode) will output here…"}
      </div>
    </div>
  );
}
