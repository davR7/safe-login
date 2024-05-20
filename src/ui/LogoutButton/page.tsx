"use client";

import { signOut } from "next-auth/react";
import styles from "./logoutbutton.module.css";

export default function LogoutButton() {
  return (
    <button className={`${styles.container}`} onClick={() => signOut()}>
      Sair
    </button>
  );
}
