var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // this.$node = $('<span class="charmander"></span>');
  this.$node = $('<img src="https://emojis.slackmojis.com/emojis/images/1469223471/679/charmander_dancing.gif?1469223471" class="charmander"/>');
  this.step();
  this.setPosition(top, left);
  // this.lineUp();
}
MakeDancer.prototype.step = function() {
  setTimeout(() => {
    this.step();
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

MakeDancer.prototype.lineUp = function() {
  console.log(this.top);
  if (window.innerHeight * 0.5 > this.top) {
    this.setPosition(this.top++, this.left);
    setInterval(() => {
      this.lineUp();
    }, 100);
  }
  if(window.innerHeight * 0.5 < this.top) {
    this.setPosition(this.top--, this.left);
    setInterval(() => {
      this.lineUp();
    }, 100);
  }
}