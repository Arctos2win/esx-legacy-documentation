import nextra from "nextra";
import remarkMdxDisableExplicitJsx from "remark-mdx-disable-explicit-jsx";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./src/theme.config.tsx",

  mdxOptions: {
    remarkPlugins: [
      [
        remarkMdxDisableExplicitJsx,
        { whiteList: ["table", "thead", "tbody", "tr", "th", "td"] },
      ],
    ],
  },
});

/**
 * @type {import('next').NextConfig}
 */
export default withNextra({
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  trailingSlash: true,
  distDir: "dist",
});
