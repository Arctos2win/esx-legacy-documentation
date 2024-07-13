import { useTranslation } from "src/hooks/useTranslaction";

export function Search() {
  const { SEARCH_PLACEHOLDER } = useTranslation();

  return SEARCH_PLACEHOLDER;
}
