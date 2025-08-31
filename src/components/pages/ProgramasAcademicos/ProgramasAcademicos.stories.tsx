import { StoryObj, Meta } from "@storybook/react";
import { ProgramasAcademicosPage } from "./ProgramasAcademicosPage";
import { ARG_TYPES } from "../../../tokens/StorybookArgTypes";

export default {
  title: "Pages/ProgramasAcademicos",
  component: ProgramasAcademicosPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  argTypes: {
    numElements: {
      ...ARG_TYPES.numItems,
    },
  },
};

type MyStoryProps = {
  temp: string;
};
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ ...args }) => {
    return <ProgramasAcademicosPage />;
  },
};
