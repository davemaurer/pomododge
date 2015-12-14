const util = require('util');
const EventEmitter = require('events');
const $ = require('jquery');

function Timekeeper() {
	EventEmitter.call(this);
	this.minutes = 0;
	this.seconds = 0;
	this.millisecs = 0;
	this.element = document.getElementById('inner-timekeeper');
	this.active = false;
}

util.inherits(Timekeeper, EventEmitter);

Timekeeper.prototype.renderToPage = function() {
	var container = $('#inner-timekeeper');
	var timeShown = this.textify();
	container.text(timeShown);

};

Timekeeper.prototype.textify = function() {
	return (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" +
	(this.seconds > 9 ? this.seconds : "0" + this.seconds) + "." +
	(this.millisecs > 99 ? this.millisecs : (this.millisecs > 9 ? "0" + this.millisecs : "00" + this.millisecs));
}

Timekeeper.prototype.updateTime = function() {
	this.millisecs += 17;
	if (this.millisecs >= 1000) {
		this.millisecs -= 1000;
		this.seconds++;
		if (this.seconds >= 60) {
			this.seconds = 0;
			this.minutes++;
		}
	}
}

module.exports = Timekeeper;