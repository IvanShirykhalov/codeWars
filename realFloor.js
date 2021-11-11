function getRealFloor(n) {
  if (n > 13) {
    return (n = n - 2);
  } else if (n > 1) {
    return (n = n - 1);
  } else if (n < 0) {
    return n;
  } else if ((n = 1)) {
    return 0;
  }
}
