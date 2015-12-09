const Playfield = require('./playfield');
const Face = require('./face');

var Game = function(canvasId) {
  this.canvasElement = document.getElementById(canvasId);
  this.context = this.canvasElement.getContext('2d');
  this.gameSize = { x: this.canvasElement.width, y: this.canvasElement.height };
};

Game.prototype = {
  start: function() {
    var playfield = new Playfield(this.gameSize);
    var face = new Face(playfield);
    playfield.draw(this.context);
    face.draw(this.context);
  }
};

module.exports = Game;


