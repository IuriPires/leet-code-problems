/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  // every 2 char is a pair (color, rod number) [R = Red, G = Green, B = Blue];
  let rods = {
    0: {
      R: 0,
      G: 0,
      B: 0,
    },
    1: {
      R: 0,
      B: 0,
      G: 0,
    },
    2: {
      R: 0,
      B: 0,
      G: 0,
    },
    3: {
      R: 0,
      B: 0,
      G: 0,
    },
    4: {
      R: 0,
      B: 0,
      G: 0,
    },
    5: {
      R: 0,
      B: 0,
      G: 0,
    },
    6: {
      R: 0,
      B: 0,
      G: 0,
    },
    7: {
      R: 0,
      B: 0,
      G: 0,
    },
    8: {
      R: 0,
      B: 0,
      G: 0,
    },
    9: {
      R: 0,
      B: 0,
      G: 0,
    },
  };

  let rodsWithRGBCount = 0;

  for (let i = 0; i < rings.length; i += 2) {
    rods[rings[i + 1]][rings[i]] += 1;
  }

  Object.keys(rods).map((key) => {
    if (rods[key].R >= 1 && rods[key].G >= 1 && rods[key].B >= 1) {
      rodsWithRGBCount += 1;
    }
  });

  return rodsWithRGBCount;
};

// Variant
var countPoints = function (rings) {
  // every 2 char is a pair (color, rod number) [R = Red, G = Green, B = Blue];
  const rodsMap = new Map();

  let rodsWithRGBCount = 0;

  for (let i = 1; i < rings.length; i += 2) {
    const rodIndex = i;
    const colorIndex = i - 1;

    if (!rodsMap.has(rings[rodIndex])) {
      rodsMap.set(rings[rodIndex], { R: 0, G: 0, B: 0 });
    }
    const currentColorsValue = rodsMap.get(rings[rodIndex]);

    rodsMap.set(rings[rodIndex], {
      ...currentColorsValue,
      [rings[colorIndex]]: currentColorsValue[rings[colorIndex]] + 1,
    });
  }

  rodsMap.forEach((item) => {
    if (item.R > 0 && item.G > 0 && item.B > 0) {
      rodsWithRGBCount += 1;
    }
  });

  return rodsWithRGBCount;
};

countPoints("B0B6G0R6R0R6G9");
