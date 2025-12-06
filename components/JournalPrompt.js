export default function JournalPrompt({ title, prompt, color }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "20px",
        borderLeft: `8px solid ${color}`,
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
      }}
    >
      <h3 style={{ margin: 0, color }}>{title}</h3>
      <p style={{ marginTop: "10px", fontSize: "15px" }}>{prompt}</p>
    </div>
  );
}
