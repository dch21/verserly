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


var inspiration = document.getElementById("inspiration");
var url = "http://api.datamuse.com/words?rel_jjb=ocean"; // window.test = fetch(url)
//   .then( (resp) => console.log(resp.json()))

window.findRhymes = function () {
  var x = document.getElementById("inspiration-search").value;
  fetch(url).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    return console.log(pareseDisplayData(data));
  });
};

function pareseDisplayData(data) {
  shuffleArray(data);
  var newData = [];
  data.slice(0, 10).forEach(function (wordObject) {
    newData.push(wordObject.word);
  });
  return newData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImVkaXRhYmxlIiwidG9nZ2xlRWRpdGFibGUiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImVyYXN1cmVPcHRpb24iLCJlcmFzdXJlU2VsZWN0aW9uIiwiaW5uZXJIVE1MIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYW5nZUVyYXN1cmVPcHRpb24iLCJvcHRpb24iLCJjaGFuZ2VTZWxlY3Rpb25PcHRpb24iLCJzdWJtaXRUZXh0Iiwic3VibWl0dGVkVGV4dCIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0V29yZCIsImxldHRlckVsZW1lbnQiLCJwYXJhZ3JhcGgiLCJhcHBlbmQiLCJlbGUiLCJwcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsZXR0ZXJzIiwicHVzaCIsImdlbmVyYXRlVGV4dCIsImNsZWFyVGV4dCIsInJlYWRVUkwiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFja2dyb3VuZEltYWdlIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImluc3BpcmF0aW9uIiwidXJsIiwiZmluZFJoeW1lcyIsIngiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicGFyZXNlRGlzcGxheURhdGEiLCJzaHVmZmxlQXJyYXkiLCJuZXdEYXRhIiwid29yZE9iamVjdCIsIndvcmQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGVtcCIsInNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixLQUFsQjtBQUNBRCxNQUFNLENBQUNFLGNBQVAsR0FBd0JBLCtEQUF4QjtBQUVBLElBQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBRUFGLFdBQVcsQ0FBQ0csZ0JBQVosQ0FBNkIsUUFBN0IsRUFBdUMsWUFBVztBQUNoREYsVUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDRSxL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QUFNLENBQUNDLFFBQVAsR0FBa0IsSUFBbEI7QUFDSCxHQUxELE1BS087QUFDSDJFLFNBQUssQ0FBQ3RELE9BQU4sQ0FBYyxVQUFDRSxJQUFELEVBQVU7QUFDdEJBLFVBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUMsS0FBckM7QUFDRCxLQUZEO0FBR0EzQixVQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBbEI7QUFDSDtBQUNELENBYk0sQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyB0b2dnbGVFZGl0YWJsZSB9IGZyb20gXCIuL3NjcmlwdHMvZmlsdGVyc1wiO1xuXG53aW5kb3cuZWRpdGFibGUgPSBmYWxzZVxud2luZG93LnRvZ2dsZUVkaXRhYmxlID0gdG9nZ2xlRWRpdGFibGVcblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yUGlja2VyXCIpO1xuXG5jb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy52YWx1ZTtcbn0pO1xuXG5sZXQgZXJhc3VyZU9wdGlvbiA9IFwiYmxhY2tvdXRcIjtcbndpbmRvdy5lcmFzdXJlT3B0aW9uID0gZXJhc3VyZU9wdGlvbjtcblxubGV0IGVyYXN1cmVTZWxlY3Rpb24gPSBcImNoYXJhY3RlclwiO1xud2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBlcmFzdXJlU2VsZWN0aW9uO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEN1cnJlbnQgRXJhc3VyZSBTdHlsZTogJHtcbiAgd2luZG93LmVyYXN1cmVPcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aW5kb3cuZXJhc3VyZU9wdGlvbi5zbGljZSgxKVxufWA7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcImN1cnJlbnQtc2VjbGVjdGlvbi1zdHlsZVwiXG4pLmlubmVySFRNTCA9IGBDdXJyZW50IFNlbGVjdGlvbiBTdHlsZTogJHtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5zbGljZSgxKVxufWA7XG5cbndpbmRvdy5jaGFuZ2VFcmFzdXJlT3B0aW9uID0gZnVuY3Rpb24gY2hhbmdlRXJhc3VyZU9wdGlvbihvcHRpb24pIHtcbiAgd2luZG93LmVyYXN1cmVPcHRpb24gPSBvcHRpb25cblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEN1cnJlbnQgU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVPcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aW5kb3cuZXJhc3VyZU9wdGlvbi5zbGljZSgxKVxuICB9YDtcblxufVxuXG53aW5kb3cuY2hhbmdlU2VsZWN0aW9uT3B0aW9uID0gZnVuY3Rpb24gY2hhbmdlU2VsZWN0aW9uT3B0aW9uKG9wdGlvbikge1xuICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9IG9wdGlvbjtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImN1cnJlbnQtc2VjbGVjdGlvbi1zdHlsZVwiXG4gICkuaW5uZXJIVE1MID0gYEN1cnJlbnQgU2VsZWN0aW9uIFN0eWxlOiAke1xuICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5zbGljZSgxKVxuICB9YDtcbn07XG5cblxuXG5cbi8vIHdpbmRvdy5zdWJtaXRUZXh0ID0gZnVuY3Rpb24gc3VibWl0VGV4dCgpIHtcbi8vICAgY29uc3Qgc3VibWl0dGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0ZWRUZXh0XCIpLnZhbHVlO1xuXG4vLyAgIHN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG5cbi8vICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4vLyAgICAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbi8vICAgICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbi8vICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbi8vICAgICB9KTtcblxuLy8gICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbi8vICAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuLy8gICB9KTtcbi8vIH07XG5cbndpbmRvdy5zdWJtaXRUZXh0ID0gZnVuY3Rpb24gc3VibWl0VGV4dCgpIHtcbiAgY29uc3Qgc3VibWl0dGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0ZWRUZXh0XCIpLnZhbHVlO1xuXG4gIHN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KT0+e1xuICAgICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdldFdvcmQoZWxlKSB7XG4gIGxldCBwcmV2ID0gZWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgbGV0IG5leHQgPSBlbGUubmV4dEVsZW1lbnRTaWJsaW5nXG4gIGxldCBsZXR0ZXJzID0gW2VsZV1cbiAgd2hpbGUgKHByZXYgIT09IG51bGwgJiYgcHJldi5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgbGV0dGVycy5wdXNoKHByZXYpO1xuICAgIHByZXYgPSBwcmV2LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHByZXYgPT09IG51bGwgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiIFwiIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIi5cIikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICB3aGlsZSAobmV4dCAhPT0gIG51bGwgJiYgbmV4dC5pbm5lckhUTUwgIT09IFwiIFwiKSB7XG4gICAgICBsZXR0ZXJzLnB1c2gobmV4dClcbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChuZXh0ID09PSBudWxsIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBsZXR0ZXJzXG59XG5cblxud2luZG93LmdlbmVyYXRlVGV4dCA9IGZ1bmN0aW9uIGdlbmVyYXRlVGV4dCgpIHtcbmNvbnN0IHN1Ym1pdHRlZFRleHQgPSBcIkkgaGVhcmQgYSBGbHkgYnV6eiAtIHdoZW4gSSBkaWVkIC1cXG5UaGUgU3RpbGxuZXNzIGluIHRoZSBSb29tXFxuV2FzIGxpa2UgdGhlIFN0aWxsbmVzcyBpbiB0aGUgQWlyIC1cXG5CZXR3ZWVuIHRoZSBIZWF2ZXMgb2YgU3Rvcm1cXG5cIlxuXG5zdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ6LWluZGV4XCIsIDMpO1xuICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIikge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRXb3JkKHRoaXMpLmZvckVhY2goKGxldHRlckVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG59KTt9O1xuXG53aW5kb3cuY2xlYXJUZXh0ID0gZnVuY3Rpb24gY2xlYXJUZXh0KCkge1xuICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0dmFsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgcmVhZFVSTCwgdHJ1ZSk7XG5mdW5jdGlvbiByZWFkVVJMKCkge1xuICB2YXIgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0dmFsXCIpLmZpbGVzWzBdO1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cbiAgICAgIFwidXJsKFwiICsgcmVhZGVyLnJlc3VsdCArIFwiKVwiO1xuICB9O1xuICBpZiAoZmlsZSkge1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9IGVsc2Uge1xuICB9XG59XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGRvY3VtZW50XG4vLyAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJylcbi8vICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzWzBdKSB7XG4vLyAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpOyAvLyAkKCdpbWcnKVswXVxuLy8gICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLmZpbGVzWzBdKTsgLy8gc2V0IHNyYyB0byBibG9iIHVybFxuICAgICAgICAvLyBpbWcuc2V0QXR0cmlidXRlKFwiZGlzcGxheVwiLCBcImFic29sdXRlXCIpO1xuICAgICAgICAgICBcbiAgICAgICAgLy8gaW1nLm9ubG9hZCA9IGltYWdlSXNMb2FkZWQ7XG4gICAgICAgIFxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuXG4gICAgXG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gaW1hZ2VJc0xvYWRlZCgpIHsgXG4vLyAgIGNvbnN0IHBpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1waWN0dXJlXCIpO1xuLy8gICBwaWMuc2V0QXR0cmlidXRlKFwiZGlzcGxheVwiLCBcImFic29sdXRlXCIpO1xuLy8gICBhbGVydCh0aGlzLnNyYyk7IC8vIGJsb2IgdXJsXG4vLyAgIC8vIHVwZGF0ZSB3aWR0aCBhbmQgaGVpZ2h0IC4uLlxuLy8gfVxuXG5jb25zdCBpbnNwaXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb25cIilcbmNvbnN0IHVybCA9IFwiaHR0cDovL2FwaS5kYXRhbXVzZS5jb20vd29yZHM/cmVsX2pqYj1vY2VhblwiXG5cbi8vIHdpbmRvdy50ZXN0ID0gZmV0Y2godXJsKVxuLy8gICAudGhlbiggKHJlc3ApID0+IGNvbnNvbGUubG9nKHJlc3AuanNvbigpKSlcblxud2luZG93LmZpbmRSaHltZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXNlYXJjaFwiKS52YWx1ZTtcbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKCByZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSkpO1xuXG59O1xuXG5mdW5jdGlvbiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSB7XG4gIHNodWZmbGVBcnJheShkYXRhKVxuICBsZXQgbmV3RGF0YSA9IFtdXG4gIGRhdGEuc2xpY2UoMCwxMCkuZm9yRWFjaCggKHdvcmRPYmplY3QpPT4ge1xuICAgIG5ld0RhdGEucHVzaCh3b3JkT2JqZWN0LndvcmQpXG4gIH0pXG4gIHJldHVybiBuZXdEYXRhXG59XG5cbi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5XG5mdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxufSIsIi8vIGV4cG9ydCBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMudmFsdWU7XG4vLyB9KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUVkaXRhYmxlID0gKCkgPT4ge1xuIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiBpZiAoIXdpbmRvdy5lZGl0YWJsZSkge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKT0+IHtcbiAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICB9KVxuICAgICB3aW5kb3cuZWRpdGFibGUgPSB0cnVlXG4gfSBlbHNlIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICAgfSk7XG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xuIH1cbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9