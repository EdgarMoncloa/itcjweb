import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled, { css } from "styled-components";
import Logo_Liebre_Circuitos from "/images/Logo_Liebre_Circuitos_2.png";
import { GridWithTitleSeparatorProps_TextAlign } from "./GridWithTitleSeparator.types";

type Item = {
  title: ReactNode;
  element: ReactNode;
};

export interface GridWithTitleSeparatorProps
  extends ComponentPropsWithoutRef<"div"> {
  items: Item[];
  textAlign?: GridWithTitleSeparatorProps_TextAlign;
}

// SECTION Component
export const GridWithTitleSeparator = ({
  items,
  textAlign = GridWithTitleSeparatorProps_TextAlign.JUSTIFY,
  ...props
}: GridWithTitleSeparatorProps) => {
  const getContentElement = (element: ReactNode, idx: number) => {
    const classNames: string[] = [];
    switch (idx) {
      case 0:
        classNames.push("float-right");
        break;
      case items.length - 1:
        classNames.push("float-left");
        break;
      default:
        classNames.push("float-left", "float-right");
        break;
    }
    return (
      <StyledContent>
        {classNames.map((classname) => (
          <StyledCircleClipPath
            key={classname}
            className={classname}
          ></StyledCircleClipPath>
        ))}
        <StyledContentText
          className={classNames.length <= 1 ? classNames[0] : ""}
          $textAlign={textAlign}
        >
          {element}
        </StyledContentText>
      </StyledContent>
    );
  };
  // SECTION Render
  return (
    <StyledGridWithTitleSeparator {...props}>
      {items.map((item, idx) => {
        return (
          <StyledColContainer key={`col_${idx}`}>
            {/* ANCHOR Title and Separator*/}
            <StyledTitleAndSeparatorContainer
              key={`title_${idx}`}
              className={idx === items.length - 1 ? "last" : ""}
            >
              {idx !== items.length - 1 && (
                <StyledSeparator
                  key={`separator_${idx}`}
                  style={{ gridArea: `separator_${idx}` }}
                >
                  <StyledcompetencesLogo
                    src={Logo_Liebre_Circuitos}
                    alt="Logo Liebre Circuitos"
                    style={{ gridArea: "logo" }}
                  />
                </StyledSeparator>
              )}
              <StyledTitleWrapper>
                <StyledTitlePadding>
                  <StyledTitle>{item.title}</StyledTitle>
                </StyledTitlePadding>
              </StyledTitleWrapper>
            </StyledTitleAndSeparatorContainer>

            {/* ANCHOR Content */}
            <StyledContentContainer key={`content_${idx}`}>
              {getContentElement(item.element, idx)}
            </StyledContentContainer>
          </StyledColContainer>
        );
      })}
    </StyledGridWithTitleSeparator>
  );
  // !SECTION Render
};
// !SECTION Component

// SECTION Styles
// ANCHOR Grid
const StyledGridWithTitleSeparator = styled.div`
  display: grid;
  gap: var(--size-gap-large);
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  min-width: var(--size-width-6-cols);
`;
const StyledColContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:
    calc(var(--size-height-2-rows) + var(--size-padding-medium))
    auto;
  justify-items: center;
  width: 100%;
`;

// ANCHOR Title and Separator
const StyledTitleAndSeparatorContainer = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto 0 0;
  position: relative;
  width: 66%;

  &.last {
    margin: 0 0 0 auto;
  }
`;

const StyledTitleWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const StyledTitlePadding = styled.div`
  align-items: flex-end;
  border-bottom: var(--size-border-small) solid var(--colors-app-primary-700);
  display: flex;
  height: 100%;
  overflow: hidden;
  padding-bottom: var(--size-padding-small);
  width: 100%;
`;

const StyledTitle = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  width: 100%;
  word-break: break-word;
`;

const StyledSeparator = styled.div`
  display: flex;
  height: 100%;
  left: calc(100% + (var(--size-gap-large) / 5));
  overflow: visible;
  position: absolute;
  top: 0;
  width: calc(100% + var(--size-gap-large));
  z-index: var(--z-index-above-background);
`;

const StyledcompetencesLogo = styled.img`
  height: calc(200% - var(--size-border-small));
  object-fit: fill;
  width: 100%;
`;

// ANCHOR Content
const StyledContentContainer = styled.div`
  height: max-content;
  width: 100%;
`;
const StyledCircleClipPath = styled.div`
  height: calc(var(--size-height-2-rows) * 1.5);
  width: 33%;

  &.float-left {
    clip-path: ellipse(100% 65% at 0% 0%);
    float: left;
    shape-outside: ellipse(100% 65% at 0% 0%);
  }

  &.float-right {
    clip-path: ellipse(100% 65% at 100% 0%);
    float: right;
    shape-outside: ellipse(100% 65% at 100% 0%);
  }
`;
const StyledContent = styled.div`
  height: 100%;
  width: 100%;
`;

type StyledCOntentTextProps = {
  $textAlign: GridWithTitleSeparatorProps_TextAlign;
};
const cssTextAlignToBorder = css`
  &.float-left {
    text-align: right;
  }
  &.float-right {
    text-align: left;
  }
`;
const cssTextAlignToSeparator = css`
  &.float-left {
    text-align: left;
  }
  &.float-right {
    text-align: right;
  }
`;
const cssTextAlignJustify = css`
  &.float-left {
    text-align-last: right;
  }
  &.float-right {
    text-align-last: left;
  }
`;
const StyledContentText = styled.div<StyledCOntentTextProps>`
  height: 100%;
  text-align: justify;

  width: 100%;

  ${(p) => p.$textAlign === "to-boder" && cssTextAlignToBorder}
  ${(p) => p.$textAlign === "to-separator" && cssTextAlignToSeparator}
  ${(p) => p.$textAlign === "justify" && cssTextAlignJustify}
`;
// !SECTION Styles
