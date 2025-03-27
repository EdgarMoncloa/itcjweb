import { StoryObj } from "@storybook/react";
import { Testing, TestingProps } from "./Testing";
import React from "react";

export default {
  title: "Atoms/Testing",
  component: Testing,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs:{
      source:{
        type: "code"
      }
    }
  },
  args: {
    title1: "test",
    element1: "test",
    title2: "test",
    element2: "test.",
  },
  argTypes: {
    title1: {
      control: {
        type: "text",
      },
    },
    title2: {
      control: {
        type: "text",
      },
    },
    element1: {
      control: {
        type: "text",
      },
    },
    element2: {
      control: {
        type: "text",
      },
    },
  },
};

type MyCustomStoryProps = {
  title1: string;
  title2: string;
  element1: string;
  element2: string;
};
type MyStoryProps = TestingProps & MyCustomStoryProps;
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ title1, title2, element1, element2 }) => {
    return (
      <Testing
        items={[
          {
            title: <div>{title1}</div>,  // Aquí usas JSX directamente
            element: element1,
          },
          {
            title: <div>{title2}</div>,  // Lo mismo para el segundo título
            element: element2,
          },
        ]}
      />
    );
  },
};
