const util = require('util');
const EventEmitter = require('events');

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
	var clock = document.createElement('h4#inner-timekeeper');
	var text = document.createTextNode(this.textify());
	clock.appendNode(text);
	var container = document.getElementById('timekeeper');
	var replace = document.getElementById('inner-timekeeper');
	container.replaceChild(clock, replace);
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