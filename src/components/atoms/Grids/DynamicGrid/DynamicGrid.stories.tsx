import { StoryObj, Meta } from "@storybook/react";
import { DynamicGrid, DynamicGridProps } from "./DynamicGrid";
import { TextTypes } from "../../../../types/GlobalTypes";
import {
  ExampleContainer,
  ExampleContainerColors,
} from "../../Examples/ExampleContainer";
import styled from "styled-components";

export default {
  title: "Atoms/Grids/DynamicGrid",
  component: DynamicGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    numItems: {
      control: {
        type: "range",
        min: 1,
        max: 24,
      },
    },

    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
};
type MyStoryProps = {
  numItems: number;
  size?: "small" | "medium" | "large";
};

type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  args: {
    numItems: 3,
    size: "medium",
  },
  render: (args) => {
    const children = Array.from({ length: args.numItems }, (_, idx) => (
      <StyledExampleContainer className={args.size}>
        <ExampleContainer
          key={idx}
          textType={TextTypes.body1}
          color={ExampleContainerColors.Primary300}
        >
          Item {idx + 1}
        </ExampleContainer>
      </StyledExampleContainer>
    ));
    return <DynamicGrid {...args} children={children} />;
  },
};

const StyledExampleContainer = styled.div`
  &.small {
    height: var(--size-width-1-cols);
    width: var(--size-width-1-cols);
  }
  &.medium {
    height: var(--size-width-2-cols);
    width: var(--size-width-2-cols);
  }
  &.large {
    height: var(--size-width-3-cols);
    width: var(--size-width-3-cols);
  }
`;
