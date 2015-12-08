function Tomato(playfield, x, y) {
  this.playfield = playfield;
  this.x = x || 10;
  this.y = y || 10;
  this.playfield.tomatoes.push(this);
}

module.exports = Tomato;
