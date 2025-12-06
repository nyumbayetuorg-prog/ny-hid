export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "60px 40px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "20px", color: "#0F4C81" }}>
        NY-HID™ Calm Sanctuary
      </h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: "1.6",
          marginBottom: "40px",
          color: "#444",
        }}
      >
        Your weekly self-mastery dashboard.  
        Access your sanctuary modules, insights, and healing practice tools.
      </p>

      <a
        href="/dashboard"
        style={{
          padding: "14px 28px",
          background: "#0F4C81",
          color: "white",
          borderRadius: "8px",
          fontSize: "18px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Enter Dashboard →
      </a>
    </div>
  );
}
