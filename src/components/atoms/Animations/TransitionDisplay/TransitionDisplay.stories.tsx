import styled from "styled-components";
import { TransitionDisplay } from ".";
import { StoryObj } from "@storybook/react";
import { CSS_VAR_DURATION } from "../../../../types/GlobalTypes";
import { TransitionDisplay_TransitionType } from "./TransitionDisplay.types";
import { STORYBOOK_CATEGORIES } from "../../../../types/StoryBookTypes";

export const Story_TransitionDisplay_TransitionType = {
  control: {
    type: "select",
  },
  options: Object.values(TransitionDisplay_TransitionType),
  defaultValue: TransitionDisplay_TransitionType.fade,
  table: { category: STORYBOOK_CATEGORIES.style },
};

export default {
  title: "Atoms/Animations/TransitionDisplay",
  component: TransitionDisplay,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    animate: true,
    delay: CSS_VAR_DURATION.normal,
    haveDefaultSize: true,
    transitionType: TransitionDisplay_TransitionType.fade,
    preserveFromElement: true,
  },
  argTypes: {
    // ANCHOR Only for storybook
    animate: {
      control: { type: "boolean" },
      table: { category: "Only for storybook" },
    },
    haveDefaultSize: {
      control: { type: "boolean" },
      table: { category: "Only for storybook" },
    },
    // ANCHOR Style
    delay: {
      control: {
        type: "select",
      },
      options: Object.values(CSS_VAR_DURATION),
      defaultValue: CSS_VAR_DURATION.normal,
      table: { category: "Style" },
    },
    transitionType: Story_TransitionDisplay_TransitionType,
    preserveFromElement: {
      control: {
        type: "boolean",
      },
      description: "Si esta activado, el primer elemento seguira visible",
      table: {
        category: "Style",
      },
    },
    // ANCHOR Code
    fromElement: {
      control: false,
      description: "Es el primer elemento a mostrar",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "null" },
        category: "Code",
      },
    },
    toElement: {
      control: false,
      description: "Es el segundo elemento a mostrar",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "null" },
        category: "Code",
      },
    },
    toElementKey: {
      control: false,
      description: "Es la key del segundo elemento a mostrar",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "null" },
        category: "Code",
      },
    },
  },
};

interface MyStory {
  animate: boolean;
  delay: CSS_VAR_DURATION;
}

export const Base: StoryObj<MyStory> = {
  args: {},
  render: (args) => {
    const fromElement = <StyledFromELement>Primer Elemento</StyledFromELement>;
    const toElement = <StyledToElement>Segundo Elemento</StyledToElement>;

    return (
      <TransitionDisplay
        fromElement={fromElement}
        toElement={toElement}
        {...args}
      />
    );
  },
};

const StyledFromELement = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--colors-app-primary-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-h1);
`;

const StyledToElement = styled(StyledFromELement)`
  background-color: var(--colors-app-secondary-300);
`;
