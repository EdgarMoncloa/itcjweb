import { MdHomeRepairService } from 'react-icons/md';
import { Meta, StoryObj } from '@storybook/react';
import { InfoCardDual3DSlider } from './InfoCardDual3DSlider';

export default {
  title: 'Molecules/InfoCardDual3DSlider',
  component: InfoCardDual3DSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof InfoCardDual3DSlider>;

export const Base: StoryObj<typeof InfoCardDual3DSlider> = {
  args: {
    icon: <MdHomeRepairService />,
    title: 'Oficina de Transferencia de Tecnología y Conocimientos',
    description:
      'Entidad especializada que actúa como puente entre la investigación académica, científica o tecnológica y su aplicación en la industria.',
    tags: ['Example', 'Example 2'],
    colorVariant: 'primary',
    defaultSize: true,
  },
  render: (args) => {
    return <InfoCardDual3DSlider {...args} />;
  },
};
