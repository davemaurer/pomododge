var canvas = document.getElementById('play-field');
var context = canvas.getContext('2d');

function Tomato(center) {
  this.context = context;
  this.center = center || {x: canvas.width / 3, y: canvas.height / 3};
  this.size = 10;
}

Tomato.prototype.draw = function() {
  this.context.fillStyle = 'red';
  this.context.beginPath();
  this.context.arc(this.center.x, this.center.y, this.size, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();
  return this;
};

module.exports = Tomato;
