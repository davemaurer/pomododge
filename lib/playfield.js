const Tomato = require('./tomato');
const Face = require('./face');

function Playfield(width, height) {
  this.width = width || 800;
  this.height = height || 600;
  this.tomatoes = [];
  this.face = new Face(this, 400, 300);
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
