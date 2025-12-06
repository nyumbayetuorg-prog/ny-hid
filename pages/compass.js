import Sidebar from "../components/Sidebar";

export default function MeaningCompass() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "40px", width: "100%" }}>
        <h1 style={{ fontSize: "42px", color: "#0F4C81", marginBottom: "20px" }}>
          Meaning Compass
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", lineHeight: "1.8" }}>
          Tools, insights, and guided prompts to help you reconnect with purpose, values,
          and direction.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              background: "#00A86B",
              color: "white",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Explore Meaning Tools
          </a>
        </div>
      </main>
    </div>
  );
}
