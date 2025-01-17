import { StoryObj, Meta } from "@storybook/react";
import { SimpleDualGrid } from "./SimpleDualGrid";
import { CKEditorRenderer } from "../../../organisms/CKEditorRenderer";
import RichTextRedererStories from "../../RichTextRenderer/RichTextRederer.stories";
import { RichTextRenderer } from "../../RichTextRenderer";

export default {
  title: "Atoms/Grids/SimpleDualGrid",
  component: SimpleDualGrid,
  tags: ["autodocs"],
  argTypes: {
    firstContentWidht: {
      description: "Ancho del primer contenido",
      control: {
        type: "range",
        min: 1,
        max: 16,
        step: 1,
        defaultValue: 8,
      },
    },
    firstContent: {
      description: "Primer contenido",
      control: {
        type: "text",
      },
    },
    secondContent: {
      description: "Segundo contenido",
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof SimpleDualGrid>;

interface MyStory {
  firstContentWidht: number;
  firstContent: string;
  secondContent: string;
}

type Story = StoryObj<MyStory>;

export const Base: Story = {
  args: {
    firstContentWidht: 8,
    firstContent:
      "![An image uploaded to Strapi called coffee-art](http://localhost:1337/uploads/coffee_art_a3af78ce54.jpeg)",
    secondContent:
      "Esta es una descripción de lo que es la carrera de administración.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, justo sed scelerisque efficitur, dolor ligula vulputate mauris, a gravida purus lacus eget dui. Maecenas lobortis dui non sodales luctus. Nam cursus ullamcorper velit, eu maximus sapien aliquet dapibus. In ultrices viverra purus. Curabitur id sem ut diam pharetra tristique. Nullam nec pretium erat. Maecenas sed mi maximus, posuere mauris at, ornare eros. Nunc quis purus sollicitudin, consectetur nibh sit amet, auctor metus. Morbi gravida gravida massa nec sodales. Nullam sit amet consequat ligula. Integer tincidunt est sed ex pulvinar, id hendrerit lectus ultricies. Sed vitae sem tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n",
  },
  render: (args) => {
    const firstContent = <RichTextRenderer content={args.firstContent} />;
    const secondContent = <RichTextRenderer content={args.secondContent} />;
    return (
      <SimpleDualGrid
        {...args}
        firstContent={firstContent}
        secondContent={secondContent}
      />
    );
  },
};
