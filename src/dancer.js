class MakeDancer {
  constructor(top, left, timeBetweenSteps){
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class="charmander"></span>');
    this.step();
    this.setPosition(top, left);
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left,
    }
    this.$node.css(styleSettings);
  }

  lineUp() {
    if (window.innerHeight * 0.5 > this.top) {
      this.setPosition(this.top++, this.left);
      setInterval(this.lineUp.bind(this), 100);
    }
    if (window.innerHeight * 0.5 < this.top) {
      this.setPosition(this.top--, this.left);
      setInterval(this.lineUp.bind(this), 100);
      // setInterval(() => {
      //   this.lineUp();
      // }, 100);
    }
  }
}

window.MakeDancer = MakeDancer;




