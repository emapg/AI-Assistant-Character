interface CharacterDimensions {
  height: number;  // 1.8m
  proportions: {
    shoulderWidth: number;
    headToBodyRatio: number;
    limbProportions: number;
  };
}

interface MaterialProperties {
  transparency: number;  // 0.7
  iridescence: {
    strength: number;    // 0.3
    colorShift: number;  // 15 degrees
  };
  metallic: {
    roughness: number;   // 0.2
    reflectivity: number;// 0.8
  };
}

export const characterCore = {
  dimensions: {
    height: 1.8,
    proportions: {
      shoulderWidth: 0.4,
      headToBodyRatio: 0.125,
      limbProportions: 0.45
    }
  },
  materials: {
    mainBody: {
      transparency: 0.7,
      iridescence: {
        strength: 0.3,
        colorShift: 15
      },
      metallic: {
        roughness: 0.2,
        reflectivity: 0.8
      }
    }
  }
};