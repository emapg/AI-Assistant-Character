export const facialSystem = {
  blendShapes: {
    count: 52,
    categories: {
      eyes: ['blink', 'squint', 'widen'],
      mouth: ['smile', 'neutral', 'contemplative'],
      brows: ['raise', 'furrow', 'neutral']
    }
  },
  visemes: {
    count: 15,
    phonemes: [
      'A', 'E', 'I', 'O', 'U',
      'F/V', 'TH', 'L', 'M/B/P',
      'N', 'R', 'S/Z', 'SH/CH/J',
      'W/Q', 'silence'
    ]
  },
  microExpressions: {
    joy: {
      duration: 0.5,
      intensity: 0.7
    },
    curiosity: {
      duration: 0.4,
      intensity: 0.6
    },
    empathy: {
      duration: 0.6,
      intensity: 0.8
    },
    contemplation: {
      duration: 0.7,
      intensity: 0.5
    }
  }
};