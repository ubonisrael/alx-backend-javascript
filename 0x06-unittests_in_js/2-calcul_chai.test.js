const calculateNumber = require("./2-calcul_chai.js");
const { expect } = require("chai");

describe("calculateNumber", function () {
  it("should return 5 when 3.7 and 1 are added", function () {
    expect(calculateNumber("SUM", 3.7, 1)).to.equal(5);
  });
  it("should return 5 when 3.7 and 1.2 are added", function () {
    expect(calculateNumber("SUM", 3.7, 1.2)).to.equal(5);
  });
  it("should return -3 when -4.3 and 1.2 are added", function () {
    expect(calculateNumber("SUM", -4.3, 1.2)).to.equal(-3);
  });
  it("should return -6 when -3.7 and -1.5 are added", function () {
    expect(calculateNumber("SUM", -3.7, -1.2)).to.equal(-5);
  });
  it("should return -6 when -3.7 and -1.5 are added", function () {
    expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
  });
  it("should return 3 when 1 is subtracted from 4", function () {
    expect(calculateNumber("SUBTRACT", 4, 1)).to.equal(3);
  });
  it("should return -5 when 1.2 is subtracted from -4.3", function () {
    expect(calculateNumber("SUBTRACT", -4.3, 1.2)).to.equal(-5);
  });
  it("should return -3 when -1.2 is subtracted from -3.7", function () {
    expect(calculateNumber("SUBTRACT", -3.7, -1.2)).to.equal(-3);
  });
  it("should return 3 when 12.1 is divided by 4.2", function () {
    expect(calculateNumber("DIVIDE", 12.1, 4.2)).to.equal(3);
  });
  it("should return -4 when 8.4 is divided by -2.3", function () {
    expect(calculateNumber("DIVIDE", 8.4, -2.3)).to.equal(-4);
  });
  it("should return Error when -21.5 is divided by 0.4", function () {
    expect(calculateNumber("DIVIDE", -21.5, -0.5)).to.equal("Error");
  });
});
