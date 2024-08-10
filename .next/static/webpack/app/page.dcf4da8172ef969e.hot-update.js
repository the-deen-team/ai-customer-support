"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Stack,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            role: \"assistant\",\n            content: \"Hi! I'm the Headstarter support agent, how can I assist you today?\"\n        }\n    ]);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const sendMessage = async ()=>{\n        setMessage(\"\");\n        setMessages((messages)=>[\n                ...messages,\n                {\n                    role: \"user\",\n                    content: message\n                },\n                {\n                    role: \"assistant\",\n                    content: \"\"\n                }\n            ]);\n        const response = fetch(\"/api/chat\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify([\n                ...messages,\n                {\n                    role: \"user\",\n                    content: message\n                }\n            ])\n        }).then(async (res)=>{\n            const reader = res.body.getReader();\n            const decoder = new TextDecoder();\n            let result = \"\";\n            return reader.read().then(function processText(param) {\n                let { done, value } = param;\n                if (done) {\n                    return result;\n                }\n                const text = decoder.decode(value || new Int8Array(), {\n                    stream: true\n                });\n                setMessages((messages)=>{\n                    let lastMessage = message[messages.length - 1];\n                    let otherMessages = messages.slice(0, messages.length - 1);\n                    return [\n                        ...otherMessages,\n                        {\n                            ...lastMessage,\n                            content: lastMessage.content + text\n                        }\n                    ];\n                });\n                return reader.read().then(processText);\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vH\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            direction: \"column\",\n            width: \"600px\",\n            height: \"700px\",\n            border: \"1px solid black\",\n            p: 2,\n            spacing: 2,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    direction: \"column\",\n                    spacing: 2,\n                    flexGrow: 1,\n                    overflow: \"auto\",\n                    max: \"100%\",\n                    children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            display: \"flex\",\n                            justifyContent: message.role === \"assistant\" ? \"flex-start\" : \"flex-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                bgcolor: message.role === \"assistant\" ? \"primary.main\" : \"secondary.main\",\n                                color: \"white\",\n                                borderRadius: 16,\n                                p: 3,\n                                children: message.content\n                            }, void 0, false, {\n                                fileName: \"/Users/usmanqazi/Desktop/Headstarter/ai-customer-support/app/page.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/usmanqazi/Desktop/Headstarter/ai-customer-support/app/page.js\",\n                            lineNumber: 81,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/usmanqazi/Desktop/Headstarter/ai-customer-support/app/page.js\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    direction: \"row\",\n                    spacing: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            label: \"message\",\n                            fullWidth: true,\n                            value: message,\n                            onChange: (e)=>setMessage(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/usmanqazi/Desktop/Headstarter/ai-customer-support/app/page.js\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Stack_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            variant: \"contained\",\n                            onClick: sendMessage,\n                            children: \"Send\"\n                        }, void 0, false, {\n                            fileName: \"/Users/usmanqazi/Desktop/Headstarter/ai-customer-support/app/page.js\",\n                            lineNumber: 108,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/usmanqazi/Desktop/Headstarter/ai-customer-support/app/page.js\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/usmanqazi/Desktop/Headstarter/ai-customer-support/app/page.js\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/usmanqazi/Desktop/Headstarter/ai-customer-support/app/page.js\",\n        lineNumber: 56,\n        columnNumber: 14\n    }, this);\n}\n_s(Home, \"daWAsjK5tajsIp//uXaG9U/DsPA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzhEO0FBQy9CO0FBQ0U7QUFFbEIsU0FBU007O0lBQ2xCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztRQUN6QztZQUNFSSxNQUFNO1lBQ05DLFNBQVU7UUFDWjtLQUNMO0lBR0ssTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLGNBQWM7UUFDbEJELFdBQVc7UUFDWEosWUFBWSxDQUFDRCxXQUFhO21CQUNyQkE7Z0JBQ0g7b0JBQUNFLE1BQU07b0JBQVFDLFNBQVNDO2dCQUFPO2dCQUMvQjtvQkFBQ0YsTUFBTTtvQkFBYUMsU0FBUztnQkFBRTthQUNoQztRQUNELE1BQU1JLFdBQVdDLE1BQU0sYUFBYTtZQUNsQ0MsUUFBUTtZQUNSQyxTQUFRO2dCQUNOLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7bUJBQUliO2dCQUFVO29CQUFDRSxNQUFNO29CQUFRQyxTQUFTQztnQkFBTzthQUFFO1FBQ3RFLEdBQUdVLElBQUksQ0FBQyxPQUFNQztZQUNaLE1BQU1DLFNBQVNELElBQUlKLElBQUksQ0FBQ00sU0FBUztZQUNqQyxNQUFNQyxVQUFVLElBQUlDO1lBRXBCLElBQUlDLFNBQVM7WUFDYixPQUFPSixPQUFPSyxJQUFJLEdBQUdQLElBQUksQ0FBQyxTQUFTUSxZQUFZLEtBQWE7b0JBQWIsRUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUMsR0FBYjtnQkFDN0MsSUFBSUQsTUFBSztvQkFDUCxPQUFPSDtnQkFDVDtnQkFDQSxNQUFNSyxPQUFPUCxRQUFRUSxNQUFNLENBQUNGLFNBQVMsSUFBSUcsYUFBYTtvQkFBQ0MsUUFBTztnQkFBSTtnQkFDbEUzQixZQUFZLENBQUNEO29CQUNYLElBQUk2QixjQUFjekIsT0FBTyxDQUFDSixTQUFTOEIsTUFBTSxHQUFHLEVBQUU7b0JBQzlDLElBQUlDLGdCQUFnQi9CLFNBQVNnQyxLQUFLLENBQUMsR0FBR2hDLFNBQVM4QixNQUFNLEdBQUc7b0JBQ3hELE9BQU07MkJBQ0RDO3dCQUNIOzRCQUNFLEdBQUdGLFdBQVc7NEJBQ2QxQixTQUFTMEIsWUFBWTFCLE9BQU8sR0FBR3NCO3dCQUNqQztxQkFDRDtnQkFDSDtnQkFDQSxPQUFPVCxPQUFPSyxJQUFJLEdBQUdQLElBQUksQ0FBQ1E7WUFDNUI7UUFDRjtJQUNGO0lBRUEscUJBQU8sOERBQUM3QixzR0FBR0E7UUFDVHdDLE9BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCQyxZQUFZO2tCQUdaLDRFQUFDNUMsc0dBQUtBO1lBQ042QyxXQUFZO1lBQ1pOLE9BQVE7WUFDUkMsUUFBUTtZQUNSTSxRQUFTO1lBQ1RDLEdBQUc7WUFDSEMsU0FBVzs7OEJBRVQsOERBQUNoRCxzR0FBS0E7b0JBQ042QyxXQUFVO29CQUNWRyxTQUFXO29CQUNYQyxVQUFZO29CQUNYQyxVQUFVO29CQUNWQyxLQUFNOzhCQUVKN0MsU0FBUzhDLEdBQUcsQ0FBQyxDQUFDMUMsU0FBUzJDLHNCQUN0Qiw4REFBQ3RELHNHQUFHQTs0QkFFSjBDLFNBQVU7NEJBQ1ZFLGdCQUNFakMsUUFBUUYsSUFBSSxLQUFJLGNBQWMsZUFBZTtzQ0FHakQsNEVBQUNULHNHQUFHQTtnQ0FDSnVELFNBQ0U1QyxRQUFRRixJQUFJLEtBQUssY0FBYyxpQkFBaUI7Z0NBRW5EK0MsT0FBTTtnQ0FDTkMsY0FBYztnQ0FDZFQsR0FBRzswQ0FFRnJDLFFBQVFELE9BQU87Ozs7OzsyQkFkTjRDOzs7Ozs7Ozs7OzhCQW1CWCw4REFBQ3JELHNHQUFLQTtvQkFBQzZDLFdBQVU7b0JBQU1HLFNBQVM7O3NDQUM5Qiw4REFBQzlDLHNHQUFTQTs0QkFDUnVELE9BQVE7NEJBQ1JDLFNBQVM7NEJBQ1Q1QixPQUFPcEI7NEJBQ1BpRCxVQUFVLENBQUNDLElBQU1qRCxXQUFXaUQsRUFBRUMsTUFBTSxDQUFDL0IsS0FBSzs7Ozs7O3NDQUUxQyw4REFBQzdCLHNHQUFNQTs0QkFBQzZELFNBQVE7NEJBQVlDLFNBQVNuRDtzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEU7R0ExR3dCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQm94LCBTdGFjaywgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW1xuICAgICAge1xuICAgICAgICByb2xlOiAnYXNzaXN0YW50JyxcbiAgICAgICAgY29udGVudDogYEhpISBJJ20gdGhlIEhlYWRzdGFydGVyIHN1cHBvcnQgYWdlbnQsIGhvdyBjYW4gSSBhc3Npc3QgeW91IHRvZGF5P2BcbiAgICAgIH1cbl0pXG4gIFxuXG4gICAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcblxuICAgICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldE1lc3NhZ2UoJycpXG4gICAgICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4gW1xuICAgICAgICAgIC4uLm1lc3NhZ2VzLFxuICAgICAgICAgIHtyb2xlOiBcInVzZXJcIiwgY29udGVudDogbWVzc2FnZX0sXG4gICAgICAgICAge3JvbGU6IFwiYXNzaXN0YW50XCIsIGNvbnRlbnQ6ICcnfSxcbiAgICAgICAgXSlcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCgnL2FwaS9jaGF0Jywge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShbLi4ubWVzc2FnZXMsIHtyb2xlOiAndXNlcicsIGNvbnRlbnQ6IG1lc3NhZ2V9XSlcbiAgICAgICAgfSkudGhlbihhc3luYyhyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSByZXMuYm9keS5nZXRSZWFkZXIoKVxuICAgICAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuXG4gICAgICAgICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbihmdW5jdGlvbiBwcm9jZXNzVGV4dCh7ZG9uZSwgdmFsdWV9KXtcbiAgICAgICAgICAgIGlmIChkb25lKXtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRlY29kZXIuZGVjb2RlKHZhbHVlIHx8IG5ldyBJbnQ4QXJyYXkoKSwge3N0cmVhbTp0cnVlfSlcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKChtZXNzYWdlcykgPT4ge1xuICAgICAgICAgICAgICBsZXQgbGFzdE1lc3NhZ2UgPSBtZXNzYWdlW21lc3NhZ2VzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgIGxldCBvdGhlck1lc3NhZ2VzID0gbWVzc2FnZXMuc2xpY2UoMCwgbWVzc2FnZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgcmV0dXJuW1xuICAgICAgICAgICAgICAgIC4uLm90aGVyTWVzc2FnZXMsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgLi4ubGFzdE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBsYXN0TWVzc2FnZS5jb250ZW50ICsgdGV4dCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbihwcm9jZXNzVGV4dClcbiAgICAgICAgICB9KVxuICAgICAgICB9IClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDxCb3hcbiAgICAgICAgd2lkdGg9XCIxMDB2d1wiXG4gICAgICAgIGhlaWdodD0gXCIxMDB2SFwiXG4gICAgICAgIGRpc3BsYXk9IFwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249IFwiY29sdW1uXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9IFwiY2VudGVyXCJcbiAgICAgICAgYWxpZ25JdGVtcz0gXCJjZW50ZXJcIlxuXG4gICAgICA+XG4gICAgICAgIDxTdGFja1xuICAgICAgICBkaXJlY3Rpb24gPSBcImNvbHVtblwiXG4gICAgICAgIHdpZHRoID0gXCI2MDBweFwiXG4gICAgICAgIGhlaWdodD0gXCI3MDBweFwiXG4gICAgICAgIGJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCJcbiAgICAgICAgcD17Mn1cbiAgICAgICAgc3BhY2luZyA9IHsyfVxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrIFxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiIFxuICAgICAgICAgIHNwYWNpbmcgPSB7Mn0gXG4gICAgICAgICAgZmxleEdyb3cgPSB7MX1cbiAgICAgICAgICAgb3ZlcmZsb3c9IFwiYXV0b1wiIFxuICAgICAgICAgICBtYXggPSBcIjEwMCVcIiBcbiAgICAgICAgICAgPlxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAga2V5ID0ge2luZGV4fSBcbiAgICAgICAgICAgICAgZGlzcGxheSA9ICdmbGV4JyBcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uucm9sZT09PSAnYXNzaXN0YW50JyA/ICdmbGV4LXN0YXJ0JyA6ICdmbGV4LWVuZCdcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICBiZ2NvbG9yID0geyBcbiAgICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSAnYXNzaXN0YW50JyA/ICdwcmltYXJ5Lm1haW4nIDogJ3NlY29uZGFyeS5tYWluJ1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICBib3JkZXJSYWRpdXM9ezE2fVxuICAgICAgICAgICBwPXszfVxuICAgICAgICAgICA+IFxuICAgICAgICAgICB7bWVzc2FnZS5jb250ZW50fVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbCA9IFwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17c2VuZE1lc3NhZ2V9PlNlbmQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQm94PlxufVxuIl0sIm5hbWVzIjpbIkJveCIsIlN0YWNrIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJyZXN1bHQiLCJyZWFkIiwicHJvY2Vzc1RleHQiLCJkb25lIiwidmFsdWUiLCJ0ZXh0IiwiZGVjb2RlIiwiSW50OEFycmF5Iiwic3RyZWFtIiwibGFzdE1lc3NhZ2UiLCJsZW5ndGgiLCJvdGhlck1lc3NhZ2VzIiwic2xpY2UiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGlyZWN0aW9uIiwiYm9yZGVyIiwicCIsInNwYWNpbmciLCJmbGV4R3JvdyIsIm92ZXJmbG93IiwibWF4IiwibWFwIiwiaW5kZXgiLCJiZ2NvbG9yIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJsYWJlbCIsImZ1bGxXaWR0aCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});