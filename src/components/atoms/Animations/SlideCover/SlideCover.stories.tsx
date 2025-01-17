import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { SlideCover } from '.';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { StyledH1 } from '../../../../tokens/CustomText';

interface MyComponentStoryProps {
  numItems: number;
}

const meta: Meta = {
  title: 'Atoms/Animations/SlideCover',
  component: SlideCover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
  argTypes: {
    numItems: {
      control: { type: 'number', min: 0, max: 10 }, // Control tipo número
      defaultValue: 3, // El valor por defecto es 3
    },
  },
};
export default meta;

const Template: StoryFn<MyComponentStoryProps> = (args) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledCoverExapleContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledH1>Hover Me!</StyledH1>
      <SlideCover isVisible={isHovered} position='bottom' />
    </StyledCoverExapleContainer>
  );
};

export const Base = Template.bind({});

Base.args = {
  numItems: 3,
};

const StyledCoverExapleContainer = styled.div`
  align-items: center;
  border: 1px solid var(--colors-app-primary-700);
  display: flex;
  height: 200px;
  justify-content: center;
  margin: var(--size-margin-large);
  overflow: hidden;
  position: relative;
  width: 400px;
`;
