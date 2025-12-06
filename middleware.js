import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_PATHS = ["/login", "/api/login", "/_next", "/favicon.ico"];

// Read secret used to validate JWT
const SECRET = new TextEncoder().encode(process.env.NY_AUTH_SECRET);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow public paths
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Read cookie
  const token = req.cookies.get("ny_auth_token")?.value;

  if (!token) {
    // No session → redirect to login
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Validate token
    await jwtVerify(token, SECRET);
    return NextResponse.next(); // Allow access
  } catch (err) {
    console.error("Invalid token:", err);
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/breathing/:path*",
    "/journal/:path*",
    "/meaning/:path*",
    "/support/:path*",
    "/ai/:path*",
    "/api/protected/:path*",
  ],
};
