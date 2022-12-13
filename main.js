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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactScreen\": () => (/* binding */ contactScreen)\n/* harmony export */ });\nconst contactScreen = function () {\n    const main = document.querySelector(\"main\")\n    const contactText = `\n    MONDAY-SUNDAY 7AM - 9PM\n    `;\n    const mapDiv = document.createElement(\"div\");\n    const map = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6340.968937985935!2d14.40533066525328!3d50.088957320792055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b951e6c24b7c3%3A0x2acf3c88af12259f!2zUHJhxb5za8O9IGhyYWQ!5e0!3m2!1scs!2scz!4v1670956569211!5m2!1scs!2scz\" width=\"100%\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>`\n\n    mapDiv.id=\"map\";\n    mapDiv.innerHTML = map;\n\n\n\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const contactDiv = document.createElement(\"div\");\n    contactDiv.id = \"contact\";\n\n    const para = document.createElement(\"p\");\n    para.textContent = contactText;\n\n    contactDiv.appendChild(para);\n    container.appendChild(contactDiv);\n    container.appendChild(mapDiv)\n    main.appendChild(container);\n    \n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeScreen\": () => (/* binding */ homeScreen)\n/* harmony export */ });\n\nconst homeScreen = function () {\n    const main = document.querySelector(\"main\")\n    const homeInfoText = \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae beatae qui mollitia optio enim eaque officia illum voluptatibus magni. Exercitationem totam at assumenda id, minus animi autem consequatur! Iure ea aperiam voluptatibus autem nesciunt at odit dolore doloribus aspernatur. Consectetur id labore nesciunt modi delectus cum debitis? Voluptatum eveniet pariatur voluptates quasi similique nesciunt autem modi, provident amet accusantium repellendusk!\";\n\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const infoDiv = document.createElement(\"div\");\n    infoDiv.id = \"info\";\n\n    const para = document.createElement(\"p\");\n    para.textContent = homeInfoText;\n\n    infoDiv.appendChild(para);\n    container.appendChild(infoDiv);\n    main.appendChild(container);\n    \n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/home.js */ \"./src/home.js\");\n/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/menu.js */ \"./src/menu.js\");\n/* harmony import */ var _src_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/contact.js */ \"./src/contact.js\");\n//import './style.css';\n//import { container } from \"webpack\";\n\n\n\n\n\n//div id content\nconst content = document.querySelector(\"#content\");\n//div header content\nconst headerCont = document.createElement(\"div\");\nheaderCont.id=\"headerCont\";\n//h1 element restaurant name\nconst header = document.createElement(\"h1\");\nheader.innerText = \"Some cool caffe name\";\n\nheaderCont.appendChild(header)\ncontent.appendChild(headerCont);\n\n//navigation\n\nconst nav = document.createElement(\"nav\");\n\nconst ulNav = document.createElement(\"ul\");\nulNav.id=\"navigation\";\n\nconst menuArray = [\"home\", \"menu\", \"contact\"];\nfor (let e of menuArray){\n    let li = document.createElement(\"li\");\n    li.id = e;\n    li.innerText = e\n    ulNav.appendChild(li);\n}\nnav.appendChild(ulNav)\ncontent.appendChild(nav)\n\nconst main = document.createElement(\"main\");\ncontent.appendChild(main)\n\n;(0,_src_home_js__WEBPACK_IMPORTED_MODULE_0__.homeScreen)();\n\nconst container=document.querySelector(\"#container\");\n\nconst homeTab = document.querySelector(\"#home\");\nconst menuTab = document.querySelector(\"#menu\");\nconst contactTab = document.querySelector(\"#contact\");\n\nhomeTab.addEventListener(\"click\", function () {\n\n    const container=document.querySelector(\"#container\");\n    container.remove();\n    (0,_src_home_js__WEBPACK_IMPORTED_MODULE_0__.homeScreen)();\n});\n\nmenuTab.addEventListener(\"click\", function () {\n    const container=document.querySelector(\"#container\");\n    container.remove();\n    (0,_src_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuScreen)();\n});\n\ncontactTab.addEventListener(\"click\", function () {\n    const container=document.querySelector(\"#container\");\n    container.remove();\n    (0,_src_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactScreen)();\n});\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuScreen\": () => (/* binding */ menuScreen)\n/* harmony export */ });\n\nconst menuScreen = function () {\n    const main = document.querySelector(\"main\")\n    const menuText = `\n    KAFE ................ 40,-\n    KAFE HAVAJ .......... 20,-\n    KAFE PIVO ........... 30,-\n    `;\n\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.id = \"menu\";\n\n    const para = document.createElement(\"p\");\n    para.textContent = menuText;\n\n    menuDiv.appendChild(para);\n    container.appendChild(menuDiv);\n    main.appendChild(container);\n    \n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

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