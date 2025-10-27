import { StoryObj, Meta } from "@storybook/react";
import { CustomMap } from "./";

export default {
  title: "Atoms/CustomMap",
  component: CustomMap,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.851476096866!2d-106.42316211562199!3d31.719951911313718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75dc249fd3e4b%3A0x58a769357165487b!2sTecNM%20-%20Campus%20Cd.%20Ju%C3%A1rez!5e0!3m2!1ses-419!2sjp!4v1761557999383!5m2!1ses-419!2sjp",
  },
  argTypes: {
    url: {
      control: {
        type: "text",
      },
    },
  },
};

type MyStoryProps = {
  url: string;
};
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ ...args }) => {
    return (
      <CustomMap
        {...args}
        style={{
          width: "720px",
          height: "480px",
        }}
      />
    );
  },
};
