import { useEffect, useState } from "react";
import { useTranslation } from "src/hooks/useTranslaction";

export function ScrollToTop() {
  const t = useTranslation();
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function checkScrollPosition() {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return visible ? (
    <button
      onClick={scrollToTop}
      aria-hidden="true"
      className="_flex _items-center _gap-1.5 _transition _opacity-100 disabled:_opacity-0 _text-xs _font-medium _text-gray-500 hover:_text-gray-900 dark:_text-gray-400 dark:hover:_text-gray-100 contrast-more:_text-gray-800 contrast-more:dark:_text-gray-50"
    >
      {t?.BACK_TO_TOP}

      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="_-rotate-90 _size-4 _border _rounded-full _border-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>
  ) : (
    <></>
  );
}
