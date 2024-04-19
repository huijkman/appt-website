import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import tailwindPlugin from './plugins/tailwind-config';
import 'dotenv/config';
import { getTranslatedPath } from './src/utils/route-translations';
import { docusaurusContentDocsConfig } from './docusaurus-content-docs-config';

const config: Config = {
  title: 'Appt',
  tagline: 'Gids voor het maken van toegankelijke apps',
  favicon: 'favicon.ico',
  noIndex: true, //process.env.ENVIRONMENT !== 'production',

  // Set the production url of your site here
  url: 'https://appt.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'appt-org', // Usually your GitHub org/user name.
  projectName: 'appt-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap',
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
        path: 'en',
      },
      nl: {
        htmlLang: 'nl',
        path: 'nl',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebarsDocs.ts',
          editUrl: 'https://github.com/appt-org/appt-docusaurus/',
        },
        theme: {
          customCss: ['./src/css/globals.css', './src/css/markdown.css', './src/css/layout.css', './src/css/stats.css'],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [tailwindPlugin, ...docusaurusContentDocsConfig],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Logo Appt',
        src: 'img/light/appt-logo-light.svg',
        srcDark: 'img/dark/appt-logo-dark.svg',
        className: 'nav-logo',
        href: 'https://appt.org',
      },
      items: [
        { to: '/', label: 'Home', position: 'right' },
        { to: `/${getTranslatedPath('stats')}`, label: 'Stats', position: 'right' },
        { to: '/docs', label: 'Docs', position: 'right' },
        { to: `/${getTranslatedPath('guidelines')}`, label: getTranslatedPath('guidelines', true), position: 'right' },
        { to: `/${getTranslatedPath('articles')}`, label: getTranslatedPath('articles', true), position: 'right' },
        { to: `/${getTranslatedPath('partners')}`, label: 'Partners', position: 'right' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
    footer: {
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          items: [
            {
              label: getTranslatedPath('about', true),
              to: getTranslatedPath('about'),
            },
            {
              label: getTranslatedPath('community', true),
              to: getTranslatedPath('community'),
            },
            {
              label: getTranslatedPath('newsletter', true),
              to: getTranslatedPath('newsletter'),
            },
            {
              label: 'Appt App',
              to: getTranslatedPath('appt-app'),
            },
            {
              label: getTranslatedPath('licenses', true),
              to: getTranslatedPath('licenses'),
            },
            {
              label: getTranslatedPath('privacy', true),
              to: getTranslatedPath('privacy'),
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.okaidia,
      darkTheme: prismThemes.okaidia,
      additionalLanguages: ['java', 'kotlin', 'swift', 'objectivec', 'csharp', 'dart'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
