export default function SmartPanel({ data }) {
  if (!data) return null;

  return (
    <div className="output-box" style={{ marginTop: 20 }}>
      <h3 style={{ color: "#4b5cc4" }}>NY Brain – Live Signal</h3>

      <p><strong>National Emotional Pulse:</strong> {data.emotional}</p>
      <p><strong>Pipeline Pressure:</strong> {data.pipeline}</p>
      <p><strong>Creative Priority:</strong> {data.creative}</p>
      <p><strong>Ops Pressure:</strong> {data.ops}</p>

      <hr style={{ margin: "15px 0" }} />

      <p style={{ fontStyle: "italic" }}>{data.message}</p>
    </div>
  );
}
