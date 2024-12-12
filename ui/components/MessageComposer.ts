export const messageComposer = {
  interface: {
    layout: {
      expandable: true,
      minHeight: 48,
      maxHeight: 200
    },
    attachments: {
      types: ['image', 'file', 'link', 'code'],
      maxSize: 10485760, // 10MB
      preview: true
    }
  },
  formatting: {
    toolbar: {
      position: 'top',
      tools: ['bold', 'italic', 'code', 'link']
    },
    shortcuts: {
      'ctrl+b': 'bold',
      'ctrl+i': 'italic',
      'ctrl+k': 'link',
      'ctrl+/': 'code'
    }
  },
  suggestions: {
    triggers: {
      '@': 'mentions',
      '/': 'commands',
      ':': 'emojis'
    },
    display: {
      maxItems: 5,
      position: 'above'
    }
  }
};