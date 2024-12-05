import { SimpleNavMenu, SimpleNavMenuTypes } from '../../atoms/SimpleNavMenu';
import styled from 'styled-components';

export interface TecHeaderProps {
  withOpacity?: boolean;
}

export const TecHeader = ({ withOpacity = false }: TecHeaderProps) => {
  return (
    <StyledTecHeader className={withOpacity ? 'withOpacity' : ''}>
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={'Conocenos'}
        link={'#'}
        subItems={[
          { content: 'Contenido', link: '#' },
          { content: 'Contenido', link: '#' },
        ]}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={'Aspirantes'}
        link={'#'}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={'Oferta educativa'}
        link={'#'}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={'Alumnos'}
        link={'#'}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={'Personal'}
        link={'#'}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={'Egresados'}
        link={'#'}
      />
    </StyledTecHeader>
  );
};

export const StyledTecHeader = styled.div`
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
