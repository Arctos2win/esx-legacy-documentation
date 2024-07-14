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
        href="https://lh3.googleusercontent.com/fife/ALs6j_G7DQkIj5f3meHkGos4OjcXlseHxj33a8-i8rRfQENnY71BAqAr9Y6w3qQzHbSjAFL7dm98HdOAOGtdLjPHv9hTIeqfJwWVqbqWH3FxmTBallwEytmQdEmk61WLcp32xbUM4lfaQtk3KIDA4epU0SbeZ0JC1mpAll24mJZBNB-EKsubSzbpB702oAYY-nwHOoY1AOU_2B85Cux0QVBM9grYOe2ir0czNMQSwW7TztGnSkZuKP-yG21ZDqzfscCGzZwurgURH2X7GYLCEdhQ22Z4oilWSpv6io7Df-ai6NJgz2-GOEBRsvbCx4Twlzi2LrauhqxUBCdWPYyV5I42z5NxinHPGoZCQlaikrnj423f-H8i5Woh1Z7JGUzraSSQPgE48IzhZzmlglhTV8opdaCKK36yeXIXnKoxGT5phRfh_lwCZcqhWfDe--1HWH_IyN19KesxKAjH-EiQgH1O9epZekcKY7u-uTS7PJ281dfvIs8a_F5LhV1uXJbKQ-KyaaFEiaN1rPLSMGk3lVyoavo5lGyjBjLjeIODo5Ol2PhNIWdVVrD9EtfB-4el2fOFZ3jNMxrkazi3S12y57uXkZoD9r7IqBNXUd79H5CqqHRrtMvsQ--UQYko58wnFN7kO2yyMaPOOfpiwR5NtfwAFygn7YvxFufAoUCYL5RqOao7OO4JHphw2sRa6gf1sNQhq8cd4dhjky7hEJAKsU32YumgAqnKmuSQn2yOdw027Q3KEmop16FQMdYee-KK1WKV1lRClZbCkDGzr9nBX8Rtp0bmFYfoYyNaRIQ3GffAYvIxOVPyErdTZe9slkCl2NYJXdzRHMRe7c5pPzw1D9_ojZHqOH6Pm8qgpLrKqinXPq1aYT9SFNLopWBZpSKg9zA-TcZ6lRmziuentqisWMkgyyvjmDNr3oKmNmVeec1UKFl784p8chJ8WeqUc2H5yYujZhlu5-eQaUj0JMzVph5hsBjsEPGOGvq2MEVUFsLN_gLlE71JrXWKx7U-EpEPz2vkRGjpqQTiFz1gtZpzalBJHMCpMpNbHZk87ZAzqLQkjxg_pEauieQlNZBDFoPocBh5rNjbQ1y1E9IpMzVfJcEouM6znr9u_ssWoKIHuEgBkQM-BTIDdWGju5BDg4D-EUkzBv73pPh6lAinTg-05beru81p2DGxvHMtpOzboA_oqGdufHMbG-dOdVGS3gexQuNONXA-TPjATW2dySMAEVa-ZXq6XXhB3ePKFEtNnUlSJrZWQhxttxbv-VRLIlH_oQb7AR73KA_HkinM3fiDdpapV7cCKOQ_Q3gPJ2aTRLdzT_iJR605deofqckhP75wlQrwO-Q4ugdncsgIVnOu29INKK0qO85WFMhOVxnsldcdiDrC0elZgIqg_7rG7boFSZEvUE7n6izXmzfTcdJuBz3mUqvptZdoFnWMdm0BnlhYyosgFmWZ7za4OK6kxTION7PkjDHTdhqn0860PT8D-MsWTHTBxkvICoPHZm-eSQEyNiZkhaF4XehtZKY0cd8BYpq2PCSkKN-ZnanCl4Ee9Sm437aFXznMnY2fXtcCHuIa8VlRRJzE0iZ9SkYs9Qiy6XCsiDis-MSLNKMDHoTlAIXhSSo-rFsQT3nn-Cen_nEdaS1urdvKO-9jqVXBZGDvqc5S-VpAAGPvaaxU4Dz5dN_pQfJKioxTn_kaghtL_E1ZdI0F3GmqZkeQnQ4xFMjLU3jNcaGqL8clhMzrkvlbC4ZLGbOdStEr=w1920-h973"
      />
    </>
  );
}
