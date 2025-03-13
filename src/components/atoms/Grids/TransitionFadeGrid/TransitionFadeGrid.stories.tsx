import { StoryObj, Meta } from "@storybook/react";
import {
  TransitionFadeGrid,
  TransitionFadeGridProps,
} from "./TransitionFadeGrid";
import { ExampleContainer } from "../../Examples/ExampleContainer";

export default {
  title: "Atoms/Grids/TransitionFadeGrid",
  component: TransitionFadeGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    items: {
      // Default value is 10
      control: {
        type: "range",
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
};

type MyStoryProps = TransitionFadeGridProps & {
  items: number;
};
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ items = 10, ...args }) => {
    const exampleItems = Array.from({ length: items }, (_, idx) => (
      <ExampleContainer key={idx}>Item {idx + 1}</ExampleContainer>
    ));
    const componentProps = {
      size: {
        cols: 3,
        rows: 3,
      },
      items: exampleItems,
    };
    return <TransitionFadeGrid {...componentProps} />;
  },
};
