import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  primaryHue: {
    dark: 30,
    light: 30,
  },
  logo: <span className="nx-font-bold">Fivemanage</span>,
  project: {
    link: 'https://github.com/fivemanage/docs',
  },
  chat: {
    link: 'https://discord.gg/wUgAGHnucZ',
  },
  docsRepositoryBase: 'https://github.com/fivemanage/docs',
  footer: {
    text: 'Fivemanage Docs',
  },
  useNextSeoProps() {
    return {
      title: 'Fivemanage Docs',
      description: 'Fivemanage Docs',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://docs.fivemanage.com',
        title: 'Fivemanage Docs',
        description: 'Fivemanage Docs',
      },
      twitter: {
        handle: '@fivemanage',
        site: '@fivemanage',
        cardType: 'summary_large_image',
      },
      additionalMetaTags: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
        {
            name: 'keywords',
            content: 'fivemanage, docs, documentation, fivemanage docs, fivemanage documentation, fivem analytics, fivem, fivem server, fivem server analytics, fivem server management, fivem server monitoring, fivem server monitoring, fivem server management',
        },
      ]
    }
  }
}

export default config
