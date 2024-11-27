import styled from 'styled-components';
import {
  InteractiveTriadGrid,
  InteractiveTriadGridProps,
  InteractiveTriadGridSize,
} from './InteractiveTriadGrid';
import { ExampleContainer, ExampleContainerColors } from '../ExampleContainer';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Atoms/InteractiveTriadGrid',
  component: InteractiveTriadGrid,
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
  InteractiveTriadGridProps,
  'primaryContent' & 'secondaryContent' & 'tertiaryContent'
> & {
  gridSize: InteractiveTriadGridSize;
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
      <InteractiveTriadGrid
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
