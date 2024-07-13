import { useConfig } from "nextra-theme-docs";
import { useTranslation } from "src/hooks/useTranslaction";

export function Head() {
  const t = useTranslation();
  const config = useConfig();

  const title = config?.title ? `${t.title} - ${config.title}` : t.title;

  return title && (
    <>
      <title>{title}</title>
      <meta name="description" content={t.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:url"
        content="https://documentation.esx-framework.org"
      />
      <meta property="og:title" content={t.title} />
      <meta property="og:description" content={t.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={t.keywords} />
      <link
        rel="icon"
        href="https://media.discordapp.net/attachments/1141377366589976747/1141617235752919040/favicon.png?width=320&height=320"
      />
    </>
  );
}
