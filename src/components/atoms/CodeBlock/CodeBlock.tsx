import React, { useState } from "react";
import styled from "styled-components";
import { StyledUnstyledButton } from "../../../tokens/UnstyledElements";
import { StyledBody1, StyledBody2 } from "../../../tokens/CustomText";
import { AiOutlineCopy } from "react-icons/ai";
import { extractTextFromReactElement } from "../../../utils/extractTextFromReactElement";
import { Tooltip } from "../Tooltip";
import { useAppConfig } from "../../../store/useAppConfig";

export interface codeBlockProps {
  children: React.ReactNode;
}

export const CodeBlock = ({ children }: codeBlockProps) => {
  const { transition } = useAppConfig();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleClick = async () => {
    await navigator.clipboard.writeText(extractTextFromReactElement(children));
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, transition.normal);
  };

  return (
    <StyledCodeBlock>
      <StyledCodeBlockTitle>
        <StyledBody2>Código</StyledBody2>
        <StyledCopyButton onClick={handleClick}>
          <Tooltip
            tooltipContent="Codigo copiado"
            isVisible={tooltipVisible}
            position="top"
            colorVariant="neutral"
          >
            <StyledIconWrapper>
              <AiOutlineCopy />
            </StyledIconWrapper>
          </Tooltip>
        </StyledCopyButton>
      </StyledCodeBlockTitle>
      <StyledCodeBlockContent>
        <StyledBody1>{children}</StyledBody1>
      </StyledCodeBlockContent>
    </StyledCodeBlock>
  );
};

const StyledCodeBlock = styled.pre`
  background-color: var(--colors-app-neutral-800);
  color: var(--colors-app-text-light);
  border-radius: var(--size-border-radius-medium);
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const StyledCodeBlockTitle = styled.div`
  width: 100%;
  background-color: var(--colors-app-neutral-900);
  padding: var(--size-padding-small) var(--size-padding-medium);
  color: var(--colors-app-text-light);
  border-radius: var(--size-border-radius-small);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const StyledCodeBlockContent = styled.code`
  width: 100%;
  padding: var(--size-padding-small) var(--size-padding-medium)
    var(--size-padding-medium);
  color: var(--colors-app-text-light);
  font-size: var(--font-size-body3);
  border-radius: var(--size-border-radius-small);
`;

const StyledCopyButton = styled(StyledUnstyledButton)`
  color: var(--colors-app-text-light);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--size-icon-medium);
  height: var(--size-icon-large);
  width: var(--size-icon-large);
  border-radius: var(--size-border-radius-small);
  cursor: pointer;

  &:hover {
    background-color: var(--colors-app-neutral-800);
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size-icon-large);
  width: var(--size-icon-large);
`;
