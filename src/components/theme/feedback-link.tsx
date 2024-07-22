import { useTranslation } from "src/hooks/useTranslation";

export function FeedbackLink() {
  const t = useTranslation();

  return <>{t.FEEDBACK}</>;
}
