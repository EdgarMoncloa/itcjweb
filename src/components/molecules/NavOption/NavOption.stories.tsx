import { StoryObj, Meta } from '@storybook/react';
import { NavOption, NavOptionProps } from './NavOption';
import * as Icons from 'react-icons/fa';
import styled from 'styled-components';
import {
  ExampleContainer,
  ExampleContainerColors,
} from '../../atoms/ExampleContainer';
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
    leftIcon: {
      control: {
        type: 'select',
      },
      options: iconNames,
    },
    haveSubitems: {
      control: {
        type: 'boolean',
      },
    },
    defaultSize: {
      control: {
        type: 'boolean',
        disable: true,
      },
    },
  },
};

type MyStoryProps = Omit<NavOptionProps, 'icon'> & {
  leftIcon: string;
  haveSubItems: boolean;
};
type Story = StoryObj<MyStoryProps>;

export const Template: Story = {
  args: {
    leftIcon: 'Fa500Px',
    content: 'NavOption',
    // link: '#',
    haveSubItems: true,
  },
  render: (args) => {
    const subitems = args.haveSubItems
      ? [
          {
            content: 'Subitem 1',
            link: '#',
          },
          {
            content: 'Subitem 2',
            link: '#',
          },
          {
            content: 'Subitem 3',
            link: '#',
          },
        ]
      : undefined;
    const mainElement = <NavOption {...args} subitems={subitems} />;

    return (
      <StoryContainer>
        <ExampleContainer
          textType={TextTypes.H5}
          color={ExampleContainerColors.Neutral100}
        >
          Contenido Anterior
        </ExampleContainer>
        {mainElement}
        <ExampleContainer
          textType={TextTypes.H5}
          color={ExampleContainerColors.Neutral100}
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
