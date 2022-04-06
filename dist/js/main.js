/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ \"./src/js/scroll.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _scroll__WEBPACK_IMPORTED_MODULE_0__.horizontalScroll)\r\n\r\nconst li1 = document.querySelector(\"#li-1\")\r\nconst li2 = document.querySelector(\"#li-2\")\r\nconst li3 = document.querySelector(\"#li-3\")\r\n/* click li */\r\nli1.addEventListener(\"click\", () => {\r\n  li1.style.flexGrow = \"1.5\"\r\n  li2.style.flexGrow = \"0.2\"\r\n  li3.style.flexGrow = \"0.2\"\r\n})\r\nli2.addEventListener(\"click\", () => {\r\n  li2.style.flexGrow = \"1.5\"\r\n  li1.style.flexGrow = \"0.2\"\r\n  li3.style.flexGrow = \"0.2\"\r\n})\r\nli3.addEventListener(\"click\", () => {\r\n  li3.style.flexGrow = \"1.5\"\r\n  li2.style.flexGrow = \"0.2\"\r\n  li1.style.flexGrow = \"0.2\"\r\n})\r\n// mouseover li\r\nli1.addEventListener(\"mouseover\", () => {\r\n  li1.style.flexGrow = \"1.5\"\r\n  li2.style.flexGrow = \"0.2\"\r\n  li3.style.flexGrow = \"0.2\"\r\n})\r\nli2.addEventListener(\"mouseover\", () => {\r\n  li2.style.flexGrow = \"1.5\"\r\n  li1.style.flexGrow = \"0.2\"\r\n  li3.style.flexGrow = \"0.2\"\r\n})\r\nli3.addEventListener(\"mouseover\", () => {\r\n  li3.style.flexGrow = \"1.5\"\r\n  li2.style.flexGrow = \"0.2\"\r\n  li1.style.flexGrow = \"0.2\"\r\n})\r\n/* mouseleave li*/\r\nli1.addEventListener(\"mouseleave\", () => {\r\n  li1.style.flexGrow = \"1\"\r\n  li2.style.flexGrow = \"1\"\r\n  li3.style.flexGrow = \"1\"\r\n})\r\nli2.addEventListener(\"mouseleave\", () => {\r\n  li1.style.flexGrow = \"1\"\r\n  li2.style.flexGrow = \"1\"\r\n  li3.style.flexGrow = \"1\"\r\n})\r\nli3.addEventListener(\"mouseleave\", () => {\r\n  li1.style.flexGrow = \"1\"\r\n  li2.style.flexGrow = \"1\"\r\n  li3.style.flexGrow = \"1\"\r\n})\r\n\n\n//# sourceURL=webpack://beta/./src/js/main.js?");

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"horizontalScroll\": () => (/* binding */ horizontalScroll)\n/* harmony export */ });\nfunction horizontalScroll() {\r\n  // wait for document ready\r\n\r\n  var controller = new ScrollMagic.Controller()\r\n\r\n  var horizontalSlide = new TimelineMax()\r\n    // animate panels\r\n    .to(\"#js-slideContainer\", 1, { x: \"-25%\" })\r\n    .to(\"#js-slideContainer\", 1, { x: \"-50%\" })\r\n    .to(\"#js-slideContainer\", 1, { x: \"-75%\" })\r\n\r\n  // create scene to pin and link animation\r\n  new ScrollMagic.Scene({\r\n    triggerElement: \"#js-wrapper\",\r\n    triggerHook: \"onLeave\",\r\n    duration: \"400%\",\r\n  })\r\n    .setPin(\"#js-wrapper\")\r\n    .setTween(horizontalSlide)\r\n    //.addIndicators() // add indicators (requires plugin)\r\n    .addTo(controller)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://beta/./src/js/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;