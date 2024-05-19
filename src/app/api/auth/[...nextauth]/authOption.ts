import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { user } from "./data";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Informe E-mail" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Informe Senha",
        },
      },
      async authorize(credentials) {
        if (
          user.email === credentials?.email &&
          user.passsword === credentials?.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
