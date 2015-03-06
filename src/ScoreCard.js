function ScoreCard(frames) {

  this.frames = frames;

  this.getScore = function() {
    var result = 0;
    for (i=0;i<frames.length;i++) {
      result += frames[i].score;
    }
    return result;
  };



};
