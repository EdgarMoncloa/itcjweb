export enum TextTypes {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
  H5 = "H5",
  H6 = "H6",
  body1 = "body1",
  body2 = "body2",
  body3 = "body3",
  button = "button",
  caption = "caption",
  overline = "overline",
}

export type colorVariant = "primary" | "secondary" | "neutral";

export type IconSize =
  | "xs"
  | "small"
  | "medium"
  | "large"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export enum ColWidht {
  "1-cols" = "var(--size-width-1-cols)",
  "2-cols" = "var(--size-width-2-cols)",
  "3-cols" = "var(--size-width-3-cols)",
  "4-cols" = "var(--size-width-4-cols)",
  "5-cols" = "var(--size-width-5-cols)",
  "6-cols" = "var(--size-width-6-cols)",
  "7-cols" = "var(--size-width-7-cols)",
  "8-cols" = "var(--size-width-8-cols)",
  "9-cols" = "var(--size-width-9-cols)",
  "10-cols" = "var(--size-width-10-cols)",
  "11-cols" = "var(--size-width-11-cols)",
  "12-cols" = "var(--size-width-12-cols)",
  "13-cols" = "var(--size-width-13-cols)",
  "14-cols" = "var(--size-width-14-cols)",
  "15-cols" = "var(--size-width-15-cols)",
  "16-cols" = "var(--size-width-16-cols)",
}

export const getWithColsVar = (cols: number): string => {
  const col = ColWidht[`${cols}-cols` as keyof typeof ColWidht];
  if (col) {
    return col;
  }
  return "var(--size-width-1-cols)";
};
