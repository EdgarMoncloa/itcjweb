import { StoryObj, Meta } from "@storybook/react";
import { DynamicBentoGrid } from "./DynamicBentoGrid";
import { ExampleContainer } from "../../Examples/ExampleContainer";
import { ARG_TYPES } from "../../../../tokens/StorybookArgTypes";
import { DynamicBentoGrid_Orientation } from "./types";

export default {
  title: "Atoms/Grids/DynamicBentoGrid",
  component: DynamicBentoGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        type: "code",
      },
    },
  },
  args: {
    numElements: 10,
    itemsOrientation: DynamicBentoGrid_Orientation.horizontal,
  },
  argTypes: {
    numElements: {
      ...ARG_TYPES.numItems,
    },
    itemsOrientation: ARG_TYPES.enumSelect_fun(DynamicBentoGrid_Orientation),
  },
};

type MyStoryProps = {
  numElements: number;
  itemsOrientation: DynamicBentoGrid_Orientation;
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
        {...args}
        defaultSize
      >
        {children}
      </DynamicBentoGrid>
    );
  },
};
