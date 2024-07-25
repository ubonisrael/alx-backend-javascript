const assert = require("assert");
const calculateNumber = require("./1-calcul.js");
const { describe, it } = require("mocha");


describe("calculateNumber", function() {
    it("should return 5 when 3.7 and 1 are added", function() {
        assert.equal(calculateNumber('SUM', 3.7, 1), 5);
    });
    it("should return 5 when 3.7 and 1.2 are added", function() {
        assert.equal(calculateNumber('SUM', 3.7, 1.2), 5);
    });
    it("should return -3 when -4.3 and 1.2 are added", function() {
        assert.equal(calculateNumber('SUM', -4.3, 1.2), -3);
    });
    it("should return -6 when -3.7 and -1.5 are added", function() {
        assert.equal(calculateNumber('SUM', -3.7, -1.2), -5);
    });
    it("should return -6 when -3.7 and -1.5 are added", function() {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it("should return 3 when 1 is subtracted from 4", function() {
        assert.equal(calculateNumber('SUBTRACT', 4, 1), 3);
    });
    it("should return -5 when 1.2 is subtracted from -4.3", function() {
        assert.equal(calculateNumber('SUBTRACT', -4.3, 1.2), -5);
    });
    it("should return -3 when -1.2 is subtracted from -3.7", function() {
        assert.equal(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
    });
    it("should return 3 when 12.1 is divided by 4.2", function() {
        assert.equal(calculateNumber('DIVIDE', 12.1, 4.2), 3);
    });
    it("should return -4 when 8.4 is divided by -2.3", function() {
        assert.equal(calculateNumber('DIVIDE', 8.4, -2.3), -4);
    });
    it("should return Error when -21.5 is divided by 0.4", function() {
        assert.equal(calculateNumber('DIVIDE', -21.5, -0.5), 'Error');
    });
});
