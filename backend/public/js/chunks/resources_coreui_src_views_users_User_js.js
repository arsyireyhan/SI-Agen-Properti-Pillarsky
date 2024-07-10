"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_users_User_js"],{

/***/ "./resources/coreui/src/views/users/User.js":
/*!**************************************************!*\
  !*** ./resources/coreui/src/views/users/User.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _UsersData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersData */ "./resources/coreui/src/views/users/UsersData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var User = function User(_ref) {
  var match = _ref.match;
  var user = _UsersData__WEBPACK_IMPORTED_MODULE_3__["default"].find(function (user) {
    return user.id.toString() === match.params.id;
  });
  var userDetails = user ? Object.entries(user) : [['id', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "text-muted",
      name: "cui-icon-ban"
    }), " Not found"]
  })]];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      lg: 6,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: ["User id: ", match.params.id]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("table", {
            className: "table table-striped table-hover",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
              children: userDetails.map(function (_ref2, index) {
                var _ref3 = _slicedToArray(_ref2, 2),
                  key = _ref3[0],
                  value = _ref3[1];
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                    children: "".concat(key, ":")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                      children: value
                    })
                  })]
                }, index.toString());
              })
            })
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./resources/coreui/src/views/users/UsersData.js":
/*!*******************************************************!*\
  !*** ./resources/coreui/src/views/users/UsersData.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var usersData = [{
  id: 0,
  name: 'John Doe',
  registered: '2018/01/01',
  role: 'Guest',
  status: 'Pending'
}, {
  id: 1,
  name: 'Samppa Nori',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 2,
  name: 'Estavan Lykos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 3,
  name: 'Chetan Mohamed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 4,
  name: 'Derick Maximinus',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 5,
  name: 'Friderik Dávid',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 6,
  name: 'Yiorgos Avraamu',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 7,
  name: 'Avram Tarasios',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 8,
  name: 'Quintin Ed',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 9,
  name: 'Enéas Kwadwo',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 10,
  name: 'Agapetus Tadeáš',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 11,
  name: 'Carwyn Fachtna',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 12,
  name: 'Nehemiah Tatius',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 13,
  name: 'Ebbe Gemariah',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 14,
  name: 'Eustorgios Amulius',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 15,
  name: 'Leopold Gáspár',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 16,
  name: 'Pompeius René',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 17,
  name: 'Paĉjo Jadon',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 18,
  name: 'Micheal Mercurius',
  registered: '2018/02/01',
  role: 'Admin',
  status: 'Inactive'
}, {
  id: 19,
  name: 'Ganesha Dubhghall',
  registered: '2018/03/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 20,
  name: 'Hiroto Šimun',
  registered: '2018/01/21',
  role: 'Staff',
  status: 'Active'
}, {
  id: 21,
  name: 'Vishnu Serghei',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Active'
}, {
  id: 22,
  name: 'Zbyněk Phoibos',
  registered: '2018/02/01',
  role: 'Staff',
  status: 'Banned'
}, {
  id: 23,
  name: 'Aulus Agmundr',
  registered: '2018/01/01',
  role: 'Member',
  status: 'Pending'
}, {
  id: 42,
  name: 'Ford Prefect',
  registered: '2001/05/25',
  role: 'Alien',
  status: 'Don\'t panic!'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersData);

/***/ })

}]);