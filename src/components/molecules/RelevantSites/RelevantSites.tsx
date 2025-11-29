import { BiBlanket } from "react-icons/bi";
import styled from "styled-components";
import { RelevantSite } from "../../atoms/Buttons/RelevantSite";
import { ReactElement } from "react";

export type RelevantSites_Site = {
  url: string;
  text?: string;
  icon?: ReactElement;
  onClick?: (url: string) => void;
};
export interface RelevantSitesProps {
  sites: RelevantSites_Site[];
}

export const RelevantSites = ({ sites }: RelevantSitesProps) => {
  return (
    <StyledRelevantSites>
      {sites.map((site) => {
        return (
          <RelevantSite
            key={site.url}
            icon={site.icon}
            text={site.text}
            toSite={site.url}
            onClick={site.onClick}
          />
        );
      })}
    </StyledRelevantSites>
  );
};

const StyledRelevantSites = styled.div`
  display: grid;
  gap: var(--size-gap-small);
  grid-auto-rows: var(--size-height-2-rows);
  width: 100%;
  overflow: hidden;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    border: 1px solid blue;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
