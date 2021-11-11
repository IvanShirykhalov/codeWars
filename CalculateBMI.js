function bmi(weight, height) {
  if (weight / height ** 2 <= 18.5) {
    return "Underweight";
  } else if (weight / height ** 2 <= 25.0) {
    return "Normal";
  } else if (weight / height ** 2 <= 30.0) {
    return "Overweight";
  } else if (weight / height ** 2 > 30.0) {
    return "Obese";
  }
}
