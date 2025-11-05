import styled from "styled-components";
import { InfoCardDual3DSlider } from "../../molecules/InfoCardDual3DSlider";

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface ServicesSectionProps {
  services: Service[];
}

export const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <StyledServicesSection>
      {services.map((service, index) => {
        return (
          <InfoCardDual3DSlider
            title={service.name}
            description={service.description}
            icon={service.icon}
            key={index}
            href={`/servicios/${service.id}`}
          />
        );
      })}
    </StyledServicesSection>
  );
};

const StyledServicesSection = styled.div`
  padding: var(--size-margin-large) var(--size-margin-body);
  overflow: hidden;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-auto-rows: var(--size-height-6-rows);
  gap: var(--size-gap-medium);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.eightKDesktop}px) {
    width: 50%;
    margin: 0 auto;
  }
`;
