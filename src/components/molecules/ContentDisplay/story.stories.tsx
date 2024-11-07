import type { Meta, StoryObj } from '@storybook/react';

import { ContentDisplay } from '.';

const meta = {
  title: 'Molecules/ContentDisplay',
  component: ContentDisplay,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    numberOfItems: 7,
  },
  argTypes: {
    numberOfItems: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },
};

export default meta;

export const Base = (args: any) => {
  const contentLinks = Array.from(
    { length: args.numberOfItems },
    (_, index) => ({
      img: `https://picsum.photos/200/300?random=${index}`,
      title: `Titulo ${index}`,
      caption: `Este es un texto de prueba ${index}`,
      alt: `Imagen de noticia ${index}`,
    })
  );
  return <ContentDisplay contentLinks={contentLinks} haveDefaultSize />;
};
