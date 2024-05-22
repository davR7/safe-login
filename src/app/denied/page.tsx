import styles from "./denied.module.css";

export default function Denied() {
  return (
    <main className={`${styles.container} container`}>
      <h2 className={styles.status}>403</h2>
      <h3 className={styles.message}>Acesso não Permitido!</h3>
      <p className={styles.details}>Você não tem permisão para vizualizar essa pagina</p>
    </main>
  );
}
