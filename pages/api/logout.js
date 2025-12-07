export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    "ny_auth_token=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict"
  );
  res.status(200).json({ success: true });
}
