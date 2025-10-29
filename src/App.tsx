import { Route, Routes } from "react-router-dom";
import { LandingPageContainer } from "./features/LandingPageContainer";
import { EstudiantesPageContainer } from "./features/EstudiantesPageContainer";
import { NosotrosPageContainer } from "./features/NosotrosPageContainer";
import { ProgramasAcademicosPage } from "./components/pages/ProgramasAcademicos";
import { EgresadosPageContainer } from "./features/EgresadosPageContainer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageContainer />} />
      <Route path="/nosotros" element={<NosotrosPageContainer />} />
      <Route
        path="/aspirantes/programas-academicos/:section?"
        element={<ProgramasAcademicosPage />}
      />
      {/* TODO: Add personal page */}
      {/* <Route path="/personal" element={<Personal />} /> */}
      <Route path="/alumnos/:section?" element={<EstudiantesPageContainer />} />
      <Route path="/egresados/:section?" element={<EgresadosPageContainer />} />
    </Routes>
  );
}
