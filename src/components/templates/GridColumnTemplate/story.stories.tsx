import { Meta, StoryObj } from '@storybook/react';
import {
  GridColumnTemplate,
  GridColumnTemplateProps,
} from './GridColumnTemplate';
import styled from 'styled-components';

export default {
  title: 'Templates/GridColumnTemplate',
  component: GridColumnTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '360px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      description: 'Título del componente',
      control: {
        type: 'text',
      },
    },
    columns: {
      description: 'Número de columnas',
      control: {
        type: 'range',
        min: 1,
        max: 8,
        step: 1,
      },
    },
    items: {
      description: 'Lista de items',
      control: {
        type: 'range',
        min: 1,
        max: 32,
        step: 1,
      },
    },
    itemHeight: {
      description: 'Altura de cada item',
      control: {
        type: 'range',
        min: 64,
        max: 480,
        step: 32,
      },
    },
    lastRowAlign: {
      description: 'Alineación de la última fila',
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
    fillWIthBlanks: {
      description:
        'Rellenar con elementos en blanco (Se debe de pasar un elemento que actuara como espacio vacío)',
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

type MyComponentStoryProps = Omit<GridColumnTemplateProps, 'items'> & {
  items: number;
  itemHeight: number;
  fillWIthBlanks: boolean;
};

type Story = StoryObj<MyComponentStoryProps>;

export const Default: Story = {
  args: {
    title: 'Título',
    items: 10,
    itemHeight: 64,
    columns: 4,
    lastRowAlign: 'center',
    fillWIthBlanks: true,
  },
  render: (args) => {
    const colorVariables = [
      '--colors-app-main-100',
      '--colors-app-main-200',
      '--colors-app-main-300',
      '--colors-app-main-400',
    ];

    const items = Array.from({ length: args.items }, (_, i) => {
      const randomIndex = Math.floor(Math.random() * colorVariables.length);
      return (
        <StyledGridItem
          key={i}
          $backgroundColor={colorVariables[randomIndex]}
          $height={args.itemHeight}
        >
          Example
        </StyledGridItem>
      );
    });

    return (
      <GridColumnTemplate
        {...args}
        items={items}
        blankItem={
          args.fillWIthBlanks && (
            <StyledBlankItem $height={args.itemHeight}>Blank</StyledBlankItem>
          )
        }
      />
    );
  },
};

const StyledGridItem = styled.div<{
  $backgroundColor?: string;
  $height?: number;
}>`
  background-color: var(${({ $backgroundColor }) => $backgroundColor});
  height: 100%;
  width: 100%;
  text-align: center;
  color: var(--colors-app-text-dark);
  height: ${({ $height }) => $height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBlankItem = styled(StyledGridItem)`
  background-color: var(--colors-app-neutral-100);
`;
