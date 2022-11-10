"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_exercise"] = self["webpackChunkwebpack_exercise"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  list-style: none;\\n  font-family: 'Lato', sans-serif;\\n}\\n\\nbody {\\n  background-color: #f5f5f5;\\n  height: 80vh;\\n}\\n\\n.list-container {\\n  max-width: 500px;\\n  background-color: white;\\n  margin: 10% auto;\\n  border-radius: 5px;\\n  box-shadow: 2px 7px 17px 12px rgba(0, 0, 0, 0.15);\\n}\\n\\n.row {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 20px;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\\n  font-size: 18px;\\n}\\n\\n.icon {\\n  width: 15px;\\n  height: 15px;\\n  opacity: 0.2;\\n  cursor: pointer;\\n}\\n\\n.row-input {\\n  display: flex;\\n  justify-content: space-between;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\\n  align-items: center;\\n  padding-right: 24px;\\n}\\n\\n.title {\\n  font-size: 20px;\\n}\\n\\n.input-text {\\n  border: 0;\\n  width: 100%;\\n  padding: 12px 24px;\\n  font-size: 20px;\\n  line-height: 16px;\\n  font-style: italic;\\n}\\n\\n.input-text:focus {\\n  outline: 0;\\n}\\n\\n.clearButton {\\n  width: 100%;\\n  border: 0;\\n  font-size: 20px;\\n  padding: 24px;\\n  color: rgba(0, 0, 0, 0.3);\\n}\\n\\n.clearButton:hover {\\n  cursor: pointer;\\n  color: rgba(0, 0, 0, 0.7);\\n}\\n\\n.row-button {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.checkbox-container {\\n  display: flex;\\n}\\n\\n.checkbox {\\n  margin-right: 12px;\\n  transform: scale(1.5);\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n  color: rgba(0, 0, 0, 0.3);\\n  accent-color: green;\\n}\\n\\n.input-edit-text {\\n  border: 0;\\n  width: 100%;\\n  font-size: 18px;\\n  line-height: 16px;\\n  font-style: italic;\\n  background-color: transparent;\\n}\\n\\n.input-edit-text:focus {\\n  outline: 0;\\n}\\n\\n.editMode {\\n  background-color: beige;\\n}\\n\\n.display-none {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_arrow_enter_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/arrow-enter.svg */ \"./src/img/arrow-enter.svg\");\n/* harmony import */ var _img_arrows_rotate_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/arrows-rotate-solid.svg */ \"./src/img/arrows-rotate-solid.svg\");\n/* harmony import */ var _modules_ToDoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ToDoList.js */ \"./src/modules/ToDoList.js\");\n/* harmony import */ var _modules_Task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Task.js */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_CompleteTask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/CompleteTask.js */ \"./src/modules/CompleteTask.js\");\n\n\n\n\n\n\n\nconst tasks = new _modules_ToDoList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst listDiv = document.querySelector('.list-container');\nlistDiv.innerHTML = '';\n\nconst renderTitle = () => {\n  const title = document.createElement('div');\n  const refreshIcon = new Image();\n  refreshIcon.src = _img_arrows_rotate_solid_svg__WEBPACK_IMPORTED_MODULE_2__;\n  refreshIcon.classList.add('icon');\n  refreshIcon.id = 'refreshButton';\n  title.innerHTML = '<p class=\\'title\\'>Today\\'s To Do</p>';\n  title.appendChild(refreshIcon);\n  title.classList.add('row');\n  return title;\n};\nconst renderInput = () => {\n  const input = document.createElement('div');\n  const enterIcon = new Image();\n  enterIcon.src = _img_arrow_enter_svg__WEBPACK_IMPORTED_MODULE_1__;\n  enterIcon.classList.add('icon');\n  enterIcon.id = 'addButton';\n  input.innerHTML = '<input class=\\'input-text\\' type=\\'text\\' name=\\'addItem\\' id=\\'addItem\\' placeholder=\\'Add to your list...\\'/>';\n  input.appendChild(enterIcon);\n  input.classList.add('row-input');\n  return input;\n};\n\nconst renderList = () => {\n  const element = document.createElement('ul');\n  element.id = 'list-content';\n  const lis = tasks.getAll();\n  lis.forEach((item) => {\n    element.appendChild(item);\n  });\n  return element;\n};\nconst renderFoot = () => {\n  const button = document.createElement('div');\n  button.innerHTML = '<button class=\\'clearButton\\' type=\\'button\\' id=\\'clearButton\\'>Clear all completed</button>';\n  button.classList.add('row-button');\n  return button;\n};\nconst refreshList = () => {\n  listDiv.replaceChild(renderList(), listDiv.childNodes[2]);\n};\n\nlistDiv.appendChild(renderTitle());\nlistDiv.appendChild(renderInput());\nlistDiv.appendChild(renderList());\nlistDiv.appendChild(renderFoot());\nconst addButton = listDiv.querySelector('#addButton');\nconst inputText = listDiv.querySelector('#addItem');\nfunction addListener() {\n  const editButtons = listDiv.querySelectorAll('.edit');\n  editButtons.forEach((button) => {\n    button.addEventListener('click', (e) => {\n      const { id } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      const row = document.querySelector(`#task-${index}`);\n      row.classList.add('editMode');\n      const rowInput = document.querySelector(`#editItem-${index}`);\n      const rowLabel = document.querySelector(`#label-${index}`);\n      const editIcon = document.querySelector(`#edit-${index}`);\n      const deleteIcon = document.querySelector(`#delete-${index}`);\n      rowLabel.classList.toggle('display-none');\n      rowInput.classList.toggle('display-none');\n      editIcon.classList.toggle('display-none');\n      deleteIcon.classList.toggle('display-none');\n    });\n  });\n  const deleteButtons = document.querySelectorAll('.delete');\n  deleteButtons.forEach((button) => {\n    button.addEventListener('click', (e) => {\n      const { id } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      tasks.remove(index);\n      tasks.reindex();\n      refreshList();\n      addListener();\n    });\n  });\n  const liNode = listDiv.querySelectorAll('li');\n  liNode.forEach((node) => {\n    node.addEventListener('dblclick', (e) => {\n      const { id } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      const row = document.querySelector(`#task-${index}`);\n      if (!row.classList.contains('editMode')) {\n        row.classList.add('editMode');\n        const rowInput = document.querySelector(`#editItem-${index}`);\n        const rowLabel = document.querySelector(`#label-${index}`);\n        const editIcon = document.querySelector(`#edit-${index}`);\n        const deleteIcon = document.querySelector(`#delete-${index}`);\n        rowLabel.classList.toggle('display-none');\n        rowInput.classList.toggle('display-none');\n        editIcon.classList.toggle('display-none');\n        deleteIcon.classList.toggle('display-none');\n        rowInput.select();\n      }\n    });\n  });\n  const inputEditText = document.querySelectorAll('.input-edit-text');\n  inputEditText.forEach((node) => {\n    node.addEventListener('blur', (e) => {\n      const { id, value } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      const row = document.querySelector(`#task-${index}`);\n      row.classList.remove('editMode');\n      const rowInput = document.querySelector(`#editItem-${index}`);\n      const rowLabel = document.querySelector(`#label-${index}`);\n      const editIcon = document.querySelector(`#edit-${index}`);\n      const deleteIcon = document.querySelector(`#delete-${index}`);\n      rowLabel.classList.toggle('display-none');\n      rowInput.classList.toggle('display-none');\n      editIcon.classList.toggle('display-none');\n      deleteIcon.classList.toggle('display-none');\n      const data = {\n        description: value,\n        index,\n      };\n      tasks.edit(data);\n      tasks.reindex();\n      refreshList();\n      addListener();\n    });\n    node.addEventListener('keypress', (e) => {\n      if (e.keyCode === 13) {\n        const { id } = e.target;\n        const index = id.substring(id.indexOf('-') + 1, id.length);\n        const rowInput = document.querySelector(`#editItem-${index}`);\n        rowInput.blur();\n      }\n    });\n  });\n  const checkboxs = listDiv.querySelectorAll('.checkbox');\n  checkboxs.forEach((checkbox) => {\n    checkbox.addEventListener('change', (e) => {\n      const { id } = e.target;\n      const index = id.substring(id.indexOf('-') + 1, id.length);\n      const completed = new _modules_CompleteTask_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n      completed.changeState(index);\n      refreshList();\n      addListener();\n    });\n  });\n}\naddButton.addEventListener('click', () => {\n  const data = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](inputText.value);\n  tasks.add(data);\n  inputText.value = '';\n  tasks.reindex();\n  refreshList();\n  addListener();\n});\ninputText.addEventListener('keypress', (e) => {\n  if (e.keyCode === 13) {\n    const data = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](inputText.value);\n    tasks.add(data);\n    inputText.value = '';\n    tasks.reindex();\n    refreshList();\n    addListener();\n  }\n});\nconst refreshButton = document.querySelector('#refreshButton');\nrefreshButton.addEventListener('click', () => {\n  refreshList();\n  addListener();\n});\nconst clearButton = document.querySelector('#clearButton');\nclearButton.addEventListener('click', () => {\n  tasks.clearCompleted();\n  tasks.reindex();\n  refreshList();\n  addListener();\n});\n\naddListener();\n\n\n//# sourceURL=webpack://webpack-exercise/./src/index.js?");

/***/ }),

/***/ "./src/modules/CompleteTask.js":
/*!*************************************!*\
  !*** ./src/modules/CompleteTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CompleteTask)\n/* harmony export */ });\n/* harmony import */ var _ToDoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList.js */ \"./src/modules/ToDoList.js\");\n\n\nclass CompleteTask {\n  constructor() {\n    this.toDoList = new _ToDoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  changeState(index) {\n    this.toDoList.list[index - 1].completed = !this.toDoList.list[index - 1].completed;\n    localStorage.setItem('data', JSON.stringify(this.toDoList.list));\n  }\n}\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/CompleteTask.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(description, completed = false, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/ToDoList.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\n/* harmony import */ var _img_ellipsis_vertical_solid_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/ellipsis-vertical-solid.svg */ \"./src/img/ellipsis-vertical-solid.svg\");\n/* harmony import */ var _img_trash_can_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/trash-can-solid.svg */ \"./src/img/trash-can-solid.svg\");\n\n\n\nclass ToDoList {\n  constructor() {\n    this.list = JSON.parse(localStorage.getItem('data')) || [];\n  }\n\n  add(data) {\n    const index = this.list.length + 1;\n    data.index = index;\n    this.list.push(data);\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n\n  remove(index) {\n    this.list.splice(index - 1, 1);\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n\n  edit(data) {\n    const { index, description } = data;\n    this.list.forEach((element) => {\n      if (element.index === parseInt(index, 10)) {\n        element.description = description;\n      }\n    });\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n\n  getAll() {\n    this.list = JSON.parse(localStorage.getItem('data')) || [];\n    const data = [];\n    this.list.forEach((item) => {\n      const moreIcon = new Image();\n      const trashIcon = new Image();\n      const li = document.createElement('li');\n      li.id = `task-${item.index}`;\n      li.innerHTML = `\n      <div class=\"checkbox-container\">\n        <input type=\"checkbox\" id=\"cbox-${item.index}\" value=\"first_checkbox\" class='checkbox' ${item.completed ? 'checked' : ''}>\n        <label for='cbox-${item.index}' id='label-${item.index}' class=' ${item.completed ? 'completed' : ''}'> \n          ${item.description}\n        </label>\n        <input class='input-edit-text display-none' type='text' name='editItem' id='editItem-${item.index}' value='${item.description}'/>\n      <div>`;\n      li.appendChild(moreIcon);\n      li.appendChild(trashIcon);\n      li.classList.add('row');\n      li.classList.add('input');\n      moreIcon.src = _img_ellipsis_vertical_solid_svg__WEBPACK_IMPORTED_MODULE_0__;\n      moreIcon.classList.add('icon');\n      moreIcon.classList.add('edit');\n      moreIcon.id = `edit-${item.index}`;\n      trashIcon.src = _img_trash_can_solid_svg__WEBPACK_IMPORTED_MODULE_1__;\n      trashIcon.classList.add('icon');\n      trashIcon.classList.add('delete');\n      trashIcon.classList.add('display-none');\n      trashIcon.id = `delete-${item.index}`;\n      data.push(li);\n    });\n    return data;\n  }\n\n  reindex() {\n    let counter = 1;\n    this.list.forEach((item) => {\n      item.index = counter;\n      counter += 1;\n    });\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n\n  clearCompleted() {\n    this.list = JSON.parse(localStorage.getItem('data')) || [];\n    const newList = this.list.filter((element) => element.completed !== true);\n    this.list = newList;\n    localStorage.setItem('data', JSON.stringify(this.list));\n  }\n}\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/ToDoList.js?");

/***/ }),

/***/ "./src/img/arrow-enter.svg":
/*!*********************************!*\
  !*** ./src/img/arrow-enter.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3deee81befcd06321d93.svg\";\n\n//# sourceURL=webpack://webpack-exercise/./src/img/arrow-enter.svg?");

/***/ }),

/***/ "./src/img/arrows-rotate-solid.svg":
/*!*****************************************!*\
  !*** ./src/img/arrows-rotate-solid.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b9e2d5ddfacd703cd89.svg\";\n\n//# sourceURL=webpack://webpack-exercise/./src/img/arrows-rotate-solid.svg?");

/***/ }),

/***/ "./src/img/ellipsis-vertical-solid.svg":
/*!*********************************************!*\
  !*** ./src/img/ellipsis-vertical-solid.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"38cf9a5db55011ad14da.svg\";\n\n//# sourceURL=webpack://webpack-exercise/./src/img/ellipsis-vertical-solid.svg?");

/***/ }),

/***/ "./src/img/trash-can-solid.svg":
/*!*************************************!*\
  !*** ./src/img/trash-can-solid.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c927b91f940b10a71fb3.svg\";\n\n//# sourceURL=webpack://webpack-exercise/./src/img/trash-can-solid.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);