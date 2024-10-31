import styled from 'styled-components';

export const StyledBlogsSection = styled.div`
  display: grid;
  grid-template-columns: var(--size-width-1-cols) 14fr var(--size-width-1-cols);
  width: calc(100%);
  overflow: hidden;
  height: var(--size-height-4-row);
  gap: var(--size-gap-small);
`;

export const StyledBlogCardsContainer = styled.div`
  align-items: center;
  display: grid;
  grid-auto-columns: var(--size-width-3-cols);
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  height: 100%;
  justify-items: center;
  overflow: hidden;
  justify-content: space-evenly;
  position: relative;
`;

export const StyledBlogCardWrapper = styled.div`
  width: 100%;
  transition: opacity 0.4s ease-in-out;

  & > * {
    margin: auto;
    height: 100%;
    width: 90%;
  }
`;

export const StyledArrow = styled.div`
  align-items: center;
  border: 1px solid red;
  display: flex;
  font-size: var(--size-icon-large);
  justify-content: center;
  overflow: hidden;
  width: 100%;
  color: var(--colors-app-main-700);
  cursor: pointer;
`;
