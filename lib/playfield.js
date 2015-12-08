// in every file you want to be used outside of it, use module.exports ex: var x = 5, then at the bottom, module.exports = x;

const Tomato = require('./tomato');

function Playfield(columns, rows) {
  this.columns = columns || 20;
  this.rows = rows || 20;
  this.tomatoes = [];
}

Playfield.prototype.addTomato = function(x, y) {
  return new Tomato(this, x, y);
};

module.exports = Playfield;
