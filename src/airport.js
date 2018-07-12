"use strict";

function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._planes = [];
}

Airport.prototype.land = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error ('Cannot land: weather is stormy');
  }
  this._planes.push(plane);
};

Airport.prototype.takeOff = function() {
  if(this._weather.isStormy()) {
    throw new Error ('Cannot take off: weather is stormy');
  }
  this._planes.pop();
};
