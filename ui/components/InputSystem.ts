export const inputSystem = {
  multimodal: {
    voice: {
      active: true,
      hotword: 'hey assistant',
      noiseThreshold: -40,
      echo: {
        cancellation: true,
        strength: 0.8
      }
    },
    text: {
      suggestions: true,
      autoComplete: true,
      spellCheck: true,
      formatting: ['markdown', 'code']
    },
    gesture: {
      camera: {
        fps: 30,
        resolution: '720p',
        fieldOfView: 90
      },
      depth: {
        enabled: true,
        precision: 'high'
      }
    }
  },
  validation: {
    profanityFilter: true,
    languageDetection: true,
    contentSafety: {
      enabled: true,
      level: 'moderate'
    }
  }
};