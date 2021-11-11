function remainder(a, b) {
  if (a > b) {
    return a % b;
  } else if (b > a) {
    return b % a;
  } else if (a == 0 || b == 0) {
    return NaN;
  } else if (a < 0 || b < 0) {
    return 0;
  }
}
