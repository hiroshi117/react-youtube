import styles from "../components/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">TOP</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
