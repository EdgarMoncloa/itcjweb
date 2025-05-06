import { StoryObj } from "@storybook/react";
import { CustomImg, CustomImgProps } from "./CustomImg";
import styled from "styled-components";

export default {
  title: "Molecules/CustomImg",
  component: CustomImg,
  tags: ["autodocs"],
};

export const Default: StoryObj<CustomImgProps> = {
  args: {
    src: "https://picsum.photos/200/300",
    alt: "Imagen de ejemplo",
  },
  render: (args) => (
    <StyledContainer>
      <CustomImg {...args} />
    </StyledContainer>
  ),
};

const StyledContainer = styled.div`
  width: 720px;
  height: 480px;
  overflow: visible;
`;
