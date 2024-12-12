export const interactionMetrics = {
  engagement: {
    tracking: {
      attention: {
        gaze: true,
        posture: true,
        activity: true
      },
      interaction: {
        frequency: true,
        duration: true,
        quality: true
      }
    },
    scoring: {
      weights: {
        attention: 0.4,
        interaction: 0.4,
        sentiment: 0.2
      },
      thresholds: {
        low: 0.3,
        medium: 0.6,
        high: 0.8
      }
    }
  },
  performance: {
    metrics: {
      responseTime: {
        target: 0.8,
        max: 2.0
      },
      accuracy: {
        understanding: 0.9,
        response: 0.85
      },
      satisfaction: {
        rating: true,
        feedback: true
      }
    },
    analytics: {
      realTime: true,
      historical: {
        retention: 30, // days
        aggregation: ['daily', 'weekly']
      }
    }
  }
};