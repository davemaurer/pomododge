const chai = require('chai');
const assert = chai.assert;
const Face = require('../lib/face');

describe('face', function () {
  beforeEach(function() {
      var canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 600;
      var context = canvas.getContext('2d');
      this.face = new Face(context,{ x: 400, y: 300} )
    });

  it('should have an x-coordinate', function () {
    assert.strictEqual(this.face.center.x, 400)
  });

  it('should have a y-coordinate', function () {
    assert.strictEqual(this.face.center.y, 300);
  });

  it('should have a size', function () {
    assert.strictEqual(this.face.size, 30)
  });

  it('should be able to move left', function () {
    assert.equal(this.face.center.x, 400);

    this.face.moveLeft();

    assert.equal(this.face.center.x, 395)
  });

  it('should be able to move right', function () {
    assert.equal(this.face.center.x, 400);

    this.face.moveRight();

    assert.equal(this.face.center.x, 405)
  });

  it('should be able to move up', function () {
    assert.equal(this.face.center.y, 300);

    this.face.moveUp();

    assert.equal(this.face.center.y, 295)
  });

  it('should be able to move down', function () {
    assert.equal(this.face.center.y, 300);

    this.face.moveDown();

    assert.equal(this.face.center.y, 305)
  });

  it('should not be able to move past the left edge', function () {
    this.face1 = new Face(context, {x: 30, y: 300});
    assert.equal(this.face1.center.x, 30);

    this.face1.moveLeft();

    assert.equal(this.face1.center.x, 30)
  });
  it('should not be able to move past the right edge', function () {
    this.face1 = new Face(context, {x: 770, y: 300});
    assert.equal(this.face1.center.x, 770);

    this.face1.moveRight();

    assert.equal(this.face1.center.x, 770)
  });
  it('should not be able to move past the top edge', function () {
    this.face1 = new Face(context, {x: 300, y: 30});
    assert.equal(this.face1.center.y, 30);

    this.face1.moveUp();

    assert.equal(this.face1.center.y, 30)
  });
  it('should not be able to move past the bottom edge', function () {
    this.face1 = new Face(context, {x: 300, y: 570});
    assert.equal(this.face1.center.y, 570);

    this.face1.moveLeft();

    assert.equal(this.face1.center.y, 570)
  })
});
