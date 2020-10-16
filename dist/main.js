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
      alert("A reworking of Shakespeare's Sonnet 18 with the Fade-out Erasure Style.");
      break;

    case "order":
      changeErasureOption("invisible");
      changeSelectionOption("word");
      alert("Erasure Poem of Executive Order 9066 which authorized internment camps for Japansese-Americans during WWII");
      break;
  }
};
var internetPoet = function internetPoet() {
  alert("Poem text was generated by a AI!");
  var canvas = document.getElementById("targetText");
  window.clearText("targetText");
  canvas.style.width = "500px";
  canvas.style.height = "500px";
  canvas.style.backgroundColor = "white";
  canvas.style.whiteSpace = "pre-wrap";
  canvas.style.fontSize = "14px";
  window.generateText("don’t mistake \nsalt for sugar \nit never really left the hands \nof those who broke you \nthe thing \nworth holding onto \nwould not come for you \nyour sweetness belongs \nonly to yourself \n");
  canvas.style.backgroundImage = "url('../dist/images/cake.jpg')";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9kZW1vcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlZGl0YWJsZSIsImVyYXNlYWJsZSIsInRvZ2dsZUVkaXRhYmxlIiwidG9nZ2xlRXJhc2FibGUiLCJjaGFuZ2VGb250T3B0aW9uIiwiZXh0ZW5kIiwiaGVpZ2h0Q2hhbmdlcyIsIndpZHRoQ2hhbmdlcyIsImRlbW8iLCJpbnRlcm5ldFBvZXQiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImZvbnRTaXplIiwiZXJhc3VyZU9wdGlvbiIsImVyYXN1cmVTZWxlY3Rpb24iLCJjaGFuZ2VFcmFzdXJlT3B0aW9uIiwib3B0aW9uIiwiaW5uZXJIVE1MIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYW5nZVNlbGVjdGlvbk9wdGlvbiIsInN1Ym1pdFRleHQiLCJzdWJtaXR0ZWRUZXh0Iiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRXb3JkIiwibGV0dGVyRWxlbWVudCIsInBhcmFncmFwaCIsImFwcGVuZCIsImVsZSIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImxldHRlcnMiLCJwdXNoIiwiZ2VuZXJhdGVUZXh0IiwiY2xlYXJUZXh0IiwiYXJlYSIsImRpc3BsYXkiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFja2dyb3VuZEltYWdlIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInVybCIsImZpbmRXb3JkIiwiZmlsdGVyIiwic2VhcmNoVGVybXMiLCJ1cmxDb3B5IiwiVVJMIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZmV0Y2giLCJ0b1N0cmluZyIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJwYXJlc2VEaXNwbGF5RGF0YSIsInJlc3VsdHNCb3giLCJ3b3JkT2JqZWN0Iiwid29yZCIsInNodWZmbGVBcnJheSIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlyZWN0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJmb250U3R5bGUiLCJmb250RmFtaWx5IiwibmFtZSIsIm9yaWdpbmFsIiwic29ubmV0IiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJyZXBsYWNlV2l0aCIsImlkIiwiY2hpbGROb2RlcyIsImNoaWxkIiwiYWxlcnQiLCJjYW52YXMiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtR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Q0FELFFBQU0sQ0FBQzVGLEtBQVAsQ0FBYUcsUUFBYixHQUF3QixNQUF4QjtBQUNBbEIsUUFBTSxDQUFDa0QsWUFBUCxDQUNJLG1NQURKO0FBR0F5RCxRQUFNLENBQUM1RixLQUFQLENBQWE0QyxlQUFiLEdBQStCLGdDQUEvQjtBQUNBZ0QsUUFBTSxDQUFDNUYsS0FBUCxDQUFhaUYsVUFBYixHQUEwQixPQUExQjtBQUNBckUsdUJBQXFCLENBQUMsTUFBRCxDQUFyQixDQWQ4QixDQWlCOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQTlCTSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IHRvZ2dsZUVkaXRhYmxlLCBjaGFuZ2VGb250T3B0aW9uLCBleHRlbmQsIHRvZ2dsZUVyYXNhYmxlIH0gZnJvbSBcIi4vc2NyaXB0cy9maWx0ZXJzXCI7XG5pbXBvcnQgeyBkZW1vLCBpbnRlcm5ldFBvZXQgfSBmcm9tIFwiLi4vdGVtcGxhdGVzL2RlbW9zXCI7XG5cblxud2luZG93LmVkaXRhYmxlID0gZmFsc2U7XG53aW5kb3cuZXJhc2VhYmxlID0gdHJ1ZTtcbndpbmRvdy50b2dnbGVFZGl0YWJsZSA9IHRvZ2dsZUVkaXRhYmxlXG53aW5kb3cudG9nZ2xlRXJhc2FibGUgPSB0b2dnbGVFcmFzYWJsZTtcbndpbmRvdy5jaGFuZ2VGb250T3B0aW9uID0gY2hhbmdlRm9udE9wdGlvbjtcbndpbmRvdy5leHRlbmQgPSBleHRlbmQ7XG53aW5kb3cuaGVpZ2h0Q2hhbmdlcyA9IDBcbndpbmRvdy53aWR0aENoYW5nZXMgPSAwXG5cbndpbmRvdy5kZW1vID0gZGVtbztcbndpbmRvdy5pbnRlcm5ldFBvZXQgPSBpbnRlcm5ldFBvZXQ7XG5cblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yUGlja2VyXCIpO1xuY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5jb25zdCBmb250U2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udFNpemVcIik7XG5mb250U2l6ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemUudmFsdWUgKyBcInB4XCJcbn0pO1xuXG5sZXQgZXJhc3VyZU9wdGlvbiA9IFwiYmxhY2tvdXRcIjtcbndpbmRvdy5lcmFzdXJlT3B0aW9uID0gZXJhc3VyZU9wdGlvbjtcblxubGV0IGVyYXN1cmVTZWxlY3Rpb24gPSBcImNoYXJhY3RlclwiO1xud2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBlcmFzdXJlU2VsZWN0aW9uO1xuXG53aW5kb3cuY2hhbmdlRXJhc3VyZU9wdGlvbiA9IChvcHRpb24pID0+IHtcbiAgd2luZG93LmVyYXN1cmVPcHRpb24gPSBvcHRpb25cblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEN1cnJlbnQgU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVPcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aW5kb3cuZXJhc3VyZU9wdGlvbi5zbGljZSgxKVxuICB9YDtcbn1cblxud2luZG93LmNoYW5nZVNlbGVjdGlvbk9wdGlvbiA9IChvcHRpb24pID0+IHtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBvcHRpb247XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4gICkuaW5uZXJIVE1MID0gYFNlbGVjdGlvbiBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbiAgfWA7XG59O1xuXG5cbndpbmRvdy5zdWJtaXRUZXh0ID0gKCkgPT4ge1xuICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRlZFRleHRcIikudmFsdWU7XG5cbiAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIiAmJiB3aW5kb3cuZXJhc2VhYmxlKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwid29yZFwiICYmIHdpbmRvdy5lcmFzZWFibGUpIHtcbiAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuICB9KTtcbn07XG5cbndpbmRvdy5nZXRXb3JkID0gZnVuY3Rpb24gZ2V0V29yZChlbGUpIHtcbiAgXG4gIGxldCBwcmV2ID0gZWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgbGV0IG5leHQgPSBlbGUubmV4dEVsZW1lbnRTaWJsaW5nXG4gIGxldCBsZXR0ZXJzID0gW2VsZV1cbiAgd2hpbGUgKHByZXYgIT09IG51bGwgJiYgcHJldi5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgbGV0dGVycy5wdXNoKHByZXYpO1xuICAgIHByZXYgPSBwcmV2LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHByZXYgPT09IG51bGwgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiIFwiIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIi5cIikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICB3aGlsZSAobmV4dCAhPT0gIG51bGwgJiYgbmV4dC5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgICBsZXR0ZXJzLnB1c2gobmV4dClcbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChuZXh0ID09PSBudWxsIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGxldHRlcnNcbiAgXG59XG5cbndpbmRvdy5nZW5lcmF0ZVRleHQgPSAoc3VibWl0dGVkVGV4dCkgPT4ge1xuICBcbiAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ6LWluZGV4XCIsIDMpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIiAmJiB3aW5kb3cuZXJhc2VhYmxlKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwid29yZFwiICYmIHdpbmRvdy5lcmFzZWFibGUpIHtcbiAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuICB9KTtcbn07XG5cbndpbmRvdy5jbGVhclRleHQgPSAoYXJlYSkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcmVhKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChhcmVhID09PSBcImluc3BpcmF0aW9uLXJlc3VsdHNcIikge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgfVxufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXRQaWN0dXJlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXRQaWN0dXJlXCIpLmZpbGVzWzBdO1xuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIHJlYWRlci5yZXN1bHQgKyBcIilcIjtcbiAgfTtcbiAgaWYgKGZpbGUpIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xufSk7XG5cbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkuZGF0YW11c2UuY29tL3dvcmRzP1wiXG5cbndpbmRvdy5maW5kV29yZCA9IChmaWx0ZXIpID0+IHtcbiAgY29uc3Qgc2VhcmNoVGVybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXNlYXJjaFwiKS52YWx1ZTtcbiAgbGV0IHVybENvcHkgPSBuZXcgVVJMKHVybClcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsQ29weS5zZWFyY2gpO1xuICBwYXJhbXMuYXBwZW5kKGZpbHRlciwgc2VhcmNoVGVybXMpO1xuICBmZXRjaCh1cmwgKyBwYXJhbXMudG9TdHJpbmcoKSAgKVxuICAgIC50aGVuKCByZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSk7XG59O1xuXG5mdW5jdGlvbiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSB7XG4gIC8vIHNodWZmbGVBcnJheShkYXRhKSB0dXJuIGl0IG9mZlxuICBjb25zdCByZXN1bHRzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpO1xuICBkYXRhLnNsaWNlKDAsMjApLmZvckVhY2goICh3b3JkT2JqZWN0KT0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSB3b3JkT2JqZWN0LndvcmQgKyBcIiBcIjtcbiAgICByZXN1bHRzQm94LmFwcGVuZChzcGFuKTtcbiAgfSlcbiAgcmVzdWx0c0JveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tZGVsZXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbi8vRnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5XG5mdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgY29uc3QgdG9nZ2xlRWRpdGFibGUgPSAoKSA9PiB7XG4gY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxuIGlmICghd2luZG93LmVkaXRhYmxlKSB7XG4gICAgIHNwYW5zLmZvckVhY2goKHNwYW4pPT4ge1xuICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgIH0pXG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IHRydWVcbiB9IGVsc2Uge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgICB9KTtcbiAgICAgd2luZG93LmVkaXRhYmxlID0gZmFsc2U7XG4gfVxuICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0YWJsZS1idXR0b25cIikuaW5uZXJIVE1MID0gd2luZG93LmVkaXRhYmxlID8gXCJFZGl0YWJsZTogT25cIiA6IFwiRWRpdGFibGU6IE9mZlwiXG59O1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRXJhc2FibGUgPSAoKSA9PiB7XG4gIHdpbmRvdy5lcmFzZWFibGUgPSAhd2luZG93LmVyYXNlYWJsZVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVyYXNhYmxlLWJ1dHRvblwiKS5pbm5lckhUTUwgPSB3aW5kb3cuZXJhc2VhYmxlID8gXCJFcmFzdXJlOiBPblwiIDogXCJFcmFzdXJlOiBPZmZcIlxufTtcblxuXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSAoZGlyZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhlaWdodFwiKSB7XG4gICAgICAgIHdpbmRvdy5oZWlnaHRDaGFuZ2VzICs9IDFcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmhlaWdodCA9IDUwMCArICgxMCAqIHdpbmRvdy5oZWlnaHRDaGFuZ2VzKSArIFwicHhcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LndpZHRoQ2hhbmdlcyArPSAxO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUud2lkdGggPSA3MDAgKyAoMTAgKiB3aW5kb3cud2lkdGhDaGFuZ2VzKSArIFwicHhcIlxuICAgICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlRm9udE9wdGlvbiA9IChmb250U3R5bGUpID0+e1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5mb250RmFtaWx5ID0gZm9udFN0eWxlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1mb250LXN0eWxlXCIpLmlubmVySFRNTCA9IGBGb250IFN0eWxlOiAke2ZvbnRTdHlsZX1gO1xufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHBvcnQgY29uc3Qgc29ubmV0ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IG9yaWdpbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuLy8gICAgIGNvbnN0IHNvbm5ldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ubmV0XCIpO1xuLy8gICAgIGNvbnN0IGNsb25lID0gc29ubmV0LmNsb25lTm9kZSh0cnVlKVxuLy8gICAgIG9yaWdpbmFsLnJlcGxhY2VXaXRoKGNsb25lKVxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ubmV0XCIpLmlkID0gXCJ0YXJnZXRUZXh0XCJcbi8vICAgICBhbGVydChcIkEgcmV3b3JraW5nIG9mIFNoYWtlc3BlYXJlJ3MgU29ubmV0IDE4IHdpdGggdGhlIEZhZGUtb3V0IEVyYXN1cmUgU3R5bGUuXCIpO1xuXG5cblxuLy8gfVxuZXhwb3J0IGNvbnN0IGRlbW8gPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIGNvbnN0IHNvbm5ldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgIGNvbnN0IGNsb25lID0gc29ubmV0LmNsb25lTm9kZSh0cnVlKVxuICAgIG9yaWdpbmFsLnJlcGxhY2VXaXRoKGNsb25lKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpLmlkID0gXCJ0YXJnZXRUZXh0XCJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuY2hpbGROb2Rlcy5mb3JFYWNoKCAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIiAmJiB3aW5kb3cuZXJhc2VhYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcIndvcmRcIiAmJlxuICAgICAgICAgICAgICAgIHdpbmRvdy5lcmFzZWFibGVcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgY2FzZSBcInNvbm5ldFwiOlxuICAgICAgICAgICAgY2hhbmdlRXJhc3VyZU9wdGlvbihcImZhZGUtb3V0XCIpO1xuICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgICAgICBcIkEgcmV3b3JraW5nIG9mIFNoYWtlc3BlYXJlJ3MgU29ubmV0IDE4IHdpdGggdGhlIEZhZGUtb3V0IEVyYXN1cmUgU3R5bGUuXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgXG4gICAgICAgIGNhc2UgXCJvcmRlclwiOlxuICAgICAgICAgICAgY2hhbmdlRXJhc3VyZU9wdGlvbihcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGNoYW5nZVNlbGVjdGlvbk9wdGlvbihcIndvcmRcIik7XG4gICAgICAgICAgICBhbGVydChcIkVyYXN1cmUgUG9lbSBvZiBFeGVjdXRpdmUgT3JkZXIgOTA2NiB3aGljaCBhdXRob3JpemVkIGludGVybm1lbnQgY2FtcHMgZm9yIEphcGFuc2VzZS1BbWVyaWNhbnMgZHVyaW5nIFdXSUlcIik7XG4gICAgICAgIGJyZWFrXG4gICAgfSAgICBcbiAgICBcbn1cblxuXG5leHBvcnQgY29uc3QgaW50ZXJuZXRQb2V0ID0gKCkgPT4ge1xuICAgIGFsZXJ0KFwiUG9lbSB0ZXh0IHdhcyBnZW5lcmF0ZWQgYnkgYSBBSSFcIik7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIHdpbmRvdy5jbGVhclRleHQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IFwiNTAwcHhcIjtcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gXCI1MDBweFwiO1xuICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgY2FudmFzLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZS13cmFwXCI7XG4gICAgY2FudmFzLnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XG4gICAgd2luZG93LmdlbmVyYXRlVGV4dChcbiAgICAgICAgXCJkb27igJl0IG1pc3Rha2UgXFxuc2FsdCBmb3Igc3VnYXIgXFxuaXQgbmV2ZXIgcmVhbGx5IGxlZnQgdGhlIGhhbmRzIFxcbm9mIHRob3NlIHdobyBicm9rZSB5b3UgXFxudGhlIHRoaW5nIFxcbndvcnRoIGhvbGRpbmcgb250byBcXG53b3VsZCBub3QgY29tZSBmb3IgeW91IFxcbnlvdXIgc3dlZXRuZXNzIGJlbG9uZ3MgXFxub25seSB0byB5b3Vyc2VsZiBcXG5cIlxuICAgICk7XG4gICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9kaXN0L2ltYWdlcy9jYWtlLmpwZycpXCJcbiAgICBjYW52YXMuc3R5bGUuZm9udEZhbWlseSA9IFwiVGltZXNcIjtcbiAgICBjaGFuZ2VTZWxlY3Rpb25PcHRpb24oXCJ3b3JkXCIpO1xuXG5cbiAgICAvLyBjYW52YXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIC8vICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgLy8gICAgIC8vICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgIC8vICAgICAgICAgLy8gICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgLy8gbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgIC8vICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=