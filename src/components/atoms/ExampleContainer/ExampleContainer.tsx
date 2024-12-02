import styled from 'styled-components';
import { getStyledTextByName, StyledH1 } from '../../../tokens/CustomText';
import { ReactNode } from 'react';
import { TextTypes } from '../../../types/GlobalTypes';

export enum ExampleContainerColors {
  Primary100 = '--colors-app-primary-100',
  Primary300 = '--colors-app-primary-300',
  Primary500 = '--colors-app-primary-500',
  Primary700 = '--colors-app-primary-700',
  Primary900 = '--colors-app-primary-900',

  Secondary100 = '--colors-app-secondary-100',
  Secondary300 = '--colors-app-secondary-300',
  Secondary500 = '--colors-app-secondary-500',
  Secondary700 = '--colors-app-secondary-700',
  Secondary900 = '--colors-app-secondary-900',

  Neutral100 = '--colors-app-neutral-100',
  Neutral300 = '--colors-app-neutral-300',
  Neutral500 = '--colors-app-neutral-500',
  Neutral700 = '--colors-app-neutral-700',
  Neutral900 = '--colors-app-neutral-900',

  transparent = '--colors-transparent',
}

export interface ExampleContainerProps {
  color?: ExampleContainerColors;
  defaultSize?: boolean;
  children?: ReactNode;
  textType?: TextTypes;
}

export const ExampleContainer = ({
  color,
  children,
  defaultSize = false,
  textType = TextTypes.H1,
}: ExampleContainerProps) => {
  let localColor = color || ExampleContainerColors.Primary300;
  if (!color) {
    // Get random from enum ExampleContainerColors
    const colorKeys = Object.keys(ExampleContainerColors);
    let index = Math.floor(Math.random() * colorKeys.length);
    localColor =
      ExampleContainerColors[
        colorKeys[index] as keyof typeof ExampleContainerColors
      ];
  }
  const StyledText = getStyledTextByName(textType);
  return (
    <StyledExampleContainer
      as={StyledText}
      $color={localColor}
      className={defaultSize ? 'defaultSize' : ''}
    >
      {children}
    </StyledExampleContainer>
  );
};

const StyledExampleContainer = styled.div<{ $color: ExampleContainerColors }>`
  background-color: var(${(props) => props.$color});
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  word-break: break-all;
  line-height: var(--line-height-xs);
  overflow: hidden;

  &.defaultSize {
    width: 480px;
    height: 320px;
  }
`;
