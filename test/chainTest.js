import test from "ava";
import "babel-core/register";
import {
    chainObj,
    ChainPrototype
} from "../src/chain";

test("chaining an Object", t => {
    t.same("red apple", chainObj.makeItRed("apple").val());
    t.same("", chainObj.shoutIt().val());
    t.same("RED VINE", chainObj.makeItRed("vine").shoutIt().val());
    t.same("red banana", chainObj.shoutIt().makeItRed("banana").val());
});

test("chaining a prototype", t => {
    let sentence = new ChainPrototype();
    t.same("apple", sentence.setPhrase("apple").phrase);
    t.same("red eye", sentence.setPhrase("eye").makeItRed().phrase);
    t.same("RED BALLOONS", sentence.setPhrase("balloons").makeItRed().shoutIt().phrase);
    t.same("red BALLOONS", sentence.setPhrase("balloons").shoutIt().makeItRed().phrase);
    sentence = new ChainPrototype();
    t.same("", sentence.shoutIt().phrase);
});