import { StoryObj } from "@storybook/react";
import { SingleInfoCard } from "./SingleInfoCard";
import {
  ExampleContainer,
  ExampleContainer_Colors,
} from "../../atoms/Examples/ExampleContainer";

const meta = {
  title: "Molecules/Cards/InfoCard",
  component: SingleInfoCard,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: {
        type: "text",
      },
      table: {
        category: "Storybook",
      },
    },
  },
};

type MyComponentStoryProps = {
  text: string;
};
type Story = StoryObj<MyComponentStoryProps>;

export const Default: Story = {
  args: {
    text: "Texto de ejemplo",
  },
  render: (args) => {
    return (
      <SingleInfoCard
        {...args}
        content={
          <ExampleContainer color={ExampleContainer_Colors.transparent}>
            {args.text}
          </ExampleContainer>
        }
      />
    );
  },
};

export default meta;
