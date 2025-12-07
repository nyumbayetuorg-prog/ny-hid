import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CreativeWorkspace() {
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

      <div className="workspace-container">
        <h1 className="page-title">Creative Intelligence Workspace</h1>
        <p className="subtitle">
          The NY Brain generates content ideas, scripts, hooks, and insights for Jenelyn.
        </p>

        <div className="actions-grid">

          <button
            className="ny-button"
            onClick={() => runAction("creative_generate_hooks")}
          >
            🎣 Generate 10 High-Impact Hooks
          </button>

          <button
            className="ny-button"
            onClick={() => runAction("creative_video_scripts")}
          >
            🎥 Create Short-Form Video Scripts
          </button>

          <button
            className="ny-button"
            onClick={() => runAction("creative_ecq_storytelling")}
          >
            🧠 Convert ECQ Insights Into Storytelling Content
          </button>

          <button
            className="ny-button"
            onClick={() => runAction("creative_youtube_titles")}
          >
            🏆 Generate 15 YouTube Titles (SEO-Optimized)
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
