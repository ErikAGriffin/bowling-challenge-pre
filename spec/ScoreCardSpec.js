describe("ScoreCard", function() {

  var scorecard;
  var diffFrame;

  beforeEach(function() {
    var frame = {
      score: 0
    }
    diffFrame = {
      score: 0,
      addScore: function (number) {
        this.score += number;
      }

    };

    var frames = [diffFrame,frame,frame,frame,frame,frame,frame,frame,frame,frame];
    scorecard = new ScoreCard(frames);
  });

  it("Begins with a score of 0", function() {
    expect(scorecard.getScore()).toEqual(0);
  });

  describe("Frames", function() {
    it("Is initialized with an array of 10 open frames.", function() {
      expect(scorecard.openFrames.length).toEqual(10);
    });

    it("Will add the score of a roll to the respective frame", function() {

      scorecard.roll(6);
      expect(diffFrame.score).toEqual(6);

    });

    it("Will reflect a score change in one of its frames", function() {
      // Simulating a roll of 6 pins followed by a miss
      diffFrame.score = 6;
      expect(scorecard.getScore()).toEqual(6);
    });

  });


});
