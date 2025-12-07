import Sidebar from "@/components/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CountyDashboard() {
  return (
    <ProtectedRoute role="founder">
      <Sidebar />

      <div className="main-content">
        <h1 className="page-title">County Mental Health Dashboard</h1>
        <p className="subtitle">Prototype: Shows county-level emotional health signals from ECQs.</p>

        <div className="output-box">
          <h3>Example Metrics (Mock)</h3>
          <ul>
            <li>Gambling Risk Index (Nairobi): 68/100 🔥</li>
            <li>Alcohol Stress Index (Kiambu): 72/100 🔥</li>
            <li>University Mental Load (Meru): 57/100 ⚠️</li>
            <li>Family Burnout (Nakuru): 41/100</li>
          </ul>
        </div>

        <div className="output-box">
          <h3>County Insights</h3>
          <p>
            Nairobi shows rising gambling dependency.  
            Kiambu requires alcohol support campaigns.  
            Meru students are emotionally fatigued.  
            Nakuru families show improved resilience.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
}
