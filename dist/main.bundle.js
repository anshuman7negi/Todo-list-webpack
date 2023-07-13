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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tudo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tudo.js */ \"./src/tudo.js\");\n\n\nconst myList = new _tudo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst addButton = document.getElementById('add-button');\naddButton.addEventListener('click', () => {\n  const task = document.getElementById('task').value.trim();\n  const completed = false;\n  const index = myList.todoDetails.length + 1;\n  if (task) {\n    myList.addRow(task, completed, index);\n    myList.displayList();\n    document.getElementById('task').value = '';\n  }\n});\n\nwindow.addEventListener('DOMContentLoaded', myList.displayList.bind(myList));\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/index.js?");

/***/ }),

/***/ "./src/tudo.js":
/*!*********************!*\
  !*** ./src/tudo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddList)\n/* harmony export */ });\nclass AddList {\n  constructor() {\n    const previousData = localStorage.getItem('todoData');\n    this.todoDetails = previousData ? JSON.parse(previousData) : [];\n  }\n\n  displayList() {\n    const reciveData = localStorage.getItem('todoData');\n    const row = document.getElementById('lists');\n    row.innerHTML = '';\n    if (reciveData && JSON.parse(reciveData).length > 0) {\n      this.todoDetails = JSON.parse(reciveData);\n\n      for (let i = 0; i < this.todoDetails.length; i += 1) {\n        row.innerHTML += `<li class=\"removeLine\">\n                            <div class=\"rowData\" > <input class=\"edit-text\" type=\"checkbox\"  ${this.todoDetails[i].completed ? 'checked' : ''} /> \n                            <input class=\"editBtn\" type=\"text\" value=\"${this.todoDetails[i].title}\" data-index=\"${i}\" readonly /> </div>\n                            <button id=\"${i}\" class=\"remove-btn\"> <i class=\"fas fa-trash\"></i></button>\n                        </li> <hr>`;\n      }\n      // ------------------Remove Row Code-------------------------------------\n      const removeBtn = document.querySelectorAll('.remove-btn');\n      removeBtn.forEach((btn, index) => {\n        btn.addEventListener('click', () => {\n          this.deleteRow(index);\n        });\n      });\n      // -----------------Edit input Code--------------------------------\n      const editBtn = document.querySelectorAll('.editBtn');\n      editBtn.forEach((editElement) => {\n        editElement.addEventListener('click', () => {\n          const index = editElement.getAttribute('data-index');\n          const editInput = document.querySelector(`input.editBtn[data-index=\"${index}\"]`);\n          editInput.readOnly = false;\n          editInput.addEventListener('blur', (event) => {\n            const newTitle = event.target.value;\n            this.updateRowTitle(index, newTitle);\n            event.target.readOnly = true;\n          });\n        });\n      });\n      // -------------------checkbox code--------------------------\n      const checkboxes = document.querySelectorAll('.edit-text');\n      checkboxes.forEach((checkbox) => {\n        const index = checkbox.parentNode.querySelector('.editBtn').getAttribute('data-index');\n        const editInput = checkbox.parentNode.querySelector('.editBtn');\n        const { completed } = this.todoDetails[index];\n\n        checkbox.checked = completed;\n        editInput.classList.toggle('completed', completed);\n\n        checkbox.addEventListener('change', (event) => {\n          const isChecked = event.target.checked;\n          editInput.classList.toggle('completed', isChecked);\n          this.todoDetails[index].completed = isChecked;\n          localStorage.setItem('todoData', JSON.stringify(this.todoDetails));\n        });\n      });\n      // -----------------ClearCompletedBtn-----------------------------------\n      document.getElementById('clearCompletedBtn').addEventListener('click', this.removeCompletedTask);\n    }\n  }\n\n  addRow(title, completed, index) {\n    const todo = { title, completed, index };\n    this.todoDetails.push(todo);\n    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));\n  }\n\n  deleteRow(index) {\n    this.todoDetails.splice(index, 1);\n    for (let i = index; i < this.todoDetails.length; i += 1) {\n      this.todoDetails[i].index = i + 1;\n    }\n    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));\n    this.displayList();\n  }\n\n  updateRowTitle(index, newTitle) {\n    this.todoDetails[index].title = newTitle;\n    localStorage.setItem('todoData', JSON.stringify(this.todoDetails));\n    this.displayList();\n  }\n\n  removeCompletedTask = () => {\n    const incompleteTasks = this.todoDetails.filter((item) => item.completed === false);\n    this.todoDetails = incompleteTasks;\n    this.todoDetails.forEach((todo, index) => {\n      todo.index = index + 1;\n    });\n\n    if (typeof localStorage !== 'undefined') {\n      localStorage.setItem('todoData', JSON.stringify(this.todoDetails));\n    }\n\n    this.displayList();\n  }\n}\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/tudo.js?");

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