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
window.extend = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["extend"];
window.heightChanges = 0;
window.widthChanges = 0;
var colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", function () {
  document.getElementById("targetText").style.backgroundColor = colorPicker.value;
});
var fontSize = document.getElementById("fontSize");
fontSize.addEventListener("change", function () {
  document.getElementById("targetText").style.fontSize = fontSize.value + "px";
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
/*! exports provided: toggleEditable, extend, changeFontOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditable", function() { return toggleEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
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
var extend = function extend(direction) {
  if (direction === "height") {
    window.heightChanges += 1;
    document.getElementById("targetText").style.height = 500 + 10 * window.heightChanges + "px";
  } else {
    window.widthChanges += 1;
    document.getElementById("targetText").style.width = 700 + 10 * window.widthChanges + "px";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImVkaXRhYmxlIiwidG9nZ2xlRWRpdGFibGUiLCJjaGFuZ2VGb250T3B0aW9uIiwiZXh0ZW5kIiwiaGVpZ2h0Q2hhbmdlcyIsIndpZHRoQ2hhbmdlcyIsImNvbG9yUGlja2VyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInZhbHVlIiwiZm9udFNpemUiLCJlcmFzdXJlT3B0aW9uIiwiZXJhc3VyZVNlbGVjdGlvbiIsImNoYW5nZUVyYXN1cmVPcHRpb24iLCJvcHRpb24iLCJpbm5lckhUTUwiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY2hhbmdlU2VsZWN0aW9uT3B0aW9uIiwic3VibWl0VGV4dCIsInN1Ym1pdHRlZFRleHQiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImdldFdvcmQiLCJsZXR0ZXJFbGVtZW50IiwicGFyYWdyYXBoIiwiYXBwZW5kIiwiZWxlIiwicHJldiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibGV0dGVycyIsInB1c2giLCJnZW5lcmF0ZVRleHQiLCJjbGVhclRleHQiLCJhcmVhIiwiZGlzcGxheSIsImZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwidXJsIiwiZmluZFdvcmQiLCJmaWx0ZXIiLCJzZWFyY2hUZXJtcyIsInVybENvcHkiLCJVUkwiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJmZXRjaCIsInRvU3RyaW5nIiwidGhlbiIsInJlc3AiLCJqc29uIiwiZGF0YSIsInBhcmVzZURpc3BsYXlEYXRhIiwicmVzdWx0c0JveCIsIndvcmRPYmplY3QiLCJ3b3JkIiwic2h1ZmZsZUFycmF5IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJzcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXJlY3Rpb24iLCJoZWlnaHQiLCJ3aWR0aCIsImZvbnRTdHlsZSIsImZvbnRGYW1pbHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FB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LENBQUNLLGFBQW5CLEdBQW9DLElBQXpGO0FBQ0QsR0FIRCxNQUdPO0FBQ0xMLFVBQU0sQ0FBQ00sWUFBUCxJQUF1QixDQUF2QjtBQUNBRSxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NFLEtBQXRDLENBQTRDK0UsS0FBNUMsR0FBb0QsTUFBTyxLQUFLMUYsTUFBTSxDQUFDTSxZQUFuQixHQUFtQyxJQUF2RjtBQUNEO0FBQ04sQ0FSTTtBQVVBLElBQU1ILGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ3dGLFNBQUQsRUFBYztBQUMxQ25GLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0UsS0FBdEMsQ0FBNENpRixVQUE1QyxHQUF5REQsU0FBekQ7QUFDQW5GLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsRUFBOENVLFNBQTlDLHlCQUF5RXdFLFNBQXpFO0FBQ0gsQ0FITSxDOzs7Ozs7Ozs7Ozs7QUN6QlA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyB0b2dnbGVFZGl0YWJsZSwgY2hhbmdlRm9udE9wdGlvbiwgZXh0ZW5kIH0gZnJvbSBcIi4vc2NyaXB0cy9maWx0ZXJzXCI7XG5cbndpbmRvdy5lZGl0YWJsZSA9IGZhbHNlXG53aW5kb3cudG9nZ2xlRWRpdGFibGUgPSB0b2dnbGVFZGl0YWJsZVxud2luZG93LmNoYW5nZUZvbnRPcHRpb24gPSBjaGFuZ2VGb250T3B0aW9uO1xud2luZG93LmV4dGVuZCA9IGV4dGVuZDtcbndpbmRvdy5oZWlnaHRDaGFuZ2VzID0gMFxud2luZG93LndpZHRoQ2hhbmdlcyA9IDBcblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yUGlja2VyXCIpO1xuY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5jb25zdCBmb250U2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udFNpemVcIik7XG5mb250U2l6ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemUudmFsdWUgKyBcInB4XCJcbn0pO1xuXG5sZXQgZXJhc3VyZU9wdGlvbiA9IFwiYmxhY2tvdXRcIjtcbndpbmRvdy5lcmFzdXJlT3B0aW9uID0gZXJhc3VyZU9wdGlvbjtcblxubGV0IGVyYXN1cmVTZWxlY3Rpb24gPSBcImNoYXJhY3RlclwiO1xud2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBlcmFzdXJlU2VsZWN0aW9uO1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEVyYXN1cmUgU3R5bGU6ICR7XG4vLyAgIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbi8vIH1gO1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4vLyApLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4vLyAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbi8vICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbi8vIH1gO1xuXG53aW5kb3cuY2hhbmdlRXJhc3VyZU9wdGlvbiA9IChvcHRpb24pID0+IHtcbiAgd2luZG93LmVyYXN1cmVPcHRpb24gPSBvcHRpb25cblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEN1cnJlbnQgU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVPcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aW5kb3cuZXJhc3VyZU9wdGlvbi5zbGljZSgxKVxuICB9YDtcbn1cblxud2luZG93LmNoYW5nZVNlbGVjdGlvbk9wdGlvbiA9IChvcHRpb24pID0+IHtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBvcHRpb247XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4gICkuaW5uZXJIVE1MID0gYFNlbGVjdGlvbiBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbiAgfWA7XG59O1xuXG5cbndpbmRvdy5zdWJtaXRUZXh0ID0gKCkgPT4ge1xuICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRlZFRleHRcIikudmFsdWU7XG5cbiAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIikge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRXb3JkKHRoaXMpLmZvckVhY2goKGxldHRlckVsZW1lbnQpPT57XG4gICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gZ2V0V29yZChlbGUpIHtcbiAgbGV0IHByZXYgPSBlbGUucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBsZXQgbmV4dCA9IGVsZS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgbGV0IGxldHRlcnMgPSBbZWxlXVxuICB3aGlsZSAocHJldiAhPT0gbnVsbCAmJiBwcmV2LmlubmVySFRNTCAhPT0gXCIgXCIpIHtcbiAgICBsZXR0ZXJzLnB1c2gocHJldik7XG4gICAgcHJldiA9IHByZXYucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpZiAocHJldiA9PT0gbnVsbCB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiLlwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHdoaWxlIChuZXh0ICE9PSAgbnVsbCAmJiBuZXh0LmlubmVySFRNTCAhPT0gXCIgXCIpIHtcbiAgICAgIGxldHRlcnMucHVzaChuZXh0KVxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKG5leHQgPT09IG51bGwgfHwgbmV4dC5pbm5lckhUTUwgPT09IFwiIFwiIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIi5cIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGxldHRlcnNcbn1cblxuXG53aW5kb3cuZ2VuZXJhdGVUZXh0ID0gKCkgPT4ge1xuY29uc3Qgc3VibWl0dGVkVGV4dCA9IFwiSSBoZWFyZCBhIEZseSBidXp6IC0gd2hlbiBJIGRpZWQgLVxcblRoZSBTdGlsbG5lc3MgaW4gdGhlIFJvb21cXG5XYXMgbGlrZSB0aGUgU3RpbGxuZXNzIGluIHRoZSBBaXIgLVxcbkJldHdlZW4gdGhlIEhlYXZlcyBvZiBTdG9ybVxcblwiXG5cbnN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgMyk7XG4gIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbn0pO307XG5cbndpbmRvdy5jbGVhclRleHQgPSAoYXJlYSkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcmVhKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChhcmVhID09PSBcImluc3BpcmF0aW9uLXJlc3VsdHNcIikge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgfVxufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXRQaWN0dXJlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXRQaWN0dXJlXCIpLmZpbGVzWzBdO1xuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIHJlYWRlci5yZXN1bHQgKyBcIilcIjtcbiAgfTtcbiAgaWYgKGZpbGUpIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xufSk7XG5cbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkuZGF0YW11c2UuY29tL3dvcmRzP1wiXG5cbndpbmRvdy5maW5kV29yZCA9IChmaWx0ZXIpID0+IHtcbiAgY29uc3Qgc2VhcmNoVGVybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXNlYXJjaFwiKS52YWx1ZTtcbiAgbGV0IHVybENvcHkgPSBuZXcgVVJMKHVybClcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsQ29weS5zZWFyY2gpO1xuICBwYXJhbXMuYXBwZW5kKGZpbHRlciwgc2VhcmNoVGVybXMpO1xuICBmZXRjaCh1cmwgKyBwYXJhbXMudG9TdHJpbmcoKSAgKVxuICAgIC50aGVuKCByZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSk7XG59O1xuXG5mdW5jdGlvbiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSB7XG4gIC8vIHNodWZmbGVBcnJheShkYXRhKSB0dXJuIGl0IG9mZlxuICBjb25zdCByZXN1bHRzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpO1xuICBkYXRhLnNsaWNlKDAsMjApLmZvckVhY2goICh3b3JkT2JqZWN0KT0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSB3b3JkT2JqZWN0LndvcmQgKyBcIiBcIjtcbiAgICByZXN1bHRzQm94LmFwcGVuZChzcGFuKTtcbiAgfSlcbiAgcmVzdWx0c0JveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tZGVsZXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbi8vRnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5XG5mdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgY29uc3QgdG9nZ2xlRWRpdGFibGUgPSAoKSA9PiB7XG4gY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxuIGlmICghd2luZG93LmVkaXRhYmxlKSB7XG4gICAgIHNwYW5zLmZvckVhY2goKHNwYW4pPT4ge1xuICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgIH0pXG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IHRydWVcbiB9IGVsc2Uge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgICB9KTtcbiAgICAgd2luZG93LmVkaXRhYmxlID0gZmFsc2U7XG4gfVxufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IChkaXJlY3Rpb24pID0+IHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaGVpZ2h0XCIpIHtcbiAgICAgICAgd2luZG93LmhlaWdodENoYW5nZXMgKz0gMVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuaGVpZ2h0ID0gNTAwICsgKDEwICogd2luZG93LmhlaWdodENoYW5nZXMpICsgXCJweFwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cud2lkdGhDaGFuZ2VzICs9IDE7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS53aWR0aCA9IDcwMCArICgxMCAqIHdpbmRvdy53aWR0aENoYW5nZXMpICsgXCJweFwiXG4gICAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VGb250T3B0aW9uID0gKGZvbnRTdHlsZSkgPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250U3R5bGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWZvbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEZvbnQgU3R5bGU6ICR7Zm9udFN0eWxlfWA7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==