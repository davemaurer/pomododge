function Tomato(playfield) {
  this.playfield = playfield;
  this.center = {x: playfield.width / 3, y: playfield.height / 3};
  this.size = 10;
}

Tomato.prototype.draw = function(context) {
  this.context = context;
  this.context.fillStyle = 'red';
  this.context.arc(this.center.x, this.center.y, this.size, 0, Math.PI * 2, true);
  this.context.fill();
  return this;
};

module.exports = Tomato;
