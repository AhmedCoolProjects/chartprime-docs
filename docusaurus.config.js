// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: "mobile-app",
    path: "docs/mobile-app",
    routeBasePath: "/mobile-app",
  },

  {
    id: "packages-subscriptions",
    path: "docs/packages-subscriptions",
    routeBasePath: "/packages-subscriptions",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
  {
    id: "troubleshooting-faqs",
    path: "docs/troubleshooting-faqs",
    routeBasePath: "/troubleshooting-faqs",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
  {
    id: "contact-support",
    path: "docs/contact-support",
    routeBasePath: "/contact-support",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
  {
    id: "glossary",
    path: "docs/glossary",
    routeBasePath: "/glossary",
    versions: {
      current: {
        label: "1.x.x",
      },
    },
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  showLastUpdateTime: true,
  sidebarPath: require.resolve("./sidebars.js"),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({ ...options }) {
  return [
    "@docusaurus/plugin-content-docs",
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      ...options,
    }),
  ];
}

const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SessionTracker Docs",
  tagline: "",
  favicon: "img/favicon.ico",
  url: "https://mysessiontracker.com/",
  baseUrl: "/",
  organizationName: "SessionTracker", // Usually your GitHub org/user name.
  projectName: "SessionTracker-docs", // Usually your repo name.
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
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
          ...defaultSettings,
          id: "web-app",
          path: "docs/web-app",
          routeBasePath: "/web-app",

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
    ...docs_plugins,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // deactivate dark mode
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      algolia: {
        appId: "app-id",
        apiKey: "search-only-api-key",
        indexName: "index-name",
      },
      navbar: {
        title: "SessionTracker Docs",
        logo: {
          alt: "SessionTracker Logo",
          src: "/logo.png",
          style: {
            width: "50px",
            objectFit: "contain",
          },
        },
        items: [
          {
            label: "Mobile App",
            to: "/mobile-app",
            position: "left",
          },
          {
            label: "Web App",
            to: "/web-app",
            position: "left",
          },
          {
            label: "Packages & Subscriptions",
            to: "/packages-subscriptions",
            position: "left",
          },
          {
            label: "FAQs",
            to: "/troubleshooting-faqs",
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
          alt: "SessionTracker Logo",
          style: {
            width: "100px",
            objectFit: "contain",
          },
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Mobile App",
                to: "/mobile-app",
              },
              {
                label: "Web App",
                to: "/web-app",
              },
              {
                label: "Packages and Subscriptions",
                to: "/packages-subscriptions",
              },
              {
                label: "FAQs",
                to: "/troubleshooting-faqs",
              },
              {
                label: "Contact and Support",
                to: "/contact-support",
              },
              {
                label: "Glossary",
                to: "/glossary",
              },
              {
                label: "Conclusion",
                to: "/conclusion",
              },
            ],
          },

          {
            title: "More",
            items: [
              {
                label: "Our Website",
                href: "https://mysessiontracker.com/",
              },
              {
                label: "Terms of Service",
                href: "https://mysessiontracker.com/terms",
              },
              {
                label: "Privacy Policy",
                href: "https://mysessiontracker.com/privacy",
              },
              {
                label: "Support Center",
                href: "mailto:support@mysessiontracker.com",
              },
              {
                html: `<div class="global_row__hlXlI" style="margin-top:14px"><a href="https://itunes.apple.com/us/app/my-session-tracker/id1444380642?ls=1&amp;mt=8" target="_blank" rel="noopener noreferrer" class="styles_appleA__a_a_F"><div class="styles_appleLink__0Wpoy" style="width:130px;height:42px;position:relative"><img class="global_image__hXmTb" style="object-fit:contain" srcset="/images/apple-link@1x.png, /images/apple-link@2x.png 2x" src="/images/apple-link@2x.png" alt="Download via App Store"></div></a><a href="https://play.google.com/store/apps/details?id=com.listenfirstlabs.sessiontrackerandroid" target="_blank" rel="noopener noreferrer" style="margin-left:10px"><div class="styles_googleLink__86Mfh" style="width:126px;height:42px;position:relative"><img class="global_image__hXmTb" style="object-fit:contain" srcset="/images/google-link@1x.png, /images/google-link@2x.png 2x" src="/images/google-link@2x.png" alt="Download via Google Play"></div></a></div>`,
              },
            ],
          },
        ],
        copyright:
          "Copyright © 2023 Listen First Labs LLC. All rights reserved.",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
