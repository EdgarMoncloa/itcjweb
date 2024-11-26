import { StoryObj } from '@storybook/react';
import {
  ExampleContainerColors,
  ExampleContainer,
  ExampleContainerProps,
} from './ExampleContainer';

export default {
  title: 'Atoms/ExampleContainer',
  component: ExampleContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: Object.keys(ExampleContainerColors),
    },
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

type MyComponentStoryProps = Omit<ExampleContainerProps, 'color'> & {
  color: keyof typeof ExampleContainerColors;
};

export const Default: StoryObj<MyComponentStoryProps> = {
  args: {
    color: 'Primary100',
    text: 'Example',
  },
  render: (args) => {
    const colorValue =
      ExampleContainerColors[args.color as keyof typeof ExampleContainerColors];

    return <ExampleContainer {...args} color={colorValue} defaultSize />;
  },
};
