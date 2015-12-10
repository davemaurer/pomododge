const Playfield = require('./playfield');
const Face = require('./face');
const Tomato = require('./tomato');

function Game() {
  this.canvasElement = document.getElementById('play-field');
  this.context = this.canvasElement.getContext('2d');
  this.gameSize = { x: this.canvasElement.width, y: this.canvasElement.height };
}

Game.prototype = {
  start: function() {
    var playfield = new Playfield(this.gameSize);
    var face = new Face(playfield);
    var tomato = new Tomato(playfield);
    playfield.draw(this.context);
    face.draw(this.context);
    tomato.draw(this.context);
    var tomatoes = [];
    // shovel tomatoes onto array;

    // need to create event listener for keypress, and store the key pressed so tick
    // can ask which key is pressed and tell the face to move.
  },

  tick: function() {
    // var counter = Time.now (when time is one second from now, throw tomato
      // once counter hits, add tomato to array, throw tomato, tomatocounter +=1
    // OR once counter hits, go faster so one tomato is being thrown faster and faster
    // check which key is pressed, and tell the face to move depending
    // check if face and any tomato has any collisions and respond accordingly
  }
};

module.exports = Game;


