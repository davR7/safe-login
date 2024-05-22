import { NextAuthMiddlewareOptions, NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { UserRole } from "./enums/UserRole";
import { NextResponse } from "next/server";

const middleware = (req: NextRequestWithAuth) => {
  const isAdmin = req.nextauth.token?.roles?.some(r => r === UserRole.ADMIN);
  const isPagePrivate = req.nextUrl.pathname.startsWith("/dashboard");

  if (isPagePrivate && !isAdmin) {
    return NextResponse.rewrite(new URL("/denied", req.url));
  }
};

const middlewareOptions: NextAuthMiddlewareOptions = {
  callbacks: {
    authorized({ token }) {
      return !!token;
    },
  },
};

export default withAuth(middleware, middlewareOptions);

export const config = { matcher: ["/", "/blog", "/dashboard"] };
