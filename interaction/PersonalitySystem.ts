export const personalitySystem = {
  traits: {
    friendliness: 0.8,
    professionalism: 0.7,
    empathy: 0.9,
    humor: 0.4
  },
  emotionalState: {
    baseline: 'positive',
    transitions: {
      duration: 0.5,
      blending: 0.3
    },
    expressions: {
      joy: {
        intensity: 0.8,
        decay: 0.2
      },
      curiosity: {
        intensity: 0.6,
        decay: 0.3
      },
      concern: {
        intensity: 0.4,
        decay: 0.5
      }
    }
  },
  conversation: {
    turntaking: {
      minPause: 0.3,
      maxPause: 2.0,
      interruptibility: 0.4
    },
    engagement: {
      eyeContactFrequency: 0.8,
      gestureFrequency: 0.6,
      responseLatency: 0.4
    },
    memory: {
      contextRetention: 10,
      userPreferences: true,
      conversationHistory: true
    }
  }
};