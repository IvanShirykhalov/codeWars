function combat(health, damage) {
  if (health - damage > 0) {
    return health - damage;
  } else if (health - damage <= 0) {
    return 0;
  }
}
