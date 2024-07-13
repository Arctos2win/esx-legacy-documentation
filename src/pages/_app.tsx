import { useRedirector } from "src/hooks/useRedirector";

export default function App({ Component, pageProps }) {
  const { loading, verifyLocale } = useRedirector();

  return <Component {...pageProps} />;
}
