const util = require('util');
const EventEmitter = require('events');

function Tomato(context, center, direction, speed) {
  EventEmitter.call(this);
  this.context = context;
  this.center = center || { x: center.x, y: center.y };
  this.size = 10;
  this.direction = direction || 0;
  this.speed = speed || 3;
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
}

Tomato.prototype.updatePosition = function () {
	this.center.x += this.velocity().xv;
	this.center.y += this.velocity().yv;
	return this;
}

function distanceBetween(coordinateObject, otherCoordinateObject) {
  xDistance = coordinateObject.x - otherCoordinateObject.x;
  yDistance = coordinateObject.y - otherCoordinateObject.y;
  return (Math.sqrt((xDistance * xDistance) + (yDistance * yDistance)));
}

//Checks for collision with the face. Emits a 'collision' event if detected.
Tomato.prototype.on('faceLocation', function (position, faceSize) {
  if ( distanceBetween(this.center, position) < (this.size + faceSize) ) {
    this.emit('collision');
  }
})

module.exports = Tomato;
