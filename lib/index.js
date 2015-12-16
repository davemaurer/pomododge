const $ = require('jquery');
const Game = require('./game');
const Timekeeper = require('./timekeeper');

var canvas = document.getElementById('play-field');
var context = canvas.getContext('2d');

$(document).ready(function () {
  var game = new Game(canvas, context);
  var timekeeper = new Timekeeper();
  game.renderUniverse();
  $('#start-button').on('click', function () {
    $('#welcome').toggle();
    game.start();
    requestAnimationFrame(function gameLoop() {
      game.playfield.context.clearRect(0, 0, game.playfield.width, game.playfield.height);

      game.renderUniverse();
      game.updateTomatoPositions();
      game.detectCollisions();
      timekeeper.renderToPage();
      timekeeper.updateTime();
      requestAnimationFrame(gameLoop);
    });
  })
});
