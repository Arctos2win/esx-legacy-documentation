import { useRedirector } from "src/hooks/useRedirector";
import { AdBanner } from "src/components/ads/ad-banner";
import '../style.css';

export default function App({ Component, pageProps }) {
  const { loading, verifyLocale } = useRedirector();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <AdBanner />
      <Component {...pageProps} />
    </>
  );
}
