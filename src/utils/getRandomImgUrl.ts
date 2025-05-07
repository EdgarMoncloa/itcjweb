export const getRandomImageUrl: (
  width: number,
  height: number,
  seed?: string
) => string = (width, height, seed) => {
  let url = `https://picsum.photos/`;
  if (seed) {
    url += `seed/${seed}/`;
  }
  url += `${width}/${height}`;
  return url;
};
