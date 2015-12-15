const $ = require('jquery');

const Playfield = require('./playfield');
const Face = require('./face');
const Tomato = require('./tomato');

function Game(canvas, context) {
  this.tomatoes = [];
  this.playfield = new Playfield(context, canvas.width, canvas.height);
  this.face = new Face(context, {x: (canvas.width - 400), y: (canvas.height - 300)});
  var tomato = new Tomato(context, { x: (canvas.width - 300), y: (canvas.height - 500) });
  this.addTomato(tomato);
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

    //add listeners for collision and board edges on face
    // add listener for each tomato as it is created
    // remove listener for each tomato as it is popped off

    // var counter = Time.now (when time is one second from now, throw tomato
    // once counter hits, add tomato to array, throw tomato, tomatocounter +=1
    // OR once counter hits, go faster so one tomato is being thrown faster and faster
    // check which key is pressed, and tell the face to move depending
    // check if face and any tomato has any collisions and respond accordingly
  }
};

Game.prototype.addTomato = function(tomato) {
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

module.exports = Game;
