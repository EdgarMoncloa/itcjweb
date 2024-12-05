export const generateRandomImageLink = (
  width: number,
  height: number,
  seed?: string
) => {
  return `https://picsum.photos/${
    seed ? `seed/${seed}/` : ''
  }${width}/${height}`;
};
