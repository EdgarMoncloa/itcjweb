import { ComponentPropsWithRef, ReactNode, useState } from "react";
import styled from "styled-components";
import { StyledH3 } from "../../../tokens/CustomText";
import { NavMenu } from "../NavMenu";
import { NavOption } from "../../molecules/NavOption";
import { useNavigate } from "react-router";

export type SidebarLayout_ContentElement = {
  label: ReactNode;
  icon?: ReactNode;
  content: ReactNode;
  subItems?: SidebarLayout_ContentElement[];
  noTitle?: boolean;
  link?: string;
  onClick?: () => void;
};

interface SidebarLayoutProps
  extends Omit<
    ComponentPropsWithRef<typeof StyledInfoHubContainer>,
    "title" | "content"
  > {
  title?: ReactNode;
  content: SidebarLayout_ContentElement[];
  defaultItemIndex?: number;
  noHeaders?: boolean;
}

export const SidebarLayout = ({
  content,
  title,
  defaultItemIndex = 0,
  ...props
}: SidebarLayoutProps) => {
  // START
  const [mainIdx, setMainIdx] = useState(defaultItemIndex);
  const [secondaryIdx, setSecondaryIdx] = useState(defaultItemIndex);

  let actualContent = content[mainIdx];
  if (
    content[secondaryIdx].subItems &&
    content[secondaryIdx].subItems.length > 0
  ) {
    actualContent = content[secondaryIdx].subItems[mainIdx];
  }
  const navigate = useNavigate();
  return (
    <StyledInfoHubContainer {...props}>
      <StyledNavMenuWrapper>
        <NavMenu
          headerTitle={title}
          contentElelments={content.map((item, itemIndex) => (
            <NavOption
              onClick={() => {
                if (item.link) {
                  navigate(item.link);
                  return;
                }
                if (!(item.subItems && item.subItems.length > 0)) {
                  if (item.onClick) {
                    item.onClick();
                    return;
                  }
                  setMainIdx(itemIndex);
                  setSecondaryIdx(0);
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
                        if (subItem.link) {
                          navigate(subItem.link);
                          return;
                        }
                        setSecondaryIdx(itemIndex);
                        setMainIdx(subItemIndex);
                      },
                      link: subItem.link,
                    }))
                  : []
              }
            />
          ))}
        />
      </StyledNavMenuWrapper>
      <StyledInfoContainer>
        {!actualContent?.noTitle && <StyledH3>{actualContent?.label}</StyledH3>}
        {actualContent?.content}
      </StyledInfoContainer>
    </StyledInfoHubContainer>
  );
};

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
