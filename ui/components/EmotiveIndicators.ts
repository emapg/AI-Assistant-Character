export const emotiveIndicators = {
  thinking: {
    particles: {
      count: 12,
      radius: 0.05,
      speed: 0.8,
      pattern: 'circular'
    },
    animation: {
      duration: 1.5,
      loopType: 'continuous'
    }
  },
  listening: {
    waveform: {
      segments: 32,
      amplitude: 0.03,
      frequency: 2.0,
      color: [67, 183, 255, 0.6]
    },
    animation: {
      duration: 1.0,
      style: 'breathing'
    }
  },
  processing: {
    rings: {
      count: 3,
      baseRadius: 0.1,
      thickness: 0.01,
      spacing: 0.03
    },
    animation: {
      rotationSpeed: 0.5,
      pulseRate: 1.2
    }
  }
};