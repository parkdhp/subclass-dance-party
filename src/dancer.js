var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
}
MakeDancer.prototype.step = function() {
  var that = this;
  setTimeout(function() {
    that.step();
  }, this.timeBetweenSteps);
  // setTimeout(this.step.bind(this));
}

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left,
  }
  this.$node.css(styleSettings);
}