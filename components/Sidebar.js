import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const navItem = (label, path) => {
    const active = router.pathname === path;

    return (
      <a
        href={path}
        style={{
          padding: "12px 0",
          fontSize: "18px",
          textDecoration: "none",
          color: active ? "#0F4C81" : "white",
          fontWeight: active ? "bold" : "normal",
          background: active ? "rgba(255,255,255,0.2)" : "transparent",
          borderRadius: "8px",
          paddingLeft: "12px",
          transition: "0.2s",
        }}
      >
        {label}
      </a>
    );
  };

  return (
    <aside
      style={{
        width: "260px",
        background: "#0F4C81",
        color: "white",
        padding: "30px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontWeight: "bold", fontSize: "26px", marginBottom: "40px" }}>
        NY-HID™
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {navItem("Calm Sanctuary", "/dashboard")}
        {navItem("Breathing Room", "/breathing")}
        {navItem("Journaling Space", "/journal")}
        {navItem("Meaning Compass", "/compass")}
        {navItem("Support Log", "/support")}
      </nav>
    </aside>
  );
}
