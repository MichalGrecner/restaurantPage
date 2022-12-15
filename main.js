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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/backgrnd_large.jpg */ \"./src/img/backgrnd_large.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/backgrnd_small.jpg */ \"./src/img/backgrnd_small.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin:0;\\n    padding: 0;\\n}\\n:root{\\n    box-sizing: border-box;\\n    --backclr: #2c2c2ccc;\\n    --clrtext:#dedede;\\n}\\n\\nbody{\\n    font-family: 'Roboto', sans-serif;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-position: center center ;\\n    background-repeat: no-repeat;\\n    background-attachment: fixed;\\n    background-size: cover;\\n    background-color: #464646;\\n    min-width: 500px;\\n    height: 100vh;\\n    min-height: 1200px;\\n    \\n    color:var(--clrtext);\\n    line-height: 1.3;\\n   \\n    position:relative;\\n    \\n    \\n    \\n}\\n#content{\\n    display:flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap:1rem;\\n}\\n    \\n\\n#navigation{\\n    list-style: none;\\n    display:flex;\\n    flex-direction: row;\\n    width:80vw;\\n    justify-content: space-around;\\n    max-width: 1100px;\\n    min-width: 500px;\\n}\\nli{\\n    margin: 30px 0;\\n    height:auto;\\n    /*width: vw;*/\\n    min-width: 60px;\\n    display:grid;\\n    justify-content: center;\\n    align-content: center;\\n    /*font-size: clamp(30px, 2vw, 40px);*/\\n    font-size:30px;\\n    background-color: var(--backclr);\\n    border-radius: 15px;\\n    padding: 20px 50px 20px 50px;\\n    \\n}\\nli:hover{\\n    transform: scale(1.1);\\n}\\n\\n\\nh1{\\n    \\n    text-align: center;\\n    font-size: clamp(50px, 2.5vw, 60px);\\n    \\n    \\n}\\n\\n#container{\\n    width:80vw;\\n    max-width: 1100px;\\n    min-width: 500px;\\n    /*font-size: clamp(30px, 2vw, 40px);*/\\n    font-size:30px;\\n    background-color: var(--backclr);\\n\\n    border-radius: 15px;\\n    padding: 20px 50px 20px 50px;\\n    text-align: center;\\n    display:flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n\\ntd{\\n    padding-bottom: 10px;\\n    width:100%\\n}\\n\\n.right{\\n    text-align:right;\\n    padding-left: 10px;\\n    \\n}\\n.left{\\n    padding-right: 10px;\\n    text-align:left;\\n\\n}\\n\\n\\n#map{\\n    width:90%;\\n    margin-top: 20px;\\n\\n}\\n\\n#headerCont{\\n    background-color: var(--backclr);\\n    border-radius: 15px;\\n    margin-top: 40px;\\n    padding: 20px 50px 20px 50px;\\n}\\n\\n#footer{\\n    width:80vw;\\n    max-width: 1100px;\\n    min-width: 500px;\\n    /*font-size: clamp(30px, 2vw, 40px);*/\\n    font-size:20px;\\n    background-color: var(--backclr);\\n\\n    border-radius: 15px;\\n    padding: 20px 50px 20px 50px;\\n    \\n    text-align: center;\\n    position:absolute;\\n    bottom:10px;\\n\\n\\n}\\n\\n#footer a{\\n    \\n    color:var(--clrtext);\\n    margin-left: 20px;\\n    margin-right: 20px\\n}\\n\\n\\n@media (max-width: 767px){\\n    \\n    body{\\n        background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n        position:relative;\\n    }\\n\\n    li{\\n        padding: 20px 2rem 20px 2rem;\\n    }\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactScreen\": () => (/* binding */ contactScreen)\n/* harmony export */ });\nconst contactScreen = function () {\n    const main = document.querySelector(\"main\")\n    const OpenTime = \"MON-SUN...........7AM - 9PM\";\n    const name = \"Fake Fancy Café\"\n    const street = \"FamousBridge Avenue 1\"\n    const zipCode = \"110 00 Prague, Czechia\"\n\n\n\n\n    const mapDiv = document.createElement(\"div\");\n    const map = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11708.751414257229!2d14.42571435116!3d50.08277903227256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e5e58eb59f%3A0x75209738d1d3b126!2sKarl%C5%AFv%20most!5e0!3m2!1scs!2scz!4v1671108794051!5m2!1scs!2scz\" width=\"100%\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n    `\n\n    mapDiv.id=\"map\";\n    mapDiv.innerHTML = map;\n\n\n\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const contactDiv = document.createElement(\"div\");\n    contactDiv.id = \"contact\";\n\n    const openTimePara = document.createElement(\"p\");\n    openTimePara.textContent = OpenTime;\n\n    const namePara = document.createElement(\"p\");\n    namePara.textContent = name;\n\n    const streetPara = document.createElement(\"p\");\n    streetPara.textContent = street;\n\n    const zipcodePara = document.createElement(\"p\");\n    zipcodePara.textContent = zipCode;\n\n\n    contactDiv.appendChild(openTimePara);\n    contactDiv.appendChild(document.createElement(\"br\"));\n    contactDiv.appendChild(namePara);\n    contactDiv.appendChild(streetPara);\n    contactDiv.appendChild(zipcodePara);\n    container.appendChild(contactDiv);\n    contactDiv.appendChild(document.createElement(\"br\"));\n    container.appendChild(mapDiv);\n    //container.appendChild(document.createElement(\"br\"));\n    main.appendChild(container);\n    \n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeScreen\": () => (/* binding */ homeScreen)\n/* harmony export */ });\n\nconst homeScreen = function () {\n    const main = document.querySelector(\"main\")\n    const homeInfoIntro = \"Hello and welcome to my 'Fake Café' website.\";\n    const homeInfopara1=\"This website is result of a task from 'The Odin Project' curriculum. The aim of this simple website is to bundle several separated .js modules together using Webpack. This site also should be responsive.\";\n    const homeInfopara2=\"Because I need more text here I will just simply add some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae beatae qui mollitia optio enim eaque officia illum voluptatibus magni.\";\n\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const infoDiv = document.createElement(\"div\");\n    infoDiv.id = \"info\";\n\n    const pIntro = document.createElement(\"p\");\n    pIntro.innerText = homeInfoIntro;\n\n    const para1 = document.createElement(\"p\");\n    para1.innerText = homeInfopara1;\n\n    const para2 = document.createElement(\"p\");\n    para2.innerText = homeInfopara2;\n\n\n    infoDiv.appendChild(pIntro);\n    infoDiv.appendChild(document.createElement(\"br\"));\n    infoDiv.appendChild(para1);\n    infoDiv.appendChild(document.createElement(\"br\"));\n    infoDiv.appendChild(para2);\n    //infoDiv.appendChild(document.createElement(\"br\"));\n\n    container.appendChild(infoDiv);\n    main.appendChild(container);\n    \n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _src_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/home.js */ \"./src/home.js\");\n/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/menu.js */ \"./src/menu.js\");\n/* harmony import */ var _src_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/contact.js */ \"./src/contact.js\");\n\n//import { container } from \"webpack\";\n\n\n\n\nconst name = \"Fake Fancy Café\"\n\n//div id content\nconst content = document.querySelector(\"#content\");\n//div header content\nconst headerCont = document.createElement(\"div\");\nheaderCont.id=\"headerCont\";\n//h1 element restaurant name\nconst header = document.createElement(\"h1\");\nheader.innerText = name;\n\nheaderCont.appendChild(header)\ncontent.appendChild(headerCont);\n\n//navigation\n\nconst nav = document.createElement(\"nav\");\n\nconst ulNav = document.createElement(\"ul\");\nulNav.id=\"navigation\";\n\nconst menuArray = [\"home\", \"menu\", \"contact\"];\nfor (let e of menuArray){\n    let li = document.createElement(\"li\");\n    li.id = e;\n    li.innerText = e.toUpperCase()\n    ulNav.appendChild(li);\n}\nnav.appendChild(ulNav)\ncontent.appendChild(nav)\n\nconst main = document.createElement(\"main\");\ncontent.appendChild(main)\n\n;(0,_src_home_js__WEBPACK_IMPORTED_MODULE_1__.homeScreen)();\n\nconst container=document.querySelector(\"#container\");\n\nconst homeTab = document.querySelector(\"#home\");\nconst menuTab = document.querySelector(\"#menu\");\nconst contactTab = document.querySelector(\"#contact\");\n\nhomeTab.addEventListener(\"click\", function () {\n\n    const container=document.querySelector(\"#container\");\n    container.remove();\n    (0,_src_home_js__WEBPACK_IMPORTED_MODULE_1__.homeScreen)();\n});\n\nmenuTab.addEventListener(\"click\", function () {\n    const container=document.querySelector(\"#container\");\n    container.remove();\n    (0,_src_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuScreen)();\n});\n\ncontactTab.addEventListener(\"click\", function () {\n    const container=document.querySelector(\"#container\");\n    container.remove();\n    (0,_src_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactScreen)();\n});\n\n\nconst footer = document.createElement(\"div\");\nfooter.id=\"footer\";\nconst footerPara = document.createElement(\"p\");\nconst footerText = \"<a href='https://www.freepik.com/free-photo/cafe-bar-hotel-loft-style_4690095.htm'  target='_blank'>Background Image by jcomp on Freepik </a> / <a href ='https://github.com/MichalGrecner' target='_blank'>GitHub/MichalGrecner</a>\";\n\nfooterPara.innerHTML = footerText;\nfooter.appendChild(footerPara)\n\ncontent.appendChild(footer)\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuScreen\": () => (/* binding */ menuScreen)\n/* harmony export */ });\n\nconst menuScreen = function () {\n    const main = document.querySelector(\"main\");\n    const upperText = \"You can eat in or take away.\"\n    const bottomText = \"We accept credit cards.\";\n\n    const menuBeverages = [\n        {\n        \"item\":\"Coffe\",\n        \"price\":\"60CZK\"\n        },\n        {\n        \"item\":\"Cappuccino\",\n        \"price\":\"70CZK\"\n        },\n        {\n        \"item\":\"Beer\",\n        \"price\":\"50CZK\"\n        },\n        {\n        \"item\":\"Tea\",\n        \"price\":\"50CZK\"\n        },\n    ]\n    const menuFood = [\n        {\n        \"item\":\"Czech national dessert 'Bábovka'\",\n        \"price\":\"55CZK\"\n        },\n        {\n        \"item\":\"Ham & Cheese Toast\",\n        \"price\":\"70CZK\"\n        },\n        {\n        \"item\":\"Avocado Toast\",\n        \"price\":\"70CZK\"\n        },\n    ]\n\n\n\n\n    const container = document.createElement(\"div\");\n    container.id = \"container\";\n\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.id = \"menu\";\n\n    const paraUpper = document.createElement(\"p\");\n    paraUpper.innerText=upperText;\n\n    menuDiv.appendChild(paraUpper)\n    menuDiv.appendChild(document.createElement(\"br\"))\n\n    let beverages = document.createElement(\"p\");\n    beverages.innerText=\"Beverages\";\n    menuDiv.appendChild(beverages);\n\n    const tableBeverages = document.createElement(\"table\");\n    \n    for(let e of menuBeverages){\n        const tr = document.createElement(\"tr\");\n        const tdItem = document.createElement(\"td\");\n        tdItem.innerText = e.item;\n        tdItem.classList=\"left\";\n        const tdPrice = document.createElement(\"td\");\n        tdPrice.innerText = e.price;\n        tdPrice.classList=\"right\";\n        tr.appendChild(tdItem);\n        tr.appendChild(tdPrice);\n        tableBeverages.appendChild(tr);\n        menuDiv.appendChild(tableBeverages)\n    }\n    menuDiv.appendChild(document.createElement(\"br\"))\n\n    let toEat = document.createElement(\"p\");\n    toEat.innerText=\"To Eat\";\n    menuDiv.appendChild(toEat);\n\n    const tableFood = document.createElement(\"table\");\n    for(let e of menuFood){\n        const tr = document.createElement(\"tr\");\n        const tdItem = document.createElement(\"td\");\n        tdItem.innerText = e.item;\n        tdItem.classList=\"left\";\n        const tdPrice = document.createElement(\"td\");\n        tdPrice.innerText = e.price;\n        tdPrice.classList=\"right\";\n        tr.appendChild(tdItem);\n        tr.appendChild(tdPrice);\n        tableFood.appendChild(tr);\n        menuDiv.appendChild(tableFood)\n    }\n\n    menuDiv.appendChild(document.createElement(\"br\"))\n\n    const paraBottom = document.createElement(\"p\");\n    paraBottom.textContent = bottomText;\n    menuDiv.appendChild(paraBottom);\n    //menuDiv.appendChild(document.createElement(\"br\"));\n\n    container.appendChild(menuDiv);\n    main.appendChild(container);\n    \n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/img/backgrnd_large.jpg":
/*!************************************!*\
  !*** ./src/img/backgrnd_large.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8023eac1d5368b86a2bd.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/img/backgrnd_large.jpg?");

/***/ }),

/***/ "./src/img/backgrnd_small.jpg":
/*!************************************!*\
  !*** ./src/img/backgrnd_small.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ebdc72d2eb8097f1749e.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/img/backgrnd_small.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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