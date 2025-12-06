import CompassTool from "../components/CompassTool";

export default function Compass() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Meaning Compass</h1>
      <p>Tools to align your identity, purpose, and values.</p>

      <CompassTool
        title="Identity Inquiry"
        description="Who were you this week? What parts of you showed up the most?"
        color="#0F4C81"
      />

      <CompassTool
        title="Purpose Pulse"
        description="Rate your sense of purpose this week (1–10)."
        color="#22C55E"
      />

      <CompassTool
        title="Value Alignment Check"
        description="Which action this week aligned most with your values?"
        color="#F97316"
      />
    </div>
  );
}
