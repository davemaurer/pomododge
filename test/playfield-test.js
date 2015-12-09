const chai = require('chai');
const assert = chai.assert;
const Playfield = require('../lib/playfield');


describe('Playfield', function () {
  beforeEach(function () {
    this.playfield = new Playfield(800, 600);
  });

  it('should instantiate a new playfield', function () {
    assert.isObject(this.playfield);
  });

  it('should have a height', function () {
    assert.equal(this.playfield.height, 600)
  });

  it('should have a height', function () {
    assert.equal(this.playfield.width, 800)
  });

  it('should start with an array of tomatoes', function () {
    assert.isArray(this.playfield.tomatoes);
  });
});

describe('addTomato', function () {
  it('should add a new tomato to its tomato array', function () {
    let playfield = new Playfield();

    assert.equal(playfield.tomatoes.length, 0);

    playfield.addTomato(-5, -5);

    assert.equal(playfield.tomatoes.length, 1);
  })
});
