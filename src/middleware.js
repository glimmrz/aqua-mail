import { NextResponse } from "next/server";
import { getSiteStatus } from "./utils/status";

export async function middleware(request) {
  // Don't run middleware on static files
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const statRes = await getSiteStatus();

  if (
    statRes.response.payload?.status !== "active" &&
    request.nextUrl.pathname !== "/notice"
  ) {
    return NextResponse.redirect(new URL("/notice", request.url));
  }

  if (
    statRes.response.payload?.status === "active" &&
    request.nextUrl.pathname === "/notice"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
