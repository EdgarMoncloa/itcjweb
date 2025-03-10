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
    numItems: 7,
    size: "medium",
  },
  render: (args) => {
    let width = "";
    switch (args.size) {
      case "small":
        width = "--size-width-3-cols";
        break;
      case "medium":
        width = "--size-width-6-cols";
        break;
      case "large":
        width = "--size-width-9-cols";
        break;
    }
    const items = Array.from({ length: args.numItems }, (_, idx) => (
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
    const blankItem = (
      <StyledExampleContainer className={args.size}>
        <ExampleContainer
          textType={TextTypes.body1}
          color={ExampleContainerColors.Neutral300}
        >
          Vacio
        </ExampleContainer>
      </StyledExampleContainer>
    );

    return (
      <DynamicGrid
        items={items}
        blankItem={blankItem}
        itemWidth={160}
      />
    );
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
