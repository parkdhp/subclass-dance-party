class MakeCharmander extends MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }

  step() {
    super.step();
    this.$node;
  }
}

class MakePickleDancer extends MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="pickle"></span>');
    this.setPosition(top, left);
  }

  step() {
    super.step();
    this.$node;
  }
}

class MakeMLDancer extends MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="ML"></span>');
    this.setPosition(top, left);
  }

  step() {
    super.step();
    this.$node;
  }
}

class MakeLeftShark extends MakeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="leftshark"></span>');
    this.setPosition(top, left);
  }

  step() {
    super.step();
    this.$node;
  }
}

window.MakeCharmander = MakeCharmander;
window.MakePickleDancer = MakePickleDancer;
window.MakeMLDancer = MakeMLDancer;
window.MakeLeftShark = MakeLeftShark;