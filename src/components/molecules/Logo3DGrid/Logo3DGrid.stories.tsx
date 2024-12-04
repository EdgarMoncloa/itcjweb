import { Meta, StoryObj } from '@storybook/react';
import { Logo3DGrid } from './Logo3DGrid';
import { RELEVANT_SITES_MOCK } from '../../../mocks/interestSites.mock';

export default {
  title: 'Molecules/Logo3DGrid',
  component: Logo3DGrid,
  tags: ['autodocs'],
  argTypes: {
    defaultSize: {
      description: 'Define un tamaño estandar para mostrar en storybook',
      control: {
        type: 'boolean',
        disable: true,
      },
    },
    sites: {
      description: 'Lista de logos',
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

type Story = StoryObj<typeof Logo3DGrid>;

export const Base: Story = {
  args: {
    sites: RELEVANT_SITES_MOCK,
  },
  render: (args) => <Logo3DGrid {...args} defaultSize />,
};
