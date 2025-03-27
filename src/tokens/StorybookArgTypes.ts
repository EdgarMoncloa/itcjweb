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
  // ANCHOR Defautl boolean
  boolean: {
    control: {
      type: "boolean",
    },
    table: {
      category: STORYBOOK_CATEGORIES.style,
    },
  },
  // ANCHOR Object Code
  object_OnlyCode: {
    table: { category: STORYBOOK_CATEGORIES.only_code },
  },
  // ANCHOR Enum select
  enumSelect_fun: (enumValues: Record<string, string>) => {
    return {
      control: {
        type: "select",
        options: enumValues,
      },
      table: {
        category: STORYBOOK_CATEGORIES.style,
      },
    };
  },
  // ANCHOR onlyStorybook text
  Text_OnlyStorybook: {
    control: {
      type: "text",
    },
    table: { category: STORYBOOK_CATEGORIES.only_storybook },
  },
};
