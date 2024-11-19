import { FaIndustry } from 'react-icons/fa';
import { AiFillPieChart } from 'react-icons/ai';
import { GiProcessor } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';
import { BiNetworkChart } from 'react-icons/bi';
import { Meta, StoryObj } from '@storybook/react';
import { InfoCard, InfoCardProps } from './InfoCard';

const iconMap = {
  'Red de datos': <BiNetworkChart />,
  Laboratorio: <ImLab />,
  Procesador: <GiProcessor />,
  Gráfica: <AiFillPieChart />,
  Fábrica: <FaIndustry />,
};

const meta = {
  title: 'Molecules/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    tags: {
      control: {
        type: 'text',
      },
      description: 'Lista de tags, ingresear valores separados por coma',
      table: {
        defaultValue: { summary: 'Campus 1, Campus 2, Presencial, EAD' },
        type: {
          summary: 'string',
        },
      },
    },
    icon: {
      options: Object.keys(iconMap),
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof InfoCard>;

type MyComponentStoryProps = Omit<InfoCardProps, 'tags'> & {
  tags: string;
};
type Story = StoryObj<MyComponentStoryProps>;

export const Default: Story = {
  args: {
    title: 'Ingeniería en sistemas computacionales',
    description:
      'Ingeniería en sistemas computacionales es un campo de la ingeniería que se ocupa de la creación y el desarrollo de sistemas informáticos y de software. Este campo se enfoca en la aplicación de técnicas de diseño y programación para la creación de soluciones que satisfagan las necesidades de los usuarios.',
    tags: 'Campus 1, Campus 2, Presencial, EAD',
    icon: 'Red de datos',
  },
  render: (args) => {
    const icon = iconMap[args.icon as keyof typeof iconMap];
    const tags = args.tags.split(',');
    return <InfoCard {...args} icon={icon} tags={tags} />;
  },
};

export default meta;
