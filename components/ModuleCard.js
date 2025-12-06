export default function ModuleCard({ title, description }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "white",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p>{description}</p>

      <button
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          background: "#0F4C81",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Open
      </button>
    </div>
  );
}
