var MakePickleDancer = function (top,left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pickle"></span>');
  this.setPosition(top, left);
}
MakePickleDancer.prototype = Object.create(MakeDancer.prototype);
MakePickleDancer.prototype.constructor = MakePickleDancer;

MakePickleDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node;
}
