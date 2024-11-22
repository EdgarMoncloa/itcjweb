import styled from 'styled-components';
import { getStyledTextByName } from '../../../tokens/CustomText';
import { TextTypes } from '../../../types/GlobalTypes';

interface TagProps {
  variant?: 'primary' | 'secondary' | 'default';
  textSize?: TextTypes;
  text: string;
  hasPadding?: boolean;
}

export const Tag = ({
  variant = 'default',
  textSize = TextTypes.body1,
  text,
  hasPadding = true,
}: TagProps) => {
  const classes = [variant, hasPadding === false ? 'noPadding' : ''];
  const asTextElement = getStyledTextByName(textSize);

  return (
    <StyledTag as={asTextElement} className={classes.join(' ')}>
      {text}
    </StyledTag>
  );
};

const StyledTag = styled.div`
  width: max-content;
  height: max-content;
  cursor: default;
  border-radius: var(--size-border-radius-large);
  border: var(--size-border-small) solid var(--colors-app-neutral-800);
  padding: var(--size-padding-2xs) var(--size-padding-small);

  &.primary {
    border: var(--size-border-small) solid var(--colors-app-main-500);
    &:hover {
      background-color: var(--colors-app-main-100);
    }
  }
  &.secondary {
    border: var(--size-border-small) solid var(--colors-app-secondary-700);
    &:hover {
      background-color: var(--colors-app-secondary-100);
    }
  }

  &.default {
    border: var(--size-border-small) solid var(--colors-app-neutral-800);
    &:hover {
      background-color: var(--colors-app-neutral-100);
    }
  }

  &.noPadding {
    padding: 0 var(--size-padding-small);
  }
`;
