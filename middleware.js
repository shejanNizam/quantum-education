import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const session = req.cookies.get("session");

  // Restrict access to `/dashboard` if user is not logged in
  if (!session && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

// Apply middleware to protect `/dashboard`
export const config = {
  matcher: ["/dashboard/:path*"],
};
