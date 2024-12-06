import styled from 'styled-components';
import { GobHeader } from '../../molecules/GobHeader';
import { LogosHeader } from '../../molecules/LogosHeader';
import { HeaderTec } from '../../molecules/HeaderTec';

export interface AllHeadersProps {
  HeaderTecHaveOpacity?: boolean;
  HeaderTecRef?: React.RefObject<HTMLDivElement>;
}

export const AllHeaders = ({
  HeaderTecHaveOpacity = false,
}: AllHeadersProps) => {
  return (
    <>
      <GobHeader />
      <LogosHeader />
      <HeaderTec withOpacity={HeaderTecHaveOpacity} />
    </>
  );
};
