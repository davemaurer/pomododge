const chai = require('chai');
const assert = chai.assert;
const Playfield = require('../lib/playfield'); //can leave off the .js, just like in ruby


describe('Playfield', function() {
  it('should instantiate a new playfield', function () {
    let playfield = new Playfield();

    assert.isObject(playfield);
  });

  it('should start with an array of tomatoes', function () {
    let playfield = new Playfield();

    assert.isArray(playfield.tomatoes);
  });
});

describe('addTomato', function () {
  it('should add a new tomato to its tomato array', function () {
    let playfield = new Playfield();

    assert.equal(playfield.tomatoes.count, 0);

    playfield.addTomato(-5, -5);

    assert.equal(playfield.tomatoes.count, 1);
  })
});
