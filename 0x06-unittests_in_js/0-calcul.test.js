const assert = require("assert");
const calculateNumber = require("./0-calcul.js");
const { describe, it } = require("mocha");


describe("calculateNumber", function() {
    it("should return 4 when 1 and 3 are added", function() {
        assert.equal(calculateNumber(3, 1), 4);
    });
    it("should return 5 when 3.7 and 1 are added", function() {
        assert.equal(calculateNumber(3.7, 1), 5);
    });
    it("should return 5 when 3.7 and 1.2 are added", function() {
        assert.equal(calculateNumber(3.7, 1.2), 5);
    });
    it("should return 6 when 3.7 and 1.5 are added", function() {
        assert.equal(calculateNumber(3.7, 1.5), 6);
    });
    it("should return -3 when -4.3 and 1.2 are added", function() {
        assert.equal(calculateNumber(-4.3, 1.2), -3);
    });
    it("should return -6 when -3.7 and -1.5 are added", function() {
        assert.equal(calculateNumber(-3.7, -1.2), -5);
    });
});
