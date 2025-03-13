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

// ANCHOR CSS_VAR
export enum CSS_VAR_GAP {
  none = "--size-gap-none",
  "2xs" = "--size-gap-2xs",
  xs = "--size-gap-xs",
  small = "--size-gap-small",
  medium = "--size-gap-medium",
  large = "--size-gap-large",
  xl = "--size-gap-xl",
  "2xl" = "--size-gap-2xl",
}
export enum CSS_VAR_COL_WIDTH {
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
export enum CSS_VAR_ROW_HEIGHT {
  "1-rows" = "--size-height-1-rows",
  "2-rows" = "--size-height-2-rows",
  "3-rows" = "--size-height-3-rows",
  "4-rows" = "--size-height-4-rows",
  "5-rows" = "--size-height-5-rows",
  "6-rows" = "--size-height-6-rows",
  "7-rows" = "--size-height-7-rows",
  "8-rows" = "--size-height-8-rows",
  "9-rows" = "--size-height-9-rows",
  "10-rows" = "--size-height-10-rows",
  "11-rows" = "--size-height-11-rows",
  "12-rows" = "--size-height-12-rows",
  "13-rows" = "--size-height-13-rows",
  "14-rows" = "--size-height-14-rows",
  "15-rows" = "--size-height-15-rows",
  "16-rows" = "--size-height-16-rows",
}
export enum CSS_VAR_TRANSITION {
  "none" = "--transition-none",
  "very-fast" = "--transition-very-fast",
  "fast" = "--transition-fast",
  "normal" = "--transition-normal",
  "slow" = "--transition-slow",
  "very-slow" = "--transition-very-slow",
}
export enum CSS_VAR_DURATION {
  "none" = "--duration-none",
  "very-fast" = "--duration-very-fast",
  "fast" = "--duration-fast",
  "normal" = "--duration-normal",
  "slow" = "--duration-slow",
  "very-slow" = "--duration-very-slow",
}
// ANCHOR UTILS
export const getWithColsVar = (cols: number): string => {
  const col =
    CSS_VAR_COL_WIDTH[`${cols}-cols` as keyof typeof CSS_VAR_COL_WIDTH];
  if (col) {
    return col;
  }
  return "var(--size-width-1-cols)";
};
