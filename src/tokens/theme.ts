export interface ThemeType {
  breakpoints: {
    mobile: number;
    tablet: number;
    laptop: number;
    desktop: number;
    desktopLarge: number;
    extraLargeDesktop: number;
    fullHDDesktop: number;
    twoKDesktop: number;
    fourKDesktop: number;
    eightKDesktop: number;
  };
  duration: {
    none: number;
    "very-fast": number;
    fast: number;
    normal: number;
    slow: number;
    "very-slow": number;
  };
}
export const theme: ThemeType = {
  breakpoints: {
    mobile: 480,
    tablet: 720,
    laptop: 1024,
    desktop: 1280,
    desktopLarge: 1440,
    extraLargeDesktop: 1600,
    fullHDDesktop: 1920,
    twoKDesktop: 2560,
    fourKDesktop: 3840,
    eightKDesktop: 7680,
  },
  duration: {
    none: 0,
    "very-fast": 0.1,
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    "very-slow": 1,
  },
};
