import { Meta, StoryObj } from '@storybook/react';
import { AllHeaders } from './AllHeaders';

export default {
  title: 'Organisms/AllHeaders',
  component: AllHeaders,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    tecHeaderHaveOpacity: false,
  },
  argTypes: {
    tecHeaderHaveOpacity: {
      description: 'Define si el header del tecnm tiene un fondo transparente',
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<typeof AllHeaders>;

export const Base: StoryObj<typeof AllHeaders> = {
  render: (args) => <AllHeaders {...args} />,
};
