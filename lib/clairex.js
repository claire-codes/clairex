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
	  return convertPunctuation(convertMiscChar(replaceWhitespace(str.trim(), '-'))).toLowerCase();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjOTZjMTJhMjUwYzVkYzI5Yzk1MyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSSxTQUFTLFNBQVQsTUFBUztVQUFNO0VBQU47O0FBRWIsS0FBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQUMsR0FBRCxFQUEyQjtPQUFyQixvRUFBYyxrQkFBTzs7QUFDakQsVUFBTyxJQUFJLE9BQUosQ0FBWSxJQUFJLE1BQUosQ0FBVyxLQUFYLEVBQWtCLEdBQWxCLENBQVosRUFBb0MsV0FBcEMsQ0FBUCxDQURpRDtFQUEzQjs7QUFJeEIsS0FBSSxrQkFBa0IsU0FBbEIsZUFBa0IsTUFBTztBQUMzQixPQUFJLE9BQU8sQ0FDVCxFQUFDLE1BQU0sSUFBTixFQUFZLFNBQVMsS0FBVCxFQURKLEVBRVQsRUFBQyxNQUFNLElBQU4sRUFBWSxTQUFTLFNBQVQsRUFGSixFQUdULEVBQUMsTUFBTSxJQUFOLEVBQVksU0FBUyxVQUFULEVBSEosRUFJVCxFQUFDLE1BQU0sUUFBTixFQUFnQixTQUFTLFNBQVQsRUFKUixFQUtULEVBQUMsTUFBTSxLQUFOLEVBQWEsU0FBUyxRQUFULEVBTEwsRUFNVCxFQUFDLE1BQU0sSUFBTixFQUFZLFNBQVMsTUFBVDs7QUFOSixJQUFQ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LElBQUosRUFBbEIsRUFBOEIsR0FBOUIsQ0FBaEIsQ0FBbkIsRUFBd0UsV0FBeEU7RUFBUDs7U0FFSDtTQUFRO1NBQU87U0FBUztTQUFhO1NBQW1CO1NBQWlCLHdDIiwiZmlsZSI6ImNsYWlyZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbGFpcmV4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNsYWlyZXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGM5NmMxMmEyNTBjNWRjMjljOTUzXG4gKiovIiwibGV0IGdldEZvbyA9ICgpID0+IDQyO1xuXG5sZXQgcmVwbGFjZVdoaXRlc3BhY2UgPSAoc3RyLCByZXBsYWNlbWVudCA9ICcnKSA9PiB7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKCdcXFxccycsICdnJyksIHJlcGxhY2VtZW50KTtcbn1cblxubGV0IGNvbnZlcnRNaXNjQ2hhciA9IHN0ciA9PiB7XG4gIGxldCBleHBzID0gW1xuICAgIHtjaGFyOiAvJi9nLCByZXBsYWNlOiAnYW5kJ30sXG4gICAge2NoYXI6IC8jL2csIHJlcGxhY2U6ICdudW1iZXIgJ30sXG4gICAge2NoYXI6IC8lL2csIHJlcGxhY2U6ICcgcGVyY2VudCd9LFxuICAgIHtjaGFyOiAvXFwvfFxcXFwvZywgcmVwbGFjZTogJyBzbGFzaCAnfSxcbiAgICB7Y2hhcjogL1xcKi9nLCByZXBsYWNlOiAnIHN0YXIgJ30sXG4gICAge2NoYXI6IC9AL2csIHJlcGxhY2U6ICcgYXQgJ31cbiAgICAvLyBicmFja2V0c1xuICBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGV4cHNbaV0uY2hhciksIGV4cHNbaV0ucmVwbGFjZSk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxubGV0IGNvbnZlcnRQdW5jdHVhdGlvbiA9IHN0ciA9PiB7XG4gIGxldCBleHBzID0gW1xuICAgIHtwdW5jOiAnXFxcXHt8XFxcXH0nLCByZXBsYWNlOiAnYnJhY2UnfSxcbiAgICB7cHVuYzogJ1xcXFwofFxcXFwpJywgcmVwbGFjZTogJyBicmFja2V0ICd9LFxuICAgIHtwdW5jOiAnXFwnJywgcmVwbGFjZTogJyd9LFxuICAgIHtwdW5jOiAnXCInLCByZXBsYWNlOiAnJ30sXG4gICAge3B1bmM6ICcsJywgcmVwbGFjZTogJyd9LFxuICAgIHtwdW5jOiAnIScsIHJlcGxhY2U6ICcnfSxcbiAgICB7cHVuYzogJ1xcXFw/JywgcmVwbGFjZTogJyd9XG4gIF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwc1tpXS5wdW5jLCAnZycpLCBleHBzW2ldLnJlcGxhY2UpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmxldCBzcXVlZXplID0gKHN0ciwgcmFuZ2UpID0+IHtcbiAgbGV0IGNoYXJzID0gWy4uLnN0cl07XG4gIGxldCByYW5nZVJlZ2V4cCA9IG5ldyBSZWdFeHAoYFske3JhbmdlfV1gLCAnZycpO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IGNoYXJzLmxlbmd0aDsgaisrKSB7XG4gICAgaWYgKGNoYXJzW2pdID09PSBjaGFyc1tqKzFdKSB7XG4gICAgICAvLyBpZiByYW5nZSA9PT0gdW5kZWZpbmVkIGkuZS4gZmFsc2VcbiAgICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgY2hhcnNbal0gPSAnJztcbiAgICAgIH0gZWxzZSBpZiAoY2hhcnNbal0ubWF0Y2gocmFuZ2VSZWdleHApKSB7XG4gICAgICAgIGNoYXJzW2pdID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjaGFycy5qb2luKCcnKTtcbn1cblxubGV0IGNoYW5nZU1vbmV5ID0gc3RyID0+IHtcbiAgbGV0IGV4cHMgPSBbXG4gICAge3JlZ2V4OiAvXFwkKFxcZCspLihcXGRcXGQpL2csIHJlcGxhY2U6ICckMSBkb2xsYXJzICQyIGNlbnRzJ30sXG4gICAge3JlZ2V4OiAvXFwkKFxcZCspL2csIHJlcGxhY2U6ICckMSBkb2xsYXJzJ30sXG4gICAge3JlZ2V4OiAvXFzigqwoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogJyQxIGV1cm8gJDIgY2VudHMnfSxcbiAgICB7cmVnZXg6IC9cXOKCrChcXGQrKS9nLCByZXBsYWNlOiAnJDEgZXVybyd9LFxuICAgIHtyZWdleDogL1xcwqMoXFxkKykuKFxcZFxcZCkvZywgcmVwbGFjZTogJyQxIHBvdW5kcyAkMiBwZW5jZSd9LFxuICAgIHtyZWdleDogL1xcwqMoXFxkKykvZywgcmVwbGFjZTogJyQxIHBvdW5kcyd9XG4gIF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwcy5sZW5ndGg7IGkrKykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXhwc1tpXS5yZWdleCksIGV4cHNbaV0ucmVwbGFjZSk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxubGV0IHRvVXJsID0gc3RyID0+IGNvbnZlcnRQdW5jdHVhdGlvbihjb252ZXJ0TWlzY0NoYXIocmVwbGFjZVdoaXRlc3BhY2Uoc3RyLnRyaW0oKSwgJy0nKSkpLnRvTG93ZXJDYXNlKCk7XG5cbmV4cG9ydCB7IGdldEZvbywgdG9VcmwsIHNxdWVlemUsIGNoYW5nZU1vbmV5LCByZXBsYWNlV2hpdGVzcGFjZSwgY29udmVydE1pc2NDaGFyLCBjb252ZXJ0UHVuY3R1YXRpb24gfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9