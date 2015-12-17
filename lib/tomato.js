const util = require('util');
const EventEmitter = require('events');

function Tomato(context, speed) {
  EventEmitter.call(this);
  this.context = context;
  this.start();
  this.size = Math.floor(Math.random() * ((20 - 10) + 1) + 10);
  this.speed = speed || this.size / 8;
}

util.inherits(Tomato, EventEmitter);

Tomato.prototype.draw = function() {
  this.context.fillStyle = 'red';
  this.context.beginPath();
  this.context.arc(this.center.x, this.center.y, this.size, 0, Math.PI * 2, true);
  this.context.closePath();
  this.context.fill();
  return this;
};

Tomato.prototype.velocity = function () {
  return {xv: Math.cos(this.direction) * this.speed, yv: Math.sin(this.direction) * this.speed}
};

Tomato.prototype.updatePosition = function () {
  var xEdges = this.center.x + this.size;
  var yEdges = this.center.y + this.size;
  var outOfBounds = (xEdges < -15 || xEdges > 815 || yEdges < -15 || yEdges > 615);
  if (outOfBounds) {
    this.start();
  }
  this.center.x += this.velocity().xv;
  this.center.y += this.velocity().yv;
  return this;
};

Tomato.prototype.start = function() {
  var startingCoordinates = this.startingCoordinates();
  this.center = startingCoordinates.coordinates;
  this.direction = startingCoordinates.direction;
};

Tomato.prototype.startingCoordinates = function() {
  var axis = Math.random() < 0.5 ? 0 : 1;
  var xStart = Math.random() < 0.5 ? -20 : 820;
  var yStart = Math.random() < 0.5 ? -20 : 620;
  var startingDirection;

  if (axis === 0) {
    if (xStart === -20) {
      startingDirection = 0
    } else {
      startingDirection = Math.PI
    }
    return {
      coordinates: {
        x: xStart,
        y: (Math.floor(Math.random() * (575 - 20 + 1)) + 1)
      },
      direction: startingDirection
    }
  } else {
    if (yStart === -20) {
      startingDirection = Math.PI / 2
    } else {
      startingDirection = -Math.PI / 2
    }
    return {
      coordinates: {
        x: (Math.floor(Math.random() * (775 - 20 + 1)) + 1),
        y: yStart
      },
      direction: startingDirection
    }
  }
};

module.exports = Tomato;
