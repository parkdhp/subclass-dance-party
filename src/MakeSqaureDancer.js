var MakeSquareDancer = function (top,left, timeBetweenSteps) {
    MakeDancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="squares"></span>');
    this.setPosition(top, left);
  }
  MakeSquareDancer.prototype = Object.create(MakeDancer.prototype);
  MakeSquareDancer.prototype.constructor = MakeSquareDancer;
  
  MakeSquareDancer.prototype.step = function() {
    MakeDancer.prototype.step.call(this);
    this.$node.toggle("shake");
  }
  