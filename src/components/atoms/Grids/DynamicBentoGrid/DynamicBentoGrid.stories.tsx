import { StoryObj, Meta } from "@storybook/react";
import { DynamicBentoGrid } from "./DynamicBentoGrid";
import { ExampleContainer } from "../../Examples/ExampleContainer";
import { ARG_TYPES } from "../../../../tokens/StorybookArgTypes";

export default {
  title: "Atoms/Grids/DynamicBentoGrid",
  component: DynamicBentoGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    numElements: 10,
  },
  argTypes: {
    numElements: {
      ...ARG_TYPES.numItems,
    },
  },
};

type MyStoryProps = {
  numElements: number;
};
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ ...args }) => {
    const children = Array.from({ length: args.numElements }, (_, index) => (
      <ExampleContainer key={index} style={{ width: "100%" }}>
        Elemento {index + 1}
      </ExampleContainer>
    ));
    return (
      <DynamicBentoGrid
        defaultSize
        orientation="vertical"
        // orientation="horizontal"
      >
        {children}
      </DynamicBentoGrid>
    );
  },
};
