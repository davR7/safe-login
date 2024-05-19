import type { Metadata } from "next";
import styles from "./dashboard.module.css";

export const metadata: Metadata = {
  title: "SafeLogin",
  description: "Dashboard Page",
};

export default function Dashboard() {
  return (
    <main className={`${styles.container} container`}>
      <h2>Dashboard Page</h2>
    </main>
  );
}
