import { useState } from "react";
import Router from "next/router";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // Redirect based on role
      if (data.role === "founder") {
        Router.push("/dashboard");
      } else if (data.role === "creative") {
        Router.push("/dashboard");
      } else if (data.role === "ops") {
        Router.push("/dashboard");
      }

    } catch (err) {
      setError("Unexpected error. Try again.");
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F3B63] px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#0F3B63] mb-6">
          NY-HID™ Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Enter Your Role Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0F3B63] outline-none"
              placeholder="Password…"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-600 text-center font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#0F3B63] text-white font-semibold rounded-lg hover:bg-[#0c2e4d] transition"
          >
            {loading ? "Verifying…" : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-4">
          Powered by Nyumba Yetu • Internal Access Only
        </p>
      </div>
    </div>
  );
}
