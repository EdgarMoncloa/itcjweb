import { Meta, StoryObj } from "@storybook/react";
import { NavMenu } from "./NavMenu";
import styled from "styled-components";
import { NavOption } from "../../molecules/NavOption";
import { FaSchool } from "react-icons/fa";

export default {
  title: "Organisms/NavMenu",
  component: NavMenu,
  tags: ["autodocs"],
  argTypes: {
    defaultSize: {
      control: {
        type: "boolean",
      },
      table: {
        category: "Solo para storybook",
      },
    },
  },
} as Meta<typeof NavMenu>;

export const Base: StoryObj<typeof NavMenu> = {
  args: {
    defaultSize: true,
  },
  render: (args) => {
    const contentElements = (
      <>
        <NavOption
          content={"Contenido"}
          link={"#"}
          leftIcon={<FaSchool />}
          subitems={[
            {
              content: "Subitem 1",
              link: "#",
            },
            {
              content: "Subitem 2",
              link: "#",
            },
            {
              content: "Subitem 3",
              link: "#",
            },
          ]}
        />
        <NavOption
          content={"Contenido"}
          link={"#"}
          subitems={[
            {
              content: "Subitem 1",
              link: "#",
            },
            {
              content: "Subitem 2",
              link: "#",
            },
            {
              content: "Subitem 3",
              link: "#",
            },
          ]}
        />
        <NavOption
          content={"Contenido"}
          link={"#"}
          subitems={[
            {
              content: "Subitem 1",
              link: "#",
            },
            {
              content: "Subitem 2",
              link: "#",
            },
            {
              content: "Subitem 3",
              link: "#",
            },
            {
              content: "Subitem 1",
              link: "#",
            },
            {
              content: "Subitem 2",
              link: "#",
            },
            {
              content: "Subitem 3",
              link: "#",
            },
          ]}
        />
        <NavOption content={"Contenido"} link={"#"} />
      </>
    );
    return (
      <NavMenu {...args} title="ITCJ" contentElelments={contentElements} />
    );
  },
};
