describe("ScoreCard", function() {

  var scorecard;
  var diffFrame;

  beforeEach(function() {

    var frame = {
      score: 0
    }
    diffFrame = {
      score: 0
    };

    var frames = [diffFrame,frame,frame,frame,frame,frame,frame,frame,frame,frame];
    scorecard = new ScoreCard(frames);
  });

  it("Begins with a score of 0", function() {
    expect(scorecard.score).toEqual(0);
  });

  describe("Frames", function() {
    it("Is initialized with an array of 10 frames.", function() {
      expect(scorecard.frames.length).toEqual(10);
    });

    it("Will reflect a score change in one of its frames", function() {
      // Simulating a roll of 6 pins followed by a miss


      console.log("FINAL TEST");
      diffFrame.score = 6;
      //expect(diffFrame.score).toEqual(6);
      //console.log(scorecard.score);
      expect(scorecard.score).toEqual(6);
    });

  });


});