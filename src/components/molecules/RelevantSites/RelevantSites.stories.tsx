import type { Meta, StoryObj } from "@storybook/react";
import { RelevantSites, RelevantSites_Site } from ".";
import { relevantSites } from "./relevantSites.mock";

const meta = {
  title: "Molecules/Relevant Sites",
  component: RelevantSites,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof RelevantSites>;

export default meta;

export const Base = {
  render: () => {
    const formatedSites: RelevantSites_Site[] = relevantSites.map((item) => ({
      ...item,
      onClick: () => window.open(item.url, "_blank"),
      url: item.url || "#",
    }));
    return <RelevantSites sites={formatedSites} />;
  },
};
