interface CircuitPattern {
  density: number;
  glowIntensity: number;
  animationSpeed: number;
}

export const circuitPatterns = {
  body: {
    density: 0.7,
    glowIntensity: 0.4,
    animationSpeed: 0.2,
    color: [67, 183, 255],
    pulseFrequency: 0.5
  },
  core: {
    density: 0.9,
    glowIntensity: 0.6,
    animationSpeed: 0.3,
    color: [67, 183, 255],
    pulseFrequency: 1.0
  }
};