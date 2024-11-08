import type { Meta, StoryObj } from '@storybook/react';
import { ContentLink, ContentLinkProps } from '.';
import styled from 'styled-components';

const meta: Meta<typeof ContentLink> = {
  title: 'Atoms/ContentLink',
  component: ContentLink,
  tags: ['autodocs'],
  parameters: {
    // layout: "centered", // Puedes descomentar esto si lo necesitas
  },
};

export default meta;

export const Base = (args: any) => {
  return (
    <ContentLink
      img='https://picsum.photos/1280/720'
      title='Título de la noticia'
      caption='Esta es la descripcion corta que ira en la imagen'
      alt='Imagen de noticia principal'
      haveDefaultSize
      {...args}
    />
  );
};
