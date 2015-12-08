const chai = require('chai');
const assert = chai.assert;
const Playfield = require('../lib/playfield'); //can leave off the .js, just like in ruby


describe('Playfield', function() {
  it('should instantiate a new playfield', function () {
    let playfield = new Playfield();
    assert.isObject(playfield);
  });

  it('should have a columns property based on the first argument', function () {
    let playfield = new Playfield(20, 20);
    assert.equal(20, playfield.columns)
  });

  it('should have a rows property based on the second argument', function () {
    let playfield = new Playfield(20, 20);
    assert.equal(20, playfield.rows);
  });

  it('should default to 20 columns', function () {
    let playfield = new Playfield();
    assert.equal(20, playfield.columns);
  });

  it('should default to 20 rows', function () {
    let playfield = new Playfield();
    assert.equal(20, playfield.rows);
  });

  it('should start with an array of tomatoes', function () {
    let playfield = new Playfield();
    assert.isArray(playfield.tomatoes);
  });
});

describe('addTomato', function () {
  it('should add a new block to its block array', function () {
    let playfield = new Playfield();

  })
});
