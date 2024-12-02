import { Meta, StoryObj } from '@storybook/react';
import { DualContentHoverReveal } from './DualContentHoverReveal';
import { ExampleContainer, ExampleContainerColors } from '../ExampleContainer';

export default {
  title: 'Atoms/DualContentHoverReveal',
  component: DualContentHoverReveal,
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
} as Meta<typeof DualContentHoverReveal>;

export const Base: StoryObj<typeof DualContentHoverReveal> = {
  args: {
    colorVariant: 'neutral',
  },
  render: (args) => {
    return (
      <DualContentHoverReveal
        colorVariant={args.colorVariant}
        defaultSize
        primaryContent={
          <ExampleContainer
            color={ExampleContainerColors.transparent}
            children='Primary Content'
          />
        }
        secondaryContent={
          <ExampleContainer
            color={ExampleContainerColors.transparent}
            children='Secondary Content'
          />
        }
      />
    );
  },
};
