import { BiBlanket } from 'react-icons/bi';
import styled from 'styled-components';
import { RelevantSite } from '../../atoms/Buttons/RelevantSite';

interface RelevantSitesProps {
  // sites: RelevantSiteProps[];
}

export const RelevantSites = ({}: RelevantSitesProps) => {
  return (
    <StyledRelevantSites>
      <RelevantSite
        icon={<BiBlanket />}
        text='SII'
        toSite='http://sii.cdjuarez.tecnm.mx'
      />
      <RelevantSite
        icon={<BiBlanket />}
        text='Moodle'
        toSite='https://moodle.cdjuarez.tecnm.mx'
      />
      <RelevantSite icon={<BiBlanket />} text='Fichas' toSite='#' />
      <RelevantSite icon={<BiBlanket />} text='Mapa' toSite='#' />
      <RelevantSite
        icon={<BiBlanket />}
        text='Agenda'
        toSite='http://cdjuarez.tecnm.mx/agenda/index.php'
      />
      <RelevantSite icon={<BiBlanket />} text='SGIG' toSite='#' />
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    border: 1px solid blue;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
