import { Meta, StoryObj } from '@storybook/react';
import { UndergraduateInfoCard } from './UnderGraduateInfoCard';
import { undergraduatePrograms } from '../../../mocks/undergraduatePrograms';

const meta: Meta = {
  title: 'Molecules/UndergraduateInfoCard',
  component: UndergraduateInfoCard,
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
      major: undergraduatePrograms[0].title,
      majorKey: undergraduatePrograms[0].key,
      description: {
        text: undergraduatePrograms[0].description,
        maxLines: 6,
      },
      campuses: undergraduatePrograms[0].campus,
      icon: undergraduatePrograms[0].icon,
    };

    return <UndergraduateInfoCard {...undergraduateData} />;
  },
};
