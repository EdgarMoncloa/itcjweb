import {
  StyledImgLogoMex,
  StyledLogoMexWrapper,
  StyledGobHeader,
} from './style';
import { SimpleNavMenu, SimpleNavMenuTypes } from '../../atoms/Buttons/SimpleNavMenu';
import { FaSearch } from 'react-icons/fa';

export const GobHeader = () => {
  return (
    <StyledGobHeader>
      <StyledLogoMexWrapper>
        <SimpleNavMenu
          content={
            <StyledImgLogoMex
              src='https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg'
              alt='Logo Mexico'
            />
          }
          link='https://www.gob.mx/tramites'
          type={SimpleNavMenuTypes.gob}
        />
      </StyledLogoMexWrapper>
      <SimpleNavMenu
        content='Trámites'
        link='https://www.gob.mx/tramites'
        type={SimpleNavMenuTypes.gob}
      />
      <SimpleNavMenu
        content='Gobierno'
        link='https://www.gob.mx/gobierno'
        type={SimpleNavMenuTypes.gob}
      />
      <SimpleNavMenu
        content={<FaSearch />}
        link='https://www.gob.mx/busqueda?utf8=✓'
        type={SimpleNavMenuTypes.gob}
      />
    </StyledGobHeader>
  );
};
