describe("ScoreCard", function() {

  var scorecard;
  var diffFrameOne;
  var diffFrameTwo;

  beforeEach(function() {
    var frame = {
      score: 0
    }
    diffFrameOne = {
      score: 0,
      rollCount: 0,
      addScore: function (number) {
        this.rollCount++;
        this.score += number;
      }
    };
    diffFrameTwo = {
      score: 0,
      rollCount: 0,
      addScore: function(number) {
        this.rollCount++;
        this.score += number;
      }

    };

    var frames = [diffFrameOne,diffFrameTwo,frame,frame,frame,frame,frame,frame,frame,frame];
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
      expect(diffFrameOne.score).toEqual(6);
    });

    it("Will add two rolls to a frame and close it unless Strike / Spare", function() {
      scorecard.roll(6);
      scorecard.roll(3);
      expect(diffFrameOne.score).toEqual(9);
      expect(scorecard.getScore()).toEqual(9);
    });


  });


});
