"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_widgets_WidgetsDropdown_js"],{

/***/ "./resources/coreui/src/views/charts/ChartBarSimple.js":
/*!*************************************************************!*\
  !*** ./resources/coreui/src/views/charts/ChartBarSimple.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/coreui-utils.common.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["backgroundColor", "pointHoverBackgroundColor", "dataPoints", "label", "pointed"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ChartBarSimple = function ChartBarSimple(props) {
  var backgroundColor = props.backgroundColor,
    pointHoverBackgroundColor = props.pointHoverBackgroundColor,
    dataPoints = props.dataPoints,
    label = props.label,
    pointed = props.pointed,
    attributes = _objectWithoutProperties(props, _excluded);
  var defaultDatasets = function () {
    return [{
      data: dataPoints,
      backgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__.getColor)(backgroundColor),
      pointHoverBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__.getColor)(pointHoverBackgroundColor),
      label: label,
      barPercentage: 0.5,
      categoryPercentage: 1
    }];
  }();
  var defaultOptions = function () {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    };
  }();

  // render
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_1__.CChartBar, _objectSpread(_objectSpread({}, attributes), {}, {
    datasets: defaultDatasets,
    options: defaultOptions,
    labels: label
  }));
};
ChartBarSimple.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  //
  backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  pointHoverBackgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  dataPoints: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  pointed: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
ChartBarSimple.defaultProps = {
  backgroundColor: 'rgba(0,0,0,.2)',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartBarSimple);

/***/ }),

/***/ "./resources/coreui/src/views/charts/ChartLineSimple.js":
/*!**************************************************************!*\
  !*** ./resources/coreui/src/views/charts/ChartLineSimple.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/coreui-utils.common.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["borderColor", "backgroundColor", "pointHoverBackgroundColor", "dataPoints", "label", "pointed"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ChartLineSimple = function ChartLineSimple(props) {
  var borderColor = props.borderColor,
    backgroundColor = props.backgroundColor,
    pointHoverBackgroundColor = props.pointHoverBackgroundColor,
    dataPoints = props.dataPoints,
    label = props.label,
    pointed = props.pointed,
    attributes = _objectWithoutProperties(props, _excluded);
  var pointHoverColor = function () {
    if (pointHoverBackgroundColor) {
      return pointHoverBackgroundColor;
    } else if (backgroundColor !== 'transparent') {
      return backgroundColor;
    }
    return borderColor;
  }();
  var defaultDatasets = function () {
    return [{
      data: dataPoints,
      borderColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__.getColor)(borderColor),
      backgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__.getColor)(backgroundColor),
      pointBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__.getColor)(pointHoverColor),
      pointHoverBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__.getColor)(pointHoverColor),
      label: label
    }];
  }();
  var pointedOptions = function () {
    return {
      scales: {
        xAxes: [{
          offset: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, dataPoints) - 5,
            max: Math.max.apply(Math, dataPoints) + 5
          }
        }]
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };
  }();
  var straightOptions = function () {
    return {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    };
  }();
  var defaultOptions = function () {
    var options = pointed ? pointedOptions : straightOptions;
    return Object.assign({}, options, {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    });
  }();
  var computedDatasets = function () {
    return (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__.deepObjectsMerge)(defaultDatasets, attributes.datasets || {});
  }();
  var computedOptions = function () {
    return (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__.deepObjectsMerge)(defaultOptions, attributes.options || {});
  }();

  // render

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_1__.CChartLine, _objectSpread(_objectSpread({}, attributes), {}, {
    datasets: computedDatasets,
    options: computedOptions,
    labels: label
  }));
};
ChartLineSimple.propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  //
  borderColor: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  pointHoverBackgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  dataPoints: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  pointed: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
ChartLineSimple.defaultProps = {
  borderColor: 'rgba(255,255,255,.55)',
  backgroundColor: 'transparent',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChartLineSimple);

/***/ }),

/***/ "./resources/coreui/src/views/widgets/WidgetsDropdown.js":
/*!***************************************************************!*\
  !*** ./resources/coreui/src/views/widgets/WidgetsDropdown.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../charts/ChartLineSimple */ "./resources/coreui/src/views/charts/ChartLineSimple.js");
/* harmony import */ var _charts_ChartBarSimple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../charts/ChartBarSimple */ "./resources/coreui/src/views/charts/ChartBarSimple.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var WidgetsDropdown = function WidgetsDropdown() {
  // render
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        color: "gradient-primary",
        header: "9.823",
        text: "Members online",
        footerSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_3__["default"], {
          pointed: true,
          className: "c-chart-wrapper mt-3 mx-3",
          style: {
            height: '70px'
          },
          dataPoints: [65, 59, 84, 84, 51, 55, 40],
          pointHoverBackgroundColor: "primary",
          label: "Members",
          labels: "months"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              name: "cil-settings"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            className: "pt-0",
            placement: "bottom-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        color: "gradient-info",
        header: "9.823",
        text: "Members online",
        footerSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_3__["default"], {
          pointed: true,
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          dataPoints: [1, 18, 9, 17, 34, 22, 11],
          pointHoverBackgroundColor: "info",
          options: {
            elements: {
              line: {
                tension: 0.00001
              }
            }
          },
          label: "Members",
          labels: "months"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            caret: false,
            color: "transparent",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              name: "cil-location-pin"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            className: "pt-0",
            placement: "bottom-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        color: "gradient-warning",
        header: "9.823",
        text: "Members online",
        footerSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartLineSimple__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "mt-3",
          style: {
            height: '70px'
          },
          backgroundColor: "rgba(255,255,255,.2)",
          dataPoints: [78, 81, 80, 45, 34, 12, 40],
          options: {
            elements: {
              line: {
                borderWidth: 2.5
              }
            }
          },
          pointHoverBackgroundColor: "warning",
          label: "Members",
          labels: "months"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              name: "cil-settings"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            className: "pt-0",
            placement: "bottom-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        color: "gradient-danger",
        header: "9.823",
        text: "Members online",
        footerSlot: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_charts_ChartBarSimple__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          backgroundColor: "rgb(250, 152, 152)",
          label: "Members",
          labels: "months"
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            caret: true,
            className: "text-white",
            color: "transparent",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              name: "cil-settings"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            className: "pt-0",
            placement: "bottom-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetsDropdown);

/***/ })

}]);