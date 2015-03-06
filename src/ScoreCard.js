function ScoreCard(frames) {

  this.frames = frames;

  this.score = (function() {
    var result = 0;

    for (i=0;i<frames.length;i++) {
      console.log("Frame["+i+"]: "+JSON.stringify(frames[i]));
      result += frames[i].score;
    }
    return result;
  }());



};
