const chai = require('chai');
const assert = chai.assert;
const Playfield = require('../lib/playfield');

describe('Playfield', function () {
  beforeEach(function () {
    var canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    var context = canvas.getContext('2d');
    this.playfield = new Playfield( context, canvas.width, canvas.height );
  });

  it('should have a width', function () {
    assert.equal(this.playfield.width, 800)
  });

  it('should have a height', function () {
    assert.equal(this.playfield.height, 600)
  });
});

