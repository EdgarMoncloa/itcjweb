import { Meta, StoryObj } from "@storybook/react";
import { DiagramStudyPlan } from ".";
import { IngenieriaEnSistemas } from "../../../../mocks/Majors/IngenieriaEnSistemas.mock";

export default {
  title: "Organisms/Diagrams/DiagramStudyPlan",
  component: DiagramStudyPlan,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: {
        type: "range",
        min: 2,
        max: 15,
      },
    },
  },
};
type MyComponentStoryProps = {
  items: number;
};

type Story = StoryObj<MyComponentStoryProps>;

export const Base: Story = {
  args: {
    items: 3,
  },
  render: (args) => {
    return (
      <DiagramStudyPlan
        title={IngenieriaEnSistemas.title}
        columns={IngenieriaEnSistemas.columns}
      />
    );
  },
};
