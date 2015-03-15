function Frame() {

  this.score = 0;
  this.rollCount = 0;

  this.addScore = function(number) {
    this.rollCount++;
    this.score += number;
  };


};
