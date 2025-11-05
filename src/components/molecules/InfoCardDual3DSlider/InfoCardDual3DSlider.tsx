import styled from "styled-components";
import { DualContentHover3DSlider } from "../../atoms/Grids/DualContentHover3DSlider";
import { StyledBody1, StyledH5, StyledH6 } from "../../../tokens/CustomText";
import { DynamicIcon } from "../../atoms/Icons/DynamicIcon";
import { ComponentPropsWithRef } from "react";
import { useNavigate } from "react-router";

export interface InfoCardDual3DSliderProps
  extends ComponentPropsWithRef<typeof SyledInfoCardDual3DSlider> {
  defaultSize?: boolean;
  icon?: React.ReactNode;
  title: string;
  tags?: string[];
  description: string;
  colorVariant?: "primary";
  href?: string;
}

export const InfoCardDual3DSlider = ({
  defaultSize,
  icon,
  title,
  tags,
  description,
  colorVariant,
  href,
  ...props
}: InfoCardDual3DSliderProps) => {
  const firstContent = (
    <StyledContent>
      <DynamicIcon icon={icon} size={"3xl"} />
      <StyledH6>{title}</StyledH6>
    </StyledContent>
  );
  const secondContent = (
    <StyledLeftContainer>
      <StyledBody1>{description}</StyledBody1>
    </StyledLeftContainer>
  );
  const navigate = useNavigate();
  return (
    <SyledInfoCardDual3DSlider
      className={defaultSize ? "defaultSize" : ""}
      {...props}
      onClick={(event) => {
        if (href) {
          navigate(href);
        }
        if (props.onClick) {
          props.onClick(event);
        }
      }}
    >
      <DualContentHover3DSlider
        firstContent={firstContent}
        secondContent={secondContent}
      />
    </SyledInfoCardDual3DSlider>
  );
};

const SyledInfoCardDual3DSlider = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  &.defaultSize {
    width: var(--size-width-5-cols);
    height: calc(var(--size-height-5-rows));
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-xs);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  line-height: var(--line-height-xs);
  text-align: center;
  padding: var(--size-padding-xs);
  /* color: var(--colors-app-text-light);
  transition: color var(--transition-fast);
  ${SyledInfoCardDual3DSlider}:hover & {
    color: var(--colors-app-text-dark);
  } */
`;

const StyledLeftContainer = styled(StyledContent)`
  text-align: left;
  padding: var(--size-padding-medium);
`;
