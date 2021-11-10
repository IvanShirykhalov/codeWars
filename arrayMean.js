var findAverage = function (nums) {
  let x = nums.reduce((a, b) => a + b);
  let y = nums.length;
  return x / y;
};
