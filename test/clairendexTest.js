import test from "ava";
import "babel-core/register";
import {
    getFoo,
    toUrl,
    squeeze,
    changeMoney,
    replaceWhitespace,
    convertMiscChar,
    convertPunctuation
} from "../src/clairendex";

test("clairex", t => {
    t.deepEqual(42, getFoo());
});

test("replaceWhitespace", t => {
    t.deepEqual(replaceWhitespace("foo bar", "-"), "foo-bar");
    t.deepEqual(replaceWhitespace("bish bash bosh", "!"), "bish!bash!bosh");
    t.deepEqual(replaceWhitespace("flim  flam   floop", "*"), "flim**flam***floop");
    t.deepEqual(replaceWhitespace(" braap  ", "$"), "$braap$$");
    t.deepEqual(replaceWhitespace("oof", "%"), "oof");
    t.deepEqual(replaceWhitespace("good golly", ""), "goodgolly");
    t.deepEqual(replaceWhitespace("up side your head"), "upsideyourhead");
});

test("convertMiscChar", t => {
    t.deepEqual(convertMiscChar("Me & You"), "Me and You");
    t.deepEqual(convertMiscChar("#42"), "number 42");
    t.deepEqual(convertMiscChar("110%"), "110 percent");
    t.deepEqual(convertMiscChar("a/b"), "a slash b");
    t.deepEqual(convertMiscChar("a\\b"), "a slash b");
    t.deepEqual(convertMiscChar("*this*"), " star this star ");
    t.deepEqual(convertMiscChar("claire@parker"), "claire at parker");
});

test("convertPunctuation", t => {
    t.deepEqual(convertPunctuation("{ 2 + 2 }"), "brace 2 + 2 brace");
    t.deepEqual(convertPunctuation("(or you)"), " bracket or you bracket ");
    t.deepEqual(convertPunctuation("it\'s"), "its");
    t.deepEqual(convertPunctuation("\"wow\""), "wow");
    t.deepEqual(convertPunctuation("er, no"), "er no");
    t.deepEqual(convertPunctuation("wow!!!"), "wow");
    t.deepEqual(convertPunctuation("huh?"), "huh");
    t.deepEqual(convertPunctuation("package.json?"), "package dot json");
    t.deepEqual(convertPunctuation("Mr. Jones.com"), "Mr Jones dot com");
});

test("#squeeze", t => {
    t.deepEqual("yelow mon", squeeze("yellow moon"));
    t.deepEqual(" now is the", squeeze("  now   is  the"));
    t.deepEqual("puters shot balls", squeeze("putters shoot balls", "m-z"));
    t.deepEqual("just some spaaace ", squeeze("just   some   spaaace  ", " "));
});

test("#changeMoney pounds only", t => {
    t.deepEqual("2 pounds", changeMoney("£2"));
    t.deepEqual("4 dollars", changeMoney("$4"));
    t.deepEqual("6 euro", changeMoney("€6"));
});

test("#changeMoney pounds and pennies", t => {
    t.deepEqual("2 pounds 34 pence", changeMoney("£2.34"));
    t.deepEqual("4 dollars 56 cents", changeMoney("$4.56"));
    t.deepEqual("6 euro 78 cents", changeMoney("€6.78"));
});

test("toUrl", t => {
    t.deepEqual("bob-and-alices-5-pounds-slash-10-dollars-trip", toUrl("Bob & Alice\"s   £5/$10 trip? "));
});