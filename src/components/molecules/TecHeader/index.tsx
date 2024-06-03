import { StyledH6 } from "../../../tokens/CustomText";
import SimpleNavMenu, { SimpleNavMenuTypes } from "../../atoms/SimpleNavMenu";
import { StyledTecHeader } from "./style";

export default function TecHeader() {
  return (
    <StyledTecHeader>
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={"Conocenos"}
        link={"#"}
        subItems={[{ content: "Contenido", link: "#" },{ content: "Contenido", link: "#" }]}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={"Aspirantes"}
        link={"#"}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={"Oferta educativa"}
        link={"#"}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={"Alumnos"}
        link={"#"}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={"Personal"}
        link={"#"}
      />
      <SimpleNavMenu
        type={SimpleNavMenuTypes.tecnm}
        content={"Egresados"}
        link={"#"}
      />
    </StyledTecHeader>
  );
}
