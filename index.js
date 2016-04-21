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
	
	var getFoo = function getFoo() {
	    return 42;
	};
	
	var replaceWhitespace = function replaceWhitespace(str) {
	    var replacement = arguments.length <= 1 || arguments[1] === undefined ? "" : arguments[1];
	
	    return str.replace(new RegExp("\\s", "g"), replacement);
	};
	
	var convertMiscChar = function convertMiscChar(str) {
	    var exps = [{ char: /&/g, replace: "and" }, { char: /#/g, replace: "number " }, { char: /%/g, replace: " percent" }, { char: /\/|\\/g, replace: " slash " }, { char: /\*/g, replace: " star " }, { char: /@/g, replace: " at " }
	    // brackets
	    ];
	    for (var i = 0; i < exps.length; i++) {
	        str = str.replace(new RegExp(exps[i].char), exps[i].replace);
	    }
	    return str;
	};
	
	var convertPunctuation = function convertPunctuation(str) {
	    var exps = [{ punc: "\\{|\\}", replace: "brace" }, { punc: "\\(|\\)", replace: " bracket " }, { punc: "\'", replace: "" }, { punc: "\"", replace: "" }, { punc: ",", replace: "" }, { punc: "\(\\w\)\\.\(\\s\)", replace: "$1$2" }, { punc: "\\.", replace: " dot " }, { punc: "!", replace: "" }, { punc: "\\?", replace: "" }];
	    for (var i = 0; i < exps.length; i++) {
	        str = str.replace(new RegExp(exps[i].punc, "g"), exps[i].replace);
	    }
	    return str;
	};
	
	var squeeze = function squeeze(str, range) {
	    var chars = [].concat(_toConsumableArray(str));
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
	    return chars.join("");
	};
	
	var changeMoney = function changeMoney(str) {
	    var exps = [{ regex: /\$(\d+).(\d\d)/g, replace: "$1 dollars $2 cents" }, { regex: /\$(\d+)/g, replace: "$1 dollars" }, { regex: /\€(\d+).(\d\d)/g, replace: "$1 euro $2 cents" }, { regex: /\€(\d+)/g, replace: "$1 euro" }, { regex: /\£(\d+).(\d\d)/g, replace: "$1 pounds $2 pence" }, { regex: /\£(\d+)/g, replace: "$1 pounds" }];
	    for (var i = 0; i < exps.length; i++) {
	        str = str.replace(new RegExp(exps[i].regex), exps[i].replace);
	    }
	    return str;
	};
	
	var toUrl = function toUrl(str) {
	    return replaceWhitespace(changeMoney(convertPunctuation(convertMiscChar(squeeze(str.trim(), " ")))), "-").toLowerCase();
	};
	
	exports.getFoo = getFoo;
	exports.toUrl = toUrl;
	exports.squeeze = squeeze;
	exports.changeMoney = changeMoney;
	exports.replaceWhitespace = replaceWhitespace;
	exports.convertMiscChar = convertMiscChar;
	exports.convertPunctuation = convertPunctuation;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var chainObj = {
	    phrase: "",
	
	    shoutIt: function shoutIt() {
	        if (this.phrase) {
	            this.phrase = this.phrase.toUpperCase();
	        }
	        return this;
	    },
	
	    makeItRed: function makeItRed(noun) {
	        this.phrase = "red " + noun;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMzY2ZmIxZTA0OGYyOGY4YzYyNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSSxTQUFTLFNBQVQsTUFBUztZQUFNO0VBQU47O0FBRWIsS0FBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQUMsR0FBRCxFQUEyQjtTQUFyQixvRUFBYyxrQkFBTzs7QUFDL0MsWUFBTyxJQUFJLE9BQUosQ0FBWSxJQUFJLE1BQUosQ0FBVyxLQUFYLEVBQWtCLEdBQWxCLENBQVosRUFBb0MsV0FBcEMsQ0FBUCxDQUQrQztFQUEzQjs7QUFJeEIsS0FBSSxrQkFBa0IsU0FBbEIsZUFBa0IsTUFBTztBQUN6QixTQUFJLE9BQU8sQ0FDUCxFQUFDLE1BQU0sSUFBTixFQUFZLFNBQVMsS0FBVCxFQUROLEVBRVAsRUFBQyxNQUFNLElBQU4sRUFBWSxTQUFTLFNBQVQsRUFGTixFQUdQLEVBQUMsTUFBTSxJQUFOLEVBQVksU0FBUyxVQUFULEVBSE4sRUFJUCxFQUFDLE1BQU0sUUFBTixFQUFnQixTQUFTLFNBQVQsRUFKVixFQUtQLEVBQUMsTUFBTSxLQUFOLEVBQWEsU0FBUyxRQUFULEVBTFAsRUFNUCxFQUFD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RFY7TUFBakI7QUFHQSxZQUFPLElBQVAsQ0FKNEM7RUFBWDs7QUFPckMsZ0JBQWUsU0FBZixDQUF5QixPQUF6QixHQUFtQyxZQUFXO0FBQzFDLFNBQUksS0FBSyxNQUFMLEVBQWE7QUFDYixjQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsQ0FBWSxXQUFaLEVBQWQsQ0FEYTtNQUFqQjtBQUdBLFlBQU8sSUFBUCxDQUowQztFQUFYOztTQVEvQjtTQUNBLGdDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY2xhaXJleFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbGFpcmV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlMzY2ZmIxZTA0OGYyOGY4YzYyN1xuICoqLyIsImxldCBnZXRGb28gPSAoKSA9PiA0MjtcblxubGV0IHJlcGxhY2VXaGl0ZXNwYWNlID0gKHN0ciwgcmVwbGFjZW1lbnQgPSBcIlwiKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcc1wiLCBcImdcIiksIHJlcGxhY2VtZW50KTtcbn07XG5cbmxldCBjb252ZXJ0TWlzY0NoYXIgPSBzdHIgPT4ge1xuICAgIGxldCBleHBzID0gW1xuICAgICAgICB7Y2hhcjogLyYvZywgcmVwbGFjZTogXCJhbmRcIn0sXG4gICAgICAgIHtjaGFyOiAvIy9nLCByZXBsYWNlOiBcIm51bWJlciBcIn0sXG4gICAgICAgIHtjaGFyOiAvJS9nLCByZXBsYWNlOiBcIiBwZXJjZW50XCJ9LFxuICAgICAgICB7Y2hhcjogL1xcL3xcXFxcL2csIHJlcGxhY2U6IFwiIHNsYXNoIFwifSxcbiAgICAgICAge2NoYXI6IC9cXCovZywgcmVwbGFjZTogXCIgc3RhciBcIn0sXG4gICAgICAgIHtjaGFyOiAvQC9nLCByZXBsYWNlOiBcIiBhdCBcIn1cbiAgICAgICAgLy8gYnJhY2tldHNcbiAgICBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGV4cHNbaV0uY2hhciksIGV4cHNbaV0ucmVwbGFjZSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59O1xuXG5sZXQgY29udmVydFB1bmN0dWF0aW9uID0gc3RyID0+IHtcbiAgICBsZXQgZXhwcyA9IFtcbiAgICAgICAge3B1bmM6IFwiXFxcXHt8XFxcXH1cIiwgcmVwbGFjZTogXCJicmFjZVwifSxcbiAgICAgICAge3B1bmM6IFwiXFxcXCh8XFxcXClcIiwgcmVwbGFjZTogXCIgYnJhY2tldCBcIn0sXG4gICAgICAgIHtwdW5jOiBcIlxcJ1wiLCByZXBsYWNlOiBcIlwifSxcbiAgICAgICAge3B1bmM6IFwiXFxcIlwiLCByZXBsYWNlOiBcIlwifSxcbiAgICAgICAge3B1bmM6IFwiLFwiLCByZXBsYWNlOiBcIlwifSxcbiAgICAgICAge3B1bmM6IFwiXFwoXFxcXHdcXClcXFxcLlxcKFxcXFxzXFwpXCIsIHJlcGxhY2U6IFwiJDEkMlwifSxcbiAgICAgICAge3B1bmM6IFwiXFxcXC5cIiwgcmVwbGFjZTogXCIgZG90IFwifSxcbiAgICAgICAge3B1bmM6IFwiIVwiLCByZXBsYWNlOiBcIlwifSxcbiAgICAgICAge3B1bmM6IFwiXFxcXD9cIiwgcmVwbGFjZTogXCJcIn1cbiAgICBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGV4cHNbaV0ucHVuYywgXCJnXCIpLCBleHBzW2ldLnJlcGxhY2UpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcblxubGV0IHNxdWVlemUgPSAoc3RyLCByYW5nZSkgPT4ge1xuICAgIGxldCBjaGFycyA9IFsuLi5zdHJdO1xuICAgIGxldCByYW5nZVJlZ2V4cCA9IG5ldyBSZWdFeHAoYFske3JhbmdlfV1gLCBcImdcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGFycy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoY2hhcnNbal0gPT09IGNoYXJzW2orMV0pIHtcbiAgICAgICAgICAgIC8vIGlmIHJhbmdlID09PSB1bmRlZmluZWQgaS5lLiBmYWxzZVxuICAgICAgICAgICAgaWYgKCFyYW5nZSkge1xuICAgICAgICAgICAgICAgIGNoYXJzW2pdID0gXCJcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcnNbal0ubWF0Y2gocmFuZ2VSZWdleHApKSB7XG4gICAgICAgICAgICAgICAgY2hhcnNbal0gPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKFwiXCIpO1xufTtcblxubGV0IGNoYW5nZU1vbmV5ID0gc3RyID0+IHtcbiAgICBsZXQgZXhwcyA9IFtcbiAgICAgICAge3JlZ2V4OiAvXFwkKFxcZCspLihcXGRcXGQpL2csIHJlcGxhY2U6IFwiJDEgZG9sbGFycyAkMiBjZW50c1wifSxcbiAgICAgICAge3JlZ2V4OiAvXFwkKFxcZCspL2csIHJlcGxhY2U6IFwiJDEgZG9sbGFyc1wifSxcbiAgICAgICAge3JlZ2V4OiAvXFzigqwoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogXCIkMSBldXJvICQyIGNlbnRzXCJ9LFxuICAgICAgICB7cmVnZXg6IC9cXOKCrChcXGQrKS9nLCByZXBsYWNlOiBcIiQxIGV1cm9cIn0sXG4gICAgICAgIHtyZWdleDogL1xcwqMoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogXCIkMSBwb3VuZHMgJDIgcGVuY2VcIn0sXG4gICAgICAgIHtyZWdleDogL1xcwqMoXFxkKykvZywgcmVwbGFjZTogXCIkMSBwb3VuZHNcIn1cbiAgICBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGV4cHNbaV0ucmVnZXgpLCBleHBzW2ldLnJlcGxhY2UpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcblxubGV0IHRvVXJsID0gc3RyID0+IHJlcGxhY2VXaGl0ZXNwYWNlKGNoYW5nZU1vbmV5KGNvbnZlcnRQdW5jdHVhdGlvbihjb252ZXJ0TWlzY0NoYXIoc3F1ZWV6ZShzdHIudHJpbSgpLFwiIFwiKSkpKSwgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG5cbmV4cG9ydCB7XG4gICAgZ2V0Rm9vLFxuICAgIHRvVXJsLCBcbiAgICBzcXVlZXplLCBcbiAgICBjaGFuZ2VNb25leSwgXG4gICAgcmVwbGFjZVdoaXRlc3BhY2UsIFxuICAgIGNvbnZlcnRNaXNjQ2hhcixcbiAgICBjb252ZXJ0UHVuY3R1YXRpb24gXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJsZXQgY2hhaW5PYmogPSB7XG4gICAgcGhyYXNlOiBcIlwiLFxuXG4gICAgc2hvdXRJdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBocmFzZSkge1xuICAgICAgICAgICAgdGhpcy5waHJhc2UgPSB0aGlzLnBocmFzZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBtYWtlSXRSZWQ6IGZ1bmN0aW9uKG5vdW4pIHtcbiAgICAgICAgdGhpcy5waHJhc2UgPSBcInJlZCBcIiArIG5vdW47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICB2YWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdG1wID0gdGhpcy5waHJhc2U7XG4gICAgICAgIHRoaXMucGhyYXNlID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIHRtcDtcbiAgICB9XG59O1xuXG5sZXQgQ2hhaW5Qcm90b3R5cGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBocmFzZSA9IFwiXCI7XG59O1xuXG5DaGFpblByb3RvdHlwZS5wcm90b3R5cGUuc2V0UGhyYXNlID0gZnVuY3Rpb24obm91bikge1xuICAgIHRoaXMucGhyYXNlID0gbm91bjtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbkNoYWluUHJvdG90eXBlLnByb3RvdHlwZS5tYWtlSXRSZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5waHJhc2UpIHtcbiAgICAgICAgdGhpcy5waHJhc2UgPSBcInJlZCBcIiArIHRoaXMucGhyYXNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbkNoYWluUHJvdG90eXBlLnByb3RvdHlwZS5zaG91dEl0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucGhyYXNlKSB7XG4gICAgICAgIHRoaXMucGhyYXNlID0gdGhpcy5waHJhc2UudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnQge1xuICAgIGNoYWluT2JqLFxuICAgIENoYWluUHJvdG90eXBlXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NoYWluLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==