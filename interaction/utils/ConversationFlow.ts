export const conversationFlow = {
  dialogue: {
    management: {
      turnTaking: {
        minGap: 0.3,
        maxWait: 2.0,
        interruption: {
          allowed: true,
          threshold: 0.8
        }
      },
      repair: {
        clarification: true,
        confirmation: true,
        correction: true
      }
    },
    context: {
      tracking: {
        depth: 5,
        timeout: 300
      },
      switching: {
        smooth: true,
        confirmation: true
      }
    }
  },
  topics: {
    detection: {
      method: 'neural',
      confidence: 0.75
    },
    management: {
      maxActive: 3,
      priority: ['user', 'task', 'context']
    }
  },
  recovery: {
    strategies: [
      'clarify',
      'rephrase',
      'example',
      'fallback'
    ],
    escalation: {
      levels: 3,
      timeout: 60
    }
  }
};