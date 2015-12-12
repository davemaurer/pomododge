const chai = require('chai');
const assert = chai.assert;
const Face = require('../lib/face');

describe('face', function () {
  beforeEach(function() {

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
