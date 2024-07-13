import { useRouter } from 'nextra/hooks';
import { TRANSLATIONS } from 'src/data/translations';

export function useTranslation() {
  const { locale } = useRouter();

  return TRANSLATIONS[locale] || TRANSLATIONS.en;
}