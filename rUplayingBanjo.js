function areYouPlayingBanjo(name) {
  if (name.substr(0, 1) == "r" || name.substr(0, 1) == "R") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
