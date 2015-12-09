function Face(playfield) {
  this.playfield = playfield;
  this.center = { x: playfield.width / 2, y: playfield.height / 2 };
  this.size = 30;
}

Face.prototype.draw = function(context) {
  context.fillStyle = 'yellow';
  context.arc(this.center.x, this.center.y, this.size, 0, Math.PI * 2, true);
  context.fill();
  return this;
};

module.exports = Face;

  //context.fillRect(this.center.x - (this.size / 2), this.center.y - (this.size / 2), this.size, this.size);
