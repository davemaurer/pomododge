const $ = require('jquery');
const Game = require('./game');

$(document).ready(function () {
  var game = new Game('play-field');
  game.start();
});
