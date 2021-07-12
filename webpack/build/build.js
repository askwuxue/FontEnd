 (() => { // webpackBootstrap
 	"use strict";
 	var __webpack_modules__ = ({

 "./node_modules/css-loader/dist/cjs.js!./public/app.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/app.css ***!
  \**************************************************************/
 ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_images_react_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/react.jpeg */ "./src/images/react.jpeg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_src_images_react_jpeg__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\n  color: purple;\n  font-size: 40px;\n}\n.imag1 {\n  width: 800px;\n  height: 410px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n}\n.imag3 {\n  width: 800px;\n  height: 400px;\n}\n", "",{"version":3,"sources":["webpack://./public/app.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;AACjB;AACA;EACE,YAAY;EACZ,aAAa;EACb,6DAAqD;AACvD;AACA;EACE,YAAY;EACZ,aAAa;AACf","sourcesContent":["h1 {\n  color: purple;\n  font-size: 40px;\n}\n.imag1 {\n  width: 800px;\n  height: 410px;\n  background: url(\"../src/images/react.jpeg\") no-repeat;\n}\n.imag3 {\n  width: 800px;\n  height: 400px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


 }),

 "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
 ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

 }),

 "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
 ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

 }),

 "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
 ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

 }),

 "./src/loader.md":
/*!***********************!*\
  !*** ./src/loader.md ***!
  \***********************/
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<h3 id=\"这是一个测试-md-文件的-loader\">这是一个测试 md 文件的 loader</h3>\n<p>console.log(&#39;### 这是一个测试 md 文件的 loader&#39;);</p>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

 }),

 "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
 ((module, __unused_webpack_exports, __webpack_require__) => {



/* eslint-env browser */

/*
  eslint-disable
  no-console,
  func-names
*/
var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");

var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

function debounce(fn, time) {
  var timeout = 0;
  return function () {
    var self = this; // eslint-disable-next-line prefer-rest-params

    var args = arguments;

    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
}

function noop() {}

function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];

  if (!src) {
    if (document.currentScript) {
      src = document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];

      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }

    srcByModuleId[moduleId] = src;
  }

  return function (fileMap) {
    if (!src) {
      return null;
    }

    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];

    if (!filename) {
      return [src.replace(".js", ".css")];
    }

    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }

    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    } // eslint-disable-next-line


    url = el.href.split("?")[0];
  }

  if (!isUrlRequest(url)) {
    return;
  }

  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }

  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  } // eslint-disable-next-line no-param-reassign


  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());

  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

function getReloadUrl(href, src) {
  var ret; // eslint-disable-next-line no-param-reassign

  href = normalizeUrl(href, {
    stripWWW: false
  }); // eslint-disable-next-line array-callback-return

  src.some(function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

function reloadStyle(src) {
  if (!src) {
    return false;
  }

  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }

    var url = getReloadUrl(el.href, src);

    if (!isUrlRequest(url)) {
      return;
    }

    if (el.visited === true) {
      return;
    }

    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}

function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }

    updateCss(el);
  });
}

function isUrlRequest(url) {
  // An URL is not an request if
  // It is not http or https
  if (!/^https?:/i.test(url)) {
    return false;
  }

  return true;
}

module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }

  var getScriptSrc = getCurrentScriptUrl(moduleId);

  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);

    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }

    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }

  return debounce(update, 50);
};

 }),

 "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
 ((module) => {



/* eslint-disable */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;

      case ".":
        break;

      default:
        accumulator.push(item);
    }

    return accumulator;
  }, []).join("/");
}

module.exports = function (urlString) {
  urlString = urlString.trim();

  if (/^data:/i.test(urlString)) {
    return urlString;
  }

  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

 }),

 "./public/test.less":
/*!**************************!*\
  !*** ./public/test.less ***!
  \**************************/
 ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1626098983498
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"../","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

 }),

 "./public/app.css":
/*!************************!*\
  !*** ./public/app.css ***!
  \************************/
 ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./public/app.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./public/app.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./public/app.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

 }),

 "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
 ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

 }),

 "./src/images/react.jpeg":
/*!*******************************!*\
  !*** ./src/images/react.jpeg ***!
  \*******************************/
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "544e4a4921391291d7948138795ac147.jpeg");

 }),

 "./public/data.json":
/*!**************************!*\
  !*** ./public/data.json ***!
  \**************************/
 ((module) => {

module.exports = {"a":1,"b":2};

 }),

 "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(a, b) {
    console.log(a + b);
}


 }),

 "./src/hrm.js":
/*!********************!*\
  !*** ./src/hrm.js ***!
  \********************/
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hmr)
/* harmony export */ });
class hmr {
    constructor() {

    }
    fn() {
        console.log(absss)
    }
}

 }),

 "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
 ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _public_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/data.json */ "./public/data.json");
/* harmony import */ var _public_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/app.css */ "./public/app.css");
/* harmony import */ var _public_test_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/test.less */ "./public/test.less");
/* harmony import */ var _loader_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.md */ "./src/loader.md");
/* harmony import */ var _hrm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hrm */ "./src/hrm.js");
// webpack的入口文件 /src/index.js


// 开发环境打包
// webpack .\src\index.js -o .\build\build.js --mode=development

// 线上环境打包 会将入口文件压缩
// webpack .\src\index.js -o .\build\build.js --mode=production

// webpack 默认只支持打包.js .json 对与.css img 等资源不支持，需要借助loader和plugins实现






const { a, b } = _public_data_json__WEBPACK_IMPORTED_MODULE_1__;
console.log('a: ', a);
console.log('b: ', b);
console.log('js: hrm');
alert('refresh');

module.hot.accept(/*! ./hrm */ "./src/hrm.js", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _hrm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hrm */ "./src/hrm.js");
(() => {
    const hrsss = new _hrm__WEBPACK_IMPORTED_MODULE_5__.default();
    hrsss.fn();
    console.log('module 更新了，这里需要手动处理热替换逻辑')
})(__WEBPACK_OUTDATED_DEPENDENCIES__); })

;(0,_app__WEBPACK_IMPORTED_MODULE_0__.default)(a, b);

 })

 	});

 	// The module cache
 	var __webpack_module_cache__ = {};
 	
 	// The require function
 	function __webpack_require__(moduleId) {
 		// Check if module is in cache
 		var cachedModule = __webpack_module_cache__[moduleId];
 		if (cachedModule !== undefined) {
 			if (cachedModule.error !== undefined) throw cachedModule.error;
 			return cachedModule.exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = __webpack_module_cache__[moduleId] = {
 			id: moduleId,
 			// no module.loaded needed
 			exports: {}
 		};
 	
 		// Execute the module function
 		try {
 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
 			module = execOptions.module;
 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
 		} catch(e) {
 			module.error = e;
 			throw e;
 		}
 	
 		// Return the exports of the module
 		return module.exports;
 	}
 	
 	// expose the modules object (__webpack_modules__)
 	__webpack_require__.m = __webpack_modules__;
 	
 	// expose the module cache
 	__webpack_require__.c = __webpack_module_cache__;
 	
 	// expose the module execution interceptor
 	__webpack_require__.i = [];
 	

 	/* webpack/runtime/compat get default export */
 	(() => {
 		// getDefaultExport function for compatibility with non-harmony modules
 		__webpack_require__.n = (module) => {
 			var getter = module && module.__esModule ?
 				() => (module['default']) :
 				() => (module);
 			__webpack_require__.d(getter, { a: getter });
 			return getter;
 		};
 	})();
 	
 	/* webpack/runtime/define property getters */
 	(() => {
 		// define getter functions for harmony exports
 		__webpack_require__.d = (exports, definition) => {
 			for(var key in definition) {
 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	
 	/* webpack/runtime/get javascript update chunk filename */
 	(() => {
 		// This function allow to reference all chunks
 		__webpack_require__.hu = (chunkId) => {
 			// return url for filenames based on template
 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
 		};
 	})();
 	
 	/* webpack/runtime/get mini-css chunk filename */
 	(() => {
 		// This function allow to reference all chunks
 		__webpack_require__.miniCssF = (chunkId) => {
 			// return url for filenames based on template
 			return undefined;
 		};
 	})();
 	
 	/* webpack/runtime/get update manifest filename */
 	(() => {
 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
 	})();
 	
 	/* webpack/runtime/getFullHash */
 	(() => {
 		__webpack_require__.h = () => ("f5298935ada206d9a7ef")
 	})();
 	
 	/* webpack/runtime/global */
 	(() => {
 		__webpack_require__.g = (function() {
 			if (typeof globalThis === 'object') return globalThis;
 			try {
 				return this || new Function('return this')();
 			} catch (e) {
 				if (typeof window === 'object') return window;
 			}
 		})();
 	})();
 	
 	/* webpack/runtime/hasOwnProperty shorthand */
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	
 	/* webpack/runtime/load script */
 	(() => {
 		var inProgress = {};
 		var dataWebpackPrefix = "webpack-first-test:";
 		// loadScript function to load a script via script tag
 		__webpack_require__.l = (url, done, key, chunkId) => {
 			if(inProgress[url]) { inProgress[url].push(done); return; }
 			var script, needAttach;
 			if(key !== undefined) {
 				var scripts = document.getElementsByTagName("script");
 				for(var i = 0; i < scripts.length; i++) {
 					var s = scripts[i];
 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
 				}
 			}
 			if(!script) {
 				needAttach = true;
 				script = document.createElement('script');
 		
 				script.charset = 'utf-8';
 				script.timeout = 120;
 				if (__webpack_require__.nc) {
 					script.setAttribute("nonce", __webpack_require__.nc);
 				}
 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
 				script.src = url;
 			}
 			inProgress[url] = [done];
 			var onScriptComplete = (prev, event) => {
 				// avoid mem leaks in IE.
 				script.onerror = script.onload = null;
 				clearTimeout(timeout);
 				var doneFns = inProgress[url];
 				delete inProgress[url];
 				script.parentNode && script.parentNode.removeChild(script);
 				doneFns && doneFns.forEach((fn) => (fn(event)));
 				if(prev) return prev(event);
 			}
 			;
 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
 			script.onerror = onScriptComplete.bind(null, script.onerror);
 			script.onload = onScriptComplete.bind(null, script.onload);
 			needAttach && document.head.appendChild(script);
 		};
 	})();
 	
 	/* webpack/runtime/make namespace object */
 	(() => {
 		// define __esModule on exports
 		__webpack_require__.r = (exports) => {
 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 			}
 			Object.defineProperty(exports, '__esModule', { value: true });
 		};
 	})();
 	
 	/* webpack/runtime/hot module replacement */
 	(() => {
 		var currentModuleData = {};
 		var installedModules = __webpack_require__.c;
 		
 		// module and require creation
 		var currentChildModule;
 		var currentParents = [];
 		
 		// status
 		var registeredStatusHandlers = [];
 		var currentStatus = "idle";
 		
 		// while downloading
 		var blockingPromises;
 		
 		// The update info
 		var currentUpdateApplyHandlers;
 		var queuedInvalidatedModules;
 		
 		// eslint-disable-next-line no-unused-vars
 		__webpack_require__.hmrD = currentModuleData;
 		
 		__webpack_require__.i.push(function (options) {
 			var module = options.module;
 			var require = createRequire(options.require, options.id);
 			module.hot = createModuleHotObject(options.id, module);
 			module.parents = currentParents;
 			module.children = [];
 			currentParents = [];
 			options.require = require;
 		});
 		
 		__webpack_require__.hmrC = {};
 		__webpack_require__.hmrI = {};
 		
 		function createRequire(require, moduleId) {
 			var me = installedModules[moduleId];
 			if (!me) return require;
 			var fn = function (request) {
 				if (me.hot.active) {
 					if (installedModules[request]) {
 						var parents = installedModules[request].parents;
 						if (parents.indexOf(moduleId) === -1) {
 							parents.push(moduleId);
 						}
 					} else {
 						currentParents = [moduleId];
 						currentChildModule = request;
 					}
 					if (me.children.indexOf(request) === -1) {
 						me.children.push(request);
 					}
 				} else {
 					console.warn(
 						"[HMR] unexpected require(" +
 							request +
 							") from disposed module " +
 							moduleId
 					);
 					currentParents = [];
 				}
 				return require(request);
 			};
 			var createPropertyDescriptor = function (name) {
 				return {
 					configurable: true,
 					enumerable: true,
 					get: function () {
 						return require[name];
 					},
 					set: function (value) {
 						require[name] = value;
 					}
 				};
 			};
 			for (var name in require) {
 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
 				}
 			}
 			fn.e = function (chunkId) {
 				return trackBlockingPromise(require.e(chunkId));
 			};
 			return fn;
 		}
 		
 		function createModuleHotObject(moduleId, me) {
 			var _main = currentChildModule !== moduleId;
 			var hot = {
 				// private stuff
 				_acceptedDependencies: {},
 				_acceptedErrorHandlers: {},
 				_declinedDependencies: {},
 				_selfAccepted: false,
 				_selfDeclined: false,
 				_selfInvalidated: false,
 				_disposeHandlers: [],
 				_main: _main,
 				_requireSelf: function () {
 					currentParents = me.parents.slice();
 					currentChildModule = _main ? undefined : moduleId;
 					__webpack_require__(moduleId);
 				},
 		
 				// Module API
 				active: true,
 				accept: function (dep, callback, errorHandler) {
 					if (dep === undefined) hot._selfAccepted = true;
 					else if (typeof dep === "function") hot._selfAccepted = dep;
 					else if (typeof dep === "object" && dep !== null) {
 						for (var i = 0; i < dep.length; i++) {
 							hot._acceptedDependencies[dep[i]] = callback || function () {};
 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
 						}
 					} else {
 						hot._acceptedDependencies[dep] = callback || function () {};
 						hot._acceptedErrorHandlers[dep] = errorHandler;
 					}
 				},
 				decline: function (dep) {
 					if (dep === undefined) hot._selfDeclined = true;
 					else if (typeof dep === "object" && dep !== null)
 						for (var i = 0; i < dep.length; i++)
 							hot._declinedDependencies[dep[i]] = true;
 					else hot._declinedDependencies[dep] = true;
 				},
 				dispose: function (callback) {
 					hot._disposeHandlers.push(callback);
 				},
 				addDisposeHandler: function (callback) {
 					hot._disposeHandlers.push(callback);
 				},
 				removeDisposeHandler: function (callback) {
 					var idx = hot._disposeHandlers.indexOf(callback);
 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
 				},
 				invalidate: function () {
 					this._selfInvalidated = true;
 					switch (currentStatus) {
 						case "idle":
 							currentUpdateApplyHandlers = [];
 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
 								__webpack_require__.hmrI[key](
 									moduleId,
 									currentUpdateApplyHandlers
 								);
 							});
 							setStatus("ready");
 							break;
 						case "ready":
 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
 								__webpack_require__.hmrI[key](
 									moduleId,
 									currentUpdateApplyHandlers
 								);
 							});
 							break;
 						case "prepare":
 						case "check":
 						case "dispose":
 						case "apply":
 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
 								moduleId
 							);
 							break;
 						default:
 							// ignore requests in error states
 							break;
 					}
 				},
 		
 				// Management API
 				check: hotCheck,
 				apply: hotApply,
 				status: function (l) {
 					if (!l) return currentStatus;
 					registeredStatusHandlers.push(l);
 				},
 				addStatusHandler: function (l) {
 					registeredStatusHandlers.push(l);
 				},
 				removeStatusHandler: function (l) {
 					var idx = registeredStatusHandlers.indexOf(l);
 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
 				},
 		
 				//inherit from previous dispose call
 				data: currentModuleData[moduleId]
 			};
 			currentChildModule = undefined;
 			return hot;
 		}
 		
 		function setStatus(newStatus) {
 			currentStatus = newStatus;
 			for (var i = 0; i < registeredStatusHandlers.length; i++)
 				registeredStatusHandlers[i].call(null, newStatus);
 		}
 		
 		function trackBlockingPromise(promise) {
 			switch (currentStatus) {
 				case "ready":
 					setStatus("prepare");
 					blockingPromises.push(promise);
 					waitForBlockingPromises(function () {
 						setStatus("ready");
 					});
 					return promise;
 				case "prepare":
 					blockingPromises.push(promise);
 					return promise;
 				default:
 					return promise;
 			}
 		}
 		
 		function waitForBlockingPromises(fn) {
 			if (blockingPromises.length === 0) return fn();
 			var blocker = blockingPromises;
 			blockingPromises = [];
 			return Promise.all(blocker).then(function () {
 				return waitForBlockingPromises(fn);
 			});
 		}
 		
 		function hotCheck(applyOnUpdate) {
 			if (currentStatus !== "idle") {
 				throw new Error("check() is only allowed in idle status");
 			}
 			setStatus("check");
 			return __webpack_require__.hmrM().then(function (update) {
 				if (!update) {
 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
 					return null;
 				}
 		
 				setStatus("prepare");
 		
 				var updatedModules = [];
 				blockingPromises = [];
 				currentUpdateApplyHandlers = [];
 		
 				return Promise.all(
 					Object.keys(__webpack_require__.hmrC).reduce(function (
 						promises,
 						key
 					) {
 						__webpack_require__.hmrC[key](
 							update.c,
 							update.r,
 							update.m,
 							promises,
 							currentUpdateApplyHandlers,
 							updatedModules
 						);
 						return promises;
 					},
 					[])
 				).then(function () {
 					return waitForBlockingPromises(function () {
 						if (applyOnUpdate) {
 							return internalApply(applyOnUpdate);
 						} else {
 							setStatus("ready");
 		
 							return updatedModules;
 						}
 					});
 				});
 			});
 		}
 		
 		function hotApply(options) {
 			if (currentStatus !== "ready") {
 				return Promise.resolve().then(function () {
 					throw new Error("apply() is only allowed in ready status");
 				});
 			}
 			return internalApply(options);
 		}
 		
 		function internalApply(options) {
 			options = options || {};
 		
 			applyInvalidatedModules();
 		
 			var results = currentUpdateApplyHandlers.map(function (handler) {
 				return handler(options);
 			});
 			currentUpdateApplyHandlers = undefined;
 		
 			var errors = results
 				.map(function (r) {
 					return r.error;
 				})
 				.filter(Boolean);
 		
 			if (errors.length > 0) {
 				setStatus("abort");
 				return Promise.resolve().then(function () {
 					throw errors[0];
 				});
 			}
 		
 			// Now in "dispose" phase
 			setStatus("dispose");
 		
 			results.forEach(function (result) {
 				if (result.dispose) result.dispose();
 			});
 		
 			// Now in "apply" phase
 			setStatus("apply");
 		
 			var error;
 			var reportError = function (err) {
 				if (!error) error = err;
 			};
 		
 			var outdatedModules = [];
 			results.forEach(function (result) {
 				if (result.apply) {
 					var modules = result.apply(reportError);
 					if (modules) {
 						for (var i = 0; i < modules.length; i++) {
 							outdatedModules.push(modules[i]);
 						}
 					}
 				}
 			});
 		
 			// handle errors in accept handlers and self accepted module load
 			if (error) {
 				setStatus("fail");
 				return Promise.resolve().then(function () {
 					throw error;
 				});
 			}
 		
 			if (queuedInvalidatedModules) {
 				return internalApply(options).then(function (list) {
 					outdatedModules.forEach(function (moduleId) {
 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
 					});
 					return list;
 				});
 			}
 		
 			setStatus("idle");
 			return Promise.resolve(outdatedModules);
 		}
 		
 		function applyInvalidatedModules() {
 			if (queuedInvalidatedModules) {
 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
 					queuedInvalidatedModules.forEach(function (moduleId) {
 						__webpack_require__.hmrI[key](
 							moduleId,
 							currentUpdateApplyHandlers
 						);
 					});
 				});
 				queuedInvalidatedModules = undefined;
 				return true;
 			}
 		}
 	})();
 	
 	/* webpack/runtime/publicPath */
 	(() => {
 		var scriptUrl;
 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
 		var document = __webpack_require__.g.document;
 		if (!scriptUrl && document) {
 			if (document.currentScript)
 				scriptUrl = document.currentScript.src
 			if (!scriptUrl) {
 				var scripts = document.getElementsByTagName("script");
 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
 			}
 		}
 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
 		__webpack_require__.p = scriptUrl;
 	})();
 	
 	/* webpack/runtime/css loading */
 	(() => {
 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
 			var linkTag = document.createElement("link");
 		
 			linkTag.rel = "stylesheet";
 			linkTag.type = "text/css";
 			var onLinkComplete = (event) => {
 				// avoid mem leaks.
 				linkTag.onerror = linkTag.onload = null;
 				if (event.type === 'load') {
 					resolve();
 				} else {
 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
 					var realHref = event && event.target && event.target.href || fullhref;
 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
 					err.code = "CSS_CHUNK_LOAD_FAILED";
 					err.type = errorType;
 					err.request = realHref;
 					linkTag.parentNode.removeChild(linkTag)
 					reject(err);
 				}
 			}
 			linkTag.onerror = linkTag.onload = onLinkComplete;
 			linkTag.href = fullhref;
 		
 			document.head.appendChild(linkTag);
 			return linkTag;
 		};
 		var findStylesheet = (href, fullhref) => {
 			var existingLinkTags = document.getElementsByTagName("link");
 			for(var i = 0; i < existingLinkTags.length; i++) {
 				var tag = existingLinkTags[i];
 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
 			}
 			var existingStyleTags = document.getElementsByTagName("style");
 			for(var i = 0; i < existingStyleTags.length; i++) {
 				var tag = existingStyleTags[i];
 				var dataHref = tag.getAttribute("data-href");
 				if(dataHref === href || dataHref === fullhref) return tag;
 			}
 		};
 		var loadStylesheet = (chunkId) => {
 			return new Promise((resolve, reject) => {
 				var href = __webpack_require__.miniCssF(chunkId);
 				var fullhref = __webpack_require__.p + href;
 				if(findStylesheet(href, fullhref)) return resolve();
 				createStylesheet(chunkId, fullhref, resolve, reject);
 			});
 		}
 		// no chunk loading
 		
 		var oldTags = [];
 		var newTags = [];
 		var applyHandler = (options) => {
 			return { dispose: () => {
 				for(var i = 0; i < oldTags.length; i++) {
 					var oldTag = oldTags[i];
 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
 				}
 				oldTags.length = 0;
 			}, apply: () => {
 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
 				newTags.length = 0;
 			} };
 		}
 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
 			applyHandlers.push(applyHandler);
 			chunkIds.forEach((chunkId) => {
 				var href = __webpack_require__.miniCssF(chunkId);
 				var fullhref = __webpack_require__.p + href;
 				var oldTag = findStylesheet(href, fullhref);
 				if(!oldTag) return;
 				promises.push(new Promise((resolve, reject) => {
 					var tag = createStylesheet(chunkId, fullhref, () => {
 						tag.as = "style";
 						tag.rel = "preload";
 						resolve();
 					}, reject);
 					oldTags.push(oldTag);
 					newTags.push(tag);
 				}));
 			});
 		}
 	})();
 	
 	/* webpack/runtime/jsonp chunk loading */
 	(() => {
 		// no baseURI
 		
 		// object to store loaded and loading chunks
 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
 		var installedChunks = {
 			"main": 0
 		};
 		
 		// no chunk on demand loading
 		
 		// no prefetching
 		
 		// no preloaded
 		
 		var currentUpdatedModulesList;
 		var waitingUpdateResolves = {};
 		function loadUpdateChunk(chunkId) {
 			return new Promise((resolve, reject) => {
 				waitingUpdateResolves[chunkId] = resolve;
 				// start update chunk loading
 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
 				// create error before stack unwound to get useful stacktrace later
 				var error = new Error();
 				var loadingEnded = (event) => {
 					if(waitingUpdateResolves[chunkId]) {
 						waitingUpdateResolves[chunkId] = undefined
 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
 						var realSrc = event && event.target && event.target.src;
 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
 						error.name = 'ChunkLoadError';
 						error.type = errorType;
 						error.request = realSrc;
 						reject(error);
 					}
 				};
 				__webpack_require__.l(url, loadingEnded);
 			});
 		}
 		
 		self["webpackHotUpdatewebpack_first_test"] = (chunkId, moreModules, runtime) => {
 			for(var moduleId in moreModules) {
 				if(__webpack_require__.o(moreModules, moduleId)) {
 					currentUpdate[moduleId] = moreModules[moduleId];
 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
 				}
 			}
 			if(runtime) currentUpdateRuntime.push(runtime);
 			if(waitingUpdateResolves[chunkId]) {
 				waitingUpdateResolves[chunkId]();
 				waitingUpdateResolves[chunkId] = undefined;
 			}
 		};
 		
 		var currentUpdateChunks;
 		var currentUpdate;
 		var currentUpdateRemovedChunks;
 		var currentUpdateRuntime;
 		function applyHandler(options) {
 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
 			currentUpdateChunks = undefined;
 			function getAffectedModuleEffects(updateModuleId) {
 				var outdatedModules = [updateModuleId];
 				var outdatedDependencies = {};
 		
 				var queue = outdatedModules.map(function (id) {
 					return {
 						chain: [id],
 						id: id
 					};
 				});
 				while (queue.length > 0) {
 					var queueItem = queue.pop();
 					var moduleId = queueItem.id;
 					var chain = queueItem.chain;
 					var module = __webpack_require__.c[moduleId];
 					if (
 						!module ||
 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
 					)
 						continue;
 					if (module.hot._selfDeclined) {
 						return {
 							type: "self-declined",
 							chain: chain,
 							moduleId: moduleId
 						};
 					}
 					if (module.hot._main) {
 						return {
 							type: "unaccepted",
 							chain: chain,
 							moduleId: moduleId
 						};
 					}
 					for (var i = 0; i < module.parents.length; i++) {
 						var parentId = module.parents[i];
 						var parent = __webpack_require__.c[parentId];
 						if (!parent) continue;
 						if (parent.hot._declinedDependencies[moduleId]) {
 							return {
 								type: "declined",
 								chain: chain.concat([parentId]),
 								moduleId: moduleId,
 								parentId: parentId
 							};
 						}
 						if (outdatedModules.indexOf(parentId) !== -1) continue;
 						if (parent.hot._acceptedDependencies[moduleId]) {
 							if (!outdatedDependencies[parentId])
 								outdatedDependencies[parentId] = [];
 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
 							continue;
 						}
 						delete outdatedDependencies[parentId];
 						outdatedModules.push(parentId);
 						queue.push({
 							chain: chain.concat([parentId]),
 							id: parentId
 						});
 					}
 				}
 		
 				return {
 					type: "accepted",
 					moduleId: updateModuleId,
 					outdatedModules: outdatedModules,
 					outdatedDependencies: outdatedDependencies
 				};
 			}
 		
 			function addAllToSet(a, b) {
 				for (var i = 0; i < b.length; i++) {
 					var item = b[i];
 					if (a.indexOf(item) === -1) a.push(item);
 				}
 			}
 		
 			// at begin all updates modules are outdated
 			// the "outdated" status can propagate to parents if they don't accept the children
 			var outdatedDependencies = {};
 			var outdatedModules = [];
 			var appliedUpdate = {};
 		
 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
 				console.warn(
 					"[HMR] unexpected require(" + module.id + ") to disposed module"
 				);
 			};
 		
 			for (var moduleId in currentUpdate) {
 				if (__webpack_require__.o(currentUpdate, moduleId)) {
 					var newModuleFactory = currentUpdate[moduleId];
 					/** @type {TODO} */
 					var result;
 					if (newModuleFactory) {
 						result = getAffectedModuleEffects(moduleId);
 					} else {
 						result = {
 							type: "disposed",
 							moduleId: moduleId
 						};
 					}
 					/** @type {Error|false} */
 					var abortError = false;
 					var doApply = false;
 					var doDispose = false;
 					var chainInfo = "";
 					if (result.chain) {
 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
 					}
 					switch (result.type) {
 						case "self-declined":
 							if (options.onDeclined) options.onDeclined(result);
 							if (!options.ignoreDeclined)
 								abortError = new Error(
 									"Aborted because of self decline: " +
 										result.moduleId +
 										chainInfo
 								);
 							break;
 						case "declined":
 							if (options.onDeclined) options.onDeclined(result);
 							if (!options.ignoreDeclined)
 								abortError = new Error(
 									"Aborted because of declined dependency: " +
 										result.moduleId +
 										" in " +
 										result.parentId +
 										chainInfo
 								);
 							break;
 						case "unaccepted":
 							if (options.onUnaccepted) options.onUnaccepted(result);
 							if (!options.ignoreUnaccepted)
 								abortError = new Error(
 									"Aborted because " + moduleId + " is not accepted" + chainInfo
 								);
 							break;
 						case "accepted":
 							if (options.onAccepted) options.onAccepted(result);
 							doApply = true;
 							break;
 						case "disposed":
 							if (options.onDisposed) options.onDisposed(result);
 							doDispose = true;
 							break;
 						default:
 							throw new Error("Unexception type " + result.type);
 					}
 					if (abortError) {
 						return {
 							error: abortError
 						};
 					}
 					if (doApply) {
 						appliedUpdate[moduleId] = newModuleFactory;
 						addAllToSet(outdatedModules, result.outdatedModules);
 						for (moduleId in result.outdatedDependencies) {
 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
 								if (!outdatedDependencies[moduleId])
 									outdatedDependencies[moduleId] = [];
 								addAllToSet(
 									outdatedDependencies[moduleId],
 									result.outdatedDependencies[moduleId]
 								);
 							}
 						}
 					}
 					if (doDispose) {
 						addAllToSet(outdatedModules, [result.moduleId]);
 						appliedUpdate[moduleId] = warnUnexpectedRequire;
 					}
 				}
 			}
 			currentUpdate = undefined;
 		
 			// Store self accepted outdated modules to require them later by the module system
 			var outdatedSelfAcceptedModules = [];
 			for (var j = 0; j < outdatedModules.length; j++) {
 				var outdatedModuleId = outdatedModules[j];
 				var module = __webpack_require__.c[outdatedModuleId];
 				if (
 					module &&
 					(module.hot._selfAccepted || module.hot._main) &&
 					// removed self-accepted modules should not be required
 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
 					// when called invalidate self-accepting is not possible
 					!module.hot._selfInvalidated
 				) {
 					outdatedSelfAcceptedModules.push({
 						module: outdatedModuleId,
 						require: module.hot._requireSelf,
 						errorHandler: module.hot._selfAccepted
 					});
 				}
 			}
 		
 			var moduleOutdatedDependencies;
 		
 			return {
 				dispose: function () {
 					currentUpdateRemovedChunks.forEach(function (chunkId) {
 						delete installedChunks[chunkId];
 					});
 					currentUpdateRemovedChunks = undefined;
 		
 					var idx;
 					var queue = outdatedModules.slice();
 					while (queue.length > 0) {
 						var moduleId = queue.pop();
 						var module = __webpack_require__.c[moduleId];
 						if (!module) continue;
 		
 						var data = {};
 		
 						// Call dispose handlers
 						var disposeHandlers = module.hot._disposeHandlers;
 						for (j = 0; j < disposeHandlers.length; j++) {
 							disposeHandlers[j].call(null, data);
 						}
 						__webpack_require__.hmrD[moduleId] = data;
 		
 						// disable module (this disables requires from this module)
 						module.hot.active = false;
 		
 						// remove module from cache
 						delete __webpack_require__.c[moduleId];
 		
 						// when disposing there is no need to call dispose handler
 						delete outdatedDependencies[moduleId];
 		
 						// remove "parents" references from all children
 						for (j = 0; j < module.children.length; j++) {
 							var child = __webpack_require__.c[module.children[j]];
 							if (!child) continue;
 							idx = child.parents.indexOf(moduleId);
 							if (idx >= 0) {
 								child.parents.splice(idx, 1);
 							}
 						}
 					}
 		
 					// remove outdated dependency from module children
 					var dependency;
 					for (var outdatedModuleId in outdatedDependencies) {
 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
 							module = __webpack_require__.c[outdatedModuleId];
 							if (module) {
 								moduleOutdatedDependencies =
 									outdatedDependencies[outdatedModuleId];
 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
 									dependency = moduleOutdatedDependencies[j];
 									idx = module.children.indexOf(dependency);
 									if (idx >= 0) module.children.splice(idx, 1);
 								}
 							}
 						}
 					}
 				},
 				apply: function (reportError) {
 					// insert new code
 					for (var updateModuleId in appliedUpdate) {
 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
 						}
 					}
 		
 					// run new runtime modules
 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
 						currentUpdateRuntime[i](__webpack_require__);
 					}
 		
 					// call accept handlers
 					for (var outdatedModuleId in outdatedDependencies) {
 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
 							var module = __webpack_require__.c[outdatedModuleId];
 							if (module) {
 								moduleOutdatedDependencies =
 									outdatedDependencies[outdatedModuleId];
 								var callbacks = [];
 								var errorHandlers = [];
 								var dependenciesForCallbacks = [];
 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
 									var dependency = moduleOutdatedDependencies[j];
 									var acceptCallback =
 										module.hot._acceptedDependencies[dependency];
 									var errorHandler =
 										module.hot._acceptedErrorHandlers[dependency];
 									if (acceptCallback) {
 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
 										callbacks.push(acceptCallback);
 										errorHandlers.push(errorHandler);
 										dependenciesForCallbacks.push(dependency);
 									}
 								}
 								for (var k = 0; k < callbacks.length; k++) {
 									try {
 										callbacks[k].call(null, moduleOutdatedDependencies);
 									} catch (err) {
 										if (typeof errorHandlers[k] === "function") {
 											try {
 												errorHandlers[k](err, {
 													moduleId: outdatedModuleId,
 													dependencyId: dependenciesForCallbacks[k]
 												});
 											} catch (err2) {
 												if (options.onErrored) {
 													options.onErrored({
 														type: "accept-error-handler-errored",
 														moduleId: outdatedModuleId,
 														dependencyId: dependenciesForCallbacks[k],
 														error: err2,
 														originalError: err
 													});
 												}
 												if (!options.ignoreErrored) {
 													reportError(err2);
 													reportError(err);
 												}
 											}
 										} else {
 											if (options.onErrored) {
 												options.onErrored({
 													type: "accept-errored",
 													moduleId: outdatedModuleId,
 													dependencyId: dependenciesForCallbacks[k],
 													error: err
 												});
 											}
 											if (!options.ignoreErrored) {
 												reportError(err);
 											}
 										}
 									}
 								}
 							}
 						}
 					}
 		
 					// Load self accepted modules
 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
 						var item = outdatedSelfAcceptedModules[o];
 						var moduleId = item.module;
 						try {
 							item.require(moduleId);
 						} catch (err) {
 							if (typeof item.errorHandler === "function") {
 								try {
 									item.errorHandler(err, {
 										moduleId: moduleId,
 										module: __webpack_require__.c[moduleId]
 									});
 								} catch (err2) {
 									if (options.onErrored) {
 										options.onErrored({
 											type: "self-accept-error-handler-errored",
 											moduleId: moduleId,
 											error: err2,
 											originalError: err
 										});
 									}
 									if (!options.ignoreErrored) {
 										reportError(err2);
 										reportError(err);
 									}
 								}
 							} else {
 								if (options.onErrored) {
 									options.onErrored({
 										type: "self-accept-errored",
 										moduleId: moduleId,
 										error: err
 									});
 								}
 								if (!options.ignoreErrored) {
 									reportError(err);
 								}
 							}
 						}
 					}
 		
 					return outdatedModules;
 				}
 			};
 		}
 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
 			if (!currentUpdate) {
 				currentUpdate = {};
 				currentUpdateRuntime = [];
 				currentUpdateRemovedChunks = [];
 				applyHandlers.push(applyHandler);
 			}
 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
 			}
 		};
 		__webpack_require__.hmrC.jsonp = function (
 			chunkIds,
 			removedChunks,
 			removedModules,
 			promises,
 			applyHandlers,
 			updatedModulesList
 		) {
 			applyHandlers.push(applyHandler);
 			currentUpdateChunks = {};
 			currentUpdateRemovedChunks = removedChunks;
 			currentUpdate = removedModules.reduce(function (obj, key) {
 				obj[key] = false;
 				return obj;
 			}, {});
 			currentUpdateRuntime = [];
 			chunkIds.forEach(function (chunkId) {
 				if (
 					__webpack_require__.o(installedChunks, chunkId) &&
 					installedChunks[chunkId] !== undefined
 				) {
 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
 					currentUpdateChunks[chunkId] = true;
 				}
 			});
 			if (__webpack_require__.f) {
 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
 					if (
 						currentUpdateChunks &&
 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
 						__webpack_require__.o(installedChunks, chunkId) &&
 						installedChunks[chunkId] !== undefined
 					) {
 						promises.push(loadUpdateChunk(chunkId));
 						currentUpdateChunks[chunkId] = true;
 					}
 				};
 			}
 		};
 		
 		__webpack_require__.hmrM = () => {
 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
 				if(response.status === 404) return; // no update available
 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
 				return response.json();
 			});
 		};
 		
 		// no on chunks loaded
 		
 		// no jsonp function
 	})();
 	

 	
 	// module cache are used so entry inlining is disabled
 	// startup
 	// Load entry module and return exports
 	var __webpack_exports__ = __webpack_require__("./src/index.js");
 	
 })()
;
//# sourceMappingURL=build.js.map