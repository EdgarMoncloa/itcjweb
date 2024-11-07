import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { HeroSection } from '.';
interface MyComponentStoryProps {
  numItems: number;
}

const meta: Meta = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  argTypes: {},
};
export default meta;

const Template: StoryFn<MyComponentStoryProps> = (args) => {
  return <HeroSection />;
};

export const Base = Template.bind({});
Base.args = {};
