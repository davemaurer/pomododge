const $ = require('jquery');

const Playfield = require('./playfield');
const Face = require('./face');
const Tomato = require('./tomato');

function Game(canvas, context) {
  this.context = context;
  this.tomatoes = [];
  this.playfield = new Playfield(context, canvas.width, canvas.height);
  this.face = new Face(context, {x: (canvas.width - 400), y: (canvas.height - 300)});
  this.tomatoCounter = 5;
  this.over = false;
}

Game.prototype = {
  start: function() {
    $(document).keydown(onKeyDown.bind(this));

    function onKeyDown(event) {
      var face = this.face;

      var keys = {
        37: face.moveLeft,
        38: face.moveUp,
        39: face.moveRight,
        40: face.moveDown
      };
      //keys[event.which] = true;
      keys[event.keyCode].bind(face)()
    }
  }
};

Game.prototype.addTomato = function() {
  var tomato = new Tomato(this.context);
  tomato.set();
  this.tomatoes.push(tomato)
};

Game.prototype.renderUniverse = function() {
  this.playfield.draw();
  this.face.draw();
  this.tomatoes.forEach(function (tomato) {
    tomato.draw()
  });
};

Game.prototype.updateTomatoPositions = function() {
  this.tomatoes.forEach(function (tomato) {
    tomato.updatePosition();
  });
};

Game.prototype.detectCollisions = function() {
  this.tomatoes.forEach(function (tomato) {
    if (this.distanceBetweenTomatoAndFace(tomato) < (tomato.size + this.face.size)) {
      this.endGame();
    }
  }, this);
};

Game.prototype.distanceBetweenTomatoAndFace = function (tomato) {
  var xDistance = tomato.center.x - this.face.center.x;
  var yDistance = tomato.center.y - this.face.center.y;
  return (Math.sqrt((xDistance * xDistance) + (yDistance * yDistance)));
};

Game.prototype.loadTomatoes = function () {
  for (var i = 0; i < 3; i++) {
    this.addTomato();
  }
};

Game.prototype.endGame = function () {
  this.over = true;
  $('#timekeeper').hide();
  $('#ending').show();
  $('#replay-button').on('click', function () {
    window.location.reload();
  })
};

module.exports = Game;
