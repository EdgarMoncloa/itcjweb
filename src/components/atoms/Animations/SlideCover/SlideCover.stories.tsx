import type { Meta, StoryObj } from "@storybook/react";
import { SlideCover } from ".";
import styled from "styled-components";
import { StyledH1 } from "../../../../tokens/CustomText";
import { useArgs } from "@storybook/preview-api";

const meta: Meta = {
  title: "Atoms/Animations/SlideCover",
  component: SlideCover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
  args: {
    coverContent: false,
    isVisible: false,
    haveOutAnimation: true,
    animationDirection: "toLeft",
  },
  render: (args) => {
    const [, updateArgs] = useArgs();

    const ExampleClassess = [
      args.isVisible === true ? "white" : "",
      args.isVisible === false && args.haveOutAnimation === false
        ? "noAnimation"
        : "",
    ].join(" ");

    return (
      <StyledCoverExapleContainer
        onMouseEnter={() => updateArgs({ isVisible: true })}
        onMouseLeave={() => updateArgs({ isVisible: false })}
        className={ExampleClassess}
      >
        <StyledH1>Hover Me!</StyledH1>
        <SlideCover {...args} />
      </StyledCoverExapleContainer>
    );
  },
};

const StyledCoverExapleContainer = styled.div`
  align-items: center;
  border: 1px solid var(--colors-app-primary-700);
  display: flex;
  height: 200px;
  justify-content: center;
  margin: var(--size-margin-large);
  overflow: hidden;
  position: relative;
  width: 400px;
  transition: color 400ms ease-in-out;
  background-color: transparent;
  z-index: var(--z-index-base);

  &.white {
    color: white;
  }
  &.noAnimation {
    transition: none;
  }
`;
