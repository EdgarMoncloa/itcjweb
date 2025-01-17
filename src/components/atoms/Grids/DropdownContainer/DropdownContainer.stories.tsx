import { StoryObj, Meta } from '@storybook/react';
import { DropdownContainer } from './DropdownContainer';
import { ExampleContainer, ExampleContainerColors } from '../../ExampleContainer';
import { TextTypes } from '../../../../types/GlobalTypes';
import styled from 'styled-components';
import { StyledUnstyledButton } from '../../../../tokens/UnstyledElements';
import { useState } from 'react';

const meta: Meta<typeof DropdownContainer> = {
  title: 'Atoms/Grids/DropdownContainer',
  component: DropdownContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    secondaryContent: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

// type CustomArgs = {};

type Story = StoryObj<typeof DropdownContainer>;

export const Base: Story = {
  args: {
    secondaryContent: 'Contenedor secundario',
    defaultSize: true,
  },
  render: (args) => {
    const [showContent, setShowContent] = useState(false);
    const primaryContent = (
      <StyledUnstyledButton onClick={() => setShowContent(!showContent)}>
        <ExampleContainer
          textType={TextTypes.H5}
          color={ExampleContainerColors.Primary500}
        >
          Contenedor primario (Clickeame 😉)
        </ExampleContainer>
      </StyledUnstyledButton>
    );
    const secondaryContent = (
      <ExampleContainer
        textType={TextTypes.H5}
        color={ExampleContainerColors.Primary300}
      >
        {args.secondaryContent}
      </ExampleContainer>
    );
    return (
      <StoryContainer>
        <ExampleContainer
          textType={TextTypes.H5}
          color={ExampleContainerColors.Neutral300}
        >
          Contenido Anterior
        </ExampleContainer>
        <DropdownContainer
          {...args}
          primaryContent={primaryContent}
          secondaryContent={secondaryContent}
          showContent={showContent}
        />
        <ExampleContainer
          textType={TextTypes.H5}
          color={ExampleContainerColors.Neutral300}
        >
          Contenido siguiente
        </ExampleContainer>
      </StoryContainer>
    );
  },
};

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
`;
