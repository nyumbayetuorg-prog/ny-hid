export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>NY-HID™ System</h1>
      <p>Welcome to Week 1 Prototype.</p>
      <a
        href="/dashboard"
        style={{
          padding: "10px 20px",
          background: "#0F4C81",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none"
        }}
      >
        Enter Dashboard
      </a>
    </div>
  );
}
