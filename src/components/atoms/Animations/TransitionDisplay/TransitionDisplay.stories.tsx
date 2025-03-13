import styled from "styled-components";
import { TransitionDelayType, TransitionDisplay } from ".";
import { StoryObj } from "@storybook/react";
import { theme, ThemeType } from "../../../../tokens/theme";
import { CSS_VAR_DURATION } from "../../../../types/GlobalTypes";

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
  },
  argTypes: {
    animate: {
      control: { type: "boolean" },
    },
    delay: {
      control: {
        type: "select",
      },
      options: Object.values(CSS_VAR_DURATION),
      defaultValue: CSS_VAR_DURATION.normal,
    },
    fromElement: {
      control: { type: "object" },
      description: "Es el primer elemento a mostrar",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "null" },
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
        haveDefaultSize
        transition="circleFromCenter"
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
