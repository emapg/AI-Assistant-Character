export const codeInterpreter = {
  execution: {
    languages: [
      'python',
      'javascript',
      'typescript',
      'sql'
    ],
    environment: {
      sandbox: true,
      timeout: 30000,
      memoryLimit: '256MB'
    },
    security: {
      isolation: true,
      permissions: ['fs.read', 'net.fetch'],
      validation: true
    }
  },
  analysis: {
    static: {
      linting: true,
      typeChecking: true,
      security: true
    },
    runtime: {
      performance: true,
      memory: true,
      errors: true
    }
  },
  assistance: {
    suggestions: {
      completion: true,
      optimization: true,
      bestPractices: true
    },
    documentation: {
      inline: true,
      references: true,
      examples: true
    }
  }
};