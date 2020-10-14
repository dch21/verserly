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
/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/filters */ "./src/scripts/filters.js");


window.editable = false;
window.toggleEditable = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["toggleEditable"];
window.changeFontOption = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["changeFontOption"];
var colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", function () {
  document.getElementById("targetText").style.backgroundColor = this.value;
});
var erasureOption = "blackout";
window.erasureOption = erasureOption;
var erasureSelection = "character";
window.erasureSelection = erasureSelection; // document.getElementById("current-style").innerHTML = `Erasure Style: ${
//   window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1)
// }`;
// document.getElementById(
//   "current-selection-style"
// ).innerHTML = `Selection Style: ${
//   window.erasureSelection.charAt(0).toUpperCase() +
//   window.erasureSelection.slice(1)
// }`;

window.changeErasureOption = function (option) {
  window.erasureOption = option;
  document.getElementById("current-style").innerHTML = "Current Style: ".concat(window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1));
};

window.changeSelectionOption = function (option) {
  window.erasureSelection = option;
  document.getElementById("current-selection-style").innerHTML = "Selection Style: ".concat(window.erasureSelection.charAt(0).toUpperCase() + window.erasureSelection.slice(1));
};

window.submitText = function () {
  var submittedText = document.getElementById("submitedText").value;
  submittedText.split("").forEach(function (letter) {
    var span = document.createElement("span");
    span.className = "visible";
    span.setAttribute("contenteditable", false);
    span.innerHTML = letter;
    span.addEventListener("click", function () {
      if (window.erasureSelection === "character") {
        this.classList.toggle("".concat(window.erasureOption));
      } else {
        getWord(this).forEach(function (letterElement) {
          letterElement.classList.toggle("".concat(window.erasureOption));
        });
      }
    });
    var paragraph = document.getElementById("targetText");
    paragraph.append(span);
  });
};

function getWord(ele) {
  var prev = ele.previousElementSibling;
  var next = ele.nextElementSibling;
  var letters = [ele];

  while (prev !== null && prev.innerHTML !== " ") {
    letters.push(prev);
    prev = prev.previousElementSibling;

    if (prev === null || prev.innerHTML === " " || prev.innerHTML === ".") {
      break;
    }
  }

  while (next !== null && next.innerHTML !== " ") {
    letters.push(next);
    next = next.nextElementSibling;

    if (next === null || next.innerHTML === " " || next.innerHTML === ".") {
      break;
    }
  }

  return letters;
}

window.generateText = function () {
  var submittedText = "I heard a Fly buzz - when I died -\nThe Stillness in the Room\nWas like the Stillness in the Air -\nBetween the Heaves of Storm\n";
  submittedText.split("").forEach(function (letter) {
    var span = document.createElement("span");
    span.className = "visible";
    span.setAttribute("contenteditable", false);
    span.setAttribute("z-index", 3);
    span.innerHTML = letter;
    span.addEventListener("click", function () {
      if (window.erasureSelection === "character") {
        this.classList.toggle("".concat(window.erasureOption));
      } else {
        getWord(this).forEach(function (letterElement) {
          letterElement.classList.toggle("".concat(window.erasureOption));
        });
      }
    });
    var paragraph = document.getElementById("targetText");
    paragraph.append(span);
  });
};

window.clearText = function (area) {
  document.getElementById(area).innerHTML = "";

  if (area === "inspiration-results") {
    document.getElementById("inspiration-results").style.display = "none";
    document.getElementById("inspiration-delete").style.display = "none";
  }
};

document.getElementById("getPicture").addEventListener("change", function () {
  var file = document.getElementById("getPicture").files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    document.getElementById("targetText").style.backgroundImage = "url(" + reader.result + ")";
  };

  if (file) reader.readAsDataURL(file);
});
var url = "http://api.datamuse.com/words?";

window.findWord = function (filter) {
  var searchTerms = document.getElementById("inspiration-search").value;
  var urlCopy = new URL(url);
  var params = new URLSearchParams(urlCopy.search);
  params.append(filter, searchTerms);
  fetch(url + params.toString()).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    return pareseDisplayData(data);
  });
};

function pareseDisplayData(data) {
  // shuffleArray(data) turn it off
  var resultsBox = document.getElementById("inspiration-results");
  data.slice(0, 20).forEach(function (wordObject) {
    var span = document.createElement("span");
    span.innerHTML = wordObject.word + " ";
    resultsBox.append(span);
  });
  resultsBox.style.display = "block";
  document.getElementById("inspiration-delete").style.display = "block";
} //From: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

/***/ }),

/***/ "./src/scripts/filters.js":
/*!********************************!*\
  !*** ./src/scripts/filters.js ***!
  \********************************/
/*! exports provided: toggleEditable, changeFontOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditable", function() { return toggleEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFontOption", function() { return changeFontOption; });
var toggleEditable = function toggleEditable() {
  var spans = document.querySelectorAll("span");

  if (!window.editable) {
    spans.forEach(function (span) {
      span.setAttribute("contenteditable", true);
    });
    window.editable = true;
  } else {
    spans.forEach(function (span) {
      span.setAttribute("contenteditable", false);
    });
    window.editable = false;
  }
};
var changeFontOption = function changeFontOption(fontStyle) {
  document.getElementById("targetText").style.fontFamily = fontStyle;
  document.getElementById("current-font-style").innerHTML = "Font Style: ".concat(fontStyle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImVkaXRhYmxlIiwidG9nZ2xlRWRpdGFibGUiLCJjaGFuZ2VGb250T3B0aW9uIiwiY29sb3JQaWNrZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidmFsdWUiLCJlcmFzdXJlT3B0aW9uIiwiZXJhc3VyZVNlbGVjdGlvbiIsImNoYW5nZUVyYXN1cmVPcHRpb24iLCJvcHRpb24iLCJpbm5lckhUTUwiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhbmdlU2VsZWN0aW9uT3B0aW9uIiwic3VibWl0VGV4dCIsInN1Ym1pdHRlZFRleHQiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImdldFdvcmQiLCJsZXR0ZXJFbGVtZW50IiwicGFyYWdyYXBoIiwiYXBwZW5kIiwiZWxlIiwicHJldiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibGV0dGVycyIsInB1c2giLCJnZW5lcmF0ZVRleHQiLCJjbGVhclRleHQiLCJhcmVhIiwiZGlzcGxheSIsImZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwidXJsIiwiZmluZFdvcmQiLCJmaWx0ZXIiLCJzZWFyY2hUZXJtcyIsInVybENvcHkiLCJVUkwiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJmZXRjaCIsInRvU3RyaW5nIiwidGhlbiIsInJlc3AiLCJqc29uIiwiZGF0YSIsInBhcmVzZURpc3BsYXlEYXRhIiwicmVzdWx0c0JveCIsIndvcmRPYmplY3QiLCJ3b3JkIiwic2h1ZmZsZUFycmF5IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJzcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb250U3R5bGUiLCJmb250RmFtaWx5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCLEtBQWxCO0FBQ0FELE1BQU0sQ0FBQ0UsY0FBUCxHQUF3QkEsK0RBQXhCO0FBQ0FGLE1BQU0sQ0FBQ0csZ0JBQVAsR0FBMEJBLGlFQUExQjtBQUVB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Q0FBYyxVQUFDRSxJQUFELEVBQVM7QUFDbkJBLFVBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUMsSUFBckM7QUFDSCxLQUZEO0FBR0E1QixVQUFNLENBQUNDLFFBQVAsR0FBa0IsSUFBbEI7QUFDSCxHQUxELE1BS087QUFDSGlGLFNBQUssQ0FBQzNELE9BQU4sQ0FBYyxVQUFDRSxJQUFELEVBQVU7QUFDdEJBLFVBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUMsS0FBckM7QUFDRCxLQUZEO0FBR0E1QixVQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBbEI7QUFDSDtBQUNELENBYk07QUFlQSxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNpRixTQUFELEVBQWM7QUFDMUMvRSxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NFLEtBQXRDLENBQTRDNkUsVUFBNUMsR0FBeURELFNBQXpEO0FBQ0EvRSxVQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDUyxTQUE5Qyx5QkFBeUVxRSxTQUF6RTtBQUNILENBSE0sQzs7Ozs7Ozs7Ozs7O0FDZlA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyB0b2dnbGVFZGl0YWJsZSwgY2hhbmdlRm9udE9wdGlvbiB9IGZyb20gXCIuL3NjcmlwdHMvZmlsdGVyc1wiO1xuXG53aW5kb3cuZWRpdGFibGUgPSBmYWxzZVxud2luZG93LnRvZ2dsZUVkaXRhYmxlID0gdG9nZ2xlRWRpdGFibGVcbndpbmRvdy5jaGFuZ2VGb250T3B0aW9uID0gY2hhbmdlRm9udE9wdGlvbjtcblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yUGlja2VyXCIpO1xuY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMudmFsdWU7XG59KTtcblxubGV0IGVyYXN1cmVPcHRpb24gPSBcImJsYWNrb3V0XCI7XG53aW5kb3cuZXJhc3VyZU9wdGlvbiA9IGVyYXN1cmVPcHRpb247XG5cbmxldCBlcmFzdXJlU2VsZWN0aW9uID0gXCJjaGFyYWN0ZXJcIjtcbndpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gZXJhc3VyZVNlbGVjdGlvbjtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBFcmFzdXJlIFN0eWxlOiAke1xuLy8gICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG4vLyB9YDtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuLy8gKS5pbm5lckhUTUwgPSBgU2VsZWN0aW9uIFN0eWxlOiAke1xuLy8gICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4vLyAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4vLyB9YDtcblxud2luZG93LmNoYW5nZUVyYXN1cmVPcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlT3B0aW9uID0gb3B0aW9uXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBDdXJyZW50IFN0eWxlOiAke1xuICAgIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbiAgfWA7XG59XG5cbndpbmRvdy5jaGFuZ2VTZWxlY3Rpb25PcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gb3B0aW9uO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuICApLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4gIH1gO1xufTtcblxuXG53aW5kb3cuc3VibWl0VGV4dCA9ICgpID0+IHtcbiAgY29uc3Qgc3VibWl0dGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0ZWRUZXh0XCIpLnZhbHVlO1xuXG4gIHN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KT0+e1xuICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdldFdvcmQoZWxlKSB7XG4gIGxldCBwcmV2ID0gZWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgbGV0IG5leHQgPSBlbGUubmV4dEVsZW1lbnRTaWJsaW5nXG4gIGxldCBsZXR0ZXJzID0gW2VsZV1cbiAgd2hpbGUgKHByZXYgIT09IG51bGwgJiYgcHJldi5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgbGV0dGVycy5wdXNoKHByZXYpO1xuICAgIHByZXYgPSBwcmV2LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHByZXYgPT09IG51bGwgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiIFwiIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIi5cIikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICB3aGlsZSAobmV4dCAhPT0gIG51bGwgJiYgbmV4dC5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgICBsZXR0ZXJzLnB1c2gobmV4dClcbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChuZXh0ID09PSBudWxsIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBsZXR0ZXJzXG59XG5cblxud2luZG93LmdlbmVyYXRlVGV4dCA9ICgpID0+IHtcbmNvbnN0IHN1Ym1pdHRlZFRleHQgPSBcIkkgaGVhcmQgYSBGbHkgYnV6eiAtIHdoZW4gSSBkaWVkIC1cXG5UaGUgU3RpbGxuZXNzIGluIHRoZSBSb29tXFxuV2FzIGxpa2UgdGhlIFN0aWxsbmVzcyBpbiB0aGUgQWlyIC1cXG5CZXR3ZWVuIHRoZSBIZWF2ZXMgb2YgU3Rvcm1cXG5cIlxuXG5zdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ6LWluZGV4XCIsIDMpO1xuICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIikge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRXb3JkKHRoaXMpLmZvckVhY2goKGxldHRlckVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG59KTt9O1xuXG53aW5kb3cuY2xlYXJUZXh0ID0gKGFyZWEpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJlYSkuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAoYXJlYSA9PT0gXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXJlc3VsdHNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1kZWxldGVcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5maWxlc1swXTtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyByZWFkZXIucmVzdWx0ICsgXCIpXCI7XG4gIH07XG4gIGlmIChmaWxlKSByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbn0pO1xuXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLmRhdGFtdXNlLmNvbS93b3Jkcz9cIlxuXG53aW5kb3cuZmluZFdvcmQgPSAoZmlsdGVyKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFRlcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1zZWFyY2hcIikudmFsdWU7XG4gIGxldCB1cmxDb3B5ID0gbmV3IFVSTCh1cmwpXG4gIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybENvcHkuc2VhcmNoKTtcbiAgcGFyYW1zLmFwcGVuZChmaWx0ZXIsIHNlYXJjaFRlcm1zKTtcbiAgZmV0Y2godXJsICsgcGFyYW1zLnRvU3RyaW5nKCkgIClcbiAgICAudGhlbiggcmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkpO1xufTtcblxuZnVuY3Rpb24gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkge1xuICAvLyBzaHVmZmxlQXJyYXkoZGF0YSkgdHVybiBpdCBvZmZcbiAgY29uc3QgcmVzdWx0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKTtcbiAgZGF0YS5zbGljZSgwLDIwKS5mb3JFYWNoKCAod29yZE9iamVjdCk9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gd29yZE9iamVjdC53b3JkICsgXCIgXCI7XG4gICAgcmVzdWx0c0JveC5hcHBlbmQoc3Bhbik7XG4gIH0pXG4gIHJlc3VsdHNCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vL0Zyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheVxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgdG9nZ2xlRWRpdGFibGUgPSAoKSA9PiB7XG4gY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxuIGlmICghd2luZG93LmVkaXRhYmxlKSB7XG4gICAgIHNwYW5zLmZvckVhY2goKHNwYW4pPT4ge1xuICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgIH0pXG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IHRydWVcbiB9IGVsc2Uge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgICB9KTtcbiAgICAgd2luZG93LmVkaXRhYmxlID0gZmFsc2U7XG4gfVxufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZUZvbnRPcHRpb24gPSAoZm9udFN0eWxlKSA9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuZm9udEZhbWlseSA9IGZvbnRTdHlsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtZm9udC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgRm9udCBTdHlsZTogJHtmb250U3R5bGV9YDtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9