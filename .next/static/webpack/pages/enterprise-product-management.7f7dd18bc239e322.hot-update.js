"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/enterprise-product-management",{

/***/ "./utils/FetchInsights.js":
/*!********************************!*\
  !*** ./utils/FetchInsights.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Insights(param) {\n    let { tags  } = param;\n    _s();\n    const [allInsights, setInsights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [heading, setHeading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchInsights = async ()=>{\n        let url = \"\";\n        url = \"\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.SERVER_URL, \"all-insights?tag=\").concat(tags);\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            console.log(data.length);\n            setInsights(data);\n            if (data.length > 1) {\n                setHeading(true);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchInsights();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        className: \"mb-5 mt-5 text-center\",\n        id: \"insights\",\n        children: [\n            heading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"fs-1 txt-dark-purple\",\n                children: \"Further Reading\"\n            }, void 0, false, {\n                fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Our Latest Insights\"\n            }, void 0, false, {\n                fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                    className: \"center\",\n                    children: allInsights.map((post)=>{\n                        //console.log(post);\n                        const Type = post[\"type\"];\n                        const Pslug = post[\"slug\"];\n                        let Links;\n                        if (Type == \"page\") {\n                            Links = Pslug;\n                        } else {\n                            Links = Type + \"/\" + Pslug;\n                        }\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                            sm: 6,\n                            lg: 4,\n                            xs: 6,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: Links,\n                                className: \"pr-text text-decoration-none\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Img, {\n                                            variant: \"top\",\n                                            src: post[\"featured_img_src\"]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {\n                                            className: \"text-start\",\n                                            style: {\n                                                height: 6 + \"em\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"badge text-bg-warning mb-2\",\n                                                    children: Type\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Title, {\n                                                    children: post[\"title\"]\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {\n                                            className: \"text-start mt-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Link, {\n                                                className: \"readmore\",\n                                                children: \"Read More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this)\n                        }, post[\"id\"], false, {\n                            fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shubhamshree/Desktop/iVista-Projects/sanjan-suntec/utils/FetchInsights.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Insights, \"Yn0sHO1YCdaa57DMnWWFl62OG2M=\");\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9GZXRjaEluc2lnaHRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQVNEO0FBQ21CO0FBQ2Y7QUFDVztBQUV2QyxTQUFTWSxTQUFTLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSOztJQUNoQixNQUFNLENBQUNDLGFBQWFDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUM5QyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNUyxnQkFBZ0IsVUFBWTtRQUNoQyxJQUFJQyxNQUFNO1FBQ1ZBLE1BQU0sR0FBNENOLE9BQXpDRixvREFBcUIsRUFBQyxxQkFBd0IsT0FBTEU7UUFDbEQsSUFBSTtZQUNGLE1BQU1RLFdBQVcsTUFBTUMsTUFBTUg7WUFDN0IsTUFBTUksT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDQyxRQUFRQyxHQUFHLENBQUNILEtBQUtJLE1BQU07WUFDdkJaLFlBQVlRO1lBQ1osSUFBSUEsS0FBS0ksTUFBTSxHQUFHLEdBQUc7Z0JBQ25CVixXQUFXLElBQUk7WUFDakIsQ0FBQztRQUNILEVBQUUsT0FBT1csT0FBTztZQUNkSCxRQUFRQyxHQUFHLENBQUNFO1FBQ2Q7SUFDRjtJQUNBcEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkVTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDakIsc0RBQVNBO1FBQUM0QixXQUFVO1FBQXdCQyxJQUFHOztZQUM3Q2Qsd0JBQ0MsOERBQUNlO2dCQUFHRixXQUFVOzBCQUF1Qjs7Ozs7cUNBRXJDLDhEQUFDRTswQkFBRzs7Ozs7b0JBQ0w7MEJBQ0QsOERBQUM5QixzREFBU0E7Z0JBQUM0QixXQUFVOzBCQUNuQiw0RUFBQzNCLGdEQUFHQTtvQkFBQzJCLFdBQVU7OEJBQ1pmLFlBQVlrQixHQUFHLENBQUMsQ0FBQ0MsT0FBUzt3QkFDekIsb0JBQW9CO3dCQUNwQixNQUFNQyxPQUFPRCxJQUFJLENBQUMsT0FBTzt3QkFDekIsTUFBTUUsUUFBUUYsSUFBSSxDQUFDLE9BQU87d0JBQzFCLElBQUlHO3dCQUNKLElBQUlGLFFBQVEsUUFBUTs0QkFDbEJFLFFBQVFEO3dCQUNWLE9BQU87NEJBQ0xDLFFBQVFGLE9BQU8sTUFBTUM7d0JBQ3ZCLENBQUM7d0JBQ0QscUJBQ0UsOERBQUNoQyxnREFBR0E7NEJBQWtCa0MsSUFBSTs0QkFBR0MsSUFBSTs0QkFBR0MsSUFBSTs0QkFBR0MsSUFBSTtzQ0FDN0MsNEVBQUM5QixrREFBSUE7Z0NBQUMrQixNQUFNTDtnQ0FBT1AsV0FBVTswQ0FDM0IsNEVBQUN2QixpREFBSUE7O3NEQUNILDhEQUFDQSxxREFBUTs0Q0FBQ3FDLFNBQVE7NENBQU1DLEtBQUtYLElBQUksQ0FBQyxtQkFBbUI7Ozs7OztzREFDckQsOERBQUMzQixzREFBUzs0Q0FDUnVCLFdBQVU7NENBQ1ZpQixPQUFPO2dEQUFFQyxRQUFRLElBQUk7NENBQUs7OzhEQUUxQiw4REFBQ0M7b0RBQUtuQixXQUFVOzhEQUE4Qks7Ozs7Ozs4REFDOUMsOERBQUM1Qix1REFBVTs4REFBRTJCLElBQUksQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7c0RBRTVCLDhEQUFDM0Isc0RBQVM7NENBQUN1QixXQUFVO3NEQUNuQiw0RUFBQ3ZCLHNEQUFTO2dEQUFDdUIsV0FBVTswREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFaOUJJLElBQUksQ0FBQyxLQUFLOzs7OztvQkFrQnhCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBbEVTckI7S0FBQUE7QUFvRVQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvRmV0Y2hJbnNpZ2h0cy5qcz83YTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIEltYWdlLFxuICBCcmVhZGNydW1iLFxuICBDYXJkLFxuICBCdXR0b24sXG59IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjb25maWdEYXRhIGZyb20gJy4uL2NvbmZpZy5qc29uJ1xuXG5mdW5jdGlvbiBJbnNpZ2h0cyh7IHRhZ3MgfSkge1xuICBjb25zdCBbYWxsSW5zaWdodHMsIHNldEluc2lnaHRzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaGVhZGluZywgc2V0SGVhZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBmZXRjaEluc2lnaHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB1cmwgPSAnJ1xuICAgIHVybCA9IGAke2NvbmZpZ0RhdGEuU0VSVkVSX1VSTH1hbGwtaW5zaWdodHM/dGFnPSR7dGFnc31gXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgY29uc29sZS5sb2coZGF0YS5sZW5ndGgpXG4gICAgICBzZXRJbnNpZ2h0cyhkYXRhKVxuICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgICBzZXRIZWFkaW5nKHRydWUpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoSW5zaWdodHMoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWItNSBtdC01IHRleHQtY2VudGVyXCIgaWQ9XCJpbnNpZ2h0c1wiPlxuICAgICAge2hlYWRpbmcgPyAoXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmcy0xIHR4dC1kYXJrLXB1cnBsZVwiPkZ1cnRoZXIgUmVhZGluZzwvaDI+XG4gICAgICApIDogKFxuICAgICAgICA8aDI+T3VyIExhdGVzdCBJbnNpZ2h0czwvaDI+XG4gICAgICApfVxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAge2FsbEluc2lnaHRzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwb3N0KTtcbiAgICAgICAgICAgIGNvbnN0IFR5cGUgPSBwb3N0Wyd0eXBlJ11cbiAgICAgICAgICAgIGNvbnN0IFBzbHVnID0gcG9zdFsnc2x1ZyddXG4gICAgICAgICAgICBsZXQgTGlua3NcbiAgICAgICAgICAgIGlmIChUeXBlID09ICdwYWdlJykge1xuICAgICAgICAgICAgICBMaW5rcyA9IFBzbHVnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBMaW5rcyA9IFR5cGUgKyAnLycgKyBQc2x1Z1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENvbCBrZXk9e3Bvc3RbJ2lkJ119IHNtPXs2fSBsZz17NH0geHM9ezZ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtMaW5rc30gY2xhc3NOYW1lPVwicHItdGV4dCB0ZXh0LWRlY29yYXRpb24tbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtwb3N0WydmZWF0dXJlZF9pbWdfc3JjJ119IC8+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHlcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDYgKyAnZW0nIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSB0ZXh0LWJnLXdhcm5pbmcgbWItMlwiPntUeXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57cG9zdFsndGl0bGUnXX08L0NhcmQuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT1cInRleHQtc3RhcnQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkxpbmsgY2xhc3NOYW1lPVwicmVhZG1vcmVcIj5SZWFkIE1vcmU8L0NhcmQuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiSW1hZ2UiLCJCcmVhZGNydW1iIiwiQ2FyZCIsIkJ1dHRvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsImNvbmZpZ0RhdGEiLCJJbnNpZ2h0cyIsInRhZ3MiLCJhbGxJbnNpZ2h0cyIsInNldEluc2lnaHRzIiwiaGVhZGluZyIsInNldEhlYWRpbmciLCJmZXRjaEluc2lnaHRzIiwidXJsIiwiU0VSVkVSX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJlcnJvciIsImNsYXNzTmFtZSIsImlkIiwiaDIiLCJtYXAiLCJwb3N0IiwiVHlwZSIsIlBzbHVnIiwiTGlua3MiLCJzbSIsImxnIiwieHMiLCJtZCIsImhyZWYiLCJJbWciLCJ2YXJpYW50Iiwic3JjIiwiQm9keSIsInN0eWxlIiwiaGVpZ2h0Iiwic3BhbiIsIlRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/FetchInsights.js\n"));

/***/ })

});