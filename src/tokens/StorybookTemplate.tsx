import { StoryObj, Meta } from "@storybook/react";
import { ARG_TYPES } from "./StorybookArgTypes";

export default {
  title: "Atoms/Grids/TransitionFadeGrid",
  component: null,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  argTypes: {
    numElements: {
      ...ARG_TYPES.numItems,
    },
  },
};

// type MyStoryProps = {};
// type Story = StoryObj<MyStoryProps>;

// export const Base: Story = {
//   render: ({ ...args }) => {
//     return null;
//   },
// };
