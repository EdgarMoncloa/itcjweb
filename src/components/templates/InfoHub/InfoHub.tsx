import styled from "styled-components";
import { AllHeaders } from "../../organisms/AllHeaders";
import { NavMenu } from "../../organisms/NavMenu";
import { TecFooter } from "../../molecules/TecFooter";
import { GobFooter } from "../../molecules/GobFooter";
import { ReactNode, useMemo, useState } from "react";
import { NavOption } from "../../molecules/NavOption";
import { FaSchool } from "react-icons/fa";
import { StyledH3 } from "../../../tokens/CustomText";

type ContentElement = {
  label: ReactNode;
  icon?: ReactNode;
  content: ReactNode;
  subItems?: ContentElement[];
  noTitle?: boolean;
  onClick?: () => void;
};
export interface InfoHubProps {
  title?: ReactNode;
  content: ContentElement[];
  defaultItemIndex?: number;
}

export const InfoHub = ({
  content,
  title,
  defaultItemIndex = 0,
}: InfoHubProps) => {
  // START
  const [primaryIdx, setPrimaryIdx] = useState(defaultItemIndex);
  const [secondaryIdx, setSecondaryIdx] = useState(defaultItemIndex);

  let actualContent = content[secondaryIdx];
  if (content[primaryIdx].subItems && content[primaryIdx].subItems.length > 0) {
    actualContent = content[primaryIdx].subItems[secondaryIdx];
  }

  return (
    <StyledMainContainer>
      <AllHeaders />
      <StyledInfoHubContainer>
        <StyledNavMenuWrapper>
          <NavMenu
            headerTitle={title}
            contentElelments={content.map((item, itemIndex) => (
              <NavOption
                onClick={() => {
                  if (!(item.subItems && item.subItems.length > 0)) {
                    if (item.onClick) {
                      item.onClick();
                      return;
                    }
                    setSecondaryIdx(itemIndex);
                  }
                }}
                key={itemIndex}
                content={item.label}
                link={"#"}
                leftIcon={item.icon}
                subitems={
                  item.subItems && item.subItems.length > 0
                    ? item.subItems.map((subItem, subItemIndex) => ({
                        content: subItem.label,
                        onClick: () => {
                          console.log("click");
                          setPrimaryIdx(itemIndex);
                          setSecondaryIdx(subItemIndex);
                        },
                      }))
                    : []
                }
              />
            ))}
          />
        </StyledNavMenuWrapper>
        <StyledInfoContainer>
          {!actualContent.noTitle && <StyledH3>{actualContent.label}</StyledH3>}
          {actualContent.content}
        </StyledInfoContainer>
      </StyledInfoHubContainer>
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

const StyledInfoHubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: var(--size-width-4-cols) 1fr;
  gap: var(--size-gap-large);
  padding: var(--size-padding-medium);
  background-color: var(--colors-app-background);
`;

const StyledNavMenuWrapper = styled.div`
  width: 100%;
  height: max-content;
  max-height: 75vh;
  box-sizing: border-box;
  position: sticky;
  top: var(--size-height-1-rows);
  overflow-y: auto;
  border: var(--size-border-small) solid var(--colors-app-primary-700);
  border-radius: var(--size-border-radius-medium);
`;

const StyledInfoContainer = styled.div`
  border-radius: var(--size-border-radius-medium);
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-small);
  width: 100%;
  padding: var(--size-padding-medium);
  background-color: var(--colors-app-primary-50);
  border: var(--size-border-small) solid var(--colors-app-primary-700);
`;
