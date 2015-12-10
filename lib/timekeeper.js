const util = require('util');

function Timekeeper() {
	EventEmitter.call(this);
	this.minutes = 0;
	this.seconds = 0;
	this.millisecs = 0;
	this.element = document.getElementById('inner-timekeeper');
	this.active = false;
}

Timekeeper.prototype.renderToPage = function() {
	element.textContent = textify;
};

Timekeeper.prototype.textify = function() {
	return (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + "." + (millisecs > 9 ? millisecs : "0" + millisecs);
}

Timekeeper.prototype.updateTime = function() {
	millisecs += 17
	if (millisecs >= 1000) {
		millisecs -= 1000;
		seconds++;
		if (seconds >= 60) {
			seconds = 0;
			minutes++;
		}
	}
}

util.inherits(Timekeeper, EventEmitter);