import { AiOutlineCopy } from "react-icons/ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import {
  StyledBody1,
  StyledBody2,
  StyledBody3,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledOverline,
} from "../../../tokens/CustomText";
import { StyledTable, StyledTableWrapper } from "../../../tokens/CustomTable";
import { StyledUnstyledButton } from "../../../tokens/UnstyledElements";
import React from "react";
import { extractTextFromReactElement } from "../../../utils/extractTextFromReactElement";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { StyledBlockquote, StyledHr } from "../../../tokens/CustomHTMLElements";

export interface RichTextRendererProps {
  text: string;
}

export const RichTextRenderer = ({ text }: RichTextRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      components={{
        h1: ({ children }) => <StyledH1>{children}</StyledH1>,
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
        table: ({ children }) => (
          <StyledTableWrapper>
            <StyledTable>{children}</StyledTable>
          </StyledTableWrapper>
        ),
        hr: () => <StyledHr />,
        blockquote: ({ children }) => (
          <StyledBlockquote>{children}</StyledBlockquote>
        ),
        pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
      }}
    >
      {text}
    </ReactMarkdown>
  );
};
