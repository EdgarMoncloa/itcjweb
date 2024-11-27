import { Meta, StoryObj } from '@storybook/react';
import { TriadGridSliderInfoCard } from './TriadGridSliderInfoCard';
import { undergraduatePrograms } from '../../../mocks/undergraduatePrograms';

const meta: Meta = {
  title: 'Molecules/TriadGridSliderInfoCard',
  component: TriadGridSliderInfoCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  argTypes: {},
};

type MyComponentStoryProps = {};

export default meta;

export const Default: StoryObj<MyComponentStoryProps> = {
  args: {},
  render: () => {
    const undergraduateData = {
      title: undergraduatePrograms[0].title,
      subtitle: undergraduatePrograms[0].key,
      description: undergraduatePrograms[0].description,
      tags: undergraduatePrograms[0].campus,
      icon: undergraduatePrograms[0].icon,
    };

    return <TriadGridSliderInfoCard {...undergraduateData} defaultSize />;
  },
};
