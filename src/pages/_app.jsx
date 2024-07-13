import { useEffect } from "react";
import { useRouter } from "nextra/hooks";
import { SUPPORTED_LOCALES } from "../data/translations";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    const supportedLocales = SUPPORTED_LOCALES.map((lang) => lang.locale);

    let detectedLocale = "en";
    const [currentLang] = browserLang ? browserLang.split("-") : detectedLocale;

    if (supportedLocales.includes(currentLang)) {
      detectedLocale = currentLang;
    }

    if (router.pathname === "/en") {
      router.replace(`/${detectedLocale}`);
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
