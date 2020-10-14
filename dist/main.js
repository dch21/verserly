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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImVkaXRhYmxlIiwidG9nZ2xlRWRpdGFibGUiLCJjaGFuZ2VGb250T3B0aW9uIiwiY29sb3JQaWNrZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidmFsdWUiLCJmb250U2l6ZSIsImVyYXN1cmVPcHRpb24iLCJlcmFzdXJlU2VsZWN0aW9uIiwiY2hhbmdlRXJhc3VyZU9wdGlvbiIsIm9wdGlvbiIsImlubmVySFRNTCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFuZ2VTZWxlY3Rpb25PcHRpb24iLCJzdWJtaXRUZXh0Iiwic3VibWl0dGVkVGV4dCIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0V29yZCIsImxldHRlckVsZW1lbnQiLCJwYXJhZ3JhcGgiLCJhcHBlbmQiLCJlbGUiLCJwcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsZXR0ZXJzIiwicHVzaCIsImdlbmVyYXRlVGV4dCIsImNsZWFyVGV4dCIsImFyZWEiLCJkaXNwbGF5IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImJhY2tncm91bmRJbWFnZSIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJ1cmwiLCJmaW5kV29yZCIsImZpbHRlciIsInNlYXJjaFRlcm1zIiwidXJsQ29weSIsIlVSTCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImZldGNoIiwidG9TdHJpbmciLCJ0aGVuIiwicmVzcCIsImpzb24iLCJkYXRhIiwicGFyZXNlRGlzcGxheURhdGEiLCJyZXN1bHRzQm94Iiwid29yZE9iamVjdCIsIndvcmQiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsInNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvbnRTdHlsZSIsImZvbnRGYW1pbHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBbEI7QUFDQUQsTUFBTSxDQUFDRSxjQUFQLEdBQXdCQSwrREFBeEI7QUFDQUYsTUFBTSxDQUFDRyxnQkFBUCxHQUEwQkEs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RyxDQUFELENBQUwsR0FBV0ksSUFBWDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7O0FDL0tEO0FBQUE7QUFBQTtBQUFPLElBQU1oRixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDbkMsTUFBTWlGLEtBQUssR0FBRzlFLFFBQVEsQ0FBQytFLGdCQUFULENBQTBCLE1BQTFCLENBQWQ7O0FBQ0EsTUFBSSxDQUFDcEYsTUFBTSxDQUFDQyxRQUFaLEVBQXNCO0FBQ2xCa0YsU0FBSyxDQUFDM0QsT0FBTixDQUFjLFVBQUNFLElBQUQsRUFBUztBQUNuQkEsVUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQyxJQUFyQztBQUNILEtBRkQ7QUFHQTdCLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixJQUFsQjtBQUNILEdBTEQsTUFLTztBQUNIa0YsU0FBSyxDQUFDM0QsT0FBTixDQUFjLFVBQUNFLElBQUQsRUFBVTtBQUN0QkEsVUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQyxLQUFyQztBQUNELEtBRkQ7QUFHQTdCLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixLQUFsQjtBQUNIO0FBQ0QsQ0FiTTtBQWVBLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ2tGLFNBQUQsRUFBYztBQUMxQ2hGLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0UsS0FBdEMsQ0FBNEM4RSxVQUE1QyxHQUF5REQsU0FBekQ7QUFDQWhGLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsRUFBOENVLFNBQTlDLHlCQUF5RXFFLFNBQXpFO0FBQ0gsQ0FITSxDOzs7Ozs7Ozs7Ozs7QUNmUDtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IHRvZ2dsZUVkaXRhYmxlLCBjaGFuZ2VGb250T3B0aW9uIH0gZnJvbSBcIi4vc2NyaXB0cy9maWx0ZXJzXCI7XG5cbndpbmRvdy5lZGl0YWJsZSA9IGZhbHNlXG53aW5kb3cudG9nZ2xlRWRpdGFibGUgPSB0b2dnbGVFZGl0YWJsZVxud2luZG93LmNoYW5nZUZvbnRPcHRpb24gPSBjaGFuZ2VGb250T3B0aW9uO1xuXG5jb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JQaWNrZXJcIik7XG5jb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yUGlja2VyLnZhbHVlO1xufSk7XG5cbmNvbnN0IGZvbnRTaXplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb250U2l6ZVwiKTtcbmZvbnRTaXplLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZS52YWx1ZSArIFwicHhcIlxufSk7XG5cbmxldCBlcmFzdXJlT3B0aW9uID0gXCJibGFja291dFwiO1xud2luZG93LmVyYXN1cmVPcHRpb24gPSBlcmFzdXJlT3B0aW9uO1xuXG5sZXQgZXJhc3VyZVNlbGVjdGlvbiA9IFwiY2hhcmFjdGVyXCI7XG53aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9IGVyYXN1cmVTZWxlY3Rpb247XG5cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgRXJhc3VyZSBTdHlsZTogJHtcbi8vICAgd2luZG93LmVyYXN1cmVPcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aW5kb3cuZXJhc3VyZU9wdGlvbi5zbGljZSgxKVxuLy8gfWA7XG5cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuLy8gICBcImN1cnJlbnQtc2VsZWN0aW9uLXN0eWxlXCJcbi8vICkuaW5uZXJIVE1MID0gYFNlbGVjdGlvbiBTdHlsZTogJHtcbi8vICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuLy8gICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5zbGljZSgxKVxuLy8gfWA7XG5cbndpbmRvdy5jaGFuZ2VFcmFzdXJlT3B0aW9uID0gKG9wdGlvbikgPT4ge1xuICB3aW5kb3cuZXJhc3VyZU9wdGlvbiA9IG9wdGlvblxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgQ3VycmVudCBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG4gIH1gO1xufVxuXG53aW5kb3cuY2hhbmdlU2VsZWN0aW9uT3B0aW9uID0gKG9wdGlvbikgPT4ge1xuICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9IG9wdGlvbjtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImN1cnJlbnQtc2VsZWN0aW9uLXN0eWxlXCJcbiAgKS5pbm5lckhUTUwgPSBgU2VsZWN0aW9uIFN0eWxlOiAke1xuICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5zbGljZSgxKVxuICB9YDtcbn07XG5cblxud2luZG93LnN1Ym1pdFRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdHRlZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdGVkVGV4dFwiKS52YWx1ZTtcblxuICBzdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCk9PntcbiAgICAgICAgICBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZXRXb3JkKGVsZSkge1xuICBsZXQgcHJldiA9IGVsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIGxldCBuZXh0ID0gZWxlLm5leHRFbGVtZW50U2libGluZ1xuICBsZXQgbGV0dGVycyA9IFtlbGVdXG4gIHdoaWxlIChwcmV2ICE9PSBudWxsICYmIHByZXYuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgIGxldHRlcnMucHVzaChwcmV2KTtcbiAgICBwcmV2ID0gcHJldi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgd2hpbGUgKG5leHQgIT09ICBudWxsICYmIG5leHQuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgICAgbGV0dGVycy5wdXNoKG5leHQpXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAobmV4dCA9PT0gbnVsbCB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgbmV4dC5pbm5lckhUTUwgPT09IFwiLlwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9XG4gIFxuICByZXR1cm4gbGV0dGVyc1xufVxuXG5cbndpbmRvdy5nZW5lcmF0ZVRleHQgPSAoKSA9PiB7XG5jb25zdCBzdWJtaXR0ZWRUZXh0ID0gXCJJIGhlYXJkIGEgRmx5IGJ1enogLSB3aGVuIEkgZGllZCAtXFxuVGhlIFN0aWxsbmVzcyBpbiB0aGUgUm9vbVxcbldhcyBsaWtlIHRoZSBTdGlsbG5lc3MgaW4gdGhlIEFpciAtXFxuQmV0d2VlbiB0aGUgSGVhdmVzIG9mIFN0b3JtXFxuXCJcblxuc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiei1pbmRleFwiLCAzKTtcbiAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xufSk7fTtcblxud2luZG93LmNsZWFyVGV4dCA9IChhcmVhKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFyZWEpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKGFyZWEgPT09IFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tZGVsZXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICB9XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldFBpY3R1cmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldFBpY3R1cmVcIikuZmlsZXNbMF07XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgcmVhZGVyLnJlc3VsdCArIFwiKVwiO1xuICB9O1xuICBpZiAoZmlsZSkgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG59KTtcblxubGV0IHVybCA9IFwiaHR0cDovL2FwaS5kYXRhbXVzZS5jb20vd29yZHM/XCJcblxud2luZG93LmZpbmRXb3JkID0gKGZpbHRlcikgPT4ge1xuICBjb25zdCBzZWFyY2hUZXJtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tc2VhcmNoXCIpLnZhbHVlO1xuICBsZXQgdXJsQ29weSA9IG5ldyBVUkwodXJsKVxuICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmxDb3B5LnNlYXJjaCk7XG4gIHBhcmFtcy5hcHBlbmQoZmlsdGVyLCBzZWFyY2hUZXJtcyk7XG4gIGZldGNoKHVybCArIHBhcmFtcy50b1N0cmluZygpICApXG4gICAgLnRoZW4oIHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHBhcmVzZURpc3BsYXlEYXRhKGRhdGEpKTtcbn07XG5cbmZ1bmN0aW9uIHBhcmVzZURpc3BsYXlEYXRhKGRhdGEpIHtcbiAgLy8gc2h1ZmZsZUFycmF5KGRhdGEpIHR1cm4gaXQgb2ZmXG4gIGNvbnN0IHJlc3VsdHNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXJlc3VsdHNcIik7XG4gIGRhdGEuc2xpY2UoMCwyMCkuZm9yRWFjaCggKHdvcmRPYmplY3QpPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IHdvcmRPYmplY3Qud29yZCArIFwiIFwiO1xuICAgIHJlc3VsdHNCb3guYXBwZW5kKHNwYW4pO1xuICB9KVxuICByZXN1bHRzQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1kZWxldGVcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuLy9Gcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXlcbmZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnJheSkge1xuICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IHRvZ2dsZUVkaXRhYmxlID0gKCkgPT4ge1xuIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiBpZiAoIXdpbmRvdy5lZGl0YWJsZSkge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKT0+IHtcbiAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICB9KVxuICAgICB3aW5kb3cuZWRpdGFibGUgPSB0cnVlXG4gfSBlbHNlIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICAgfSk7XG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xuIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VGb250T3B0aW9uID0gKGZvbnRTdHlsZSkgPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250U3R5bGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWZvbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEZvbnQgU3R5bGU6ICR7Zm9udFN0eWxlfWA7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==