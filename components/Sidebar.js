export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        background: "#0F4C81",
        color: "white",
        padding: "30px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h2>NY-HID™</h2>

      <nav style={{ marginTop: "40px", lineHeight: "2.2" }}>
        <a href="/dashboard" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </a>
        <br />
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Week Modules
        </a>
        <br />
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Insights
        </a>
        <br />
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Logout
        </a>
      </nav>
    </aside>
  );
}
