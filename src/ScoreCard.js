function ScoreCard(frames) {

  this.frames = [];

  this.openFrames = frames;

  this.getScore = function() {
    console.log("HEY!");
    var result = 0;
    for (i=0;i<this.frames.length;i++) {
      result += this.frames[i].score;
    }
    console.log(result);
    return result;
  };

  this.roll = function(pinsHit) {

    this.openFrames[0].addScore(pinsHit);

  };



};
