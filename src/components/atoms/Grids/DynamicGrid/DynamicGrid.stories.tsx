import { StoryObj, Meta } from "@storybook/react";
import { DynamicGrid, DynamicGrid_Props } from "./DynamicGrid";
import {
  CSS_VAR_GAP,
  CSS_VAR_ROW_HEIGHT,
  TextTypes,
} from "../../../../types/GlobalTypes";
import {
  ExampleContainer,
  ExampleContainer_Colors,
} from "../../Examples/ExampleContainer";
import styled from "styled-components";
import { DynamicGrid_FillMethod } from "./DynamicGrid.types";

export default {
  title: "Atoms/Grids/DynamicGrid",
  component: DynamicGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    // ANCHOR Style
    numColumns: {
      control: {
        type: "range",
        min: 1,
        max: 16,
      },
      table: {
        category: "Style",
      },
    },
    fillMethod: {
      control: {
        type: "select",
        defaultValue: DynamicGrid_FillMethod.Center,
      },
      options: Object.values(DynamicGrid_FillMethod),
      table: {
        category: "Style",
      },
    },
    gap: {
      control: {
        type: "select",
      },
      options: Object.values(CSS_VAR_GAP),
      table: {
        category: "Style",
      },
    },

    // ANCHOR Other
    items: {
      table: { category: "Other" },
    },
    blankItem: {
      table: { category: "Other" },
    },
    className: {
      table: { category: "Other" },
    },
    style: {
      table: { category: "Other" },
    },

    // ANCHOR Only for storybook
    numItems: {
      control: {
        type: "range",
        min: 1,
        max: 24,
      },
      table: {
        category: "Only for storybook",
      },
    },
    height: {
      control: {
        type: "select",
      },
      options: Object.values(CSS_VAR_ROW_HEIGHT),
      table: { category: "Only for storybook" },
    },
  },
};
interface MyStoryProps extends DynamicGrid_Props {
  numItems: number;
  numColumns: number;
  height: CSS_VAR_ROW_HEIGHT;
}

type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  args: {
    numItems: 7,
    numColumns: 5,
    height: CSS_VAR_ROW_HEIGHT["6-rows"],
    fillMethod: DynamicGrid_FillMethod.Center,
    gap: CSS_VAR_GAP.small,
  },
  render: (args) => {
    const items = Array.from({ length: args.numItems }, (_, idx) => (
      <StyledExampleContainer $height={args.height} key={idx}>
        <ExampleContainer
          key={idx}
          textType={TextTypes.body1}
          color={ExampleContainer_Colors.Primary300}
        >
          Item {idx + 1}
        </ExampleContainer>
      </StyledExampleContainer>
    ));
    const blankItem = (
      <StyledExampleContainer $height={args.height}>
        <ExampleContainer
          textType={TextTypes.body1}
          color={ExampleContainer_Colors.Neutral300}
        >
          Vacio
        </ExampleContainer>
      </StyledExampleContainer>
    );

    return <DynamicGrid {...args} items={items} blankItem={blankItem} />;
  },
};

type propsExampleContainer = {
  $height: CSS_VAR_ROW_HEIGHT;
};
const StyledExampleContainer = styled.div<propsExampleContainer>`
  width: 100%;
  height: var(${(props) => props.$height});
`;
