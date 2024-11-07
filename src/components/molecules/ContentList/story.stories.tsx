import { ContentList } from './ContentList';

export default {
  title: 'Molecules/ContentList',
  component: ContentList,
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

export const Base = (args: any) => {
  const contentSelectorItems = Array.from(
    { length: args.numberOfItems },
    (_, index) => ({
      title: `Titulo ${index}`, // Título de la noticia
      caption: `Este es un texto de prueba ${index}`, // Descripción corta de la noticia
    })
  );
  return (
    <ContentList contentSelectorItems={contentSelectorItems} defaultSize />
  );
};
