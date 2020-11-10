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
/******/ 	__webpack_require__.p = "";
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/filters */ \"./src/scripts/filters.js\");\n/* harmony import */ var _templates_demos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/demos */ \"./templates/demos.js\");\n\n\n\n\n\nwindow.editable = false;\nwindow.eraseable = true;\nwindow.toggleEditable = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__[\"toggleEditable\"];\nwindow.toggleErasable = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__[\"toggleErasable\"];\nwindow.changeFontOption = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__[\"changeFontOption\"];\nwindow.extend = _scripts_filters__WEBPACK_IMPORTED_MODULE_1__[\"extend\"];\nwindow.heightChanges = 0;\nwindow.widthChanges = 0;\n\nwindow.demo = _templates_demos__WEBPACK_IMPORTED_MODULE_2__[\"demo\"];\nwindow.internetPoet = _templates_demos__WEBPACK_IMPORTED_MODULE_2__[\"internetPoet\"];\n\n\nconst colorPicker = document.getElementById(\"colorPicker\");\ncolorPicker.addEventListener(\"change\", () => {\n  document.getElementById(\"targetText\").style.backgroundColor = colorPicker.value;\n});\n\nconst fontSize = document.getElementById(\"fontSize\");\nfontSize.addEventListener(\"change\", () => {\n  document.getElementById(\"targetText\").style.fontSize = fontSize.value + \"px\"\n});\n\nlet erasureOption = \"blackout\";\nwindow.erasureOption = erasureOption;\n\nlet erasureSelection = \"character\";\nwindow.erasureSelection = erasureSelection;\n\nwindow.changeErasureOption = (option) => {\n  window.erasureOption = option\n\n  document.getElementById(\"current-style\").innerHTML = `Current Style: ${\n    window.erasureOption.charAt(0).toUpperCase() + window.erasureOption.slice(1)\n  }`;\n}\n\nwindow.changeSelectionOption = (option) => {\n  window.erasureSelection = option;\n\n  document.getElementById(\n    \"current-selection-style\"\n  ).innerHTML = `Selection Style: ${\n    window.erasureSelection.charAt(0).toUpperCase() +\n    window.erasureSelection.slice(1)\n  }`;\n};\n\n\nwindow.submitText = () => {\n  const submittedText = document.getElementById(\"submitedText\").value;\n\n  submittedText.split(\"\").forEach((letter) => {\n\n    const span = document.createElement(\"span\");\n    span.className = \"visible\";\n    span.setAttribute(\"contenteditable\", false);\n    span.innerHTML = letter;\n    span.addEventListener(\"click\", function() {\n      if (window.erasureSelection === \"character\" && window.eraseable) {\n        this.classList.toggle(`${window.erasureOption}`);\n      } else if (window.erasureSelection === \"word\" && window.eraseable) {\n        getWord(this).forEach((letterElement) => {\n          letterElement.classList.toggle(`${window.erasureOption}`);\n        });\n      }\n    });\n\n    const paragraph = document.getElementById(\"targetText\");\n    paragraph.append(span);\n  });\n};\n\nwindow.getWord = function getWord(ele) {\n  \n  let prev = ele.previousElementSibling;\n  let next = ele.nextElementSibling;\n  let letters = [ele];\n  while (prev !== null && prev.innerHTML !== \" \") {\n    letters.push(prev);\n    prev = prev.previousElementSibling;\n    if (prev === null || prev.innerHTML === \" \" || prev.innerHTML === \".\") {\n      break;\n    }\n  }\n  \n  while (next !==  null && next.innerHTML !== \" \") {\n      letters.push(next)\n      next = next.nextElementSibling;\n      if (next === null || next.innerHTML === \" \" || next.innerHTML === \".\") {\n        break;\n      }\n  }\n  return letters;\n  \n}\n\nwindow.generateText = (submittedText) => {\n  \n  submittedText.split(\"\").forEach((letter) => {\n    const span = document.createElement(\"span\");\n    span.className = \"visible\";\n    span.setAttribute(\"contenteditable\", false);\n    span.setAttribute(\"z-index\", 3);\n    span.innerHTML = letter;\n    span.addEventListener(\"click\", function () {\n      if (window.erasureSelection === \"character\" && window.eraseable) {\n        this.classList.toggle(`${window.erasureOption}`);\n      } else if (window.erasureSelection === \"word\" && window.eraseable) {\n        getWord(this).forEach((letterElement) => {\n          letterElement.classList.toggle(`${window.erasureOption}`);\n        });\n      }\n    });\n\n    const paragraph = document.getElementById(\"targetText\");\n    paragraph.append(span);\n  });\n};\n\nwindow.clearText = (area) => {\n  document.getElementById(area).innerHTML = \"\";\n\n  if (area === \"inspiration-results\") {\n    document.getElementById(\"inspiration-results\").style.display = \"none\";\n    document.getElementById(\"inspiration-delete\").style.display = \"none\";\n  }\n};\n\ndocument.getElementById(\"getPicture\").addEventListener(\"change\", () => {\n  const file = document.getElementById(\"getPicture\").files[0];\n  const reader = new FileReader();\n  reader.onloadend = () => {\n    document.getElementById(\"targetText\").style.backgroundImage = \"url(\" + reader.result + \")\";\n  };\n  if (file) reader.readAsDataURL(file);\n});\n\nwindow.removePic = () => {\n  document.getElementById(\"targetText\").style.backgroundImage = \"\";\n};\n\nlet url = \"https://api.datamuse.com/words?\"\n\nwindow.findWord = (filter) => {\n  const searchTerms = document.getElementById(\"inspiration-search\").value;\n  let urlCopy = new URL(url)\n  let params = new URLSearchParams(urlCopy.search);\n  params.append(filter, searchTerms);\n  fetch(url + params.toString()  )\n    .then( resp => resp.json())\n    .then((data) => pareseDisplayData(data));\n};\n\nfunction pareseDisplayData(data) {\n  // shuffleArray(data) turn it off\n  const resultsBox = document.getElementById(\"inspiration-results\");\n  data.slice(0,20).forEach( (wordObject)=> {\n    const span = document.createElement(\"span\");\n    span.innerHTML = wordObject.word + \" \";\n    resultsBox.append(span);\n  })\n  resultsBox.style.display = \"block\"\n  document.getElementById(\"inspiration-delete\").style.display = \"block\";\n}\n\n//From: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array\nfunction shuffleArray(array) {\n    for (var i = array.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var temp = array[i];\n        array[i] = array[j];\n        array[j] = temp;\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/filters.js":
/*!********************************!*\
  !*** ./src/scripts/filters.js ***!
  \********************************/
/*! exports provided: toggleEditable, toggleErasable, extend, changeFontOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleEditable\", function() { return toggleEditable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleErasable\", function() { return toggleErasable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return extend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeFontOption\", function() { return changeFontOption; });\nconst toggleEditable = () => {\n const spans = document.querySelectorAll(\"span\")\n if (!window.editable) {\n     spans.forEach((span)=> {\n         span.setAttribute(\"contenteditable\", true);\n     })\n     window.editable = true\n } else {\n     spans.forEach((span) => {\n       span.setAttribute(\"contenteditable\", false);\n     });\n     window.editable = false;\n }\n   document.getElementById(\"editable-button\").innerHTML = window.editable ? \"Editable: On\" : \"Editable: Off\"\n};\n\nconst toggleErasable = () => {\n  window.eraseable = !window.eraseable\n  document.getElementById(\"erasable-button\").innerHTML = window.eraseable ? \"Erasure: On\" : \"Erasure: Off\"\n};\n\n\n\nconst extend = (direction) => {\n      if (direction === \"height\") {\n        window.heightChanges += 1\n        document.getElementById(\"targetText\").style.height = 500 + (10 * window.heightChanges) + \"px\"\n      } else {\n        window.widthChanges += 1;\n        document.getElementById(\"targetText\").style.width = 700 + (10 * window.widthChanges) + \"px\"\n      }\n}\n\nconst changeFontOption = (fontStyle) =>{\n    document.getElementById(\"targetText\").style.fontFamily = fontStyle;\n    document.getElementById(\"current-font-style\").innerHTML = `Font Style: ${fontStyle}`;\n}\n\n\n\n//# sourceURL=webpack:///./src/scripts/filters.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (10:37)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| a, abbr, acronym, address, big, cite, code,\\n| del, dfn, em, img, ins, kbd, q, s, samp,\\n> small, strike, strong, sub, sup, tt, var,\\n| b, u, i, center,\\n| dl, dt, dd, ol, ul, li,\");\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ }),

/***/ "./templates/demos.js":
/*!****************************!*\
  !*** ./templates/demos.js ***!
  \****************************/
/*! exports provided: demo, internetPoet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"demo\", function() { return demo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"internetPoet\", function() { return internetPoet; });\n// export const sonnet = () => {\n//     const original = document.getElementById(\"targetText\");\n//     const sonnet = document.getElementById(\"sonnet\");\n//     const clone = sonnet.cloneNode(true)\n//     original.replaceWith(clone)\n//     document.getElementById(\"sonnet\").id = \"targetText\"\n//     alert(\"A reworking of Shakespeare's Sonnet 18 with the Fade-out Erasure Style.\");\n\n\n\n// }\nconst demo = (name) => {\n    const original = document.getElementById(\"targetText\");\n    const sonnet = document.getElementById(name);\n    const clone = sonnet.cloneNode(true)\n    original.replaceWith(clone)\n    document.getElementById(name).id = \"targetText\"\n    document.getElementById(\"targetText\").childNodes.forEach( (child) => {\n            child.addEventListener(\"click\", function () {\n              if (window.erasureSelection === \"character\" && window.eraseable) {\n                this.classList.toggle(`${window.erasureOption}`);\n              } else if (\n                window.erasureSelection === \"word\" &&\n                window.eraseable\n              ) {\n                getWord(this).forEach((letterElement) => {\n                  letterElement.classList.toggle(`${window.erasureOption}`);\n                });\n              }\n            });\n    })\n\n    switch (name) {\n        case \"sonnet\":\n            changeErasureOption(\"fade-out\");\n            alert(\n                  \"A reworking of Shakespeare's Sonnet 18 with the Fade-out Erasure Style. Click the document to write your own version of the poem!\"\n                );\n            break;\n    \n        case \"order\":\n            changeErasureOption(\"invisible\");\n            changeSelectionOption(\"word\");\n            alert(\"Executive Order 9066 authorized internment camps for Japansese-Americans during WWII. This example uses the editor's erasure technique to examine the language used in this historical text. Click the document to reveal the words that were erased.\");\n        break\n    }    \n    \n}\n\n\nconst internetPoet = () => {\n    alert(\n      \"Write some heartfelt verse. Use lower case, Times New Roman. Upload an image using the background picture tool. Post on Instagram.\\nThe poem was generated by a computer!\"\n    );\n    const canvas = document.getElementById(\"targetText\");\n    window.clearText(\"targetText\");\n    canvas.style.width = \"500px\";\n    canvas.style.height = \"500px\";\n    canvas.style.backgroundColor = \"white\";\n    canvas.style.whiteSpace = \"pre-wrap\";\n    canvas.style.fontSize = \"14px\";\n    window.generateText(\n        \"don’t mistake \\nsalt for sugar \\nit never really left the hands \\nof those who broke you \\nthe thing \\nworth holding onto \\nwould not come for you \\nyour sweetness belongs \\nonly to yourself \\n\"\n    );\n    canvas.style.backgroundImage = \"url('/../images/cake.jpg')\"\n    canvas.style.fontFamily = \"Times\";\n    changeSelectionOption(\"word\");\n\n\n    // canvas.childNodes.forEach((child) => {\n    //   child.addEventListener(\"click\", function () {\n    //     if (window.erasureSelection === \"character\") {\n    //     //   this.classList.toggle(`${window.erasureOption}`);\n    //     } else {\n    //       getWord(this).forEach((letterElement) => {\n    //         //   debugger\n    //         // letterElement.classList.toggle(`${window.erasureOption}`);\n    //         // debugger\n    //       });\n    //     }\n    //   });\n    // });\n};\n\n//# sourceURL=webpack:///./templates/demos.js?");

/***/ })

/******/ });