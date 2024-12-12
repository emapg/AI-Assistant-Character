export const promptEngineering = {
  templates: {
    system: {
      roles: ['assistant', 'teacher', 'expert', 'analyst'],
      parameters: {
        expertise: ['technical', 'creative', 'analytical'],
        tone: ['professional', 'friendly', 'academic']
      }
    },
    contextual: {
      history: {
        maxTokens: 4096,
        relevanceWeight: 0.8,
        recencyBias: true
      },
      memory: {
        shortTerm: 10,
        longTerm: 100,
        persistence: true
      }
    }
  },
  enhancement: {
    clarification: {
      triggers: ['ambiguous', 'incomplete', 'unclear'],
      questions: {
        specific: true,
        contextual: true,
        leading: false
      }
    },
    refinement: {
      techniques: [
        'decomposition',
        'specification',
        'examples'
      ],
      iterative: true
    }
  }
};