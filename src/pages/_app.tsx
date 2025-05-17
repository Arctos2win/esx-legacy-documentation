import { useRedirector } from "src/hooks/useRedirector";
import '../style.css';

export default function App({ Component, pageProps }) {
  const { loading, verifyLocale } = useRedirector();

  if (loading) return <div>Loading...</div>;

  return <Component {...pageProps} />;
}
