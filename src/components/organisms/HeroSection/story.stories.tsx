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
  args: {
    numItems: 5,
  },
  argTypes: {
    numItems: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
};
export default meta;

const Template: StoryFn<MyComponentStoryProps> = (args) => {
  const contentSelectorItems = Array.from(
    { length: args.numItems },
    (_, index) => ({
      img: 'https://picsum.photos/200/300',
      title: `Titulo ${index}`,
      caption: 'Este es un texto de prueba',
    })
  );
  return <HeroSection contentSelectorItems={contentSelectorItems} />;
};

export const Base = Template.bind({});
Base.args = {
  numItems: 7,
};
