import { useTranslation } from "src/hooks/useTranslaction";

export function Footer() {
  const t = useTranslation();
  
  return (
    <span>
      <a href="https://www.esx-framework.org/" target="_blank">
        {t.copyright} {new Date().getFullYear()} ESX. {t.allRightsReserved}
      </a>
      <br></br>
      <a href="https://www.oxygenserv.com/en/" target="_blank">
        {t.poweredBy} Oxygenserv
      </a>
    </span>
  );
}
