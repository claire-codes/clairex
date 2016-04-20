let chainObj = {
    phrase: "",
    
    shoutIt: function() {
        if (this.phrase) {
            this.phrase = this.phrase.toUpperCase();
        }
        return this;
    },
    
    makeItRed: function(noun) {
        this.phrase = "red " + noun;
        return this;
    },
    
    val: function() {
        var tmp = this.phrase;
        this.phrase = "";
        return tmp;
    }
}

export { chainObj }