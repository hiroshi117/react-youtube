import styles from "../components/Flexbox.module.css";

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
