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
	  var exps = [{ punc: '\\{|\\}', replace: 'brace' }, { punc: '\\(|\\)', replace: ' bracket ' }, { punc: '\'', replace: '' }, { punc: '"', replace: '' }, { punc: ',', replace: '' }, { punc: '!', replace: '' }, { punc: '\\?', replace: '' }];
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
	  return replaceWhitespace(changeMoney(convertPunctuation(convertMiscChar(str.trim()))), '-').toLowerCase();
	};
	
	exports.getFoo = getFoo;
	exports.toUrl = toUrl;
	exports.squeeze = squeeze;
	exports.changeMoney = changeMoney;
	exports.replaceWhitespace = replaceWhitespace;
	exports.convertMiscChar = convertMiscChar;
	exports.convertPunctuation = convertPunctuation;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5NTYxMTBlOGNjMGQxOGNlNWE2MiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSSxTQUFTLFNBQVQsTUFBUztVQUFNO0VBQU47O0FBRWIsS0FBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQUMsR0FBRCxFQUEyQjtPQUFyQixvRUFBYyxrQkFBTzs7QUFDakQsVUFBTyxJQUFJLE9BQUosQ0FBWSxJQUFJLE1BQUosQ0FBVyxLQUFYLEVBQWtCLEdBQWxCLENBQVosRUFBb0MsV0FBcEMsQ0FBUCxDQURpRDtFQUEzQjs7QUFJeEIsS0FBSSxrQkFBa0IsU0FBbEIsZUFBa0IsTUFBTztBQUMzQixPQUFJLE9BQU8sQ0FDVCxFQUFDLE1BQU0sSUFBTixFQUFZLFNBQVMsS0FBVCxFQURKLEVBRVQsRUFBQyxNQUFNLElBQU4sRUFBWSxTQUFTLFNBQVQsRUFGSixFQUdULEVBQUMsTUFBTSxJQUFOLEVBQVksU0FBUyxVQUFULEVBSEosRUFJVCxFQUFDLE1BQU0sUUFBTixFQUFnQixTQUFTLFNBQVQsRUFKUixFQUtULEVBQUMsTUFBTSxLQUFOLEVBQWEsU0FBUyxRQUFULEVBTEwsRUFNVCxFQUFDLE1BQU0sSUFBTixFQUFZLFNBQVMsTUFBVDs7QUFOSixJQUFQ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LElBQUksSUFBSixFQUFoQixDQUFuQixDQUFaLENBQWxCLEVBQWdGLEdBQWhGLEVBQXFGLFdBQXJGO0VBQVA7O1NBRUg7U0FBUTtTQUFPO1NBQVM7U0FBYTtTQUFtQjtTQUFpQix3QyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImNsYWlyZXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY2xhaXJleFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOTU2MTEwZThjYzBkMThjZTVhNjJcbiAqKi8iLCJsZXQgZ2V0Rm9vID0gKCkgPT4gNDI7XG5cbmxldCByZXBsYWNlV2hpdGVzcGFjZSA9IChzdHIsIHJlcGxhY2VtZW50ID0gJycpID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcXFxzJywgJ2cnKSwgcmVwbGFjZW1lbnQpO1xufVxuXG5sZXQgY29udmVydE1pc2NDaGFyID0gc3RyID0+IHtcbiAgbGV0IGV4cHMgPSBbXG4gICAge2NoYXI6IC8mL2csIHJlcGxhY2U6ICdhbmQnfSxcbiAgICB7Y2hhcjogLyMvZywgcmVwbGFjZTogJ251bWJlciAnfSxcbiAgICB7Y2hhcjogLyUvZywgcmVwbGFjZTogJyBwZXJjZW50J30sXG4gICAge2NoYXI6IC9cXC98XFxcXC9nLCByZXBsYWNlOiAnIHNsYXNoICd9LFxuICAgIHtjaGFyOiAvXFwqL2csIHJlcGxhY2U6ICcgc3RhciAnfSxcbiAgICB7Y2hhcjogL0AvZywgcmVwbGFjZTogJyBhdCAnfVxuICAgIC8vIGJyYWNrZXRzXG4gIF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwc1tpXS5jaGFyKSwgZXhwc1tpXS5yZXBsYWNlKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG5sZXQgY29udmVydFB1bmN0dWF0aW9uID0gc3RyID0+IHtcbiAgbGV0IGV4cHMgPSBbXG4gICAge3B1bmM6ICdcXFxce3xcXFxcfScsIHJlcGxhY2U6ICdicmFjZSd9LFxuICAgIHtwdW5jOiAnXFxcXCh8XFxcXCknLCByZXBsYWNlOiAnIGJyYWNrZXQgJ30sXG4gICAge3B1bmM6ICdcXCcnLCByZXBsYWNlOiAnJ30sXG4gICAge3B1bmM6ICdcIicsIHJlcGxhY2U6ICcnfSxcbiAgICB7cHVuYzogJywnLCByZXBsYWNlOiAnJ30sXG4gICAge3B1bmM6ICchJywgcmVwbGFjZTogJyd9LFxuICAgIHtwdW5jOiAnXFxcXD8nLCByZXBsYWNlOiAnJ31cbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChleHBzW2ldLnB1bmMsICdnJyksIGV4cHNbaV0ucmVwbGFjZSk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxubGV0IHNxdWVlemUgPSAoc3RyLCByYW5nZSkgPT4ge1xuICBsZXQgY2hhcnMgPSBbLi4uc3RyXTtcbiAgbGV0IHJhbmdlUmVnZXhwID0gbmV3IFJlZ0V4cChgWyR7cmFuZ2V9XWAsICdnJyk7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgY2hhcnMubGVuZ3RoOyBqKyspIHtcbiAgICBpZiAoY2hhcnNbal0gPT09IGNoYXJzW2orMV0pIHtcbiAgICAgIC8vIGlmIHJhbmdlID09PSB1bmRlZmluZWQgaS5lLiBmYWxzZVxuICAgICAgaWYgKCFyYW5nZSkge1xuICAgICAgICBjaGFyc1tqXSA9ICcnO1xuICAgICAgfSBlbHNlIGlmIChjaGFyc1tqXS5tYXRjaChyYW5nZVJlZ2V4cCkpIHtcbiAgICAgICAgY2hhcnNbal0gPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xufVxuXG5sZXQgY2hhbmdlTW9uZXkgPSBzdHIgPT4ge1xuICBsZXQgZXhwcyA9IFtcbiAgICB7cmVnZXg6IC9cXCQoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogJyQxIGRvbGxhcnMgJDIgY2VudHMnfSxcbiAgICB7cmVnZXg6IC9cXCQoXFxkKykvZywgcmVwbGFjZTogJyQxIGRvbGxhcnMnfSxcbiAgICB7cmVnZXg6IC9cXOKCrChcXGQrKS4oXFxkXFxkKS9nLCByZXBsYWNlOiAnJDEgZXVybyAkMiBjZW50cyd9LFxuICAgIHtyZWdleDogL1xc4oKsKFxcZCspL2csIHJlcGxhY2U6ICckMSBldXJvJ30sXG4gICAge3JlZ2V4OiAvXFzCoyhcXGQrKS4oXFxkXFxkKS9nLCByZXBsYWNlOiAnJDEgcG91bmRzICQyIHBlbmNlJ30sXG4gICAge3JlZ2V4OiAvXFzCoyhcXGQrKS9nLCByZXBsYWNlOiAnJDEgcG91bmRzJ31cbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHBzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChleHBzW2ldLnJlZ2V4KSwgZXhwc1tpXS5yZXBsYWNlKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG5sZXQgdG9VcmwgPSBzdHIgPT4gcmVwbGFjZVdoaXRlc3BhY2UoY2hhbmdlTW9uZXkoY29udmVydFB1bmN0dWF0aW9uKGNvbnZlcnRNaXNjQ2hhcihzdHIudHJpbSgpKSkpLCAnLScpLnRvTG93ZXJDYXNlKCk7XG5cbmV4cG9ydCB7IGdldEZvbywgdG9VcmwsIHNxdWVlemUsIGNoYW5nZU1vbmV5LCByZXBsYWNlV2hpdGVzcGFjZSwgY29udmVydE1pc2NDaGFyLCBjb252ZXJ0UHVuY3R1YXRpb24gfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9