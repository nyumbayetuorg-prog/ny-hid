export default function BreathingExerciseCard({ title, duration, color, onStart }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        borderLeft: `8px solid ${color}`,
        cursor: "pointer",
        marginBottom: "20px"
      }}
      onClick={onStart}
    >
      <h3 style={{ margin: "0 0 10px", color }}>{title}</h3>
      <p style={{ margin: 0, fontSize: "15px" }}>Duration: {duration}</p>
    </div>
  );
}
