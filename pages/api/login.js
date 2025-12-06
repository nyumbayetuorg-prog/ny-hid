import { authenticateUser, generateToken } from "../../lib/auth";
import { serialize } from "cookie";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { password } = req.body;

  const user = authenticateUser(password);
  if (!user) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = generateToken({
    role: user.role,
  });

  // Set cookie
  const cookie = serialize("ny_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  res.setHeader("Set-Cookie", cookie);

  return res.status(200).json({
    success: true,
    role: user.role,
  });
}
let redirectPath = "/dashboard";

if (role === "creative") redirectPath = "/creative";
if (role === "ops") redirectPath = "/ops";

return res.status(200).json({ success: true, redirect: redirectPath });
