import styled from 'styled-components';
import { ContentLink, ContentLinkProps } from '../../atoms/ContentLink';

export interface ContentDisplayProps {
  contentLinks: ContentLinkProps[];
  haveDefaultSize?: boolean;
}

export const ContentDisplay = ({
  contentLinks,
  haveDefaultSize = true,
}: ContentDisplayProps) => {
  return (
    <StyledContentDisplay className={haveDefaultSize ? 'default-size' : ''}>
      <ContentLink {...contentLinks[0]} />
    </StyledContentDisplay>
  );
};

const StyledContentDisplay = styled.div`
  width: 100%;
  height: 100%;

  &.default-size {
    width: var(--size-width-10-cols);
    height: var(--size-height-5-row);
  }
`;
