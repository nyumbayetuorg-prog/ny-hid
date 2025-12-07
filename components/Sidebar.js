import Link from "next/link";

export default function Sidebar() {
  async function logout() {
    await fetch("/api/logout");
    window.location.href = "/login";
  }

  return (
    <div className="sidebar">
      <h2>NY-HID™</h2>

      <Link href="/dashboard">Founder Dashboard</Link>
      <Link href="/creative">Creative Workspace</Link>
      <Link href="/ops">Ops Workspace</Link>

      <hr style={{ margin: "24px 0", opacity: 0.2 }} />

      <button
        onClick={logout}
        className="ny-button"
        style={{ width: "100%", background: "#c0392b", marginTop: "10px" }}
      >
        Logout
      </button>
    </div>
  );
}
