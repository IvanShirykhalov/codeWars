function doubleChar(str) {
  let n = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str.charAt(i) + str.charAt(i);
  }
  return n;
}
