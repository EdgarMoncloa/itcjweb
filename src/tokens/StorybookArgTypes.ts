import { STORYBOOK_CATEGORIES } from "../types/StoryBookTypes";

export const ARG_TYPES = {
  // ANCHOR Duration
  duration: {
    control: {
      type: "number",
      min: 0,
      max: 10000,
    },
    table: {
      category: STORYBOOK_CATEGORIES.style,
    },
  },
  // ANCHOR numItems
  numItems: {
    control: {
      type: "range",
      min: 1,
      max: 24,
      step: 1,
    },
    table: {
      category: STORYBOOK_CATEGORIES.only_storybook,
    },
  },
  // ANCHOR Object Code
  objectCode: {
    table: { category: STORYBOOK_CATEGORIES.only_code },
  },
  // ANCHOR Defautl boolean
  boolean: {
    control: {
      type: "boolean",
    },
    table: {
      category: STORYBOOK_CATEGORIES.style,
    },
  },
};
