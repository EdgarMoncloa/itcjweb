import type { Preview } from '@storybook/react';
import { GlobalStyle } from '../src/tokens/styles.globals';
import React from 'react';
import { AppConfigStoreProvider } from '../src/store/AppConfigStore';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/tokens/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <AppConfigStoreProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </AppConfigStoreProvider>
    ),
  ],

  parameters: {
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
