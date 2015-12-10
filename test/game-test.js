const $ = require('jquery');
const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/game');
const Playfield = require('../lib/playfield');
const Face = require('../lib/face');


describe('Game', function() {
  beforeEach(function () {
    $(document).ready(function () {
      this.game = function() {
        this.canvasElement = { width: "800", height: "600" };
        this.context = this.canvasElement.getContext('2d');
        this.gameSize = { x: this.canvasElement.width, y: this.canvasElement.height };
      this.game.start();
      };
    });
  });

  it('instantiates with a playfield', function () {
    assert.isObject(this.game.playfield);
  });

  it('should start with an array of tomatoes', function() {
    assert.isArray(this.playfield.tomatoes);
  });
});

describe('addTomato', function() {
  beforeEach(function() {
    $(document).ready(function() {
      this.game = function() {
        this.canvasElement = {width: "800", height: "600"};
        this.context = this.canvasElement.getContext('2d');
        this.gameSize = {x: this.canvasElement.width, y: this.canvasElement.height};
        this.game.start();
      };
    });
  });

  it('should add a new tomato to its tomato array', function() {
    let game = new Game();

    assert.equal(game.tomatoes.length, 0);

    game.addTomato(-5, -5);

    assert.equal(game.tomatoes.length, 1);
  })
});
