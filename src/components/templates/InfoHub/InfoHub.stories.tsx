import { StoryObj, Meta } from "@storybook/react";
import { InfoHub, InfoHubProps } from "./InfoHub";
import { useEffect, useState } from "react";

export default {
  title: "Templates/InfoHub",
  component: InfoHub,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta<InfoHubProps>;

type MyStoryProps = Omit<InfoHubProps, "icon"> & {
  icon: string;
};
type Story = StoryObj<MyStoryProps>;

export const Template: Story = {
  args: {
    icon: "Fa500Px",
  },
  render: (args) => {
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
      fetch("./src/mocks/aspirantes/procesoDeAdmision.markdown")
        .then((response) => response.text())
        .then((data) => setMarkdownContent(data))
        .catch((error) => console.error("Error loading markdown:", error));
    }, []);
    return <InfoHub {...args} content={markdownContent} />;
  },
};
