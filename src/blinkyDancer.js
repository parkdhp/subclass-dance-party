var MakeCharmander = function (top,left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
}
MakeCharmander.prototype = Object.create(MakeDancer.prototype);
MakeCharmander.prototype.constructor = MakeCharmander;

MakeCharmander.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node;
}