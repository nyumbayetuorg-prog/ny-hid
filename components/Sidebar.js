// components/Sidebar.js

import React from "react";

export default function Sidebar({ currentPage = "Home", onNavigate }) {
  const menuItems = [
    { label: "Calm Sanctuary", key: "home" },
    { label: "Breathing Room", key: "breathing" },
    { label: "Journaling Space", key: "journal" },
    { label: "Meaning Compass", key: "meaning" },
    { label: "Support Log", key: "support" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.logo}>NY-HID™</div>

      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <div
            key={item.key}
            onClick={() => onNavigate && onNavigate(item.key)}
            style={{
              ...styles.navItem,
              ...(currentPage === item.key ? styles.active : {}),
            }}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  );
}

const styles = {
  container: {
    width: "250px",
    background: "#0F4C81", // NY deep blue
    color: "white",
    height: "100vh",
    padding: "25px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },

  logo: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "50px",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  navItem: {
    fontSize: "18px",
    cursor: "pointer",
    padding: "10px 8px",
    borderRadius: "6px",
    transition: "0.25s ease",
  },

  active: {
    background: "rgba(255, 255, 255, 0.25)",
    fontWeight: "bold",
  },
};
