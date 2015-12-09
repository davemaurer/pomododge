function Face(playfield) {
  this.playfield = playfield;
  this.center = playfield.width/2, playfield.height/2;
  this.width = 15;
  this.height = 20;
}

Face.prototype.draw = function(context) {
  context.arc(this.face.x + this.face.size / 2, this.face.y + this.face.size / 2, this.face.size / 2 - 3, 0, Math.PI * 2, true);
  context.fillStyle = 'red';
  context.fill();
  return this;
};

module.exports = Face;
