function expressionMatter(a, b, c) {
  var x = Math.max(
    a + b + c,
    a * b * c,
    a * b + c,
    a * (b + c),
    a + b * c,
    (a + b) * c
  );
  return x;
}
