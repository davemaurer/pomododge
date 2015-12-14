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
  })
});
