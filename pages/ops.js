import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function OpsWorkspace() {
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
    <ProtectedRoute role="ops">
      <Sidebar />

      <div className="workspace-container">
        <h1 className="page-title">Operations Intelligence Workspace</h1>
        <p className="subtitle">
          The NY Brain supports Peter with execution, tasks, workflow, and system building.
        </p>

        <div className="actions-grid">

          <button
            className="ny-button"
            onClick={() => runAction("ops_task_list")}
          >
            📋 Generate Weekly Ops Task List
          </button>

          <button
            className="ny-button"
            onClick={() => runAction("ops_pipeline_actions")}
          >
            🔧 Support Pipeline — Next Action Steps
          </button>

          <button
            className="ny-button"
            onClick={() => runAction("ops_content_upload_plan")}
          >
            ⬆️ Content Upload Plan for the Week
          </button>

          <button
            className="ny-button"
            onClick={() => runAction("ops_system_check")}
          >
            ⚙️ System Health Check (Airtable + ECQ Forms)
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
