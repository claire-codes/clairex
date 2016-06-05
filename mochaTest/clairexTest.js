var expect = require("chai").expect;
var clairex = require("../index").clairex;

describe("#squeeze", function() {
    it("should work", function() {
        expect(clairex.set("yellow moon").squeeze().val()).to.eq("yelow mon");
        expect(clairex.set("yellow moon").squeeze().val()).to.eq("yelow mon");
        expect(clairex.set("putters shoot balls").squeeze("m-z").val()).to.eq("puters shot balls");
    });
});

describe("#changeMoney", function() {
    it("should work", function() {
        expect(clairex.set("£5").changeMoney().val()).to.eq("5 pounds");
    });
});