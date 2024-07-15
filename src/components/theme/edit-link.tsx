import { useTranslation } from "src/hooks/useTranslaction";

export function EditLink() {
  const t = useTranslation();

  return (
    <a href="https://github.com/esx-framework/docs-rewrite">{t.EDIT_TEXT}</a>
  );
}
