"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { options } from "./options";
import LogoutButton from "../LogoutButton/page";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.logo}>SafeLogin</div>
      {status === "authenticated" && (
        <nav className={styles.menu}>
          <ul className={styles.options}>
            {options?.map(opt => (
              <li className={styles.item} key={opt.id}>
                <Link className={styles.link} href={opt.path}>
                  {opt.name}
                </Link>
              </li>
            ))}
          </ul>
          <LogoutButton />
        </nav>
      )}
    </div>
  );
}
