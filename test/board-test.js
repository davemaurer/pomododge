const chai = require('chai');
const assert = chai.assert;
const Board = require('../lib/board'); //can leave off the .js, just like in ruby


describe('Board', function() {
  it('should instantiate a new board', function () {
    let board = new Board();
    assert.isObject(board);
  });

  it('should have a columns property based on the first argument', function () {
    let board = new Board(20, 20);
    assert.equal(20, board.columns)
  });

  it('should have a rows property based on the second argument', function () {
    let board = new Board(20, 20);
    assert.equal(20, board.rows);
  });

  it('should default to 20 columns', function () {
    let board = new Board();
    assert.equal(20, board.columns);
  });

  it('should default to 20 rows', function () {
    let board = new Board();
    assert.equal(20, board.rows);
  });

  it('should start with an array of blocks', function () {
    let board = new Board();
    assert.isArray(board.blocks);
  });
});

describe('addBlock', function () {
  it('should add a new block to its block array', function () {
    let board = new Board();

  })
});
