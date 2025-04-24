"use client";

import Image from "next/image";
import Flexbox from "../components/Flexbox";
import styles from "./page.module.css";
import { useCallback } from "react"; // React は型で使うので import は不要でもOK

const foo = 1;

const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  console.log(e.currentTarget.href);
  alert(foo);
}, []);

export default function Home() {
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
