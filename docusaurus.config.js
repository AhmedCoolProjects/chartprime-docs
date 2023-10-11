// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ChartPrime Docs",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      algolia: {
        appId: "app-id",
        apiKey: "search-only-api-key",
        indexName: "index-name",
      },
      navbar: {
        title: "",
        logo: {
          alt: "ChartPrime Logo",
          src: "/logo.png",
          style: {
            width: "150px",
            objectFit: "contain",
          },
        },
        items: [
          {
            label: "Our Website",
            href: "https://chartprime.com",
            position: "left",
          },
          {
            label: "Sign Up",
            href: "https://chartprime.com",
            position: "left",
          },
          {
            label: "TradingView",
            href: "https://chartprime.com",
            position: "left",
          },
          {
            label: "Discord",
            href: "https://chartprime.com",
            position: "left",
          },
          // language
          {
            type: "localeDropdown",
            position: "right",
          },
          // algolia search
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",

        logo: {
          src: "/logo.png",
          alt: "ChartPrime Logo",
          style: {
            width: "200px",
            objectFit: "contain",
          },
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/",
              },
              {
                label: "Premium Toolkits",
                to: "/",
              },
              {
                label: "Market Oracle",
                to: "/",
              },
              {
                label: "ChartPrime Oscillators",
                to: "/",
              },
              {
                label: "Market Dynamics Pro",
                to: "/",
              },
              {
                label: "Advanced Techniques",
                to: "/",
              },
              {
                label: "FAQs",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "TradingView",
                href: "https://www.tradingview.com/u/ChartPrime/#published-scripts",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/ChartPrime",
              },
              {
                label: "Discord",
                href: "https://discord.gg/chartprime",
              },
              {
                label: "X",
                href: "https://twitter.com/ChartPrime",
              },

              {
                label: "Facebook",
                href: "https://chartprime.com/#",
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@chartprimetrading",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Testimonials",
                href: "https://chartprime.com/testimonials",
              },
              {
                label: "Register",
                href: "https://chartprime.com/#register",
              },
              {
                label: "Cookie Policy",
                href: "https://chartprime.com/cookie-policy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ChartPrime, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
