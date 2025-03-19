import {
  TriadContentHoverSlider,
  TriadContentHoverSliderProps,
  TriadContentHoverSliderSize,
} from "./TriadContentHoverSlider";
import {
  ExampleContainer,
  ExampleContainer_Colors,
} from "../../Examples/ExampleContainer";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Atoms/Grids/TriadContentHoverSlider",
  component: TriadContentHoverSlider,
  tags: ["autodocs"],
  argTypes: {
    gridSize: {
      description: "Tamaño del grid",
      control: {
        type: "select",
        options: ["1-1-1", "2-1-2"],
      },
    },
    defaultSize: {
      description: "Define un tamaño estandar para mostrar en storybook",
      control: {
        type: "boolean",
        disable: true,
      },
    },
    primaryContent: {
      description: "Primer elemento",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    secondaryContent: {
      description: "Segundo elemento",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    tertiaryContent: {
      description: "Segundo elemento",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} as Meta;

type MyComponentStoryProps = Omit<
  TriadContentHoverSliderProps,
  "primaryContent" & "secondaryContent" & "tertiaryContent"
> & {
  gridSize: TriadContentHoverSliderSize;
  primaryContent: string;
  secondaryContent: string;
  tertiaryContent: string;
};

type Story = StoryObj<MyComponentStoryProps>;

export const Default: Story = {
  args: {
    gridSize: "1-1-1",
    primaryContent: "Example 1",
    secondaryContent: "Example 2",
    tertiaryContent: "Example 3",
  },
  render: (args) => {
    return (
      <TriadContentHoverSlider
        {...args}
        defaultSize
        primaryContent={
          <ExampleContainer
            color={ExampleContainer_Colors.Primary300}
            children={args.primaryContent}
          />
        }
        secondaryContent={
          <ExampleContainer
            color={ExampleContainer_Colors.Primary500}
            children={args.secondaryContent}
          />
        }
        tertiaryContent={
          <ExampleContainer
            color={ExampleContainer_Colors.Primary700}
            children={args.tertiaryContent}
          />
        }
      />
    );
  },
};
