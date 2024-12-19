import styled from 'styled-components';
import {
  ContentSelector,
  ContentSelectorProps,
} from '../ContentSelector';

export interface ContentListProps {
  contentSelectorItems: ContentSelectorProps[];
  defaultSize?: boolean;
  setSelectedIndex?: (index: number) => void;
}

export const ContentList = ({
  contentSelectorItems,
  defaultSize = false,
  setSelectedIndex,
}: ContentListProps) => {
  return (
    <StyledContentList className={defaultSize ? 'defaultSize' : ''}>
      {contentSelectorItems.map((item, index) => (
        <ContentSelector
          key={item.title}
          title={item.title}
          caption={item.caption}
          onClick={() => {
            setSelectedIndex && setSelectedIndex(index);
          }}
        />
      ))}
    </StyledContentList>
  );
};

const StyledContentList = styled.div`
  display: grid;
  grid-template-columns: var(--size-icon-xl);
  grid-template-rows: repeat(10, var(--size-icon-xl));
  gap: var(--size-margin-medium);
  background-color: var(--colors-app-primary-100);
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
