import DOMPurify from "dompurify";
import parse, {
  attributesToProps,
  domToReact,
  Element,
  HTMLReactParserOptions,
  DOMNode,
} from "html-react-parser";
import styled from "styled-components";
import {
  StyledBody1,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "../../../tokens/CustomText";
import { StyledTable, StyledTableWrapper } from "../../../tokens/CustomTable";
import { StyledBlockquote, StyledHr } from "../../../tokens/CustomHTMLElements";
import { CodeBlock } from "../../atoms/CodeBlock";

export interface CKEditorRendererProps {
  content: string;
}

const isElement = (domNode: DOMNode, name: string) => {
  return domNode instanceof Element && domNode.attribs && domNode.name === "h1";
};

export const CKEditorRenderer = ({ content }: CKEditorRendererProps) => {
  const sanitizedContent = DOMPurify.sanitize(content);

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.attribs) {
        const props = attributesToProps(domNode.attribs);
        const children = domToReact(
          domNode.children as DOMNode[]
        ) as React.ReactNode;
        switch (domNode.name) {
          case "h1": {
            return <StyledH1 {...props}>{children}</StyledH1>;
          }
          case "h2": {
            return <StyledH2 {...props}>{children}</StyledH2>;
          }
          case "h3": {
            return <StyledH3 {...props}>{children}</StyledH3>;
          }
          case "h4": {
            return <StyledH4 {...props}>{children}</StyledH4>;
          }
          case "h5": {
            return <StyledH5 {...props}>{children}</StyledH5>;
          }
          case "h6": {
            return <StyledH6 {...props}>{children}</StyledH6>;
          }
          case "p": {
            return <StyledP {...props}>{children}</StyledP>;
          }
          case "table": {
            return (
              <StyledTableWrapper>
                <StyledTable {...props}>{children}</StyledTable>
              </StyledTableWrapper>
            );
          }
          case "hr": {
            return <StyledHr />;
          }
          case "blockquote": {
            return <StyledBlockquote {...props}>{children}</StyledBlockquote>;
          }
          case "pre": {
            return <CodeBlock>{children}</CodeBlock>;
          }
          default:
            return domNode;
        }
      }
    },
  };

  return <div>{parse(sanitizedContent, options)}</div>;
};

const StyledP = styled(StyledBody1)`
  display: flex;
`;
