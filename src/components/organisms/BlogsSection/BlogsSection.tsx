import { BlogCard, BlogCardProps } from "../../molecules/BlogCard";
import styled from "styled-components";
import { DynamicBentoGrid } from "../../atoms/Grids/DynamicBentoGrid";

interface BlogsSectionProps {
  blogCards: BlogCardProps[];
}

export const BlogsSection = ({ blogCards }: BlogsSectionProps) => {
  return (
    <DynamicBentoGrid>
      {blogCards.map((item, index) => (
        <StyledBlogCardWrapper key={index}>
          <BlogCard
            title={item.title}
            imgSrc={item.imgSrc}
            content={item.content}
          />
        </StyledBlogCardWrapper>
      ))}
    </DynamicBentoGrid>
  );
};

const StyledBlogCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity 0.4s ease-in-out;

  & > * {
    margin: auto;
    height: 100%;
    width: 90%;
  }
`;
