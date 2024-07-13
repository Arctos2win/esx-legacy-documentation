import { useTranslation } from "src/hooks/useTranslaction";

export function FeedbackLink() {
  const t = useTranslation();

  return (
    <>
      {t.FEEDBACK}
    </>
  );
}