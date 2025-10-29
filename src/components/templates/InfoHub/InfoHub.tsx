import styled from "styled-components";
import { AllHeaders } from "../../organisms/AllHeaders";
import { TecFooter } from "../../molecules/TecFooter";
import { GobFooter } from "../../molecules/GobFooter";
import { ReactNode } from "react";
import { SidebarLayout } from "../../organisms/SidebarLayout";
import { headerTecItem } from "../../molecules/HeaderTec";

export type ContentElement = {
  id?: string;
  label: ReactNode;
  icon?: ReactNode;
  content: ReactNode;
  subItems?: ContentElement[];
  noTitle?: boolean;
  link?: string;
  onClick?: () => void;
};
export interface InfoHubProps {
  title?: ReactNode;
  content: ContentElement[];
  defaultItemIndex?: number;
  noHeaders?: boolean;
  headerTecItems?: headerTecItem[];
}

export const InfoHub = ({
  content,
  title,
  defaultItemIndex = 0,
  noHeaders = false,
  headerTecItems,
}: InfoHubProps) => {
  return (
    <StyledMainContainer>
      {noHeaders ? null : <AllHeaders headerTecItems={headerTecItems} />}
      <SidebarLayout
        content={content}
        title={title}
        defaultItemIndex={defaultItemIndex}
      />
      <TecFooter />
      <GobFooter />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
