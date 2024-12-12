export const themeSystem = {
  base: {
    light: {
      background: '#FFFFFF',
      surface: '#F5F5F5',
      primary: '#43B7FF',
      secondary: '#D1D1D1',
      text: '#1A1A1A'
    },
    dark: {
      background: '#1A1A1A',
      surface: '#2D2D2D',
      primary: '#43B7FF',
      secondary: '#404040',
      text: '#FFFFFF'
    }
  },
  variants: {
    highContrast: {
      ratios: {
        normal: 7,
        large: 4.5
      },
      borders: {
        width: 2,
        style: 'solid'
      }
    },
    colorBlind: {
      deuteranopia: {
        primary: '#0077BB',
        secondary: '#EE7733'
      },
      protanopia: {
        primary: '#88CCEE',
        secondary: '#EE8866'
      }
    }
  },
  animation: {
    transitions: {
      duration: 0.2,
      timing: 'ease-in-out'
    },
    hover: {
      scale: 1.02,
      brightness: 1.1
    }
  }
};