import { StoryObj } from "@storybook/react";
import { CustomImg, CustomImgProps } from "./CustomImg";

export default {
  title: "Atoms/CustomImg",
  component: CustomImg,
  tags: ["autodocs"],
};

export const Default: StoryObj<CustomImgProps> = {
  args: {
    src: "https://picsum.photos/200/300",
    alt: "Imagen de ejemplo",
  },
  render: (args) => <CustomImg {...args} />,
};
