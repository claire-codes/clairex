import test from "ava";
import "babel-core/register";
import {
    clairex,
    toUrl,
    squeeze
} from "../src/clairendex";

test("clairex", t => {
    t.deepEqual(42, clairex.getFoo());
});

test("replaceWhitespace", t => {
    t.deepEqual(clairex.set("foo bar").replaceWhitespace("-").val(), "foo-bar");
    t.deepEqual(clairex.set("bish bash bosh").replaceWhitespace("!").val(), "bish!bash!bosh");
    t.deepEqual(clairex.set("flim  flam   floop").replaceWhitespace("*").val(), "flim**flam***floop");
    t.deepEqual(clairex.set(" braap  ").replaceWhitespace("$").val(), "$braap$$");
    t.deepEqual(clairex.set("oof").replaceWhitespace("%").val(), "oof");
    t.deepEqual(clairex.set("good golly").replaceWhitespace("").val(), "goodgolly");
    t.deepEqual(clairex.set("up side your head").replaceWhitespace().val(), "upsideyourhead");
});

test("convertMiscChar", t => {
    t.deepEqual(clairex.set("Me & You").convertMiscChar().val(), "Me and You");
    t.deepEqual(clairex.set("#42").convertMiscChar().val(), "number 42");
    t.deepEqual(clairex.set("110%").convertMiscChar().val(), "110 percent");
    t.deepEqual(clairex.set("a/b").convertMiscChar().val(), "a slash b");
    t.deepEqual(clairex.set("a\\b").convertMiscChar().val(), "a slash b");
    t.deepEqual(clairex.set("*this*").convertMiscChar().val(), " star this star ");
    t.deepEqual(clairex.set("claire@parker").convertMiscChar().val(), "claire at parker");
});

test("convertPunctuation", t => {
    t.deepEqual(clairex.set("{ 2 + 2 }").convertPunctuation().val(), "brace 2 + 2 brace");
    t.deepEqual(clairex.set("(or you)").convertPunctuation().val(), " bracket or you bracket ");
    t.deepEqual(clairex.set("it\'s").convertPunctuation().val(), "its");
    t.deepEqual(clairex.set("\"wow\"").convertPunctuation().val(), "wow");
    t.deepEqual(clairex.set("er, no").convertPunctuation().val(), "er no");
    t.deepEqual(clairex.set("wow!!!").convertPunctuation().val(), "wow");
    t.deepEqual(clairex.set("huh?").convertPunctuation().val(), "huh");
    t.deepEqual(clairex.set("package.json?").convertPunctuation().val(), "package dot json");
    t.deepEqual(clairex.set("Mr. Jones.com").convertPunctuation().val(), "Mr Jones dot com");
});

test("#squeeze", t => {
    t.deepEqual("yelow mon", clairex.set("yellow moon").squeeze().val());
    t.deepEqual(" now is the", clairex.set("  now   is  the").squeeze().val());
    t.deepEqual("puters shot balls", clairex.set("putters shoot balls").squeeze("m-z").val());
    t.deepEqual("just some spaaace ", clairex.set("just   some   spaaace  ").squeeze(" ").val());
});

test("#changeMoney pounds only", t => {
    t.deepEqual("2 pounds", clairex.set("£2").changeMoney().val());
    t.deepEqual("4 dollars", clairex.set("$4").changeMoney().val());
    t.deepEqual("6 euro", clairex.set("€6").changeMoney().val());
});

test("#changeMoney pounds and pennies", t => {
    t.deepEqual("2 pounds 34 pence", clairex.set("£2.34").changeMoney().val());
    t.deepEqual("4 dollars 56 cents", clairex.set("$4.56").changeMoney().val());
    t.deepEqual("6 euro 78 cents", clairex.set("€6.78").changeMoney().val());
});

test("toUrl", t => {
    t.deepEqual("bob-and-alices-5-pounds-slash-10-dollars-trip", clairex.toUrl("Bob & Alice\"s   £5/$10 trip? "));
});