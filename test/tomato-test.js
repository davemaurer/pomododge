const chai = require('chai');
const assert = chai.assert;
const Tomato = require('../lib/tomato');
const Game = require('../lib/game');

describe('Tomato', function () {
  beforeEach(function () {

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
    this.canvas = document.createElement('canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext('2d');
    this.game = new Game(this.canvas, this.context);
    console.log(this.game);

    let tomato1 = new Tomato(this.context, {x: (this.canvas.width - 300), y: (this.canvas.height - 500)});

    this.game.tomatoes.push(tomato1);

    assert.include(this.game.tomatoes, tomato);
  });
});
