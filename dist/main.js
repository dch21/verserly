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
  canvas.style.backgroundImage = "url('/../images/cake.jpg')";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9kZW1vcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlZGl0YWJsZSIsImVyYXNlYWJsZSIsInRvZ2dsZUVkaXRhYmxlIiwidG9nZ2xlRXJhc2FibGUiLCJjaGFuZ2VGb250T3B0aW9uIiwiZXh0ZW5kIiwiaGVpZ2h0Q2hhbmdlcyIsIndpZHRoQ2hhbmdlcyIsImRlbW8iLCJpbnRlcm5ldFBvZXQiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImZvbnRTaXplIiwiZXJhc3VyZU9wdGlvbiIsImVyYXN1cmVTZWxlY3Rpb24iLCJjaGFuZ2VFcmFzdXJlT3B0aW9uIiwib3B0aW9uIiwiaW5uZXJIVE1MIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYW5nZVNlbGVjdGlvbk9wdGlvbiIsInN1Ym1pdFRleHQiLCJzdWJtaXR0ZWRUZXh0Iiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRXb3JkIiwibGV0dGVyRWxlbWVudCIsInBhcmFncmFwaCIsImFwcGVuZCIsImVsZSIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImxldHRlcnMiLCJwdXNoIiwiZ2VuZXJhdGVUZXh0IiwiY2xlYXJUZXh0IiwiYXJlYSIsImRpc3BsYXkiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFja2dyb3VuZEltYWdlIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInVybCIsImZpbmRXb3JkIiwiZmlsdGVyIiwic2VhcmNoVGVybXMiLCJ1cmxDb3B5IiwiVVJMIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZmV0Y2giLCJ0b1N0cmluZyIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJwYXJlc2VEaXNwbGF5RGF0YSIsInJlc3VsdHNCb3giLCJ3b3JkT2JqZWN0Iiwid29yZCIsInNodWZmbGVBcnJheSIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlyZWN0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJmb250U3R5bGUiLCJmb250RmFtaWx5IiwibmFtZSIsIm9yaWdpbmFsIiwic29ubmV0IiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJyZXBsYWNlV2l0aCIsImlkIiwiY2hpbGROb2RlcyIsImNoaWxkIiwiYWxlcnQiLCJjYW52YXMiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtR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Q0FELFFBQU0sQ0FBQzVGLEtBQVAsQ0FBYUcsUUFBYixHQUF3QixNQUF4QjtBQUNBbEIsUUFBTSxDQUFDa0QsWUFBUCxDQUNJLG1NQURKO0FBR0F5RCxRQUFNLENBQUM1RixLQUFQLENBQWE0QyxlQUFiLEdBQStCLDRCQUEvQjtBQUNBZ0QsUUFBTSxDQUFDNUYsS0FBUCxDQUFhaUYsVUFBYixHQUEwQixPQUExQjtBQUNBckUsdUJBQXFCLENBQUMsTUFBRCxDQUFyQixDQWhCOEIsQ0FtQjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FoQ00sQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyB0b2dnbGVFZGl0YWJsZSwgY2hhbmdlRm9udE9wdGlvbiwgZXh0ZW5kLCB0b2dnbGVFcmFzYWJsZSB9IGZyb20gXCIuL3NjcmlwdHMvZmlsdGVyc1wiO1xuaW1wb3J0IHsgZGVtbywgaW50ZXJuZXRQb2V0IH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9kZW1vc1wiO1xuXG5cbndpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xud2luZG93LmVyYXNlYWJsZSA9IHRydWU7XG53aW5kb3cudG9nZ2xlRWRpdGFibGUgPSB0b2dnbGVFZGl0YWJsZVxud2luZG93LnRvZ2dsZUVyYXNhYmxlID0gdG9nZ2xlRXJhc2FibGU7XG53aW5kb3cuY2hhbmdlRm9udE9wdGlvbiA9IGNoYW5nZUZvbnRPcHRpb247XG53aW5kb3cuZXh0ZW5kID0gZXh0ZW5kO1xud2luZG93LmhlaWdodENoYW5nZXMgPSAwXG53aW5kb3cud2lkdGhDaGFuZ2VzID0gMFxuXG53aW5kb3cuZGVtbyA9IGRlbW87XG53aW5kb3cuaW50ZXJuZXRQb2V0ID0gaW50ZXJuZXRQb2V0O1xuXG5cbmNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvclBpY2tlclwiKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JQaWNrZXIudmFsdWU7XG59KTtcblxuY29uc3QgZm9udFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnRTaXplXCIpO1xuZm9udFNpemUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplLnZhbHVlICsgXCJweFwiXG59KTtcblxubGV0IGVyYXN1cmVPcHRpb24gPSBcImJsYWNrb3V0XCI7XG53aW5kb3cuZXJhc3VyZU9wdGlvbiA9IGVyYXN1cmVPcHRpb247XG5cbmxldCBlcmFzdXJlU2VsZWN0aW9uID0gXCJjaGFyYWN0ZXJcIjtcbndpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gZXJhc3VyZVNlbGVjdGlvbjtcblxud2luZG93LmNoYW5nZUVyYXN1cmVPcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlT3B0aW9uID0gb3B0aW9uXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBDdXJyZW50IFN0eWxlOiAke1xuICAgIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbiAgfWA7XG59XG5cbndpbmRvdy5jaGFuZ2VTZWxlY3Rpb25PcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gb3B0aW9uO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuICApLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4gIH1gO1xufTtcblxuXG53aW5kb3cuc3VibWl0VGV4dCA9ICgpID0+IHtcbiAgY29uc3Qgc3VibWl0dGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0ZWRUZXh0XCIpLnZhbHVlO1xuXG4gIHN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIgJiYgd2luZG93LmVyYXNlYWJsZSkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcIndvcmRcIiAmJiB3aW5kb3cuZXJhc2VhYmxlKSB7XG4gICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbiAgfSk7XG59O1xuXG53aW5kb3cuZ2V0V29yZCA9IGZ1bmN0aW9uIGdldFdvcmQoZWxlKSB7XG4gIFxuICBsZXQgcHJldiA9IGVsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIGxldCBuZXh0ID0gZWxlLm5leHRFbGVtZW50U2libGluZ1xuICBsZXQgbGV0dGVycyA9IFtlbGVdXG4gIHdoaWxlIChwcmV2ICE9PSBudWxsICYmIHByZXYuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgIGxldHRlcnMucHVzaChwcmV2KTtcbiAgICBwcmV2ID0gcHJldi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgd2hpbGUgKG5leHQgIT09ICBudWxsICYmIG5leHQuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgICAgbGV0dGVycy5wdXNoKG5leHQpXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAobmV4dCA9PT0gbnVsbCB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgbmV4dC5pbm5lckhUTUwgPT09IFwiLlwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBsZXR0ZXJzXG4gIFxufVxuXG53aW5kb3cuZ2VuZXJhdGVUZXh0ID0gKHN1Ym1pdHRlZFRleHQpID0+IHtcbiAgXG4gIHN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiei1pbmRleFwiLCAzKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIgJiYgd2luZG93LmVyYXNlYWJsZSkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcIndvcmRcIiAmJiB3aW5kb3cuZXJhc2VhYmxlKSB7XG4gICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbiAgfSk7XG59O1xuXG53aW5kb3cuY2xlYXJUZXh0ID0gKGFyZWEpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJlYSkuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAoYXJlYSA9PT0gXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXJlc3VsdHNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1kZWxldGVcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5maWxlc1swXTtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyByZWFkZXIucmVzdWx0ICsgXCIpXCI7XG4gIH07XG4gIGlmIChmaWxlKSByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbn0pO1xuXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLmRhdGFtdXNlLmNvbS93b3Jkcz9cIlxuXG53aW5kb3cuZmluZFdvcmQgPSAoZmlsdGVyKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFRlcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1zZWFyY2hcIikudmFsdWU7XG4gIGxldCB1cmxDb3B5ID0gbmV3IFVSTCh1cmwpXG4gIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybENvcHkuc2VhcmNoKTtcbiAgcGFyYW1zLmFwcGVuZChmaWx0ZXIsIHNlYXJjaFRlcm1zKTtcbiAgZmV0Y2godXJsICsgcGFyYW1zLnRvU3RyaW5nKCkgIClcbiAgICAudGhlbiggcmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkpO1xufTtcblxuZnVuY3Rpb24gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkge1xuICAvLyBzaHVmZmxlQXJyYXkoZGF0YSkgdHVybiBpdCBvZmZcbiAgY29uc3QgcmVzdWx0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKTtcbiAgZGF0YS5zbGljZSgwLDIwKS5mb3JFYWNoKCAod29yZE9iamVjdCk9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gd29yZE9iamVjdC53b3JkICsgXCIgXCI7XG4gICAgcmVzdWx0c0JveC5hcHBlbmQoc3Bhbik7XG4gIH0pXG4gIHJlc3VsdHNCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vL0Zyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheVxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGNvbnN0IHRvZ2dsZUVkaXRhYmxlID0gKCkgPT4ge1xuIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiBpZiAoIXdpbmRvdy5lZGl0YWJsZSkge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKT0+IHtcbiAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICB9KVxuICAgICB3aW5kb3cuZWRpdGFibGUgPSB0cnVlXG4gfSBlbHNlIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICAgfSk7XG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xuIH1cbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGFibGUtYnV0dG9uXCIpLmlubmVySFRNTCA9IHdpbmRvdy5lZGl0YWJsZSA/IFwiRWRpdGFibGU6IE9uXCIgOiBcIkVkaXRhYmxlOiBPZmZcIlxufTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUVyYXNhYmxlID0gKCkgPT4ge1xuICB3aW5kb3cuZXJhc2VhYmxlID0gIXdpbmRvdy5lcmFzZWFibGVcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcmFzYWJsZS1idXR0b25cIikuaW5uZXJIVE1MID0gd2luZG93LmVyYXNlYWJsZSA/IFwiRXJhc3VyZTogT25cIiA6IFwiRXJhc3VyZTogT2ZmXCJcbn07XG5cblxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gKGRpcmVjdGlvbikgPT4ge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJoZWlnaHRcIikge1xuICAgICAgICB3aW5kb3cuaGVpZ2h0Q2hhbmdlcyArPSAxXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5oZWlnaHQgPSA1MDAgKyAoMTAgKiB3aW5kb3cuaGVpZ2h0Q2hhbmdlcykgKyBcInB4XCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy53aWR0aENoYW5nZXMgKz0gMTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLndpZHRoID0gNzAwICsgKDEwICogd2luZG93LndpZHRoQ2hhbmdlcykgKyBcInB4XCJcbiAgICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZUZvbnRPcHRpb24gPSAoZm9udFN0eWxlKSA9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuZm9udEZhbWlseSA9IGZvbnRTdHlsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtZm9udC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgRm9udCBTdHlsZTogJHtmb250U3R5bGV9YDtcbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXhwb3J0IGNvbnN0IHNvbm5ldCA9ICgpID0+IHtcbi8vICAgICBjb25zdCBvcmlnaW5hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbi8vICAgICBjb25zdCBzb25uZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvbm5ldFwiKTtcbi8vICAgICBjb25zdCBjbG9uZSA9IHNvbm5ldC5jbG9uZU5vZGUodHJ1ZSlcbi8vICAgICBvcmlnaW5hbC5yZXBsYWNlV2l0aChjbG9uZSlcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvbm5ldFwiKS5pZCA9IFwidGFyZ2V0VGV4dFwiXG4vLyAgICAgYWxlcnQoXCJBIHJld29ya2luZyBvZiBTaGFrZXNwZWFyZSdzIFNvbm5ldCAxOCB3aXRoIHRoZSBGYWRlLW91dCBFcmFzdXJlIFN0eWxlLlwiKTtcblxuXG5cbi8vIH1cbmV4cG9ydCBjb25zdCBkZW1vID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBvcmlnaW5hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBjb25zdCBzb25uZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcbiAgICBjb25zdCBjbG9uZSA9IHNvbm5ldC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBvcmlnaW5hbC5yZXBsYWNlV2l0aChjbG9uZSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKS5pZCA9IFwidGFyZ2V0VGV4dFwiXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLmNoaWxkTm9kZXMuZm9yRWFjaCggKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIgJiYgd2luZG93LmVyYXNlYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJ3b3JkXCIgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cuZXJhc2VhYmxlXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgXCJzb25uZXRcIjpcbiAgICAgICAgICAgIGNoYW5nZUVyYXN1cmVPcHRpb24oXCJmYWRlLW91dFwiKTtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgXCJBIHJld29ya2luZyBvZiBTaGFrZXNwZWFyZSdzIFNvbm5ldCAxOCB3aXRoIHRoZSBGYWRlLW91dCBFcmFzdXJlIFN0eWxlLiBDbGljayB0aGUgZG9jdW1lbnQgdG8gd3JpdGUgeW91ciBvd24gdmVyc2lvbiBvZiB0aGUgcG9lbSFcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgY2FzZSBcIm9yZGVyXCI6XG4gICAgICAgICAgICBjaGFuZ2VFcmFzdXJlT3B0aW9uKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgY2hhbmdlU2VsZWN0aW9uT3B0aW9uKFwid29yZFwiKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXhlY3V0aXZlIE9yZGVyIDkwNjYgYXV0aG9yaXplZCBpbnRlcm5tZW50IGNhbXBzIGZvciBKYXBhbnNlc2UtQW1lcmljYW5zIGR1cmluZyBXV0lJLiBUaGlzIGV4YW1wbGUgdXNlcyB0aGUgZWRpdG9yJ3MgZXJhc3VyZSB0ZWNobmlxdWUgdG8gZXhhbWluZSB0aGUgbGFuZ3VhZ2UgdXNlZCBpbiB0aGlzIGhpc3RvcmljYWwgdGV4dC4gQ2xpY2sgdGhlIGRvY3VtZW50IHRvIHJldmVhbCB0aGUgd29yZHMgdGhhdCB3ZXJlIGVyYXNlZC5cIik7XG4gICAgICAgIGJyZWFrXG4gICAgfSAgICBcbiAgICBcbn1cblxuXG5leHBvcnQgY29uc3QgaW50ZXJuZXRQb2V0ID0gKCkgPT4ge1xuICAgIGFsZXJ0KFxuICAgICAgXCJXcml0ZSBzb21lIGhlYXJ0ZmVsdCB2ZXJzZS4gVXNlIGxvd2VyIGNhc2UsIFRpbWVzIE5ldyBSb21hbi4gVXBsb2FkIGFuIGltYWdlIHVzaW5nIHRoZSBiYWNrZ3JvdW5kIHBpY3R1cmUgdG9vbC4gUG9zdCBvbiBJbnN0YWdyYW0uXFxuVGhlIHBvZW0gd2FzIGdlbmVyYXRlZCBieSBhIGNvbXB1dGVyIVwiXG4gICAgKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgd2luZG93LmNsZWFyVGV4dChcInRhcmdldFRleHRcIik7XG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gXCI1MDBweFwiO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBcIjUwMHB4XCI7XG4gICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICBjYW52YXMuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBjYW52YXMuc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcbiAgICB3aW5kb3cuZ2VuZXJhdGVUZXh0KFxuICAgICAgICBcImRvbuKAmXQgbWlzdGFrZSBcXG5zYWx0IGZvciBzdWdhciBcXG5pdCBuZXZlciByZWFsbHkgbGVmdCB0aGUgaGFuZHMgXFxub2YgdGhvc2Ugd2hvIGJyb2tlIHlvdSBcXG50aGUgdGhpbmcgXFxud29ydGggaG9sZGluZyBvbnRvIFxcbndvdWxkIG5vdCBjb21lIGZvciB5b3UgXFxueW91ciBzd2VldG5lc3MgYmVsb25ncyBcXG5vbmx5IHRvIHlvdXJzZWxmIFxcblwiXG4gICAgKTtcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy8uLi9pbWFnZXMvY2FrZS5qcGcnKVwiXG4gICAgY2FudmFzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlRpbWVzXCI7XG4gICAgY2hhbmdlU2VsZWN0aW9uT3B0aW9uKFwid29yZFwiKTtcblxuXG4gICAgLy8gY2FudmFzLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAvLyAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIikge1xuICAgIC8vICAgICAvLyAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICBnZXRXb3JkKHRoaXMpLmZvckVhY2goKGxldHRlckVsZW1lbnQpID0+IHtcbiAgICAvLyAgICAgICAgIC8vICAgZGVidWdnZXJcbiAgICAvLyAgICAgICAgIC8vIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAvLyAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuICAgIC8vIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9