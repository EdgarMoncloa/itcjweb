import { Meta, StoryObj } from '@storybook/react';
import { LandingPage } from './';
import { undergraduatePrograms } from '../../../mocks/undergraduatePrograms';
import { news } from '../../../mocks/news';
import { TriadGridSliderInfoCardProps } from '../../molecules/TriadGridSliderInfoCard';
import { blogsMock } from '../../../mocks/blogs';
import { postgraduatePrograms } from '../../../mocks/postgraduatePrograms';

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
    const undergraduateItems: TriadGridSliderInfoCardProps[] =
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
        blogsContent={blogsMock}
        postgraduateContent={{ 
          // title: 'Programas de postgrado',
          postgraduatePrograms: postgraduatePrograms,
        }}
      />
    );
  },
};
