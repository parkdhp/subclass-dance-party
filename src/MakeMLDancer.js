var MakeMLDancer = function (top,left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="ML"></span>');
  this.setPosition(top, left);
}
MakeMLDancer.prototype = Object.create(MakeDancer.prototype);
MakeMLDancer.prototype.constructor = MakeMLDancer;

MakeMLDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node;
}