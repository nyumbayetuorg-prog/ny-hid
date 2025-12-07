// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const role = req.cookies.get("ny_role")?.value;
  const url = req.nextUrl.pathname;

  // Public paths allowed without login
  if (url === "/login" || url.startsWith("/api/login")) {
    return NextResponse.next();
  }

  // No role cookie? Redirect to login
  if (!role) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ROLE ACCESS CONTROL
  if (url.startsWith("/dashboard") && role !== "founder") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (url.startsWith("/creative") && !["creative", "founder"].includes(role)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (url.startsWith("/ops") && !["ops", "founder"].includes(role)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Otherwise allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/creative/:path*", "/ops/:path*", "/login", "/"],
};
