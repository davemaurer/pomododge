const chai = require('chai');
const assert = chai.assert;
const Tomato = require('../lib/tomato');

describe('Tomato', function () {
  beforeEach(function () {

  });

  it('should have a reference to the playfield', function () {
    let tomato = new Tomato(this.playfield);

    assert.equal(tomato.playfield, this.playfield);
  });

  it('should have an x-coordinate', function () {
    let tomato = new Tomato(this.playfield, {x: 50, y: 50});

    assert.strictEqual(tomato.center.x, 50);
  });

  it('should have a y-coordinate', function () {
    let tomato = new Tomato(this.playfield, {x: 50, y: 50});

    assert.strictEqual(tomato.center.y, 50);
  });

  it('should be included in the game array of tomatoes', function () {
    let tomato = new Tomato(this.playfield, {x: 50, y: 50});

    assert.include(this.game.tomatoes, tomato);
  });
});
