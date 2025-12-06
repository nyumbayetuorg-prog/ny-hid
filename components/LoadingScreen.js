import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0F2C59",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "2rem",
        fontWeight: "bold",
        opacity: fade ? 0 : 1,
        transition: "opacity 1s ease",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      NY-HID™ Loading…
    </div>
  );
}
