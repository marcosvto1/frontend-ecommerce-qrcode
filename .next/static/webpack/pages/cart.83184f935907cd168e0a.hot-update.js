webpackHotUpdate_N_E("pages/cart",{

/***/ "./src/components/Increment/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Increment/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Increment/styles.ts\");\n\n\nvar _jsxFileName = \"/home/priscilla/www/NEW_DIGITAL_PROGRAM/frontend-ecommerce-qrcode/src/components/Increment/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Increment = function Increment(_ref) {\n  _s();\n\n  var initial = _ref.initial,\n      _ref$max = _ref.max,\n      max = _ref$max === void 0 ? 100 : _ref$max,\n      _ref$min = _ref.min,\n      min = _ref$min === void 0 ? 0 : _ref$min;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(parseInt(initial)),\n      quantity = _useState[0],\n      setQuantity = _useState[1];\n\n  function increment() {\n    if (quantity < max) {\n      var sum = quantity + 1;\n      setQuantity(quantity + 1);\n    }\n  }\n\n  function decrement() {\n    if (quantity > min) {\n      var subtract = quantity - 1;\n      setQuantity(subtract);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: function onClick() {\n        return increment();\n      },\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: quantity\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: function onClick() {\n        return decrement();\n      },\n      children: \"-\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Increment, \"Msm3GikxZZmEpvE4EoWz9tsvM2U=\");\n\n_c = Increment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"memo\"])(Increment));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Increment\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5jcmVtZW50L2luZGV4LnRzeD9mY2QwIl0sIm5hbWVzIjpbIkluY3JlbWVudCIsImluaXRpYWwiLCJtYXgiLCJtaW4iLCJ1c2VTdGF0ZSIsInBhcnNlSW50IiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImluY3JlbWVudCIsInN1bSIsImRlY3JlbWVudCIsInN1YnRyYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFVQSxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7QUFBQSxzQkFBekJDLEdBQXlCO0FBQUEsTUFBekJBLEdBQXlCLHlCQUFuQixHQUFtQjtBQUFBLHNCQUFkQyxHQUFjO0FBQUEsTUFBZEEsR0FBYyx5QkFBUixDQUFROztBQUFBLGtCQUMvQ0Msc0RBQVEsQ0FBQ0MsUUFBUSxDQUFDSixPQUFELENBQVQsQ0FEdUM7QUFBQSxNQUN4RUssUUFEd0U7QUFBQSxNQUM5REMsV0FEOEQ7O0FBRy9FLFdBQVNDLFNBQVQsR0FBcUI7QUFDbkIsUUFBS0YsUUFBRCxHQUFhSixHQUFqQixFQUFzQjtBQUNwQixVQUFJTyxHQUFHLEdBQUdILFFBQVEsR0FBRyxDQUFyQjtBQUNBQyxpQkFBVyxDQUFDRCxRQUFRLEdBQUcsQ0FBWixDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTSSxTQUFULEdBQXFCO0FBQ25CLFFBQUlKLFFBQVEsR0FBR0gsR0FBZixFQUFvQjtBQUNsQixVQUFJUSxRQUFRLEdBQUlMLFFBQUQsR0FBYSxDQUE1QjtBQUNBQyxpQkFBVyxDQUFDSSxRQUFELENBQVg7QUFDRDtBQUNGOztBQUVELHNCQUNFLHFFQUFDLGlEQUFEO0FBQUEsNEJBQ0U7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUU7QUFBQSxlQUFNSCxTQUFTLEVBQWY7QUFBQSxPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRTtBQUFBLGVBQU1JLFNBQVMsRUFBZjtBQUFBLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXhCRDs7R0FBTVYsUzs7S0FBQUEsUztBQTBCUyxrRkFBQVksa0RBQUksQ0FBQ1osU0FBRCxDQUFuQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0luY3JlbWVudC9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBJbmNyZW1lbnRQcm9wcyB7XG4gIC8vIHRpdGxlOiBzdHJpbmc7XG4gIGluaXRpYWw/OiBhbnk7XG4gIG1heD86IG51bWJlcjtcbiAgbWluPzogbnVtYmVyO1xuICB2ZXJ0aWNhbD86IGJvb2xlYW47XG59XG5cbmNvbnN0IEluY3JlbWVudDogUmVhY3QuRkM8SW5jcmVtZW50UHJvcHM+ID0gKHsgaW5pdGlhbCwgbWF4ID0gMTAwLCBtaW4gPSAwIH0pID0+IHtcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZShwYXJzZUludChpbml0aWFsKSk7XG4gIFxuICBmdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gICAgaWYgKChxdWFudGl0eSkgPCBtYXgpIHtcbiAgICAgIGxldCBzdW0gPSBxdWFudGl0eSArIDE7XG4gICAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY3JlbWVudCgpIHtcbiAgICBpZiAocXVhbnRpdHkgPiBtaW4pIHtcbiAgICAgIGxldCBzdWJ0cmFjdCA9IChxdWFudGl0eSkgLSAxO1xuICAgICAgc2V0UXVhbnRpdHkoc3VidHJhY3QpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciA+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBpbmNyZW1lbnQoKX0+KzwvYnV0dG9uPlxuICAgICAgPHA+e3F1YW50aXR5fTwvcD5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGRlY3JlbWVudCgpfT4tPC9idXR0b24+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSW5jcmVtZW50KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Increment/index.tsx\n");

/***/ })

})