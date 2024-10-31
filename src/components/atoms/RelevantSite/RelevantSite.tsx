import { SlideCover } from '../SlideCover';
import { StyledRelevantSite, StyledTitle } from './style';
import React, { ReactElement, useState } from 'react';

export type RelevantSiteProps = {
  icon?: ReactElement;
  text: string;
  toSite: string;
};

export const RelevantSite = ({ icon, text, toSite }: RelevantSiteProps) => {
  const [isHovered, setIsHovered] = useState(false);

  let IconElement;
  if (icon) {
    IconElement = React.cloneElement(icon, {
      size: 40,
    });
  }

  return (
    <StyledRelevantSite
      href={toSite}
      target='_blank'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledTitle>{IconElement}</StyledTitle>
      <StyledTitle>{text}</StyledTitle>
      <SlideCover position={'bottom'} isVisible={isHovered} />
    </StyledRelevantSite>
  );
};
