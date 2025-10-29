import { headerTecItems } from "../../../data/headerTecItems";
import { StyledUl } from "../../../tokens/CustomHTMLElements";
import { InfoHub } from "../../templates/InfoHub";
import { posgradosContent } from "./posgradosContent";

const defaultItemIndex = 0;
const title = "DIVISIÓN DE ESTUDIOS DE POSGRADO E INVESTIGACIÓN";
export const Posgrados = () => {
  return (
    <InfoHub
      content={posgradosContent}
      defaultItemIndex={defaultItemIndex}
      title={title}
      headerTecItems={headerTecItems}
    />
  );
};
