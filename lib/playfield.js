const Tomato = require('./tomato');

function Playfield() {
  this.height = 600;
  this.width = 1200;
  this.tomatoes = [];
}

Playfield.prototype.addTomato = function(x, y) {
  return new Tomato(this, x, y);
};

module.exports = Playfield;
