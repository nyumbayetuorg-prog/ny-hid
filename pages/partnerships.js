import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function PartnershipsDashboard() {
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
    <ProtectedRoute role="founder">
      <Sidebar />

      <div className="main-content">
        <h1 className="page-title">Partnerships Command Center</h1>
        <p className="subtitle">Strategic intelligence for Moses' work with counties, NACADA, universities, donors.</p>

        <div className="actions-grid">

          <button className="ny-button" onClick={() => runAction("partnership_county_pitch")}>
            🏛 County Pitch Deck Summary
          </button>

          <button className="ny-button" onClick={() => runAction("partnership_university_brief")}>
            🎓 University Partnership Brief
          </button>

          <button className="ny-button" onClick={() => runAction("partnership_donor_brief")}>
            💼 Donor Funding Intelligence
          </button>

          <button className="ny-button" onClick={() => runAction("partnership_priority_map")}>
            🗺 National Opportunity Map
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
