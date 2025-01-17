import type { Meta, StoryObj } from '@storybook/react';

import { RelevantSite } from '.';
import { RxValueNone } from 'react-icons/rx';

const meta = {
  title: 'Atoms/Buttons/RelevantSite',
  component: RelevantSite,
  tags: ['autodocs'],
  parameters: {
    // layout: "centered",
  },
  args: {},
} satisfies Meta<typeof RelevantSite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    icon: <RxValueNone size={40} />,
    text: 'SII',
    toSite: 'http://sii.cdjuarez.tecnm.mx/',
  },
  render: (args) => <RelevantSite {...args} defaultSize />,
};
