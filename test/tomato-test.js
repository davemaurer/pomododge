const chai = require('chai');
const assert = chai.assert;
const Tomato = require('../lib/tomato');
const Game = require('../lib/game');

describe('Tomato', function () {
  beforeEach(function () {
    var canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    context = canvas.getContext('2d');
    this.game = new Game(canvas, context);
    this.tomato1 = new Tomato(context, {x: (canvas.width - 300), y: (canvas.height - 500)});
  });

  it('should have an x-coordinate', function () {
    assert.strictEqual(this.tomato1.center.x, 500);
  });

  it('should have a y-coordinate', function () {
    assert.strictEqual(this.tomato1.center.y, 100);
  });

  it('should be included in the game array of tomatoes', function () {
    var canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    context = canvas.getContext('2d');
    this.game = new Game(canvas, context);
    let tomato1 = new Tomato(context, {x: (canvas.width - 300), y: (canvas.height - 500)});

    this.game.tomatoes.push(tomato1);

    assert.include(this.game.tomatoes, tomato1);
  });

  it('should have a direction', function () {
    assert.strictEqual(this.tomato1.direction, 0);
  });

  it('should have a speed', function () {
    assert.strictEqual(this.tomato1.speed, 3);
  });

  it('should have a velocity', function () {
    assert.strictEqual(this.tomato1.velocity().xv, 3);
    assert.strictEqual(this.tomato1.velocity().yv, 0);
  });

  it('should update its own position', function () {
    assert.deepEqual(this.tomato1.center, {x: 500, y: 100});
    this.tomato1.updatePosition();
    assert.deepEqual(this.tomato1.center, {x: 503, y: 100});
  });
});
