import styled from "styled-components";
import { TransitionDelayType, TransitionDisplay } from ".";
import { StoryObj } from "@storybook/react";

export default {
  title: "Atoms/Animations/TransitionDisplay",
  component: TransitionDisplay,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    Animar: true,
    delay: "normal",
  },
  argTypes: {
    Animar: {
      control: { type: "boolean" },
    },
    delay: {
      control: {
        type: "select",
      },
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
  Animar: boolean;
  delay: TransitionDelayType;
}

export const Base: StoryObj<MyStory> = {
  args: {},
  render: (args: MyStory) => {
    const fromElement = <StyledFromELement>Primer Elemento</StyledFromELement>;
    const toElement = <StyledToElement>Segundo Elemento</StyledToElement>;

    return (
      <TransitionDisplay
        animate={args["Animar"]}
        fromElement={fromElement}
        toElement={toElement}
        haveDefaultSize
        transition="circleFromCenter"
        // delay={args.delay}
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
