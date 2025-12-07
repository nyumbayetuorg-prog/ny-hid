// pages/api/logout.js
import { serialize } from "cookie";

export default function handler(req, res) {
  const cookie = serialize("ny_role", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  res.setHeader("Set-Cookie", cookie);

  return res.redirect("/login");
}
