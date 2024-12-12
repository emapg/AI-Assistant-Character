export const imageGeneration = {
  models: {
    types: ['diffusion', 'gan', 'hybrid'],
    resolution: {
      min: [512, 512],
      max: [1024, 1024],
      aspectRatios: ['1:1', '16:9', '4:3']
    },
    styles: {
      artistic: ['realistic', 'abstract', 'cartoon'],
      technical: ['diagram', 'sketch', 'blueprint']
    }
  },
  processing: {
    pipeline: {
      steps: ['prompt', 'generation', 'refinement'],
      iterations: {
        min: 20,
        max: 50
      }
    },
    parameters: {
      guidance: {
        scale: [1, 20],
        default: 7.5
      },
      quality: {
        steps: [20, 50],
        strength: [0.1, 1.0]
      }
    }
  },
  safety: {
    filters: {
      content: true,
      bias: true,
      watermark: true
    },
    moderation: {
      automatic: true,
      humanReview: false
    }
  }
};