(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["clairex"] = factory();
	else
		root["clairex"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var clairex = {
	
	    ex: "",
	
	    getFoo: function getFoo() {
	        return 42;
	    },
	
	    set: function set(str) {
	        this.ex = str;
	        return this;
	    },
	
	    replaceWhitespace: function replaceWhitespace() {
	        var replacement = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
	
	        this.ex = this.ex.replace(new RegExp("\\s", "g"), replacement);
	        return this;
	    },
	
	    convertMiscChar: function convertMiscChar() {
	        var exps = [{ char: /&/g, replace: "and" }, { char: /#/g, replace: "number " }, { char: /%/g, replace: " percent" }, { char: /\/|\\/g, replace: " slash " }, { char: /\*/g, replace: " star " }, { char: /@/g, replace: " at " }
	        // brackets
	        ];
	        for (var i = 0; i < exps.length; i++) {
	            this.ex = this.ex.replace(new RegExp(exps[i].char), exps[i].replace);
	        }
	        return this;
	    },
	
	    convertPunctuation: function convertPunctuation() {
	        var exps = [{ punc: "\\{|\\}", replace: "brace" }, { punc: "\\(|\\)", replace: " bracket " }, { punc: "\'", replace: "" }, { punc: "\"", replace: "" }, { punc: ",", replace: "" }, { punc: "\(\\w\)\\.\(\\s\)", replace: "$1$2" }, { punc: "\\.", replace: " dot " }, { punc: "!", replace: "" }, { punc: "\\?", replace: "" }];
	        for (var i = 0; i < exps.length; i++) {
	            this.ex = this.ex.replace(new RegExp(exps[i].punc, "g"), exps[i].replace);
	        }
	        return this;
	    },
	
	    squeeze: function squeeze(range) {
	        var chars = [].concat(_toConsumableArray(this.ex));
	        var rangeRegexp = new RegExp("[" + range + "]", "g");
	        for (var j = 0; j < chars.length; j++) {
	            if (chars[j] === chars[j + 1]) {
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
	
	    changeMoney: function changeMoney() {
	        var exps = [{ regex: /\$(\d+).(\d\d)/g, replace: "$1 dollars $2 cents" }, { regex: /\$(\d+)/g, replace: "$1 dollars" }, { regex: /\€(\d+).(\d\d)/g, replace: "$1 euro $2 cents" }, { regex: /\€(\d+)/g, replace: "$1 euro" }, { regex: /\£(\d+).(\d\d)/g, replace: "$1 pounds $2 pence" }, { regex: /\£(\d+)/g, replace: "$1 pounds" }];
	        for (var i = 0; i < exps.length; i++) {
	            this.ex = this.ex.replace(new RegExp(exps[i].regex), exps[i].replace);
	        }
	        return this;
	    },
	
	    toUrl: function toUrl(str) {
	        // I don't care about chaning this, I want to be able to call it alone and get the string returned.
	        return this.set(str.trim()).squeeze(" ").convertMiscChar().convertPunctuation().changeMoney().replaceWhitespace("-").val().toLowerCase();
	    },
	
	    val: function val() {
	        return this.ex;
	    }
	};
	
	exports.clairex = clairex;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var chainObj = {
	    phrase: "",
	
	    setPhrase: function setPhrase(noun) {
	        this.phrase = noun;
	        return this;
	    },
	
	    shoutIt: function shoutIt() {
	        if (this.phrase) {
	            this.phrase = this.phrase.toUpperCase();
	        }
	        return this;
	    },
	
	    makeItRed: function makeItRed() {
	        this.phrase = "red " + this.phrase;
	        return this;
	    },
	
	    val: function val() {
	        var tmp = this.phrase;
	        this.phrase = "";
	        return tmp;
	    }
	};
	
	var ChainPrototype = function ChainPrototype() {
	    this.phrase = "";
	};
	
	ChainPrototype.prototype.setPhrase = function (noun) {
	    this.phrase = noun;
	    return this;
	};
	
	ChainPrototype.prototype.makeItRed = function () {
	    if (this.phrase) {
	        this.phrase = "red " + this.phrase;
	    }
	    return this;
	};
	
	ChainPrototype.prototype.shoutIt = function () {
	    if (this.phrase) {
	        this.phrase = this.phrase.toUpperCase();
	    }
	    return this;
	};
	
	exports.chainObj = chainObj;
	exports.ChainPrototype = ChainPrototype;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NzkzNjRlNjg0MzEzNTY2MGRkOCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhaXJlbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFJLFVBQVU7O0FBRVYsU0FBSSxFQUZNOztBQUlWLGFBQVEsa0JBQVc7QUFDZixnQkFBTyxFQUFQO0FBQ0gsTUFOUzs7QUFRVixVQUFLLGFBQVMsR0FBVCxFQUFjO0FBQ2YsY0FBSyxFQUFMLEdBQVUsR0FBVjtBQUNBLGdCQUFPLElBQVA7QUFDSCxNQVhTOztBQWFWLHdCQUFtQiw2QkFBMkI7QUFBQSxhQUFsQixXQUFrQix5REFBSixFQUFJOztBQUMxQyxjQUFLLEVBQUwsR0FBVSxLQUFLLEVBQUwsQ0FBUSxPQUFSLENBQWdCLElBQUksTUFBSixDQUFXLEtBQVgsRUFBa0IsR0FBbEIsQ0FBaEIsRUFBd0MsV0FBeEMsQ0FBVjtBQUNBLGdCQUFPLElBQVA7QUFDSCxNQWhCUzs7QUFrQlYsc0JBQWlCLDJCQUFXO0FBQ3hCLGFBQUksT0FBTyxDQUNQLEVBQUMsTUFBTSxJQUFQLEVBQWEsU0FBUyxLQUF0QixFQURPLEVBRVAsRUFBQyxNQUFNLElBQVAsRUFBYSxTQUFTLFNBQXRCLEVBRk8sRUFH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QUFpQixTQUFqQixjQUFpQixHQUFXO0FBQzVCLFVBQUssTUFBTCxHQUFjLEVBQWQ7QUFDSCxFQUZEOztBQUlBLGdCQUFlLFNBQWYsQ0FBeUIsU0FBekIsR0FBcUMsVUFBUyxJQUFULEVBQWU7QUFDaEQsVUFBSyxNQUFMLEdBQWMsSUFBZDtBQUNBLFlBQU8sSUFBUDtBQUNILEVBSEQ7O0FBS0EsZ0JBQWUsU0FBZixDQUF5QixTQUF6QixHQUFxQyxZQUFXO0FBQzVDLFNBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2IsY0FBSyxNQUFMLEdBQWMsU0FBUyxLQUFLLE1BQTVCO0FBQ0g7QUFDRCxZQUFPLElBQVA7QUFDSCxFQUxEOztBQU9BLGdCQUFlLFNBQWYsQ0FBeUIsT0FBekIsR0FBbUMsWUFBVztBQUMxQyxTQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNiLGNBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxDQUFZLFdBQVosRUFBZDtBQUNIO0FBQ0QsWUFBTyxJQUFQO0FBQ0gsRUFMRDs7U0FRSSxRLEdBQUEsUTtTQUNBLGMsR0FBQSxjIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY2xhaXJleFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbGFpcmV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA1NzkzNjRlNjg0MzEzNTY2MGRkOFxuICoqLyIsImxldCBjbGFpcmV4ID0ge1xuICAgIFxuICAgIGV4OiBcIlwiLFxuICAgIFxuICAgIGdldEZvbzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiA0MjtcbiAgICB9LFxuICAgIFxuICAgIHNldDogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIHRoaXMuZXggPSBzdHI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgcmVwbGFjZVdoaXRlc3BhY2U6IGZ1bmN0aW9uKHJlcGxhY2VtZW50ID0gXCJcIikge1xuICAgICAgICB0aGlzLmV4ID0gdGhpcy5leC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcc1wiLCBcImdcIiksIHJlcGxhY2VtZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICBjb252ZXJ0TWlzY0NoYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZXhwcyA9IFtcbiAgICAgICAgICAgIHtjaGFyOiAvJi9nLCByZXBsYWNlOiBcImFuZFwifSxcbiAgICAgICAgICAgIHtjaGFyOiAvIy9nLCByZXBsYWNlOiBcIm51bWJlciBcIn0sXG4gICAgICAgICAgICB7Y2hhcjogLyUvZywgcmVwbGFjZTogXCIgcGVyY2VudFwifSxcbiAgICAgICAgICAgIHtjaGFyOiAvXFwvfFxcXFwvZywgcmVwbGFjZTogXCIgc2xhc2ggXCJ9LFxuICAgICAgICAgICAge2NoYXI6IC9cXCovZywgcmVwbGFjZTogXCIgc3RhciBcIn0sXG4gICAgICAgICAgICB7Y2hhcjogL0AvZywgcmVwbGFjZTogXCIgYXQgXCJ9XG4gICAgICAgICAgICAvLyBicmFja2V0c1xuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZXggPSB0aGlzLmV4LnJlcGxhY2UobmV3IFJlZ0V4cChleHBzW2ldLmNoYXIpLCBleHBzW2ldLnJlcGxhY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgY29udmVydFB1bmN0dWF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGV4cHMgPSBbXG4gICAgICAgICAgICB7cHVuYzogXCJcXFxce3xcXFxcfVwiLCByZXBsYWNlOiBcImJyYWNlXCJ9LFxuICAgICAgICAgICAge3B1bmM6IFwiXFxcXCh8XFxcXClcIiwgcmVwbGFjZTogXCIgYnJhY2tldCBcIn0sXG4gICAgICAgICAgICB7cHVuYzogXCJcXCdcIiwgcmVwbGFjZTogXCJcIn0sXG4gICAgICAgICAgICB7cHVuYzogXCJcXFwiXCIsIHJlcGxhY2U6IFwiXCJ9LFxuICAgICAgICAgICAge3B1bmM6IFwiLFwiLCByZXBsYWNlOiBcIlwifSxcbiAgICAgICAgICAgIHtwdW5jOiBcIlxcKFxcXFx3XFwpXFxcXC5cXChcXFxcc1xcKVwiLCByZXBsYWNlOiBcIiQxJDJcIn0sXG4gICAgICAgICAgICB7cHVuYzogXCJcXFxcLlwiLCByZXBsYWNlOiBcIiBkb3QgXCJ9LFxuICAgICAgICAgICAge3B1bmM6IFwiIVwiLCByZXBsYWNlOiBcIlwifSxcbiAgICAgICAgICAgIHtwdW5jOiBcIlxcXFw/XCIsIHJlcGxhY2U6IFwiXCJ9XG4gICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5leCA9IHRoaXMuZXgucmVwbGFjZShuZXcgUmVnRXhwKGV4cHNbaV0ucHVuYywgXCJnXCIpLCBleHBzW2ldLnJlcGxhY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgc3F1ZWV6ZTogZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICAgICAgbGV0IGNoYXJzID0gWy4uLnRoaXMuZXhdO1xuICAgICAgICBsZXQgcmFuZ2VSZWdleHAgPSBuZXcgUmVnRXhwKGBbJHtyYW5nZX1dYCwgXCJnXCIpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoYXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoY2hhcnNbal0gPT09IGNoYXJzW2orMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBpZiByYW5nZSA9PT0gdW5kZWZpbmVkIGkuZS4gZmFsc2VcbiAgICAgICAgICAgICAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzW2pdID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJzW2pdLm1hdGNoKHJhbmdlUmVnZXhwKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc1tqXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXggPSBjaGFycy5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIGNoYW5nZU1vbmV5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGV4cHMgPSBbXG4gICAgICAgICAgICB7cmVnZXg6IC9cXCQoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogXCIkMSBkb2xsYXJzICQyIGNlbnRzXCJ9LFxuICAgICAgICAgICAge3JlZ2V4OiAvXFwkKFxcZCspL2csIHJlcGxhY2U6IFwiJDEgZG9sbGFyc1wifSxcbiAgICAgICAgICAgIHtyZWdleDogL1xc4oKsKFxcZCspLihcXGRcXGQpL2csIHJlcGxhY2U6IFwiJDEgZXVybyAkMiBjZW50c1wifSxcbiAgICAgICAgICAgIHtyZWdleDogL1xc4oKsKFxcZCspL2csIHJlcGxhY2U6IFwiJDEgZXVyb1wifSxcbiAgICAgICAgICAgIHtyZWdleDogL1xcwqMoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogXCIkMSBwb3VuZHMgJDIgcGVuY2VcIn0sXG4gICAgICAgICAgICB7cmVnZXg6IC9cXMKjKFxcZCspL2csIHJlcGxhY2U6IFwiJDEgcG91bmRzXCJ9XG4gICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5leCA9IHRoaXMuZXgucmVwbGFjZShuZXcgUmVnRXhwKGV4cHNbaV0ucmVnZXgpLCBleHBzW2ldLnJlcGxhY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgdG9Vcmw6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAvLyBJIGRvbid0IGNhcmUgYWJvdXQgY2hhbmluZyB0aGlzLCBJIHdhbnQgdG8gYmUgYWJsZSB0byBjYWxsIGl0IGFsb25lIGFuZCBnZXQgdGhlIHN0cmluZyByZXR1cm5lZC5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHN0ci50cmltKCkpXG4gICAgICAgICAgICAuc3F1ZWV6ZShcIiBcIilcbiAgICAgICAgICAgIC5jb252ZXJ0TWlzY0NoYXIoKVxuICAgICAgICAgICAgLmNvbnZlcnRQdW5jdHVhdGlvbigpXG4gICAgICAgICAgICAuY2hhbmdlTW9uZXkoKVxuICAgICAgICAgICAgLnJlcGxhY2VXaGl0ZXNwYWNlKFwiLVwiKVxuICAgICAgICAgICAgLnZhbCgpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuICAgIFxuICAgIHZhbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4O1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBjbGFpcmV4XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2xhaXJlbmRleC5qc1xuICoqLyIsImxldCBjaGFpbk9iaiA9IHtcbiAgICBwaHJhc2U6IFwiXCIsXG5cbiAgICBzZXRQaHJhc2U6IGZ1bmN0aW9uKG5vdW4pIHtcbiAgICAgICAgdGhpcy5waHJhc2UgPSBub3VuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgc2hvdXRJdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBocmFzZSkge1xuICAgICAgICAgICAgdGhpcy5waHJhc2UgPSB0aGlzLnBocmFzZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBtYWtlSXRSZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnBocmFzZSA9IFwicmVkIFwiICsgdGhpcy5waHJhc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICB2YWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdG1wID0gdGhpcy5waHJhc2U7XG4gICAgICAgIHRoaXMucGhyYXNlID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIHRtcDtcbiAgICB9XG59O1xuXG5sZXQgQ2hhaW5Qcm90b3R5cGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBocmFzZSA9IFwiXCI7XG59O1xuXG5DaGFpblByb3RvdHlwZS5wcm90b3R5cGUuc2V0UGhyYXNlID0gZnVuY3Rpb24obm91bikge1xuICAgIHRoaXMucGhyYXNlID0gbm91bjtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbkNoYWluUHJvdG90eXBlLnByb3RvdHlwZS5tYWtlSXRSZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5waHJhc2UpIHtcbiAgICAgICAgdGhpcy5waHJhc2UgPSBcInJlZCBcIiArIHRoaXMucGhyYXNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbkNoYWluUHJvdG90eXBlLnByb3RvdHlwZS5zaG91dEl0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucGhyYXNlKSB7XG4gICAgICAgIHRoaXMucGhyYXNlID0gdGhpcy5waHJhc2UudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnQge1xuICAgIGNoYWluT2JqLFxuICAgIENoYWluUHJvdG90eXBlXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NoYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==