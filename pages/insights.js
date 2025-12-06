import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function InsightsLog() {
  const [note, setNote] = useState("");
  const [insights, setInsights] = useState([]);

  const handleAdd = () => {
    if (!note.trim()) return;
    setInsights([...insights, { text: note, date: new Date().toLocaleString() }]);
    setNote("");
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
        <h1 style={{ fontSize: "32px", color: "#0F4C81", marginBottom: "10px" }}>
          Insights Log
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
          Capture meaningful moments, breakthroughs, and shifts in awareness.
        </p>

        {/* Input Section */}
        <div
          style={{
            background: "white",
            padding: "30px",
            marginBottom: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginBottom: "15px", color: "#0F4C81" }}>
            Add a New Insight
          </h2>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What have you realized? What shifted? What did life teach you today?"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              minHeight: "140px",
              fontSize: "16px",
              outline: "none",
              marginBottom: "15px",
            }}
          />

          <button
            onClick={handleAdd}
            style={{
              background: "#0F4C81",
              color: "white",
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Save Insight
          </button>
        </div>

        {/* Saved Insights */}
        {insights.length > 0 && (
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "#0F4C81" }}>
              Your Insights
            </h2>

            {insights.map((entry, index) => (
              <div
                key={index}
                style={{
                  padding: "16px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                <p style={{ margin: 0, fontSize: "17px", color: "#222" }}>
                  {entry.text}
                </p>
                <span style={{ fontSize: "13px", color: "#999" }}>
                  {entry.date}
                </span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
