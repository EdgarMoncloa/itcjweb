import { Meta, StoryObj } from '@storybook/react';
import { RichTextRenderer, RichTextRendererProps } from './RichTextRenderer';
import { useEffect, useState } from 'react';

export default {
  title: 'Atoms/RichTextRenderer',
  component: RichTextRenderer,
  tags: ['autodocs'],
} satisfies Meta<RichTextRendererProps>;

type Story = StoryObj<RichTextRendererProps>;

export const Base: Story = {
  args: {
    text: '',
  },
  render: (args) => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
      fetch('./src/mocks/RichTextDescription.mock.markdown')
        .then((response) => response.text())
        .then((data) => setMarkdownContent(data))
        .catch((error) => console.error('Error loading markdown:', error));
    }, []);

    return <RichTextRenderer {...args} text={markdownContent} />;
  },
};
