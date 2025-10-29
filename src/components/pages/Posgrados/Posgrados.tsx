import { useParams } from "react-router";
import { headerTecItems } from "../../../data/headerTecItems";
import { InfoHub } from "../../templates/InfoHub";
import { posgradosContent } from "./posgradosContent";

const title = "DIVISIÓN DE ESTUDIOS DE POSGRADO E INVESTIGACIÓN";
export const Posgrados = () => {
  const { section } = useParams();
  let defaultIndex = 0;
  if (section) {
    defaultIndex = posgradosContent.findIndex((item) => item.id === section);
  }
  return (
    <InfoHub
      content={posgradosContent}
      defaultItemIndex={defaultIndex}
      title={title}
      headerTecItems={headerTecItems}
    />
  );
};
