export const voiceSystem = {
  audio: {
    sampleRate: 48000,
    bitDepth: 16,
    channels: 2,
    format: 'wav'
  },
  processing: {
    noiseReduction: {
      threshold: -60,
      reduction: 20
    },
    normalization: {
      targetLevel: -3,
      headroom: 1
    }
  },
  synthesis: {
    voice: {
      pitch: {
        base: 220,
        range: [-3, 3],
        variation: 0.1
      },
      timbre: {
        brightness: 0.6,
        breathiness: 0.2,
        richness: 0.7
      }
    },
    modulation: {
      emotion: {
        joy: { pitch: 1.1, speed: 1.1 },
        calm: { pitch: 0.95, speed: 0.9 },
        focus: { pitch: 1.0, speed: 1.0 }
      }
    }
  },
  recognition: {
    modes: ['continuous', 'command'],
    languages: ['en-US', 'es-ES', 'fr-FR'],
    confidence: {
      threshold: 0.85,
      rejection: 0.4
    }
  }
};