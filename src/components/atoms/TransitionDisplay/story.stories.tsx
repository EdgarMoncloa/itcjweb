import styled from 'styled-components';
import { TransitionDisplay } from '.';
import { ContentLink } from '../ContentLink';
import { useEffect, useState } from 'react';

const meta = {
  title: 'Atoms/TransitionDisplay',
  component: TransitionDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    Animar: true,
    delay: 'normal',
  },
  argTypes: {
    Animar: {
      control: { type: 'boolean' },
    },
    delay: {
      control: {
        type: 'select',
      },
    },
    fromElement: {
      control: { type: 'object' },
      description: 'Es el primer elemento a mostrar',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'null' },
      },
    },
  },
};

export default meta;

export const Base = (args: any) => {
  const fromElement = <StyledFromELement>Primer Elemento</StyledFromELement>;
  const toElement = <StyledToElement>Segundo Elemento</StyledToElement>;

  return (
    <TransitionDisplay
      key={args['Animar']}
      fromElement={fromElement}
      toElement={toElement}
      haveDefaultSize
      transition='circleFromCenter'
      delay={args.delay}
    />
  );
};

const StyledFromELement = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--colors-app-main-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-h1);
`;

const StyledToElement = styled(StyledFromELement)`
  background-color: var(--colors-app-secondary-300);
`;
