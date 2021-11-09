function betterThanAverage(classPoints, yourPoints) {
  let x = classPoints.reduce(function (a, b) {
    return a + b;
  });
  let z = x / classPoints.length;
  if (z < yourPoints) {
    return true;
  } else {
    return false;
  }
}
