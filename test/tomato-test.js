const chai = require('chai');
const assert = chai.assert;
const Playfield = require('../lib/playfield');
const Tomato = require('../lib/tomato');

describe('Tomato', function () {
  beforeEach(function () {
    this.playfield = new Playfield(); // using beforeEach to add this to every test we write within this tomato. There is also
                                      // an afterEach.
  });

  it('should have a reference to the playfield', function () {
    let tomato = new Tomato(this.playfield);
    assert.equal(tomato.playfield, this.playfield);
  });
  // would like playfield to add tomato, not pass playfield into the tomato

  it('should have an X-coord', function () {
    let tomato = new Tomato(this.playfield, 5, 5);
    assert.strictEqual(tomato.x, 5);
  });

  it('should have a Y-coord', function () {
    let tomato = new Tomato(this.playfield, 5, 5);
    assert.strictEqual(tomato.y, 5);
  });

  it('should be included in the playfield\'s array of tomatoes', function () {
    let tomato = new Tomato(this.playfield, 5, 5);
    assert.include(this.playfield.tomatoes, tomato);
  });
});
