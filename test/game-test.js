const $ = require('jquery');
const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/game');

describe('Game', function() {
  beforeEach(function () {
    var canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    var context = canvas.getContext('2d');
    this.game = new Game(canvas, context);
  });

  it('instantiates with a playfield', function () {
    assert.isObject(this.game.playfield);
  });

  it('should start with an array of tomatoes', function() {
    assert.isArray(this.game.tomatoes);
  });

  describe('addTomato', function() {
    beforeEach(function() {
      var canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 600;
      var context = canvas.getContext('2d');
      this.game = new Game(canvas, context);
    });

    it('should add a new tomato to its tomato array', function() {

      assert.equal(this.game.tomatoes.length, 0);

      this.game.addTomato();

      assert.equal(this.game.tomatoes.length, 1);
    })
  });
});
