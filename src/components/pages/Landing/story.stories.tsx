import { Meta, StoryObj } from '@storybook/react';
import { LandingPage } from './';
import { undergraduatePrograms } from '../../../mocks/undergraduatePrograms';
import { news } from '../../../mocks/news';
import { TriadGridSliderInfoCardProps } from '../../molecules/TriadGridSliderInfoCard';

export default {
  title: 'Pages/Landing Page',
  component: LandingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} as Meta<typeof LandingPage>;

export const Base: StoryObj<typeof LandingPage> = {
  render: () => {
    const blogContents = [
      {
        imgSrc: `https://storage.googleapis.com/pod_public/750/177679.jpg`,
        title: `Imagen Alta tesgin`,
        content: 'Este es un texto de prueba',
      },
      {
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt3e_-wd8i6DJP8jA-1qq-L_DI93zynb_Eg&s`,
        title: `Imagen Cuadrada`,
        content: 'Este es un texto de prueba',
      },
      {
        imgSrc: `https://img.freepik.com/premium-photo/bright-abstract-waves-rainbow-celebration-flow-smoothly-generated-by-ai_188544-9530.jpg?semt=ais_hybrid`,
        title: `Imagen Ancha`,
        content: 'Este es un texto de prueba',
      },
      {
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUCTw93YX-C0tIyAHP-2iySLP2OlE9CWPgQ&s`,
        title: `Imagen Panoramica`,
        content: 'Este es un texto de prueba',
      },
      {
        imgSrc: `https://storage.googleapis.com/pod_public/750/177679.jpg`,
        title: `Imagen Alta 2`,
        content: 'Este es un texto de prueba',
      },
      {
        imgSrc: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt3e_-wd8i6DJP8jA-1qq-L_DI93zynb_Eg&s`,
        title: `Imagen Cuadrada 2`,
        content: 'Este es un texto de prueba',
      },
      {
        imgSrc: `https://img.freepik.com/premium-photo/bright-abstract-waves-rainbow-celebration-flow-smoothly-generated-by-ai_188544-9530.jpg?semt=ais_hybrid`,
        title: `Imagen Ancha 2`,
        content: 'Este es un texto de prueba',
      },
    ];

    const undergraduateItems: TriadGridSliderInfoCardProps =
      undergraduatePrograms.map((item) => ({
        title: item.title,
        subtitle: item.key,
        description: item.description,
        tags: item.campus,
        icon: item.icon,
      }));

    return (
      <LandingPage
        heroContentLinks={news}
        undergraduateContent={undergraduateItems}
        blogsContent={blogContents}
      />
    );
  },
};
