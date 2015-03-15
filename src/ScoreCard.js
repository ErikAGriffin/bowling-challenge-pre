function ScoreCard(frames) {

  this.frames = [];

  this.openFrames = frames;

  this.getScore = function() {
    var result = 0;
    for (i=0;i<this.frames.length;i++) {
      result += this.frames[i].score;
    }
    return result;
  };

  this.roll = function(pinsHit) {

    var frame = this.openFrames[0];
    frame.addScore(pinsHit);

    if (frame.rollCount === 2) {
      this.frames.push(this.openFrames.shift());
    }
  };



};
