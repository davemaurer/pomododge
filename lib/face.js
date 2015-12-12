var canvas = document.getElementById('play-field');
var context = canvas.getContext('2d');

function Face() {
  this.context = context;
  this.center = { x: canvas.width / 2, y: canvas.height / 2 };
  this.size = 30;
}

Face.prototype.draw = function () {
  this.context.fillStyle = 'yellow';
  this.context.beginPath();
  this.context.arc(this.center.x, this.center.y, this.size, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();
  return this;
};

Face.prototype.checkEdges = function () {
  return (!!(this.center.x < 0 && this.center.x > 800) && !!(this.center.y < 0 && this.center.y > 600));
};

Face.prototype.moveDown = function () {
  if(this.checkEdges()) {
    this.center.y++;
  }
  return this;
};

Face.prototype.moveUp = function () {
  if (this.checkEdges()) {
    this.center.y--;
  }
  return this;
};

Face.prototype.moveRight = function () {
  if (this.checkEdges()) {
    this.center.x++;
  }
  return this;
};

Face.prototype.moveLeft = function () {
  if (this.checkEdges()) {
    this.center.x--;
  }
  return this;
};

module.exports = Face;
