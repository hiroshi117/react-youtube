import styles from "../components/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.anchor} href="/">
        TOP
      </Link>
      <Link className={styles.anchor} href="/about">
        About
      </Link>
    </header>
  );
}
