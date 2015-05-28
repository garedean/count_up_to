describe("countTo", function() {
  it("counts up to a number by intervals of one", function() {
    expect(countTo(5, 1)).to.eql([1,2,3,4,5]);
  });
  it("counts up to a number by intervals of a number by which it is divisible", function() {
    expect(countTo(30, 5)).to.eql([5,10,15,20,25,30]);
  });
});
