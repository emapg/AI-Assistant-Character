export const pluginSystem = {
  core: {
    registry: {
      discovery: true,
      validation: true,
      versioning: true
    },
    security: {
      sandboxing: true,
      permissions: {
        levels: ['read', 'write', 'execute'],
        defaults: 'read'
      }
    }
  },
  interfaces: {
    standard: {
      methods: ['query', 'execute', 'stream'],
      events: ['start', 'update', 'complete']
    },
    data: {
      formats: ['json', 'binary', 'stream'],
      validation: true
    }
  },
  categories: {
    tools: {
      browser: true,
      calculator: true,
      dataAnalysis: true
    },
    services: {
      weather: true,
      translation: true,
      search: true
    },
    integrations: {
      calendar: true,
      email: true,
      documents: true
    }
  }
};