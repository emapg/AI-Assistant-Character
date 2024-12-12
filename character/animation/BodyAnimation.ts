export const animationSystem = {
  frameRate: 60,
  ikChains: {
    arms: {
      segments: 3,
      constraints: {
        elbow: [-145, 0],
        wrist: [-45, 45]
      }
    },
    legs: {
      segments: 3,
      constraints: {
        knee: [0, 145],
        ankle: [-20, 20]
      }
    }
  },
  gestures: {
    pointing: {
      duration: 1.2,
      blending: 0.3
    },
    explaining: {
      duration: 2.0,
      blending: 0.4
    },
    welcoming: {
      duration: 1.5,
      blending: 0.3
    }
  },
  idle: {
    breathingCycle: 4.0,
    amplitude: 0.02,
    variation: 0.1
  }
};