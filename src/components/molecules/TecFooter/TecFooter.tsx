import styled from "styled-components";
import {
  StyledBody1,
  StyledH3,
  StyledH5,
  StyledTextCaption,
} from "../../../tokens/CustomText";
import { CustomMap } from "../../atoms/CustomMap";

export const TecFooter = () => {
  return (
    <StyledTecFooter>
      <StyledContactContainer>
        <StyledH5>Contacto</StyledH5>
        <StyledBody1>Conmutador: (656)688-2500</StyledBody1>
        <StyledBody1>Comentarios: webmaster@cdjuarez.tecnm.mx</StyledBody1>
      </StyledContactContainer>
      <StyledCampusContainer>
        <StyledH5>Campus I</StyledH5>
        <CustomMap url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.851476096866!2d-106.42316211562199!3d31.719951911313718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75dc249fd3e4b%3A0x58a769357165487b!2sTecNM%20-%20Campus%20Cd.%20Ju%C3%A1rez!5e0!3m2!1ses-419!2sjp!4v1761557999383!5m2!1ses-419!2sjp" />
        <StyledBody1>
          Av. Tecnológico No. 1340 Fracc. El Crucero C.P. 32500 Ciudad Juárez,
          Chih. México
        </StyledBody1>
      </StyledCampusContainer>
      <StyledCampusContainer>
        <StyledH5>Campus II</StyledH5>
        <CustomMap url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011.3457507288978!2d-106.42368026041369!3d31.503608031544328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e7648c01f8894d%3A0x4f52d834a4fd187f!2sInstituto%20Tecnol%C3%B3gico%20de%20Ciudad%20Ju%C3%A1rez%20Extensi%C3%B3n%20Ciudad%20del%20Conocimiento!5e0!3m2!1ses-419!2sjp!4v1761558741205!5m2!1ses-419!2sjp" />
        <StyledBody1>
          Av. José De Jesús Macías Delgado s/n, Ciudad del Conocimiento. Cd.
          Juárez, Chihuahua.
        </StyledBody1>
      </StyledCampusContainer>
    </StyledTecFooter>
  );
};

const StyledTecFooter = styled.div`
  height: var(--size-height-12-rows);
  text-align: center;
  overflow: hidden;
  width: 100%;
  background-color: var(--colors-tecnm-logo-pantone-294-c);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--size-padding-large) var(--size-padding-medium);
  color: white;
  display: flex;
  flex-direction: row;
  gap: var(--size-gap-medium);
`;
const StyledContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
`;

const StyledCampusContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 7fr 2fr;
  row-gap: var(--size-gap-small);
`;
