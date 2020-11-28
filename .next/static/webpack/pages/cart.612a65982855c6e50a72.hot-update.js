webpackHotUpdate_N_E("pages/cart",{

/***/ "./src/components/Increment/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Increment/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Increment/styles.ts\");\n\n\nvar _jsxFileName = \"/home/priscilla/www/NEW_DIGITAL_PROGRAM/frontend-ecommerce-qrcode/src/components/Increment/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Increment = function Increment(_ref) {\n  _s();\n\n  var initial = _ref.initial,\n      _ref$max = _ref.max,\n      max = _ref$max === void 0 ? 100 : _ref$max,\n      _ref$min = _ref.min,\n      min = _ref$min === void 0 ? 0 : _ref$min;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(parseInt(initial)),\n      quantity = _useState[0],\n      setQuantity = _useState[1];\n\n  function increment() {\n    if (quantity < max) {\n      var sum = quantity + 1;\n      setQuantity(sum);\n    }\n  }\n\n  function decrement() {\n    if (quantity > min) {\n      var subtract = quantity - 1;\n      setQuantity(subtract);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: function onClick() {\n        return increment();\n      },\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: quantity\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: function onClick() {\n        return decrement();\n      },\n      children: \"-\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Increment, \"Msm3GikxZZmEpvE4EoWz9tsvM2U=\");\n\n_c = Increment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"memo\"])(Increment));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Increment\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5jcmVtZW50L2luZGV4LnRzeD9mY2QwIl0sIm5hbWVzIjpbIkluY3JlbWVudCIsImluaXRpYWwiLCJtYXgiLCJtaW4iLCJ1c2VTdGF0ZSIsInBhcnNlSW50IiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImluY3JlbWVudCIsInN1bSIsImRlY3JlbWVudCIsInN1YnRyYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFVQSxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQyxPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxPQUFrQyxRQUFsQ0EsT0FBa0M7QUFBQSxzQkFBekJDLEdBQXlCO0FBQUEsTUFBekJBLEdBQXlCLHlCQUFuQixHQUFtQjtBQUFBLHNCQUFkQyxHQUFjO0FBQUEsTUFBZEEsR0FBYyx5QkFBUixDQUFROztBQUFBLGtCQUMvQ0Msc0RBQVEsQ0FBQ0MsUUFBUSxDQUFDSixPQUFELENBQVQsQ0FEdUM7QUFBQSxNQUN4RUssUUFEd0U7QUFBQSxNQUM5REMsV0FEOEQ7O0FBRy9FLFdBQVNDLFNBQVQsR0FBcUI7QUFDbkIsUUFBS0YsUUFBRCxHQUFhSixHQUFqQixFQUFzQjtBQUNwQixVQUFJTyxHQUFHLEdBQUdILFFBQVEsR0FBRyxDQUFyQjtBQUNBQyxpQkFBVyxDQUFDRSxHQUFELENBQVg7QUFDRDtBQUNGOztBQUVELFdBQVNDLFNBQVQsR0FBcUI7QUFDbkIsUUFBSUosUUFBUSxHQUFHSCxHQUFmLEVBQW9CO0FBQ2xCLFVBQUlRLFFBQVEsR0FBSUwsUUFBRCxHQUFhLENBQTVCO0FBQ0FDLGlCQUFXLENBQUNJLFFBQUQsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQsc0JBQ0UscUVBQUMsaURBQUQ7QUFBQSw0QkFDRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRTtBQUFBLGVBQU1ILFNBQVMsRUFBZjtBQUFBLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFJRjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFO0FBQUEsZUFBTUksU0FBUyxFQUFmO0FBQUEsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBeEJEOztHQUFNVixTOztLQUFBQSxTO0FBMEJTLGtGQUFBWSxrREFBSSxDQUFDWixTQUFELENBQW5CIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSW5jcmVtZW50L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuaW50ZXJmYWNlIEluY3JlbWVudFByb3BzIHtcbiAgLy8gdGl0bGU6IHN0cmluZztcbiAgaW5pdGlhbD86IGFueTtcbiAgbWF4PzogbnVtYmVyO1xuICBtaW4/OiBudW1iZXI7XG4gIHZlcnRpY2FsPzogYm9vbGVhbjtcbn1cblxuY29uc3QgSW5jcmVtZW50OiBSZWFjdC5GQzxJbmNyZW1lbnRQcm9wcz4gPSAoeyBpbml0aWFsLCBtYXggPSAxMDAsIG1pbiA9IDAgfSkgPT4ge1xuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKHBhcnNlSW50KGluaXRpYWwpKTtcbiAgXG4gIGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgICBpZiAoKHF1YW50aXR5KSA8IG1heCkge1xuICAgICAgbGV0IHN1bSA9IHF1YW50aXR5ICsgMTtcbiAgICAgIHNldFF1YW50aXR5KHN1bSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjcmVtZW50KCkge1xuICAgIGlmIChxdWFudGl0eSA+IG1pbikge1xuICAgICAgbGV0IHN1YnRyYWN0ID0gKHF1YW50aXR5KSAtIDE7XG4gICAgICBzZXRRdWFudGl0eShzdWJ0cmFjdCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyID5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGluY3JlbWVudCgpfT4rPC9idXR0b24+XG4gICAgICA8cD57cXVhbnRpdHl9PC9wPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gZGVjcmVtZW50KCl9Pi08L2J1dHRvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhJbmNyZW1lbnQpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Increment/index.tsx\n");

/***/ })

})