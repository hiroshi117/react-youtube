"use client";
import Image from "next/image";
import Flexbox from "../components/Flexbox";
import styles from "./page.module.css";
import { useCallback } from "react";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <a href="/about" onClick={handleClick}>
          ボタン
        </a>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Flexbox />
      </main>
    </div>
  );
}
