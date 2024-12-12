export const knowledgeBase = {
  storage: {
    facts: {
      categories: ['general', 'domain', 'user'],
      format: 'graph',
      validation: true
    },
    rules: {
      types: ['logical', 'behavioral', 'social'],
      priority: [1, 5],
      conflicts: 'resolve'
    }
  },
  retrieval: {
    methods: {
      semantic: true,
      keyword: true,
      contextual: true
    },
    ranking: {
      relevance: 0.6,
      recency: 0.2,
      confidence: 0.2
    }
  },
  learning: {
    sources: {
      conversation: true,
      feedback: true,
      observation: true
    },
    validation: {
      human: true,
      automatic: true,
      confidence: 0.9
    }
  }
};