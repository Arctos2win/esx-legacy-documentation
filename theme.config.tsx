import React, { useState, useEffect } from 'react'
import { DocsThemeConfig, useTheme } from 'nextra-theme-docs'

function ThemedImage() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const _theme = theme == "system" ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  const images = {
    "light": "https://media.discordapp.net/attachments/1141377366589976747/1141377486089896027/dark.png",
    "dark": "https://media.discordapp.net/attachments/989963898570551296/1141297556555579443/white-800x800.png"
  }

  return (
    <div
      style={{
        paddingLeft: '130px',
        lineHeight: '80px',
        height: '80px',
        backgroundImage: `url('${images[_theme]}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: '80px',
      }}
    >
    </div>
  )
}

const config: DocsThemeConfig = {
  primaryHue: {
    light: 29,
    dark: 29
  },
  logo: ThemedImage,
  project: {
    link: 'https://github.com/esx-framework',
  },
  chat: {
    link: 'https://discord.esx-framework.org',
  },
  docsRepositoryBase: 'https://github.com/esx-framework/docs-rewrite/',
  footer: {
    text: <span>
      <a href="https://www.esx-framework.org/" target="_blank">
        Copyright © {new Date().getFullYear()} ESX. All rights reserved.
      </a>
      <br></br>
      <a href="https://www.oxygenserv.com/en/" target="_blank">
        Powered by Oxygenserv
      </a>
    </span>
  },
  useNextSeoProps() {
    return {
      title: 'ESX Documentation',
      description: 'ESX Documentation',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://documentation.esx-framework.org',
        title: 'ESX Documentation',
        description: 'ESX Documentation',
      },

      additionalMetaTags: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          name: 'keywords',
          content: 'ESX, docs, documentation, ESX docs, ESX documentation, fivem documentation, fivem, fivem server, ESX framework, fivem server management, fivem franework, fivem server tutorial, fivem server management, reworked',
        },
      ],
      additionalLinkTags: [
        { //can't understand how this pathing works so links needed
          rel: 'icon',
          href: 'https://media.discordapp.net/attachments/1141377366589976747/1141617235752919040/favicon.png?width=320&height=320',
        },
      ]
    }
  }
}

export default config
