import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '.';
import { TextTypes } from '../../../types/GlobalTypes';

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    colorVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral'],
      defaultValue: 'neutral',
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'Tag',
    },
    textSize: {
      control: { type: 'select' },
      options: Object.values(TextTypes),
      defaultValue: TextTypes.body3,
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
    colorVariant: 'neutral',
    text: 'Default example',
  },
};

export const Primary: Story = {
  args: {
    colorVariant: 'primary',
    text: 'Primary example',
  },
};

export const Secondary: Story = {
  args: {
    colorVariant: 'secondary',
    text: 'Secondary example',
  },
};
