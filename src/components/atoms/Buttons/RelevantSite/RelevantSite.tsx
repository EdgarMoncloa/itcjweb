import { ReactElement, useState } from "react";
import styled, { keyframes } from "styled-components";
import { SlideCover } from "../../Animations/SlideCover";
import { StyledH6 } from "../../../../tokens/CustomText";
import { Link } from "react-router";

export type RelevantSiteProps = {
  icon?: ReactElement;
  text: string;
  toSite: string;
  defaultSize?: boolean;
  target?: string;
};

export const RelevantSite = ({
  icon,
  text,
  toSite,
  defaultSize,
  target,
}: RelevantSiteProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledRelevantSite
      to={toSite}
      target={target || "_blank"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={defaultSize ? "defaultSize" : ""}
    >
      <StyledIconContainer>{icon}</StyledIconContainer>
      <StyledBaseContainer>{text}</StyledBaseContainer>
      <SlideCover position={"bottom"} isVisible={isHovered} />
    </StyledRelevantSite>
  );
};

const colorCHange = keyframes`
  to{
    color: var(--colors-app-text-light);
  }
`;
export const StyledRelevantSite = styled(Link)`
  border-radius: var(--size-border-radius-medium, 8px);
  border: 2px solid var(--colors-app-primary-700, #c11627);
  color: var(--colors-app-text-dark);
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;

  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 16px;
  justify-content: center;
  padding: 8px;
  position: relative;
  width: 100%;
  height: 100%;

  &.defaultSize {
    height: var(--size-height-2-rows);
    width: var(--size-width-4-cols);
  }

  &:hover {
    animation: ${colorCHange} 300ms ease forwards;
  }
`;

export const StyledBaseContainer = styled(StyledH6)`
  line-height: var(--line-height-small);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIconContainer = styled(StyledBaseContainer)`
  font-size: var(--size-icon-xl);
`;
