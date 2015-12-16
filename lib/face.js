const util = require('util');
const EventEmitter = require('events');

function Face(context, center) {
  EventEmitter.call(this);
  this.context = context;
  this.center = { x: center.x, y: center.y };
  this.size = 30;
}

util.inherits(Face, EventEmitter);

Face.prototype.draw = function () {
  this.context.fillStyle = 'yellow';
  this.context.beginPath();
  this.context.arc(this.center.x, this.center.y, this.size, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();
  return this;
};

Face.prototype.moveDown = function () {
  if ( this.center.y + this.size < 600 ) {
    this.center.y += 5;
  }
  return this;
};

Face.prototype.moveUp = function () {
  if ( this.center.y - this.size > 1 ) {
    this.center.y -= 5;
  }
  return this;
};

Face.prototype.moveRight = function () {
  if ( this.center.x + this.size < 800 ) {
    this.center.x += 5;
  }
  return this;
};

Face.prototype.moveLeft = function () {
  if ( this.center.x -this.size > 1 ) {
    this.center.x -= 5;
  }
  return this;
};

Face.prototype.handleCollision = function () {
  console.log('Face was hit!');
}

module.exports = Face;
