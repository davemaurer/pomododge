const util = require('util');
const EventEmitter = require('events');
const twoPi = 2 * Math.PI;

function Tomato(context, speed) {
  EventEmitter.call(this);
  this.context = context;
  this.set();
  this.size = Math.floor(Math.random() * ((20 - 10) + 1) + 10);
  this.speed = speed || (4 - this.size / 8);
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
  var outOfBounds = (this.center.x < -25 || this.center.x > 825 || this.center.y < -25 || this.center.y > 625);
  if (outOfBounds) {
    this.set();
  }
  this.center.x += this.velocity().xv;
  this.center.y += this.velocity().yv;
  return this;
};

Tomato.prototype.set = function() {
  var startingCoordinates = this.startingCoordinates();
  this.center = startingCoordinates.coordinates;
  this.direction = startingCoordinates.direction;
};

Tomato.prototype.startingCoordinates = function() {
  var direction = Math.random() * twoPi;

  if (direction > twoPi/8 && direction < 3 * twoPi/8) {
    return {
      coordinates: {
        x: (Math.floor(Math.random() * (775 - 20 + 1)) + 1),
        y: -20
      },
      direction: direction
    };
  } else if (direction > 3 * twoPi/8 && direction < 5 * twoPi/8) {
    return {
      coordinates: {
        x: 820,
        y: (Math.floor(Math.random() * (575 - 20 + 1)) + 1)
      },
      direction: direction
    };
  } else if (direction > 5 * twoPi/8 && direction < 7 * twoPi/8) {
    return {
      coordinates: {
        x: (Math.floor(Math.random() * (775 - 20 + 1)) + 1),
        y: 620
      },
      direction: direction
    };
  } else {
    return {
      coordinates: {
        x: -20,
        y: (Math.floor(Math.random() * (575 - 20 + 1)) + 1)
      },
      direction: direction
    };
  }
};

module.exports = Tomato;
