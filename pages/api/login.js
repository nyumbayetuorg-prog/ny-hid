// pages/api/login.js
import { serialize } from "cookie";

export default function handler(req, res) {
  const { role, password } = req.body;

  // VALIDATION: role exists
  if (!role || !password) {
    return res.status(400).json({ success: false, error: "Missing fields." });
  }

  // ROLE PASSWORDS
  const passwords = {
    founder: "NYFounder#1/2025!",
    creative: "NYCreate#1/2025!",
    ops: "NYOps#1/2025!",
  };

  // INCORRECT PASSWORD
  if (password !== passwords[role]) {
    return res.status(401).json({ success: false, error: "Incorrect password." });
  }

  // SET COOKIE
  const cookie = serialize("ny_role", role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 6, // 6 hours
  });

  res.setHeader("Set-Cookie", cookie);

  // REDIRECT TARGETS
  cif (role === "founder") {
  return res.status(200).json({ success: true, redirect: "/dashboard" });
}
if (role === "creative") {
  return res.status(200).json({ success: true, redirect: "/creative" });
}
if (role === "ops") {
  return res.status(200).json({ success: true, redirect: "/ops" });
}

// fallback — rare
return res.status(200).json({ success: true, redirect: "/" });
