import { Route, Routes } from "react-router-dom";
import { LandingPageContainer } from "./features/LandingPageContainer";
import { EstudiantesPageContainer } from "./features/EstudiantesPageContainer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageContainer />} />
      <Route path="/alumnos" element={<EstudiantesPageContainer />} />
    </Routes>
  );
}
