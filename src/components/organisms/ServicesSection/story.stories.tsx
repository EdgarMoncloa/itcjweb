import { StoryObj, Meta } from '@storybook/react';
import { ServicesSection } from './ServicesSection';
import { ServicesMoock } from '../../../mocks/services.mock';

export default {
  title: 'Organisms/ServicesSection',
  component: ServicesSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof ServicesSection>;

export const Base: StoryObj<typeof ServicesSection> = {
  args: {
    services: ServicesMoock,
  },
  render: (args) => {
    return <ServicesSection {...args} />;
  },
};
