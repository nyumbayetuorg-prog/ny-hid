import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Paths that should NOT require authentication
const PUBLIC_PATHS = ["/login", "/api/login", "/_next", "/favicon.ico"];

// Decode JWT using your AUTH SECRET
const SECRET = new TextEncoder().encode(process.env.NY_AUTH_SECRET);

// List of all protected routes
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/creative/:path*",
    "/ops/:path*",
    "/breathing/:path*",
    "/journal/:path*",
    "/meaning/:path*",
    "/support/:path*",
    "/ai/:path*",
  ],
};

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow public pages (login, api/login, assets)
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const token = req.cookies.get("ny_auth_token")?.value;

  if (!token) {
    // Not logged in → redirect to login
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // Validate token signature + expiry
    const { payload } = await jwtVerify(token, SECRET);

    // OPTIONAL: Enforce session timeout (8 hours)
    const MAX_AGE_HOURS = 8;
    const nowInSeconds = Date.now() / 1000;

    if (nowInSeconds - payload.iat > MAX_AGE_HOURS * 3600) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }

    // Optional: role-based protection
    const requiredRole = getRequiredRole(pathname);

    if (requiredRole && payload.role !== requiredRole) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next(); // Allow access

  } catch (error) {
    console.error("JWT Verification Failed:", error);
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
}

// Optional role-based routing rules
function getRequiredRole(pathname) {
  if (pathname.startsWith("/dashboard")) return "founder";
  if (pathname.startsWith("/creative")) return "creative";
  if (pathname.startsWith("/ops")) return "ops";
  return null;
}
