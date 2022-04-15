/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("// HORIZONTAL SCROLL\r\n\r\nif (\r\n  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(\r\n    navigator.userAgent\r\n  )\r\n) {\r\n  console.log(\"is mobile\")\r\n} else {\r\n  const scrollContainer = document.querySelector(\"main\")\r\n\r\n  scrollContainer.addEventListener(\"wheel\", (evt) => {\r\n    evt.preventDefault()\r\n    scrollContainer.scrollLeft += evt.deltaY\r\n  })\r\n}\r\n\r\n// MENU CUBOTTI\r\nconst li1 = document.querySelector(\"#li-1\")\r\nconst li2 = document.querySelector(\"#li-2\")\r\nconst li3 = document.querySelector(\"#li-3\")\r\n/* click li */\r\nli1.addEventListener(\"click\", () => {\r\n  li1.style.flexGrow = \"1.5\"\r\n  li2.style.flexGrow = \"0.4\"\r\n  li3.style.flexGrow = \"0.4\"\r\n})\r\nli2.addEventListener(\"click\", () => {\r\n  li2.style.flexGrow = \"1.5\"\r\n  li1.style.flexGrow = \"0.4\"\r\n  li3.style.flexGrow = \"0.4\"\r\n})\r\nli3.addEventListener(\"click\", () => {\r\n  li3.style.flexGrow = \"1.5\"\r\n  li2.style.flexGrow = \"0.4\"\r\n  li1.style.flexGrow = \"0.4\"\r\n})\r\n// mouseover li\r\nli1.addEventListener(\"mouseover\", () => {\r\n  li1.style.flexGrow = \"1.5\"\r\n  li2.style.flexGrow = \"0.4\"\r\n  li3.style.flexGrow = \"0.4\"\r\n})\r\nli2.addEventListener(\"mouseover\", () => {\r\n  li2.style.flexGrow = \"1.5\"\r\n  li1.style.flexGrow = \"0.4\"\r\n  li3.style.flexGrow = \"0.4\"\r\n})\r\nli3.addEventListener(\"mouseover\", () => {\r\n  li3.style.flexGrow = \"1.5\"\r\n  li2.style.flexGrow = \"0.4\"\r\n  li1.style.flexGrow = \"0.4\"\r\n})\r\n/* mouseleave li*/\r\nli1.addEventListener(\"mouseleave\", () => {\r\n  li1.style.flexGrow = \"1\"\r\n  li2.style.flexGrow = \"1\"\r\n  li3.style.flexGrow = \"1\"\r\n})\r\nli2.addEventListener(\"mouseleave\", () => {\r\n  li1.style.flexGrow = \"1\"\r\n  li2.style.flexGrow = \"1\"\r\n  li3.style.flexGrow = \"1\"\r\n})\r\nli3.addEventListener(\"mouseleave\", () => {\r\n  li1.style.flexGrow = \"1\"\r\n  li2.style.flexGrow = \"1\"\r\n  li3.style.flexGrow = \"1\"\r\n})\r\n\r\n// SLIDER SCANNER\r\n;[...document.querySelectorAll(\".single-column\")].map((column) => {\r\n  column.style.setProperty(\"--animation\", \"slide\")\r\n  column.style.setProperty(\"height\", \"1500%\")\r\n  column.innerHTML = column.innerHTML + column.innerHTML\r\n})\r\n\n\n//# sourceURL=webpack://beta/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;