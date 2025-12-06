export default function Support() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Support Log</h1>
      <p>Share your challenge so we can guide your healing path.</p>

      <form style={{ maxWidth: "500px", display: "flex", flexDirection: "column" }}>
        <label>What challenge did you face?</label>
        <textarea style={{ padding: "10px", marginBottom: "20px" }} />

        <label>What support do you need?</label>
        <textarea style={{ padding: "10px", marginBottom: "20px" }} />

        <label>Urgency Level</label>
        <select style={{ padding: "10px", marginBottom: "20px" }}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button
          style={{
            padding: "12px",
            background: "#0F4C81",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer"
          }}
          type="button"
          onClick={() => alert("Support request logged (local-storage only).")}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
