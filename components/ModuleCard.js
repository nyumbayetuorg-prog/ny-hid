export default function ModuleCard({ title, description, color = "#0F4C81", onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
        cursor: "pointer",
        borderLeft: `8px solid ${color}`,
        transition: "0.3s",
      }}
    >
      <h3 style={{ margin: "0 0 10px", color: color }}>{title}</h3>

      <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.5", color: "#222" }}>
        {description}
      </p>
    </div>
  );
}
