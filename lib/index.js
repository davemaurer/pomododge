const $ = require('jquery');
const Game = require('./game');

$(document).ready(function () {
  var game = new Game();
  game.start();
  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, game.canvas.width, game.canvas.height);

    game.renderUniverse();
    requestAnimationFrame(gameLoop);
  });
});
