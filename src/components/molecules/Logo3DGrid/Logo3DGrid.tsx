import styled from 'styled-components';
import { LogoLink3D, LogoLink3DProps } from '../../atoms/LogoLink3D';
import { StyledH3 } from '../../../tokens/CustomText';

export interface Logo3DGridProps {
  sites: LogoLink3DProps[];
  title?: string;
  defaultSize?: boolean;
}

export const Logo3DGrid = ({ defaultSize, sites, title }: Logo3DGridProps) => {
  return (
    <StyledLogo3DGrid>
      {title && <StyledH3>{title}</StyledH3>}
      <StyledLogosContainer className={defaultSize ? 'defaultSize' : ''}>
        {sites.map((site, index) => (
          <LogoLink3D key={index} {...site} target='_blank' />
        ))}
      </StyledLogosContainer>
    </StyledLogo3DGrid>
  );
};

const StyledLogo3DGrid = styled.div`
  text-align: center;
  background-color: var(--colors-app-neutral-100);
  border-radius: var(--size-border-radius-medium);
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
  overflow: hidden;
  padding: var(--size-padding-large);
  width: 100%;
`;

const StyledLogosContainer = styled.div`
  display: grid;
  gap: var(--size-gap-xl);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;

  grid-template-columns: repeat(auto-fit, var(--size-icon-4xl));
  grid-template-rows: var(--size-icon-4xl);
  grid-auto-rows: var(--size-icon-4xl);
`;
