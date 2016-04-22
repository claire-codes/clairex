import test from "ava";
import "babel-core/register";
import {
    chainObj,
    ChainPrototype
} from "../src/chain";

test("chaining an Object", t => {
    t.deepEqual("panda", chainObj.setPhrase("panda").val());
    t.deepEqual("red apple", chainObj.setPhrase("apple").makeItRed().val());
    t.deepEqual("red red panda", chainObj.setPhrase("panda").makeItRed().makeItRed().val());
    t.deepEqual("", chainObj.shoutIt().val());
    t.deepEqual("RED VINE", chainObj.setPhrase("vine").makeItRed().shoutIt().val());
    t.deepEqual("red BANANA", chainObj.setPhrase("banana").shoutIt().makeItRed().val());
});

test("chaining a prototype", t => {
    let sentence = new ChainPrototype();
    t.deepEqual("apple", sentence.setPhrase("apple").phrase);
    t.deepEqual("red eye", sentence.setPhrase("eye").makeItRed().phrase);
    t.deepEqual("red red bush", sentence.setPhrase("bush").makeItRed().makeItRed().phrase);
    t.deepEqual("RED BALLOONS", sentence.setPhrase("balloons").makeItRed().shoutIt().phrase);
    t.deepEqual("red BALLOONS", sentence.setPhrase("balloons").shoutIt().makeItRed().phrase);
    sentence = new ChainPrototype();
    t.deepEqual("", sentence.shoutIt().phrase);
});