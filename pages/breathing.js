import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export default function BreathingSanctuary() {
  const [phase, setPhase] = useState("Get Ready");
  const [count, setCount] = useState(3);
  const [running, setRunning] = useState(false);

  const breathingPattern = [
    { phase: "Inhale", duration: 4 },
    { phase: "Hold", duration: 2 },
    { phase: "Exhale", duration: 6 },
    { phase: "Hold", duration: 2 }
  ];

  useEffect(() => {
    if (!running) return;

    let patternIndex = 0;
    let current = breathingPattern[patternIndex];
    setPhase(current.phase);
    setCount(current.duration);

    const interval = setInterval(() => {
      setCount((c) => {
        if (c > 1) return c - 1;

        // Move to the next breathing phase
        patternIndex = (patternIndex + 1) % breathingPattern.length;
        current = breathingPattern[patternIndex];
        setPhase(current.phase);
        return current.duration;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "40px",
          background: "#F6F8FA",
          boxSizing: "border-box"
        }}
      >
        <h1 style={{ fontSize: "32px", color: "#0F4C81", marginBottom: "10px" }}>
          Breathing Sanctuary
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
          A guided breath cycle to bring your body and mind into calm alignment.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: "14px",
            padding: "40px",
            maxWidth: "500px",
            margin: "0 auto",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#0F4C81" }}>
            {phase}
          </h2>

          <div
            style={{
              fontSize: "60px",
              fontWeight: "700",
              color: "#222",
              marginBottom: "30px"
            }}
          >
            {count}
          </div>

          {!running ? (
            <button
              onClick={() => setRunning(true)}
              style={buttonStyle}
            >
              Start Breathing
            </button>
          ) : (
            <button
              onClick={() => setRunning(false)}
              style={{ ...buttonStyle, background: "#9C27B0" }}
            >
              Stop
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

const buttonStyle = {
  background: "#0F4C81",
  color: "white",
  padding: "14px 28px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer"
};
