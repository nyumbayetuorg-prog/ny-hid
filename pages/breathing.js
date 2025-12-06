import Sidebar from "../components/Sidebar";

export default function Breathing() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "40px", width: "100%" }}>
        <h1 style={{ fontSize: "42px", color: "#0F4C81", marginBottom: "20px" }}>
          Breathing Sanctuary
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", lineHeight: "1.8" }}>
          Guided breathing practices to restore calm, regulate your system, and reconnect
          with your inner sanctuary.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              background: "#FF7A59",
              color: "white",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Start a Breathing Exercise
          </a>
        </div>
      </main>
    </div>
  );
}
