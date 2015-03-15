function ScoreCard(frames) {

  this.frames = [];

  this.openFrames = frames;

  this.getScore = function() {
    var result = 0;
    for (i=0;i<frames.length;i++) {
      result += frames[i].score;
    }
    return result;
  };

  this.roll = function(pinsHit) {

    this.openFrames[0].addScore(pinsHit);

  };



};
