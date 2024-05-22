import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`${styles.container} main`}>
      <h2>Home Page</h2>
      <p>Bem-vindo de volta :)</p>
      <Image src="/astronaut.gif" width={700} height={500} alt="astronaut" />
    </main>
  );
}
