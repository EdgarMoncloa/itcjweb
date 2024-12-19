import { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProps } from "./Tooltip";
import styled from "styled-components";

export default {
  title: "Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },

    tooltipContent: {
      control: {
        type: "text",
      },
      description: "Tooltip content",
    },

    position: {
      control: {
        type: "select",
        options: ["top", "bottom", "left", "right"],
        defaultValue: "top",
      },
      description: "Tooltip position",
    },
  },
} satisfies Meta<TooltipProps>;

type Story = StoryObj<TooltipProps>;

export const Base: Story = {
  args: {
    children: "Hover me! 😉",
    tooltipContent: "Tooltip",
  },
  render: (args) => {
    return (
      <StyledTooltipWrapper>
        <StyledTooltip>
          <Tooltip {...args} />
        </StyledTooltip>
      </StyledTooltipWrapper>
    );
  },
};

const StyledTooltipWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size-height-7-row);
  width: 100%;
`;
const StyledTooltip = styled.div`
  height: var(--size-height-1-row);
  width: var(--size-width-2-cols);
  border: var(--size-border-small) solid var(--colors-app-primary-700);
  border-radius: var(--size-border-radius-small);
  text-align: center;
`;
