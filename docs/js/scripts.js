/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"site":{"name":"Alchemy"},"signs":[{"id":"0","element":"copper","planet":"venus","symbol":"&#9792;"},{"id":"1","element":"silver","planet":"the moon","symbol":"&#9789;"},{"id":"2","element":"iron","planet":"mars","symbol":"&#9794;"},{"id":"3","element":"mercury","planet":"mercury","symbol":"&#9791;"},{"id":"4","element":"zinc","planet":"neptune","symbol":"&#9798;"},{"id":"5","element":"tin","planet":"jupiter","symbol":"&#9795;"},{"id":"6","element":"lead","planet":"saturn","symbol":"&#9796;"},{"id":"7","element":"platinum","planet":"the earth","symbol":"&#9793;"},{"id":"8","element":"nickel","planet":"uranus","symbol":"&#9797;"},{"id":"9","element":"gold","planet":"the sun","symbol":"&#9737;"}]}');

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (( APP ) => {
  let components = document.querySelectorAll('[data-js]')
  components.forEach(( component ) => {
    Object.entries( APP.components ).forEach(( entry ) => {
      let [key, value] = entry
      if ( key == component.dataset.js ) {
        let directive = new value( component, APP )
        directive.init()
      }
    })
  })
});


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return   window.getComputedStyle( document.querySelector('body'), ':before')
          .getPropertyValue('content').replace(/\"/g, '')
});


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((args) => {
  const data = args.data
  let render = MicroTemplate(args.template);

  function MicroTemplate(template) {
    return new Function(
      "data",
      "var output=" +
      JSON.stringify(template)
      .replace(/{{ (.+?) }}/g, '"+($1)+"')
      .replace(/{%(.+?)%}/g, '";$1\noutput+="') +
      ";return output;"
    );
  }

  return render(data);
});

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.components.components(APP);
  });
});


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_breakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _app_run__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
const FRAMEWORK = {};









((window, APP) => {
  APP.components = {
    components: _components_components__WEBPACK_IMPORTED_MODULE_1__["default"],
    breakpoint: _components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"],
    render: _components_render__WEBPACK_IMPORTED_MODULE_3__["default"],
  };

  APP.start = {
    run: _app_run__WEBPACK_IMPORTED_MODULE_4__["default"],
  };

  APP.data = _data_data__WEBPACK_IMPORTED_MODULE_0__;

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);

})();

/******/ })()
;