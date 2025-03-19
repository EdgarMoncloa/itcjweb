import { StoryObj, Meta } from '@storybook/react';
import { NavOption, NavOptionProps } from './NavOption';
import * as Icons from 'react-icons/fa';
import styled from 'styled-components';
import {
  ExampleContainer,
  ExampleContainer_Colors,
} from '../../atoms/Examples/ExampleContainer';
import { TextTypes } from '../../../types/GlobalTypes';

const iconNames = Object.keys(Icons);

export default {
  title: 'Molecules/NavOption',
  component: NavOption,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // ANCHOR Contenido
    leftIcon: {
      control: {
        type: 'select',
      },
      options: ['None', ...iconNames],
      table: {
        category: 'Contenido',
        type: {
          summary: ['string', 'React.ReactNode'],
        },
      },
    },
    content: {
      description: 'El texto que se mostrará en el componente',
      control: {
        type: 'text',
      },
      table: {
        category: 'Contenido',
      },
    },
    link: {
      description:
        'En caso de que el componente tenga un link, se debe de poner la ruta',
      control: {
        type: 'text',
      },
      table: {
        category: 'Contenido',
        defaultValue: {
          summary: '#',
        },
      },
    },
    subitems: {
      description: 'Subelementos que se mostrarán cuando se hace click',
      control: {
        type: 'object',
        disable: true,
      },
      table: {
        category: 'Contenido',
        defaultValue: {
          summary: undefined,
        },
        types: {
          summary: 'NavItem[]',
        },
      },
    },
    // Storybook
    haveSubitems: {
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Solo para storybook',
        defaultValue: {
          summary: false,
        },
      },
    },
    subitemsCount: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      table: {
        category: 'Solo para storybook',
      },
    },
  },
};

type MyStoryProps = Omit<NavOptionProps, 'icon'> & {
  leftIcon: string;
  haveSubitems: boolean;
  subitemsCount: number;
};
type Story = StoryObj<MyStoryProps>;

export const Template: Story = {
  args: {
    leftIcon: 'Fa500Px',
    content: 'Texto del link',
    link: '#',
    haveSubitems: true,
    subitemsCount: 3,
  },
  render: (args) => {
    const subitems = args.haveSubitems
      ? Array.from({ length: args.subitemsCount }, (_, index) => ({
          content: `Subitem ${index + 1}`,
          link: `#${index + 1}`,
        }))
      : undefined;
    const mainElement = (
      <NavOption
        {...args}
        subitems={subitems}
        leftIcon={args.leftIcon === 'none' ? undefined : args.leftIcon}
      />
    );

    return (
      <StoryContainer>
        <ExampleContainer
          textType={TextTypes.H5}
          color={ExampleContainer_Colors.Neutral100}
        >
          Contenido Anterior
        </ExampleContainer>
        {mainElement}
        <ExampleContainer
          textType={TextTypes.H5}
          color={ExampleContainer_Colors.Neutral100}
        >
          Contenido siguiente
        </ExampleContainer>
      </StoryContainer>
    );
  },
};

const StoryContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
`;
