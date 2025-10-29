import styled from "styled-components";

export const LogosHeader = () => {
  return (
    <StyledLogosHeader>
      <StyledLink href="https://www.gob.mx/sep">
        <StyledLogoImg
          src="/images/Logo_secretaria_de_educacion.png"
          alt="Logo secretaria de educacion"
        />
      </StyledLink>
      <StyledLink href="https://www.tecnm.mx">
        <StyledLogoImg src="/images/Logo_Tecnm.png" alt="Logo Tecnm" />
      </StyledLink>
      <StyledLink href="/">
        <StyledLogoImg src="/images/Logo_ITCJ_base.png" alt="Logo ITCJ base" />
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

const StyledLink = styled.a`
  height: 100%;
  background-color: var(--colors-app-background);

  &:hover > ${StyledLogoImg} {
    transform: scale(0.9);
    transition: transform var(--transition-fast);
  }
`;
