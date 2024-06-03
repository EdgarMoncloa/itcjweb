import { useEffect, useRef, useState } from "react";
import {
  StyledMainContainer,
  StyledMainText,
  StyledNavMainItem,
  StyledSubOptionsContainer,
  StyledSubOptionsWrapper,
} from "./style";

export enum SimpleNavMenuTypes {
  gob,
  tecnm,
  itcj,
}

export type ButtonProps = {
  type: SimpleNavMenuTypes;
  content: string | React.ReactNode | React.ReactNode[];
  link?: string;
  subItems?: Array<{
    link: string;
    content: string | React.ReactNode | React.ReactNode[];
    subItems?: Array<{
      link: string;
      content: string | React.ReactNode | React.ReactNode[];
    }>;
  }>;
};

export default function SimpleNavMenu({
  type,
  content,
  subItems,
  link,
}: ButtonProps) {
  const SubItems = subItems && subItems.length > 0 && (
    <StyledSubOptionsWrapper>
      <StyledSubOptionsContainer $type={type}>
        {subItems.map((option) => (
          <StyledNavMainItem $type={type} $isSubItem>
            <StyledMainText href={link}>{option.content}</StyledMainText>
          </StyledNavMainItem>
        ))}
      </StyledSubOptionsContainer>
    </StyledSubOptionsWrapper>
  );
  return (
    <StyledMainContainer>
      <StyledNavMainItem $type={type}>
        <StyledMainText href={link}>{content}</StyledMainText>
      </StyledNavMainItem>
      {SubItems}
    </StyledMainContainer>
  );
}
