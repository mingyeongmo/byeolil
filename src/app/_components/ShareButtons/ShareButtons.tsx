"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ShareButtons.module.scss";

export default function ShareButtons() {
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus("링크를 복사했어요.");
    } catch {
      setCopyStatus("링크를 복사하지 못했어요.");
    }

    window.setTimeout(() => {
      setCopyStatus("");
    }, 2000);
  };

  return (
    <>
      <ul className={styles.shareButtons}>
        <li>
          <button
            className={styles.shareButton}
            type="button"
            aria-label="카카오톡으로 공유하기"
          >
            <Image
              src="/icons/kakao.png"
              alt=""
              width={48}
              height={48}
              aria-hidden="true"
            />
          </button>
        </li>
        <li>
          <button
            className={`${styles.shareButton} ${styles.xButton}`}
            type="button"
            aria-label="X로 공유하기"
          >
            <Image
              className={styles.xIcon}
              src="/icons/twitter.png"
              alt=""
              width={36}
              height={36}
              aria-hidden="true"
            />
          </button>
        </li>
        <li>
          <button
            className={`${styles.shareButton} ${styles.linkButton}`}
            type="button"
            aria-label="링크 복사하기"
            onClick={handleCopyLink}
          >
            <Image
              className={styles.linkIcon}
              src="/icons/share.png"
              alt=""
              width={22}
              height={22}
              aria-hidden="true"
            />
          </button>
        </li>
      </ul>
      {copyStatus && (
        <p className={styles.copyToast} role="status">
          {copyStatus}
        </p>
      )}
    </>
  );
}
