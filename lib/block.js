function Block(board, x, y) {
  this.board = board;
  this.x = x || 10;
  this.y = y || 10;
  this.board.blocks.push(this);
}

module.exports = Block;
