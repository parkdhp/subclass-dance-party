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