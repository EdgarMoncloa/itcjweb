import styled from "styled-components";
import { GobHeader } from "../../molecules/GobHeader";
import { LogosHeader } from "../../molecules/LogosHeader";
import { HeaderTec, headerTecItem } from "../../molecules/HeaderTec";

export interface AllHeadersProps {
  headerTecHaveOpacity?: boolean;
  headerTecItems?: headerTecItem[];
}

export const AllHeaders = ({
  headerTecHaveOpacity = false,
  headerTecItems,
}: AllHeadersProps) => {
  return (
    <>
      <GobHeader />
      <LogosHeader />
      <HeaderTec withOpacity={headerTecHaveOpacity} items={headerTecItems} />
    </>
  );
};
