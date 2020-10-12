/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");

var erasureOption = "blackout";
window.erasureOption = erasureOption;
var erasureSelection = "character";
window.erasureSelection = erasureSelection;
document.getElementById("current-style").innerHTML = "Current Erasure Style: ".concat(window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1));
document.getElementById("current-seclection-style").innerHTML = "Current Selection Style: ".concat(window.erasureSelection.charAt(0).toUpperCase() + window.erasureSelection.slice(1));

window.changeErasureOption = function changeErasureOption(option) {
  window.erasureOption = option;
  document.getElementById("current-style").innerHTML = "Current Style: ".concat(window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1));
};

window.changeSelectionOption = function changeSelectionOption(option) {
  window.erasureSelection = option;
  document.getElementById("current-seclection-style").innerHTML = "Current Selection Style: ".concat(window.erasureSelection.charAt(0).toUpperCase() + window.erasureSelection.slice(1));
};

window.submitText = function submitText() {
  var submittedText = document.getElementById("submitedText").value;
  submittedText.split("").forEach(function (letter) {
    var span = document.createElement("span");
    span.className = "visible";
    span.innerHTML = letter;
    span.addEventListener("click", function () {
      this.classList.toggle("".concat(window.erasureOption));
    });
    var paragraph = document.getElementById("targetText");
    paragraph.append(span);
  });
};

window.clearText = function clearText() {
  var submittedText = document.getElementById("targetText").innerHTML = "";
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJlcmFzdXJlT3B0aW9uIiwid2luZG93IiwiZXJhc3VyZVNlbGVjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhbmdlRXJhc3VyZU9wdGlvbiIsIm9wdGlvbiIsImNoYW5nZVNlbGVjdGlvbk9wdGlvbiIsInN1Ym1pdFRleHQiLCJzdWJtaXR0ZWRUZXh0IiwidmFsdWUiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJwYXJhZ3JhcGgiLCJhcHBlbmQiLCJjbGVhclRleHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FB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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmxldCBlcmFzdXJlT3B0aW9uID0gXCJibGFja291dFwiO1xud2luZG93LmVyYXN1cmVPcHRpb24gPSBlcmFzdXJlT3B0aW9uO1xuXG5sZXQgZXJhc3VyZVNlbGVjdGlvbiA9IFwiY2hhcmFjdGVyXCI7XG53aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9IGVyYXN1cmVTZWxlY3Rpb247XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgQ3VycmVudCBFcmFzdXJlIFN0eWxlOiAke1xuICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG59YDtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiY3VycmVudC1zZWNsZWN0aW9uLXN0eWxlXCJcbikuaW5uZXJIVE1MID0gYEN1cnJlbnQgU2VsZWN0aW9uIFN0eWxlOiAke1xuICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG59YDtcblxud2luZG93LmNoYW5nZUVyYXN1cmVPcHRpb24gPSBmdW5jdGlvbiBjaGFuZ2VFcmFzdXJlT3B0aW9uKG9wdGlvbikge1xuICB3aW5kb3cuZXJhc3VyZU9wdGlvbiA9IG9wdGlvblxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgQ3VycmVudCBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG4gIH1gO1xuXG59XG5cbndpbmRvdy5jaGFuZ2VTZWxlY3Rpb25PcHRpb24gPSBmdW5jdGlvbiBjaGFuZ2VTZWxlY3Rpb25PcHRpb24ob3B0aW9uKSB7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gb3B0aW9uO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJjdXJyZW50LXNlY2xlY3Rpb24tc3R5bGVcIlxuKS5pbm5lckhUTUwgPSBgQ3VycmVudCBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbn1gO1xufTtcblxuXG5cblxud2luZG93LnN1Ym1pdFRleHQgPSBmdW5jdGlvbiBzdWJtaXRUZXh0KCkge1xuICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRlZFRleHRcIikudmFsdWU7XG5cbiAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG4gIH0pO1xufTtcblxud2luZG93LmNsZWFyVGV4dCA9IGZ1bmN0aW9uIGNsZWFyVGV4dCgpIHtcbiAgY29uc3Qgc3VibWl0dGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5pbm5lckhUTUwgPSBcIlwiO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=