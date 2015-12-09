const $ = require('jquery');
const Playfield = require('./playfield');

var canvasElement = document.getElementById('play-field');
var context = canvasElement.getContext('2d');

$(document).ready(function () {
  var playfield = new Playfield(800, 600);
  playfield.draw(context);
});
