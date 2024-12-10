import { MdExpandMore } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import styled from 'styled-components';
import { NavOption } from '../../molecules/NavOption';

export interface NavMenuProps {}

export const NavMenu: React.FC<NavMenuProps> = () => {
  return (
    <StyledNavMenu className='defaultsize'>
      <NavOption
        content={'Contenido'}
        link={'#'}
        leftIcon={<FaSchool />}
        rightIcon={<MdExpandMore />}
      />
      <NavOption content={'Contenido'} link={'#'} />
      <NavOption content={'Contenido'} link={'#'} />
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

  /* Visual */
  background-color: var(--colors-app-neutral-200);
  border-radius: var(--size-border-radius-medium);

  &.defaultsize {
    width: var(--size-width-5-cols);
    height: var(--size-height-16-row);
  }
`;
