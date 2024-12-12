export const visualFeedback = {
  attention: {
    eyeContact: {
      trackingSpeed: 0.3,
      maxRotation: 30,
      returnDelay: 0.5
    },
    focus: {
      highlightIntensity: 0.4,
      highlightColor: [67, 183, 255],
      transitionDuration: 0.3
    }
  },
  acknowledgment: {
    nodding: {
      amplitude: 5,
      duration: 0.6,
      curve: 'easeInOut'
    },
    gestures: {
      thumbsUp: {
        duration: 1.0,
        scale: 1.2
      },
      wave: {
        duration: 1.2,
        amplitude: 15
      }
    }
  },
  errors: {
    glitch: {
      duration: 0.2,
      intensity: 0.3,
      color: [255, 61, 61]
    },
    shake: {
      amplitude: 0.05,
      frequency: 4,
      duration: 0.4
    }
  }
};