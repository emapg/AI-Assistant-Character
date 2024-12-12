export const materialSystem = {
  pbr: {
    metallic: {
      maps: ['albedo', 'normal', 'roughness', 'metallic'],
      resolution: 4096
    },
    holographic: {
      maps: ['emission', 'noise', 'flow'],
      resolution: 2048
    }
  },
  shaders: {
    iridescent: {
      parameters: {
        colorShift: 15,
        intensity: 0.3
      }
    },
    circuit: {
      parameters: {
        glowIntensity: 0.4,
        flowSpeed: 0.2
      }
    }
  }
};