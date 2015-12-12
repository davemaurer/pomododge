const $ = require('jquery');
var canvas = document.getElementById('play-field');
var context = canvas.getContext('2d');

const Playfield = require('./playfield');
const Face = require('./face');
const Tomato = require('./tomato');

function Game() {
  this.tomatoes = [];
  this.playfield = new Playfield();
  this.face = new Face();
  this.tomato = new Tomato({ x: 50, y: 50 });
}

Game.prototype = {
  start: function() {
    $(document).keydown(onKeyDown);
    function onKeyDown(e) {
      var keys = {
        37: this.face.moveLeft,
          38: this.face.moveUp,
          39: this.face.moveDown,
        40: this.face.moveRight
      }

      keys[e.keyCode]();
      if (e.keyCode = 37) {
        this.face.moveLeft();
      } else if (e.keyCode = 38) {
        this.face.moveUp();
      } else if (e.keyCode = 39) {
        this.face.moveRight();
      } else if (e.keyCode = 40) {
        this.face.moveDown();
      }
    }
    this.renderUniverse();

  },

  //add listeners for collision and board edges on face
  // add listener for each tomato as it is created
  // remove listener for each tomato as it is popped off

  // var counter = Time.now (when time is one second from now, throw tomato
  // once counter hits, add tomato to array, throw tomato, tomatocounter +=1
  // OR once counter hits, go faster so one tomato is being thrown faster and faster
  // check which key is pressed, and tell the face to move depending
  // check if face and any tomato has any collisions and respond accordingly

  addTomatoes: function(tomato) {
    this.tomatoes.push(tomato);
  },
};

Game.prototype.renderUniverse = function() {
  this.playfield.draw();
  this.face.draw();
  this.tomato.draw();
};

Game.prototype.listenForKeyDown = function () {

};

module.exports = Game;
