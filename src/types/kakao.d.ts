type KakaoScrapShareSettings = {
  requestUrl: string;
};

interface Window {
  Kakao?: {
    init: (javascriptKey: string) => void;
    isInitialized: () => boolean;
    Share: {
      sendScrap: (settings: KakaoScrapShareSettings) => void;
    };
  };
}
