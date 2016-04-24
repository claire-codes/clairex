/****
 * This is a proof-of-concept that I used to learn about chaining.
 * I'm leaving it here because I can.
 ****/

let chainObj = {
    phrase: "",

    setPhrase: function(noun) {
        this.phrase = noun;
        return this;
    },

    shoutIt: function() {
        if (this.phrase) {
            this.phrase = this.phrase.toUpperCase();
        }
        return this;
    },

    makeItRed: function() {
        this.phrase = "red " + this.phrase;
        return this;
    },

    val: function() {
        var tmp = this.phrase;
        this.phrase = "";
        return tmp;
    }
};

let ChainPrototype = function() {
    this.phrase = "";
};

ChainPrototype.prototype.setPhrase = function(noun) {
    this.phrase = noun;
    return this;
};

ChainPrototype.prototype.makeItRed = function() {
    if (this.phrase) {
        this.phrase = "red " + this.phrase;
    }
    return this;
};

ChainPrototype.prototype.shoutIt = function() {
    if (this.phrase) {
        this.phrase = this.phrase.toUpperCase();
    }
    return this;
};

export {
    chainObj,
    ChainPrototype
};