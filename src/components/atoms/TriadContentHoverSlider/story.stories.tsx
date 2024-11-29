import styled from 'styled-components';
import {
  TriadContentHoverSlider,
  TriadContentHoverSliderProps,
  TriadContentHoverSliderSize,
} from './TriadContentHoverSlider';
import { ExampleContainer, ExampleContainerColors } from '../ExampleContainer';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Atoms/TriadContentHoverSlider',
  component: TriadContentHoverSlider,
  tags: ['autodocs'],
  argTypes: {
    gridSize: {
      description: 'Tamaño del grid',
      control: {
        type: 'select',
        options: ['1-1-1', '2-1-2'],
      },
    },
    defaultSize: {
      description: 'Define un tamaño estandar para mostrar en storybook',
      control: {
        type: 'boolean',
        disable: true,
      },
    },
    primaryContent: {
      description: 'Primer elemento',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    secondaryContent: {
      description: 'Segundo elemento',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    tertiaryContent: {
      description: 'Segundo elemento',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} as Meta;

type MyComponentStoryProps = Omit<
  TriadContentHoverSliderProps,
  'primaryContent' & 'secondaryContent' & 'tertiaryContent'
> & {
  gridSize: TriadContentHoverSliderSize;
  primaryContent: string;
  secondaryContent: string;
  tertiaryContent: string;
};

type Story = StoryObj<MyComponentStoryProps>;

export const Default: Story = {
  args: {
    gridSize: '1-1-1',
    primaryContent: 'Example 1',
    secondaryContent: 'Example 2',
    tertiaryContent: 'Example 3',
  },
  render: (args) => {
    return (
      <TriadContentHoverSlider
        {...args}
        defaultSize
        primaryContent={
          <ExampleContainer
            color={ExampleContainerColors.Primary100}
            text={args.primaryContent}
          />
        }
        secondaryContent={
          <ExampleContainer
            color={ExampleContainerColors.Primary500}
            text={args.secondaryContent}
          />
        }
        tertiaryContent={
          <ExampleContainer
            color={ExampleContainerColors.Primary700}
            text={args.tertiaryContent}
          />
        }
      />
    );
  },
};
