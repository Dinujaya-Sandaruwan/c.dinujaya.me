import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "C Documentation",
  tagline: "Your Complete Guide to C Programming – From Basics to Mastery!",
  favicon: "img/logo.png",

  url: "https://c.dinujaya.me",

  baseUrl: "/",

  organizationName: "Dinujaya Development",
  projectName: "C Documentation",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",

          editUrl:
            "https://github.com/Dinujaya-Sandaruwan/c.dinujaya.me/tree/reader-feedbacks/",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.jpg",
    navbar: {
      title: "Lang Documentation",
      logo: {
        alt: "Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "http://dinujaya.me/",
          label: "Meet The Developer",
          position: "right",
        },
        {
          href: "https://github.com/Dinujaya-Sandaruwan/c.dinujaya.me",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Other Recources",
          items: [
            {
              label: "w3schools.com",
              href: "https://www.w3schools.com/c/",
            },
            {
              label: "devdocs.io",
              href: "https://devdocs.io/c/",
            },
            {
              label: "cppreference.com",
              href: "https://en.cppreference.com/w/c/language",
            },
          ],
        },
        {
          title: "Connect with Dinujaya",
          items: [
            {
              label: "Portfolio Website",
              href: "http://dinujaya.me/",
            },
            {
              label: "Github Profile",
              href: "https://github.com/Dinujaya-Sandaruwan",
            },
            {
              label: "LinkedIn Profile",
              href: "https://www.linkedin.com/feed/",
            },
          ],
        },
        {
          title: "There's more to learn",
          items: [
            {
              label: "C Programming and OOP with Dr. Chuck",
              href: "https://youtu.be/PaPN51Mm5qQ",
            },
            {
              label: "Brian Kernighan with Lex Fridman",
              href: "https://www.youtube.com/watch?v=O9upVbGSBFo",
            },
            {
              label: "Pointers in C / C++",
              href: "https://youtu.be/zuegQmMdy8M",
            },
            {
              label: "Preprocessing in-depth",
              href: "https://youtu.be/6KNdGnUiRBM",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} C Lang Documentation. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
