import { Meta, StoryObj } from '@storybook/react';
import { BorderHoverReveal } from './BorderHoverReveal';
import { ExampleContainer, ExampleContainerColors } from '../../Examples/ExampleContainer';
import { TextTypes } from '../../../../types/GlobalTypes';

export default {
  title: 'Atoms/Grids/BorderHoverReveal',
  component: BorderHoverReveal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    defaultSize: {
      control: {
        type: 'boolean',
        disable: true,
      },
    },
  },
} as Meta<typeof BorderHoverReveal>;

type Story = StoryObj<typeof BorderHoverReveal>;

export const Base: Story = {
  args: {
    children: 'Contenido',
  },
  render: (args) => {
    const children = (
      <ExampleContainer
        textType={TextTypes.H5}
        color={ExampleContainerColors.transparent}
      >
        {args.children}
      </ExampleContainer>
    );
    return <BorderHoverReveal {...args} defaultSize children={children} />;
  },
};
