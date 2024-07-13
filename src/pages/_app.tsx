import { useEffect } from "react";
import { useRouter } from "nextra/hooks";
import { SUPPORTED_LOCALES } from "../data/translations";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language || "en";
    const supportedLocales = SUPPORTED_LOCALES.map((lang) => lang.locale);

    let detectedLocale = "en";
    const browserLangSplit = browserLang.split("-");

    if (browserLangSplit.length > 0) {
      const currentLang = browserLangSplit[0];

      if (supportedLocales.includes(currentLang)) {
        detectedLocale = currentLang;
      }
    }

    const currentPath = router.asPath;

    // Extract the current locale from the path
    const pathParts = currentPath.split("/");
    const currentLocale = pathParts[1];

    if (!supportedLocales.includes(currentLocale)) {
      // If no valid locale in path, prepend the detected locale
      const newPath = `/${detectedLocale}${currentPath}`;
      router.replace(newPath);
    }
  }, [router]);

  return <Component {...pageProps} />;
}
