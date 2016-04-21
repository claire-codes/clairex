var expect = require("chai").expect;
var clairex = require("../index");

describe("it should work", function() {
    it("really should", function() {
        expect(clairex.getFoo()).to.eq(42);
    });
});

describe("#squeeze", function() {
    it("should work", function() {
        expect(clairex.squeeze("yellow moon")).to.eq("yelow mon");
        expect(clairex.squeeze("yellow moon")).to.eq("yelow mon");
        expect(clairex.squeeze("putters shoot balls", "m-z")).to.eq("puters shot balls");
    });
});

describe("#changeMoney", function() {
    it("should work", function() {
        expect(clairex.changeMoney("£5")).to.eq("5 pounds");
    });
});