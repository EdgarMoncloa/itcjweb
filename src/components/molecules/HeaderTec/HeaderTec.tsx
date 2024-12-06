import { headerTecItems } from '../../../data/headerTecItems';
import {
  SimpleNavMenu,
  SimpleNavMenuProps,
  SimpleNavMenuTypes,
} from '../../atoms/SimpleNavMenu';
import styled from 'styled-components';

export interface HeaderTecProps {
  withOpacity?: boolean;
}

export const HeaderTec = ({ withOpacity = false }: HeaderTecProps) => {
  return (
    <StyledHeaderTec className={withOpacity ? 'withOpacity' : ''}>
      {headerTecItems.map((item) => (
        <SimpleNavMenu
          key={item.content}
          type={SimpleNavMenuTypes.tecnm}
          content={item.content}
          link={item.link}
          subItems={item.subItems}
        />
      ))}
    </StyledHeaderTec>
  );
};

export const StyledHeaderTec = styled.div`
  height: var(--size-height-medium);
  overflow: hidden;
  width: 100%;
  background-color: var(--colors-app-secondary-950);
  display: flex;
  align-items: center;
  padding: 0 var(--size-padding-medium);
  color: white;
  position: sticky;
  top: 0;
  z-index: var(--z-index-header);
  transition: var(--transition-fast) opacity;

  &.withOpacity {
    opacity: 0.75;
  }
`;
