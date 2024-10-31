import { CustomDivider } from '../../atoms/CustomDivider';
import {
  StyledBlogCard,
  StyledContent,
  StyledContentContainer,
  StyledContentTitle,
  StyledImageContainer,
  StyledImg,
} from './style';

export interface BlogCardProps {
  imgSrc: string;
  title: string;
  content: string;
  url?: string;
  width?: string;
  height?: string;
}

export const BlogCard = ({
  imgSrc,
  title,
  content,
  url,
  width,
  height,
}: BlogCardProps) => {
  return (
    <StyledBlogCard href={url} target='_blank' style={{ width, height }}>
      <StyledImageContainer>
        <StyledImg src={imgSrc} />
      </StyledImageContainer>
      <CustomDivider />
      <StyledContentContainer>
        <StyledContentTitle>{title}</StyledContentTitle>
        <StyledContent>{content}</StyledContent>
      </StyledContentContainer>
    </StyledBlogCard>
  );
};
