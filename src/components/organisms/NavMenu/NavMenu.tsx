import styled from "styled-components";
import ITCJ_LIEBRE_PATRON_ANIMADO from "/videos/ITCJ_LIEBRE_PATRON_ANIMADO.webm";
import { StyledH6 } from "../../../tokens/CustomText";
import { ReactNode } from "react";

export interface NavMenuProps
  extends React.ComponentPropsWithRef<typeof StyledNavMenu> {
  defaultSize?: boolean;
  headerTitle?: ReactNode;
  contentElelments: ReactNode;
}

export const NavMenu = ({
  defaultSize = false,
  headerTitle,
  contentElelments,
  ...rest
}: NavMenuProps) => {
  return (
    <StyledNavMenu className={defaultSize ? "defaultSize" : ""} {...rest}>
      {headerTitle && <StyledTitle>{headerTitle}</StyledTitle>}
      <StyledContentContainer>{contentElelments}</StyledContentContainer>
      <StyledBackgroundVideo autoPlay muted loop playsInline>
        <source src={ITCJ_LIEBRE_PATRON_ANIMADO} type="video/webm" />
      </StyledBackgroundVideo>
    </StyledNavMenu>
  );
};

const StyledNavMenu = styled.div`
  /* Display */
  width: 100%;
  height: 100%;
  transition: background-color var(--transition-normal);
  position: relative;

  /* Visual */
  background-color: var(--colors-app-primary-50);
  border-radius: var(--size-border-radius-small);

  &:hover {
    background-color: var(--colors-app-primary-50);
  }

  &.defaultSize {
    width: var(--size-width-5-cols);
    height: var(--size-height-16-rows);
  }
`;

const StyledTitle = styled(StyledH6)`
  width: 100%;
  background-color: var(--colors-app-primary-200);
  z-index: 1;
  text-align: center;
  padding: var(--size-padding-small) var(--size-padding-xs);
  position: relative;
  transition: background-color var(--transition-normal);

  ${StyledNavMenu}:hover & {
    background-color: var(--colors-app-primary-200);
  }
`;

const StyledContentContainer = styled.div`
  
  padding: var(--size-padding-medium);
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const StyledBackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity var(--transition-normal);
  pointer-events: none;
  z-index: 0;

  ${StyledNavMenu}:hover & {
    opacity: 0.25;
  }
`;
