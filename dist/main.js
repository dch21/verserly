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
var colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", function () {
  document.getElementById("targetText").style.backgroundColor = this.value;
});
var erasureOption = "blackout";
window.erasureOption = erasureOption;
var erasureSelection = "character";
window.erasureSelection = erasureSelection;
document.getElementById("current-style").innerHTML = "Erasure Style: ".concat(window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1));
document.getElementById("current-selection-style").innerHTML = "Selection Style: ".concat(window.erasureSelection.charAt(0).toUpperCase() + window.erasureSelection.slice(1));

window.changeErasureOption = function changeErasureOption(option) {
  window.erasureOption = option;
  document.getElementById("current-style").innerHTML = "Current Style: ".concat(window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1));
};

window.changeSelectionOption = function changeSelectionOption(option) {
  window.erasureSelection = option;
  document.getElementById("current-selection-style").innerHTML = "Selection Style: ".concat(window.erasureSelection.charAt(0).toUpperCase() + window.erasureSelection.slice(1));
}; // window.submitText = function submitText() {
//   const submittedText = document.getElementById("submitedText").value;
//   submittedText.split("").forEach((letter) => {
//     const span = document.createElement("span");
//     span.className = "visible";
//     span.innerHTML = letter;
//     span.addEventListener("click", function() {
//       this.classList.toggle(`${window.erasureOption}`);
//     });
//     const paragraph = document.getElementById("targetText");
//     paragraph.append(span);
//   });
// };


window.submitText = function submitText() {
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

window.generateText = function generateText() {
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
  }
};

document.getElementById("getval").addEventListener("change", readURL, true);

function readURL() {
  var file = document.getElementById("getval").files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    document.getElementById("targetText").style.backgroundImage = "url(" + reader.result + ")";
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {}
} // window.addEventListener("load", function () {
//   document
//     .querySelector('input[type="file"]')
//     .addEventListener("change", function () {
//       if (this.files && this.files[0]) {
//         var img = document.querySelector("img"); // $('img')[0]
//         img.src = URL.createObjectURL(this.files[0]); // set src to blob url
// img.setAttribute("display", "absolute");
// img.onload = imageIsLoaded;
//       }
//     });
// });
// function imageIsLoaded() { 
//   const pic = document.getElementById("user-picture");
//   pic.setAttribute("display", "absolute");
//   alert(this.src); // blob url
//   // update width and height ...
// }
// const inspiration = document.getElementById("inspiration")


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
} //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array


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
/*! exports provided: toggleEditable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditable", function() { return toggleEditable; });
// export const changeColor = () => picker.addEventListener("change", () => {
//   document.getElementById("targetText").style.backgroundColor = this.value;
// });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImVkaXRhYmxlIiwidG9nZ2xlRWRpdGFibGUiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImVyYXN1cmVPcHRpb24iLCJlcmFzdXJlU2VsZWN0aW9uIiwiaW5uZXJIVE1MIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYW5nZUVyYXN1cmVPcHRpb24iLCJvcHRpb24iLCJjaGFuZ2VTZWxlY3Rpb25PcHRpb24iLCJzdWJtaXRUZXh0Iiwic3VibWl0dGVkVGV4dCIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0V29yZCIsImxldHRlckVsZW1lbnQiLCJwYXJhZ3JhcGgiLCJhcHBlbmQiLCJlbGUiLCJwcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsZXR0ZXJzIiwicHVzaCIsImdlbmVyYXRlVGV4dCIsImNsZWFyVGV4dCIsImFyZWEiLCJkaXNwbGF5IiwicmVhZFVSTCIsImZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwidXJsIiwiZmluZFdvcmQiLCJmaWx0ZXIiLCJzZWFyY2hUZXJtcyIsInVybENvcHkiLCJVUkwiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJmZXRjaCIsInRvU3RyaW5nIiwidGhlbiIsInJlc3AiLCJqc29uIiwiZGF0YSIsInBhcmVzZURpc3BsYXlEYXRhIiwicmVzdWx0c0JveCIsIndvcmRPYmplY3QiLCJ3b3JkIiwic2h1ZmZsZUFycmF5IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJzcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBbEI7QUFDQUQsTUFBTSxDQUFDRSxjQUFQLEdBQXdCQSwrREFBeEI7QUFFQSxJQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUVBRixXQUFXLENBQUNHLGdC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QUFJLEdBQUdQLEtBQUssQ0FBQ0MsQ0FBRCxDQUFoQjtBQUNBRCxTQUFLLENBQUNDLENBQUQsQ0FBTCxHQUFXRCxLQUFLLENBQUNHLENBQUQsQ0FBaEI7QUFDQUgsU0FBSyxDQUFDRyxDQUFELENBQUwsR0FBV0ksSUFBWDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7O0FDN05EO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNL0UsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ25DLE1BQU1nRixLQUFLLEdBQUc5RSxRQUFRLENBQUMrRSxnQkFBVCxDQUEwQixNQUExQixDQUFkOztBQUNBLE1BQUksQ0FBQ25GLE1BQU0sQ0FBQ0MsUUFBWixFQUFzQjtBQUNsQmlGLFNBQUssQ0FBQzVELE9BQU4sQ0FBYyxVQUFDRSxJQUFELEVBQVM7QUFDbkJBLFVBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUMsSUFBckM7QUFDSCxLQUZEO0FBR0EzQixVQUFNLENBQUNDLFFBQVAsR0FBa0IsSUFBbEI7QUFDSCxHQUxELE1BS087QUFDSGlGLFNBQUssQ0FBQzVELE9BQU4sQ0FBYyxVQUFDRSxJQUFELEVBQVU7QUFDdEJBLFVBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUMsS0FBckM7QUFDRCxLQUZEO0FBR0EzQixVQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBbEI7QUFDSDtBQUNELENBYk0sQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyB0b2dnbGVFZGl0YWJsZSB9IGZyb20gXCIuL3NjcmlwdHMvZmlsdGVyc1wiO1xuXG53aW5kb3cuZWRpdGFibGUgPSBmYWxzZVxud2luZG93LnRvZ2dsZUVkaXRhYmxlID0gdG9nZ2xlRWRpdGFibGVcblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yUGlja2VyXCIpO1xuXG5jb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy52YWx1ZTtcbn0pO1xuXG5sZXQgZXJhc3VyZU9wdGlvbiA9IFwiYmxhY2tvdXRcIjtcbndpbmRvdy5lcmFzdXJlT3B0aW9uID0gZXJhc3VyZU9wdGlvbjtcblxubGV0IGVyYXN1cmVTZWxlY3Rpb24gPSBcImNoYXJhY3RlclwiO1xud2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBlcmFzdXJlU2VsZWN0aW9uO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEVyYXN1cmUgU3R5bGU6ICR7XG4gIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbn1gO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4pLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbn1gO1xuXG53aW5kb3cuY2hhbmdlRXJhc3VyZU9wdGlvbiA9IGZ1bmN0aW9uIGNoYW5nZUVyYXN1cmVPcHRpb24ob3B0aW9uKSB7XG4gIHdpbmRvdy5lcmFzdXJlT3B0aW9uID0gb3B0aW9uXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBDdXJyZW50IFN0eWxlOiAke1xuICAgIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbiAgfWA7XG5cbn1cblxud2luZG93LmNoYW5nZVNlbGVjdGlvbk9wdGlvbiA9IGZ1bmN0aW9uIGNoYW5nZVNlbGVjdGlvbk9wdGlvbihvcHRpb24pIHtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBvcHRpb247XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4gICkuaW5uZXJIVE1MID0gYFNlbGVjdGlvbiBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbiAgfWA7XG59O1xuXG5cblxuXG4vLyB3aW5kb3cuc3VibWl0VGV4dCA9IGZ1bmN0aW9uIHN1Ym1pdFRleHQoKSB7XG4vLyAgIGNvbnN0IHN1Ym1pdHRlZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdGVkVGV4dFwiKS52YWx1ZTtcblxuLy8gICBzdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuXG4vLyAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuLy8gICAgIHNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4vLyAgICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4vLyAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4vLyAgICAgfSk7XG5cbi8vICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4vLyAgICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbi8vICAgfSk7XG4vLyB9O1xuXG53aW5kb3cuc3VibWl0VGV4dCA9IGZ1bmN0aW9uIHN1Ym1pdFRleHQoKSB7XG4gIGNvbnN0IHN1Ym1pdHRlZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdGVkVGV4dFwiKS52YWx1ZTtcblxuICBzdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCk9PntcbiAgICAgICAgICBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZXRXb3JkKGVsZSkge1xuICBsZXQgcHJldiA9IGVsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIGxldCBuZXh0ID0gZWxlLm5leHRFbGVtZW50U2libGluZ1xuICBsZXQgbGV0dGVycyA9IFtlbGVdXG4gIHdoaWxlIChwcmV2ICE9PSBudWxsICYmIHByZXYuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgIGxldHRlcnMucHVzaChwcmV2KTtcbiAgICBwcmV2ID0gcHJldi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgd2hpbGUgKG5leHQgIT09ICBudWxsICYmIG5leHQuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgICAgbGV0dGVycy5wdXNoKG5leHQpXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAobmV4dCA9PT0gbnVsbCB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgbmV4dC5pbm5lckhUTUwgPT09IFwiLlwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9XG4gIFxuICByZXR1cm4gbGV0dGVyc1xufVxuXG5cbndpbmRvdy5nZW5lcmF0ZVRleHQgPSBmdW5jdGlvbiBnZW5lcmF0ZVRleHQoKSB7XG5jb25zdCBzdWJtaXR0ZWRUZXh0ID0gXCJJIGhlYXJkIGEgRmx5IGJ1enogLSB3aGVuIEkgZGllZCAtXFxuVGhlIFN0aWxsbmVzcyBpbiB0aGUgUm9vbVxcbldhcyBsaWtlIHRoZSBTdGlsbG5lc3MgaW4gdGhlIEFpciAtXFxuQmV0d2VlbiB0aGUgSGVhdmVzIG9mIFN0b3JtXFxuXCJcblxuc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiei1pbmRleFwiLCAzKTtcbiAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xufSk7fTtcblxud2luZG93LmNsZWFyVGV4dCA9IChhcmVhKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFyZWEpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKGFyZWEgPT09IFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICB9XG59O1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0dmFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgcmVhZFVSTCwgdHJ1ZSk7XG5mdW5jdGlvbiByZWFkVVJMKCkge1xuICB2YXIgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0dmFsXCIpLmZpbGVzWzBdO1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgIFwidXJsKFwiICsgcmVhZGVyLnJlc3VsdCArIFwiKVwiO1xuICB9O1xuICBpZiAoZmlsZSkge1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9IGVsc2Uge1xuICB9XG59XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGRvY3VtZW50XG4vLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJylcbi8vICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzWzBdKSB7XG4vLyAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpOyAvLyAkKCdpbWcnKVswXVxuLy8gICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmZpbGVzWzBdKTsgLy8gc2V0IHNyYyB0byBibG9iIHVybFxuICAgICAgICAvLyBpbWcuc2V0QXR0cmlidXRlKFwiZGlzcGxheVwiLCBcImFic29sdXRlXCIpO1xuICAgICAgICAgICBcbiAgICAgICAgLy8gaW1nLm9ubG9hZCA9IGltYWdlSXNMb2FkZWQ7XG4gICAgICAgIFxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuXG4gICAgXG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gaW1hZ2VJc0xvYWRlZCgpIHsgXG4vLyAgIGNvbnN0IHBpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1waWN0dXJlXCIpO1xuLy8gICBwaWMuc2V0QXR0cmlidXRlKFwiZGlzcGxheVwiLCBcImFic29sdXRlXCIpO1xuLy8gICBhbGVydCh0aGlzLnNyYyk7IC8vIGJsb2IgdXJsXG4vLyAgIC8vIHVwZGF0ZSB3aWR0aCBhbmQgaGVpZ2h0IC4uLlxuLy8gfVxuXG4vLyBjb25zdCBpbnNwaXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb25cIilcbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkuZGF0YW11c2UuY29tL3dvcmRzP1wiXG5cblxud2luZG93LmZpbmRXb3JkID0gKGZpbHRlcikgPT4ge1xuICBjb25zdCBzZWFyY2hUZXJtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tc2VhcmNoXCIpLnZhbHVlO1xuICBsZXQgdXJsQ29weSA9IG5ldyBVUkwodXJsKVxuICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmxDb3B5LnNlYXJjaCk7XG4gIHBhcmFtcy5hcHBlbmQoZmlsdGVyLCBzZWFyY2hUZXJtcyk7XG4gIGZldGNoKHVybCArIHBhcmFtcy50b1N0cmluZygpICApXG4gICAgLnRoZW4oIHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHBhcmVzZURpc3BsYXlEYXRhKGRhdGEpKTtcblxufTtcblxuZnVuY3Rpb24gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkge1xuICAvLyBzaHVmZmxlQXJyYXkoZGF0YSkgdHVybiBpdCBvZmZcbiAgY29uc3QgcmVzdWx0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKTtcbiAgZGF0YS5zbGljZSgwLDIwKS5mb3JFYWNoKCAod29yZE9iamVjdCk9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gd29yZE9iamVjdC53b3JkICsgXCIgXCI7XG4gICAgcmVzdWx0c0JveC5hcHBlbmQoc3Bhbik7XG4gIH0pXG4gIHJlc3VsdHNCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxufVxuXG4vL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheVxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIH1cbn0iLCIvLyBleHBvcnQgY29uc3QgY2hhbmdlQ29sb3IgPSAoKSA9PiBwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnZhbHVlO1xuLy8gfSk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVFZGl0YWJsZSA9ICgpID0+IHtcbiBjb25zdCBzcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpXG4gaWYgKCF3aW5kb3cuZWRpdGFibGUpIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3Bhbik9PiB7XG4gICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCB0cnVlKTtcbiAgICAgfSlcbiAgICAgd2luZG93LmVkaXRhYmxlID0gdHJ1ZVxuIH0gZWxzZSB7XG4gICAgIHNwYW5zLmZvckVhY2goKHNwYW4pID0+IHtcbiAgICAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gICAgIH0pO1xuICAgICB3aW5kb3cuZWRpdGFibGUgPSBmYWxzZTtcbiB9XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==