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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CountryDetection)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Countries_Emea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Countries/Emea */ \"./utils/Countries/Emea.js\");\n/* harmony import */ var _utils_Countries_Apac__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Countries/Apac */ \"./utils/Countries/Apac.js\");\n\n\n\n\nfunction CountryDetection() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [currentCountry, setCurrentCountry] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [ip, setIp] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [region, setRegion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"https://api.ipify.org?format=json\");\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch IP\");\n                }\n                const data = await response.json();\n                setIp(data.ip);\n                const countryResponse = await fetch(`https://ipapi.co/${data.ip}/country_name/`);\n                if (!countryResponse.ok) {\n                    throw new Error(\"Failed to fetch country name\");\n                }\n                const countryData = await countryResponse.text();\n                console.log(countryData);\n                setCurrentCountry(countryData);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (_utils_Countries_Emea__WEBPACK_IMPORTED_MODULE_2__[\"default\"].includes(currentCountry.trim())) {\n            //setRegion('EMEA');\n            router.push(\"/en-gb\");\n        }\n        if (_utils_Countries_Apac__WEBPACK_IMPORTED_MODULE_3__[\"default\"].includes(currentCountry.trim())) {\n            //setRegion('en-in');\n            router.push(\"/en-in\");\n        } else {\n            //setRegion('Others');\n            router.push(\"/en-in\");\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ1c7QUFDQTtBQUVwQyxTQUFTSyxtQkFBbUI7SUFDekMsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDUSxJQUFJQyxNQUFNLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUE7SUFDdENELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNYSxZQUFZLFVBQVk7WUFDNUIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU0sc0JBQXNCO2dCQUN4QyxDQUFDO2dCQUNELE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFDaENULE1BQU1RLEtBQUtULEVBQUU7Z0JBRWIsTUFBTVcsa0JBQWtCLE1BQU1MLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRUcsS0FBS1QsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDVyxnQkFBZ0JKLEVBQUUsRUFBRTtvQkFDdkIsTUFBTSxJQUFJQyxNQUFNLGdDQUFnQztnQkFDbEQsQ0FBQztnQkFDQyxNQUFNSSxjQUFjLE1BQU1ELGdCQUFnQkUsSUFBSTtnQkFDOUNDLFFBQVFDLEdBQUcsQ0FBQ0g7Z0JBRVpiLGtCQUFrQmE7WUFDdEIsRUFBRSxPQUFPSSxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBSUFaO0lBQ0YsR0FBRyxFQUFFO0lBRUhiLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJRyxzRUFBc0IsQ0FBQ0ksZUFBZW9CLElBQUksS0FBSztZQUNqRCxvQkFBb0I7WUFDcEJyQixPQUFPc0IsSUFBSSxDQUFDO1FBQ1osQ0FBQztRQUNELElBQUl4QixzRUFBc0IsQ0FBQ0csZUFBZW9CLElBQUksS0FBSztZQUNqRCxxQkFBcUI7WUFDckJyQixPQUFPc0IsSUFBSSxDQUFDO1FBQ2hCLE9BQ0s7WUFDRCxzQkFBc0I7WUFDdEJ0QixPQUFPc0IsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNQO0FBRUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1bnRlYy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZW1lYUNvdW50cmllcyBmcm9tICcuLi91dGlscy9Db3VudHJpZXMvRW1lYSdcbmltcG9ydCBBUEFDQ291bnRyaWVzIGZyb20gJy4uL3V0aWxzL0NvdW50cmllcy9BcGFjJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudHJ5RGV0ZWN0aW9uKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2N1cnJlbnRDb3VudHJ5LCBzZXRDdXJyZW50Q291bnRyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lwLCBzZXRJcF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3JlZ2lvbiwgc2V0UmVnaW9uXSA9IHVzZVN0YXRlKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuaXBpZnkub3JnP2Zvcm1hdD1qc29uJyk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBJUCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldElwKGRhdGEuaXApO1xuXG4gICAgICAgIGNvbnN0IGNvdW50cnlSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2lwYXBpLmNvLyR7ZGF0YS5pcH0vY291bnRyeV9uYW1lL2ApO1xuICAgICAgICBpZiAoIWNvdW50cnlSZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGNvdW50cnkgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgICAgY29uc3QgY291bnRyeURhdGEgPSBhd2FpdCBjb3VudHJ5UmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50cnlEYXRhKVxuXG4gICAgICAgICAgc2V0Q3VycmVudENvdW50cnkoY291bnRyeURhdGEpOyAgICAgIFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICAgIFxuICAgIFxuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgXG4gICAgICAgIGlmIChlbWVhQ291bnRyaWVzLmluY2x1ZGVzKGN1cnJlbnRDb3VudHJ5LnRyaW0oKSkpIHtcbiAgICAgICAgICAvL3NldFJlZ2lvbignRU1FQScpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKCcvZW4tZ2InKTtcbiAgICAgICAgICB9IFxuICAgICAgICAgIGlmIChBUEFDQ291bnRyaWVzLmluY2x1ZGVzKGN1cnJlbnRDb3VudHJ5LnRyaW0oKSkpIHtcbiAgICAgICAgICAgIC8vc2V0UmVnaW9uKCdlbi1pbicpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9lbi1pbicpO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vc2V0UmVnaW9uKCdPdGhlcnMnKTtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZW4taW4nKTtcbiAgICAgICAgICB9XG4gICAgfSlcbiAgICBcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJlbWVhQ291bnRyaWVzIiwiQVBBQ0NvdW50cmllcyIsIkNvdW50cnlEZXRlY3Rpb24iLCJyb3V0ZXIiLCJjdXJyZW50Q291bnRyeSIsInNldEN1cnJlbnRDb3VudHJ5IiwiaXAiLCJzZXRJcCIsInJlZ2lvbiIsInNldFJlZ2lvbiIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJjb3VudHJ5UmVzcG9uc2UiLCJjb3VudHJ5RGF0YSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJpbmNsdWRlcyIsInRyaW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utils/Countries/Apac.js":
/*!*********************************!*\
  !*** ./utils/Countries/Apac.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst APACCountries = [\n    \"Afghanistan\",\n    \"Australia\",\n    \"Bangladesh\",\n    \"Bhutan\",\n    \"Brunei\",\n    \"Cambodia\",\n    \"China\",\n    \"Fiji\",\n    \"India\",\n    \"Indonesia\",\n    \"Japan\",\n    \"Kiribati\",\n    \"Laos\",\n    \"Malaysia\",\n    \"Maldives\",\n    \"Marshall Islands\",\n    \"Micronesia\",\n    \"Mongolia\",\n    \"Myanmar (Burma)\",\n    \"Nauru\",\n    \"Nepal\",\n    \"New Zealand\",\n    \"North Korea\",\n    \"Pakistan\",\n    \"Palau\",\n    \"Papua New Guinea\",\n    \"Philippines\",\n    \"Samoa\",\n    \"Singapore\",\n    \"Solomon Islands\",\n    \"South Korea\",\n    \"Sri Lanka\",\n    \"Taiwan\",\n    \"Thailand\",\n    \"Timor-Leste\",\n    \"Tonga\",\n    \"Tuvalu\",\n    \"Vanuatu\",\n    \"Vietnam\"\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APACCountries);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9Db3VudHJpZXMvQXBhYy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsZ0JBQWdCO0lBRWxCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUVIO0FBRUQsaUVBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW50ZWMvLi91dGlscy9Db3VudHJpZXMvQXBhYy5qcz8xM2FkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQQUNDb3VudHJpZXMgPSBbXG5cbiAgICBcIkFmZ2hhbmlzdGFuXCIsXG4gICAgXCJBdXN0cmFsaWFcIixcbiAgICBcIkJhbmdsYWRlc2hcIixcbiAgICBcIkJodXRhblwiLFxuICAgIFwiQnJ1bmVpXCIsXG4gICAgXCJDYW1ib2RpYVwiLFxuICAgIFwiQ2hpbmFcIixcbiAgICBcIkZpamlcIixcbiAgICBcIkluZGlhXCIsXG4gICAgXCJJbmRvbmVzaWFcIixcbiAgICBcIkphcGFuXCIsXG4gICAgXCJLaXJpYmF0aVwiLFxuICAgIFwiTGFvc1wiLFxuICAgIFwiTWFsYXlzaWFcIixcbiAgICBcIk1hbGRpdmVzXCIsXG4gICAgXCJNYXJzaGFsbCBJc2xhbmRzXCIsXG4gICAgXCJNaWNyb25lc2lhXCIsXG4gICAgXCJNb25nb2xpYVwiLFxuICAgIFwiTXlhbm1hciAoQnVybWEpXCIsXG4gICAgXCJOYXVydVwiLFxuICAgIFwiTmVwYWxcIixcbiAgICBcIk5ldyBaZWFsYW5kXCIsXG4gICAgXCJOb3J0aCBLb3JlYVwiLFxuICAgIFwiUGFraXN0YW5cIixcbiAgICBcIlBhbGF1XCIsXG4gICAgXCJQYXB1YSBOZXcgR3VpbmVhXCIsXG4gICAgXCJQaGlsaXBwaW5lc1wiLFxuICAgIFwiU2Ftb2FcIixcbiAgICBcIlNpbmdhcG9yZVwiLFxuICAgIFwiU29sb21vbiBJc2xhbmRzXCIsXG4gICAgXCJTb3V0aCBLb3JlYVwiLFxuICAgIFwiU3JpIExhbmthXCIsXG4gICAgXCJUYWl3YW5cIixcbiAgICBcIlRoYWlsYW5kXCIsXG4gICAgXCJUaW1vci1MZXN0ZVwiLFxuICAgIFwiVG9uZ2FcIixcbiAgICBcIlR1dmFsdVwiLFxuICAgIFwiVmFudWF0dVwiLFxuICAgIFwiVmlldG5hbVwiLFxuICAgIC8vIEFkZCBtb3JlIGNvdW50cmllcyBhcyBuZWVkZWRcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEFQQUNDb3VudHJpZXM7XG4gIFxuIl0sIm5hbWVzIjpbIkFQQUNDb3VudHJpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Countries/Apac.js\n");

/***/ }),

/***/ "./utils/Countries/Emea.js":
/*!*********************************!*\
  !*** ./utils/Countries/Emea.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst EMEACountries = [\n    \"Algeria\",\n    \"Angola\",\n    \"Benin\",\n    \"Botswana\",\n    \"Burkina Faso\",\n    \"Burundi\",\n    \"Cameroon\",\n    \"Cape Verde\",\n    \"Central African Republic\",\n    \"Chad\",\n    \"Comoros\",\n    \"Democratic Republic of the Congo\",\n    \"Djibouti\",\n    \"Egypt\",\n    \"Equatorial Guinea\",\n    \"Eritrea\",\n    \"Eswatini\",\n    \"Ethiopia\",\n    \"Gabon\",\n    \"Gambia\",\n    \"Ghana\",\n    \"Guinea\",\n    \"Guinea-Bissau\",\n    \"Ivory Coast\",\n    \"Kenya\",\n    \"Lesotho\",\n    \"Liberia\",\n    \"Libya\",\n    \"Madagascar\",\n    \"Malawi\",\n    \"Mali\",\n    \"Mauritania\",\n    \"Mauritius\",\n    \"Morocco\",\n    \"Mozambique\",\n    \"Namibia\",\n    \"Niger\",\n    \"Nigeria\",\n    \"Republic of the Congo\",\n    \"Rwanda\",\n    \"S\\xe3o Tom\\xe9 and Pr\\xedncipe\",\n    \"Senegal\",\n    \"Seychelles\",\n    \"Sierra Leone\",\n    \"Somalia\",\n    \"South Africa\",\n    \"South Sudan\",\n    \"Sudan\",\n    \"Tanzania\",\n    \"Togo\",\n    \"Tunisia\",\n    \"Uganda\",\n    \"Zambia\",\n    \"Zimbabwe\"\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EMEACountries);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9Db3VudHJpZXMvRW1lYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsZ0JBQWdCO0lBQ2xCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUVIO0FBRUQsaUVBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW50ZWMvLi91dGlscy9Db3VudHJpZXMvRW1lYS5qcz84OGM4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVNRUFDb3VudHJpZXMgPSBbXG4gICAgXCJBbGdlcmlhXCIsXG4gICAgXCJBbmdvbGFcIixcbiAgICBcIkJlbmluXCIsXG4gICAgXCJCb3Rzd2FuYVwiLFxuICAgIFwiQnVya2luYSBGYXNvXCIsXG4gICAgXCJCdXJ1bmRpXCIsXG4gICAgXCJDYW1lcm9vblwiLFxuICAgIFwiQ2FwZSBWZXJkZVwiLFxuICAgIFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsXG4gICAgXCJDaGFkXCIsXG4gICAgXCJDb21vcm9zXCIsXG4gICAgXCJEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSBDb25nb1wiLFxuICAgIFwiRGppYm91dGlcIixcbiAgICBcIkVneXB0XCIsXG4gICAgXCJFcXVhdG9yaWFsIEd1aW5lYVwiLFxuICAgIFwiRXJpdHJlYVwiLFxuICAgIFwiRXN3YXRpbmlcIixcbiAgICBcIkV0aGlvcGlhXCIsXG4gICAgXCJHYWJvblwiLFxuICAgIFwiR2FtYmlhXCIsXG4gICAgXCJHaGFuYVwiLFxuICAgIFwiR3VpbmVhXCIsXG4gICAgXCJHdWluZWEtQmlzc2F1XCIsXG4gICAgXCJJdm9yeSBDb2FzdFwiLFxuICAgIFwiS2VueWFcIixcbiAgICBcIkxlc290aG9cIixcbiAgICBcIkxpYmVyaWFcIixcbiAgICBcIkxpYnlhXCIsXG4gICAgXCJNYWRhZ2FzY2FyXCIsXG4gICAgXCJNYWxhd2lcIixcbiAgICBcIk1hbGlcIixcbiAgICBcIk1hdXJpdGFuaWFcIixcbiAgICBcIk1hdXJpdGl1c1wiLFxuICAgIFwiTW9yb2Njb1wiLFxuICAgIFwiTW96YW1iaXF1ZVwiLFxuICAgIFwiTmFtaWJpYVwiLFxuICAgIFwiTmlnZXJcIixcbiAgICBcIk5pZ2VyaWFcIixcbiAgICBcIlJlcHVibGljIG9mIHRoZSBDb25nb1wiLFxuICAgIFwiUndhbmRhXCIsXG4gICAgXCJTw6NvIFRvbcOpIGFuZCBQcsOtbmNpcGVcIixcbiAgICBcIlNlbmVnYWxcIixcbiAgICBcIlNleWNoZWxsZXNcIixcbiAgICBcIlNpZXJyYSBMZW9uZVwiLFxuICAgIFwiU29tYWxpYVwiLFxuICAgIFwiU291dGggQWZyaWNhXCIsXG4gICAgXCJTb3V0aCBTdWRhblwiLFxuICAgIFwiU3VkYW5cIixcbiAgICBcIlRhbnphbmlhXCIsXG4gICAgXCJUb2dvXCIsXG4gICAgXCJUdW5pc2lhXCIsXG4gICAgXCJVZ2FuZGFcIixcbiAgICBcIlphbWJpYVwiLFxuICAgIFwiWmltYmFid2VcIixcbiAgICAvLyBBZGQgbW9yZSBjb3VudHJpZXMgYXMgbmVlZGVkXG5dO1xuICBcbmV4cG9ydCBkZWZhdWx0IEVNRUFDb3VudHJpZXM7Il0sIm5hbWVzIjpbIkVNRUFDb3VudHJpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Countries/Emea.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();