function uefaEuro2016(teams, scores) {
  if (Number(scores[0]) > Number(scores[1])) {
    return (
      "At match " + teams[0] + " - " + teams[1] + ", " + teams[0] + " won!"
    );
  } else if (Number(scores[1]) > Number(scores[0])) {
    return (
      "At match " + teams[0] + " - " + teams[1] + ", " + teams[1] + " won!"
    );
  } else if (Number(scores[1]) == Number(scores[0])) {
    return "At match " + teams[0] + " - " + teams[1] + ", teams played draw.";
  }
}
