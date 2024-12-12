export const dataVisualization = {
  charts: {
    types: {
      basic: ['line', 'bar', 'pie', 'scatter'],
      advanced: ['heatmap', 'radar', 'sankey'],
      statistical: ['box', 'violin', 'histogram']
    },
    styling: {
      themes: ['light', 'dark', 'professional'],
      colors: {
        palettes: ['categorical', 'sequential', 'diverging'],
        accessibility: true
      }
    }
  },
  interactivity: {
    zoom: {
      enabled: true,
      limits: [0.5, 4.0]
    },
    tooltips: {
      hover: true,
      click: true,
      content: ['value', 'metadata', 'context']
    },
    filters: {
      dynamic: true,
      multiple: true,
      persistence: true
    }
  },
  export: {
    formats: ['png', 'svg', 'pdf'],
    quality: {
      raster: [72, 300],
      vector: true
    }
  }
};