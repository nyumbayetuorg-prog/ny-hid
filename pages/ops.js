import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProtectedRoute from "../components/ProtectedRoute";
import SmartPanel from "../components/SmartPanel";

export default function Ops() {
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

      <div className="main-content">
        <h1 className="page-title">Operations Execution Workspace</h1>

        {/* SMART PANEL */}
        <SmartPanel
          data={{
            emotional: "High anxiety among students",
            pipeline: "12 high-risk cases",
            creative: "Need gambling awareness stories",
            ops: "Airtable backlog rising",
            message: "Bring order to the movement. Clarity is your superpower."
          }}
        />

        <p className="subtitle">Operational intelligence from the NY Brain</p>

        <div className="actions-grid">
          <button className="ny-button" onClick={() => runAction("ops_checklist")}>
            📋 Daily Ops Checklist
          </button>

          <button className="ny-button" onClick={() => runAction("ops_pipeline_review")}>
            🔍 Support Pipeline Review
          </button>

          <button className="ny-button" onClick={() => runAction("ops_ecq_flow")}>
            🔄 ECQ Workflow Breakdown
          </button>

          <button className="ny-button" onClick={() => runAction("ops_priority_list")}>
            🚦 Priority Tasks for Today
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
