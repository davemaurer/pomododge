const chai = require('chai');
const assert = chai.assert;
const Playfield = require('../lib/playfield');
const Face = require('../lib/face');

describe('face', function () {
  beforeEach(function() {
    this.playfield = new Playfield({ x: 800, y: 600 });
  });

  it('should have a reference to the playfield', function () {
    let face = new Face(this.playfield);

    assert.equal(face.playfield, this.playfield)
  });

  it('should have an x-coordinate', function () {
    let face = new Face(this.playfield);

    assert.strictEqual(face.center.x, 400)
  });

  it('should have a y-coordinate', function () {
    let face = new Face(this.playfield);

    assert.strictEqual(face.center.y, 300);
  });
});
