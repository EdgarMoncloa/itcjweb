import { Meta, StoryObj } from '@storybook/react';
import { TitleWithGearRotating } from './TitleWithGearRotating';

const meta: Meta<typeof TitleWithGearRotating> = {
  title: 'Molecules/TitleWIthGearRotating',
  component: TitleWithGearRotating,
  tags: ['autodocs'],
};

export default meta;

type CustomArgs = {
  title: string;
};

type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    title: 'Titulo',
  },
  render: (args) => {
    return <TitleWithGearRotating>{args.title}</TitleWithGearRotating>;
  },
};
