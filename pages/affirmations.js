import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AffirmationStudio() {
  const [affirmation, setAffirmation] = useState("");
  const [affirmations, setAffirmations] = useState([]);
  const [saved, setSaved] = useState(false);

  const handleAdd = () => {
    if (!affirmation.trim()) return;
    setAffirmations([...affirmations, affirmation]);
    setAffirmation("");
    setSaved(true);

    setTimeout(() => setSaved(false), 2000);
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
          Affirmation Studio
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
          Speak life into yourself. Create affirmations that align your identity 
          with truth, healing, and purpose.
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
            Add a New Affirmation
          </h2>

          <input
            type="text"
            value={affirmation}
            onChange={(e) => setAffirmation(e.target.value)}
            placeholder="e.g., I am worthy of peace. I am guided. I am enough."
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginBottom: "15px",
              fontSize: "16px",
              outline: "none",
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
            Add Affirmation
          </button>

          {saved && (
            <p style={{ color: "#4CAF50", marginTop: "12px", fontSize: "16px" }}>
              Affirmation saved ✓
            </p>
          )}
        </div>

        {/* Saved Affirmations */}
        {affirmations.length > 0 && (
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginBottom: "15px", color: "#0F4C81" }}>
              Your Affirmations
            </h2>

            {affirmations.map((text, index) => (
              <div
                key={index}
                style={{
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                  fontSize: "17px",
                }}
              >
                {text}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
