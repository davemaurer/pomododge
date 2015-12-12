var canvas = document.getElementById('play-field');
var context = canvas.getContext('2d');

function Playfield() {
  this.context = context;
  this.width = canvas.width;
  this.height = canvas.height;
}

Playfield.prototype.draw = function () {
  this.context.fillStyle = 'darkgrey';
  this.context.beginPath();
  this.context.closePath();
  this.context.fillRect(0, 0, this.width, this.height);
  return this;
};

module.exports = Playfield;
