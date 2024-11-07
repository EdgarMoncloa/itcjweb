import styled from 'styled-components';

export const HeroSection = () => {
  return (
    <StyledHero>
      <StyledTempBar>Bar</StyledTempBar>
      <StyledTempMain>Menu</StyledTempMain>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  width: 100%;
  background-color: var(--colors-itcj-main);
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding: 0 var(--size-margin-medium);
`;
const StyledTempBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00ff0055;
`;
const StyledTempMain = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0000ff55;
`;
