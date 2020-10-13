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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIndpbmRvdyIsImVkaXRhYmxlIiwidG9nZ2xlRWRpdGFibGUiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImVyYXN1cmVPcHRpb24iLCJlcmFzdXJlU2VsZWN0aW9uIiwiaW5uZXJIVE1MIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImNoYW5nZUVyYXN1cmVPcHRpb24iLCJvcHRpb24iLCJjaGFuZ2VTZWxlY3Rpb25PcHRpb24iLCJzdWJtaXRUZXh0Iiwic3VibWl0dGVkVGV4dCIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0V29yZCIsImxldHRlckVsZW1lbnQiLCJwYXJhZ3JhcGgiLCJhcHBlbmQiLCJlbGUiLCJwcmV2IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsZXR0ZXJzIiwicHVzaCIsImdlbmVyYXRlVGV4dCIsImNsZWFyVGV4dCIsInJlYWRVUkwiLCJmaWxlIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFja2dyb3VuZEltYWdlIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInVybCIsImZpbmRXb3JkIiwiZmlsdGVyIiwic2VhcmNoVGVybXMiLCJ1cmxDb3B5IiwiVVJMIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZmV0Y2giLCJ0b1N0cmluZyIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJwYXJlc2VEaXNwbGF5RGF0YSIsInNodWZmbGVBcnJheSIsIndvcmRPYmplY3QiLCJ3b3JkIiwicmVzdWx0c0JveCIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwic3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCLEtBQWxCO0FBQ0FELE1BQU0sQ0FBQ0UsY0FBUCxHQUF3QkEsK0RBQXhCO0FBRUEsSUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFFQUYsV0FBVyxDQUFDRyxnQkFBWixDQUE2QixRQUE3QixFQUF1QyxZQUFXO0FBQ2hERixVQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NFLEtBQXRDLENBQTRDQyxlQUE1QyxHQUE4RCxLQUFLQyxLQUFuRTtBQUNELENBRkQ7QUFJQSxJQUFJQyxhQUFhLEdBQUcsVUFBcEI7QUFDQVYsTUFBTSxDQUFDVSxhQUFQLEdBQXVCQSxhQUF2QjtBQUVBLElBQUlDLGdCQUFnQixHQUFHLFdBQXZCO0FBQ0FYLE1BQU0sQ0FBQ1csZ0JBQVAsR0FBMEJBLGdCQUExQjtBQUVBUCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNPLFNBQXpDLDRCQUNFWixNQUFNLENBQUNVLGFBQVAsQ0FBcUJHLE1BQXJCLENBQTRCLENBQTVCLEVBQStCQyxXQUEvQixLQUErQ2QsTUFBTSxDQUFDVSxhQUFQLENBQXFCSyxLQUFyQixDQUEyQixDQUEzQixDQURqRDtBQUlBWCxRQUFRLENBQUNDLGNBQVQsQ0FDRSx5QkFERixFQUVFTyxTQUZGLDhCQUdFWixNQUFNLENBQUNXLGdCQUFQLENBQXdCRSxNQUF4QixDQUErQixDQUEvQixFQUFrQ0MsV0FBbEMsS0FDQWQsTUFBTSxDQUFDVyxnQkFBUCxDQUF3QkksS0FBeEIsQ0FBOEIsQ0FBOUIsQ0FKRjs7QUFPQWYsTUFBTSxDQUFDZ0IsbUJBQVAsR0FBNkIsU0FBU0EsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2hFakIsUUFBTSxDQUFDVSxhQUFQLEdBQXVCTyxNQUF2QjtBQUVBYixVQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNPLFNBQXpDLDRCQUNFWixNQUFNLENBQUNVLGFBQVAsQ0FBcUJHLE1BQXJCLENBQTRCLENBQTVCLEVBQStCQyxXQUEvQixLQUErQ2QsTUFBTSxDQUFDVSxhQUFQLENBQXFCSyxLQUFyQixDQUEyQixDQUEzQixDQURqRDtBQUlELENBUEQ7O0FBU0FmLE1BQU0sQ0FBQ2tCLHFCQUFQLEdBQStCLFNBQVNBLHFCQUFULENBQStCRCxNQUEvQixFQUF1QztBQUNwRWpCLFFBQU0sQ0FBQ1csZ0JBQVAsR0FBMEJNLE1BQTFCO0FBRUFiLFVBQVEsQ0FBQ0MsY0FBVCxDQUNFLHlCQURGLEVBRUVPLFNBRkYsOEJBR0VaLE1BQU0sQ0FBQ1csZ0JBQVAsQ0FBd0JFLE1BQXhCLENBQStCLENBQS9CLEVBQWtDQyxXQUFsQyxLQUNBZCxNQUFNLENBQUNXLGdCQUFQLENBQXdCSSxLQUF4QixDQUE4QixDQUE5QixDQUpGO0FBTUQsQ0FURCxDLENBY0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBZixNQUFNLENBQUNtQixVQUFQLEdBQW9CLFNBQVNBLFVBQVQsR0FBc0I7QUFDeEMsTUFBTUMsYUFBYSxHQUFHaEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDSSxLQUE5RDtBQUVBVyxlQUFhLENBQUNDLEtBQWQsQ0FBb0IsRUFBcEIsRUFBd0JDLE9BQXhCLENBQWdDLFVBQUNDLE1BQUQsRUFBWTtBQUUxQyxRQUFNQyxJQUFJLEdBQUdwQixRQUFRLENBQUNxQixhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQUQsUUFBSSxDQUFDRSxTQUFMLEdBQWlCLFNBQWpCO0FBQ0FGLFFBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUMsS0FBckM7QUFDQUgsUUFBSSxDQUFDWixTQUFMLEdBQWlCVyxNQUFqQjtBQUNBQyxRQUFJLENBQUNsQixnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFXO0FBQ3hDLFVBQUlOLE1BQU0sQ0FBQ1csZ0JBQVAsS0FBNEIsV0FBaEMsRUFBNkM7QUFDM0MsYUFBS2lCLFNBQUwsQ0FBZUMsTUFBZixXQUF5QjdCLE1BQU0sQ0FBQ1UsYUFBaEM7QUFDRCxPQUZELE1BRU87QUFDTG9CLGVBQU8sQ0FBQyxJQUFELENBQVAsQ0FBY1IsT0FBZCxDQUFzQixVQUFDUyxhQUFELEVBQWlCO0FBQ3JDQSx1QkFBYSxDQUFDSCxTQUFkLENBQXdCQyxNQUF4QixXQUFrQzdCLE1BQU0sQ0FBQ1UsYUFBekM7QUFDRCxTQUZEO0FBR0Q7QUFDRixLQVJEO0FBVUEsUUFBTXNCLFNBQVMsR0FBRzVCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUNBMkIsYUFBUyxDQUFDQyxNQUFWLENBQWlCVCxJQUFqQjtBQUNELEdBbEJEO0FBbUJELENBdEJEOztBQXdCQSxTQUFTTSxPQUFULENBQWlCSSxHQUFqQixFQUFzQjtBQUNwQixNQUFJQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0Usc0JBQWY7QUFDQSxNQUFJQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksa0JBQWY7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBQ0wsR0FBRCxDQUFkOztBQUNBLFNBQU9DLElBQUksS0FBSyxJQUFULElBQWlCQSxJQUFJLENBQUN2QixTQUFMLEtBQW1CLEdBQTNDLEVBQWdEO0FBQzlDMkIsV0FBTyxDQUFDQyxJQUFSLENBQWFMLElBQWI7QUFDQUEsUUFBSSxHQUFHQSxJQUFJLENBQUNDLHNCQUFaOztBQUNBLFFBQUlELElBQUksS0FBSyxJQUFULElBQWlCQSxJQUFJLENBQUN2QixTQUFMLEtBQW1CLEdBQXBDLElBQTJDdUIsSUFBSSxDQUFDdkIsU0FBTCxLQUFtQixHQUFsRSxFQUF1RTtBQUNyRTtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3lCLElBQUksS0FBTSxJQUFWLElBQWtCQSxJQUFJLENBQUN6QixTQUFMLEtBQW1CLEdBQTVDLEVBQWlEO0FBQzdDMkIsV0FBTyxDQUFDQyxJQUFSLENBQWFILElBQWI7QUFDQUEsUUFBSSxHQUFHQSxJQUFJLENBQUNDLGtCQUFaOztBQUNBLFFBQUlELElBQUksS0FBSyxJQUFULElBQWlCQSxJQUFJLENBQUN6QixTQUFMLEtBQW1CLEdBQXBDLElBQTJDeUIsSUFBSSxDQUFDekIsU0FBTCxLQUFtQixHQUFsRSxFQUF1RTtBQUNyRTtBQUNEO0FBQ0o7O0FBRUQsU0FBTzJCLE9BQVA7QUFDRDs7QUFHRHZDLE1BQU0sQ0FBQ3lDLFlBQVAsR0FBc0IsU0FBU0EsWUFBVCxHQUF3QjtBQUM5QyxNQUFNckIsYUFBYSxHQUFHLG1JQUF0QjtBQUVBQSxlQUFhLENBQUNDLEtBQWQsQ0FBb0IsRUFBcEIsRUFBd0JDLE9BQXhCLENBQWdDLFVBQUNDLE1BQUQsRUFBWTtBQUMxQyxRQUFNQyxJQUFJLEdBQUdwQixRQUFRLENBQUNxQixhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQUQsUUFBSSxDQUFDRSxTQUFMLEdBQWlCLFNBQWpCO0FBQ0FGLFFBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUMsS0FBckM7QUFDQUgsUUFBSSxDQUFDRyxZQUFMLENBQWtCLFNBQWxCLEVBQTZCLENBQTdCO0FBQ0FILFFBQUksQ0FBQ1osU0FBTCxHQUFpQlcsTUFBakI7QUFDQUMsUUFBSSxDQUFDbEIsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6QyxVQUFJTixNQUFNLENBQUNXLGdCQUFQLEtBQTRCLFdBQWhDLEVBQTZDO0FBQzNDLGFBQUtpQixTQUFMLENBQWVDLE1BQWYsV0FBeUI3QixNQUFNLENBQUNVLGFBQWhDO0FBQ0QsT0FGRCxNQUVPO0FBQ0xvQixlQUFPLENBQUMsSUFBRCxDQUFQLENBQWNSLE9BQWQsQ0FBc0IsVUFBQ1MsYUFBRCxFQUFtQjtBQUN2Q0EsdUJBQWEsQ0FBQ0gsU0FBZCxDQUF3QkMsTUFBeEIsV0FBa0M3QixNQUFNLENBQUNVLGFBQXpDO0FBQ0QsU0FGRDtBQUdEO0FBQ0YsS0FSRDtBQVVBLFFBQU1zQixTQUFTLEdBQUc1QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbEI7QUFDQTJCLGFBQVMsQ0FBQ0MsTUFBVixDQUFpQlQsSUFBakI7QUFDRCxHQWxCRDtBQWtCSSxDQXJCSjs7QUF1QkF4QixNQUFNLENBQUMwQyxTQUFQLEdBQW1CLFNBQVNBLFNBQVQsR0FBcUI7QUFDdEMsTUFBTXRCLGFBQWEsR0FBR2hCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ08sU0FBdEMsR0FBa0QsRUFBeEU7QUFDRCxDQUZEOztBQUtBUixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLGdCQUFsQyxDQUFtRCxRQUFuRCxFQUE2RHFDLE9BQTdELEVBQXNFLElBQXRFOztBQUNBLFNBQVNBLE9BQVQsR0FBbUI7QUFDakIsTUFBSUMsSUFBSSxHQUFHeEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDd0MsS0FBbEMsQ0FBd0MsQ0FBeEMsQ0FBWDtBQUNBLE1BQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELFFBQU0sQ0FBQ0UsU0FBUCxHQUFtQixZQUFZO0FBQzdCNUMsWUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDRSxLQUF0QyxDQUE0QzBDLGVBQTVDLEdBQ0UsU0FBU0gsTUFBTSxDQUFDSSxNQUFoQixHQUF5QixHQUQzQjtBQUVELEdBSEQ7O0FBSUEsTUFBSU4sSUFBSixFQUFVO0FBQ1JFLFVBQU0sQ0FBQ0ssYUFBUCxDQUFxQlAsSUFBckI7QUFDRCxHQUZELE1BRU8sQ0FDTjtBQUNGLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBRUE7QUFFUjtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsSUFBSVEsR0FBRyxHQUFHLGdDQUFWOztBQUdBcEQsTUFBTSxDQUFDcUQsUUFBUCxHQUFrQixVQUFDQyxNQUFELEVBQVk7QUFDNUIsTUFBTUMsV0FBVyxHQUFHbkQsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixFQUE4Q0ksS0FBbEU7QUFDQSxNQUFJK0MsT0FBTyxHQUFHLElBQUlDLEdBQUosQ0FBUUwsR0FBUixDQUFkO0FBQ0EsTUFBSU0sTUFBTSxHQUFHLElBQUlDLGVBQUosQ0FBb0JILE9BQU8sQ0FBQ0ksTUFBNUIsQ0FBYjtBQUNBRixRQUFNLENBQUN6QixNQUFQLENBQWNxQixNQUFkLEVBQXNCQyxXQUF0QjtBQUNBTSxPQUFLLENBQUNULEdBQUcsR0FBR00sTUFBTSxDQUFDSSxRQUFQLEVBQVAsQ0FBTCxDQUNHQyxJQURILENBQ1MsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQUFKO0FBQUEsR0FEYixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRDtBQUFBLFdBQVVDLGlCQUFpQixDQUFDRCxJQUFELENBQTNCO0FBQUEsR0FGUjtBQUlELENBVEQ7O0FBV0EsU0FBU0MsaUJBQVQsQ0FBMkJELElBQTNCLEVBQWlDO0FBQy9CRSxjQUFZLENBQUNGLElBQUQsQ0FBWjtBQUNBQSxNQUFJLENBQUNuRCxLQUFMLENBQVcsQ0FBWCxFQUFhLEVBQWIsRUFBaUJPLE9BQWpCLENBQTBCLFVBQUMrQyxVQUFELEVBQWU7QUFDdkMsUUFBTTdDLElBQUksR0FBR3BCLFFBQVEsQ0FBQ3FCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRCxRQUFJLENBQUNaLFNBQUwsR0FBaUJ5RCxVQUFVLENBQUNDLElBQVgsR0FBa0IsR0FBbkM7QUFDQSxRQUFNQyxVQUFVLEdBQUduRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLENBQW5CO0FBQ0FrRSxjQUFVLENBQUN0QyxNQUFYLENBQWtCVCxJQUFsQjtBQUNELEdBTEQ7QUFNRCxDLENBRUQ7OztBQUNBLFNBQVM0QyxZQUFULENBQXNCSSxLQUF0QixFQUE2QjtBQUN6QixPQUFLLElBQUlDLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLEdBQWUsQ0FBNUIsRUFBK0JELENBQUMsR0FBRyxDQUFuQyxFQUFzQ0EsQ0FBQyxFQUF2QyxFQUEyQztBQUN2QyxRQUFJRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJMLENBQUMsR0FBRyxDQUFyQixDQUFYLENBQVI7QUFDQSxRQUFJTSxJQUFJLEdBQUdQLEtBQUssQ0FBQ0MsQ0FBRCxDQUFoQjtBQUNBRCxTQUFLLENBQUNDLENBQUQsQ0FBTCxHQUFXRCxLQUFLLENBQUNHLENBQUQsQ0FBaEI7QUFDQUgsU0FBSyxDQUFDRyxDQUFELENBQUwsR0FBV0ksSUFBWDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7O0FDeE5EO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNN0UsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ25DLE1BQU04RSxLQUFLLEdBQUc1RSxRQUFRLENBQUM2RSxnQkFBVCxDQUEwQixNQUExQixDQUFkOztBQUNBLE1BQUksQ0FBQ2pGLE1BQU0sQ0FBQ0MsUUFBWixFQUFzQjtBQUNsQitFLFNBQUssQ0FBQzFELE9BQU4sQ0FBYyxVQUFDRSxJQUFELEVBQVM7QUFDbkJBLFVBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUMsSUFBckM7QUFDSCxLQUZEO0FBR0EzQixVQUFNLENBQUNDLFFBQVAsR0FBa0IsSUFBbEI7QUFDSCxHQUxELE1BS087QUFDSCtFLFNBQUssQ0FBQzFELE9BQU4sQ0FBYyxVQUFDRSxJQUFELEVBQVU7QUFDdEJBLFVBQUksQ0FBQ0csWUFBTCxDQUFrQixpQkFBbEIsRUFBcUMsS0FBckM7QUFDRCxLQUZEO0FBR0EzQixVQUFNLENBQUNDLFFBQVAsR0FBa0IsS0FBbEI7QUFDSDtBQUNELENBYk0sQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyB0b2dnbGVFZGl0YWJsZSB9IGZyb20gXCIuL3NjcmlwdHMvZmlsdGVyc1wiO1xuXG53aW5kb3cuZWRpdGFibGUgPSBmYWxzZVxud2luZG93LnRvZ2dsZUVkaXRhYmxlID0gdG9nZ2xlRWRpdGFibGVcblxuY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yUGlja2VyXCIpO1xuXG5jb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy52YWx1ZTtcbn0pO1xuXG5sZXQgZXJhc3VyZU9wdGlvbiA9IFwiYmxhY2tvdXRcIjtcbndpbmRvdy5lcmFzdXJlT3B0aW9uID0gZXJhc3VyZU9wdGlvbjtcblxubGV0IGVyYXN1cmVTZWxlY3Rpb24gPSBcImNoYXJhY3RlclwiO1xud2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBlcmFzdXJlU2VsZWN0aW9uO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc3R5bGVcIikuaW5uZXJIVE1MID0gYEVyYXN1cmUgU3R5bGU6ICR7XG4gIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbn1gO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4pLmlubmVySFRNTCA9IGBTZWxlY3Rpb24gU3R5bGU6ICR7XG4gIHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbn1gO1xuXG53aW5kb3cuY2hhbmdlRXJhc3VyZU9wdGlvbiA9IGZ1bmN0aW9uIGNoYW5nZUVyYXN1cmVPcHRpb24ob3B0aW9uKSB7XG4gIHdpbmRvdy5lcmFzdXJlT3B0aW9uID0gb3B0aW9uXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXN0eWxlXCIpLmlubmVySFRNTCA9IGBDdXJyZW50IFN0eWxlOiAke1xuICAgIHdpbmRvdy5lcmFzdXJlT3B0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2luZG93LmVyYXN1cmVPcHRpb24uc2xpY2UoMSlcbiAgfWA7XG5cbn1cblxud2luZG93LmNoYW5nZVNlbGVjdGlvbk9wdGlvbiA9IGZ1bmN0aW9uIGNoYW5nZVNlbGVjdGlvbk9wdGlvbihvcHRpb24pIHtcbiAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPSBvcHRpb247XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjdXJyZW50LXNlbGVjdGlvbi1zdHlsZVwiXG4gICkuaW5uZXJIVE1MID0gYFNlbGVjdGlvbiBTdHlsZTogJHtcbiAgICB3aW5kb3cuZXJhc3VyZVNlbGVjdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgd2luZG93LmVyYXN1cmVTZWxlY3Rpb24uc2xpY2UoMSlcbiAgfWA7XG59O1xuXG5cblxuXG4vLyB3aW5kb3cuc3VibWl0VGV4dCA9IGZ1bmN0aW9uIHN1Ym1pdFRleHQoKSB7XG4vLyAgIGNvbnN0IHN1Ym1pdHRlZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdGVkVGV4dFwiKS52YWx1ZTtcblxuLy8gICBzdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuXG4vLyAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuLy8gICAgIHNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4vLyAgICAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4vLyAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4vLyAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4vLyAgICAgfSk7XG5cbi8vICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4vLyAgICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbi8vICAgfSk7XG4vLyB9O1xuXG53aW5kb3cuc3VibWl0VGV4dCA9IGZ1bmN0aW9uIHN1Ym1pdFRleHQoKSB7XG4gIGNvbnN0IHN1Ym1pdHRlZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdGVkVGV4dFwiKS52YWx1ZTtcblxuICBzdWJtaXR0ZWRUZXh0LnNwbGl0KFwiXCIpLmZvckVhY2goKGxldHRlcikgPT4ge1xuXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJ2aXNpYmxlXCI7XG4gICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgZmFsc2UpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gbGV0dGVyO1xuICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHdpbmRvdy5lcmFzdXJlU2VsZWN0aW9uID09PSBcImNoYXJhY3RlclwiKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFdvcmQodGhpcykuZm9yRWFjaCgobGV0dGVyRWxlbWVudCk9PntcbiAgICAgICAgICBsZXR0ZXJFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7d2luZG93LmVyYXN1cmVPcHRpb259YCk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFRleHRcIik7XG4gICAgcGFyYWdyYXBoLmFwcGVuZChzcGFuKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZXRXb3JkKGVsZSkge1xuICBsZXQgcHJldiA9IGVsZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gIGxldCBuZXh0ID0gZWxlLm5leHRFbGVtZW50U2libGluZ1xuICBsZXQgbGV0dGVycyA9IFtlbGVdXG4gIHdoaWxlIChwcmV2ICE9PSBudWxsICYmIHByZXYuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgIGxldHRlcnMucHVzaChwcmV2KTtcbiAgICBwcmV2ID0gcHJldi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IHByZXYuaW5uZXJIVE1MID09PSBcIiBcIiB8fCBwcmV2LmlubmVySFRNTCA9PT0gXCIuXCIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgd2hpbGUgKG5leHQgIT09ICBudWxsICYmIG5leHQuaW5uZXJIVE1MICE9PSBcIiBcIikge1xuICAgICAgbGV0dGVycy5wdXNoKG5leHQpXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAobmV4dCA9PT0gbnVsbCB8fCBuZXh0LmlubmVySFRNTCA9PT0gXCIgXCIgfHwgbmV4dC5pbm5lckhUTUwgPT09IFwiLlwiKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9XG4gIFxuICByZXR1cm4gbGV0dGVyc1xufVxuXG5cbndpbmRvdy5nZW5lcmF0ZVRleHQgPSBmdW5jdGlvbiBnZW5lcmF0ZVRleHQoKSB7XG5jb25zdCBzdWJtaXR0ZWRUZXh0ID0gXCJJIGhlYXJkIGEgRmx5IGJ1enogLSB3aGVuIEkgZGllZCAtXFxuVGhlIFN0aWxsbmVzcyBpbiB0aGUgUm9vbVxcbldhcyBsaWtlIHRoZSBTdGlsbG5lc3MgaW4gdGhlIEFpciAtXFxuQmV0d2VlbiB0aGUgSGVhdmVzIG9mIFN0b3JtXFxuXCJcblxuc3VibWl0dGVkVGV4dC5zcGxpdChcIlwiKS5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLmNsYXNzTmFtZSA9IFwidmlzaWJsZVwiO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBmYWxzZSk7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiei1pbmRleFwiLCAzKTtcbiAgc3Bhbi5pbm5lckhUTUwgPSBsZXR0ZXI7XG4gIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAod2luZG93LmVyYXN1cmVTZWxlY3Rpb24gPT09IFwiY2hhcmFjdGVyXCIpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0V29yZCh0aGlzKS5mb3JFYWNoKChsZXR0ZXJFbGVtZW50KSA9PiB7XG4gICAgICAgIGxldHRlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShgJHt3aW5kb3cuZXJhc3VyZU9wdGlvbn1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpO1xuICBwYXJhZ3JhcGguYXBwZW5kKHNwYW4pO1xufSk7fTtcblxud2luZG93LmNsZWFyVGV4dCA9IGZ1bmN0aW9uIGNsZWFyVGV4dCgpIHtcbiAgY29uc3Qgc3VibWl0dGVkVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0VGV4dFwiKS5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldHZhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHJlYWRVUkwsIHRydWUpO1xuZnVuY3Rpb24gcmVhZFVSTCgpIHtcbiAgdmFyIGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldHZhbFwiKS5maWxlc1swXTtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybChcIiArIHJlYWRlci5yZXN1bHQgKyBcIilcIjtcbiAgfTtcbiAgaWYgKGZpbGUpIHtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfSBlbHNlIHtcbiAgfVxufVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuLy8gICBkb2N1bWVudFxuLy8gICAgIC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpXG4vLyAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlc1swXSkge1xuLy8gICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKTsgLy8gJCgnaW1nJylbMF1cbi8vICAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5maWxlc1swXSk7IC8vIHNldCBzcmMgdG8gYmxvYiB1cmxcbiAgICAgICAgLy8gaW1nLnNldEF0dHJpYnV0ZShcImRpc3BsYXlcIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICAgICAgICAgXG4gICAgICAgIC8vIGltZy5vbmxvYWQgPSBpbWFnZUlzTG9hZGVkO1xuICAgICAgICBcbi8vICAgICAgIH1cbi8vICAgICB9KTtcblxuICAgIFxuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIGltYWdlSXNMb2FkZWQoKSB7IFxuLy8gICBjb25zdCBwaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItcGljdHVyZVwiKTtcbi8vICAgcGljLnNldEF0dHJpYnV0ZShcImRpc3BsYXlcIiwgXCJhYnNvbHV0ZVwiKTtcbi8vICAgYWxlcnQodGhpcy5zcmMpOyAvLyBibG9iIHVybFxuLy8gICAvLyB1cGRhdGUgd2lkdGggYW5kIGhlaWdodCAuLi5cbi8vIH1cblxuLy8gY29uc3QgaW5zcGlyYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uXCIpXG5sZXQgdXJsID0gXCJodHRwOi8vYXBpLmRhdGFtdXNlLmNvbS93b3Jkcz9cIlxuXG5cbndpbmRvdy5maW5kV29yZCA9IChmaWx0ZXIpID0+IHtcbiAgY29uc3Qgc2VhcmNoVGVybXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXNlYXJjaFwiKS52YWx1ZTtcbiAgbGV0IHVybENvcHkgPSBuZXcgVVJMKHVybClcbiAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXJsQ29weS5zZWFyY2gpO1xuICBwYXJhbXMuYXBwZW5kKGZpbHRlciwgc2VhcmNoVGVybXMpO1xuICBmZXRjaCh1cmwgKyBwYXJhbXMudG9TdHJpbmcoKSAgKVxuICAgIC50aGVuKCByZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBwYXJlc2VEaXNwbGF5RGF0YShkYXRhKSk7XG5cbn07XG5cbmZ1bmN0aW9uIHBhcmVzZURpc3BsYXlEYXRhKGRhdGEpIHtcbiAgc2h1ZmZsZUFycmF5KGRhdGEpXG4gIGRhdGEuc2xpY2UoMCwxMCkuZm9yRWFjaCggKHdvcmRPYmplY3QpPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuLmlubmVySFRNTCA9IHdvcmRPYmplY3Qud29yZCArIFwiIFwiO1xuICAgIGNvbnN0IHJlc3VsdHNCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3BpcmF0aW9uLXJlc3VsdHNcIik7XG4gICAgcmVzdWx0c0JveC5hcHBlbmQoc3Bhbik7XG4gIH0pXG59XG5cbi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5XG5mdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxufSIsIi8vIGV4cG9ydCBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHBpY2tlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRUZXh0XCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMudmFsdWU7XG4vLyB9KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUVkaXRhYmxlID0gKCkgPT4ge1xuIGNvbnN0IHNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcbiBpZiAoIXdpbmRvdy5lZGl0YWJsZSkge1xuICAgICBzcGFucy5mb3JFYWNoKChzcGFuKT0+IHtcbiAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIHRydWUpO1xuICAgICB9KVxuICAgICB3aW5kb3cuZWRpdGFibGUgPSB0cnVlXG4gfSBlbHNlIHtcbiAgICAgc3BhbnMuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIGZhbHNlKTtcbiAgICAgfSk7XG4gICAgIHdpbmRvdy5lZGl0YWJsZSA9IGZhbHNlO1xuIH1cbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9