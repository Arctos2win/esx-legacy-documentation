import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

//probably needs to be rewritten better
function ThemedImage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  var src
  
//This is needed to avoid hydration error
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }

  switch (resolvedTheme) {
    case 'light':
      src = <div 
        style={{
          paddingLeft: '130px', 
          lineHeight: '118px', 
          backgroundImage: `url('https://media.discordapp.net/attachments/1141377366589976747/1141377486089896027/dark.png?width=593&height=593')`, 
          backgroundRepeat:  "no-repeat", 
          backgroundSize: '120px',
          //doesn't actually suppress anything dunno why
        }} suppressHydrationWarning = {true}> ESX Documentation</div>
      break
    case 'dark':
      src = <div 
        style={{
          paddingLeft: '130px', 
          lineHeight: '118px', 
          backgroundImage: `url('https://media.discordapp.net/attachments/989963898570551296/1141297556555579443/white-800x800.png?width=593&height=593')`, 
          backgroundRepeat:  "no-repeat", 
          backgroundSize: '120px',
        }} suppressHydrationWarning = {true}> ESX Documentation</div>
      
      break
  }
    return src
}



const config: DocsThemeConfig = {
  
  primaryHue : {
    light: 29,
    dark:29,
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
    text: //TODO: ask if more legal stuff is needed
      <span>
           {new Date().getFullYear()} ©{' '}
          <a href="https://www.esx-framework.org/" target="_blank"> 
            ESX Framework
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
            content: 'ESX, docs, documentation, ESX docs, ESX documentation, fivem documentation, fivem, fivem server, ESX framework, fivem server management, fivem franework, fivem server monitoring, fivem server management',
        },
      ],
      additionalLinkTags : [
        { //can't understand how this pathing works so links needed
          rel: 'icon',
          href: 'https://media.discordapp.net/attachments/1141377366589976747/1141617235752919040/favicon.png?width=320&height=320',
        },
      ]
    }
  }
}

export default config
