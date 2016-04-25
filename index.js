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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZmRjOGFjMzc1Nzc3ZTQzNTE2YyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhaXJlbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFJLFVBQVU7O0FBRVYsU0FBSSxFQUZNOztBQUlWLFVBQUssYUFBUyxHQUFULEVBQWM7QUFDZixjQUFLLEVBQUwsR0FBVSxHQUFWO0FBQ0EsZ0JBQU8sSUFBUDtBQUNILE1BUFM7O0FBU1Ysd0JBQW1CLDZCQUEyQjtBQUFBLGFBQWxCLFdBQWtCLHlEQUFKLEVBQUk7O0FBQzFDLGNBQUssRUFBTCxHQUFVLEtBQUssRUFBTCxDQUFRLE9BQVIsQ0FBZ0IsSUFBSSxNQUFKLENBQVcsS0FBWCxFQUFrQixHQUFsQixDQUFoQixFQUF3QyxXQUF4QyxDQUFWO0FBQ0EsZ0JBQU8sSUFBUDtBQUNILE1BWlM7O0FBY1Ysc0JBQWlCLDJCQUFXO0FBQ3hCLGFBQUksT0FBTyxDQUNQLEVBQUMsTUFBTSxJQUFQLEVBQWEsU0FBUyxLQUF0QixFQURPLEVBRVAsRUFBQyxNQUFNLElBQVAsRUFBYSxTQUFTLFNBQXRCLEVBRk8sRUFHUCxFQUFDLE1BQU0sSUFBUCxFQUFhLFNBQVMsVUFBdEIsRUFITyxFQUlQLEVBQUMsTUFBTSxRQUFQLEVBQWlCLFNBQVMsU0FBMUIsRUFKTyxF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S0FBSyxFQUFMLENBQVEsT0FBUixDQUFnQixJQUFJLE1BQUosQ0FBVyxLQUFLLENBQUwsRUFBUSxLQUFuQixDQUFoQixFQUEyQyxLQUFLLENBQUwsRUFBUSxPQUFuRCxDQUFWO0FBQ0g7QUFDRCxnQkFBTyxJQUFQO0FBQ0gsTUE5RVM7O0FBZ0ZWLFlBQU8sZUFBUyxHQUFULEVBQWM7O0FBRWpCLGdCQUFPLEtBQUssR0FBTCxDQUFTLElBQUksSUFBSixFQUFULEVBQ0YsT0FERSxDQUNNLEdBRE4sRUFFRixlQUZFLEdBR0YsV0FIRSxHQUlGLGtCQUpFLEdBS0YsaUJBTEUsQ0FLZ0IsR0FMaEIsRUFNRixPQU5FLENBTU0sR0FOTixDO0FBQUEsVUFPRixHQVBFLEdBUUYsV0FSRSxFQUFQO0FBU0gsTUEzRlM7O0FBNkZWLFVBQUssZUFBVztBQUNaLGdCQUFPLEtBQUssRUFBWjtBQUNIO0FBL0ZTLEVBQWQ7O1NBbUdJLE8sR0FBQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY2xhaXJleFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbGFpcmV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiZmRjOGFjMzc1Nzc3ZTQzNTE2Y1xuICoqLyIsImxldCBjbGFpcmV4ID0ge1xuXG4gICAgZXg6IFwiXCIsXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICB0aGlzLmV4ID0gc3RyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVwbGFjZVdoaXRlc3BhY2U6IGZ1bmN0aW9uKHJlcGxhY2VtZW50ID0gXCJcIikge1xuICAgICAgICB0aGlzLmV4ID0gdGhpcy5leC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcc1wiLCBcImdcIiksIHJlcGxhY2VtZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNvbnZlcnRNaXNjQ2hhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBleHBzID0gW1xuICAgICAgICAgICAge2NoYXI6IC8mL2csIHJlcGxhY2U6IFwiYW5kXCJ9LFxuICAgICAgICAgICAge2NoYXI6IC8jL2csIHJlcGxhY2U6IFwibnVtYmVyIFwifSxcbiAgICAgICAgICAgIHtjaGFyOiAvJS9nLCByZXBsYWNlOiBcIiBwZXJjZW50XCJ9LFxuICAgICAgICAgICAge2NoYXI6IC9cXC98XFxcXC9nLCByZXBsYWNlOiBcIiBzbGFzaCBcIn0sXG4gICAgICAgICAgICB7Y2hhcjogL1xcKi9nLCByZXBsYWNlOiBcIiBzdGFyIFwifSxcbiAgICAgICAgICAgIHtjaGFyOiAvQC9nLCByZXBsYWNlOiBcIiBhdCBcIn1cbiAgICAgICAgICAgIC8vIGJyYWNrZXRzXG4gICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5leCA9IHRoaXMuZXgucmVwbGFjZShuZXcgUmVnRXhwKGV4cHNbaV0uY2hhciksIGV4cHNbaV0ucmVwbGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNvbnZlcnRQdW5jdHVhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBleHBzID0gW1xuICAgICAgICAgICAge3B1bmM6IFwiXFxcXHt8XFxcXH1cIiwgcmVwbGFjZTogXCJicmFjZVwifSxcbiAgICAgICAgICAgIHtwdW5jOiBcIlxcXFwofFxcXFwpXCIsIHJlcGxhY2U6IFwiIGJyYWNrZXQgXCJ9LFxuICAgICAgICAgICAge3B1bmM6IFwiXFwnXCIsIHJlcGxhY2U6IFwiXCJ9LFxuICAgICAgICAgICAge3B1bmM6IFwiXFxcIlwiLCByZXBsYWNlOiBcIlwifSxcbiAgICAgICAgICAgIHtwdW5jOiBcIixcIiwgcmVwbGFjZTogXCJcIn0sXG4gICAgICAgICAgICB7cHVuYzogXCJcXChcXFxcd1xcKVxcXFwuXFwoXFxcXHNcXClcIiwgcmVwbGFjZTogXCIkMSQyXCJ9LFxuICAgICAgICAgICAge3B1bmM6IFwiXFxcXC5cIiwgcmVwbGFjZTogXCIgZG90IFwifSxcbiAgICAgICAgICAgIHtwdW5jOiBcIiFcIiwgcmVwbGFjZTogXCJcIn0sXG4gICAgICAgICAgICB7cHVuYzogXCJcXFxcP1wiLCByZXBsYWNlOiBcIlwifVxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZXggPSB0aGlzLmV4LnJlcGxhY2UobmV3IFJlZ0V4cChleHBzW2ldLnB1bmMsIFwiZ1wiKSwgZXhwc1tpXS5yZXBsYWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgc3F1ZWV6ZTogZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICAgICAgbGV0IGNoYXJzID0gWy4uLnRoaXMuZXhdO1xuICAgICAgICBsZXQgcmFuZ2VSZWdleHAgPSBuZXcgUmVnRXhwKGBbJHtyYW5nZX1dYCwgXCJnXCIpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoYXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoY2hhcnNbal0gPT09IGNoYXJzW2orMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBpZiByYW5nZSA9PT0gdW5kZWZpbmVkIGkuZS4gZmFsc2VcbiAgICAgICAgICAgICAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJzW2pdID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJzW2pdLm1hdGNoKHJhbmdlUmVnZXhwKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc1tqXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXggPSBjaGFycy5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY2hhbmdlTW9uZXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZXhwcyA9IFtcbiAgICAgICAgICAgIHtyZWdleDogL1xcJChcXGQrKS4oXFxkXFxkKS9nLCByZXBsYWNlOiBcIiQxIGRvbGxhcnMgJDIgY2VudHNcIn0sXG4gICAgICAgICAgICB7cmVnZXg6IC9cXCQoXFxkKykvZywgcmVwbGFjZTogXCIkMSBkb2xsYXJzXCJ9LFxuICAgICAgICAgICAge3JlZ2V4OiAvXFzigqwoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogXCIkMSBldXJvICQyIGNlbnRzXCJ9LFxuICAgICAgICAgICAge3JlZ2V4OiAvXFzigqwoXFxkKykvZywgcmVwbGFjZTogXCIkMSBldXJvXCJ9LFxuICAgICAgICAgICAge3JlZ2V4OiAvXFzCoyhcXGQrKS4oXFxkXFxkKS9nLCByZXBsYWNlOiBcIiQxIHBvdW5kcyAkMiBwZW5jZVwifSxcbiAgICAgICAgICAgIHtyZWdleDogL1xcwqMoXFxkKykvZywgcmVwbGFjZTogXCIkMSBwb3VuZHNcIn1cbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmV4ID0gdGhpcy5leC5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwc1tpXS5yZWdleCksIGV4cHNbaV0ucmVwbGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHRvVXJsOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgLy8gSSBkb24ndCBjYXJlIGFib3V0IGNoYW5pbmcgdGhpcywgSSB3YW50IHRvIGJlIGFibGUgdG8gY2FsbCBpdCBhbG9uZSBhbmQgZ2V0IHRoZSBzdHJpbmcgcmV0dXJuZWQuXG4gICAgICAgIHJldHVybiB0aGlzLnNldChzdHIudHJpbSgpKVxuICAgICAgICAgICAgLnNxdWVlemUoXCIgXCIpXG4gICAgICAgICAgICAuY29udmVydE1pc2NDaGFyKClcbiAgICAgICAgICAgIC5jaGFuZ2VNb25leSgpXG4gICAgICAgICAgICAuY29udmVydFB1bmN0dWF0aW9uKClcbiAgICAgICAgICAgIC5yZXBsYWNlV2hpdGVzcGFjZShcIi1cIilcbiAgICAgICAgICAgIC5zcXVlZXplKFwiLVwiKSAgICAgICAgICAgLy8gY2xlYW4gdXAgZm9yIHRoZSBjb252ZXJ0IGZ1bmN0aW9uc1xuICAgICAgICAgICAgLnZhbCgpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuXG4gICAgdmFsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXg7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGNsYWlyZXhcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jbGFpcmVuZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==