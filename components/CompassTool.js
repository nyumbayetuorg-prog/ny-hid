export default function CompassTool({ title, description, color }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        borderLeft: `8px solid ${color}`,
        marginBottom: "20px"
      }}
    >
      <h3 style={{ margin: 0, color }}>{title}</h3>
      <p style={{ marginTop: "10px" }}>{description}</p>
    </div>
  );
}
