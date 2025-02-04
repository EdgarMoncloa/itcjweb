import styled from "styled-components";

export interface CustomImgProps {
  src: string;
  alt: string;
  defaultSize?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const CustomImg = ({
  src,
  alt,
  defaultSize = false,
  style,
  className = "",
}: CustomImgProps) => {
  const elementClassName = defaultSize ? "defaultSize" : "";

  return (
    <StyledCustomImg
      src={src}
      alt={alt}
      style={style}
      className={`${elementClassName} ${className}`}
    />
  );
};

const StyledCustomImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: var(--size-border-radius-small);
  border: var(--size-border-small) solid var(--colors-app-primary-700);

  &.defaultSize {
    height: var(--size-height-6-rows);
    width: var(--size-width-6-cols);
  }
`;
