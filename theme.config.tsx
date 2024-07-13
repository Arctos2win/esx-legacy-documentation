import React, { useEffect, useState } from "react";
import { LocaleSwitch, DocsThemeConfig } from "nextra-theme-docs";
import { EditLink } from "src/components/theme/edit-link";
import { FeedbackLink } from "src/components/theme/feedback-link";
import { SUPPORTED_LOCALES } from "src/data/translations";
import { ThemedImage } from "src/components/theme/themed-image";
import { TimeStamp } from "src/components/theme/timestamp";
import { Footer } from "src/components/theme/footer";
import { Head } from "src/components/theme/head";
import { Toc } from "src/components/theme/toc";
import { Search } from "src/components/theme/search";
import { ScrollToTop } from "src/components/theme/scroll-to-top";

const config: DocsThemeConfig = {
  color: {
    hue: {
      light: 29,
      dark: 29,
    },
  },
  editLink: {
    component: EditLink,
  },
  search: {
    placeholder: Search,
  },
  toc: {
    title: Toc,
    backToTop: false,
    extraContent: ScrollToTop,
  },
  feedback: {
    content: FeedbackLink,
  },
  gitTimestamp: (props) => <TimeStamp timestamp={props.timestamp} />,
  i18n: SUPPORTED_LOCALES,
  logo: ThemedImage,
  navbar: {
    extraContent: LocaleSwitch,
  },
  project: {
    link: "https://github.com/esx-framework",
  },
  chat: {
    link: "https://discord.esx-framework.org",
  },
  docsRepositoryBase: "https://github.com/esx-framework/docs-rewrite",
  footer: {
    content: Footer,
  },
  head: Head,
};

export default config;
