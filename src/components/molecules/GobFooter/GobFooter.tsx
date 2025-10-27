import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import styled from "styled-components";
import Logo_del_Gobierno_de_México from "/images/Logo_del_Gobierno_de_México.png";
import { StyledBody1, StyledH6 } from "../../../tokens/CustomText";

export const GobFooter = () => {
  return (
    <StyledGobFooter>
      <div>
        <img
          src={Logo_del_Gobierno_de_México}
          alt="Logo del gobierno de mexico"
          width={150}
        />
      </div>
      <StyledBaseColumn>
        <StyledH6>Enlaces</StyledH6>
        <StyledGobLink href="https://datos.gob.mx/" target="_blank">
          Datos
        </StyledGobLink>
        <StyledGobLink
          href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml?idEntidad=MzM=&idSujetoObligado=MTAwMDE=#inicio"
          target="_blank"
        >
          Portal de Obligaciones de Transparencia
        </StyledGobLink>
        <StyledGobLink href="http://www.inai.org.mx/" target="_blank">
          INAI
        </StyledGobLink>
        <StyledGobLink
          href="https://alertadores.funcionpublica.gob.mx/"
          target="_blank"
        >
          Alerta
        </StyledGobLink>
        <StyledGobLink
          href="https://sidec.funcionpublica.gob.mx/#!/"
          target="_blank"
        >
          Denuncia
        </StyledGobLink>
      </StyledBaseColumn>
      <StyledBaseColumn>
        <StyledH6>¿Qué es gob.mx?</StyledH6>
        <StyledBody1>
          Es el portal único de trámites, información y participación ciudadana.
        </StyledBody1>
        <StyledGobLink href="https://www.gob.mx/que-es-gobmx" target="_blank">
          Leer más
        </StyledGobLink>

        <StyledGobLink href="https://www.gob.mx/amlo" target="_blank">
          Administraciones anteriores
        </StyledGobLink>

        <StyledGobLink href="https://www.gob.mx/accesibilidad" target="_blank">
          Declaración de Accesibilidad
        </StyledGobLink>

        <StyledGobLink
          href="https://www.gob.mx/aviso_de_privacidad"
          target="_blank"
        >
          Aviso de privacidad
        </StyledGobLink>

        <StyledGobLink
          href="https://www.gob.mx/privacidadsimplificado"
          target="_blank"
        >
          Aviso de privacidad simplificado
        </StyledGobLink>

        <StyledGobLink href="https://www.gob.mx/terminos" target="_blank">
          Términos y Condiciones
        </StyledGobLink>

        <StyledGobLink href="http://www.ordenjuridico.gob.mx/" target="_blank">
          Marco jurídico
        </StyledGobLink>
      </StyledBaseColumn>
      <StyledBaseColumn>
        <StyledH6>Síguenos en</StyledH6>
        <StyledGobLink
          href="https://www.facebook.com/gobmexico"
          target="_blank"
        >
          <BsFacebook />
        </StyledGobLink>
        <StyledGobLink href="https://x.com/GobiernoMX" target="_blank">
          <AiFillTwitterCircle />
        </StyledGobLink>
      </StyledBaseColumn>
    </StyledGobFooter>
  );
};

const StyledGobFooter = styled.div`
  text-align: center;
  overflow: hidden;
  width: 100%;
  background-color: var(--colors-gob-primary-dark);
  display: flex;
  gap: var(--size-gap-large);
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--size-padding-large) var(--size-margin-body);
  color: white;
  text-align: left;
`;

const StyledBaseColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-small);

  &:first-child {
    margin-bottom: var(--size-margin-small);
  }
`;

const StyledGobLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: var(--colors-gob-primary);
  }
`;
