import { Meta, StoryObj } from '@storybook/react';
import { LandingPage } from './';
import { undergraduatePrograms } from '../../../mocks/undergraduatePrograms';
import { news } from '../../../mocks/news';
import { InfoCardTrialSliderProps } from '../../molecules/InfoCardTriadSlider';
import { blogsMock } from '../../../mocks/blogs';
import { postgraduatePrograms } from '../../../mocks/postgraduatePrograms';
import { ServicesMoock } from '../../../mocks/services.mock';
import { relevantSitesMock } from '../../../mocks/relevantSitesMock';

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} as Meta<typeof LandingPage>;

export const Base: StoryObj<typeof LandingPage> = {
  render: () => {
    const undergraduateItems: InfoCardTrialSliderProps[] =
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
        servicesSection={{
          services: ServicesMoock,
        }}
        interestSitesContent={{
          sites: relevantSitesMock,
          title: 'Sitios de interés',
        }}
      />
    );
  },
};
