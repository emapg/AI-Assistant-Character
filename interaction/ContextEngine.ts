export const contextEngine = {
  memory: {
    shortTerm: {
      capacity: 10,
      duration: 300, // seconds
      priority: ['user_input', 'emotional_state', 'current_topic']
    },
    longTerm: {
      categories: [
        'user_preferences',
        'conversation_history',
        'learned_behaviors'
      ],
      persistence: true
    }
  },
  analysis: {
    sentiment: {
      levels: ['positive', 'neutral', 'negative'],
      confidence: 0.8,
      response: {
        positive: 'empathetic',
        neutral: 'professional',
        negative: 'supportive'
      }
    },
    intent: {
      categories: [
        'question',
        'statement',
        'command',
        'emotional_expression'
      ],
      contextWeight: 0.7
    }
  },
  adaptation: {
    learning: {
      rate: 0.1,
      factors: [
        'user_feedback',
        'conversation_success',
        'engagement_metrics'
      ]
    },
    personalization: {
      topics: true,
      speaking_style: true,
      response_length: true
    }
  }
};