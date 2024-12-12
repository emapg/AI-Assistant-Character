export const accessibilityFeatures = {
  visual: {
    highContrast: {
      enabled: true,
      ratios: {
        text: 7.0,
        interface: 4.5
      }
    },
    colorBlindness: {
      modes: [
        'protanopia',
        'deuteranopia',
        'tritanopia'
      ],
      alternateColors: true
    },
    textSize: {
      range: [12, 24],
      scaleFactor: 1.2
    }
  },
  audio: {
    subtitles: {
      enabled: true,
      position: 'bottom',
      size: 'adjustable',
      background: 'semi-transparent'
    },
    transcription: {
      realTime: true,
      saveHistory: true,
      format: 'text/html'
    }
  },
  interaction: {
    keyboard: {
      shortcuts: true,
      navigation: true,
      commands: true
    },
    screenReader: {
      compatibility: true,
      descriptions: {
        gestures: true,
        emotions: true,
        actions: true
      }
    },
    timing: {
      extendedResponses: true,
      adjustableSpeech: true,
      inputTimeout: 5000
    }
  }
};