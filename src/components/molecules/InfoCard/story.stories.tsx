import { FaIndustry } from 'react-icons/fa';
import { AiFillPieChart } from 'react-icons/ai';
import { GiProcessor } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';
import { BiNetworkChart } from 'react-icons/bi';
import { StoryObj } from '@storybook/react';
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
      description: 'Descripción corta',
      control: {
        type: 'text',
      },
    },
    maxLinesDescription: {
      description: 'Número máximo de líneas de la descripción',
      control: {
        type: 'number',
      },
      table: {
        type: {
          summary: 'number',
        },
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
};

type MyComponentStoryProps = Omit<InfoCardProps, 'tags' | 'description'> & {
  tags: string;
  description: string;
  maxLinesDescription: number;
  descriptionTitle: string;
};
type Story = StoryObj<MyComponentStoryProps>;

export const Default: Story = {
  args: {
    title: 'Ingeniería en sistemas computacionales',
    description:
      'Diseña el futuro, programa soluciones y transforma el mundo digital. 🌍💻',
    maxLinesDescription: 6,
    tags: 'Campus 1, Campus 2, Presencial, EAD',
    icon: 'Red de datos',
    descriptionTitle: 'ISC',
  },
  render: (args) => {
    const icon = iconMap[args.icon as keyof typeof iconMap];
    const tags = args.tags.split(',');
    return (
      <InfoCard
        {...args}
        icon={icon}
        tags={tags}
        description={{
          text: args.description,
          maxLines: args.maxLinesDescription,
          title: args.descriptionTitle,
        }}
        // defaultSize
      />
    );
  },
};

export default meta;
