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
}; // const submittedText =
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
      if (window.erasureSelection === "character") {
        this.classList.toggle("".concat(window.erasureOption));
      } else {
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
  canvas.style.backgroundImage = "url('../images/cake.jpg')";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9kZW1vcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlZGl0YWJsZSIsImVyYXNlYWJsZSIsInRvZ2dsZUVkaXRhYmxlIiwiY2hhbmdlRm9udE9wdGlvbiIsImV4dGVuZCIsImhlaWdodENoYW5nZXMiLCJ3aWR0aENoYW5nZXMiLCJkZW1vIiwiaW50ZXJuZXRQb2V0IiwiY29sb3JQaWNrZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidmFsdWUiLCJmb250U2l6ZSIsImVyYXN1cmVPcHRpb24iLCJlcmFzdXJlU2VsZWN0aW9uIiwiY2hhbmdlRXJhc3VyZU9wdGlvbiIsIm9wdGlvbiIsImlubmVySFRNTCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFuZ2VTZWxlY3Rpb25PcHRpb24iLCJzdWJtaXRUZXh0Iiwic3VibWl0dGVkVGV4dCIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0V29yZCIsImxldHRlckVsZW1lbnQiLCJwYXJhZ3JhcGgiLCJhcHBlbmQiLCJlbGUiLCJwcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsZXR0ZXJzIiwicHVzaCIsImdlbmVyYXRlVGV4dCIsImNsZWFyVGV4dCIsImFyZWEiLCJkaXNwbGF5IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImJhY2tncm91bmRJbWFnZSIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJ1cmwiLCJmaW5kV29yZCIsImZpbHRlciIsInNlYXJjaFRlcm1zIiwidXJsQ29weSIsIlVSTCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImZldGNoIiwidG9TdHJpbmciLCJ0aGVuIiwicmVzcCIsImpzb24iLCJkYXRhIiwicGFyZXNlRGlzcGxheURhdGEiLCJyZXN1bHRzQm94Iiwid29yZE9iamVjdCIsIndvcmQiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsInNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpcmVjdGlvbiIsImhlaWdodCIsIndpZHRoIiwiZm9udFN0eWxlIiwiZm9udEZhbWlseSIsIm5hbWUiLCJvcmlnaW5hbCIsInNvbm5ldCIsImNsb25lIiwiY2xvbmVOb2RlIiwicmVwbGFjZVdpdGgiLCJpZCIsImNoaWxkTm9kZXMiLCJjaGlsZCIsImFsZXJ0IiwiY2FudmFzIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtR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RyxTQUFmQSxZQUFlLEdBQU07QUFDOUJnRyxPQUFLLENBQUMsa0NBQUQsQ0FBTDtBQUNBLE1BQU1DLE1BQU0sR0FBRy9GLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFmO0FBQ0FaLFFBQU0sQ0FBQ2tELFNBQVAsQ0FBaUIsWUFBakI7QUFDQXdELFFBQU0sQ0FBQzVGLEtBQVAsQ0FBYStFLEtBQWIsR0FBcUIsT0FBckI7QUFDQWEsUUFBTSxDQUFDNUYsS0FBUCxDQUFhOEUsTUFBYixHQUFzQixPQUF0QjtBQUNBYyxRQUFNLENBQUM1RixLQUFQLENBQWFDLGVBQWIsR0FBK0IsT0FBL0I7QUFDQTJGLFFBQU0sQ0FBQzVGLEtBQVAsQ0FBYTZGLFVBQWIsR0FBMEIsVUFBMUI7QUFDQUQsUUFBTSxDQUFDNUYsS0FBUCxDQUFhRyxRQUFiLEdBQXdCLE1BQXhCO0FBQ0FqQixRQUFNLENBQUNpRCxZQUFQLENBQ0ksbU1BREo7QUFHQXlELFFBQU0sQ0FBQzVGLEtBQVAsQ0FBYTRDLGVBQWIsR0FBK0IsMkJBQS9CO0FBQ0FnRCxRQUFNLENBQUM1RixLQUFQLENBQWFpRixVQUFiLEdBQTBCLE9BQTFCO0FBQ0FyRSx1QkFBcUIsQ0FBQyxNQUFELENBQXJCLENBZDhCLENBaUI5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILENBOUJNLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgdG9nZ2xlRWRpdGFibGUsIGNoYW5nZUZvbnRPcHRpb24sIGV4dGVuZCB9IGZyb20gXCIuL3NjcmlwdHMvZmlsdGVyc1wiO1xuaW1wb3J0IHsgZGVtbywgaW50ZXJuZXRQb2V0IH0gZnJvbSBcIi4uL3RlbXBsYXRlcy9kZW1vc1wiO1xuXG53aW5kb3cuZWRpdGFibGUgPSBmYWxzZTtcbndpbmRvdy5lcmFzZWFibGUgPSB0cnVlO1xud2luZG93LnRvZ2dsZUVkaXRhYmxlID0gdG9nZ2xlRWRpdGFibGVcbndpbmRvdy5jaGFuZ2VGb250T3B0aW9uID0gY2hhbmdlRm9udE9wdGlvbjtcbndpbmRvdy5leHRlbmQgPSBleHRlbmQ7XG53aW5kb3cuaGVpZ2h0Q2hhbmdlcyA9IDBcbndpbmRvdy53aWR0aENoYW5nZXMgPSAwXG5cbndpbmRvdy5kZW1vID0gZGVtbztcbndpbmRvdy5pbnRlcm5ldFBvZXQgPSBpbnRlcm5ldFBvZXQ7XG5cbmNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvclBpY2tlclwiKTtcbmNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JQaWNrZXIudmFsdWU7XG59KTtcblxuY29uc3QgZm9udFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbnRTaXplXCIpO1xuZm9udFNpemUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplLnZhbHVlICsgXCJweFwiXG59KTtcblxubGV0IGVyYXN1cmVPcHRpb24gPSBcImJsYWNrb3V0XCI7XG53aW5kb3cuZXJhc3VyZU9wdGlvbiA9IGVyYXN1cmVPcHRpb247XG5cbmxldCBlcmFzdXJlU2VsZWN0aW9uID0gXCJjaGFyYWN0ZXJcIjtcbndpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gZXJhc3VyZVNlbGVjdGlvbjtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBFcmFzdXJlIFN0eWxlOiAke1xuLy8gICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG4vLyB9YDtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuLy8gKS5pbm5lckhUTUwgPSBgU2VsZWN0aW9uIFN0eWxlOiAke1xuLy8gICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4vLyAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4vLyB9YDtcblxud2luZG93LmNoYW5nZUVyYXN1cmVPcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlT3B0aW9uID0gb3B0aW9uXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBDdXJyZW50IFN0eWxlOiAke1xuICAgIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbiAgfWA7XG59XG5cbndpbmRvdy5jaGFuZ2VTZWxlY3Rpb25PcHRpb24gPSAob3B0aW9uKSA9PiB7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gb3B0aW9uO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuICApLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4gIH1gO1xufTtcblxuXG53aW5kb3cuc3VibWl0VGV4dCA9ICgpID0+IHtcbiAgY29uc3Qgc3VibWl0dGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0ZWRUZXh0XCIpLnZhbHVlO1xuXG4gIHN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KT0+e1xuICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuICB9KTtcbn07XG5cbndpbmRvdy5nZXRXb3JkID0gZnVuY3Rpb24gZ2V0V29yZChlbGUpIHtcbiAgXG4gIGxldCBwcmV2ID0gZWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgbGV0IG5leHQgPSBlbGUubmV4dEVsZW1lbnRTaWJsaW5nXG4gIGxldCBsZXR0ZXJzID0gW2VsZV1cbiAgd2hpbGUgKHByZXYgIT09IG51bGwgJiYgcHJldi5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgbGV0dGVycy5wdXNoKHByZXYpO1xuICAgIHByZXYgPSBwcmV2LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHByZXYgPT09IG51bGwgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiIFwiIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIi5cIikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICB3aGlsZSAobmV4dCAhPT0gIG51bGwgJiYgbmV4dC5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgICBsZXR0ZXJzLnB1c2gobmV4dClcbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChuZXh0ID09PSBudWxsIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGxldHRlcnNcbiAgXG59XG5cbi8vIGNvbnN0IHN1Ym1pdHRlZFRleHQgPVxuLy8gICBcIkkgaGVhcmQgYSBGbHkgYnV6eiAtIHdoZW4gSSBkaWVkIC1cXG5UaGUgU3RpbGxuZXNzIGluIHRoZSBSb29tXFxuV2FzIGxpa2UgdGhlIFN0aWxsbmVzcyBpbiB0aGUgQWlyIC1cXG5CZXR3ZWVuIHRoZSBIZWF2ZXMgb2YgU3Rvcm1cXG5cIjtcblxud2luZG93LmdlbmVyYXRlVGV4dCA9IChzdWJtaXR0ZWRUZXh0KSA9PiB7XG4gIFxuICBzdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgMyk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbiAgfSk7XG59O1xuXG53aW5kb3cuY2xlYXJUZXh0ID0gKGFyZWEpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXJlYSkuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAoYXJlYSA9PT0gXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXJlc3VsdHNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1kZWxldGVcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH1cbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0UGljdHVyZVwiKS5maWxlc1swXTtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyByZWFkZXIucmVzdWx0ICsgXCIpXCI7XG4gIH07XG4gIGlmIChmaWxlKSByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbn0pO1xuXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLmRhdGFtdXNlLmNvbS93b3Jkcz9cIlxuXG53aW5kb3cuZmluZFdvcmQgPSAoZmlsdGVyKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFRlcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1zZWFyY2hcIikudmFsdWU7XG4gIGxldCB1cmxDb3B5ID0gbmV3IFVSTCh1cmwpXG4gIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybENvcHkuc2VhcmNoKTtcbiAgcGFyYW1zLmFwcGVuZChmaWx0ZXIsIHNlYXJjaFRlcm1zKTtcbiAgZmV0Y2godXJsICsgcGFyYW1zLnRvU3RyaW5nKCkgIClcbiAgICAudGhlbiggcmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkpO1xufTtcblxuZnVuY3Rpb24gcGFyZXNlRGlzcGxheURhdGEoZGF0YSkge1xuICAvLyBzaHVmZmxlQXJyYXkoZGF0YSkgdHVybiBpdCBvZmZcbiAgY29uc3QgcmVzdWx0c0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKTtcbiAgZGF0YS5zbGljZSgwLDIwKS5mb3JFYWNoKCAod29yZE9iamVjdCk9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gd29yZE9iamVjdC53b3JkICsgXCIgXCI7XG4gICAgcmVzdWx0c0JveC5hcHBlbmQoc3Bhbik7XG4gIH0pXG4gIHJlc3VsdHNCb3guc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vL0Zyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheVxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGNvbnN0IHRvZ2dsZUVkaXRhYmxlID0gKCkgPT4ge1xuIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiBpZiAoIXdpbmRvdy5lZGl0YWJsZSkge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKT0+IHtcbiAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICB9KVxuICAgICB3aW5kb3cuZWRpdGFibGUgPSB0cnVlXG4gfSBlbHNlIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICAgfSk7XG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xuIH1cbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSAoZGlyZWN0aW9uKSA9PiB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhlaWdodFwiKSB7XG4gICAgICAgIHdpbmRvdy5oZWlnaHRDaGFuZ2VzICs9IDFcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmhlaWdodCA9IDUwMCArICgxMCAqIHdpbmRvdy5oZWlnaHRDaGFuZ2VzKSArIFwicHhcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LndpZHRoQ2hhbmdlcyArPSAxO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUud2lkdGggPSA3MDAgKyAoMTAgKiB3aW5kb3cud2lkdGhDaGFuZ2VzKSArIFwicHhcIlxuICAgICAgfVxufVxuXG5leHBvcnQgY29uc3QgY2hhbmdlRm9udE9wdGlvbiA9IChmb250U3R5bGUpID0+e1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5mb250RmFtaWx5ID0gZm9udFN0eWxlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1mb250LXN0eWxlXCIpLmlubmVySFRNTCA9IGBGb250IFN0eWxlOiAke2ZvbnRTdHlsZX1gO1xufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHBvcnQgY29uc3Qgc29ubmV0ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IG9yaWdpbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuLy8gICAgIGNvbnN0IHNvbm5ldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ubmV0XCIpO1xuLy8gICAgIGNvbnN0IGNsb25lID0gc29ubmV0LmNsb25lTm9kZSh0cnVlKVxuLy8gICAgIG9yaWdpbmFsLnJlcGxhY2VXaXRoKGNsb25lKVxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ubmV0XCIpLmlkID0gXCJ0YXJnZXRUZXh0XCJcbi8vICAgICBhbGVydChcIkEgcmV3b3JraW5nIG9mIFNoYWtlc3BlYXJlJ3MgU29ubmV0IDE4IHdpdGggdGhlIEZhZGUtb3V0IEVyYXN1cmUgU3R5bGUuXCIpO1xuXG5cblxuLy8gfVxuZXhwb3J0IGNvbnN0IGRlbW8gPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIGNvbnN0IHNvbm5ldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICAgIGNvbnN0IGNsb25lID0gc29ubmV0LmNsb25lTm9kZSh0cnVlKVxuICAgIG9yaWdpbmFsLnJlcGxhY2VXaXRoKGNsb25lKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpLmlkID0gXCJ0YXJnZXRUZXh0XCJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuY2hpbGROb2Rlcy5mb3JFYWNoKCAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRXb3JkKHRoaXMpLmZvckVhY2goKGxldHRlckVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICBjYXNlIFwic29ubmV0XCI6XG4gICAgICAgICAgICBjaGFuZ2VFcmFzdXJlT3B0aW9uKFwiZmFkZS1vdXRcIik7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICAgIFwiQSByZXdvcmtpbmcgb2YgU2hha2VzcGVhcmUncyBTb25uZXQgMTggd2l0aCB0aGUgRmFkZS1vdXQgRXJhc3VyZSBTdHlsZS5cIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICBcbiAgICAgICAgY2FzZSBcIm9yZGVyXCI6XG4gICAgICAgICAgICBjaGFuZ2VFcmFzdXJlT3B0aW9uKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgY2hhbmdlU2VsZWN0aW9uT3B0aW9uKFwid29yZFwiKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJhc3VyZSBQb2VtIG9mIEV4ZWN1dGl2ZSBPcmRlciA5MDY2IHdoaWNoIGF1dGhvcml6ZWQgaW50ZXJubWVudCBjYW1wcyBmb3IgSmFwYW5zZXNlLUFtZXJpY2FucyBkdXJpbmcgV1dJSVwiKTtcbiAgICAgICAgYnJlYWtcbiAgICB9ICAgIFxuICAgIFxufVxuXG5cbmV4cG9ydCBjb25zdCBpbnRlcm5ldFBvZXQgPSAoKSA9PiB7XG4gICAgYWxlcnQoXCJQb2VtIHRleHQgd2FzIGdlbmVyYXRlZCBieSBhIEFJIVwiKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgd2luZG93LmNsZWFyVGV4dChcInRhcmdldFRleHRcIik7XG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gXCI1MDBweFwiO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBcIjUwMHB4XCI7XG4gICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICBjYW52YXMuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBjYW52YXMuc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcbiAgICB3aW5kb3cuZ2VuZXJhdGVUZXh0KFxuICAgICAgICBcImRvbuKAmXQgbWlzdGFrZSBcXG5zYWx0IGZvciBzdWdhciBcXG5pdCBuZXZlciByZWFsbHkgbGVmdCB0aGUgaGFuZHMgXFxub2YgdGhvc2Ugd2hvIGJyb2tlIHlvdSBcXG50aGUgdGhpbmcgXFxud29ydGggaG9sZGluZyBvbnRvIFxcbndvdWxkIG5vdCBjb21lIGZvciB5b3UgXFxueW91ciBzd2VldG5lc3MgYmVsb25ncyBcXG5vbmx5IHRvIHlvdXJzZWxmIFxcblwiXG4gICAgKTtcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL2ltYWdlcy9jYWtlLmpwZycpXCJcbiAgICBjYW52YXMuc3R5bGUuZm9udEZhbWlseSA9IFwiVGltZXNcIjtcbiAgICBjaGFuZ2VTZWxlY3Rpb25PcHRpb24oXCJ3b3JkXCIpO1xuXG5cbiAgICAvLyBjYW52YXMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIC8vICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgLy8gICAgIC8vICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgIC8vICAgICAgICAgLy8gICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgLy8gbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgIC8vICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG4gICAgLy8gfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=