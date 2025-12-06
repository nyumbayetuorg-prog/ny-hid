import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const result = await res.json();

    if (result.success) {
      // 🚀 NEW REDIRECT LOGIC
      window.location.href = result.redirect;
      return;
    }

    setError("Incorrect password. Try again.");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f6f8",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "white",
          padding: "40px 30px",
          borderRadius: 12,
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: 28,
            marginBottom: 20,
            color: "#0F2C59",
            fontWeight: "bold",
          }}
        >
          NY-HID™ Login
        </h1>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
            Enter Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Role password…"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 8,
              border: "1px solid #ccc",
              marginBottom: 20,
              fontSize: 16,
            }}
          />

          {error && (
            <p style={{ color: "red", marginBottom: 16, fontWeight: 500 }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#0F2C59",
              color: "white",
              fontSize: 18,
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
