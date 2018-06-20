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

var MakeLeftShark = function (top,left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="leftshark"></span>');
  this.setPosition(top, left);
}
MakeLeftShark.prototype = Object.create(MakeDancer.prototype);
MakeLeftShark.prototype.constructor = MakeLeftShark;
  
MakeLeftShark.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node;
}