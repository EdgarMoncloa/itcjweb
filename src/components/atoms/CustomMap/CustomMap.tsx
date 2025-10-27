import { ComponentPropsWithRef } from "react";
import styled from "styled-components";

interface CustomMapProps extends ComponentPropsWithRef<typeof StyledCustomMap> {
  url: string;
}

export const CustomMap = ({ url, ...props }: CustomMapProps) => {
  return (
    <StyledCustomMap {...props}>
      <iframe src={url} width="100%" height="100%" loading="lazy" />
    </StyledCustomMap>
  );
};

const StyledCustomMap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--size-border-radius-large);
  overflow: hidden;
  border: 1px solid red;
`;
