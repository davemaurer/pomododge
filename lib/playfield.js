function Playfield(context, width, height) {
  this.context = context;
  this.width = width;
  this.height = height;
}

Playfield.prototype.draw = function () {
  this.context.fillStyle = 'darkgrey';
  this.context.beginPath();
  this.context.closePath();
  this.context.fillRect(0, 0, this.width, this.height);
  return this;
};

module.exports = Playfield;
