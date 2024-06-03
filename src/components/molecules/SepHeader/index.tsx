import {
  StyledImgLogoMex,
  StyledLogoMexWrapper,
  StyledSepHeader,
} from "./style";
import SimpleNavMenu, { SimpleNavMenuTypes } from "../../atoms/SimpleNavMenu";
import { FaSearch } from "react-icons/fa";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const SepHeader = ({}: HeaderProps) => {
  return (
    <StyledSepHeader>
      <StyledLogoMexWrapper>
        <SimpleNavMenu
          content={
            <StyledImgLogoMex
              src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
              alt="Logo Mexico"
            />
          }
          link="https://www.gob.mx/tramites"
          type={SimpleNavMenuTypes.gob}
        />
      </StyledLogoMexWrapper>
      <SimpleNavMenu
        content="Trámites"
        link="https://www.gob.mx/tramites"
        type={SimpleNavMenuTypes.gob}
      />
      <SimpleNavMenu
        content="Gobierno"
        link="https://www.gob.mx/gobierno"
        type={SimpleNavMenuTypes.gob}
      />
      <SimpleNavMenu
        content={<FaSearch />}
        link="https://www.gob.mx/busqueda?utf8=✓"
        type={SimpleNavMenuTypes.gob}
      />
    </StyledSepHeader>
  );
};

export default SepHeader;
