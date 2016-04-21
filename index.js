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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var getFoo = function getFoo() {
	  return 42;
	};
	
	var replaceWhitespace = function replaceWhitespace(str) {
	  var replacement = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	  return str.replace(new RegExp('\\s', 'g'), replacement);
	};
	
	var convertMiscChar = function convertMiscChar(str) {
	  var exps = [{ char: /&/g, replace: 'and' }, { char: /#/g, replace: 'number ' }, { char: /%/g, replace: ' percent' }, { char: /\/|\\/g, replace: ' slash ' }, { char: /\*/g, replace: ' star ' }, { char: /@/g, replace: ' at ' }
	  // brackets
	  ];
	  for (var i = 0; i < exps.length; i++) {
	    str = str.replace(new RegExp(exps[i].char), exps[i].replace);
	  }
	  return str;
	};
	
	var convertPunctuation = function convertPunctuation(str) {
	  var exps = [{ punc: '\\{|\\}', replace: 'brace' }, { punc: '\\(|\\)', replace: ' bracket ' }, { punc: '\'', replace: '' }, { punc: '"', replace: '' }, { punc: ',', replace: '' }, { punc: '\(\\w\)\\.\(\\s\)', replace: '$1$2' }, { punc: '\\.', replace: ' dot ' }, { punc: '!', replace: '' }, { punc: '\\?', replace: '' }];
	  for (var i = 0; i < exps.length; i++) {
	    str = str.replace(new RegExp(exps[i].punc, 'g'), exps[i].replace);
	  }
	  return str;
	};
	
	var squeeze = function squeeze(str, range) {
	  var chars = [].concat(_toConsumableArray(str));
	  var rangeRegexp = new RegExp('[' + range + ']', 'g');
	  for (var j = 0; j < chars.length; j++) {
	    if (chars[j] === chars[j + 1]) {
	      // if range === undefined i.e. false
	      if (!range) {
	        chars[j] = '';
	      } else if (chars[j].match(rangeRegexp)) {
	        chars[j] = '';
	      }
	    }
	  }
	  return chars.join('');
	};
	
	var changeMoney = function changeMoney(str) {
	  var exps = [{ regex: /\$(\d+).(\d\d)/g, replace: '$1 dollars $2 cents' }, { regex: /\$(\d+)/g, replace: '$1 dollars' }, { regex: /\€(\d+).(\d\d)/g, replace: '$1 euro $2 cents' }, { regex: /\€(\d+)/g, replace: '$1 euro' }, { regex: /\£(\d+).(\d\d)/g, replace: '$1 pounds $2 pence' }, { regex: /\£(\d+)/g, replace: '$1 pounds' }];
	  for (var i = 0; i < exps.length; i++) {
	    str = str.replace(new RegExp(exps[i].regex), exps[i].replace);
	  }
	  return str;
	};
	
	var toUrl = function toUrl(str) {
	  return replaceWhitespace(changeMoney(convertPunctuation(convertMiscChar(squeeze(str.trim(), ' ')))), '-').toLowerCase();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZWY1NjNmM2JhNjg3OWU1ZjM5OCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSSxTQUFTLFNBQVQsTUFBUztVQUFNO0VBQU47O0FBRWIsS0FBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQUMsR0FBRCxFQUEyQjtPQUFyQixvRUFBYyxrQkFBTzs7QUFDakQsVUFBTyxJQUFJLE9BQUosQ0FBWSxJQUFJLE1BQUosQ0FBVyxLQUFYLEVBQWtCLEdBQWxCLENBQVosRUFBb0MsV0FBcEMsQ0FBUCxDQURpRDtFQUEzQjs7QUFJeEIsS0FBSSxrQkFBa0IsU0FBbEIsZUFBa0IsTUFBTztBQUMzQixPQUFJLE9BQU8sQ0FDVCxFQUFDLE1BQU0sSUFBTixFQUFZLFNBQVMsS0FBVCxFQURKLEVBRVQsRUFBQyxNQUFNLElBQU4sRUFBWSxTQUFTLFNBQVQsRUFGSixFQUdULEVBQUMsTUFBTSxJQUFOLEVBQVksU0FBUyxVQUFULEVBSEosRUFJVCxFQUFDLE1BQU0sUUFBTixFQUFnQixTQUFTLFNBQVQsRUFKUixFQUtULEVBQUMsTUFBTSxLQUFOLEVBQWEsU0FBUyxRQUFULEVBTEwsRUFNVCxFQUFD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RFY7TUFBakI7QUFHQSxZQUFPLElBQVAsQ0FKNEM7RUFBWDs7QUFPckMsZ0JBQWUsU0FBZixDQUF5QixPQUF6QixHQUFtQyxZQUFXO0FBQzFDLFNBQUksS0FBSyxNQUFMLEVBQWE7QUFDYixjQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsQ0FBWSxXQUFaLEVBQWQsQ0FEYTtNQUFqQjtBQUdBLFlBQU8sSUFBUCxDQUowQztFQUFYOztTQVEvQjtTQUNBLGdDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY2xhaXJleFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjbGFpcmV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzZWY1NjNmM2JhNjg3OWU1ZjM5OFxuICoqLyIsImxldCBnZXRGb28gPSAoKSA9PiA0MjtcblxubGV0IHJlcGxhY2VXaGl0ZXNwYWNlID0gKHN0ciwgcmVwbGFjZW1lbnQgPSAnJykgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxcXHMnLCAnZycpLCByZXBsYWNlbWVudCk7XG59XG5cbmxldCBjb252ZXJ0TWlzY0NoYXIgPSBzdHIgPT4ge1xuICBsZXQgZXhwcyA9IFtcbiAgICB7Y2hhcjogLyYvZywgcmVwbGFjZTogJ2FuZCd9LFxuICAgIHtjaGFyOiAvIy9nLCByZXBsYWNlOiAnbnVtYmVyICd9LFxuICAgIHtjaGFyOiAvJS9nLCByZXBsYWNlOiAnIHBlcmNlbnQnfSxcbiAgICB7Y2hhcjogL1xcL3xcXFxcL2csIHJlcGxhY2U6ICcgc2xhc2ggJ30sXG4gICAge2NoYXI6IC9cXCovZywgcmVwbGFjZTogJyBzdGFyICd9LFxuICAgIHtjaGFyOiAvQC9nLCByZXBsYWNlOiAnIGF0ICd9XG4gICAgLy8gYnJhY2tldHNcbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChleHBzW2ldLmNoYXIpLCBleHBzW2ldLnJlcGxhY2UpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmxldCBjb252ZXJ0UHVuY3R1YXRpb24gPSBzdHIgPT4ge1xuICBsZXQgZXhwcyA9IFtcbiAgICB7cHVuYzogJ1xcXFx7fFxcXFx9JywgcmVwbGFjZTogJ2JyYWNlJ30sXG4gICAge3B1bmM6ICdcXFxcKHxcXFxcKScsIHJlcGxhY2U6ICcgYnJhY2tldCAnfSxcbiAgICB7cHVuYzogJ1xcJycsIHJlcGxhY2U6ICcnfSxcbiAgICB7cHVuYzogJ1wiJywgcmVwbGFjZTogJyd9LFxuICAgIHtwdW5jOiAnLCcsIHJlcGxhY2U6ICcnfSxcbiAgICB7cHVuYzogJ1xcKFxcXFx3XFwpXFxcXC5cXChcXFxcc1xcKScsIHJlcGxhY2U6ICckMSQyJ30sXG4gICAge3B1bmM6ICdcXFxcLicsIHJlcGxhY2U6ICcgZG90ICd9LFxuICAgIHtwdW5jOiAnIScsIHJlcGxhY2U6ICcnfSxcbiAgICB7cHVuYzogJ1xcXFw/JywgcmVwbGFjZTogJyd9XG4gIF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwc1tpXS5wdW5jLCAnZycpLCBleHBzW2ldLnJlcGxhY2UpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmxldCBzcXVlZXplID0gKHN0ciwgcmFuZ2UpID0+IHtcbiAgbGV0IGNoYXJzID0gWy4uLnN0cl07XG4gIGxldCByYW5nZVJlZ2V4cCA9IG5ldyBSZWdFeHAoYFske3JhbmdlfV1gLCAnZycpO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IGNoYXJzLmxlbmd0aDsgaisrKSB7XG4gICAgaWYgKGNoYXJzW2pdID09PSBjaGFyc1tqKzFdKSB7XG4gICAgICAvLyBpZiByYW5nZSA9PT0gdW5kZWZpbmVkIGkuZS4gZmFsc2VcbiAgICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgY2hhcnNbal0gPSAnJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhcnNbal0ubWF0Y2gocmFuZ2VSZWdleHApKSB7XG4gICAgICAgIGNoYXJzW2pdID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjaGFycy5qb2luKCcnKTtcbn1cblxubGV0IGNoYW5nZU1vbmV5ID0gc3RyID0+IHtcbiAgbGV0IGV4cHMgPSBbXG4gICAge3JlZ2V4OiAvXFwkKFxcZCspLihcXGRcXGQpL2csIHJlcGxhY2U6ICckMSBkb2xsYXJzICQyIGNlbnRzJ30sXG4gICAge3JlZ2V4OiAvXFwkKFxcZCspL2csIHJlcGxhY2U6ICckMSBkb2xsYXJzJ30sXG4gICAge3JlZ2V4OiAvXFzigqwoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogJyQxIGV1cm8gJDIgY2VudHMnfSxcbiAgICB7cmVnZXg6IC9cXOKCrChcXGQrKS9nLCByZXBsYWNlOiAnJDEgZXVybyd9LFxuICAgIHtyZWdleDogL1xcwqMoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogJyQxIHBvdW5kcyAkMiBwZW5jZSd9LFxuICAgIHtyZWdleDogL1xcwqMoXFxkKykvZywgcmVwbGFjZTogJyQxIHBvdW5kcyd9XG4gIF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwc1tpXS5yZWdleCksIGV4cHNbaV0ucmVwbGFjZSk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxubGV0IHRvVXJsID0gc3RyID0+IHJlcGxhY2VXaGl0ZXNwYWNlKGNoYW5nZU1vbmV5KGNvbnZlcnRQdW5jdHVhdGlvbihjb252ZXJ0TWlzY0NoYXIoc3F1ZWV6ZShzdHIudHJpbSgpLCcgJykpKSksICctJykudG9Mb3dlckNhc2UoKTtcblxuZXhwb3J0IHsgZ2V0Rm9vLCB0b1VybCwgc3F1ZWV6ZSwgY2hhbmdlTW9uZXksIHJlcGxhY2VXaGl0ZXNwYWNlLCBjb252ZXJ0TWlzY0NoYXIsIGNvbnZlcnRQdW5jdHVhdGlvbiB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsImxldCBjaGFpbk9iaiA9IHtcbiAgICBwaHJhc2U6IFwiXCIsXG5cbiAgICBzaG91dEl0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGhyYXNlKSB7XG4gICAgICAgICAgICB0aGlzLnBocmFzZSA9IHRoaXMucGhyYXNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG1ha2VJdFJlZDogZnVuY3Rpb24obm91bikge1xuICAgICAgICB0aGlzLnBocmFzZSA9IFwicmVkIFwiICsgbm91bjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHZhbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0bXAgPSB0aGlzLnBocmFzZTtcbiAgICAgICAgdGhpcy5waHJhc2UgPSBcIlwiO1xuICAgICAgICByZXR1cm4gdG1wO1xuICAgIH1cbn1cblxubGV0IENoYWluUHJvdG90eXBlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5waHJhc2UgPSBcIlwiO1xufVxuXG5DaGFpblByb3RvdHlwZS5wcm90b3R5cGUuc2V0UGhyYXNlID0gZnVuY3Rpb24obm91bikge1xuICAgIHRoaXMucGhyYXNlID0gbm91bjtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbkNoYWluUHJvdG90eXBlLnByb3RvdHlwZS5tYWtlSXRSZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5waHJhc2UpIHtcbiAgICAgICAgdGhpcy5waHJhc2UgPSBcInJlZCBcIiArIHRoaXMucGhyYXNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbkNoYWluUHJvdG90eXBlLnByb3RvdHlwZS5zaG91dEl0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucGhyYXNlKSB7XG4gICAgICAgIHRoaXMucGhyYXNlID0gdGhpcy5waHJhc2UudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnQge1xuICAgIGNoYWluT2JqLFxuICAgIENoYWluUHJvdG90eXBlXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY2hhaW4uanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9