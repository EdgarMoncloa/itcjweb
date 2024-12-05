import styled from 'styled-components';
import { GobHeader } from '../../molecules/GobHeader';
import { LogosHeader } from '../../molecules/LogosHeader';
import { TecHeader } from '../../molecules/TecHeader';

export interface AllHeadersProps {
  tecHeaderHaveOpacity?: boolean;
  tecHeaderRef?: React.RefObject<HTMLDivElement>;
}

export const AllHeaders = ({
  tecHeaderHaveOpacity = false,
}: AllHeadersProps) => {
  return (
    <>
      <GobHeader />
      <LogosHeader />
      <TecHeader withOpacity={tecHeaderHaveOpacity} />
    </>
  );
};
