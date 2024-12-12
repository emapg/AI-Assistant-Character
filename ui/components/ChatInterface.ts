export interface ChatBubble {
  position: {
    offset: number;
    scale: number;
    fadeDistance: number;
  };
  style: {
    opacity: number;
    blur: number;
    borderGlow: number;
  };
  animation: {
    popInDuration: number;
    fadeOutDuration: number;
  };
}

export const chatInterface = {
  bubbles: {
    ai: {
      position: {
        offset: 0.5,
        scale: 1.0,
        fadeDistance: 2.0
      },
      style: {
        opacity: 0.85,
        blur: 0.3,
        borderGlow: 0.4
      },
      animation: {
        popInDuration: 0.3,
        fadeOutDuration: 0.4
      }
    },
    user: {
      position: {
        offset: -0.5,
        scale: 0.9,
        fadeDistance: 2.0
      },
      style: {
        opacity: 0.75,
        blur: 0.2,
        borderGlow: 0.2
      },
      animation: {
        popInDuration: 0.25,
        fadeOutDuration: 0.35
      }
    }
  },
  layout: {
    maxVisibleMessages: 5,
    spacing: 0.2,
    maxWidth: 1.5
  }
};