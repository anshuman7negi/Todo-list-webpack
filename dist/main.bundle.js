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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tudo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tudo.js */ \"./src/tudo.js\");\n\nconst myList = new _tudo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst addButton = document.getElementById('add-button');\naddButton.addEventListener('click', () => {\n  const task = document.getElementById('task').value.trim();\n  const completed=false;\n  const index=myList.todoDetails.length + 1;\n  if(task){\n    myList.addRow(task,completed,index);\n    myList.displayList();\n    document.getElementById('task').value = '';\n  }\n});\n\nmyList.displayList();\n\n//# sourceURL=webpack://todo-list-webpack/./src/index.js?");

/***/ }),

/***/ "./src/tudo.js":
/*!*********************!*\
  !*** ./src/tudo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddList)\n/* harmony export */ });\n\r\nclass AddList {\r\n  constructor() {\r\n    const previousData = localStorage.getItem('todoData');\r\n    this.todoDetails = previousData ? JSON.parse(previousData) : [];\r\n  }\r\n\r\n  displayList() {\r\n    const reciveData = localStorage.getItem('todoData');\r\n    if (reciveData && JSON.parse(reciveData).length > 0) {\r\n      this.todoDetails = JSON.parse(reciveData);\r\n      const row = document.getElementById('lists');\r\n      console.log(this.todoDetails.length)\r\n      for (let i = 0; i < this.todoDetails.length; i += 1) {\r\n        row.innerHTML += `<li>\r\n                            <div class=\"rowData\" > <input type=\"checkbox\"  ${list.completed ? 'checked' : ''} />${list.description} </div>\r\n                            <i class=\"fa-solid fa-ellipsis-vertical\"></i>\r\n                        </li> <hr>`;\r\n      } \r\n    }\r\n  }\r\n\r\n  addRow(title, completed, index) {\r\n    const todo = { title, completed, index };\r\n    this.todoDetails.push(todo);\r\n    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/tudo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;