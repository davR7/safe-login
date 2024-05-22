import type { Metadata } from "next";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "SafeLogin",
  description: "Blog Page",
};

export default function Blog() {
  return (
    <main className={`${styles.container} container`}>
      <h2>Blog Page</h2>
      <p>Você ainda não criou conteúdo...</p>
    </main>
  );
}
