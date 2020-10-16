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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9kZW1vcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJlZGl0YWJsZSIsInRvZ2dsZUVkaXRhYmxlIiwiY2hhbmdlRm9udE9wdGlvbiIsImV4dGVuZCIsImhlaWdodENoYW5nZXMiLCJ3aWR0aENoYW5nZXMiLCJkZW1vIiwiaW50ZXJuZXRQb2V0IiwiY29sb3JQaWNrZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidmFsdWUiLCJmb250U2l6ZSIsImVyYXN1cmVPcHRpb24iLCJlcmFzdXJlU2VsZWN0aW9uIiwiY2hhbmdlRXJhc3VyZU9wdGlvbiIsIm9wdGlvbiIsImlubmVySFRNTCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFuZ2VTZWxlY3Rpb25PcHRpb24iLCJzdWJtaXRUZXh0Iiwic3VibWl0dGVkVGV4dCIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0V29yZCIsImxldHRlckVsZW1lbnQiLCJwYXJhZ3JhcGgiLCJhcHBlbmQiLCJlbGUiLCJwcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsZXR0ZXJzIiwicHVzaCIsImdlbmVyYXRlVGV4dCIsImNsZWFyVGV4dCIsImFyZWEiLCJkaXNwbGF5IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImJhY2tncm91bmRJbWFnZSIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJ1cmwiLCJmaW5kV29yZCIsImZpbHRlciIsInNlYXJjaFRlcm1zIiwidXJsQ29weSIsIlVSTCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImZldGNoIiwidG9TdHJpbmciLCJ0aGVuIiwicmVzcCIsImpzb24iLCJkYXRhIiwicGFyZXNlRGlzcGxheURhdGEiLCJyZXN1bHRzQm94Iiwid29yZE9iamVjdCIsIndvcmQiLCJzaHVmZmxlQXJyYXkiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsInNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpcmVjdGlvbiIsImhlaWdodCIsIndpZHRoIiwiZm9udFN0eWxlIiwiZm9udEZhbWlseSIsIm5hbWUiLCJvcmlnaW5hbCIsInNvbm5ldCIsImNsb25lIiwiY2xvbmVOb2RlIiwicmVwbGFjZVdpdGgiLCJpZCIsImNoaWxkTm9kZXMiLCJjaGlsZCIsImFsZXJ0IiwiY2FudmFzIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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O0FBQ0EsTUFBTUMsTUFBTSxHQUFHL0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWY7QUFDQVgsUUFBTSxDQUFDaUQsU0FBUCxDQUFpQixZQUFqQjtBQUNBd0QsUUFBTSxDQUFDNUYsS0FBUCxDQUFhK0UsS0FBYixHQUFxQixPQUFyQjtBQUNBYSxRQUFNLENBQUM1RixLQUFQLENBQWE4RSxNQUFiLEdBQXNCLE9BQXRCO0FBQ0FjLFFBQU0sQ0FBQzVGLEtBQVAsQ0FBYUMsZUFBYixHQUErQixPQUEvQjtBQUNBMkYsUUFBTSxDQUFDNUYsS0FBUCxDQUFhNkYsVUFBYixHQUEwQixVQUExQjtBQUNBRCxRQUFNLENBQUM1RixLQUFQLENBQWFHLFFBQWIsR0FBd0IsTUFBeEI7QUFDQWhCLFFBQU0sQ0FBQ2dELFlBQVAsQ0FDSSxtTUFESjtBQUdBeUQsUUFBTSxDQUFDNUYsS0FBUCxDQUFhNEMsZUFBYixHQUErQiwyQkFBL0I7QUFDQWdELFFBQU0sQ0FBQzVGLEtBQVAsQ0FBYWlGLFVBQWIsR0FBMEIsT0FBMUI7QUFDQXJFLHVCQUFxQixDQUFDLE1BQUQsQ0FBckIsQ0FkOEIsQ0FpQjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0E5Qk0sQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyB0b2dnbGVFZGl0YWJsZSwgY2hhbmdlRm9udE9wdGlvbiwgZXh0ZW5kIH0gZnJvbSBcIi4vc2NyaXB0cy9maWx0ZXJzXCI7XG5pbXBvcnQgeyBkZW1vLCBpbnRlcm5ldFBvZXQgfSBmcm9tIFwiLi4vdGVtcGxhdGVzL2RlbW9zXCI7XG5cbndpbmRvdy5lZGl0YWJsZSA9IGZhbHNlXG53aW5kb3cudG9nZ2xlRWRpdGFibGUgPSB0b2dnbGVFZGl0YWJsZVxud2luZG93LmNoYW5nZUZvbnRPcHRpb24gPSBjaGFuZ2VGb250T3B0aW9uO1xud2luZG93LmV4dGVuZCA9IGV4dGVuZDtcbndpbmRvdy5oZWlnaHRDaGFuZ2VzID0gMFxud2luZG93LndpZHRoQ2hhbmdlcyA9IDBcblxud2luZG93LmRlbW8gPSBkZW1vO1xud2luZG93LmludGVybmV0UG9ldCA9IGludGVybmV0UG9ldDtcblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yUGlja2VyXCIpO1xuY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclBpY2tlci52YWx1ZTtcbn0pO1xuXG5jb25zdCBmb250U2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9udFNpemVcIik7XG5mb250U2l6ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemUudmFsdWUgKyBcInB4XCJcbn0pO1xuXG5sZXQgZXJhc3VyZU9wdGlvbiA9IFwiYmxhY2tvdXRcIjtcbndpbmRvdy5lcmFzdXJlT3B0aW9uID0gZXJhc3VyZU9wdGlvbjtcblxubGV0IGVyYXN1cmVTZWxlY3Rpb24gPSBcImNoYXJhY3RlclwiO1xud2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBlcmFzdXJlU2VsZWN0aW9uO1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEVyYXN1cmUgU3R5bGU6ICR7XG4vLyAgIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbi8vIH1gO1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4vLyApLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4vLyAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbi8vICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbi8vIH1gO1xuXG53aW5kb3cuY2hhbmdlRXJhc3VyZU9wdGlvbiA9IChvcHRpb24pID0+IHtcbiAgd2luZG93LmVyYXN1cmVPcHRpb24gPSBvcHRpb25cblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEN1cnJlbnQgU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVPcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aW5kb3cuZXJhc3VyZU9wdGlvbi5zbGljZSgxKVxuICB9YDtcbn1cblxud2luZG93LmNoYW5nZVNlbGVjdGlvbk9wdGlvbiA9IChvcHRpb24pID0+IHtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBvcHRpb247XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4gICkuaW5uZXJIVE1MID0gYFNlbGVjdGlvbiBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbiAgfWA7XG59O1xuXG5cbndpbmRvdy5zdWJtaXRUZXh0ID0gKCkgPT4ge1xuICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRlZFRleHRcIikudmFsdWU7XG5cbiAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIikge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRXb3JkKHRoaXMpLmZvckVhY2goKGxldHRlckVsZW1lbnQpPT57XG4gICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG4gIH0pO1xufTtcblxud2luZG93LmdldFdvcmQgPSBmdW5jdGlvbiBnZXRXb3JkKGVsZSkge1xuICBcbiAgbGV0IHByZXYgPSBlbGUucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBsZXQgbmV4dCA9IGVsZS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgbGV0IGxldHRlcnMgPSBbZWxlXVxuICB3aGlsZSAocHJldiAhPT0gbnVsbCAmJiBwcmV2LmlubmVySFRNTCAhPT0gXCIgXCIpIHtcbiAgICBsZXR0ZXJzLnB1c2gocHJldik7XG4gICAgcHJldiA9IHByZXYucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpZiAocHJldiA9PT0gbnVsbCB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiLlwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHdoaWxlIChuZXh0ICE9PSAgbnVsbCAmJiBuZXh0LmlubmVySFRNTCAhPT0gXCIgXCIpIHtcbiAgICAgIGxldHRlcnMucHVzaChuZXh0KVxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKG5leHQgPT09IG51bGwgfHwgbmV4dC5pbm5lckhUTUwgPT09IFwiIFwiIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIi5cIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gbGV0dGVyc1xuICBcbn1cblxuLy8gY29uc3Qgc3VibWl0dGVkVGV4dCA9XG4vLyAgIFwiSSBoZWFyZCBhIEZseSBidXp6IC0gd2hlbiBJIGRpZWQgLVxcblRoZSBTdGlsbG5lc3MgaW4gdGhlIFJvb21cXG5XYXMgbGlrZSB0aGUgU3RpbGxuZXNzIGluIHRoZSBBaXIgLVxcbkJldHdlZW4gdGhlIEhlYXZlcyBvZiBTdG9ybVxcblwiO1xuXG53aW5kb3cuZ2VuZXJhdGVUZXh0ID0gKHN1Ym1pdHRlZFRleHQpID0+IHtcbiAgXG4gIHN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiei1pbmRleFwiLCAzKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuICB9KTtcbn07XG5cbndpbmRvdy5jbGVhclRleHQgPSAoYXJlYSkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcmVhKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChhcmVhID09PSBcImluc3BpcmF0aW9uLXJlc3VsdHNcIikge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgfVxufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXRQaWN0dXJlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBjb25zdCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZXRQaWN0dXJlXCIpLmZpbGVzWzBdO1xuICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIHJlYWRlci5yZXN1bHQgKyBcIilcIjtcbiAgfTtcbiAgaWYgKGZpbGUpIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xufSk7XG5cbmxldCB1cmwgPSBcImh0dHA6Ly9hcGkuZGF0YW11c2UuY29tL3dvcmRzP1wiXG5cbndpbmRvdy5maW5kV29yZCA9IChmaWx0ZXIpID0+IHtcbiAgY29uc3Qgc2VhcmNoVGVybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXNlYXJjaFwiKS52YWx1ZTtcbiAgbGV0IHVybENvcHkgPSBuZXcgVVJMKHVybClcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsQ29weS5zZWFyY2gpO1xuICBwYXJhbXMuYXBwZW5kKGZpbHRlciwgc2VhcmNoVGVybXMpO1xuICBmZXRjaCh1cmwgKyBwYXJhbXMudG9TdHJpbmcoKSAgKVxuICAgIC50aGVuKCByZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSk7XG59O1xuXG5mdW5jdGlvbiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSB7XG4gIC8vIHNodWZmbGVBcnJheShkYXRhKSB0dXJuIGl0IG9mZlxuICBjb25zdCByZXN1bHRzQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1yZXN1bHRzXCIpO1xuICBkYXRhLnNsaWNlKDAsMjApLmZvckVhY2goICh3b3JkT2JqZWN0KT0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSB3b3JkT2JqZWN0LndvcmQgKyBcIiBcIjtcbiAgICByZXN1bHRzQm94LmFwcGVuZChzcGFuKTtcbiAgfSlcbiAgcmVzdWx0c0JveC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tZGVsZXRlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbi8vRnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5XG5mdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgY29uc3QgdG9nZ2xlRWRpdGFibGUgPSAoKSA9PiB7XG4gY29uc3Qgc3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxuIGlmICghd2luZG93LmVkaXRhYmxlKSB7XG4gICAgIHNwYW5zLmZvckVhY2goKHNwYW4pPT4ge1xuICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgdHJ1ZSk7XG4gICAgIH0pXG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IHRydWVcbiB9IGVsc2Uge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgICB9KTtcbiAgICAgd2luZG93LmVkaXRhYmxlID0gZmFsc2U7XG4gfVxufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IChkaXJlY3Rpb24pID0+IHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaGVpZ2h0XCIpIHtcbiAgICAgICAgd2luZG93LmhlaWdodENoYW5nZXMgKz0gMVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuaGVpZ2h0ID0gNTAwICsgKDEwICogd2luZG93LmhlaWdodENoYW5nZXMpICsgXCJweFwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cud2lkdGhDaGFuZ2VzICs9IDE7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5zdHlsZS53aWR0aCA9IDcwMCArICgxMCAqIHdpbmRvdy53aWR0aENoYW5nZXMpICsgXCJweFwiXG4gICAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VGb250T3B0aW9uID0gKGZvbnRTdHlsZSkgPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250U3R5bGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWZvbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEZvbnQgU3R5bGU6ICR7Zm9udFN0eWxlfWA7XG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4cG9ydCBjb25zdCBzb25uZXQgPSAoKSA9PiB7XG4vLyAgICAgY29uc3Qgb3JpZ2luYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4vLyAgICAgY29uc3Qgc29ubmV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb25uZXRcIik7XG4vLyAgICAgY29uc3QgY2xvbmUgPSBzb25uZXQuY2xvbmVOb2RlKHRydWUpXG4vLyAgICAgb3JpZ2luYWwucmVwbGFjZVdpdGgoY2xvbmUpXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb25uZXRcIikuaWQgPSBcInRhcmdldFRleHRcIlxuLy8gICAgIGFsZXJ0KFwiQSByZXdvcmtpbmcgb2YgU2hha2VzcGVhcmUncyBTb25uZXQgMTggd2l0aCB0aGUgRmFkZS1vdXQgRXJhc3VyZSBTdHlsZS5cIik7XG5cblxuXG4vLyB9XG5leHBvcnQgY29uc3QgZGVtbyA9IChuYW1lKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgY29uc3Qgc29ubmV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG4gICAgY29uc3QgY2xvbmUgPSBzb25uZXQuY2xvbmVOb2RlKHRydWUpXG4gICAgb3JpZ2luYWwucmVwbGFjZVdpdGgoY2xvbmUpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSkuaWQgPSBcInRhcmdldFRleHRcIlxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5jaGlsZE5vZGVzLmZvckVhY2goIChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgXCJzb25uZXRcIjpcbiAgICAgICAgICAgIGNoYW5nZUVyYXN1cmVPcHRpb24oXCJmYWRlLW91dFwiKTtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgICAgXCJBIHJld29ya2luZyBvZiBTaGFrZXNwZWFyZSdzIFNvbm5ldCAxOCB3aXRoIHRoZSBGYWRlLW91dCBFcmFzdXJlIFN0eWxlLlwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIFxuICAgICAgICBjYXNlIFwib3JkZXJcIjpcbiAgICAgICAgICAgIGNoYW5nZUVyYXN1cmVPcHRpb24oXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBjaGFuZ2VTZWxlY3Rpb25PcHRpb24oXCJ3b3JkXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCJFcmFzdXJlIFBvZW0gb2YgRXhlY3V0aXZlIE9yZGVyIDkwNjYgd2hpY2ggYXV0aG9yaXplZCBpbnRlcm5tZW50IGNhbXBzIGZvciBKYXBhbnNlc2UtQW1lcmljYW5zIGR1cmluZyBXV0lJXCIpO1xuICAgICAgICBicmVha1xuICAgIH0gICAgXG4gICAgXG59XG5cblxuZXhwb3J0IGNvbnN0IGludGVybmV0UG9ldCA9ICgpID0+IHtcbiAgICBhbGVydChcIlBvZW0gdGV4dCB3YXMgZ2VuZXJhdGVkIGJ5IGEgQUkhXCIpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICB3aW5kb3cuY2xlYXJUZXh0KFwidGFyZ2V0VGV4dFwiKTtcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSBcIjUwMHB4XCI7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IFwiNTAwcHhcIjtcbiAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGNhbnZhcy5zdHlsZS53aGl0ZVNwYWNlID0gXCJwcmUtd3JhcFwiO1xuICAgIGNhbnZhcy5zdHlsZS5mb250U2l6ZSA9IFwiMTRweFwiO1xuICAgIHdpbmRvdy5nZW5lcmF0ZVRleHQoXG4gICAgICAgIFwiZG9u4oCZdCBtaXN0YWtlIFxcbnNhbHQgZm9yIHN1Z2FyIFxcbml0IG5ldmVyIHJlYWxseSBsZWZ0IHRoZSBoYW5kcyBcXG5vZiB0aG9zZSB3aG8gYnJva2UgeW91IFxcbnRoZSB0aGluZyBcXG53b3J0aCBob2xkaW5nIG9udG8gXFxud291bGQgbm90IGNvbWUgZm9yIHlvdSBcXG55b3VyIHN3ZWV0bmVzcyBiZWxvbmdzIFxcbm9ubHkgdG8geW91cnNlbGYgXFxuXCJcbiAgICApO1xuICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vaW1hZ2VzL2Nha2UuanBnJylcIlxuICAgIGNhbnZhcy5zdHlsZS5mb250RmFtaWx5ID0gXCJUaW1lc1wiO1xuICAgIGNoYW5nZVNlbGVjdGlvbk9wdGlvbihcIndvcmRcIik7XG5cblxuICAgIC8vIGNhbnZhcy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgLy8gICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAvLyAgICAgLy8gICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgLy8gICAgICAgICAvLyAgIGRlYnVnZ2VyXG4gICAgLy8gICAgICAgICAvLyBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgLy8gICAgICAgICAvLyBkZWJ1Z2dlclxuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==