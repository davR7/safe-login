import styles from "./login.module.css";
import { Metadata } from "next";
import SigninForm from "@/ui/SigninForm";
import { authOptions } from "../api/auth/[...nextauth]/authOption";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SafeLogin",
  description: "Login Page",
};

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <main className={`${styles.container} container`}>
      <SigninForm />
    </main>
  );
}
