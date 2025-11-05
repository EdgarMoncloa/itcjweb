import { Link } from "react-router";
import styled from "styled-components";
import Logo_secretaria_de_educacion from "/images/Logo_secretaria_de_educacion.png";
import Logo_Tecnm from "/images/Logo_Tecnm.png";
import Logo_ITCJ_base from "/images/Logo_ITCJ_base.png";
import { SITE_MAP } from "../../../data/siteMap";

export const LogosHeader = () => {
  return (
    <StyledLogosHeader>
      <StyledLink to="https://www.gob.mx/sep">
        <StyledLogoImg
          src={Logo_secretaria_de_educacion}
          alt="Logo secretaria de educacion"
        />
      </StyledLink>
      <StyledLink to="https://www.tecnm.mx">
        <StyledLogoImg src={Logo_Tecnm} alt="Logo Tecnm" />
      </StyledLink>
      <StyledLink to={SITE_MAP.baseUrl}>
        <StyledLogoImg src={Logo_ITCJ_base} alt="Logo ITCJ base" />
      </StyledLink>
    </StyledLogosHeader>
  );
};

const StyledLogosHeader = styled.div`
  background-color: var(--colors-app-background);
  display: flex;
  width: 100%;
  padding: var(--size-padding-small) var(--size-padding-large);
  justify-content: center;
  align-items: center;
  gap: 32px;
  overflow: hidden;
  height: var(--size-height-2-rows);
`;

const StyledLogoImg = styled.img`
  height: 100%;
  object-fit: contain;
  transition: transform var(--transition-fast);
`;

const StyledLink = styled(Link)`
  height: 100%;
  background-color: var(--colors-app-background);

  &:hover > ${StyledLogoImg} {
    transform: scale(0.9);
    transition: transform var(--transition-fast);
  }
`;
