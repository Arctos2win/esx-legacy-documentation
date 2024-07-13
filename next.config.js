import nextra from 'nextra'
import remarkMdxDisableExplicitJsx from 'remark-mdx-disable-explicit-jsx';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',

  mdxOptions: {
    remarkPlugins: [
      [
        remarkMdxDisableExplicitJsx,
        { whiteList: ['table', 'thead', 'tbody', 'tr', 'th', 'td'] }
      ]
    ]
  }

})


/**
 * @type {import('next').NextConfig}
 */
export default withNextra({
    redirects: () => [
      {
        source: '/',
        destination: '/en',
        permanent: true
      }
    ],
    images: {
      unoptimized: true,
    },
    swcMinify: true,
    trailingSlash: true,
    distDir: 'dist'
  })
