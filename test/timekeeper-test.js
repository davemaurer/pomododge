const chai = require('chai');
const EventEmitter = require('events');
const assert = chai.assert;
const Playfield = require('../lib/playfield');
const Timekeeper = require('../lib/timekeeper');

describe('timekeeper', function () {
  beforeEach(function() {
    this.playfield = new Playfield(800, 600);
    this.startSwitch = new EventEmitter;
  });

  it('should initialize with 0 minutes, 0 seconds, 0 milliseconds', function() {
    let timekeeper = Timekeeper.new();

    assert.equal(0, timekeeper.minutes);
    assert.equal(0, timekeeper.seconds);
    assert.equal(0, timekeeper.milliseconds);
  });

  it('begins existence inactive', function() {
    assert.not(timekeeper.active);
  });

  it('returns its counted time as a string with textify', function() {
    let timekeeper = Timekeeper.new();

    assert.equal("00:00.000", timekeeper.textify());
  })

  it('assumes a rate of 60FPS or 17 milliseconds per frame when updating time', function() {
    let timekeeper = Timekeeper.new();

    assert.equal(0, timekeeper.milliseconds);
    timekeeper.updateTime();
    assert.equal(17, timekeeper.milliseconds);
    assert.equal("00:00.017", timekeeper.textify());
  });
});
