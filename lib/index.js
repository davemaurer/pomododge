const $ = require('jquery');
const Game = require('./game');
const Timekeeper = require('./timekeeper');

var canvas = document.getElementById('play-field');
var context = canvas.getContext('2d');
var tick = 0;
var subtick = 800;

$(document).ready(function () {
  var game = new Game(canvas, context);
  var timekeeper = new Timekeeper('.timer');
  $('#ending').hide();
  game.renderUniverse();
  game.gameSound.load();
  $('#start-button').on('click', function () {
    $('#welcome').toggle();
    game.start();
    requestAnimationFrame(function gameLoop() {
      game.playfield.context.clearRect(0, 0, game.playfield.width, game.playfield.height);

      game.renderUniverse();
      if(tick % subtick === 0) {
        game.loadTomatoes();
        subtick -= 1;
      }
      game.updateTomatoPositions();
      game.detectCollisions();
      timekeeper.renderToPage();
      timekeeper.updateTime();
      if(!game.over) {
        requestAnimationFrame(gameLoop);
      }
      tick++
    });
  });
});
