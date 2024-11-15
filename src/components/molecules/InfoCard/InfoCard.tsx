import { RiRadioButtonLine } from 'react-icons/ri';
import { RiCheckboxBlankLine } from 'react-icons/ri';
import styled from 'styled-components';
import { StyledH3 } from '../../../tokens/CustomText';
import { useAppConfig } from '../../../store/useAppConfig';

export const InfoCard = () => {
  const { iconSize } = useAppConfig();

  return (
    <StyledMainContainer className='defaultSize'>
      <StyledLeftContainer>
        <StyledH3>Ingeniería en Logística</StyledH3>
        <StyledTagsContainer></StyledTagsContainer>
      </StyledLeftContainer>
      <StyledIconWrapper>
        <RiRadioButtonLine />
      </StyledIconWrapper>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-main);
  display: grid;
  grid-template-columns: 3fr 1fr;

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: var(--size-height-2-row);
  }
`;

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTagsContainer = styled.div``;

const StyledIconWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: var(--size-icon-4xl);
  height: 100%;
  justify-content: center;
  width: 100%;
`;
