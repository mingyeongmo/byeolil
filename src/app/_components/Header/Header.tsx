import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="별일있음 홈">
        별일있음
      </Link>
    </header>
  );
}
