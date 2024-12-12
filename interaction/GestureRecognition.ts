export const gestureRecognition = {
  handTracking: {
    updateRate: 60,
    smoothing: 0.3,
    gestureTypes: [
      'wave',
      'point',
      'pinch',
      'grab',
      'swipe'
    ],
    confidence: {
      threshold: 0.85,
      minDuration: 0.2
    }
  },
  poses: {
    wave: {
      joints: ['wrist', 'elbow'],
      angles: [-45, 45],
      cycles: 2
    },
    point: {
      fingers: ['index'],
      direction: {
        minAngle: 160,
        duration: 0.5
      }
    },
    pinch: {
      fingers: ['thumb', 'index'],
      distance: 0.02,
      holdTime: 0.3
    }
  },
  responses: {
    wave: {
      animation: 'welcoming',
      priority: 'high'
    },
    point: {
      animation: 'attention',
      priority: 'medium'
    },
    pinch: {
      animation: 'precision',
      priority: 'low'
    }
  }
};