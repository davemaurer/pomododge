const chai = require('chai');
const assert = chai.assert;
const Board = require('../lib/board');
const Block = require('../lib/block');

describe('Block', function () {
  beforeEach(function () {
    this.board = new Board(); // using beforeEach to add this to every test we write within this block. There is also
                              // an afterEach.
  });

  it('should have a reference to the board', function () {
    let block = new Block(this.board);
    assert.equal(block.board, this.board);
  });
  // would like board to add block, not pass board into the block

  it('should have an X-coord', function () {
    let block = new Block(this.board, 5, 5);
    assert.strictEqual(block.x, 5);
  });

  it('should have a Y-coord', function () {
    let block = new Block(this.board, 5, 5);
    assert.strictEqual(block.y, 5);
  });

  it('should be included in the board\'s array of blocks', function () {
    let block = new Block(this.board, 5, 5);
    assert.include(this.board.blocks, block);
  });
});
