function find_average(array) {
  if (array != 0) {
    return array.reduce((a, b) => a + b) / array.length;
  } else {
    return 0;
  }
}
