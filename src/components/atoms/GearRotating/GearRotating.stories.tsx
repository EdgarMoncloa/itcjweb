import { StoryObj, Meta } from '@storybook/react';
import { GearRotating } from './GearRotating';

export default {
  title: 'Atoms/GearRotating',
  component: GearRotating,
  tags: ['autodocs'],
  argTypes: {
    defaultSize: {
      description: 'Define un tamaño estandar para mostrar en storybook',
      control: {
        type: 'boolean',
        disable: true,
      },
    },
  },
} as Meta<typeof GearRotating>;

export const Base: StoryObj<typeof GearRotating> = {
  args: {},
  render: (args) => <GearRotating {...args} defaultSize />,
};
