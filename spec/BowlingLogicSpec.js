describe("Bowling Logic", function() {
  var game;
  var scorecard;

  beforeEach(function() {

    scorecard = {
    }

    game = new BowlingLogic();
    game.addScoreCard(scorecard);

  });

  it("Can have a scorecard added", function() {
    game.addScoreCard(scorecard);
    expect(game.scoreCards[1]).toEqual(scorecard);
  });

  describe('Bowling', function() {



  });





});
