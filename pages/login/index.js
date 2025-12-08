// pages/login.js

import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useError("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "founder" && password === process.env.NEXT_PUBLIC_NY_FOUNDERS_PASS) {
      router.push("/dashboard-founder");
    }
    else if (role === "creative" && password === process.env.NEXT_PUBLIC_NY_CREATIVES_PASS) {
      router.push("/creative");
    }
    else if (role === "ops" && password === process.env.NEXT_PUBLIC_NY_OPS_PASS) {
      router.push("/ops");
    }
    else {
      setError("Incorrect role or password.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Team Login</h1>

      <form onSubmit={handleLogin} style={styles.form}>
        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.input}>
          <option value="">Select Role</option>
          <option value="founder">Founder</option>
          <option value="creative">Creative</option>
          <option value="ops">Ops</option>
        </select>

        <label>Password</label>
        <input
          type="password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "420px",
    margin: "80px auto",
    padding: "24px",
    borderRadius: "12px",
    background: "#f4f9fa",
    border: "1px solid #d6e7e7",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  btn: {
    padding: "12px",
    borderRadius: "8px",
    background: "#0f4c81",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
};
