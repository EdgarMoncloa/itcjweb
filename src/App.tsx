import { Route, Routes } from "react-router-dom";
import { LandingPageContainer } from "./features/LandingPageContainer";
import { EstudiantesPageContainer } from "./features/EstudiantesPageContainer";
import { NosotrosPageContainer } from "./features/NosotrosPageContainer";
import { ProgramasAcademicosPage } from "./components/pages/ProgramasAcademicos";
import { EgresadosPageContainer } from "./features/EgresadosPageContainer";
import { ContraloriaPageContainer } from "./features/ContraloriaPageContainer";
import styled from "styled-components";
import { SGIGPageContainer } from "./features/SGIGPageContainer";
import { PosgradosPageContainer } from "./features/PosgradosPageContainer";

export default function App() {
  return (
    <StyledContainer>
      <Routes>
        <Route path="/" element={<LandingPageContainer />} />
        <Route path="/nosotros" element={<NosotrosPageContainer />} />
        <Route
          path="/aspirantes/programas-academicos/:section?"
          element={<ProgramasAcademicosPage />}
        />
        {/* TODO: Add personal page */}
        {/* <Route path="/personal" element={<Personal />} /> */}
        <Route
          path="/alumnos/:section?"
          element={<EstudiantesPageContainer />}
        />
        <Route
          path="/egresados/:section?"
          element={<EgresadosPageContainer />}
        />
        <Route path="/contraloria" element={<ContraloriaPageContainer />} />
        <Route path="/sgig" element={<SGIGPageContainer />} />
        <Route
          path="/posgrados/:section?/:subsection?"
          element={<PosgradosPageContainer />}
        />
      </Routes>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  z-index: 0;
`;
