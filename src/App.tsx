import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { LandingPageContainer } from "./features/LandingPageContainer";
import { EstudiantesPageContainer } from "./features/EstudiantesPageContainer";
import { NosotrosPageContainer } from "./features/NosotrosPageContainer";
import { EgresadosPageContainer } from "./features/EgresadosPageContainer";
import { ContraloriaPageContainer } from "./features/ContraloriaPageContainer";
import { SGIGPageContainer } from "./features/SGIGPageContainer";
import { PosgradosPageContainer } from "./features/PosgradosPageContainer";
import { PorgramasAcademicosPageContainer } from "./features/PorgramasAcademicosPageContainer";
import { PersonalPageContainer } from "./features/PersonalPageContainer";
import { ServiciosPageContainer } from "./features/ServiciosPageContainer";

export default function App() {
  return (
    <StyledContainer>
      <Routes>
        <Route path="/" element={<LandingPageContainer />} />
        <Route path="/nosotros" element={<NosotrosPageContainer />} />
        <Route
          path="/aspirantes/programas-academicos/:section?"
          element={<PorgramasAcademicosPageContainer />}
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
        <Route path="/personal" element={<PersonalPageContainer />} />
        <Route
          path="/servicios/:section?"
          element={<ServiciosPageContainer />}
        />
      </Routes>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  z-index: 0;
`;
