import type { Meta, StoryObj } from "@storybook/react";
import { HeaderTec } from ".";
import styled from "styled-components";
import { headerTecItems } from "../../../data/headerTecItems";

export default {
  title: "Molecules/HeaderTec",
  component: HeaderTec,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    withOpacity: {
      description: "Define si el header tiene un fondo transparente",
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof HeaderTec>;

export const Base: StoryObj<typeof HeaderTec> = {
  args: {
    withOpacity: false,
  },
  render: (args) => {
    return (
      <StyledContainer>
        <HeaderTec {...args} items={headerTecItems} />
      </StyledContainer>
    );
  },
};

const StyledContainer = styled.div`
  height: var(--size-height-3-rows);
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
  background-color: var(--colors-app-primary-100);
  background: linear-gradient(
    to bottom,
    var(--colors-app-primary-700) 0%,
    var(--colors-app-primary-100) 100%
  );
`;
