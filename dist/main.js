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
window.changeFontOption = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__["changeFontOption"];
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
    document.getElementById("inspiration-delete").style.display = "none";
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
  document.getElementById("inspiration-delete").style.display = "block";
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
/*! exports provided: toggleEditable, changeFontOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEditable", function() { return toggleEditable; });
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
var changeFontOption = function changeFontOption(fontStyle) {
  document.getElementById("targetText").style.fontFamily = fontStyle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImVkaXRhYmxlIiwidG9nZ2xlRWRpdGFibGUiLCJjaGFuZ2VGb250T3B0aW9uIiwiY29sb3JQaWNrZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidmFsdWUiLCJlcmFzdXJlT3B0aW9uIiwiZXJhc3VyZVNlbGVjdGlvbiIsImlubmVySFRNTCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaGFuZ2VFcmFzdXJlT3B0aW9uIiwib3B0aW9uIiwiY2hhbmdlU2VsZWN0aW9uT3B0aW9uIiwic3VibWl0VGV4dCIsInN1Ym1pdHRlZFRleHQiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImdldFdvcmQiLCJsZXR0ZXJFbGVtZW50IiwicGFyYWdyYXBoIiwiYXBwZW5kIiwiZWxlIiwicHJldiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibGV0dGVycyIsInB1c2giLCJnZW5lcmF0ZVRleHQiLCJjbGVhclRleHQiLCJhcmVhIiwiZGlzcGxheSIsInJlYWRVUkwiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFja2dyb3VuZEltYWdlIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInVybCIsImZpbmRXb3JkIiwiZmlsdGVyIiwic2VhcmNoVGVybXMiLCJ1cmxDb3B5IiwiVVJMIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZmV0Y2giLCJ0b1N0cmluZyIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJwYXJlc2VEaXNwbGF5RGF0YSIsInJlc3VsdHNCb3giLCJ3b3JkT2JqZWN0Iiwid29yZCIsInNodWZmbGVBcnJheSIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9udFN0eWxlIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixLQUFsQjtBQUNBRCxNQUFNLENBQUNFLGNBQVAsR0FBd0JBLCtEQUF4QjtBQUNBRixNQUFNLENBQUNHLGdCQUFQLEdBQTBCQSxpRUFBMUI7QUFFQSxJQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUVBRixXQUFXLENBQUNHLGdCQUFaLENBQTZCLFFBQTdCLEVBQXVDLFlBQVc7QUFDaERGLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0UsS0FBdEMsQ0FBNENDLGVBQTVDLEdBQThELEtBQUtDLEtBQW5FO0FBQ0QsQ0FGRDtBQUlBLElBQUlDLGFBQWEsR0FBRyxVQUFwQjtBQUNBWCxNQUFNLENBQUNXLGFBQVAsR0FBdUJBLGFBQXZCO0FBRUEsSUFBSUMsZ0JBQWdCLEdBQUcsV0FBdkI7QUFDQVosTUFBTSxDQUFDWSxnQkFBUCxHQUEwQkEsZ0JBQTFCO0FBRUFQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q08sU0FBekMsNEJBQ0ViLE1BQU0sQ0FBQ1csYUFBUCxDQUFxQkcsTUFBckIsQ0FBNEIsQ0FBNUIsRUFBK0JDLFdBQS9CLEtBQStDZixNQUFNLENBQUNXLGFBQVAsQ0FBcUJLLEtBQXJCLENBQTJCLENBQTNCLENBRGpEO0FBSUFYLFFBQVEsQ0FBQ0MsY0FBVCxDQUNFLHlCQURGLEVBRUVPLFNBRkYsOEJBR0ViLE1BQU0sQ0FBQ1ksZ0JBQVAsQ0FBd0JFLE1BQXhCLENBQStCLENBQS9CLEVBQWtDQyxXQUFsQyxLQUNBZixNQUFNLENBQUNZLGdCQUFQLENBQXdCSSxLQUF4QixDQUE4QixDQUE5QixDQUpGOztBQU9BaEIsTUFBTSxDQUFDaUIsbUJBQVAsR0FBNkIsU0FBU0EsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2hFbEIsUUFBTSxDQUFDVyxhQUFQLEdBQXVCTyxNQUF2QjtBQUVBYixVQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNPLFNBQXpDLDRCQUNFYixNQUFNLENBQUNXLGFBQVAsQ0FBcUJHLE1BQXJCLENBQTRCLENBQTVCLEVBQStCQyxXQUEvQixLQUErQ2YsTUFBTSxDQUFDVyxhQUFQLENBQXFCSyxLQUFyQixDQUEyQixDQUEzQixDQURqRDtBQUlELENBUEQ7O0FBU0FoQixNQUFNLENBQUNtQixxQkFBUCxHQUErQixTQUFTQSxxQkFBVCxDQUErQkQsTUFBL0IsRUFBdUM7QUFDcEVsQixRQUFNLENBQUNZLGdCQUFQLEdBQTBCTSxNQUExQjtBQUVBYixVQUFRLENBQUNDLGNBQVQsQ0FDRSx5QkFERixFQUVFTyxTQUZGLDhCQUdFYixNQUFNLENBQUNZLGdCQUFQLENBQXdCRSxNQUF4QixDQUErQixDQUEvQixFQUFrQ0MsV0FBbEMsS0FDQWYsTUFBTSxDQUFDWSxnQkFBUCxDQUF3QkksS0FBeEIsQ0FBOEIsQ0FBOUIsQ0FKRjtBQU1ELENBVEQsQyxDQWNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQWhCLE1BQU0sQ0FBQ29CLFVBQVAsR0FBb0IsU0FBU0EsVUFBVCxHQUFzQjtBQUN4QyxNQUFNQyxhQUFhLEdBQUdoQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NJLEtBQTlEO0FBRUFXLGVBQWEsQ0FBQ0MsS0FBZCxDQUFvQixFQUFwQixFQUF3QkMsT0FBeEIsQ0FBZ0MsVUFBQ0MsTUFBRCxFQUFZO0FBRTFDLFFBQU1DLElBQUksR0FBR3BCLFFBQVEsQ0FBQ3FCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRCxRQUFJLENBQUNFLFNBQUwsR0FBaUIsU0FBakI7QUFDQUYsUUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQyxLQUFyQztBQUNBSCxRQUFJLENBQUNaLFNBQUwsR0FBaUJXLE1BQWpCO0FBQ0FDLFFBQUksQ0FBQ2xCLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDeEMsVUFBSVAsTUFBTSxDQUFDWSxnQkFBUCxLQUE0QixXQUFoQyxFQUE2QztBQUMzQyxhQUFLaUIsU0FBTCxDQUFlQyxNQUFmLFdBQXlCOUIsTUFBTSxDQUFDVyxhQUFoQztBQUNELE9BRkQsTUFFTztBQUNMb0IsZUFBTyxDQUFDLElBQUQsQ0FBUCxDQUFjUixPQUFkLENBQXNCLFVBQUNTLGFBQUQsRUFBaUI7QUFDckNBLHVCQUFhLENBQUNILFNBQWQsQ0FBd0JDLE1BQXhCLFdBQWtDOUIsTUFBTSxDQUFDVyxhQUF6QztBQUNELFNBRkQ7QUFHRDtBQUNGLEtBUkQ7QUFVQSxRQUFNc0IsU0FBUyxHQUFHNUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBQ0EyQixhQUFTLENBQUNDLE1BQVYsQ0FBaUJULElBQWpCO0FBQ0QsR0FsQkQ7QUFtQkQsQ0F0QkQ7O0FBd0JBLFNBQVNNLE9BQVQsQ0FBaUJJLEdBQWpCLEVBQXNCO0FBQ3BCLE1BQUlDLElBQUksR0FBR0QsR0FBRyxDQUFDRSxzQkFBZjtBQUNBLE1BQUlDLElBQUksR0FBR0gsR0FBRyxDQUFDSSxrQkFBZjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxDQUFDTCxHQUFELENBQWQ7O0FBQ0EsU0FBT0MsSUFBSSxLQUFLLElBQVQsSUFBaUJBLElBQUksQ0FBQ3ZCLFNBQUwsS0FBbUIsR0FBM0MsRUFBZ0Q7QUFDOUMyQixXQUFPLENBQUNDLElBQVIsQ0FBYUwsSUFBYjtBQUNBQSxRQUFJLEdBQUdBLElBQUksQ0FBQ0Msc0JBQVo7O0FBQ0EsUUFBSUQsSUFBSSxLQUFLLElBQVQsSUFBaUJBLElBQUksQ0FBQ3ZCLFNBQUwsS0FBbUIsR0FBcEMsSUFBMkN1QixJQUFJLENBQUN2QixTQUFMLEtBQW1CLEdBQWxFLEVBQXVFO0FBQ3JFO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPeUIsSUFBSSxLQUFNLElBQVYsSUFBa0JBLElBQUksQ0FBQ3pCLFNBQUwsS0FBbUIsR0FBNUMsRUFBaUQ7QUFDN0MyQixXQUFPLENBQUNDLElBQVIsQ0FBYUgsSUFBYjtBQUNBQSxRQUFJLEdBQUdBLElBQUksQ0FBQ0Msa0JBQVo7O0FBQ0EsUUFBSUQsSUFBSSxLQUFLLElBQVQsSUFBaUJBLElBQUksQ0FBQ3pCLFNBQUwsS0FBbUIsR0FBcEMsSUFBMkN5QixJQUFJLENBQUN6QixTQUFMLEtBQW1CLEdBQWxFLEVBQXVFO0FBQ3JFO0FBQ0Q7QUFDSjs7QUFFRCxTQUFPMkIsT0FBUDtBQUNEOztBQUdEeEMsTUFBTSxDQUFDMEMsWUFBUCxHQUFzQixTQUFTQSxZQUFULEdBQXdCO0FBQzlDLE1BQU1yQixhQUFhLEdBQUcsbUlBQXRCO0FBRUFBLGVBQWEsQ0FBQ0MsS0FBZCxDQUFvQixFQUFwQixFQUF3QkMsT0FBeEIsQ0FBZ0MsVUFBQ0MsTUFBRCxFQUFZO0FBQzFDLFFBQU1DLElBQUksR0FBR3BCLFFBQVEsQ0FBQ3FCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRCxRQUFJLENBQUNFLFNBQUwsR0FBaUIsU0FBakI7QUFDQUYsUUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQyxLQUFyQztBQUNBSCxRQUFJLENBQUNHLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkIsQ0FBN0I7QUFDQUgsUUFBSSxDQUFDWixTQUFMLEdBQWlCVyxNQUFqQjtBQUNBQyxRQUFJLENBQUNsQixnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDLFVBQUlQLE1BQU0sQ0FBQ1ksZ0JBQVAsS0FBNEIsV0FBaEMsRUFBNkM7QUFDM0MsYUFBS2lCLFNBQUwsQ0FBZUMsTUFBZixXQUF5QjlCLE1BQU0sQ0FBQ1csYUFBaEM7QUFDRCxPQUZELE1BRU87QUFDTG9CLGVBQU8sQ0FBQyxJQUFELENBQVAsQ0FBY1IsT0FBZCxDQUFzQixVQUFDUyxhQUFELEVBQW1CO0FBQ3ZDQSx1QkFBYSxDQUFDSCxTQUFkLENBQXdCQyxNQUF4QixXQUFrQzlCLE1BQU0sQ0FBQ1csYUFBekM7QUFDRCxTQUZEO0FBR0Q7QUFDRixLQVJEO0FBVUEsUUFBTXNCLFNBQVMsR0FBRzVCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUNBMkIsYUFBUyxDQUFDQyxNQUFWLENBQWlCVCxJQUFqQjtBQUNELEdBbEJEO0FBa0JJLENBckJKOztBQXVCQXpCLE1BQU0sQ0FBQzJDLFNBQVAsR0FBbUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzNCdkMsVUFBUSxDQUFDQyxjQUFULENBQXdCc0MsSUFBeEIsRUFBOEIvQixTQUE5QixHQUEwQyxFQUExQzs7QUFFQSxNQUFJK0IsSUFBSSxLQUFLLHFCQUFiLEVBQW9DO0FBQ2xDdkMsWUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ0UsS0FBL0MsQ0FBcURxQyxPQUFyRCxHQUErRCxNQUEvRDtBQUNBeEMsWUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixFQUE4Q0UsS0FBOUMsQ0FBb0RxQyxPQUFwRCxHQUE4RCxNQUE5RDtBQUNEO0FBQ0YsQ0FQRDs7QUFVQXhDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsZ0JBQWxDLENBQW1ELFFBQW5ELEVBQTZEdUMsT0FBN0QsRUFBc0UsSUFBdEU7O0FBQ0EsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixNQUFJQyxJQUFJLEdBQUcxQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MwQyxLQUFsQyxDQUF3QyxDQUF4QyxDQUFYO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjs7QUFDQUQsUUFBTSxDQUFDRSxTQUFQLEdBQW1CLFlBQVk7QUFDN0I5QyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NFLEtBQXRDLENBQTRDNEMsZUFBNUMsR0FDRSxTQUFTSCxNQUFNLENBQUNJLE1BQWhCLEdBQXlCLEdBRDNCO0FBRUQsR0FIRDs7QUFJQSxNQUFJTixJQUFKLEVBQVU7QUFDUkUsVUFBTSxDQUFDSyxhQUFQLENBQXFCUCxJQUFyQjtBQUNELEdBRkQsTUFFTyxDQUNOO0FBQ0YsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFFQTtBQUVSO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFDQSxJQUFJUSxHQUFHLEdBQUcsZ0NBQVY7O0FBR0F2RCxNQUFNLENBQUN3RCxRQUFQLEdBQWtCLFVBQUNDLE1BQUQsRUFBWTtBQUM1QixNQUFNQyxXQUFXLEdBQUdyRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDSSxLQUFsRTtBQUNBLE1BQUlpRCxPQUFPLEdBQUcsSUFBSUMsR0FBSixDQUFRTCxHQUFSLENBQWQ7QUFDQSxNQUFJTSxNQUFNLEdBQUcsSUFBSUMsZUFBSixDQUFvQkgsT0FBTyxDQUFDSSxNQUE1QixDQUFiO0FBQ0FGLFFBQU0sQ0FBQzNCLE1BQVAsQ0FBY3VCLE1BQWQsRUFBc0JDLFdBQXRCO0FBQ0FNLE9BQUssQ0FBQ1QsR0FBRyxHQUFHTSxNQUFNLENBQUNJLFFBQVAsRUFBUCxDQUFMLENBQ0dDLElBREgsQ0FDUyxVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDQyxJQUFMLEVBQUo7QUFBQSxHQURiLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFEO0FBQUEsV0FBVUMsaUJBQWlCLENBQUNELElBQUQsQ0FBM0I7QUFBQSxHQUZSO0FBSUQsQ0FURDs7QUFXQSxTQUFTQyxpQkFBVCxDQUEyQkQsSUFBM0IsRUFBaUM7QUFDL0I7QUFDQSxNQUFNRSxVQUFVLEdBQUdsRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLENBQW5CO0FBQ0ErRCxNQUFJLENBQUNyRCxLQUFMLENBQVcsQ0FBWCxFQUFhLEVBQWIsRUFBaUJPLE9BQWpCLENBQTBCLFVBQUNpRCxVQUFELEVBQWU7QUFDdkMsUUFBTS9DLElBQUksR0FBR3BCLFFBQVEsQ0FBQ3FCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRCxRQUFJLENBQUNaLFNBQUwsR0FBaUIyRCxVQUFVLENBQUNDLElBQVgsR0FBa0IsR0FBbkM7QUFDQUYsY0FBVSxDQUFDckMsTUFBWCxDQUFrQlQsSUFBbEI7QUFDRCxHQUpEO0FBS0E4QyxZQUFVLENBQUMvRCxLQUFYLENBQWlCcUMsT0FBakIsR0FBMkIsT0FBM0I7QUFDQXhDLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixvQkFBeEIsRUFBOENFLEtBQTlDLENBQW9EcUMsT0FBcEQsR0FBOEQsT0FBOUQ7QUFDRCxDLENBRUQ7OztBQUNBLFNBQVM2QixZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUN6QixPQUFLLElBQUlDLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLEdBQWUsQ0FBNUIsRUFBK0JELENBQUMsR0FBRyxDQUFuQyxFQUFzQ0EsQ0FBQyxFQUF2QyxFQUEyQztBQUN2QyxRQUFJRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJMLENBQUMsR0FBRyxDQUFyQixDQUFYLENBQVI7QUFDQSxRQUFJTSxJQUFJLEdBQUdQLEtBQUssQ0FBQ0MsQ0FBRCxDQUFoQjtBQUNBRCxTQUFLLENBQUNDLENBQUQsQ0FBTCxHQUFXRCxLQUFLLENBQUNHLENBQUQsQ0FBaEI7QUFDQUgsU0FBSyxDQUFDRyxDQUFELENBQUwsR0FBV0ksSUFBWDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7O0FDaE9EO0FBQUE7QUFBQTtBQUFPLElBQU1oRixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDbkMsTUFBTWlGLEtBQUssR0FBRzlFLFFBQVEsQ0FBQytFLGdCQUFULENBQTBCLE1BQTFCLENBQWQ7O0FBQ0EsTUFBSSxDQUFDcEYsTUFBTSxDQUFDQyxRQUFaLEVBQXNCO0FBQ2xCa0YsU0FBSyxDQUFDNUQsT0FBTixDQUFjLFVBQUNFLElBQUQsRUFBUztBQUNuQkEsVUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQyxJQUFyQztBQUNILEtBRkQ7QUFHQTVCLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixJQUFsQjtBQUNILEdBTEQsTUFLTztBQUNIa0YsU0FBSyxDQUFDNUQsT0FBTixDQUFjLFVBQUNFLElBQUQsRUFBVTtBQUN0QkEsVUFBSSxDQUFDRyxZQUFMLENBQWtCLGlCQUFsQixFQUFxQyxLQUFyQztBQUNELEtBRkQ7QUFHQTVCLFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQixLQUFsQjtBQUNIO0FBQ0QsQ0FiTTtBQWVBLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ2tGLFNBQUQsRUFBYztBQUMxQ2hGLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0UsS0FBdEMsQ0FBNEM4RSxVQUE1QyxHQUF5REQsU0FBekQ7QUFDSCxDQUZNLEM7Ozs7Ozs7Ozs7OztBQ2ZQO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgdG9nZ2xlRWRpdGFibGUsIGNoYW5nZUZvbnRPcHRpb24gfSBmcm9tIFwiLi9zY3JpcHRzL2ZpbHRlcnNcIjtcblxud2luZG93LmVkaXRhYmxlID0gZmFsc2VcbndpbmRvdy50b2dnbGVFZGl0YWJsZSA9IHRvZ2dsZUVkaXRhYmxlXG53aW5kb3cuY2hhbmdlRm9udE9wdGlvbiA9IGNoYW5nZUZvbnRPcHRpb247XG5cbmNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvclBpY2tlclwiKTtcblxuY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMudmFsdWU7XG59KTtcblxubGV0IGVyYXN1cmVPcHRpb24gPSBcImJsYWNrb3V0XCI7XG53aW5kb3cuZXJhc3VyZU9wdGlvbiA9IGVyYXN1cmVPcHRpb247XG5cbmxldCBlcmFzdXJlU2VsZWN0aW9uID0gXCJjaGFyYWN0ZXJcIjtcbndpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gZXJhc3VyZVNlbGVjdGlvbjtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBFcmFzdXJlIFN0eWxlOiAke1xuICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG59YDtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuKS5pbm5lckhUTUwgPSBgU2VsZWN0aW9uIFN0eWxlOiAke1xuICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG59YDtcblxud2luZG93LmNoYW5nZUVyYXN1cmVPcHRpb24gPSBmdW5jdGlvbiBjaGFuZ2VFcmFzdXJlT3B0aW9uKG9wdGlvbikge1xuICB3aW5kb3cuZXJhc3VyZU9wdGlvbiA9IG9wdGlvblxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1zdHlsZVwiKS5pbm5lckhUTUwgPSBgQ3VycmVudCBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZU9wdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdpbmRvdy5lcmFzdXJlT3B0aW9uLnNsaWNlKDEpXG4gIH1gO1xuXG59XG5cbndpbmRvdy5jaGFuZ2VTZWxlY3Rpb25PcHRpb24gPSBmdW5jdGlvbiBjaGFuZ2VTZWxlY3Rpb25PcHRpb24ob3B0aW9uKSB7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID0gb3B0aW9uO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY3VycmVudC1zZWxlY3Rpb24tc3R5bGVcIlxuICApLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xuICAgIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLnNsaWNlKDEpXG4gIH1gO1xufTtcblxuXG5cblxuLy8gd2luZG93LnN1Ym1pdFRleHQgPSBmdW5jdGlvbiBzdWJtaXRUZXh0KCkge1xuLy8gICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRlZFRleHRcIikudmFsdWU7XG5cbi8vICAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblxuLy8gICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbi8vICAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuLy8gICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuLy8gICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuLy8gICAgIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG4vLyAgIH0pO1xuLy8gfTtcblxud2luZG93LnN1Ym1pdFRleHQgPSBmdW5jdGlvbiBzdWJtaXRUZXh0KCkge1xuICBjb25zdCBzdWJtaXR0ZWRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRlZFRleHRcIikudmFsdWU7XG5cbiAgc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IGxldHRlcjtcbiAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbiA9PT0gXCJjaGFyYWN0ZXJcIikge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRXb3JkKHRoaXMpLmZvckVhY2goKGxldHRlckVsZW1lbnQpPT57XG4gICAgICAgICAgbGV0dGVyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGAke3dpbmRvdy5lcmFzdXJlT3B0aW9ufWApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICAgIHBhcmFncmFwaC5hcHBlbmQoc3Bhbik7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gZ2V0V29yZChlbGUpIHtcbiAgbGV0IHByZXYgPSBlbGUucHJldmlvdXNFbGVtZW50U2libGluZ1xuICBsZXQgbmV4dCA9IGVsZS5uZXh0RWxlbWVudFNpYmxpbmdcbiAgbGV0IGxldHRlcnMgPSBbZWxlXVxuICB3aGlsZSAocHJldiAhPT0gbnVsbCAmJiBwcmV2LmlubmVySFRNTCAhPT0gXCIgXCIpIHtcbiAgICBsZXR0ZXJzLnB1c2gocHJldik7XG4gICAgcHJldiA9IHByZXYucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBpZiAocHJldiA9PT0gbnVsbCB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgcHJldi5pbm5lckhUTUwgPT09IFwiLlwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHdoaWxlIChuZXh0ICE9PSAgbnVsbCAmJiBuZXh0LmlubmVySFRNTCAhPT0gXCIgXCIpIHtcbiAgICAgIGxldHRlcnMucHVzaChuZXh0KVxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKG5leHQgPT09IG51bGwgfHwgbmV4dC5pbm5lckhUTUwgPT09IFwiIFwiIHx8IG5leHQuaW5uZXJIVE1MID09PSBcIi5cIikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGxldHRlcnNcbn1cblxuXG53aW5kb3cuZ2VuZXJhdGVUZXh0ID0gZnVuY3Rpb24gZ2VuZXJhdGVUZXh0KCkge1xuY29uc3Qgc3VibWl0dGVkVGV4dCA9IFwiSSBoZWFyZCBhIEZseSBidXp6IC0gd2hlbiBJIGRpZWQgLVxcblRoZSBTdGlsbG5lc3MgaW4gdGhlIFJvb21cXG5XYXMgbGlrZSB0aGUgU3RpbGxuZXNzIGluIHRoZSBBaXIgLVxcbkJldHdlZW4gdGhlIEhlYXZlcyBvZiBTdG9ybVxcblwiXG5cbnN1Ym1pdHRlZFRleHQuc3BsaXQoXCJcIikuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5jbGFzc05hbWUgPSBcInZpc2libGVcIjtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcInotaW5kZXhcIiwgMyk7XG4gIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCkgPT4ge1xuICAgICAgICBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKTtcbiAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbn0pO307XG5cbndpbmRvdy5jbGVhclRleHQgPSAoYXJlYSkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhcmVhKS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmIChhcmVhID09PSBcImluc3BpcmF0aW9uLXJlc3VsdHNcIikge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zcGlyYXRpb24tcmVzdWx0c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLWRlbGV0ZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgfVxufTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldHZhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHJlYWRVUkwsIHRydWUpO1xuZnVuY3Rpb24gcmVhZFVSTCgpIHtcbiAgdmFyIGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldHZhbFwiKS5maWxlc1swXTtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybChcIiArIHJlYWRlci5yZXN1bHQgKyBcIilcIjtcbiAgfTtcbiAgaWYgKGZpbGUpIHtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfSBlbHNlIHtcbiAgfVxufVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBkb2N1bWVudFxuLy8gICAgIC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpXG4vLyAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlc1swXSkge1xuLy8gICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKTsgLy8gJCgnaW1nJylbMF1cbi8vICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5maWxlc1swXSk7IC8vIHNldCBzcmMgdG8gYmxvYiB1cmxcbiAgICAgICAgLy8gaW1nLnNldEF0dHJpYnV0ZShcImRpc3BsYXlcIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICAgICAgICAgXG4gICAgICAgIC8vIGltZy5vbmxvYWQgPSBpbWFnZUlzTG9hZGVkO1xuICAgICAgICBcbi8vICAgICAgIH1cbi8vICAgICB9KTtcblxuICAgIFxuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIGltYWdlSXNMb2FkZWQoKSB7IFxuLy8gICBjb25zdCBwaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItcGljdHVyZVwiKTtcbi8vICAgcGljLnNldEF0dHJpYnV0ZShcImRpc3BsYXlcIiwgXCJhYnNvbHV0ZVwiKTtcbi8vICAgYWxlcnQodGhpcy5zcmMpOyAvLyBibG9iIHVybFxuLy8gICAvLyB1cGRhdGUgd2lkdGggYW5kIGhlaWdodCAuLi5cbi8vIH1cblxuLy8gY29uc3QgaW5zcGlyYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uXCIpXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLmRhdGFtdXNlLmNvbS93b3Jkcz9cIlxuXG5cbndpbmRvdy5maW5kV29yZCA9IChmaWx0ZXIpID0+IHtcbiAgY29uc3Qgc2VhcmNoVGVybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXNlYXJjaFwiKS52YWx1ZTtcbiAgbGV0IHVybENvcHkgPSBuZXcgVVJMKHVybClcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsQ29weS5zZWFyY2gpO1xuICBwYXJhbXMuYXBwZW5kKGZpbHRlciwgc2VhcmNoVGVybXMpO1xuICBmZXRjaCh1cmwgKyBwYXJhbXMudG9TdHJpbmcoKSAgKVxuICAgIC50aGVuKCByZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSk7XG5cbn07XG5cbmZ1bmN0aW9uIHBhcmVzZURpc3BsYXlEYXRhKGRhdGEpIHtcbiAgLy8gc2h1ZmZsZUFycmF5KGRhdGEpIHR1cm4gaXQgb2ZmXG4gIGNvbnN0IHJlc3VsdHNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXJlc3VsdHNcIik7XG4gIGRhdGEuc2xpY2UoMCwyMCkuZm9yRWFjaCggKHdvcmRPYmplY3QpPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IHdvcmRPYmplY3Qud29yZCArIFwiIFwiO1xuICAgIHJlc3VsdHNCb3guYXBwZW5kKHNwYW4pO1xuICB9KVxuICByZXN1bHRzQm94LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNwaXJhdGlvbi1kZWxldGVcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXlcbmZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnJheSkge1xuICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICAgIGFycmF5W2pdID0gdGVtcDtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IHRvZ2dsZUVkaXRhYmxlID0gKCkgPT4ge1xuIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiBpZiAoIXdpbmRvdy5lZGl0YWJsZSkge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKT0+IHtcbiAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICB9KVxuICAgICB3aW5kb3cuZWRpdGFibGUgPSB0cnVlXG4gfSBlbHNlIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICAgfSk7XG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xuIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VGb250T3B0aW9uID0gKGZvbnRTdHlsZSkgPT57XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250U3R5bGU7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==