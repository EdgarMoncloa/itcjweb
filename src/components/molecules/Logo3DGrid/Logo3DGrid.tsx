import styled from 'styled-components';
import { LogoLink3D, LogoLink3DProps } from '../../atoms/LogoLink3D';

export interface Logo3DGridProps {
  defaultSize?: boolean;
  sites: LogoLink3DProps[];
}

export const Logo3DGrid = ({ defaultSize, sites }: Logo3DGridProps) => {
  return (
    <StyledLogo3DGrid className={defaultSize ? 'defaultSize' : ''}>
      {sites.map((site, index) => (
        <LogoLink3D key={index} {...site} target='_blank' />
      ))}
    </StyledLogo3DGrid>
  );
};

const StyledLogo3DGrid = styled.div`
  display: grid;
  gap: var(--size-gap-xl);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;
  overflow: hidden;
  background-color: var(--colors-app-neutral-100);
  border-radius: var(--size-border-radius-medium);
  padding: var(--size-padding-large);

  grid-template-columns: repeat(auto-fit, var(--size-icon-4xl));
  grid-template-rows: var(--size-icon-4xl);
  grid-auto-rows: var(--size-icon-4xl);
`;
