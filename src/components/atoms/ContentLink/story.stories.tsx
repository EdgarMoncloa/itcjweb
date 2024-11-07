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

const StyledTemplate = styled.div`
  width: 1280px;
  height: 600px;
`;

const Template: StoryObj<ContentLinkProps> = {
  render: (args) => (
    <StyledTemplate>
      <ContentLink {...args} haveDefaultSize />
    </StyledTemplate>
  ),
  args: {
    img: 'https://picsum.photos/1280/720',
    title: 'Título de la noticia',
    caption: 'Esta es la descripcion corta que ira en la imagen',
  },
};

export const Base = Template;
