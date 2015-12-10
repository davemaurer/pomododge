const chai = require('chai');
const assert = chai.assert;
const Playfield = require('../lib/playfield');


describe('Playfield', function () {
  beforeEach(function () {
    this.playfield = new Playfield({ x: 800, y: 600 });
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
});

