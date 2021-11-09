var isSquare = function (n) {
  let result = Math.sqrt(n);
  if (n < 0) {
    return false;
  } else if (result % 1 === 0) {
    return true;
  } else {
    return false;
  }
};
