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
document.getElementById("current-style").innerHTML = "Current Erasure Style: ".concat(window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1));
document.getElementById("current-seclection-style").innerHTML = "Current Selection Style: ".concat(window.erasureSelection.charAt(0).toUpperCase() + window.erasureSelection.slice(1));

window.changeErasureOption = function changeErasureOption(option) {
  window.erasureOption = option;
  document.getElementById("current-style").innerHTML = "Current Style: ".concat(window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1));
};

window.changeSelectionOption = function changeSelectionOption(option) {
  window.erasureSelection = option;
  document.getElementById("current-seclection-style").innerHTML = "Current Selection Style: ".concat(window.erasureSelection.charAt(0).toUpperCase() + window.erasureSelection.slice(1));
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

window.clearText = function clearText() {
  var submittedText = document.getElementById("targetText").innerHTML = "";
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

window.findRhymes = function () {
  var searchTerms = document.getElementById("inspiration-search").value;
  var urlCopy = new URL(url);
  var params = new URLSearchParams(urlCopy.search);
  params.append("sl", searchTerms);
  fetch(url + params.toString()).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    return pareseDisplayData(data);
  });
};

function pareseDisplayData(data) {
  shuffleArray(data);
  data.slice(0, 10).forEach(function (wordObject) {
    var span = document.createElement("span");
    span.innerHTML = wordObject.word + " ";
    var resultsBox = document.getElementById("inspiration-results");
    resultsBox.append(span);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImVkaXRhYmxlIiwidG9nZ2xlRWRpdGFibGUiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImVyYXN1cmVPcHRpb24iLCJlcmFzdXJlU2VsZWN0aW9uIiwiaW5uZXJIVE1MIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYW5nZUVyYXN1cmVPcHRpb24iLCJvcHRpb24iLCJjaGFuZ2VTZWxlY3Rpb25PcHRpb24iLCJzdWJtaXRUZXh0Iiwic3VibWl0dGVkVGV4dCIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0V29yZCIsImxldHRlckVsZW1lbnQiLCJwYXJhZ3JhcGgiLCJhcHBlbmQiLCJlbGUiLCJwcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsZXR0ZXJzIiwicHVzaCIsImdlbmVyYXRlVGV4dCIsImNsZWFyVGV4dCIsInJlYWRVUkwiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFja2dyb3VuZEltYWdlIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInVybCIsImZpbmRSaHltZXMiLCJzZWFyY2hUZXJtcyIsInVybENvcHkiLCJVUkwiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJmZXRjaCIsInRvU3RyaW5nIiwidGhlbiIsInJlc3AiLCJqc29uIiwiZGF0YSIsInBhcmVzZURpc3BsYXlEYXRhIiwic2h1ZmZsZUFycmF5Iiwid29yZE9iamVjdCIsIndvcmQiLCJyZXN1bHRzQm94IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJzcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBbEI7QUFDQUQsTUFBTSxDQUFDRSxjQUFQLEdBQXdCQSwrREFBeEI7QUFFQSxJQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUVBRixXQUFXLENBQUNHLGdCQUFaLENBQTZCLFFBQTdCLEVBQXVDLFlB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Q0E7QUFDQTtBQUVPLElBQU01RSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDbkMsTUFBTTZFLEtBQUssR0FBRzNFLFFBQVEsQ0FBQzRFLGdCQUFULENBQTBCLE1BQTFCLENBQWQ7O0FBQ0EsTUFBSSxDQUFDaEYsTUFBTSxDQUFDQyxRQUFaLEVBQXNCO0FBQ2xCOEUsU0FBSyxDQUFDekQsT0FBTixDQUFjLFVBQUNFLElBQUQsRUFBUztBQUNuQkEsVUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQyxJQUFyQztBQUNILEtBRkQ7QUFHQTNCLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixJQUFsQjtBQUNILEdBTEQsTUFLTztBQUNIOEUsU0FBSyxDQUFDekQsT0FBTixDQUFjLFVBQUNFLElBQUQsRUFBVTtBQUN0QkEsVUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQyxLQUFyQztBQUNELEtBRkQ7QUFHQTNCLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixLQUFsQjtBQUNIO0FBQ0QsQ0FiTSxDOzs7Ozs7Ozs7Ozs7QUNKUDtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IHRvZ2dsZUVkaXRhYmxlIH0gZnJvbSBcIi4vc2NyaXB0cy9maWx0ZXJzXCI7XG5cbndpbmRvdy5lZGl0YWJsZSA9IGZhbHNlXG53aW5kb3cudG9nZ2xlRWRpdGFibGUgPSB0b2dnbGVFZGl0YWJsZVxuXG5jb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JQaWNrZXJcIik7XG5cbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnZhbHVlO1xufSk7XG5cbmxldCBlcmFzdXJlT3B0aW9uID0gXCJibGFja291dFwiO1xud2luZG93LmVyYXN1cmVPcHRpb24gPSBlcmFzdXJlT3B0aW9uO1xuXG5sZXQgZXJhc3VyZVNlbGVjdGlvbiA9IFwiY2hhcmFjdGVyXCI7XG53aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9IGVyYXN1cmVTZWxlY3Rpb247XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgQ3VycmVudCBFcmFzdXJlIFN0eWxlOiAke1xuICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG59YDtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiY3VycmVudC1zZWNsZWN0aW9uLXN0eWxlXCJcbikuaW5uZXJIVE1MID0gYEN1cnJlbnQgU2VsZWN0aW9uIFN0eWxlOiAke1xuICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG59YDtcblxud2luZG93LmNoYW5nZUVyYXN1cmVPcHRpb24gPSBmdW5jdGlvbiBjaGFuZ2VFcmFzdXJlT3B0aW9uKG9wdGlvbikge1xuICB3aW5kb3cuZXJhc3VyZU9wdGlvbiA9IG9wdGlvblxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgQ3VycmVudCBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG4gIH1gO1xuXG59XG5cbndpbmRvdy5jaGFuZ2VTZWxlY3Rpb25PcHRpb24gPSBmdW5jdGlvbiBjaGFuZ2VTZWxlY3Rpb25PcHRpb24ob3B0aW9uKSB7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gb3B0aW9uO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY3VycmVudC1zZWNsZWN0aW9uLXN0eWxlXCJcbiAgKS5pbm5lckhUTUwgPSBgQ3VycmVudCBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4gIH1gO1xufTtcblxuXG5cblxuLy8gd2luZG93LnN1Ym1pdFRleHQgPSBmdW5jdGlvbiBzdWJtaXRUZXh0KCkge1xuLy8gICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRlZFRleHRcIikudmFsdWU7XG5cbi8vICAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblxuLy8gICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbi8vICAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuLy8gICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuLy8gICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuLy8gICAgIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG4vLyAgIH0pO1xuLy8gfTtcblxud2luZG93LnN1Ym1pdFRleHQgPSBmdW5jdGlvbiBzdWJtaXRUZXh0KCkge1xuICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRlZFRleHRcIikudmFsdWU7XG5cbiAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIikge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRXb3JkKHRoaXMpLmZvckVhY2goKGxldHRlckVsZW1lbnQpPT57XG4gICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gZ2V0V29yZChlbGUpIHtcbiAgbGV0IHByZXYgPSBlbGUucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBsZXQgbmV4dCA9IGVsZS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgbGV0IGxldHRlcnMgPSBbZWxlXVxuICB3aGlsZSAocHJldiAhPT0gbnVsbCAmJiBwcmV2LmlubmVySFRNTCAhPT0gXCIgXCIpIHtcbiAgICBsZXR0ZXJzLnB1c2gocHJldik7XG4gICAgcHJldiA9IHByZXYucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpZiAocHJldiA9PT0gbnVsbCB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiLlwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHdoaWxlIChuZXh0ICE9PSAgbnVsbCAmJiBuZXh0LmlubmVySFRNTCAhPT0gXCIgXCIpIHtcbiAgICAgIGxldHRlcnMucHVzaChuZXh0KVxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKG5leHQgPT09IG51bGwgfHwgbmV4dC5pbm5lckhUTUwgPT09IFwiIFwiIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIi5cIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGxldHRlcnNcbn1cblxuXG53aW5kb3cuZ2VuZXJhdGVUZXh0ID0gZnVuY3Rpb24gZ2VuZXJhdGVUZXh0KCkge1xuY29uc3Qgc3VibWl0dGVkVGV4dCA9IFwiSSBoZWFyZCBhIEZseSBidXp6IC0gd2hlbiBJIGRpZWQgLVxcblRoZSBTdGlsbG5lc3MgaW4gdGhlIFJvb21cXG5XYXMgbGlrZSB0aGUgU3RpbGxuZXNzIGluIHRoZSBBaXIgLVxcbkJldHdlZW4gdGhlIEhlYXZlcyBvZiBTdG9ybVxcblwiXG5cbnN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgMyk7XG4gIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbn0pO307XG5cbndpbmRvdy5jbGVhclRleHQgPSBmdW5jdGlvbiBjbGVhclRleHQoKSB7XG4gIGNvbnN0IHN1Ym1pdHRlZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXR2YWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCByZWFkVVJMLCB0cnVlKTtcbmZ1bmN0aW9uIHJlYWRVUkwoKSB7XG4gIHZhciBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXR2YWxcIikuZmlsZXNbMF07XG4gIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgXCJ1cmwoXCIgKyByZWFkZXIucmVzdWx0ICsgXCIpXCI7XG4gIH07XG4gIGlmIChmaWxlKSB7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gIH0gZWxzZSB7XG4gIH1cbn1cblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgZG9jdW1lbnRcbi8vICAgICAucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKVxuLy8gICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIGlmICh0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXNbMF0pIHtcbi8vICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7IC8vICQoJ2ltZycpWzBdXG4vLyAgICAgICAgIGltZy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZmlsZXNbMF0pOyAvLyBzZXQgc3JjIHRvIGJsb2IgdXJsXG4gICAgICAgIC8vIGltZy5zZXRBdHRyaWJ1dGUoXCJkaXNwbGF5XCIsIFwiYWJzb2x1dGVcIik7XG4gICAgICAgICAgIFxuICAgICAgICAvLyBpbWcub25sb2FkID0gaW1hZ2VJc0xvYWRlZDtcbiAgICAgICAgXG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG5cbiAgICBcbi8vIH0pO1xuXG4vLyBmdW5jdGlvbiBpbWFnZUlzTG9hZGVkKCkgeyBcbi8vICAgY29uc3QgcGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLXBpY3R1cmVcIik7XG4vLyAgIHBpYy5zZXRBdHRyaWJ1dGUoXCJkaXNwbGF5XCIsIFwiYWJzb2x1dGVcIik7XG4vLyAgIGFsZXJ0KHRoaXMuc3JjKTsgLy8gYmxvYiB1cmxcbi8vICAgLy8gdXBkYXRlIHdpZHRoIGFuZCBoZWlnaHQgLi4uXG4vLyB9XG5cbi8vIGNvbnN0IGluc3BpcmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvblwiKVxubGV0IHVybCA9IFwiaHR0cDovL2FwaS5kYXRhbXVzZS5jb20vd29yZHM/XCJcblxuXG53aW5kb3cuZmluZFJoeW1lcyA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoVGVybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXNlYXJjaFwiKS52YWx1ZTtcbiAgbGV0IHVybENvcHkgPSBuZXcgVVJMKHVybClcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsQ29weS5zZWFyY2gpO1xuICBwYXJhbXMuYXBwZW5kKFwic2xcIiwgc2VhcmNoVGVybXMpO1xuICBmZXRjaCh1cmwgKyBwYXJhbXMudG9TdHJpbmcoKSAgKVxuICAgIC50aGVuKCByZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSk7XG5cbn07XG5cbmZ1bmN0aW9uIHBhcmVzZURpc3BsYXlEYXRhKGRhdGEpIHtcbiAgc2h1ZmZsZUFycmF5KGRhdGEpXG4gIGRhdGEuc2xpY2UoMCwxMCkuZm9yRWFjaCggKHdvcmRPYmplY3QpPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IHdvcmRPYmplY3Qud29yZCArIFwiIFwiO1xuICAgIGNvbnN0IHJlc3VsdHNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXJlc3VsdHNcIik7XG4gICAgcmVzdWx0c0JveC5hcHBlbmQoc3Bhbik7XG4gIH0pXG59XG5cbi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5XG5mdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxufSIsIi8vIGV4cG9ydCBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMudmFsdWU7XG4vLyB9KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUVkaXRhYmxlID0gKCkgPT4ge1xuIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiBpZiAoIXdpbmRvdy5lZGl0YWJsZSkge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKT0+IHtcbiAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICB9KVxuICAgICB3aW5kb3cuZWRpdGFibGUgPSB0cnVlXG4gfSBlbHNlIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICAgfSk7XG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xuIH1cbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9