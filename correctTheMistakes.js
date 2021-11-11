function correct(string) {
  return string.split("0").join("O").split("1").join("I").split("5").join("S");
}

/*

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

*/