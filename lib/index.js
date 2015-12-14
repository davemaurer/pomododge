const $ = require('jquery');
const Game = require('./game');

var canvas = document.getElementById('play-field');
var context = canvas.getContext('2d');

$(document).ready(function () {
  var game = new Game(canvas, context);
  game.start();
  requestAnimationFrame(function gameLoop() {
    game.playfield.context.clearRect(0, 0, game.playfield.width, game.playfield.height);

    game.renderUniverse();
    requestAnimationFrame(gameLoop);
  });
});
