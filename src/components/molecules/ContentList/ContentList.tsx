import styled from 'styled-components';
import {
  ContentSelector,
  ContentSelectorProps,
} from '../../atoms/ContentSelector';

export interface ContentListProps {
  contentSelectorItems: ContentSelectorProps[];
  defaultSize?: boolean;
}

export const ContentList = ({
  contentSelectorItems,
  defaultSize = false,
}: ContentListProps) => {
  return (
    <StyledContentList className={defaultSize ? 'defaultSize' : ''}>
      {contentSelectorItems.map((item) => (
        <ContentSelector
          key={item.title}
          title={item.title}
          caption={item.caption}
        />
      ))}
    </StyledContentList>
  );
};

const StyledContentList = styled.div`
  display: grid;
  grid-template-columns: var(--size-icon-very-large);
  grid-template-rows: repeat(10, var(--size-icon-very-large));
  gap: var(--size-margin-medium);
  background-color: var(--colors-app-main-100);
  padding: var(--size-padding-medium);
  width: max-content;
  border-radius: var(--size-border-radius-medium);
  width: 100%;
  height: 100%;

  &.defaultSize {
    width: var(--size-width-1-cols);
    height: max-content;
  }
`;
