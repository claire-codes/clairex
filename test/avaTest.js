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
} from "../src/index";

test("clairex", t => {
    t.same(42, getFoo());
});

test("replaceWhitespace", t => {
    t.same(replaceWhitespace("foo bar", "-"), "foo-bar");
    t.same(replaceWhitespace("bish bash bosh", "!"), "bish!bash!bosh");
    t.same(replaceWhitespace("flim  flam   floop", "*"), "flim**flam***floop");
    t.same(replaceWhitespace(" braap  ", "$"), "$braap$$");
    t.same(replaceWhitespace("oof", "%"), "oof");
    t.same(replaceWhitespace("good golly", ""), "goodgolly");
    t.same(replaceWhitespace("up side your head"), "upsideyourhead");
});

test("convertMiscChar", t => {
    t.same(convertMiscChar("Me & You"), "Me and You");
    t.same(convertMiscChar("#42"), "number 42");
    t.same(convertMiscChar("110%"), "110 percent");
    t.same(convertMiscChar("a/b"), "a slash b");
    t.same(convertMiscChar("a\\b"), "a slash b");
    t.same(convertMiscChar("*this*"), " star this star ");
    t.same(convertMiscChar("claire@parker"), "claire at parker");
});

test("convertPunctuation", t => {
    t.same(convertPunctuation("{ 2 + 2 }"), "brace 2 + 2 brace");
    t.same(convertPunctuation("(or you)"), " bracket or you bracket ");
    t.same(convertPunctuation("it\'s"), "its");
    t.same(convertPunctuation("\"wow\""), "wow");
    t.same(convertPunctuation("er, no"), "er no");
    t.same(convertPunctuation("wow!!!"), "wow");
    t.same(convertPunctuation("huh?"), "huh");
    t.same(convertPunctuation("package.json?"), "package dot json");
    t.same(convertPunctuation("Mr. Jones.com"), "Mr Jones dot com");
});

test("#squeeze", t => {
    t.same("yelow mon", squeeze("yellow moon"));
    t.same(" now is the", squeeze("  now   is  the"));
    t.same("puters shot balls", squeeze("putters shoot balls", "m-z"));
    t.same("just some spaaace ", squeeze("just   some   spaaace  ", " "));
});

test("#changeMoney pounds only", t => {
    t.same("2 pounds", changeMoney("£2"));
    t.same("4 dollars", changeMoney("$4"));
    t.same("6 euro", changeMoney("€6"));
});

test("#changeMoney pounds and pennies", t => {
    t.same("2 pounds 34 pence", changeMoney("£2.34"));
    t.same("4 dollars 56 cents", changeMoney("$4.56"));
    t.same("6 euro 78 cents", changeMoney("€6.78"));
});

test("toUrl", t => {
    t.same("bob-and-alices-5-pounds-slash-10-dollars-trip", toUrl("Bob & Alice\"s   £5/$10 trip? "));
});