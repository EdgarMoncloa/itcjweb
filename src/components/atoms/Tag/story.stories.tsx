import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './';
import { TextTypes } from '../../../types/GlobalTypes';

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'default'],
      defaultValue: 'default',
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'Tag',
    },
    textSize: {
      control: { type: 'select' },
      options: Object.values(TextTypes),
      defaultValue: 'body3',
    },
    hasPadding: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'default',
    text: 'Default example',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Primary example',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Secondary example',
  },
};
