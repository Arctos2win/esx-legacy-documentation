import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function ThemedImage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  var src

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
  
  logo: ThemedImage,

  project: {
    link: 'https://google.com',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/fivemanage/docs',
  footer: {
    text:
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
        url: 'https://docs.fivemanage.com',
        title: 'ESX Documentation',
        description: 'ESX Documentation',
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
      ],
      additionalLinkTags : [
        {
          rel: 'icon',
          href: 'https://media.discordapp.net/attachments/989963898570551296/1141265486902997044/esx.e214a7a0-removebg-preview.png?width=732&height=275',
        },
      ]
    }
  }
}

export default config

