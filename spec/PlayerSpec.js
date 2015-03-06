describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  it("Begins with a score of 0", function() {
    expect(player.score).toEqual(0);
  });


});