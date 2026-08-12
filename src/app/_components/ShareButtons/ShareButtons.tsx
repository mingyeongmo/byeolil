"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ShareButtons.module.scss";

type ShareButtonProps = {
  text: string;
};

export default function ShareButtons({ text }: ShareButtonProps) {
  const [copyStatus, setCopyStatus] = useState("");

  const handleShareToKakao = () => {
    const kakao = window.Kakao;
    const javascriptKey = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY;

    if (!kakao || !javascriptKey) {
      return;
    }

    if (!kakao.isInitialized()) {
      kakao.init(javascriptKey);
    }

    const url = window.location.href;

    kakao.Share.sendDefault({
      objectType: "text",
      text,
      link: {
        webUrl: url,
        mobileWebUrl: url,
      },
    });
  };

  const handleShareToX = () => {
    const url = window.location.href;
    const shareText = `${text}\n\n${url}`;

    const shareUrl =
      `https://x.com/intent/post` + `?text=${encodeURIComponent(shareText)}`;

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

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
            onClick={handleShareToKakao}
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
            onClick={handleShareToX}
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
