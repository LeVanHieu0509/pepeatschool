// eslint-disable-next-line import/default -- Next.js requires default export
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: ["react-tweet"],
  i18n: {
    // locales: ['en-US', 'zh-CN', 'es-ES', 'fr-FR'],
    locales: ["en-US"],

    defaultLocale: "en-US",
  },
  basePath: "",
  env: {
    basePath: "",
  },
  images: {
    domains: [
      "azure-known-gull-617.mypinata.cloud",
      "gateway.pinata.cloud",
      "turquoise-obliged-centipede-803.mypinata.cloud",
    ],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    MIXPANEL_PROJECT_TOKEN: process.env.MIXPANEL_PROJECT_TOKEN,
    APP_ENV: process.env.APP_ENV,
    APP_NAME: process.env.APP_NAME,
  },
  async redirects() {
    return [
      {
        source: "/docs.([a-zA-Z-]+)",
        destination: "/docs/introduction",
        statusCode: 302,
      },
      {
        source: "/chat",
        destination: "https://discord.gg/QezWCDeYfH",
        statusCode: 302,
      },
    ];
  },
};

// eslint-disable-next-line import/no-default-export  -- Next.js requires default export
export default withNextra(nextConfig);
