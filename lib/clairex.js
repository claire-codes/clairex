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
	
	var toUrl = function toUrl(str) {
	  // TODO: extrapolate replacement out
	  return str.replace(new RegExp('\\s', 'g'), '-').toLowerCase();
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
	  var exps = [{ regex: /\$(\d+)/, replace: '$1 dollars' }, { regex: /\€(\d+)/, replace: '$1 euros' }, { regex: /\£(\d+)/, replace: '$1 pounds' }];
	  for (var i = 0; i < exps.length; i++) {
	    str = str.replace(exps[i].regex, exps[i].replace);
	  }
	  return str;
	};
	
	exports.getFoo = getFoo;
	exports.toUrl = toUrl;
	exports.squeeze = squeeze;
	exports.changeMoney = changeMoney;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMmI1ZGNiMThjZmZmMDRlM2IwMiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBSSxTQUFTLFNBQVQsTUFBUyxHQUFXO0FBQ3RCLFVBQU8sRUFBUCxDQURzQjtFQUFYOztBQUliLEtBQUksUUFBUSxTQUFSLEtBQVEsQ0FBUyxHQUFULEVBQWM7O0FBRXhCLFVBQU8sSUFBSSxPQUFKLENBQVksSUFBSSxNQUFKLENBQVcsS0FBWCxFQUFrQixHQUFsQixDQUFaLEVBQW9DLEdBQXBDLEVBQXlDLFdBQXpDLEVBQVAsQ0FGd0I7RUFBZDs7QUFLWixLQUFJLFVBQVUsU0FBVixPQUFVLENBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUI7QUFDakMsT0FBSSxxQ0FBWSxLQUFaLENBRDZCO0FBRWpDLE9BQUksY0FBYyxJQUFJLE1BQUosT0FBZSxXQUFmLEVBQXlCLEdBQXpCLENBQWQsQ0FGNkI7QUFHakMsUUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksTUFBTSxNQUFOLEVBQWMsR0FBbEMsRUFBdUM7QUFDckMsU0FBSSxNQUFNLENBQU4sTUFBYSxNQUFNLElBQUUsQ0FBRixDQUFuQixFQUF5Qjs7QUFFM0IsV0FBSSxDQUFDLEtBQUQsRUFBUTtBQUNWLGVBQU0sQ0FBTixJQUFXLEVBQVgsQ0FEVTtRQUFaLE1BRU8sSUFBSSxNQUFNLENBQU4sRUFBUyxLQUFULENBQWUsV0FBZixDQUFKLEVBQWlDO0FBQ3RDLGVBQU0sQ0FBTixJQUFXLEVBQVgsQ0FEc0M7UUFBakM7TUFKVDtJQURGO0FBVUEsVUFBTyxNQUFNLElBQU4sQ0FBVyxFQUFYLENBQVAsQ0FiaUM7RUFBckI7O0FBZ0JkLEtBQUksY0FBYyxTQUFkLFdBQWMsQ0FBUyxHQUFULEVBQWM7QUFDOUIsT0FBSSxPQUFPLENBQ1QsRUFBQyxPQUFPLFNBQVAsRUFBa0IsU0FBUyxZQUFULEVBRFYsRUFFVCxFQUFDLE9BQU8sU0FBUCxFQUFrQixTQUFTLFVBQVQsRUFGVixFQUdULEVBQUMsT0FBTyxTQUFQLEVBQWtCLFNBQVMsV0FBVCxFQUhWLENBQVAsQ0FEMEI7QUFNOUIsUUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxNQUFMLEVBQWEsR0FBakMsRUFBc0M7QUFDcEMsV0FBTSxJQUFJLE9BQUosQ0FBWSxLQUFLLENBQUwsRUFBUSxLQUFSLEVBQWUsS0FBSyxDQUFMLEVBQVEsT0FBUixDQUFqQyxDQURvQztJQUF0QztBQUdBLFVBQU8sR0FBUCxDQVQ4QjtFQUFkOztTQVlUO1NBQVE7U0FBTztTQUFTLDBCIiwiZmlsZSI6ImNsYWlyZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjbGFpcmV4XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImNsYWlyZXhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGUyYjVkY2IxOGNmZmYwNGUzYjAyXG4gKiovIiwidmFyIGdldEZvbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gNDI7XG59O1xuXG52YXIgdG9VcmwgPSBmdW5jdGlvbihzdHIpIHtcbiAgLy8gVE9ETzogZXh0cmFwb2xhdGUgcmVwbGFjZW1lbnQgb3V0XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKCdcXFxccycsICdnJyksICctJykudG9Mb3dlckNhc2UoKTtcbn1cblxudmFyIHNxdWVlemUgPSBmdW5jdGlvbihzdHIsIHJhbmdlKSB7XG4gIGxldCBjaGFycyA9IFsuLi5zdHJdO1xuICB2YXIgcmFuZ2VSZWdleHAgPSBuZXcgUmVnRXhwKGBbJHtyYW5nZX1dYCwgJ2cnKTtcbiAgZm9yICh2YXIgaiA9IDA7IGogPCBjaGFycy5sZW5ndGg7IGorKykge1xuICAgIGlmIChjaGFyc1tqXSA9PT0gY2hhcnNbaisxXSkge1xuICAgICAgLy8gaWYgcmFuZ2UgPT09IHVuZGVmaW5lZCBpLmUuIGZhbHNlXG4gICAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIGNoYXJzW2pdID0gJyc7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJzW2pdLm1hdGNoKHJhbmdlUmVnZXhwKSkge1xuICAgICAgICBjaGFyc1tqXSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hhcnMuam9pbignJyk7XG59XG5cbnZhciBjaGFuZ2VNb25leSA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgZXhwcyA9IFtcbiAgICB7cmVnZXg6IC9cXCQoXFxkKykvLCByZXBsYWNlOiAnJDEgZG9sbGFycyd9LFxuICAgIHtyZWdleDogL1xc4oKsKFxcZCspLywgcmVwbGFjZTogJyQxIGV1cm9zJ30sXG4gICAge3JlZ2V4OiAvXFzCoyhcXGQrKS8sIHJlcGxhY2U6ICckMSBwb3VuZHMnfVxuICBdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZShleHBzW2ldLnJlZ2V4LCBleHBzW2ldLnJlcGxhY2UpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCB7IGdldEZvbywgdG9VcmwsIHNxdWVlemUsIGNoYW5nZU1vbmV5IH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==