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
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var clairex = {
	
	    ex: "",
	
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
	        return this.set(str.trim()).squeeze(" ").convertMiscChar().changeMoney().convertPunctuation().replaceWhitespace("-").squeeze("-") // clean up for the convert functions
	        .val().toLowerCase();
	    },
	
	    val: function val() {
	        return this.ex;
	    }
	};
	
	exports.clairex = clairex;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZmRjOGFjMzc1Nzc3ZTQzNTE2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhaXJlbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFJLFVBQVU7O0FBRVYsU0FBSSxFQUZNOztBQUlWLFVBQUssYUFBUyxHQUFULEVBQWM7QUFDZixjQUFLLEVBQUwsR0FBVSxHQUFWO0FBQ0EsZ0JBQU8sSUFBUDtBQUNILE1BUFM7O0FBU1Ysd0JBQW1CLDZCQUEyQjtBQUFBLGFBQWxCLFdBQWtCLHlEQUFKLEVBQUk7O0FBQzFDLGNBQUssRUFBTCxHQUFVLEtBQUssRUFBTCxDQUFRLE9BQVIsQ0FBZ0IsSUFBSSxNQUFKLENBQVcsS0FBWCxFQUFrQixHQUFsQixDQUFoQixFQUF3QyxXQUF4QyxDQUFWO0FBQ0EsZ0JBQU8sSUFBUDtBQUNILE1BWlM7O0FBY1Ysc0JBQWlCLDJCQUFXO0FBQ3hCLGFBQUksT0FBTyxDQUNQLEVBQUMsTUFBTSxJQUFQLEVBQWEsU0FBUyxLQUF0QixFQURPLEVBRVAsRUFBQyxNQUFNLElBQVAsRUFBYSxTQUFTLFNBQXRCLEVBRk8sRUFHUCxFQUFDLE1BQU0sSUFBUCxFQUFhLFNBQVMsVUFBdEIsRUFITyxFQUlQLEVBQUMsTUFBTSxRQUFQLEVBQWlCLFNBQVMsU0FBMUIsRUFKTyxF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QUwsR0FBVSxLQUFLLEVBQUwsQ0FBUSxPQUFSLENBQWdCLElBQUksTUFBSixDQUFXLEtBQUssQ0FBTCxFQUFRLEtBQW5CLENBQWhCLEVBQTJDLEtBQUssQ0FBTCxFQUFRLE9BQW5ELENBQVY7QUFDSDtBQUNELGdCQUFPLElBQVA7QUFDSCxNQTlFUzs7QUFnRlYsWUFBTyxlQUFTLEdBQVQsRUFBYztBQUNqQjtBQUNBLGdCQUFPLEtBQUssR0FBTCxDQUFTLElBQUksSUFBSixFQUFULEVBQ0YsT0FERSxDQUNNLEdBRE4sRUFFRixlQUZFLEdBR0YsV0FIRSxHQUlGLGtCQUpFLEdBS0YsaUJBTEUsQ0FLZ0IsR0FMaEIsRUFNRixPQU5FLENBTU0sR0FOTixDQU1xQjtBQU5yQixVQU9GLEdBUEUsR0FRRixXQVJFLEVBQVA7QUFTSCxNQTNGUzs7QUE2RlYsVUFBSyxlQUFXO0FBQ1osZ0JBQU8sS0FBSyxFQUFaO0FBQ0g7QUEvRlMsRUFBZDs7U0FtR0ksTyxHQUFBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbGFpcmV4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNsYWlyZXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGJmZGM4YWMzNzU3NzdlNDM1MTZjXG4gKiovIiwibGV0IGNsYWlyZXggPSB7XG5cbiAgICBleDogXCJcIixcblxuICAgIHNldDogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIHRoaXMuZXggPSBzdHI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByZXBsYWNlV2hpdGVzcGFjZTogZnVuY3Rpb24ocmVwbGFjZW1lbnQgPSBcIlwiKSB7XG4gICAgICAgIHRoaXMuZXggPSB0aGlzLmV4LnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxzXCIsIFwiZ1wiKSwgcmVwbGFjZW1lbnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY29udmVydE1pc2NDaGFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGV4cHMgPSBbXG4gICAgICAgICAgICB7Y2hhcjogLyYvZywgcmVwbGFjZTogXCJhbmRcIn0sXG4gICAgICAgICAgICB7Y2hhcjogLyMvZywgcmVwbGFjZTogXCJudW1iZXIgXCJ9LFxuICAgICAgICAgICAge2NoYXI6IC8lL2csIHJlcGxhY2U6IFwiIHBlcmNlbnRcIn0sXG4gICAgICAgICAgICB7Y2hhcjogL1xcL3xcXFxcL2csIHJlcGxhY2U6IFwiIHNsYXNoIFwifSxcbiAgICAgICAgICAgIHtjaGFyOiAvXFwqL2csIHJlcGxhY2U6IFwiIHN0YXIgXCJ9LFxuICAgICAgICAgICAge2NoYXI6IC9AL2csIHJlcGxhY2U6IFwiIGF0IFwifVxuICAgICAgICAgICAgLy8gYnJhY2tldHNcbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmV4ID0gdGhpcy5leC5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwc1tpXS5jaGFyKSwgZXhwc1tpXS5yZXBsYWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY29udmVydFB1bmN0dWF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGV4cHMgPSBbXG4gICAgICAgICAgICB7cHVuYzogXCJcXFxce3xcXFxcfVwiLCByZXBsYWNlOiBcImJyYWNlXCJ9LFxuICAgICAgICAgICAge3B1bmM6IFwiXFxcXCh8XFxcXClcIiwgcmVwbGFjZTogXCIgYnJhY2tldCBcIn0sXG4gICAgICAgICAgICB7cHVuYzogXCJcXCdcIiwgcmVwbGFjZTogXCJcIn0sXG4gICAgICAgICAgICB7cHVuYzogXCJcXFwiXCIsIHJlcGxhY2U6IFwiXCJ9LFxuICAgICAgICAgICAge3B1bmM6IFwiLFwiLCByZXBsYWNlOiBcIlwifSxcbiAgICAgICAgICAgIHtwdW5jOiBcIlxcKFxcXFx3XFwpXFxcXC5cXChcXFxcc1xcKVwiLCByZXBsYWNlOiBcIiQxJDJcIn0sXG4gICAgICAgICAgICB7cHVuYzogXCJcXFxcLlwiLCByZXBsYWNlOiBcIiBkb3QgXCJ9LFxuICAgICAgICAgICAge3B1bmM6IFwiIVwiLCByZXBsYWNlOiBcIlwifSxcbiAgICAgICAgICAgIHtwdW5jOiBcIlxcXFw/XCIsIHJlcGxhY2U6IFwiXCJ9XG4gICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5leCA9IHRoaXMuZXgucmVwbGFjZShuZXcgUmVnRXhwKGV4cHNbaV0ucHVuYywgXCJnXCIpLCBleHBzW2ldLnJlcGxhY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzcXVlZXplOiBmdW5jdGlvbihyYW5nZSkge1xuICAgICAgICBsZXQgY2hhcnMgPSBbLi4udGhpcy5leF07XG4gICAgICAgIGxldCByYW5nZVJlZ2V4cCA9IG5ldyBSZWdFeHAoYFske3JhbmdlfV1gLCBcImdcIik7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hhcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChjaGFyc1tqXSA9PT0gY2hhcnNbaisxXSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHJhbmdlID09PSB1bmRlZmluZWQgaS5lLiBmYWxzZVxuICAgICAgICAgICAgICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNbal0gPSBcIlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcnNbal0ubWF0Y2gocmFuZ2VSZWdleHApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzW2pdID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5leCA9IGNoYXJzLmpvaW4oXCJcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjaGFuZ2VNb25leTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBleHBzID0gW1xuICAgICAgICAgICAge3JlZ2V4OiAvXFwkKFxcZCspLihcXGRcXGQpL2csIHJlcGxhY2U6IFwiJDEgZG9sbGFycyAkMiBjZW50c1wifSxcbiAgICAgICAgICAgIHtyZWdleDogL1xcJChcXGQrKS9nLCByZXBsYWNlOiBcIiQxIGRvbGxhcnNcIn0sXG4gICAgICAgICAgICB7cmVnZXg6IC9cXOKCrChcXGQrKS4oXFxkXFxkKS9nLCByZXBsYWNlOiBcIiQxIGV1cm8gJDIgY2VudHNcIn0sXG4gICAgICAgICAgICB7cmVnZXg6IC9cXOKCrChcXGQrKS9nLCByZXBsYWNlOiBcIiQxIGV1cm9cIn0sXG4gICAgICAgICAgICB7cmVnZXg6IC9cXMKjKFxcZCspLihcXGRcXGQpL2csIHJlcGxhY2U6IFwiJDEgcG91bmRzICQyIHBlbmNlXCJ9LFxuICAgICAgICAgICAge3JlZ2V4OiAvXFzCoyhcXGQrKS9nLCByZXBsYWNlOiBcIiQxIHBvdW5kc1wifVxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZXggPSB0aGlzLmV4LnJlcGxhY2UobmV3IFJlZ0V4cChleHBzW2ldLnJlZ2V4KSwgZXhwc1tpXS5yZXBsYWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgdG9Vcmw6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAvLyBJIGRvbid0IGNhcmUgYWJvdXQgY2hhbmluZyB0aGlzLCBJIHdhbnQgdG8gYmUgYWJsZSB0byBjYWxsIGl0IGFsb25lIGFuZCBnZXQgdGhlIHN0cmluZyByZXR1cm5lZC5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHN0ci50cmltKCkpXG4gICAgICAgICAgICAuc3F1ZWV6ZShcIiBcIilcbiAgICAgICAgICAgIC5jb252ZXJ0TWlzY0NoYXIoKVxuICAgICAgICAgICAgLmNoYW5nZU1vbmV5KClcbiAgICAgICAgICAgIC5jb252ZXJ0UHVuY3R1YXRpb24oKVxuICAgICAgICAgICAgLnJlcGxhY2VXaGl0ZXNwYWNlKFwiLVwiKVxuICAgICAgICAgICAgLnNxdWVlemUoXCItXCIpICAgICAgICAgICAvLyBjbGVhbiB1cCBmb3IgdGhlIGNvbnZlcnQgZnVuY3Rpb25zXG4gICAgICAgICAgICAudmFsKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH0sXG5cbiAgICB2YWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leDtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgY2xhaXJleFxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NsYWlyZW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9