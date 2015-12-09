const Tomato = require('./tomato');

function Playfield(width, height) {
  this.width = width;
  this.height = height;
  this.tomatoes = [];
}

Playfield.prototype.addTomato = function(x, y) {
  return new Tomato(this, x, y);
};

Playfield.prototype.draw = function (context) {
  context.fillStyle = 'darkgrey';
  context.fillRect(0, 0, this.width, this.height);
  return this;
};

module.exports = Playfield;
