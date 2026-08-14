import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          별일있음
        </Link>
        <p className={styles.description}>
          별일 없던 하루를 쓸데없이 거창하고 웃기게 만들어드려요.
        </p>

        <nav className={styles.links} aria-label="서비스 정책">
          <Link href="/terms">이용약관</Link>
          <Link href="/privacy">개인정보처리방침</Link>
        </nav>

        <p className={styles.projectNotice}>&nbsp;</p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} 별일있음
        </p>
      </div>
    </footer>
  );
}
