import NextAuth, { DefaultUser } from "next-auth";
import JWT from "next-auth/jwt";
import { UserRole } from "@/enums/UserRole";

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & { roles: UserRole[] | null };
  }
  interface User extends DefaultUser {
    roles?: UserRole[] | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    roles?: UserRole[] | null;
  }
}
