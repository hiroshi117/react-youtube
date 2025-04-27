"use client";

import Image from "next/image";
import Flexbox from "../components/Flexbox";
import styles from "./page.module.css";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{count}</h1>
        <button onClick={handleClick}>ボタン</button>
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
