import { StoryObj, Meta } from "@storybook/react";
import {
  TransitionFadeGrid,
  TransitionFadeGridProps,
} from "./TransitionFadeGrid";
import {
  ExampleContainer,
  ExampleContainer_Colors,
} from "../../Examples/ExampleContainer";
import { STORYBOOK_CATEGORIES } from "../../../../types/StoryBookTypes";
import { ARG_TYPES } from "../../../../tokens/StorybookArgTypes";
import { useEffect, useState } from "react";
import { Story_TransitionDisplay_TransitionType } from "../../Animations/TransitionDisplay/TransitionDisplay.stories";
import { TransitionDisplay_TransitionType } from "../../Animations/TransitionDisplay/TransitionDisplay.types";

export default {
  title: "Atoms/Grids/TransitionFadeGrid",
  component: TransitionFadeGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    cols: 3,
    rows: 3,
    numItems: 16,
    duration: 5000,
    transitionType: TransitionDisplay_TransitionType.fade,
  },
  argTypes: {
    items: ARG_TYPES.objectCode,
    refreshInterval: ARG_TYPES.duration,
    duration: ARG_TYPES.duration,
    minDuration: ARG_TYPES.duration,
    maxDuration: ARG_TYPES.duration,
    transitionType: Story_TransitionDisplay_TransitionType,
    preserveFromElement: ARG_TYPES.boolean,
    numItems: ARG_TYPES.numItems,
    cols: {
      control: {
        type: "range",
        min: 1,
        max: 8,
        step: 1,
      },
      table: {
        category: STORYBOOK_CATEGORIES.style,
      },
    },
    rows: {
      control: {
        type: "range",
        min: 1,
        max: 8,
        step: 1,
      },
      table: {
        category: STORYBOOK_CATEGORIES.style,
      },
    },
  },
};

type MyStoryProps = TransitionFadeGridProps & {
  numItems: number;
};
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ numItems, ...args }) => {
    const exampleItems = Array.from({ length: numItems }, (_, idx) => (
      <ExampleContainer key={idx} color={ExampleContainer_Colors.Neutral300}>
        Item {idx + 1}
      </ExampleContainer>
    ));
    return (
      <TransitionFadeGrid
        {...args}
        items={exampleItems}
        key={`${args.cols}-${args.rows}-${args.items}`}
      />
    );
  },
};
