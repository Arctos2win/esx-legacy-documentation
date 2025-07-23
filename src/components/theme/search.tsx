import { useTranslation } from "src/hooks/useTranslation";

export function Search() {
  const { SEARCH_PLACEHOLDER } = useTranslation();

  return SEARCH_PLACEHOLDER + " (Ctrl+K)";
}
