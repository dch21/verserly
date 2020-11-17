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
}; // window.getWord = function getWord(ele) {
//   let prev = ele.previousElementSibling;
//   let next = ele.nextElementSibling;
//   let letters = [ele];
//   while (prev !== null && prev.innerHTML !== " ") {
//     letters.push(prev);
//     prev = prev.previousElementSibling;
//     if (prev === null || prev.innerHTML === " " || prev.innerHTML === ".") {
//       break;
//     }
//   }
//   while (next !==  null && next.innerHTML !== " ") {
//       letters.push(next)
//       next = next.nextElementSibling;
//       if (next === null || next.innerHTML === " " || next.innerHTML === ".") {
//         break;
//       }
//   }
//   return letters;
// }
// && prev.innerHTML !== "," && prev.innerHTML !== ";"
// || prev.innerHTML !== "?" || prev.innerHTML !== ";")


window.getWord = function getWord(ele) {
  var prev = ele.previousElementSibling;
  var next = ele.nextElementSibling;
  var letters = [ele];

  while (prev !== null && prev.innerHTML !== " " && prev.innerHTML != "?") {
    letters.push(prev);
    prev = prev.previousElementSibling;

    if (prev === null || prev.innerHTML === " " || prev.innerHTML === ".") {
      break;
    }
  }

  while (next !== null && next.innerHTML !== " " && prev.innerHTML != "?") {
    letters.push(next);
    next = next.nextElementSibling;

    if (next === null || next.innerHTML === " " || next.innerHTML === "." || prev.innerHTML === "?") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9kZW1vcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlZGl0YWJsZSIsImVyYXNlYWJsZSIsInRvZ2dsZUVkaXRhYmxlIiwidG9nZ2xlRXJhc2FibGUiLCJjaGFuZ2VGb250T3B0aW9uIiwiZXh0ZW5kIiwiaGVpZ2h0Q2hhbmdlcyIsIndpZHRoQ2hhbmdlcyIsImRlbW8iLCJpbnRlcm5ldFBvZXQiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImZvbnRTaXplIiwiZXJhc3VyZU9wdGlvbiIsImVyYXN1cmVTZWxlY3Rpb24iLCJjaGFuZ2VFcmFzdXJlT3B0aW9uIiwib3B0aW9uIiwiaW5uZXJIVE1MIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYW5nZVNlbGVjdGlvbk9wdGlvbiIsInN1Ym1pdFRleHQiLCJzdWJtaXR0ZWRUZXh0Iiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRXb3JkIiwibGV0dGVyRWxlbWVudCIsInBhcmFncmFwaCIsImFwcGVuZCIsImVsZSIsInByZXYiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImxldHRlcnMiLCJwdXNoIiwiZ2VuZXJhdGVUZXh0IiwiY2xlYXJUZXh0IiwiYXJlYSIsImRpc3BsYXkiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFja2dyb3VuZEltYWdlIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInJlbW92ZVBpYyIsInVybCIsImZpbmRXb3JkIiwiZmlsdGVyIiwic2VhcmNoVGVybXMiLCJ1cmxDb3B5IiwiVVJMIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZmV0Y2giLCJ0b1N0cmluZyIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJwYXJlc2VEaXNwbGF5RGF0YSIsInJlc3VsdHNCb3giLCJ3b3JkT2JqZWN0Iiwid29yZCIsInNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpcmVjdGlvbiIsImhlaWdodCIsIndpZHRoIiwiZm9udFN0eWxlIiwiZm9udEZhbWlseSIsIm5hbWUiLCJvcmlnaW5hbCIsInNvbm5ldCIsImNsb25lIiwiY2xvbmVOb2RlIiwicmVwbGFjZVdpdGgiLCJpZCIsImNoaWxkTm9kZXMiLCJjaGlsZCIsImFsZXJ0IiwiY2FudmFzIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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YTRDLGVBQWIsR0FBK0IsaUJBQS9CO0FBQ0F3QyxRQUFNLENBQUNwRixLQUFQLENBQWF5RSxVQUFiLEdBQTBCLE9BQTFCO0FBQ0E3RCx1QkFBcUIsQ0FBQyxNQUFELENBQXJCLENBaEI4QixDQW1COUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQWhDTSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IHRvZ2dsZUVkaXRhYmxlLCBjaGFuZ2VGb250T3B0aW9uLCBleHRlbmQsIHRvZ2dsZUVyYXNhYmxlIH0gZnJvbSBcIi4vc2NyaXB0cy9maWx0ZXJzXCI7XG5pbXBvcnQgeyBkZW1vLCBpbnRlcm5ldFBvZXQgfSBmcm9tIFwiLi4vdGVtcGxhdGVzL2RlbW9zXCI7XG5cblxud2luZG93LmVkaXRhYmxlID0gZmFsc2U7XG53aW5kb3cuZXJhc2VhYmxlID0gdHJ1ZTtcbndpbmRvdy50b2dnbGVFZGl0YWJsZSA9IHRvZ2dsZUVkaXRhYmxlO1xud2luZG93LnRvZ2dsZUVyYXNhYmxlID0gdG9nZ2xlRXJhc2FibGU7XG53aW5kb3cuY2hhbmdlRm9udE9wdGlvbiA9IGNoYW5nZUZvbnRPcHRpb247XG53aW5kb3cuZXh0ZW5kID0gZXh0ZW5kO1xud2luZG93LmhlaWdodENoYW5nZXMgPSAwO1xud2luZG93LndpZHRoQ2hhbmdlcyA9IDA7XG5cbndpbmRvdy5kZW1vID0gZGVtbztcbndpbmRvdy5pbnRlcm5ldFBvZXQgPSBpbnRlcm5ldFBvZXQ7XG5cblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yUGlja2VyXCIpO1xuY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5jb25zdCBmb250U2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udFNpemVcIik7XG5mb250U2l6ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemUudmFsdWUgKyBcInB4XCJcbn0pO1xuXG5sZXQgZXJhc3VyZU9wdGlvbiA9IFwiYmxhY2tvdXRcIjtcbndpbmRvdy5lcmFzdXJlT3B0aW9uID0gZXJhc3VyZU9wdGlvbjtcblxubGV0IGVyYXN1cmVTZWxlY3Rpb24gPSBcImNoYXJhY3RlclwiO1xud2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBlcmFzdXJlU2VsZWN0aW9uO1xuXG53aW5kb3cuY2hhbmdlRXJhc3VyZU9wdGlvbiA9IChvcHRpb24pID0+IHtcbiAgd2luZG93LmVyYXN1cmVPcHRpb24gPSBvcHRpb25cblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEN1cnJlbnQgU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVPcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aW5kb3cuZXJhc3VyZU9wdGlvbi5zbGljZSgxKVxuICB9YDtcbn1cblxud2luZG93LmNoYW5nZVNlbGVjdGlvbk9wdGlvbiA9IChvcHRpb24pID0+IHtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBvcHRpb247XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4gICkuaW5uZXJIVE1MID0gYFNlbGVjdGlvbiBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbiAgfWA7XG59O1xuXG5cbndpbmRvdy5zdWJtaXRUZXh0ID0gKCkgPT4ge1xuICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRlZFRleHRcIikudmFsdWU7XG5cbiAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIiAmJiB3aW5kb3cuZXJhc2VhYmxlKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwid29yZFwiICYmIHdpbmRvdy5lcmFzZWFibGUpIHtcbiAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuICB9KTtcbn07XG5cbi8vIHdpbmRvdy5nZXRXb3JkID0gZnVuY3Rpb24gZ2V0V29yZChlbGUpIHtcbiAgXG4vLyAgIGxldCBwcmV2ID0gZWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4vLyAgIGxldCBuZXh0ID0gZWxlLm5leHRFbGVtZW50U2libGluZztcbi8vICAgbGV0IGxldHRlcnMgPSBbZWxlXTtcbi8vICAgd2hpbGUgKHByZXYgIT09IG51bGwgJiYgcHJldi5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4vLyAgICAgbGV0dGVycy5wdXNoKHByZXYpO1xuLy8gICAgIHByZXYgPSBwcmV2LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4vLyAgICAgaWYgKHByZXYgPT09IG51bGwgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiIFwiIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIi5cIikge1xuLy8gICAgICAgYnJlYWs7XG4vLyAgICAgfVxuLy8gICB9XG4gIFxuLy8gICB3aGlsZSAobmV4dCAhPT0gIG51bGwgJiYgbmV4dC5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4vLyAgICAgICBsZXR0ZXJzLnB1c2gobmV4dClcbi8vICAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbi8vICAgICAgIGlmIChuZXh0ID09PSBudWxsIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbi8vICAgICAgICAgYnJlYWs7XG4vLyAgICAgICB9XG4vLyAgIH1cbi8vICAgcmV0dXJuIGxldHRlcnM7XG4gIFxuLy8gfVxuXG4vLyAmJiBwcmV2LmlubmVySFRNTCAhPT0gXCIsXCIgJiYgcHJldi5pbm5lckhUTUwgIT09IFwiO1wiXG4vLyB8fCBwcmV2LmlubmVySFRNTCAhPT0gXCI/XCIgfHwgcHJldi5pbm5lckhUTUwgIT09IFwiO1wiKVxud2luZG93LmdldFdvcmQgPSBmdW5jdGlvbiBnZXRXb3JkKGVsZSkge1xuICBcbiAgbGV0IHByZXYgPSBlbGUucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgbGV0IG5leHQgPSBlbGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBsZXQgbGV0dGVycyA9IFtlbGVdO1xuICB3aGlsZSAocHJldiAhPT0gbnVsbCAmJiBwcmV2LmlubmVySFRNTCAhPT0gXCIgXCIgJiYgcHJldi5pbm5lckhUTUwgIT0gXCI/XCIpIHtcbiAgICBsZXR0ZXJzLnB1c2gocHJldik7XG4gICAgcHJldiA9IHByZXYucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpZiAocHJldiA9PT0gbnVsbCB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiLlwiICkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICB3aGlsZSAobmV4dCAhPT0gIG51bGwgJiYgbmV4dC5pbm5lckhUTUwgIT09IFwiIFwiICYmIHByZXYuaW5uZXJIVE1MICE9IFwiP1wiKSB7XG4gICAgICBsZXR0ZXJzLnB1c2gobmV4dClcbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChuZXh0ID09PSBudWxsIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIuXCIgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiP1wiICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gbGV0dGVycztcbiAgXG59XG5cbndpbmRvdy5nZW5lcmF0ZVRleHQgPSAoc3VibWl0dGVkVGV4dCkgPT4ge1xuICBcbiAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ6LWluZGV4XCIsIDMpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIiAmJiB3aW5kb3cuZXJhc2VhYmxlKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwid29yZFwiICYmIHdpbmRvdy5lcmFzZWFibGUpIHtcbiAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuICB9KTtcbn07XG5cbndpbmRvdy5jbGVhclRleHQgPSAoYXJlYSkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcmVhKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChhcmVhID09PSBcImluc3BpcmF0aW9uLXJlc3VsdHNcIikge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1kZWxldGVcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldFBpY3R1cmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGNvbnN0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldFBpY3R1cmVcIikuZmlsZXNbMF07XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgcmVhZGVyLnJlc3VsdCArIFwiKVwiO1xuICB9O1xuICBpZiAoZmlsZSkgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG59KTtcblxud2luZG93LnJlbW92ZVBpYyA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCI7XG59O1xuXG5sZXQgdXJsID0gXCJodHRwczovL2FwaS5kYXRhbXVzZS5jb20vd29yZHM/XCJcblxud2luZG93LmZpbmRXb3JkID0gKGZpbHRlcikgPT4ge1xuICBjb25zdCBzZWFyY2hUZXJtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tc2VhcmNoXCIpLnZhbHVlO1xuICBsZXQgdXJsQ29weSA9IG5ldyBVUkwodXJsKVxuICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmxDb3B5LnNlYXJjaCk7XG4gIHBhcmFtcy5hcHBlbmQoZmlsdGVyLCBzZWFyY2hUZXJtcyk7XG4gIGZldGNoKHVybCArIHBhcmFtcy50b1N0cmluZygpICApXG4gICAgLnRoZW4oIHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHBhcmVzZURpc3BsYXlEYXRhKGRhdGEpKTtcbn07XG5cbmZ1bmN0aW9uIHBhcmVzZURpc3BsYXlEYXRhKGRhdGEpIHtcbiAgY29uc3QgcmVzdWx0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKTtcbiAgZGF0YS5zbGljZSgwLDIwKS5mb3JFYWNoKCAod29yZE9iamVjdCk9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gd29yZE9iamVjdC53b3JkICsgXCIgXCI7XG4gICAgcmVzdWx0c0JveC5hcHBlbmQoc3Bhbik7XG4gIH0pXG4gIHJlc3VsdHNCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuIiwiZXhwb3J0IGNvbnN0IHRvZ2dsZUVkaXRhYmxlID0gKCkgPT4ge1xuIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiBpZiAoIXdpbmRvdy5lZGl0YWJsZSkge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKT0+IHtcbiAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICB9KVxuICAgICB3aW5kb3cuZWRpdGFibGUgPSB0cnVlXG4gfSBlbHNlIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICAgfSk7XG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xuIH1cbiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdGFibGUtYnV0dG9uXCIpLmlubmVySFRNTCA9IHdpbmRvdy5lZGl0YWJsZSA/IFwiRWRpdGFibGU6IE9uXCIgOiBcIkVkaXRhYmxlOiBPZmZcIlxufTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUVyYXNhYmxlID0gKCkgPT4ge1xuICB3aW5kb3cuZXJhc2VhYmxlID0gIXdpbmRvdy5lcmFzZWFibGVcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcmFzYWJsZS1idXR0b25cIikuaW5uZXJIVE1MID0gd2luZG93LmVyYXNlYWJsZSA/IFwiRXJhc3VyZTogT25cIiA6IFwiRXJhc3VyZTogT2ZmXCJcbn07XG5cblxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gKGRpcmVjdGlvbikgPT4ge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJoZWlnaHRcIikge1xuICAgICAgICB3aW5kb3cuaGVpZ2h0Q2hhbmdlcyArPSAxXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5oZWlnaHQgPSA1MDAgKyAoMTAgKiB3aW5kb3cuaGVpZ2h0Q2hhbmdlcykgKyBcInB4XCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy53aWR0aENoYW5nZXMgKz0gMTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLndpZHRoID0gNzAwICsgKDEwICogd2luZG93LndpZHRoQ2hhbmdlcykgKyBcInB4XCJcbiAgICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNoYW5nZUZvbnRPcHRpb24gPSAoZm9udFN0eWxlKSA9PntcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuZm9udEZhbWlseSA9IGZvbnRTdHlsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtZm9udC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgRm9udCBTdHlsZTogJHtmb250U3R5bGV9YDtcbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXhwb3J0IGNvbnN0IHNvbm5ldCA9ICgpID0+IHtcbi8vICAgICBjb25zdCBvcmlnaW5hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbi8vICAgICBjb25zdCBzb25uZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvbm5ldFwiKTtcbi8vICAgICBjb25zdCBjbG9uZSA9IHNvbm5ldC5jbG9uZU5vZGUodHJ1ZSlcbi8vICAgICBvcmlnaW5hbC5yZXBsYWNlV2l0aChjbG9uZSlcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvbm5ldFwiKS5pZCA9IFwidGFyZ2V0VGV4dFwiXG4vLyAgICAgYWxlcnQoXCJBIHJld29ya2luZyBvZiBTaGFrZXNwZWFyZSdzIFNvbm5ldCAxOCB3aXRoIHRoZSBGYWRlLW91dCBFcmFzdXJlIFN0eWxlLlwiKTtcblxuXG5cbi8vIH1cbmV4cG9ydCBjb25zdCBkZW1vID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBvcmlnaW5hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBjb25zdCBzb25uZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcbiAgICBjb25zdCBjbG9uZSA9IHNvbm5ldC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBvcmlnaW5hbC5yZXBsYWNlV2l0aChjbG9uZSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKS5pZCA9IFwidGFyZ2V0VGV4dFwiXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLmNoaWxkTm9kZXMuZm9yRWFjaCggKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIgJiYgd2luZG93LmVyYXNlYWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJ3b3JkXCIgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cuZXJhc2VhYmxlXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgXCJzb25uZXRcIjpcbiAgICAgICAgICAgIGNoYW5nZUVyYXN1cmVPcHRpb24oXCJmYWRlLW91dFwiKTtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgXCJBIHJld29ya2luZyBvZiBTaGFrZXNwZWFyZSdzIFNvbm5ldCAxOCB3aXRoIHRoZSBGYWRlLW91dCBFcmFzdXJlIFN0eWxlLiBDbGljayB0aGUgZG9jdW1lbnQgdG8gd3JpdGUgeW91ciBvd24gdmVyc2lvbiBvZiB0aGUgcG9lbSFcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgY2FzZSBcIm9yZGVyXCI6XG4gICAgICAgICAgICBjaGFuZ2VFcmFzdXJlT3B0aW9uKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgY2hhbmdlU2VsZWN0aW9uT3B0aW9uKFwid29yZFwiKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXhlY3V0aXZlIE9yZGVyIDkwNjYgYXV0aG9yaXplZCBpbnRlcm5tZW50IGNhbXBzIGZvciBKYXBhbnNlc2UtQW1lcmljYW5zIGR1cmluZyBXV0lJLiBUaGlzIGV4YW1wbGUgdXNlcyB0aGUgZWRpdG9yJ3MgZXJhc3VyZSB0ZWNobmlxdWUgdG8gZXhhbWluZSB0aGUgbGFuZ3VhZ2UgdXNlZCBpbiB0aGlzIGhpc3RvcmljYWwgdGV4dC4gQ2xpY2sgdGhlIGRvY3VtZW50IHRvIHJldmVhbCB0aGUgd29yZHMgdGhhdCB3ZXJlIGVyYXNlZC5cIik7XG4gICAgICAgIGJyZWFrXG4gICAgfSAgICBcbiAgICBcbn1cblxuXG5leHBvcnQgY29uc3QgaW50ZXJuZXRQb2V0ID0gKCkgPT4ge1xuICAgIGFsZXJ0KFxuICAgICAgXCJXcml0ZSBzb21lIGhlYXJ0ZmVsdCB2ZXJzZS4gVXNlIGxvd2VyIGNhc2UsIFRpbWVzIE5ldyBSb21hbi4gVXBsb2FkIGFuIGltYWdlIHVzaW5nIHRoZSBiYWNrZ3JvdW5kIHBpY3R1cmUgdG9vbC4gUG9zdCBvbiBJbnN0YWdyYW0uXFxuVGhlIHBvZW0gd2FzIGdlbmVyYXRlZCBieSBhIGNvbXB1dGVyIVwiXG4gICAgKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgd2luZG93LmNsZWFyVGV4dChcInRhcmdldFRleHRcIik7XG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gXCI1MDBweFwiO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBcIjUwMHB4XCI7XG4gICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICBjYW52YXMuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBjYW52YXMuc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcbiAgICB3aW5kb3cuZ2VuZXJhdGVUZXh0KFxuICAgICAgICBcImRvbuKAmXQgbWlzdGFrZSBcXG5zYWx0IGZvciBzdWdhciBcXG5pdCBuZXZlciByZWFsbHkgbGVmdCB0aGUgaGFuZHMgXFxub2YgdGhvc2Ugd2hvIGJyb2tlIHlvdSBcXG50aGUgdGhpbmcgXFxud29ydGggaG9sZGluZyBvbnRvIFxcbndvdWxkIG5vdCBjb21lIGZvciB5b3UgXFxueW91ciBzd2VldG5lc3MgYmVsb25ncyBcXG5vbmx5IHRvIHlvdXJzZWxmIFxcblwiXG4gICAgKTtcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2Nha2UuanBnJylcIjtcbiAgICBjYW52YXMuc3R5bGUuZm9udEZhbWlseSA9IFwiVGltZXNcIjtcbiAgICBjaGFuZ2VTZWxlY3Rpb25PcHRpb24oXCJ3b3JkXCIpO1xuXG5cbiAgICAvLyBjYW52YXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIC8vICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgLy8gICAgIC8vICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgIC8vICAgICAgICAgLy8gICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgLy8gbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgIC8vICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=