// in every file you want to be used outside of it, use module.exports ex: var x = 5, then at the bottom, module.exports = x;

const Block = require('./block');

function Board(columns, rows) {
  this.columns = columns || 20;
  this.rows = rows || 20;
  this.blocks = [];
}

Board.prototype.addBlock = function(x, y) {
  return new Block(this, x, y);
};

module.exports = Board;
