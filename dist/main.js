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
/* harmony import */ var _templates_demos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/demos */ "./templates/demos.js");



window.editable = false;
window.toggleEditable = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["toggleEditable"];
window.changeFontOption = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["changeFontOption"];
window.extend = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["extend"];
window.heightChanges = 0;
window.widthChanges = 0;
window.sonnet = _templates_demos__WEBPACK_IMPORTED_MODULE_2__["sonnet"];
window.internetPoet = _templates_demos__WEBPACK_IMPORTED_MODULE_2__["internetPoet"];
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
} // const submittedText =
//   "I heard a Fly buzz - when I died -\nThe Stillness in the Room\nWas like the Stillness in the Air -\nBetween the Heaves of Storm\n";


window.generateText = function (submittedText) {
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


/***/ }),

/***/ "./templates/demos.js":
/*!****************************!*\
  !*** ./templates/demos.js ***!
  \****************************/
/*! exports provided: sonnet, internetPoet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sonnet", function() { return sonnet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internetPoet", function() { return internetPoet; });
var sonnet = function sonnet() {
  var original = document.getElementById("targetText");
  var sonnet = document.getElementById("sonnet");
  var clone = sonnet.cloneNode(true);
  original.replaceWith(clone);
  document.getElementById("sonnet").id = "targetText";
  alert("A reworking of Shakespeare's Sonnet 18 with the Fade-out Erasure Style.");
};
var internetPoet = function internetPoet() {
  alert("Poem text was generated by a AI!");
  var canvas = document.getElementById("targetText");
  window.clearText("targetText");
  canvas.style.width = 500;
  canvas.style.height = 500;
  canvas.style.backgroundColor = "white";
  window.generateText("don’t mistake\nsalt for sugar\nit never really left the hands\nof those who broke you\nthe thing\nworth holding onto\nwould not come for you\nyour sweetness belongs\nonly to yourself\n");
  canvas.style.backgroundImage = "url('../images/cake.jpg')";
  canvas.style.fontFamily = "Times";
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9kZW1vcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlZGl0YWJsZSIsInRvZ2dsZUVkaXRhYmxlIiwiY2hhbmdlRm9udE9wdGlvbiIsImV4dGVuZCIsImhlaWdodENoYW5nZXMiLCJ3aWR0aENoYW5nZXMiLCJzb25uZXQiLCJpbnRlcm5ldFBvZXQiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImZvbnRTaXplIiwiZXJhc3VyZU9wdGlvbiIsImVyYXN1cmVTZWxlY3Rpb24iLCJjaGFuZ2VFcmFzdXJlT3B0aW9uIiwib3B0aW9uIiwiaW5uZXJIVE1MIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYW5nZVNlbGVjdGlvbk9wdGlvbiIsInN1Ym1pdFRleHQiLCJzdWJtaXR0ZWRUZXh0Iiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRXb3JkIiwibGV0dGVyRWxlbWVudCIsInBhcmFncmFwaCIsImFwcGVuZCIsImVsZSIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImxldHRlcnMiLCJwdXNoIiwiZ2VuZXJhdGVUZXh0IiwiY2xlYXJUZXh0IiwiYXJlYSIsImRpc3BsYXkiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFja2dyb3VuZEltYWdlIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInVybCIsImZpbmRXb3JkIiwiZmlsdGVyIiwic2VhcmNoVGVybXMiLCJ1cmxDb3B5IiwiVVJMIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZmV0Y2giLCJ0b1N0cmluZyIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJwYXJlc2VEaXNwbGF5RGF0YSIsInJlc3VsdHNCb3giLCJ3b3JkT2JqZWN0Iiwid29yZCIsInNodWZmbGVBcnJheSIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlyZWN0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJmb250U3R5bGUiLCJmb250RmFtaWx5Iiwib3JpZ2luYWwiLCJjbG9uZSIsImNsb25lTm9kZSIsInJlcGxhY2VXaXRoIiwiaWQiLCJhbGVydCIsImNhbnZhcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFD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QUFDQXRGLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ3dGLEVBQWxDLEdBQXVDLFlBQXZDO0FBQ0FDLE9BQUssQ0FBQyx5RUFBRCxDQUFMO0FBQ0gsQ0FQTTtBQVNBLElBQU01RixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDNEYsT0FBSyxDQUFDLGtDQUFELENBQUw7QUFDQSxNQUFNQyxNQUFNLEdBQUczRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZjtBQUNBWCxRQUFNLENBQUNpRCxTQUFQLENBQWlCLFlBQWpCO0FBQ0FvRCxRQUFNLENBQUN4RixLQUFQLENBQWErRSxLQUFiLEdBQXFCLEdBQXJCO0FBQ0FTLFFBQU0sQ0FBQ3hGLEtBQVAsQ0FBYThFLE1BQWIsR0FBc0IsR0FBdEI7QUFDQVUsUUFBTSxDQUFDeEYsS0FBUCxDQUFhQyxlQUFiLEdBQStCLE9BQS9CO0FBQ0FkLFFBQU0sQ0FBQ2dELFlBQVAsQ0FDRSwwTEFERjtBQUdBcUQsUUFBTSxDQUFDeEYsS0FBUCxDQUFhNEMsZUFBYixHQUErQiwyQkFBL0I7QUFDQTRDLFFBQU0sQ0FBQ3hGLEtBQVAsQ0FBYWlGLFVBQWIsR0FBMEIsT0FBMUI7QUFDRCxDQVpNLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgdG9nZ2xlRWRpdGFibGUsIGNoYW5nZUZvbnRPcHRpb24sIGV4dGVuZCB9IGZyb20gXCIuL3NjcmlwdHMvZmlsdGVyc1wiO1xuaW1wb3J0IHsgc29ubmV0LCBpbnRlcm5ldFBvZXQgfSBmcm9tIFwiLi4vdGVtcGxhdGVzL2RlbW9zXCI7XG5cbndpbmRvdy5lZGl0YWJsZSA9IGZhbHNlXG53aW5kb3cudG9nZ2xlRWRpdGFibGUgPSB0b2dnbGVFZGl0YWJsZVxud2luZG93LmNoYW5nZUZvbnRPcHRpb24gPSBjaGFuZ2VGb250T3B0aW9uO1xud2luZG93LmV4dGVuZCA9IGV4dGVuZDtcbndpbmRvdy5oZWlnaHRDaGFuZ2VzID0gMFxud2luZG93LndpZHRoQ2hhbmdlcyA9IDBcblxud2luZG93LnNvbm5ldCA9IHNvbm5ldDtcbndpbmRvdy5pbnRlcm5ldFBvZXQgPSBpbnRlcm5ldFBvZXQ7XG5cbmNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvclBpY2tlclwiKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JQaWNrZXIudmFsdWU7XG59KTtcblxuY29uc3QgZm9udFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnRTaXplXCIpO1xuZm9udFNpemUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplLnZhbHVlICsgXCJweFwiXG59KTtcblxubGV0IGVyYXN1cmVPcHRpb24gPSBcImJsYWNrb3V0XCI7XG53aW5kb3cuZXJhc3VyZU9wdGlvbiA9IGVyYXN1cmVPcHRpb247XG5cbmxldCBlcmFzdXJlU2VsZWN0aW9uID0gXCJjaGFyYWN0ZXJcIjtcbndpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gZXJhc3VyZVNlbGVjdGlvbjtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBFcmFzdXJlIFN0eWxlOiAke1xuLy8gICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG4vLyB9YDtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuLy8gKS5pbm5lckhUTUwgPSBgU2VsZWN0aW9uIFN0eWxlOiAke1xuLy8gICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4vLyAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4vLyB9YDtcblxud2luZG93LmNoYW5nZUVyYXN1cmVPcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlT3B0aW9uID0gb3B0aW9uXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBDdXJyZW50IFN0eWxlOiAke1xuICAgIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbiAgfWA7XG59XG5cbndpbmRvdy5jaGFuZ2VTZWxlY3Rpb25PcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gb3B0aW9uO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuICApLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4gIH1gO1xufTtcblxuXG53aW5kb3cuc3VibWl0VGV4dCA9ICgpID0+IHtcbiAgY29uc3Qgc3VibWl0dGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0ZWRUZXh0XCIpLnZhbHVlO1xuXG4gIHN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KT0+e1xuICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdldFdvcmQoZWxlKSB7XG4gIGxldCBwcmV2ID0gZWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgbGV0IG5leHQgPSBlbGUubmV4dEVsZW1lbnRTaWJsaW5nXG4gIGxldCBsZXR0ZXJzID0gW2VsZV1cbiAgd2hpbGUgKHByZXYgIT09IG51bGwgJiYgcHJldi5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgbGV0dGVycy5wdXNoKHByZXYpO1xuICAgIHByZXYgPSBwcmV2LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHByZXYgPT09IG51bGwgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiIFwiIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIi5cIikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICB3aGlsZSAobmV4dCAhPT0gIG51bGwgJiYgbmV4dC5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgICBsZXR0ZXJzLnB1c2gobmV4dClcbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChuZXh0ID09PSBudWxsIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBsZXR0ZXJzXG59XG5cbi8vIGNvbnN0IHN1Ym1pdHRlZFRleHQgPVxuLy8gICBcIkkgaGVhcmQgYSBGbHkgYnV6eiAtIHdoZW4gSSBkaWVkIC1cXG5UaGUgU3RpbGxuZXNzIGluIHRoZSBSb29tXFxuV2FzIGxpa2UgdGhlIFN0aWxsbmVzcyBpbiB0aGUgQWlyIC1cXG5CZXR3ZWVuIHRoZSBIZWF2ZXMgb2YgU3Rvcm1cXG5cIjtcblxud2luZG93LmdlbmVyYXRlVGV4dCA9IChzdWJtaXR0ZWRUZXh0KSA9PiB7XG4gIFxuICBzdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgMyk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbiAgfSk7XG59O1xuXG53aW5kb3cuY2xlYXJUZXh0ID0gKGFyZWEpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJlYSkuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAoYXJlYSA9PT0gXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXJlc3VsdHNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1kZWxldGVcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5maWxlc1swXTtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyByZWFkZXIucmVzdWx0ICsgXCIpXCI7XG4gIH07XG4gIGlmIChmaWxlKSByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbn0pO1xuXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLmRhdGFtdXNlLmNvbS93b3Jkcz9cIlxuXG53aW5kb3cuZmluZFdvcmQgPSAoZmlsdGVyKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFRlcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1zZWFyY2hcIikudmFsdWU7XG4gIGxldCB1cmxDb3B5ID0gbmV3IFVSTCh1cmwpXG4gIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybENvcHkuc2VhcmNoKTtcbiAgcGFyYW1zLmFwcGVuZChmaWx0ZXIsIHNlYXJjaFRlcm1zKTtcbiAgZmV0Y2godXJsICsgcGFyYW1zLnRvU3RyaW5nKCkgIClcbiAgICAudGhlbiggcmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkpO1xufTtcblxuZnVuY3Rpb24gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkge1xuICAvLyBzaHVmZmxlQXJyYXkoZGF0YSkgdHVybiBpdCBvZmZcbiAgY29uc3QgcmVzdWx0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKTtcbiAgZGF0YS5zbGljZSgwLDIwKS5mb3JFYWNoKCAod29yZE9iamVjdCk9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gd29yZE9iamVjdC53b3JkICsgXCIgXCI7XG4gICAgcmVzdWx0c0JveC5hcHBlbmQoc3Bhbik7XG4gIH0pXG4gIHJlc3VsdHNCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vL0Zyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheVxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGNvbnN0IHRvZ2dsZUVkaXRhYmxlID0gKCkgPT4ge1xuIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiBpZiAoIXdpbmRvdy5lZGl0YWJsZSkge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKT0+IHtcbiAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICB9KVxuICAgICB3aW5kb3cuZWRpdGFibGUgPSB0cnVlXG4gfSBlbHNlIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICAgfSk7XG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xuIH1cbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSAoZGlyZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhlaWdodFwiKSB7XG4gICAgICAgIHdpbmRvdy5oZWlnaHRDaGFuZ2VzICs9IDFcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmhlaWdodCA9IDUwMCArICgxMCAqIHdpbmRvdy5oZWlnaHRDaGFuZ2VzKSArIFwicHhcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LndpZHRoQ2hhbmdlcyArPSAxO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUud2lkdGggPSA3MDAgKyAoMTAgKiB3aW5kb3cud2lkdGhDaGFuZ2VzKSArIFwicHhcIlxuICAgICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlRm9udE9wdGlvbiA9IChmb250U3R5bGUpID0+e1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5mb250RmFtaWx5ID0gZm9udFN0eWxlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1mb250LXN0eWxlXCIpLmlubmVySFRNTCA9IGBGb250IFN0eWxlOiAke2ZvbnRTdHlsZX1gO1xufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3Qgc29ubmV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIGNvbnN0IHNvbm5ldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ubmV0XCIpO1xuICAgIGNvbnN0IGNsb25lID0gc29ubmV0LmNsb25lTm9kZSh0cnVlKVxuICAgIG9yaWdpbmFsLnJlcGxhY2VXaXRoKGNsb25lKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ubmV0XCIpLmlkID0gXCJ0YXJnZXRUZXh0XCJcbiAgICBhbGVydChcIkEgcmV3b3JraW5nIG9mIFNoYWtlc3BlYXJlJ3MgU29ubmV0IDE4IHdpdGggdGhlIEZhZGUtb3V0IEVyYXN1cmUgU3R5bGUuXCIpO1xufVxuXG5leHBvcnQgY29uc3QgaW50ZXJuZXRQb2V0ID0gKCkgPT4ge1xuICBhbGVydChcIlBvZW0gdGV4dCB3YXMgZ2VuZXJhdGVkIGJ5IGEgQUkhXCIpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gIHdpbmRvdy5jbGVhclRleHQoXCJ0YXJnZXRUZXh0XCIpO1xuICBjYW52YXMuc3R5bGUud2lkdGggPSA1MDA7XG4gIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSA1MDA7XG4gIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gIHdpbmRvdy5nZW5lcmF0ZVRleHQoXG4gICAgXCJkb27igJl0IG1pc3Rha2VcXG5zYWx0IGZvciBzdWdhclxcbml0IG5ldmVyIHJlYWxseSBsZWZ0IHRoZSBoYW5kc1xcbm9mIHRob3NlIHdobyBicm9rZSB5b3VcXG50aGUgdGhpbmdcXG53b3J0aCBob2xkaW5nIG9udG9cXG53b3VsZCBub3QgY29tZSBmb3IgeW91XFxueW91ciBzd2VldG5lc3MgYmVsb25nc1xcbm9ubHkgdG8geW91cnNlbGZcXG5cIlxuICApO1xuICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL2ltYWdlcy9jYWtlLmpwZycpXCJcbiAgY2FudmFzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlRpbWVzXCI7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=