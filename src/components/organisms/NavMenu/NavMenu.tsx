import { FaSchool } from 'react-icons/fa';
import styled from 'styled-components';
import { NavOption } from '../../molecules/NavOption';

export interface NavMenuProps {
  defaultSize?: boolean;
}

export const NavMenu = ({ defaultSize = false }: NavMenuProps) => {
  return (
    <StyledNavMenu className={defaultSize ? 'defaultSize' : ''}>
      <NavOption
        content={'Contenido'}
        link={'#'}
        leftIcon={<FaSchool />}
        subitems={[
          {
            content: 'Subitem 1',
            link: '#',
          },
          {
            content: 'Subitem 2',
            link: '#',
          },
          {
            content: 'Subitem 3',
            link: '#',
          },
        ]}
      />
      <NavOption
        content={'Contenido'}
        link={'#'}
        subitems={[
          {
            content: 'Subitem 1',
            link: '#',
          },
          {
            content: 'Subitem 2',
            link: '#',
          },
          {
            content: 'Subitem 3',
            link: '#',
          },
        ]}
      />
      <NavOption
        content={'Contenido'}
        link={'#'}
        subitems={[
          {
            content: 'Subitem 1',
            link: '#',
          },
          {
            content: 'Subitem 2',
            link: '#',
          },
          {
            content: 'Subitem 3',
            link: '#',
          },
          {
            content: 'Subitem 1',
            link: '#',
          },
          {
            content: 'Subitem 2',
            link: '#',
          },
          {
            content: 'Subitem 3',
            link: '#',
          },
        ]}
      />
      <NavOption content={'Contenido'} link={'#'} />
    </StyledNavMenu>
  );
};

const StyledNavMenu = styled.div`
  /* Display */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: var(--size-padding-medium);
  transition: background-color var(--transition-normal);

  /* Visual */
  background-color: var(--colors-app-neutral-100);
  border-radius: var(--size-border-radius-small);

  &:hover {
    background-color: var(--colors-app-primary-50);
  }

  &.defaultSize {
    width: var(--size-width-5-cols);
    height: var(--size-height-16-row);
  }
`;
