// // src/middleware.ts
// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const isLoggedIn = request.cookies.get("token");
//   const url = request.nextUrl.clone();

//   console.log("isLoggedIn,url", isLoggedIn, url);
//   if (!isLoggedIn && url.pathname.startsWith("/dashboard")) {
//     url.pathname = "/login";
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// // Protect routes starting with /dashboard
// export const config = {
//   matcher: ["/dashboard/:path*"],
// };

// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const loginPath = "/login";
  const dashboardPath = "/dashboard";

  // If user is not logged in, redirect them to the login page
  if (!token && !request.nextUrl.pathname.startsWith(loginPath)) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  // If user is logged in and tries to access login, redirect to dashboard
  if (token && request.nextUrl.pathname.startsWith(loginPath)) {
    return NextResponse.redirect(new URL(dashboardPath, request.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes
// export const config = {
//   matcher: [
//     // Middleware applies to all routes except these patterns
//     "/((?!api/|_next/|assets/|favicon.ico$|.*.(jpg|jpeg|png|svg|css|js)$).*)",
//   ],
// };

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
