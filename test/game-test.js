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
      this.game = new Game();
    });
  });

  it('instantiates with a playfield', function () {
    assert.isObject(this.game.playfield);
  });

  it('should start with an array of tomatoes', function() {
    assert.isArray(this.playfield.tomatoes);
});

describe('addTomato', function() {
  beforeEach(function() {
    $(document).ready(function() {
      this.game = function() {
        this.canvasElement = {width: "800", height: "600"};
        this.context = this.canvasElement.getContext('2d');
         this.game.start();
      };
    });
  });

  it('should add a new tomato to its tomato array', function() {

    assert.equal(game.tomatoes.length, 0);

    game.addTomato(-5, -5);

    assert.equal(game.tomatoes.length, 1);
  })
});
