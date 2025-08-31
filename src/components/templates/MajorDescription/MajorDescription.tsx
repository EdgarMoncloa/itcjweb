import styled from "styled-components";
import Logo_ITCJ_name from "/images/Logo_ITCJ_name.png";
import Logo_ITCJ_base from "/images/Logo_ITCJ_base.png";
import { StyledH2, StyledH6 } from "../../../tokens/CustomText";
import { ReactNode } from "react";

type MajorDescriptionProps = {
  title: string;
  children: ReactNode;
};

export const MajorDescription = ({
  title,
  children,
}: MajorDescriptionProps) => {
  return (
    <StyledMajorDescription>
      <StyledHeader>
        <StyledLogoName src={Logo_ITCJ_name} alt="Logo_ITCJ_name" />
        <StyledLogoBase src={Logo_ITCJ_base} alt="Logo_ITCJ_base" />
      </StyledHeader>
      <StyledGraySubtitle>
        <StyledH6>Profesional</StyledH6>
      </StyledGraySubtitle>
      <StyledMajorContent>
        <StyledH2 style={{ textAlign: "center" }}>{title}</StyledH2>
        {children}
      </StyledMajorContent>
    </StyledMajorDescription>
  );
};

const StyledMajorDescription = styled.div``;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--size-gap-medium);
  align-items: center;
  justify-content: space-between;
  padding: var(--size-padding-small) var(--size-padding-large);
`;
const StyledLogoName = styled.img`
  height: var(--size-icon-xl);
  object-fit: contain;
`;
const StyledLogoBase = styled.img`
  height: var(--size-icon-2xl);
  object-fit: contain;
`;
const StyledGraySubtitle = styled.div`
  background-color: var(--colors-app-neutral-700);
  width: 100%;
  padding: var(--size-padding-small);
  text-align: center;
  color: var(--colors-app-text-light);
`;
const StyledMajorContent = styled.div`
  padding: var(--size-padding-medium);
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-small);
`;
