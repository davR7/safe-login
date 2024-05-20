import Link from "next/link";
import styles from "./navbar.module.css";
import { options } from "./options";
import LogoutButton from "../LogoutButton/page";

export default function Navbar() {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.logo}>SafeLogin</div>
      <nav className={styles.menu}>
        <ul className={styles.options}>
          {options?.map((opt) => (
            <li className={styles.item} key={opt.id}>
              <Link className={styles.link} href={opt.path}>
                {opt.name}
              </Link>
            </li>
          ))}
        </ul>
        <LogoutButton />
      </nav>
    </div>
  );
}
