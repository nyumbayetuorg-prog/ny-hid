import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function WeeklyCheckIn() {
  const [reflection, setReflection] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!reflection.trim()) return;
    setSubmitted(true);

    // Placeholder for Airtable/API integration
    console.log("Reflection submitted:", reflection);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "40px",
          background: "#F6F8FA",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "32px", color: "#0F4C81", marginBottom: "20px" }}>
          Weekly Check-In
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "20px" }}>
          Slow down. Tune in. What’s happening in your inner world this week?
        </p>

        {!submitted ? (
          <div>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Write your reflection here..."
              style={{
                width: "100%",
                minHeight: "200px",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #ccc",
                fontSize: "16px",
                lineHeight: "1.5",
                outline: "none",
              }}
            />

            <button
              onClick={handleSubmit}
              style={{
                marginTop: "20px",
                background: "#0F4C81",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Submit Reflection
            </button>
          </div>
        ) : (
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ color: "#4CAF50" }}>Thank you.</h2>
            <p style={{ fontSize: "17px", color: "#444" }}>
              Your reflection has been received.  
              Healing begins the moment you listen to your inner truth.
            </p>

            <button
              onClick={() => (window.location.href = "/dashboard")}
              style={{
                marginTop: "20px",
                background: "#0F4C81",
                color: "white",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Back to Dashboard
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
