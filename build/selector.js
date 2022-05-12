/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/more.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const more = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (more);
//# sourceMappingURL=more.js.map

/***/ }),

/***/ "./includes/block-editor/blocks/selector/edit.js":
/*!*******************************************************!*\
  !*** ./includes/block-editor/blocks/selector/edit.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_flex_FlexControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/flex/FlexControls */ "./includes/library/flex/FlexControls.jsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./includes/block-editor/blocks/selector/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./includes/block-editor/blocks/selector/style.scss");

const {
  useBlockProps,
  useInnerBlocksProps
} = wp.blockEditor;




const templateOptions = {
  100: [["ospinhas/container", {}]],
  "50/50": [["ospinhas/container", {}], ["ospinhas/container", {}]],
  "33/33/33": [["ospinhas/container", {}], ["ospinhas/container", {}], ["ospinhas/container", {}]]
};
function edit(props) {
  const handleAttribute = (type, newAlign) => {
    const newOptions = {};
    newOptions[type] = newAlign;
    setAttributes(newOptions);
  };

  const handleTemplate = e => {
    setAttributes({
      template: templateOptions[e.target.innerHTML]
    });
    setTemplateUI("");
  };

  const templateOptionsUI = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "templateOptionsUI"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: handleTemplate
  }, "100"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: handleTemplate
  }, "50/50"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: handleTemplate
  }, "33/33/33"));
  const [templateUI, setTemplateUI] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(templateOptionsUI);
  const {
    template
  } = props.attributes;
  const {
    setAttributes
  } = props;
  const blockProps = useBlockProps({
    style: { ...(0,_library_flex_FlexControls__WEBPACK_IMPORTED_MODULE_1__.styles)(props.attributes)
    }
  });
  const {
    children,
    ...innerBlocksProps
  } = useInnerBlocksProps(blockProps, {
    template: template,
    templateInsertUpdatesSelection: true
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_library_flex_FlexControls__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleAttribute: handleAttribute,
    attributes: props.attributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", innerBlocksProps, templateUI, children));
}

/***/ }),

/***/ "./includes/block-editor/blocks/selector/index.js":
/*!********************************************************!*\
  !*** ./includes/block-editor/blocks/selector/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_flex_FlexControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../library/flex/FlexControls */ "./includes/library/flex/FlexControls.jsx");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./includes/block-editor/blocks/selector/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./includes/block-editor/blocks/selector/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./includes/block-editor/blocks/selector/block.json");
const {
  registerBlockType
} = wp.blocks;




const {
  name,
  ...settings
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
settings.attributes = (0,_library_flex_FlexControls__WEBPACK_IMPORTED_MODULE_0__.addAttributes)(settings.attributes); // Add Flex settings

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType(name, { ...settings,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./includes/block-editor/blocks/selector/save.js":
/*!*******************************************************!*\
  !*** ./includes/block-editor/blocks/selector/save.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_flex_FlexControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../library/flex/FlexControls */ "./includes/library/flex/FlexControls.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./includes/block-editor/blocks/selector/style.scss");

const {
  useInnerBlocksProps,
  useBlockProps
} = wp.blockEditor;


function save(props) {
  const innerBlocksProps = useInnerBlocksProps.save({ ...useBlockProps.save(),
    style: { ...(0,_library_flex_FlexControls__WEBPACK_IMPORTED_MODULE_1__.styles)(props.attributes)
    }
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}

/***/ }),

/***/ "./includes/library/Dropdown/Dropdown.jsx":
/*!************************************************!*\
  !*** ./includes/library/Dropdown/Dropdown.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more.js");

const {
  BlockControls
} = wp.blockEditor;
const {
  Toolbar,
  ToolbarDropdownMenu
} = wp.components;


const Dropdown = _ref => {
  let {
    options
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, {
    label: "Options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToolbarDropdownMenu, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
    label: "Alinhamento",
    controls: options.map(opt => ({
      title: opt.title,
      icon: opt.icon,
      onClick: opt.onClick
    }))
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./includes/library/flex/FlexControls.jsx":
/*!************************************************!*\
  !*** ./includes/library/flex/FlexControls.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAttributes": function() { return /* binding */ addAttributes; },
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../library */ "./includes/library/library.js");
/* harmony import */ var _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dropdown/Dropdown */ "./includes/library/Dropdown/Dropdown.jsx");



const flexAttributes = {
  justifyContent: {
    type: "string",
    default: "center"
  },
  alignContent: {
    type: "string",
    default: "center"
  },
  width: {
    type: "string",
    default: "100%"
  }
}; // Components



const FlexControls = _ref => {
  let {
    handleAttribute
  } = _ref;
  const justify = [{
    title: "Left",
    value: "flex-start",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    title: "Center",
    value: "center",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    title: "Right",
    value: "flex-end",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    title: "Between",
    value: "space-between",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    title: "Around",
    value: "space-around",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    title: "Evenly",
    value: "space-evenly",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }];
  const align = [{
    title: "Top",
    value: "flex-start",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    title: "Center",
    value: "center",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    title: "Bottom",
    value: "flex-end",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    title: "Stretch",
    value: "stretch",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    title: "Baseline",
    value: "baseline",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
  }];

  const createOptions = (options, onClick, attribute) => {
    return options.map(opt => ({
      title: opt.title,
      icon: opt.icon,
      onClick: () => onClick(attribute, opt.value)
    }));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: createOptions(justify, handleAttribute, "justifyContent")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: createOptions(align, handleAttribute, "alignContent")
  }));
};

const addAttributes = attributes => {
  return (0,_library__WEBPACK_IMPORTED_MODULE_1__.addPropertiesToJSON)(flexAttributes, attributes);
};
const styles = _ref2 => {
  let {
    justifyContent,
    alignContent,
    width
  } = _ref2;
  return {
    display: "flex",
    "justify-content": justifyContent,
    "align-items": alignContent,
    width: width
  };
};
/* harmony default export */ __webpack_exports__["default"] = (FlexControls);

/***/ }),

/***/ "./includes/library/library.js":
/*!*************************************!*\
  !*** ./includes/library/library.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPropertiesToJSON": function() { return /* binding */ addPropertiesToJSON; }
/* harmony export */ });
/*
 * Functions that can be reused on different parts of the code.
 */
// Add JSON object elements to another object if it doesnt already exist.
const addPropertiesToJSON = function (newProps) {
  let obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!newProps || !obj) {
    console.log("Missing parameters.");
    return 404;
  }

  for (let i = 0; i < Object.keys(newProps).length; i++) {
    const key = Object.keys(newProps)[i];
    console.log(key);
    console.log(obj[key]);

    if (obj[key]) {
      continue;
    }

    obj[key] = newProps[key];
  }

  return obj;
};

/***/ }),

/***/ "./includes/block-editor/blocks/selector/editor.scss":
/*!***********************************************************!*\
  !*** ./includes/block-editor/blocks/selector/editor.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./includes/block-editor/blocks/selector/style.scss":
/*!**********************************************************!*\
  !*** ./includes/block-editor/blocks/selector/style.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./includes/block-editor/blocks/selector/block.json":
/*!**********************************************************!*\
  !*** ./includes/block-editor/blocks/selector/block.json ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"ospinhas/selector","version":"0.1.0","title":"Container Selector","category":"widgets","description":"","supports":{"html":false,"color":{"text":true,"background":true,"link":true,"gradients":true},"spacing":{"margin":true,"padding":true}},"attributes":{"template":{"type":"array","default":[]},"justifyContent":{"type":"string","default":"center"},"alignContent":{"type":"string","default":"stretch"}},"textdomain":"create-block","editorScript":"file:../../../../build/selector.js","editorStyle":"file:../../../../build/selector.css","style":"file:../../../../build/style-selector.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"selector": 0,
/******/ 			"./style-selector": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkospinhas"] = self["webpackChunkospinhas"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-selector"], function() { return __webpack_require__("./includes/block-editor/blocks/selector/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=selector.js.map