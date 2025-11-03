import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    // "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-backgrounds",
    "storybook-addon-theme-provider",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "sb-vite.config.ts",
      },
    },
  },

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
