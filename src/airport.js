function Airport() {
  this.planes = [];
}

Airport.prototype.land = function(object) {
  this.planes.push(object);
};
