import { Meta, StoryObj } from '@storybook/react';
import { InfoCard } from './InfoCard';

const meta = {
  title: 'Molecules/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
} satisfies Meta<typeof InfoCard>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <InfoCard />,
};

export default meta;
