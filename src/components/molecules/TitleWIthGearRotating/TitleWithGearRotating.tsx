import styled from 'styled-components';
import { GearRotating } from '../../atoms/GearRotating';
import { StyledH1 } from '../../../tokens/CustomText';

export interface TitleWithGearRotatingProps {
  children: React.ReactNode;
}

export const TitleWithGearRotating: React.FC<TitleWithGearRotatingProps> = ({
  children,
}) => {
  return (
    <StyledTitleWithGearRotating>
      <StyledRotatingWrapper>
        <GearRotating />
      </StyledRotatingWrapper>
      <StyledTitle>{children}</StyledTitle>
    </StyledTitleWithGearRotating>
  );
};

const StyledTitleWithGearRotating = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-bottom: var(--size-border-medium) solid var(--colors-app-primary-700);
  border-left: var(--size-border-medium) solid var(--colors-app-primary-700);

  .defaultSize {
    width: 100%;
    display: flex;
  }
`;

const StyledRotatingWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: var(--size-icon-3xl);
  height: 100%;
`;
const StyledTitle = styled(StyledH1)`
  text-align: center;
  width: calc(100% - var(--size-icon-3xl) * 2);
  margin: 0 auto;
`;
