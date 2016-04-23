let clairex = {

    ex: "",

    getFoo: function() {
        return 42;
    },

    set: function(str) {
        this.ex = str;
        return this;
    },

    replaceWhitespace: function(replacement = "") {
        this.ex = this.ex.replace(new RegExp("\\s", "g"), replacement);
        return this;
    },

    convertMiscChar: function() {
        let exps = [
            {char: /&/g, replace: "and"},
            {char: /#/g, replace: "number "},
            {char: /%/g, replace: " percent"},
            {char: /\/|\\/g, replace: " slash "},
            {char: /\*/g, replace: " star "},
            {char: /@/g, replace: " at "}
            // brackets
        ];
        for (let i = 0; i < exps.length; i++) {
            this.ex = this.ex.replace(new RegExp(exps[i].char), exps[i].replace);
        }
        return this;
    },

    convertPunctuation: function() {
        let exps = [
            {punc: "\\{|\\}", replace: "brace"},
            {punc: "\\(|\\)", replace: " bracket "},
            {punc: "\'", replace: ""},
            {punc: "\"", replace: ""},
            {punc: ",", replace: ""},
            {punc: "\(\\w\)\\.\(\\s\)", replace: "$1$2"},
            {punc: "\\.", replace: " dot "},
            {punc: "!", replace: ""},
            {punc: "\\?", replace: ""}
        ];
        for (let i = 0; i < exps.length; i++) {
            this.ex = this.ex.replace(new RegExp(exps[i].punc, "g"), exps[i].replace);
        }
        return this;
    },

    squeeze: function(range) {
        let chars = [...this.ex];
        let rangeRegexp = new RegExp(`[${range}]`, "g");
        for (let j = 0; j < chars.length; j++) {
            if (chars[j] === chars[j+1]) {
                // if range === undefined i.e. false
                if (!range) {
                    chars[j] = "";
                } else if (chars[j].match(rangeRegexp)) {
                    chars[j] = "";
                }
            }
        }
        this.ex = chars.join("");
        return this;
    },

    changeMoney: function() {
        let exps = [
            {regex: /\$(\d+).(\d\d)/g, replace: "$1 dollars $2 cents"},
            {regex: /\$(\d+)/g, replace: "$1 dollars"},
            {regex: /\€(\d+).(\d\d)/g, replace: "$1 euro $2 cents"},
            {regex: /\€(\d+)/g, replace: "$1 euro"},
            {regex: /\£(\d+).(\d\d)/g, replace: "$1 pounds $2 pence"},
            {regex: /\£(\d+)/g, replace: "$1 pounds"}
        ];
        for (let i = 0; i < exps.length; i++) {
            this.ex = this.ex.replace(new RegExp(exps[i].regex), exps[i].replace);
        }
        return this;
    },

    toUrl: function(str) {
        // I don't care about chaning this, I want to be able to call it alone and get the string returned.
        return this.set(str.trim())
            .squeeze(" ")
            .convertMiscChar()
            .convertPunctuation()
            .changeMoney()
            .replaceWhitespace("-")
            .val()
            .toLowerCase();
    },

    val: function() {
        return this.ex;
    }
}

export {
    clairex
};
