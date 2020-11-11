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
window.eraseable = true;
window.toggleEditable = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["toggleEditable"];
window.toggleErasable = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["toggleErasable"];
window.changeFontOption = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["changeFontOption"];
window.extend = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["extend"];
window.heightChanges = 0;
window.widthChanges = 0;
window.demo = _templates_demos__WEBPACK_IMPORTED_MODULE_2__["demo"];
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
window.erasureSelection = erasureSelection;

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
      if (window.erasureSelection === "character" && window.eraseable) {
        this.classList.toggle("".concat(window.erasureOption));
      } else if (window.erasureSelection === "word" && window.eraseable) {
        getWord(this).forEach(function (letterElement) {
          letterElement.classList.toggle("".concat(window.erasureOption));
        });
      }
    });
    var paragraph = document.getElementById("targetText");
    paragraph.append(span);
  });
};

window.getWord = function getWord(ele) {
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
};

window.generateText = function (submittedText) {
  submittedText.split("").forEach(function (letter) {
    var span = document.createElement("span");
    span.className = "visible";
    span.setAttribute("contenteditable", false);
    span.setAttribute("z-index", 3);
    span.innerHTML = letter;
    span.addEventListener("click", function () {
      if (window.erasureSelection === "character" && window.eraseable) {
        this.classList.toggle("".concat(window.erasureOption));
      } else if (window.erasureSelection === "word" && window.eraseable) {
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

window.removePic = function () {
  document.getElementById("targetText").style.backgroundImage = "";
};

var url = "https://api.datamuse.com/words?";

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
  var resultsBox = document.getElementById("inspiration-results");
  data.slice(0, 20).forEach(function (wordObject) {
    var span = document.createElement("span");
    span.innerHTML = wordObject.word + " ";
    resultsBox.append(span);
  });
  resultsBox.style.display = "block";
  document.getElementById("inspiration-delete").style.display = "block";
}

/***/ }),

/***/ "./src/scripts/filters.js":
/*!********************************!*\
  !*** ./src/scripts/filters.js ***!
  \********************************/
/*! exports provided: toggleEditable, toggleErasable, extend, changeFontOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditable", function() { return toggleEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleErasable", function() { return toggleErasable; });
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

  document.getElementById("editable-button").innerHTML = window.editable ? "Editable: On" : "Editable: Off";
};
var toggleErasable = function toggleErasable() {
  window.eraseable = !window.eraseable;
  document.getElementById("erasable-button").innerHTML = window.eraseable ? "Erasure: On" : "Erasure: Off";
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
/*! exports provided: demo, internetPoet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internetPoet", function() { return internetPoet; });
// export const sonnet = () => {
//     const original = document.getElementById("targetText");
//     const sonnet = document.getElementById("sonnet");
//     const clone = sonnet.cloneNode(true)
//     original.replaceWith(clone)
//     document.getElementById("sonnet").id = "targetText"
//     alert("A reworking of Shakespeare's Sonnet 18 with the Fade-out Erasure Style.");
// }
var demo = function demo(name) {
  var original = document.getElementById("targetText");
  var sonnet = document.getElementById(name);
  var clone = sonnet.cloneNode(true);
  original.replaceWith(clone);
  document.getElementById(name).id = "targetText";
  document.getElementById("targetText").childNodes.forEach(function (child) {
    child.addEventListener("click", function () {
      if (window.erasureSelection === "character" && window.eraseable) {
        this.classList.toggle("".concat(window.erasureOption));
      } else if (window.erasureSelection === "word" && window.eraseable) {
        getWord(this).forEach(function (letterElement) {
          letterElement.classList.toggle("".concat(window.erasureOption));
        });
      }
    });
  });

  switch (name) {
    case "sonnet":
      changeErasureOption("fade-out");
      alert("A reworking of Shakespeare's Sonnet 18 with the Fade-out Erasure Style. Click the document to write your own version of the poem!");
      break;

    case "order":
      changeErasureOption("invisible");
      changeSelectionOption("word");
      alert("Executive Order 9066 authorized internment camps for Japansese-Americans during WWII. This example uses the editor's erasure technique to examine the language used in this historical text. Click the document to reveal the words that were erased.");
      break;
  }
};
var internetPoet = function internetPoet() {
  alert("Write some heartfelt verse. Use lower case, Times New Roman. Upload an image using the background picture tool. Post on Instagram.\nThe poem was generated by a computer!");
  var canvas = document.getElementById("targetText");
  window.clearText("targetText");
  canvas.style.width = "500px";
  canvas.style.height = "500px";
  canvas.style.backgroundColor = "white";
  canvas.style.whiteSpace = "pre-wrap";
  canvas.style.fontSize = "14px";
  window.generateText("don’t mistake \nsalt for sugar \nit never really left the hands \nof those who broke you \nthe thing \nworth holding onto \nwould not come for you \nyour sweetness belongs \nonly to yourself \n");
  canvas.style.backgroundImage = "url('cake.jpg')";
  canvas.style.fontFamily = "Times";
  changeSelectionOption("word"); // canvas.childNodes.forEach((child) => {
  //   child.addEventListener("click", function () {
  //     if (window.erasureSelection === "character") {
  //     //   this.classList.toggle(`${window.erasureOption}`);
  //     } else {
  //       getWord(this).forEach((letterElement) => {
  //         //   debugger
  //         // letterElement.classList.toggle(`${window.erasureOption}`);
  //         // debugger
  //       });
  //     }
  //   });
  // });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9kZW1vcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlZGl0YWJsZSIsImVyYXNlYWJsZSIsInRvZ2dsZUVkaXRhYmxlIiwidG9nZ2xlRXJhc2FibGUiLCJjaGFuZ2VGb250T3B0aW9uIiwiZXh0ZW5kIiwiaGVpZ2h0Q2hhbmdlcyIsIndpZHRoQ2hhbmdlcyIsImRlbW8iLCJpbnRlcm5ldFBvZXQiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImZvbnRTaXplIiwiZXJhc3VyZU9wdGlvbiIsImVyYXN1cmVTZWxlY3Rpb24iLCJjaGFuZ2VFcmFzdXJlT3B0aW9uIiwib3B0aW9uIiwiaW5uZXJIVE1MIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYW5nZVNlbGVjdGlvbk9wdGlvbiIsInN1Ym1pdFRleHQiLCJzdWJtaXR0ZWRUZXh0Iiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRXb3JkIiwibGV0dGVyRWxlbWVudCIsInBhcmFncmFwaCIsImFwcGVuZCIsImVsZSIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImxldHRlcnMiLCJwdXNoIiwiZ2VuZXJhdGVUZXh0IiwiY2xlYXJUZXh0IiwiYXJlYSIsImRpc3BsYXkiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFja2dyb3VuZEltYWdlIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInJlbW92ZVBpYyIsInVybCIsImZpbmRXb3JkIiwiZmlsdGVyIiwic2VhcmNoVGVybXMiLCJ1cmxDb3B5IiwiVVJMIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZmV0Y2giLCJ0b1N0cmluZyIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJwYXJlc2VEaXNwbGF5RGF0YSIsInJlc3VsdHNCb3giLCJ3b3JkT2JqZWN0Iiwid29yZCIsInNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpcmVjdGlvbiIsImhlaWdodCIsIndpZHRoIiwiZm9udFN0eWxlIiwiZm9udEZhbWlseSIsIm5hbWUiLCJvcmlnaW5hbCIsInNvbm5ldCIsImNsb25lIiwiY2xvbmVOb2RlIiwicmVwbGFjZVdpdGgiLCJpZCIsImNoaWxkTm9kZXMiLCJjaGlsZCIsImFsZXJ0IiwiY2FudmFzIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyB0b2dnbGVFZGl0YWJsZSwgY2hhbmdlRm9udE9wdGlvbiwgZXh0ZW5kLCB0b2dnbGVFcmFzYWJsZSB9IGZyb20gXCIuL3NjcmlwdHMvZmlsdGVyc1wiO1xuaW1wb3J0IHsgZGVtbywgaW50ZXJuZXRQb2V0IH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9kZW1vc1wiO1xuXG5cbndpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xud2luZG93LmVyYXNlYWJsZSA9IHRydWU7XG53aW5kb3cudG9nZ2xlRWRpdGFibGUgPSB0b2dnbGVFZGl0YWJsZTtcbndpbmRvdy50b2dnbGVFcmFzYWJsZSA9IHRvZ2dsZUVyYXNhYmxlO1xud2luZG93LmNoYW5nZUZvbnRPcHRpb24gPSBjaGFuZ2VGb250T3B0aW9uO1xud2luZG93LmV4dGVuZCA9IGV4dGVuZDtcbndpbmRvdy5oZWlnaHRDaGFuZ2VzID0gMDtcbndpbmRvdy53aWR0aENoYW5nZXMgPSAwO1xuXG53aW5kb3cuZGVtbyA9IGRlbW87XG53aW5kb3cuaW50ZXJuZXRQb2V0ID0gaW50ZXJuZXRQb2V0O1xuXG5cbmNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvclBpY2tlclwiKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JQaWNrZXIudmFsdWU7XG59KTtcblxuY29uc3QgZm9udFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnRTaXplXCIpO1xuZm9udFNpemUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplLnZhbHVlICsgXCJweFwiXG59KTtcblxubGV0IGVyYXN1cmVPcHRpb24gPSBcImJsYWNrb3V0XCI7XG53aW5kb3cuZXJhc3VyZU9wdGlvbiA9IGVyYXN1cmVPcHRpb247XG5cbmxldCBlcmFzdXJlU2VsZWN0aW9uID0gXCJjaGFyYWN0ZXJcIjtcbndpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gZXJhc3VyZVNlbGVjdGlvbjtcblxud2luZG93LmNoYW5nZUVyYXN1cmVPcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlT3B0aW9uID0gb3B0aW9uXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBDdXJyZW50IFN0eWxlOiAke1xuICAgIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbiAgfWA7XG59XG5cbndpbmRvdy5jaGFuZ2VTZWxlY3Rpb25PcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gb3B0aW9uO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuICApLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4gIH1gO1xufTtcblxuXG53aW5kb3cuc3VibWl0VGV4dCA9ICgpID0+IHtcbiAgY29uc3Qgc3VibWl0dGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0ZWRUZXh0XCIpLnZhbHVlO1xuXG4gIHN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIgJiYgd2luZG93LmVyYXNlYWJsZSkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcIndvcmRcIiAmJiB3aW5kb3cuZXJhc2VhYmxlKSB7XG4gICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbiAgfSk7XG59O1xuXG53aW5kb3cuZ2V0V29yZCA9IGZ1bmN0aW9uIGdldFdvcmQoZWxlKSB7XG4gIFxuICBsZXQgcHJldiA9IGVsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICBsZXQgbmV4dCA9IGVsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGxldCBsZXR0ZXJzID0gW2VsZV07XG4gIHdoaWxlIChwcmV2ICE9PSBudWxsICYmIHByZXYuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgIGxldHRlcnMucHVzaChwcmV2KTtcbiAgICBwcmV2ID0gcHJldi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgd2hpbGUgKG5leHQgIT09ICBudWxsICYmIG5leHQuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgICAgbGV0dGVycy5wdXNoKG5leHQpXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAobmV4dCA9PT0gbnVsbCB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgbmV4dC5pbm5lckhUTUwgPT09IFwiLlwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBsZXR0ZXJzO1xuICBcbn1cblxud2luZG93LmdlbmVyYXRlVGV4dCA9IChzdWJtaXR0ZWRUZXh0KSA9PiB7XG4gIFxuICBzdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgMyk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiICYmIHdpbmRvdy5lcmFzZWFibGUpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJ3b3JkXCIgJiYgd2luZG93LmVyYXNlYWJsZSkge1xuICAgICAgICBnZXRXb3JkKHRoaXMpLmZvckVhY2goKGxldHRlckVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG4gIH0pO1xufTtcblxud2luZG93LmNsZWFyVGV4dCA9IChhcmVhKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFyZWEpLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgaWYgKGFyZWEgPT09IFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5maWxlc1swXTtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyByZWFkZXIucmVzdWx0ICsgXCIpXCI7XG4gIH07XG4gIGlmIChmaWxlKSByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbn0pO1xuXG53aW5kb3cucmVtb3ZlUGljID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcbn07XG5cbmxldCB1cmwgPSBcImh0dHBzOi8vYXBpLmRhdGFtdXNlLmNvbS93b3Jkcz9cIlxuXG53aW5kb3cuZmluZFdvcmQgPSAoZmlsdGVyKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFRlcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1zZWFyY2hcIikudmFsdWU7XG4gIGxldCB1cmxDb3B5ID0gbmV3IFVSTCh1cmwpXG4gIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybENvcHkuc2VhcmNoKTtcbiAgcGFyYW1zLmFwcGVuZChmaWx0ZXIsIHNlYXJjaFRlcm1zKTtcbiAgZmV0Y2godXJsICsgcGFyYW1zLnRvU3RyaW5nKCkgIClcbiAgICAudGhlbiggcmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkpO1xufTtcblxuZnVuY3Rpb24gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkge1xuICBjb25zdCByZXN1bHRzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpO1xuICBkYXRhLnNsaWNlKDAsMjApLmZvckVhY2goICh3b3JkT2JqZWN0KT0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSB3b3JkT2JqZWN0LndvcmQgKyBcIiBcIjtcbiAgICByZXN1bHRzQm94LmFwcGVuZChzcGFuKTtcbiAgfSlcbiAgcmVzdWx0c0JveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tZGVsZXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG4iLCJleHBvcnQgY29uc3QgdG9nZ2xlRWRpdGFibGUgPSAoKSA9PiB7XG4gY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxuIGlmICghd2luZG93LmVkaXRhYmxlKSB7XG4gICAgIHNwYW5zLmZvckVhY2goKHNwYW4pPT4ge1xuICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgIH0pXG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IHRydWVcbiB9IGVsc2Uge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgICB9KTtcbiAgICAgd2luZG93LmVkaXRhYmxlID0gZmFsc2U7XG4gfVxuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0YWJsZS1idXR0b25cIikuaW5uZXJIVE1MID0gd2luZG93LmVkaXRhYmxlID8gXCJFZGl0YWJsZTogT25cIiA6IFwiRWRpdGFibGU6IE9mZlwiXG59O1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRXJhc2FibGUgPSAoKSA9PiB7XG4gIHdpbmRvdy5lcmFzZWFibGUgPSAhd2luZG93LmVyYXNlYWJsZVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVyYXNhYmxlLWJ1dHRvblwiKS5pbm5lckhUTUwgPSB3aW5kb3cuZXJhc2VhYmxlID8gXCJFcmFzdXJlOiBPblwiIDogXCJFcmFzdXJlOiBPZmZcIlxufTtcblxuXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSAoZGlyZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhlaWdodFwiKSB7XG4gICAgICAgIHdpbmRvdy5oZWlnaHRDaGFuZ2VzICs9IDFcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmhlaWdodCA9IDUwMCArICgxMCAqIHdpbmRvdy5oZWlnaHRDaGFuZ2VzKSArIFwicHhcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LndpZHRoQ2hhbmdlcyArPSAxO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUud2lkdGggPSA3MDAgKyAoMTAgKiB3aW5kb3cud2lkdGhDaGFuZ2VzKSArIFwicHhcIlxuICAgICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlRm9udE9wdGlvbiA9IChmb250U3R5bGUpID0+e1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5mb250RmFtaWx5ID0gZm9udFN0eWxlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1mb250LXN0eWxlXCIpLmlubmVySFRNTCA9IGBGb250IFN0eWxlOiAke2ZvbnRTdHlsZX1gO1xufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHBvcnQgY29uc3Qgc29ubmV0ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IG9yaWdpbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuLy8gICAgIGNvbnN0IHNvbm5ldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ubmV0XCIpO1xuLy8gICAgIGNvbnN0IGNsb25lID0gc29ubmV0LmNsb25lTm9kZSh0cnVlKVxuLy8gICAgIG9yaWdpbmFsLnJlcGxhY2VXaXRoKGNsb25lKVxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ubmV0XCIpLmlkID0gXCJ0YXJnZXRUZXh0XCJcbi8vICAgICBhbGVydChcIkEgcmV3b3JraW5nIG9mIFNoYWtlc3BlYXJlJ3MgU29ubmV0IDE4IHdpdGggdGhlIEZhZGUtb3V0IEVyYXN1cmUgU3R5bGUuXCIpO1xuXG5cblxuLy8gfVxuZXhwb3J0IGNvbnN0IGRlbW8gPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIGNvbnN0IHNvbm5ldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgIGNvbnN0IGNsb25lID0gc29ubmV0LmNsb25lTm9kZSh0cnVlKVxuICAgIG9yaWdpbmFsLnJlcGxhY2VXaXRoKGNsb25lKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpLmlkID0gXCJ0YXJnZXRUZXh0XCJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuY2hpbGROb2Rlcy5mb3JFYWNoKCAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIiAmJiB3aW5kb3cuZXJhc2VhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcIndvcmRcIiAmJlxuICAgICAgICAgICAgICAgIHdpbmRvdy5lcmFzZWFibGVcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSBcInNvbm5ldFwiOlxuICAgICAgICAgICAgY2hhbmdlRXJhc3VyZU9wdGlvbihcImZhZGUtb3V0XCIpO1xuICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICBcIkEgcmV3b3JraW5nIG9mIFNoYWtlc3BlYXJlJ3MgU29ubmV0IDE4IHdpdGggdGhlIEZhZGUtb3V0IEVyYXN1cmUgU3R5bGUuIENsaWNrIHRoZSBkb2N1bWVudCB0byB3cml0ZSB5b3VyIG93biB2ZXJzaW9uIG9mIHRoZSBwb2VtIVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICBjYXNlIFwib3JkZXJcIjpcbiAgICAgICAgICAgIGNoYW5nZUVyYXN1cmVPcHRpb24oXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBjaGFuZ2VTZWxlY3Rpb25PcHRpb24oXCJ3b3JkXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCJFeGVjdXRpdmUgT3JkZXIgOTA2NiBhdXRob3JpemVkIGludGVybm1lbnQgY2FtcHMgZm9yIEphcGFuc2VzZS1BbWVyaWNhbnMgZHVyaW5nIFdXSUkuIFRoaXMgZXhhbXBsZSB1c2VzIHRoZSBlZGl0b3IncyBlcmFzdXJlIHRlY2huaXF1ZSB0byBleGFtaW5lIHRoZSBsYW5ndWFnZSB1c2VkIGluIHRoaXMgaGlzdG9yaWNhbCB0ZXh0LiBDbGljayB0aGUgZG9jdW1lbnQgdG8gcmV2ZWFsIHRoZSB3b3JkcyB0aGF0IHdlcmUgZXJhc2VkLlwiKTtcbiAgICAgICAgYnJlYWtcbiAgICB9ICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBjb25zdCBpbnRlcm5ldFBvZXQgPSAoKSA9PiB7XG4gICAgYWxlcnQoXG4gICAgICBcIldyaXRlIHNvbWUgaGVhcnRmZWx0IHZlcnNlLiBVc2UgbG93ZXIgY2FzZSwgVGltZXMgTmV3IFJvbWFuLiBVcGxvYWQgYW4gaW1hZ2UgdXNpbmcgdGhlIGJhY2tncm91bmQgcGljdHVyZSB0b29sLiBQb3N0IG9uIEluc3RhZ3JhbS5cXG5UaGUgcG9lbSB3YXMgZ2VuZXJhdGVkIGJ5IGEgY29tcHV0ZXIhXCJcbiAgICApO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICB3aW5kb3cuY2xlYXJUZXh0KFwidGFyZ2V0VGV4dFwiKTtcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSBcIjUwMHB4XCI7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IFwiNTAwcHhcIjtcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGNhbnZhcy5zdHlsZS53aGl0ZVNwYWNlID0gXCJwcmUtd3JhcFwiO1xuICAgIGNhbnZhcy5zdHlsZS5mb250U2l6ZSA9IFwiMTRweFwiO1xuICAgIHdpbmRvdy5nZW5lcmF0ZVRleHQoXG4gICAgICAgIFwiZG9u4oCZdCBtaXN0YWtlIFxcbnNhbHQgZm9yIHN1Z2FyIFxcbml0IG5ldmVyIHJlYWxseSBsZWZ0IHRoZSBoYW5kcyBcXG5vZiB0aG9zZSB3aG8gYnJva2UgeW91IFxcbnRoZSB0aGluZyBcXG53b3J0aCBob2xkaW5nIG9udG8gXFxud291bGQgbm90IGNvbWUgZm9yIHlvdSBcXG55b3VyIHN3ZWV0bmVzcyBiZWxvbmdzIFxcbm9ubHkgdG8geW91cnNlbGYgXFxuXCJcbiAgICApO1xuICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnY2FrZS5qcGcnKVwiO1xuICAgIGNhbnZhcy5zdHlsZS5mb250RmFtaWx5ID0gXCJUaW1lc1wiO1xuICAgIGNoYW5nZVNlbGVjdGlvbk9wdGlvbihcIndvcmRcIik7XG5cblxuICAgIC8vIGNhbnZhcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgLy8gICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAvLyAgICAgLy8gICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgLy8gICAgICAgICAvLyAgIGRlYnVnZ2VyXG4gICAgLy8gICAgICAgICAvLyBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgLy8gICAgICAgICAvLyBkZWJ1Z2dlclxuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==