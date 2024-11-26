import styled from 'styled-components';
import { InteractiveTriadGrid } from './InteractiveTriadGrid';
import { ExampleContainer, ExampleContainerColors } from '../ExampleContainer';

export default {
  title: 'Atoms/InteractiveTriadGrid',
  component: InteractiveTriadGrid,
};

export const Default = () => {
  return (
    <InteractiveTriadGrid
      defaultSize
      primaryContent={
        <ExampleContainer color={ExampleContainerColors.Primary100} />
      }
      secondaryContent={
        <ExampleContainer color={ExampleContainerColors.Primary500} />
      }
      tertiaryContent={
        <ExampleContainer color={ExampleContainerColors.Primary700} />
      }
    />
  );
};
