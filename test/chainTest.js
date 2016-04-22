import test from "ava";
import "babel-core/register";
import {
    chainObj,
    ChainPrototype
} from "../src/chain";

test("chaining an Object", t => {
    t.same("panda", chainObj.setPhrase("panda").val());
    t.same("red apple", chainObj.setPhrase("apple").makeItRed().val());
    t.same("red red panda", chainObj.setPhrase("panda").makeItRed().makeItRed().val());
    t.same("", chainObj.shoutIt().val());
    t.same("RED VINE", chainObj.setPhrase("vine").makeItRed().shoutIt().val());
    t.same("red BANANA", chainObj.setPhrase("banana").shoutIt().makeItRed().val());
});

test("chaining a prototype", t => {
    let sentence = new ChainPrototype();
    t.same("apple", sentence.setPhrase("apple").phrase);
    t.same("red eye", sentence.setPhrase("eye").makeItRed().phrase);
    t.same("red red bush", sentence.setPhrase("bush").makeItRed().makeItRed().phrase);
    t.same("RED BALLOONS", sentence.setPhrase("balloons").makeItRed().shoutIt().phrase);
    t.same("red BALLOONS", sentence.setPhrase("balloons").shoutIt().makeItRed().phrase);
    sentence = new ChainPrototype();
    t.same("", sentence.shoutIt().phrase);
});