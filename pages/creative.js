import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import SmartPanel from "@/components/SmartPanel";

export default function Creative() {
  const [output, setOutput] = useState("");

  async function runAction(action) {
    const res = await fetch("/api/ny-brain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });

    const data = await res.json();
    setOutput(data.message);
  }

  return (
    <ProtectedRoute role="creative">
      <Sidebar />

      <div className="main-content">
        <h1 className="page-title">Creative Intelligence Workspace</h1>

        {/* SMART PANEL */}
        <SmartPanel
          data={{
            emotional: "High anxiety among students",
            pipeline: "12 high-risk cases",
            creative: "Need gambling awareness stories",
            ops: "Airtable backlog rising",
            message: "Your art is the medicine. Create from truth, not pressure."
          }}
        />

        <p className="subtitle">NY Brain insights to guide all creative output</p>

        <div className="actions-grid">
          <button className="ny-button" onClick={() => runAction("creative_script")}>
            🎬 Generate Healing Script
          </button>

          <button className="ny-button" onClick={() => runAction("creative_short_video")}>
            🎥 Short Video Concept
          </button>

          <button className="ny-button" onClick={() => runAction("creative_thumbnail")}>
            🖼 Thumbnail Concepts
          </button>

          <button className="ny-button" onClick={() => runAction("creative_content_calendar")}>
            📅 Content Calendar (7 Days)
          </button>
        </div>

        <div className="output-box">
          <h2>NY Brain Output</h2>
          <pre className="output-panel">{output}</pre>
        </div>
      </div>
    </ProtectedRoute>
  );
}
