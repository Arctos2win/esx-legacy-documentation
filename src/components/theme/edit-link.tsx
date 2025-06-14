import { useTranslation } from "src/hooks/useTranslation";

export function EditLink() {
  const t = useTranslation();

  return (
    <a href="https://github.com/esx-framework/esx-legacy-documenation">{t.EDIT_TEXT}</a>
  );
}
