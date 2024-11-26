import styled from 'styled-components';
import { StyledH1 } from '../../../tokens/CustomText';

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
}

export interface ExampleContainerProps {
  color: ExampleContainerColors;
  text?: string;
  defaultSize?: boolean;
}

export const ExampleContainer = ({
  color,
  text = 'Example',
  defaultSize = false,
}: ExampleContainerProps) => {
  console.log(color);
  return (
    <StyledExampleContainer
      as={StyledH1}
      $color={color}
      className={defaultSize ? 'defaultSize' : ''}
    >
      {text}
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

  &.defaultSize {
    width: 480px;
    height: 320px;
  }
`;
