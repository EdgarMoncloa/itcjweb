import { ComponentPropsWithRef, ReactNode } from "react";
import { BaseButton } from "../BaseButton";
import { IoDocumentTextOutline } from "react-icons/io5";

import { BiLinkExternal } from "react-icons/bi";
import styled from "styled-components";
import { StyledBody1, StyledTextCaption } from "../../../../tokens/CustomText";

interface DocumentLinkProps extends ComponentPropsWithRef<typeof BaseButton> {
  children?: ReactNode;
  href?: string;
  fileType?: string;
}

export const DocumentLink = ({
  children,
  href,
  ...props
}: DocumentLinkProps) => {
  return (
    <StyledBaseButton
      {...props}
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
  display: flex;
  justify-content: flex-start;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: center;
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
