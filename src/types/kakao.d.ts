type KakaoTextShareSettings = {
  objectType: "text";
  text: string;
  link: {
    webUrl: string;
    mobileWebUrl: string;
  };
};

interface Window {
  Kakao?: {
    init: (javascriptKey: string) => void;
    isInitialized: () => boolean;
    Share: {
      sendDefault: (settings: KakaoTextShareSettings) => void;
    };
  };
}
