import { ComponentPropsWithRef, ReactNode } from "react";
import { BaseButton } from "../BaseButton";
import { IoDocumentTextOutline } from "react-icons/io5";

import { BiLinkExternal } from "react-icons/bi";
import styled from "styled-components";
import { StyledBody1, StyledTextCaption } from "../../../../tokens/CustomText";
import { COLOR_VARIANT } from "../../../../types/GlobalTypes";
interface DocumentLinkProps extends ComponentPropsWithRef<typeof BaseButton> {
  children?: ReactNode;
  href?: string;
  fileType?: string;
  colorVariant?: COLOR_VARIANT.primary | COLOR_VARIANT.neutral;
}

export const DocumentLink = ({
  children,
  href,
  ...props
}: DocumentLinkProps) => {
  const colorVariantClassName = props.colorVariant
    ? `colorVariant-${props.colorVariant}`
    : "";
  return (
    <StyledBaseButton
      {...props}
      className={`${props.className} ${colorVariantClassName}`}
      icon={
        <StyledIconContainer>
          <IoDocumentTextOutline />
        </StyledIconContainer>
      }
      onClick={() => {
        window.open(href, "_blank");
        props.onClick?.();
      }}
    >
      <StyledLinkContainer>
        <StyledTextContainer>{children}</StyledTextContainer>
        <StyledExtensionContainer>
          PDF
          <BiLinkExternal />
        </StyledExtensionContainer>
      </StyledLinkContainer>
    </StyledBaseButton>
  );
};

const StyledBaseButton = styled(BaseButton)`
  color: var(--colors-app-text-dark);
  display: flex;
  justify-content: flex-start;
  padding: var(--size-padding-medium) var(--size-padding-medium);
  width: 100%;
  height: 100%;

  &.colorVariant-neutral {
    color: var(--colors-app-text-dark);
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: center;
  row-gap: var(--size-gap-small);
`;
const StyledTextContainer = styled(StyledBody1)`
  align-items: center;
  justify-content: center;
  gap: var(--size-padding-small);
`;

const StyledExtensionContainer = styled(StyledTextCaption)`
  display: flex;
  align-items: stretch;
  gap: var(--size-gap-small);
`;

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--size-icon-2xl);
`;
