/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"site":{"name":"harrypujols.com"},"settings":{"version":"1.0.0","mode":"system","language":"en","theme":"default"}}');

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.start.components(APP);
    const settingsInstance = new APP.start.settings(APP);
    settingsInstance.init();
  });
});


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(APP) {
    this.data = APP.data;
  }

  retrieve() {
    if (localStorage.getItem("settings")) {
      let preferences = JSON.parse(localStorage.getItem("settings"));
      console.log(preferences);
      return preferences;
    } else {
      this.store(this.data.settings);
      console.log("No settings found. Using default settings.");
      return this.data.settings;
    }
  }

  store(data) {
    localStorage.setItem("settings", JSON.stringify(data));
  }

  init() {
    this.retrieve();
  }
});


/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.resize = APP.methods.resize;
    this.character = this.element.getAttribute("data-character") || "*";
  }

  init() {
    this.updateCharacter();

    this.resize(() => {
      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.updateCharacter();
    }, 66);
  }

  updateCharacter() {
    const characterCount = Math.floor(this.width / this.characterWidth());
    const repeatedCharacters = this.character.repeat(characterCount);
    this.element.innerHTML = repeatedCharacters;
  }

  characterWidth() {
    const span = document.createElement("span");
    span.style.fontFamily = "monospace";
    span.style.visibility = "hidden";
    span.textContent = this.character;
    document.body.appendChild(span);
    const characterWidth = span.offsetWidth;
    document.body.removeChild(span);
    return characterWidth;
  }
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.height = this.element.offsetHeight;
    this.resize = APP.methods.resize;
    this.character = this.element.getAttribute("data-character") || "*";
  }

  init() {
    this.updateCharacter();

    this.resize(() => {
      this.height = this.element.offsetHeight;
      this.updateCharacter();
    }, 66);
  }

  updateCharacter() {
    const characterCount = Math.floor(this.height / this.characterHeight());
    const repeatedCharacters = this.character.repeat(characterCount);
    this.element.setAttribute("data-content", repeatedCharacters);
  }

  characterHeight() {
    const span = document.createElement("span");
    span.style.fontFamily = "monospace";
    span.style.visibility = "hidden";
    span.textContent = this.character;
    document.body.appendChild(span);
    const characterHeight = span.offsetHeight;
    document.body.removeChild(span);
    return characterHeight;
  }
});


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.resize = APP.methods.resize;
    this.character = this.element.getAttribute("data-character") || "*";
  }

  init() {
    this.updateCharacter();

    this.resize(() => {
      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.updateCharacter();
    }, 66);
  }

  updateCharacter() {
    const widthCharacterCount = Math.floor(this.width / this.characterWidth());
    const heightCharacterCount = Math.floor(
      this.height / this.characterHeight()
    );
    const repeatedWidthCharacters = this.character.repeat(widthCharacterCount);
    const repeatedHeightCharacters =
      this.character.repeat(heightCharacterCount);

    this.element.setAttribute("data-content-width", repeatedWidthCharacters);
    this.element.setAttribute("data-content-height", repeatedHeightCharacters);
  }

  characterWidth() {
    const span = document.createElement("span");
    span.style.fontFamily = "monospace";
    span.style.visibility = "hidden";
    span.textContent = this.character;
    document.body.appendChild(span);
    const characterWidth = span.offsetWidth;
    document.body.removeChild(span);
    return characterWidth;
  }

  characterHeight() {
    const span = document.createElement("span");
    span.style.fontFamily = "monospace";
    span.style.visibility = "hidden";
    span.textContent = this.character;
    document.body.appendChild(span);
    const characterHeight = span.offsetHeight;
    document.body.removeChild(span);
    return characterHeight;
  }
});


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((callback, delay = 66) => {
  var isResizing;

  window.addEventListener(
    "resize",
    () => {
      window.clearTimeout(isResizing);

      isResizing = setTimeout(() => {
        callback();
      }, delay);
    },
    false
  );
});


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.text = this.element.textContent;
    this.index = 0;
    this.typing = false;
  }

  type() {
    if (this.index < this.text.length) {
      this.typing = true;
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), 100);
    } else {
      this.typing = false;
    }
  }

  init() {
    this.element.textContent = "";
    this.type();
  }
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
/* harmony import */ var _app_run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _methods_breakpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _components_vborder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _components_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _methods_resize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _components_typewriter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
const FRAMEWORK = {};
















((window, APP) => {
  APP.components = {
    breakpoint: _methods_breakpoint__WEBPACK_IMPORTED_MODULE_4__["default"],
    render: _components_render__WEBPACK_IMPORTED_MODULE_5__["default"],
    border: _components_border__WEBPACK_IMPORTED_MODULE_6__["default"],
    typewriter: _components_typewriter__WEBPACK_IMPORTED_MODULE_10__["default"],
    vborder: _components_vborder__WEBPACK_IMPORTED_MODULE_7__["default"],
    box: _components_box__WEBPACK_IMPORTED_MODULE_8__["default"],
  };

  APP.start = {
    components: _app_components__WEBPACK_IMPORTED_MODULE_3__["default"],
    run: _app_run__WEBPACK_IMPORTED_MODULE_1__["default"],
    settings: _app_settings__WEBPACK_IMPORTED_MODULE_2__["default"],
  };

  APP.methods = {
    resize: _methods_resize__WEBPACK_IMPORTED_MODULE_9__["default"],
    breakpoint: _methods_breakpoint__WEBPACK_IMPORTED_MODULE_4__["default"],
    resize: _methods_resize__WEBPACK_IMPORTED_MODULE_9__["default"],
  };

  APP.data = _data_data__WEBPACK_IMPORTED_MODULE_0__;

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);

})();

/******/ })()
;