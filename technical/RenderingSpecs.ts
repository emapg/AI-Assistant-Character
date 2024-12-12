export const renderingSpecs = {
  performance: {
    targetFPS: 60,
    maxTriangles: 100000,
    textures: {
      mainBody: {
        resolution: 4096,
        format: 'PNG'
      },
      secondary: {
        resolution: 2048,
        format: 'PNG'
      }
    },
    skeleton: {
      maxBones: 90,
      maxInfluencesPerVertex: 4
    }
  },
  rayTracing: {
    bounces: 2,
    samples: 4,
    denoising: true
  },
  lod: {
    levels: [
      {
        distance: 0,
        triangles: 100000
      },
      {
        distance: 10,
        triangles: 50000
      },
      {
        distance: 20,
        triangles: 25000
      }
    ]
  }
};