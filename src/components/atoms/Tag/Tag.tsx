import styled from "styled-components";
import { getStyledTextByName } from "../../../tokens/CustomText";
import { colorVariant, TextTypes } from "../../../types/GlobalTypes";

interface TagProps {
  colorVariant?: colorVariant;
  textSize?: TextTypes;
  text: string;
  hasPadding?: boolean;
}

export const Tag = ({
  colorVariant = "primary",
  textSize = TextTypes.body1,
  text,
  hasPadding = true,
}: TagProps) => {
  const classes = [colorVariant, hasPadding === false ? "noPadding" : ""];
  const asTextElement = getStyledTextByName(textSize);

  return (
    <StyledTag as={asTextElement} className={classes.join(" ")}>
      {text}
    </StyledTag>
  );
};

const StyledTag = styled.div`
  width: max-content;
  height: max-content;
  cursor: default;
  border-radius: var(--size-border-radius-large);
  padding: var(--size-padding-2xs) var(--size-padding-small);
  color: var(--colors-app-text-dark);

  /* Variants */
  &.noPadding {
    padding: 0 var(--size-padding-small);
  }

  &.primary {
    border: var(--size-border-small) solid var(--colors-app-primary-500);
    &:hover {
      background-color: var(--colors-app-primary-100);
    }
  }

  &.secondary {
    border: var(--size-border-small) solid var(--colors-app-secondary-700);
    &:hover {
      background-color: var(--colors-app-secondary-100);
    }
  }

  &.neutral {
    border: var(--size-border-small) solid var(--colors-app-neutral-800);
    &:hover {
      background-color: var(--colors-app-neutral-100);
    }
  }
`;
