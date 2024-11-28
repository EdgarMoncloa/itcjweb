import { Meta, StoryObj } from '@storybook/react';
import { PostgraduateSection } from '.';
import { postgraduatePrograms } from '../../../mocks/postgraduatePrograms';

export default {
  title: 'Organisms/PostgraduateSection',
  component: PostgraduateSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} as Meta<typeof PostgraduateSection>;

export const Base: StoryObj<typeof PostgraduateSection> = {
  render: () => {
    return <PostgraduateSection postgraduatePrograms={postgraduatePrograms} />;
  },
};
