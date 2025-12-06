import React from "react";

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>NY-HID Dashboard</h1>

      <iframe
        src="https://ny-hid.vercel.app"
        style={styles.iframe}
        frameBorder="0"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: "20px",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "20px",
    color: "#222",
  },
  iframe: {
    width: "100%",
    height: "85vh",
    borderRadius: "10px",
    border: "1px solid #ddd",
    overflow: "hidden",
  },
};
