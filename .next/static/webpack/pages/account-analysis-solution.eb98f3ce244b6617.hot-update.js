"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account-analysis-solution",{

/***/ "./utils/FetchEbooks.js":
/*!******************************!*\
  !*** ./utils/FetchEbooks.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SinglePost = (param)=>{\n    let { tags  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [featuredImage, setFeaturedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPost = async ()=>{\n            try {\n                const postResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"ebooks/\").concat(tags));\n                const postData = await postResponse.json();\n                if (postResponse.ok) {\n                    setPost(postData);\n                    // Fetch featured image information\n                    const featuredImageId = postData.featured_media;\n                    if (featuredImageId) {\n                        const featuredImageResponse = await fetch(\"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"media/\").concat(featuredImageId));\n                        const featuredImageData = await featuredImageResponse.json();\n                        if (featuredImageResponse.ok) {\n                            setFeaturedImage(featuredImageData);\n                        } else {\n                            console.error(\"Failed to fetch featured image. Status: \".concat(featuredImageResponse.status));\n                        }\n                    }\n                } else {\n                    console.error(\"Failed to fetch post. Status: \".concat(postResponse.status));\n                }\n            } catch (error) {\n                console.error(\"Error fetching post:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchPost();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-5\",\n                children: \"Ebooks\"\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"wbg-blue p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card mb-3 border-0\",\n                    style: {\n                        background: \"#D6F4F6\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"row g-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-8 text-start d-flex align-items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            class: \"card-title text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.title.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"card-text text-start\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: post.excerpt.rendered\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"ebboks/\".concat(post.slug),\n                                            className: \"pr-text text-decoration-none expand-btn text-white px-5 rounded-3\",\n                                            children: \"Download Now\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                lineNumber: 57,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"col-md-4 d-flex justify-content-center align-items-center\",\n                                children: featuredImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: featuredImage.source_url,\n                                    alt: featuredImage.alt_text,\n                                    style: {\n                                        maxWidth: \"100%\",\n                                        height: \"auto\"\n                                    },\n                                    class: \"img-fluid \",\n                                    width: 420,\n                                    height: 220\n                                }, void 0, false, {\n                                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                        lineNumber: 55,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jalal/Documents/server/Suntec-Sanjana/utils/FetchEbooks.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SinglePost, \"lIvlvx3+wWMNoWF4q5yVatb/GkA=\");\n_c = SinglePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinglePost);\nvar _c;\n$RefreshReg$(_c, \"SinglePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL0ZldGNoRWJvb2tzLmpzPzgxYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbnRhaW5lcixSb3csIENvbCxJbWFnZSxCcmVhZGNydW1iLENhcmQsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY29uZmlnRGF0YSBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcblxuXG5jb25zdCBTaW5nbGVQb3N0ID0gKHt0YWdzfSkgPT4ge1xuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtmZWF0dXJlZEltYWdlLCBzZXRGZWF0dXJlZEltYWdlXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFBvc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwb3N0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWdEYXRhLlNFUlZFUl9VUkx9ZWJvb2tzLyR7dGFnc31gKTtcbiAgICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBwb3N0UmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGlmIChwb3N0UmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBzZXRQb3N0KHBvc3REYXRhKTtcblxuICAgICAgICAgIC8vIEZldGNoIGZlYXR1cmVkIGltYWdlIGluZm9ybWF0aW9uXG4gICAgICAgICAgY29uc3QgZmVhdHVyZWRJbWFnZUlkID0gcG9zdERhdGEuZmVhdHVyZWRfbWVkaWE7XG4gICAgICAgICAgaWYgKGZlYXR1cmVkSW1hZ2VJZCkge1xuICAgICAgICAgICAgY29uc3QgZmVhdHVyZWRJbWFnZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29uZmlnRGF0YS5TRVJWRVJfVVJMfW1lZGlhLyR7ZmVhdHVyZWRJbWFnZUlkfWApO1xuICAgICAgICAgICAgY29uc3QgZmVhdHVyZWRJbWFnZURhdGEgPSBhd2FpdCBmZWF0dXJlZEltYWdlUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAoZmVhdHVyZWRJbWFnZVJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIHNldEZlYXR1cmVkSW1hZ2UoZmVhdHVyZWRJbWFnZURhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIGZlYXR1cmVkIGltYWdlLiBTdGF0dXM6ICR7ZmVhdHVyZWRJbWFnZVJlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIHBvc3QuIFN0YXR1czogJHtwb3N0UmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwb3N0OicsIGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFBvc3QoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbWItNSc+RWJvb2tzPC9oMj5cbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT0nd2JnLWJsdWUgcC0yJz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTMgYm9yZGVyLTBcIiBzdHlsZT17e2JhY2tncm91bmQ6JyNENkY0RjYnfX0+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZy0wXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggdGV4dC1zdGFydCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1zdGFydFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3QudGl0bGUucmVuZGVyZWR9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LXN0YXJ0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmV4Y2VycHQucmVuZGVyZWQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgZWJib2tzLyR7cG9zdC5zbHVnfWB9IGNsYXNzTmFtZT1cInByLXRleHQgdGV4dC1kZWNvcmF0aW9uLW5vbmUgZXhwYW5kLWJ0biB0ZXh0LXdoaXRlIHB4LTUgcm91bmRlZC0zXCI+RG93bmxvYWQgTm93PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7ZmVhdHVyZWRJbWFnZSAmJiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2ZlYXR1cmVkSW1hZ2Uuc291cmNlX3VybH1cbiAgICAgICAgICBhbHQ9e2ZlYXR1cmVkSW1hZ2UuYWx0X3RleHR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZCBcIiB3aWR0aD17NDIwfSBoZWlnaHQ9ezIyMH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPC9Db250YWluZXI+XG48Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVBvc3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJJbWFnZSIsIkJyZWFkY3J1bWIiLCJDYXJkIiwiQnV0dG9uIiwiTGluayIsImNvbmZpZ0RhdGEiLCJTaW5nbGVQb3N0IiwidGFncyIsInBvc3QiLCJzZXRQb3N0IiwiZmVhdHVyZWRJbWFnZSIsInNldEZlYXR1cmVkSW1hZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoUG9zdCIsInBvc3RSZXNwb25zZSIsImZldGNoIiwiU0VSVkVSX1VSTCIsInBvc3REYXRhIiwianNvbiIsIm9rIiwiZmVhdHVyZWRJbWFnZUlkIiwiZmVhdHVyZWRfbWVkaWEiLCJmZWF0dXJlZEltYWdlUmVzcG9uc2UiLCJmZWF0dXJlZEltYWdlRGF0YSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsInAiLCJoMiIsImNsYXNzTmFtZSIsImRpdiIsImNsYXNzIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaDUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJleGNlcnB0IiwiaHJlZiIsInNsdWciLCJpbWciLCJzcmMiLCJzb3VyY2VfdXJsIiwiYWx0IiwiYWx0X3RleHQiLCJtYXhXaWR0aCIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/FetchEbooks.js\n"));

/***/ })

});