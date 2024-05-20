import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { user } from "./data";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "*Digite E-mail" },
        password: { label: "Senha", type: "password", placeholder: "*Digite Senha" },
      },
      async authorize(credentials) {
        if (user.email === credentials?.email && user.passsword === credentials?.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/login",
  },
};
