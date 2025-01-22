import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineFieldTime } from "react-icons/ai";
import { ReactNode } from "react";
import styled from "styled-components";
import { DynamicIcon } from "../../../atoms/Icons/DynamicIcon";

export interface DiagramTimelineProps {
  items: ReactNode[];
  firstCentered: boolean;
  lastCentered: boolean;
}

export const DiagramTimeline = ({
  items,
  firstCentered,
  lastCentered,
}: DiagramTimelineProps) => {
  const stylicedItems = items.map((item, idx) => {
    const isFirstAndCentered = idx === 0 && firstCentered;
    const isLastAndCentered = idx === items.length - 1 && lastCentered;

    let contentClassname = idx % 2 === 0 ? "left" : "right";
    if (isFirstAndCentered) contentClassname = "center-first";
    if (isLastAndCentered) contentClassname = "center-last";
    return (
      <>
        <StyledItem>
          {!isFirstAndCentered && !isLastAndCentered && (
            <StyledItemIcon>
              <AiOutlineFieldTime />
            </StyledItemIcon>
          )}
          <StyledContentWrapper className={contentClassname}>
            <StyledContent>{item}</StyledContent>
          </StyledContentWrapper>
        </StyledItem>
        {idx !== items.length - 1 && (
          <StyledArrowIcon>
            <DynamicIcon icon={<AiFillCaretDown />} size="xl" />
          </StyledArrowIcon>
        )}
      </>
    );
  });
  return <StyledDiagramTimeLine>{stylicedItems}</StyledDiagramTimeLine>;
};

const StyledDiagramTimeLine = styled.div`
  width: 100%;
  /* height: 100%; */
  overflow: auto;
  padding: var(--size-height-2-row) var(--size-padding-medium);
  border: var(--size-border-medium) solid var(--colors-app-primary-700);
  display: grid;
  grid-template-columns: var(--size-width-1-cols);
  grid-auto-rows: var(--size-height-2-row) var(--size-icon-xl);
  justify-content: center;
`;

const StyledItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledItemIcon = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  font-size: var(--size-icon-2xl);
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-app-neutral-900);
  cursor: pointer;

  ${StyledItem}:hover & {
    background-color: var(--colors-app-primary-100);
  }
`;

const StyledContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: var(--size-width-4-cols);
  height: 175%;
  overflow: hidden;
  border: var(--size-border-small) solid var(--colors-app-neutral-700);

  border-start-start-radius: var(--size-border-radius-large);
  border-end-start-radius: var(--size-border-radius-large);

  &.left {
    transform: translateY(-50%);
    right: 100%;
  }
  &.right {
    transform: translateY(-50%);
    direction: rtl;
    left: 100%;
    text-align: left;
  }

  &.center-first,
  &.center-last {
    border-radius: var(--size-border-radius-large);
    width: var(--size-width-9-cols);
    transform: translateX(-50%);
    left: 50%;
    text-align: center;
  }
  &.center-first {
    top: inherit;
    bottom: 0;
  }
  &.center-last {
    top: 0;
  }

  ${StyledItem}:hover & {
    border: var(--size-border-small) solid var(--colors-app-primary-700);
  }
`;

const StyledContent = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: var(--size-padding-small);
`;

const StyledArrowIcon = styled.div`
  display: flex;
  margin: auto;
`;
