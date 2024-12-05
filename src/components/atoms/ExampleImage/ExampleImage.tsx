import styled, { css } from 'styled-components';
import { generateRandomImageLink } from '../../../utils/generateRandomImageLink';

export interface ExampleImageProps {
  alt?: string;
  width?: number;
  height?: number;
  seed?: string;
  defaultSize?: boolean;
}

export const ExampleImage = ({
  alt,
  width = 480,
  height = 240,
  seed,
  defaultSize = false,
}: ExampleImageProps) => {
  const imgSrc = generateRandomImageLink(width, height, seed);
  return (
    <StyledExampleImage
      $width={defaultSize ? width : undefined}
      $height={defaultSize ? height : undefined}
    >
      <StyledImg src={imgSrc} alt={alt || ''} />
    </StyledExampleImage>
  );
};

const CssSize = (width: number, height: number) => css`
  width: ${width}px;
  height: ${height}px;
`;
const StyledExampleImage = styled.div<{ $width?: number; $height?: number }>`
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${(props) =>
    props.$width && props.$height && CssSize(props.$width, props.$height)}
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
