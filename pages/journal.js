import Sidebar from "../components/Sidebar";

export default function Journal() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "40px", width: "100%" }}>
        <h1 style={{ fontSize: "42px", color: "#0F4C81", marginBottom: "20px" }}>
          Journaling Space
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", lineHeight: "1.8" }}>
          A private space to reflect, write, and process your inner experiences as you
          move through healing.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              background: "#8C6FF7",
              color: "white",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Start Journaling
          </a>
        </div>
      </main>
    </div>
  );
}
