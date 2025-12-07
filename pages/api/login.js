// pages/login.js
import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("founder");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, password }),
    });

    const result = await res.json();

    if (result.success) {
      // Save role in browser memory
      localStorage.setItem("ny_role", role);

      // Redirect to correct dashboard
      window.location.href = result.redirect;
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F4C81]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-6 text-[#0F4C81]">
          Nyumba Yetu Workspace Login
        </h1>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selector */}
          <div>
            <label className="block mb-1 font-semibold">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="founder">Founder</option>
              <option value="creative">Creative</option>
              <option value="ops">Operations</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your role password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#0F4C81] text-white p-3 rounded hover:bg-[#0d3f6b]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
