import { RiRadioButtonLine } from 'react-icons/ri';
import { RiCheckboxBlankLine } from 'react-icons/ri';
import styled from 'styled-components';
import { StyledH3, StyledH4, StyledH5 } from '../../../tokens/CustomText';
import { useAppConfig } from '../../../store/useAppConfig';
import { Tag } from '../../atoms/Tag';
import { TextTypes } from '../../../types/GlobalTypes';
import { useEffect, useRef, useState } from 'react';

export interface InfoCardProps {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

export const InfoCard = ({ title, description, tags, icon }: InfoCardProps) => {
  return (
    <StyledMainContainer className='defaultSize'>
      <StyledLeftContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledTagsContainer>
          {tags.map((tag, index) => {
            return (
              <Tag
                key={index}
                text={tag}
                variant='primary'
                hasPadding={false}
                textSize={TextTypes.overline}
              />
            );
          })}
        </StyledTagsContainer>
      </StyledLeftContainer>
      <StyledIconWrapper>{icon}</StyledIconWrapper>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  align-items: center;
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-main);
  cursor: pointer;
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  overflow: hidden;
  padding: var(--size-padding-small);
  transition: var(--transition-fast) background-color;

  &:hover {
    background-color: var(--colors-app-main-100);
  }

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: calc(var(--size-height-4-row));
  }
`;

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-small);
`;

const StyledTitle = styled(StyledH5)`
  text-align: center;
  line-height: var(--line-height-xs);
  color: var(--colors-itcj-main);
`;

const StyledTagsContainer = styled.div`
  width: 100%;
  height: 100%;
  column-gap: var(--size-gap-small);
  row-gap: var(--size-gap-xs);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
`;

const StyledIconWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: var(--size-icon-4xl);
  height: 100%;
  justify-content: center;
  width: 100%;
  color: var(--colors-app-main-700);
`;
