const $ = require('jquery');
const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/game');

describe('Game', function() {
  beforeEach(function () {
      this.canvas = document.createElement('canvas');
      this.canvas.width = 800;
      this.canvas.height = 600;
      this.context = this.canvas.getContext('2d');
      this.game = new Game(this.canvas, this.context);
    });
  });

  it('instantiates with a playfield', function () {
    assert.isObject(this.game.playfield);
  });

  it('should start with an array of tomatoes', function() {
    assert.isArray(this.tomatoes);
});

describe('addTomato', function() {
  beforeEach(function() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext('2d');
    this.game = new Game(this.canvas, this.context);
  });

  it('should add a new tomato to its tomato array', function() {

    assert.equal(this.game.tomatoes.length, 0);

    this.game.addTomato(-5, -5);

    assert.equal(this.game.tomatoes.length, 1);
  })
});

