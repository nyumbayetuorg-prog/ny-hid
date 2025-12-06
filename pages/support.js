import Sidebar from "../components/Sidebar";

export default function SupportLog() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "40px", width: "100%" }}>
        <h1 style={{ fontSize: "42px", color: "#0F4C81", marginBottom: "20px" }}>
          Support Log
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", lineHeight: "1.8" }}>
          Track your support needs, upcoming sessions, and personalized resources.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              background: "#D63384",
              color: "white",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Log Support Need
          </a>
        </div>
      </main>
    </div>
  );
}
