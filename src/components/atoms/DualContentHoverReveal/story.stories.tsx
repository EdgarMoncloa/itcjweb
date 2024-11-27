import { Meta, StoryObj } from '@storybook/react';
import { DualContentHoverReveal } from './DualContentHoverReveal';
import { ExampleContainer, ExampleContainerColors } from '../ExampleContainer';

export default {
  title: 'Atoms/DualContentHoverReveal',
  component: DualContentHoverReveal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} as Meta<typeof DualContentHoverReveal>;

export const Base: StoryObj<typeof DualContentHoverReveal> = {
  render: () => {
    return (
      <DualContentHoverReveal
        defaultSize
        primaryContent={
          <ExampleContainer
            color={ExampleContainerColors.transparent}
            text='Primary Content'
          />
        }
        secondaryContent={
          <ExampleContainer
            color={ExampleContainerColors.transparent}
            text='Secondary Content'
          />
        }
      />
    );
  },
};
