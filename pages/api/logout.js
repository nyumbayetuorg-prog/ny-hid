export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    `ny_auth_token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
  );

  res.status(200).json({ success: true });
}
