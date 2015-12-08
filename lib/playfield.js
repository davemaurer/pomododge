const Tomato = require('./tomato');

function Playfield() {
  this.tomatoes = [];
}

Playfield.prototype.addTomato = function(x, y) {
  return new Tomato(this, x, y);
};

module.exports = Playfield;
