/* globalStyle.jsx */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  /* SECTION HTML\BODY */
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
    font-size: 16px;

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 16px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.fullHDDesktop}) {
      font-size: 18px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.twoKDesktop}) {
      font-size: 24px;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.fourKDesktop}) {
      font-size: 36px;
    } 
  }
  /* !SECTION HTML\BODY */
 

  /* SECTION ROOT */
  :root {
  /* SECTION COLORS */
  /* ANCHOR Base colors */
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

  --colors-app-secondary-50: #eff8ff;
  --colors-app-secondary-100: #daf0ff;
  --colors-app-secondary-300: #91d6ff;
  --colors-app-secondary-500: #379efa;
  --colors-app-secondary-700: #1969dc;
  --colors-app-secondary-900: #1c4a8c;  
  --colors-app-secondary-950: var(--colors-tecnm-logo-pantone-294-c);
  
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
  --colors-transparent-tecnm-primary: #1969dcA0;
  --colors-transparent: #00000000;
  
  /* ANCHOR Shadows */
  --shadow-primary: 4px 4px 4px rgba(0, 0, 0, 0.4);
  --shadow-light: 2px 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-heavy: 8px 8px 16px rgba(0, 0, 0, 0.6);
    /* !SECTION COLORS */

  /* SECTION SIZES */
  /* ANCHOR Font */

  --font-size-overline: 0.625em;  /* 10px / 16px */
  --font-size-body3: 0.75em;      /* 12px / 16px */
  --font-size-body2: 0.875em;     /* 14px / 16px */
  --font-size-body1: 1em;         /* 16px / 16px */
  --font-size-h6: 1.25em;         /* 20px / 16px */
  --font-size-h5: 1.5em;          /* 24px / 16px */
  --font-size-h4: 1.75em;         /* 28px / 16px */
  --font-size-h3: 2em;            /* 32px / 16px */
  --font-size-h2: 2.5em;          /* 40px / 16px */
  --font-size-h1: 3em;            /* 48px / 16px */
  

  
  /* ANCHOR Border */
  --size-border-xs: 0.0625rem;    /* 1px / 16px = 0.0625rem */
  --size-border-small: 0.125rem;  /* 2px / 16px = 0.125rem */
  --size-border-medium: 0.25rem;  /* 4px / 16px = 0.25rem */
  --size-border-large: 0.375rem;  /* 6px / 16px = 0.375rem */
  --size-border-xl: 0.5rem;       /* 8px / 16px = 0.5rem */


  --size-border-radius-small: 0.25rem;   /* 4px / 16px = 0.25rem */
  --size-border-radius-medium: 0.5rem;   /* 8px / 16px = 0.5rem */
  --size-border-radius-large: 1rem;      /* 16px / 16px = 1rem */

  --size-border-radius-full: 50%;        


  /* ANCHOR Heights */
  --size-height-xs: 1em;             /* 16px / 16px */
  --size-height-small: 1.5em;        /* 24px / 16px */
  --size-height-medium: 2em;         /* 32px / 16px */
  --size-height-large: 2.5em;        /* 40px / 16px */
  --size-height-xl: 3em;             /* 48px / 16px */

  --size-height-1-row: 2em;          /* 32px / 16px */
  --size-height-2-row: 4.5em;        /* 72px / 16px */
  --size-height-3-row: 7em;          /* 112px / 16px */
  --size-height-4-row: 9.5em;        /* 152px / 16px */
  --size-height-5-row: 12em;         /* 192px / 16px */
  --size-height-6-row: 14.5em;       /* 232px / 16px */
  --size-height-7-row: 17em;         /* 272px / 16px */
  --size-height-8-row: 19.5em;       /* 312px / 16px */
  --size-height-9-row: 22em;         /* 352px / 16px */
  --size-height-10-row: 24.5em;      /* 392px / 16px */
  --size-height-11-row: 27em;        /* 432px / 16px */
  --size-height-12-row: 29.5em;      /* 472px / 16px */
  --size-height-13-row: 32em;        /* 512px / 16px */
  --size-height-14-row: 34.5em;      /* 552px / 16px */
  --size-height-15-row: 37em;        /* 592px / 16px */
  --size-height-16-row: 39.5em;      /* 632px / 16px */

    /* ANCHOR Icons */
  --size-icon-xs: 0.25rem;      /* 4px / 16px = 0.25rem */
  --size-icon-small: 0.5rem;    /* 8px / 16px = 0.5rem */
  --size-icon-medium: 1rem;     /* 16px / 16px = 1rem */
  --size-icon-large: 1.5rem;    /* 24px / 16px = 1.5rem */
  --size-icon-xl: 2rem;         /* 32px / 16px = 2rem */
  --size-icon-2xl: 3rem;        /* 48px / 16px = 3rem */
  --size-icon-3xl: 4rem;        /* 64px / 16px = 4rem */
  --size-icon-4xl: 6rem;        /* 96px / 16px = 6rem */

  
  /* ANCHOR Padding */
  --size-padding-2xs: 0.125em;  /* 2px / 16px */
  --size-padding-xs: 0.25em;    /* 4px / 16px */
  --size-padding-small: 0.5em;  /* 8px / 16px */
  --size-padding-medium: 1em;   /* 16px / 16px */
  --size-padding-large: 2em;    /* 32px / 16px */
  --size-padding-xl: 4em;       /* 64px / 16px */

  /* SECTION Margins */
  /* ANCHOR Base margins */
  --size-margin-xs: 0.25em;     /* 4px / 16px */
  --size-margin-small: 0.5em;   /* 8px / 16px */
  --size-margin-medium: 1em;    /* 16px / 16px */
  --size-margin-large: 2em;     /* 32px / 16px */
  --size-margin-xl: 4em;        /* 64px / 16px */
  --size-margin-2xl: 6em;       /* 96px / 16px */

  /* ANCHOR Gutter */
  --size-gutter:16px;

  /* ANCHOR Margin body */
  --size-margin-body: 4em;  /* 16px / 16px */
  --size-margin-body-large: 16em;  

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    --size-margin-body-large: 1em;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    --size-margin-body-large: 4em;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktopLarge}) {
    --size-margin-body-large: 16em;  /* 16px / 16px */
  }
  
  
  /* !SECTION Margins */

  /* ANCHOR Widths */
  --size-width-1-cols: 4em;        /* 64px / 16px */
  --size-width-2-cols: 9em;        /* 144px / 16px */
  --size-width-3-cols: 14em;       /* 224px / 16px */
  --size-width-4-cols: 19em;       /* 304px / 16px */
  --size-width-5-cols: 24em;       /* 384px / 16px */
  --size-width-6-cols: 29em;       /* 464px / 16px */
  --size-width-7-cols: 34em;       /* 544px / 16px */
  --size-width-8-cols: 39em;       /* 624px / 16px */
  --size-width-9-cols: 44em;       /* 704px / 16px */
  --size-width-10-cols: 49em;      /* 784px / 16px */
  --size-width-11-cols: 54em;      /* 864px / 16px */
  --size-width-12-cols: 59em;      /* 944px / 16px */
  --size-width-13-cols: 64em;      /* 1024px / 16px */
  --size-width-14-cols: 69em;      /* 1104px / 16px */
  --size-width-15-cols: 74em;      /* 1184px / 16px */
  --size-width-16-cols: 79em;      /* 1264px / 16px */
  
  /* ANCHOR Gaps */
  --size-gap-2xs: 0.125em;   /* 2px / 16px */
  --size-gap-xs: 0.25em;     /* 4px / 16px */
  --size-gap-small: 0.5em;   /* 8px / 16px */
  --size-gap-medium: 1em;    /* 16px / 16px */
  --size-gap-large: 2em;     /* 32px / 16px */
  --size-gap-xl: 3em;        /* 48px / 16px */
  --size-gap-2xl: 4em;       /* 64px / 16px */
  
  /* ANCHOR line-height */
  --line-height-xs: 1;
  --line-height-small: 1.2;
  --line-height-medium: 1.5;
  --line-height-large: 1.75;
  
  /* !SECTION SIZES */


  /* SECTION TIMES */
  /* ANCHOR Transitions */
  /* These transition values must be the same as the ones in AppConfigStoreProvider */
  --transition-very-fast: 0.1s ease-in-out;
  --transition-fast: 0.2s ease-in-out;
  --transition-normal: 0.4s ease-in-out;
  --transition-slow: 0.6s ease-in-out;
  --transition-very-slow: 1s ease-in-out;

  /* ANCHOR Delays */
  --delay-very-fast: 0.1s;
  --delay-fast: 0.2s;
  --delay-normal: 0.4s;
  --delay-slow: 0.6s;  
  /* !SECTION TIMES */

  /* ANCHOR z-index */
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


}
`;
/* !SECTION ROOT */
