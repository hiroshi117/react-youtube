import styles from "./Flexbox.module.css";
import { useEffect } from "react"; // React は型で使うので import は不要でもOK

const ITEMS = [
  { href: "https://x.com/", title: "X", description: "Xだよ" },
  {
    href: "https://www.instagram.com/",
    title: "Instagram",
    description: "Instagramだよ",
  },
  {
    href: "https://www.facebook.com/",
    title: "facebook",
    description: "facebookだよ",
  },
  {
    href: "https://www.tiktok.com/",
    title: "tiktok",
    description: "tiktokだよ",
  },
];

export default function Flexbox() {
  useEffect(() => {
    console.log("マウント");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("annマウント");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.flexbox}>
      {ITEMS.map((item) => {
        return (
          <a
            key={item.href}
            className={styles.item}
            href={item.href}
            target="blank"
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
