/* globalStyle.jsx */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:
      "montserrat",
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      "Noto Sans",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji";
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-feature-settings: normal;
  }

  :root {
  /* Mode 1 */
  /* colors */
  --colors-app-accent: var(--colors-app-secondary-700);
  --colors-app-background: var(--colors-app-neutral-50);
  --colors-app-text-dark: var(--colors-app-neutral-900);
  --colors-app-text-light: var(--colors-app-neutral-50);
  --colors-app-white: #ffffff;
  --colors-app-primary-50: #fff5f6;
  --colors-app-primary-100: #ffd2d6;
  --colors-app-primary-200: #ffafb7;
  --colors-app-primary-300: #f98c97;
  --colors-app-primary-400: #f06979;
  --colors-app-primary-500: #e4465c;
  --colors-app-primary-600: #d42b40;
  --colors-app-primary-700: var(--colors-itcj-primary);
  --colors-app-primary-800: #ae0003;
  --colors-app-primary-900: #8e0000;
  --colors-app-primary-950: #590000;
  --colors-app-neutral-50: #fcfcfc;
  --colors-app-neutral-100: #f1f0f1;
  --colors-app-neutral-200: #e6e5e6;
  --colors-app-neutral-300: #dad9db;
  --colors-app-neutral-400: #cfcecf;
  --colors-app-neutral-500: #c3c2c4;
  --colors-app-neutral-600: #b5b4b6;
  --colors-app-neutral-700: #8a8a8c;
  --colors-app-neutral-800: #605f61;
  --colors-app-neutral-900: #353536;
  --colors-app-neutral-950: #0b0b0b;
  --colors-app-notification-alert: #fffccc;
  --colors-app-notification-success: #ccffcc;
  --colors-app-notification-wrong: #ffcccc;
  --colors-app-secondary-100: #daf0ff;
  --colors-app-secondary-300: #91d6ff;
  --colors-app-secondary-500: #379efa;
  --colors-app-secondary-700: #1969dc;
  --colors-app-secondary-900: #1c4a8c;
  --colors-app-secondary-950: var(--colors-tecnm-logo-pantone-294-c);
  --colors-app-secondary-secondary-50: #eff8ff;
  --colors-documentation-contrast-background: #fbd0fb;
  --colors-itcj-primary: #c11627;
  --colors-tecnm-black: #000000;
  --colors-tecnm-pantone-424-c: #6f7271;
  --colors-tecnm-pantone-465-c: #b38e5d;
  --colors-tecnm-pantone-468-c: #d4c19c;
  --colors-tecnm-pantone-626-c: #235b4e;
  --colors-tecnm-pantone-627-c: #10312b;
  --colors-tecnm-pantone-7420-c: #9d2449;
  --colors-tecnm-pantone-7421-c: #621132;
  --colors-tecnm-logo-black: var(--colors-tecnm-black);
  --colors-tecnm-logo-pantone-294-c: #1b396a;
  --colors-tecnm-logo-pantone-cool-gray-10-c: #807e82;
  
  --colors-transparent-itcj-primary: #c11627A0;
  --colors-transparent: #00000000;

  /* SIZES */
   /* Font Sizes */
  --font-size-overline: 10px;
  --font-size-body3: 12px;
  --font-size-body2: 14px;
  --font-size-body1: 16px;
  --font-size-h6: 20px;
  --font-size-h5: 24px;
  --font-size-h4: 28px;
  --font-size-h3: 32px;
  --font-size-h2: 40px;
  --font-size-h1: 48px;
  
  /* Border Sizes */
  --size-border-xs: 1px;
  --size-border-small: 2px;
  --size-border-medium: 4px;
  --size-border-large: 6px;
  --size-border-xl: 8px;

  --size-border-radius-small: 4px;
  --size-border-radius-medium: 8px;
  --size-border-radius-large: 16px;
  --size-border-radius-full: 50%;

  /* Heights */
  --size-height-xs: 16px;
  --size-height-small: 24px;
  --size-height-medium: 32px;
  --size-height-large: 40px;
  --size-height-xl: 48px;

  --size-height-1-row: 32px;
  --size-height-2-row: 72px;
  --size-height-3-row: 112px;
  --size-height-4-row: 152px;
  --size-height-5-row: 192px;
  --size-height-6-row: 232px;
  --size-height-7-row: 272px;
  --size-height-8-row: 312px;
  --size-height-9-row: 352px;
  --size-height-10-row: 392px;
  --size-height-11-row: 432px;
  --size-height-12-row: 472px;
  --size-height-13-row: 512px;
  --size-height-14-row: 552px;
  --size-height-15-row: 592px;
  --size-height-16-row: 632px;

  /* Icons */
  --size-icon-xs: 4px;
  --size-icon-small: 8px;
  --size-icon-medium: 16px;
  --size-icon-large: 24px;
  --size-icon-xl: 32px;
  --size-icon-2xl: 48px;
  --size-icon-3xl: 64px;
  --size-icon-4xl: 96px ;
  
  /* Padding */
  --size-padding-2xs: 2px;
  --size-padding-xs: 4px;
  --size-padding-small: 8px;
  --size-padding-medium: 16px;
  --size-padding-large: 32px;
  --size-padding-xl: 64px;

  /* Margins (similar a padding) */
  --size-margin-xs: 4px;
  --size-margin-small: 8px;
  --size-margin-medium: 16px;
  --size-margin-large: 32px;
  --size-margin-xl: 64px;

  --size-gutter:16px;

  --size-width-1-cols: 64px;
  --size-width-2-cols: 144px;
  --size-width-3-cols: 224px;
  --size-width-4-cols: 304px;
  --size-width-5-cols: 384px;
  --size-width-6-cols: 464px;
  --size-width-7-cols: 544px;
  --size-width-8-cols: 624px;
  --size-width-9-cols: 704px;
  --size-width-10-cols: 784px;
  --size-width-11-cols: 864px;
  --size-width-12-cols: 944px;
  --size-width-13-cols: 1024px;
  --size-width-14-cols: 1104px;
  --size-width-15-cols: 1184px;
  --size-width-16-cols: 1264px;

  /* Gaps (useful for grid/flex layouts) */
  --size-gap-2xs: 2px;
  --size-gap-xs: 4px;
  --size-gap-small: 8px;
  --size-gap-medium: 16px;
  --size-gap-large: 32px;
  --size-gap-xl: 48px;
  --size-gap-2xl: 64px;

  /* Shadows */
  --shadow-primary: 4px 4px 4px rgba(0, 0, 0, 0.4);
  --shadow-light: 2px 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-heavy: 8px 8px 16px rgba(0, 0, 0, 0.6);

  /* TIMES */
  /* Transitions */
  /* These transition values must be the same as the ones in AppConfigStoreProvider */
  --transition-very-fast: 0.1s ease-in-out;
  --transition-fast: 0.2s ease-in-out;
  --transition-normal: 0.4s ease-in-out;
  --transition-slow: 0.6s ease-in-out;
  --transition-very-slow: 1s ease-in-out;

  /* Delays */
  --delay-very-fast: 0.1s;
  --delay-fast: 0.2s;
  --delay-normal: 0.4s;
  --delay-slow: 0.6s;

  /* z-index */
  --z-index-background-lowest: -5;
  --z-index-background-lower: -4;
  --z-index-background-middle: -3;
  --z-index-background-higer: -2; 
  --z-index-background-highest: -1;
  --z-index-overlay: 0;
  --z-index-above-background: 1;
  --z-index-tooltip: 100;
  --z-index-popover: 200;
  --z-index-dropdown: 900;
  --z-index-header: 800;
  --z-index-modal: 1000;
  --z-index-toast: 1100;
  --z-index-spinner: 1200;
  --z-index-fullscreen: 1300;


  /* line-height */
  --line-height-xs: 1;
  --line-height-small: 1.2;
  --line-height-medium: 1.5;
  --line-height-large: 1.75;

}
`;
