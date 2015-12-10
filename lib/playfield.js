const Tomato = require('./tomato');

function Playfield(gameSize) {
  this.width = gameSize.x;
  this.height = gameSize.y;
}

Playfield.prototype.draw = function (context) {
  context.fillStyle = 'darkgrey';
  context.fillRect(0, 0, this.width, this.height);
  return this;
};

module.exports = Playfield;
