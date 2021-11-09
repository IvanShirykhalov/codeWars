function isPalindrome(x) {
  if (x.toUpperCase() === x.split("").reverse().join("").toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
