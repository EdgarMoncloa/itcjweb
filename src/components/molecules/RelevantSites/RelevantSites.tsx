import { BiBlanket } from 'react-icons/bi';
import { RelevantSite, RelevantSiteProps } from '../../atoms/RelevantSite';
import styled from 'styled-components';

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
  gap: var(--size-gap-medium);
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  overflow: hidden;
  padding: 0 var(--size-padding-medium);
`;
