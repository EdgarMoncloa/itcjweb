import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import {
  StyledBody1,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from '../../../tokens/CustomText';

export interface RichTextRendererProps {
  text: string;
}

export const RichTextRenderer = ({ text }: RichTextRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <StyledMarkdownH1>{children}</StyledMarkdownH1>,
        h2: ({ children }) => <StyledH2>{children}</StyledH2>,
        h3: ({ children }) => <StyledH3>{children}</StyledH3>,
        h4: ({ children }) => <StyledH4>{children}</StyledH4>,
        h5: ({ children }) => <StyledH5>{children}</StyledH5>,
        h6: ({ children }) => <StyledH6>{children}</StyledH6>,
        p: ({ children }) => (
          <StyledBody1>
            <p>{children}</p>
          </StyledBody1>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
};

const StyledMarkdownH1 = styled(StyledH1)`f`;
