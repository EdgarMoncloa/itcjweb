import styled from "styled-components";

export interface DynamicGridProps {
  children: React.ReactNode;
}

export const DynamicGrid = ({ children }: DynamicGridProps) => {
  return <StyledDynamicGrid>{children}</StyledDynamicGrid>;
};

const StyledDynamicGrid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--size-gap-medium);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
`;
