import { useRouter } from "nextra/hooks";
import { useTranslation } from "src/hooks/useTranslaction";

export function TimeStamp({ timestamp }) {
  const { locale } = useRouter();
  const t = useTranslation();
  const date = new Date(timestamp);

  const formattedDate = locale === 'fr'
  ? date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
  : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
    {t.TIMESTAMP} {formattedDate}
    </>
  )
}