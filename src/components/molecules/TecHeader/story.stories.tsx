import type { Meta, StoryObj } from '@storybook/react';
import { TecHeader } from '.';
import styled from 'styled-components';

export default {
  title: 'Molecules/TecHeader',
  component: TecHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    withOpacity: {
      description: 'Define si el header tiene un fondo transparente',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof TecHeader>;

export const Base: StoryObj<typeof TecHeader> = {
  args: {
    withOpacity: false,
  },
  render: (args) => {
    return (
      <StyledContainer>
        <TecHeader {...args} />
      </StyledContainer>
    );
  },
};

const StyledContainer = styled.div`
  height: var(--size-height-3-row);
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
