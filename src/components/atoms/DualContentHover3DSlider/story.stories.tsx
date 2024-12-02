import { Meta, StoryObj } from '@storybook/react';
import { DualContentHover3DSlider } from './DualContentHover3DSlider';

export default {
  title: 'Atoms/DualContentHover3DSlider',
  component: DualContentHover3DSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    colorVariant: {
      description: 'Variante del componente',
      control: {
        type: 'select',
        options: ['primary', 'neutral'],
      },
    },
  },
} as Meta<typeof DualContentHover3DSlider>;

export const Default: StoryObj<typeof DualContentHover3DSlider> = {
  args: {
    colorVariant: 'primary',
  },
  render: (args) => <DualContentHover3DSlider {...args} defaultSize />,
};
