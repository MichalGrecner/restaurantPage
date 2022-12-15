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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactScreen\": () => (/* binding */ contactScreen)\n/* harmony export */ });\nconst contactScreen = function () {\n    const main = document.querySelector(\"main\")\n    const OpenTime = \"MON-SUN...........7AM - 9PM\";\n    const name = \"Fake Fancy Café\"\n    const street = \"FamousBridge Avenue 1\"\n    const zipCode = \"110 00 Prague, Czechia\"\n\n\n\n\n    const mapDiv = document.createElement(\"div\");\n    const map = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11708.751414257229!2d14.42571435116!3d50.08277903227256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e5e58eb59f%3A0x75209738d1d3b126!2sKarl%C5%AFv%20most!5e0!3m2!1scs!2scz!4v1671108794051!5m2!1scs!2scz\" width=\"100%\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n    `\n\n    mapDiv.id=\"map\";\n    mapDiv.innerHTML = map;\n\n\n\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const contactDiv = document.createElement(\"div\");\n    contactDiv.id = \"contact\";\n\n    const openTimePara = document.createElement(\"p\");\n    openTimePara.textContent = OpenTime;\n\n    const namePara = document.createElement(\"p\");\n    namePara.textContent = name;\n\n    const streetPara = document.createElement(\"p\");\n    streetPara.textContent = street;\n\n    const zipcodePara = document.createElement(\"p\");\n    zipcodePara.textContent = zipCode;\n\n\n    contactDiv.appendChild(openTimePara);\n    contactDiv.appendChild(document.createElement(\"br\"));\n    contactDiv.appendChild(namePara);\n    contactDiv.appendChild(streetPara);\n    contactDiv.appendChild(zipcodePara);\n    container.appendChild(contactDiv);\n    contactDiv.appendChild(document.createElement(\"br\"));\n    container.appendChild(mapDiv);\n    container.appendChild(document.createElement(\"br\"));\n    main.appendChild(container);\n    \n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeScreen\": () => (/* binding */ homeScreen)\n/* harmony export */ });\n\nconst homeScreen = function () {\n    const main = document.querySelector(\"main\")\n    const homeInfoIntro = \"Hello and welcome to my 'Fake Café' website.\";\n    const homeInfopara1=\"This website is result of a task from 'The Odin Project' curriculum. The aim of this simple website is to bundle several separated .js modules together using Webpack. This site also should be responsive.\";\n    const homeInfopara2=\"Because I need more text here I will just simply add some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae beatae qui mollitia optio enim eaque officia illum voluptatibus magni. Exercitationem totam at assumenda id, minus animi autem consequatur! Iure ea aperiam voluptatibus autem nesciunt at odit dolore doloribus aspernatur. \";\n\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const infoDiv = document.createElement(\"div\");\n    infoDiv.id = \"info\";\n\n    const pIntro = document.createElement(\"p\");\n    pIntro.innerText = homeInfoIntro;\n\n    const para1 = document.createElement(\"p\");\n    para1.innerText = homeInfopara1;\n\n    const para2 = document.createElement(\"p\");\n    para2.innerText = homeInfopara2;\n\n\n    infoDiv.appendChild(pIntro);\n    infoDiv.appendChild(document.createElement(\"br\"));\n    infoDiv.appendChild(para1);\n    infoDiv.appendChild(document.createElement(\"br\"));\n    infoDiv.appendChild(para2);\n    infoDiv.appendChild(document.createElement(\"br\"));\n\n    container.appendChild(infoDiv);\n    main.appendChild(container);\n    \n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/home.js */ \"./src/home.js\");\n/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/menu.js */ \"./src/menu.js\");\n/* harmony import */ var _src_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/contact.js */ \"./src/contact.js\");\n//import './style.css';\n//import { container } from \"webpack\";\n\n\n\n\nconst name = \"Fake Fancy Café\"\n\n//div id content\nconst content = document.querySelector(\"#content\");\n//div header content\nconst headerCont = document.createElement(\"div\");\nheaderCont.id=\"headerCont\";\n//h1 element restaurant name\nconst header = document.createElement(\"h1\");\nheader.innerText = name;\n\nheaderCont.appendChild(header)\ncontent.appendChild(headerCont);\n\n//navigation\n\nconst nav = document.createElement(\"nav\");\n\nconst ulNav = document.createElement(\"ul\");\nulNav.id=\"navigation\";\n\nconst menuArray = [\"home\", \"menu\", \"contact\"];\nfor (let e of menuArray){\n    let li = document.createElement(\"li\");\n    li.id = e;\n    li.innerText = e\n    ulNav.appendChild(li);\n}\nnav.appendChild(ulNav)\ncontent.appendChild(nav)\n\nconst main = document.createElement(\"main\");\ncontent.appendChild(main)\n\n;(0,_src_home_js__WEBPACK_IMPORTED_MODULE_0__.homeScreen)();\n\nconst container=document.querySelector(\"#container\");\n\nconst homeTab = document.querySelector(\"#home\");\nconst menuTab = document.querySelector(\"#menu\");\nconst contactTab = document.querySelector(\"#contact\");\n\nhomeTab.addEventListener(\"click\", function () {\n\n    const container=document.querySelector(\"#container\");\n    container.remove();\n    (0,_src_home_js__WEBPACK_IMPORTED_MODULE_0__.homeScreen)();\n});\n\nmenuTab.addEventListener(\"click\", function () {\n    const container=document.querySelector(\"#container\");\n    container.remove();\n    (0,_src_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuScreen)();\n});\n\ncontactTab.addEventListener(\"click\", function () {\n    const container=document.querySelector(\"#container\");\n    container.remove();\n    (0,_src_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactScreen)();\n});\n\n\nconst footer = document.createElement(\"div\");\nfooter.id=\"footer\";\nconst footerPara = document.createElement(\"p\");\nconst footerText = \"<a href='https://www.freepik.com/free-photo/cafe-bar-hotel-loft-style_4690095.htm'  target='_blank'>Background Image by jcomp on Freepik </a> / <a href ='https://github.com/MichalGrecner' target='_blank'>GitHub/MichalGrecner</a>\";\n\nfooterPara.innerHTML = footerText;\nfooter.appendChild(footerPara)\n\ncontent.appendChild(footer)\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuScreen\": () => (/* binding */ menuScreen)\n/* harmony export */ });\n\nconst menuScreen = function () {\n    const main = document.querySelector(\"main\");\n    const upperText = \"You can eat in or take away.\"\n    const bottomText = \"We accept credit cards.\";\n\n    const menuBeverages = [\n        {\n        \"item\":\"Coffe\",\n        \"price\":\"60CZK\"\n        },\n        {\n        \"item\":\"Cappuccino\",\n        \"price\":\"70CZK\"\n        },\n        {\n        \"item\":\"Beer\",\n        \"price\":\"50CZK\"\n        },\n        {\n        \"item\":\"Tea\",\n        \"price\":\"50CZK\"\n        },\n    ]\n    const menuFood = [\n        {\n        \"item\":\"Czech national dessert 'Bábovka'\",\n        \"price\":\"55CZK\"\n        },\n        {\n        \"item\":\"Ham & Cheese Toast\",\n        \"price\":\"70CZK\"\n        },\n        {\n        \"item\":\"Avocado Toast\",\n        \"price\":\"70CZK\"\n        },\n    ]\n\n\n\n\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.id = \"menu\";\n\n    const paraUpper = document.createElement(\"p\");\n    paraUpper.innerText=upperText;\n\n    menuDiv.appendChild(paraUpper)\n    menuDiv.appendChild(document.createElement(\"br\"))\n\n    let beverages = document.createElement(\"p\");\n    beverages.innerText=\"Beverages\";\n    menuDiv.appendChild(beverages);\n\n    const tableBeverages = document.createElement(\"table\");\n    \n    for(let e of menuBeverages){\n        const tr = document.createElement(\"tr\");\n        const tdItem = document.createElement(\"td\");\n        tdItem.innerText = e.item;\n        tdItem.classList=\"left\";\n        const tdPrice = document.createElement(\"td\");\n        tdPrice.innerText = e.price;\n        tdPrice.classList=\"right\";\n        tr.appendChild(tdItem);\n        tr.appendChild(tdPrice);\n        tableBeverages.appendChild(tr);\n        menuDiv.appendChild(tableBeverages)\n    }\n    menuDiv.appendChild(document.createElement(\"br\"))\n\n    let toEat = document.createElement(\"p\");\n    toEat.innerText=\"To Eat\";\n    menuDiv.appendChild(toEat);\n\n    const tableFood = document.createElement(\"table\");\n    for(let e of menuFood){\n        const tr = document.createElement(\"tr\");\n        const tdItem = document.createElement(\"td\");\n        tdItem.innerText = e.item;\n        tdItem.classList=\"left\";\n        const tdPrice = document.createElement(\"td\");\n        tdPrice.innerText = e.price;\n        tdPrice.classList=\"right\";\n        tr.appendChild(tdItem);\n        tr.appendChild(tdPrice);\n        tableFood.appendChild(tr);\n        menuDiv.appendChild(tableFood)\n    }\n\n    menuDiv.appendChild(document.createElement(\"br\"))\n\n    const paraBottom = document.createElement(\"p\");\n    paraBottom.textContent = bottomText;\n    menuDiv.appendChild(paraBottom);\n    menuDiv.appendChild(document.createElement(\"br\"));\n\n    container.appendChild(menuDiv);\n    main.appendChild(container);\n    \n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;