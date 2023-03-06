"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/roll";
exports.ids = ["pages/api/roll"];
exports.modules = {

/***/ "(api)/./src/pages/api/roll.js":
/*!*******************************!*\
  !*** ./src/pages/api/roll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.JS Route\nfunction handler(req, res) {\n    const { query , method  } = req;\n    switch(method){\n        case \"GET\":\n            const roll = Math.floor(Math.random() * 6) + 1;\n            return res.status(200).json({\n                roll: roll\n            });\n        case \"POST\":\n            return res.status(200).json({\n                msg: \"Made from a POST request using SWR!\"\n            });\n        default:\n            return res.status(200).json({\n                msg: \"Some other request\"\n            });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3JvbGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdCQUFnQjtBQUNELFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLE1BQU0sRUFBQ0MsTUFBSyxFQUFFQyxPQUFNLEVBQUMsR0FBR0g7SUFFeEIsT0FBUUc7UUFDSixLQUFLO1lBQ0QsTUFBTUMsT0FBUUMsS0FBS0MsS0FBSyxDQUFFRCxLQUFLRSxNQUFNLEtBQUssS0FBTTtZQUNoRCxPQUFPTixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFDTCxNQUFNQTtZQUFJO1FBQzNDLEtBQUs7WUFDRCxPQUFPSCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFDQyxLQUFLO1lBQXFDO1FBQzNFO1lBQ0ksT0FBT1QsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBQ0MsS0FBSztZQUFvQjtJQUM5RDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZGVtby8uL3NyYy9wYWdlcy9hcGkvcm9sbC5qcz9jZDJmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuSlMgUm91dGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7cXVlcnksIG1ldGhvZH0gPSByZXE7XG5cbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlICdHRVQnOiBcbiAgICAgICAgICAgIGNvbnN0IHJvbGwgPSAgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDYpKSArIDFcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7cm9sbDogcm9sbH0pXG4gICAgICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttc2c6IFwiTWFkZSBmcm9tIGEgUE9TVCByZXF1ZXN0IHVzaW5nIFNXUiFcIn0pXG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttc2c6IFwiU29tZSBvdGhlciByZXF1ZXN0XCJ9KVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsIm1ldGhvZCIsInJvbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGF0dXMiLCJqc29uIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/roll.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/roll.js"));
module.exports = __webpack_exports__;

})();