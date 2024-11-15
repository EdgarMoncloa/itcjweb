import styled from 'styled-components';

interface TagProps {
  variant?: 'primary' | 'secondary' | 'default';
  text: string;
}

export const Tag = ({ variant = 'default', text }: TagProps) => {
  return <StyledTag className={variant}>{text}</StyledTag>;
};

const StyledTag = styled.span`
  cursor: default;
  border-radius: var(--size-border-radius-large);
  border: var(--size-border-small) solid var(--colors-app-neutral-800);
  padding: var(--size-padding-xs) var(--size-padding-medium);

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
`;
