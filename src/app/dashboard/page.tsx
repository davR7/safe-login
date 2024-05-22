import type { Metadata } from "next";
import styles from "./dashboard.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOption";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SafeLogin",
  description: "Dashboard Page",
};

async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <main className={`${styles.container} container`}>
      <h2>Dashboard Page</h2>
      <p>Usuário Logado:</p>
      <div className={styles.user}>
        <div className={styles.wrapImage}>
          <Image className={styles.image} src={session?.user?.image ?? ""} fill alt="user image" priority />
        </div>
        <div className={styles.infoUser}>
          <h3 className={styles.name}>Nome: {session?.user?.name}</h3>
          <p className={styles.email}>Email: {session?.user?.email}</p>
          <p className={styles.roles}>Permissões: {session?.user?.roles?.join(", ")}</p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
