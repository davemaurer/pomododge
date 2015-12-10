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
        this.canvasElement = document.getElementById('play-field');
        this.context = this.canvasElement.getContext('2d');
        this.gameSize = { x: this.canvasElement.width, y: this.canvasElement.height };
      this.game.start();
      };
    });
  });

  it('instantiates with a playfield', function () {
    assert.isObject(this.game.playfield);
  })
});
