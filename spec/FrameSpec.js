describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("Begins with a score of 0", function() {
    expect(frame.score).toEqual(0);
  });

  describe("Tallying Frame Score", function() {
    it("Can have a roll score added to its score", function() {
      frame.addScore(6);
      expect(frame.score).toEqual(6);
    });

  });



});