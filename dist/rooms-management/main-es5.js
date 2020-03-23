function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header (featureSelected)=\"onNavigate($event)\"></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-building *ngIf=\"loadedFeature === 'building'\"></app-building>\r\n      <app-room *ngIf=\"loadedFeature === 'room'\"></app-room>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/building-detail/building-detail.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/building-detail/building-detail.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuildingDetailBuildingDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/building-list/building-edit.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/building-list/building-edit.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuildingListBuildingEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <form>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-5 form-group\">\r\n                    <label for=\"name\">Name</label>\r\n                    <input type=\"text\" id=\"name\" class=\"form-control\"\r\n                    #nameInput>\r\n\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                    <label for=\"amount\">Description</label>\r\n                    <input type=\"number\" id=\"description\" class=\"form-control\"\r\n                    #descriptionInput>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <button class=\"btn btn-sucess\" type=\"submit\">Add</button>\r\n                    <button class=\"btn  btn-dangger\" type=\"button\">Delete</button>\r\n                    <button class=\"btn  btn-primary\" type=\"button\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/building-list/building-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/building-list/building-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuildingListBuildingListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-xs-10\">\r\n    \r\n    <app-building-edit (buildingAdded)=\"onBuildingAdded($event)\"></app-building-edit>\r\n    <hr>\r\n    <ul class=\"list-group\">\r\n      <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let building of buildings\">\r\n        <img    style=\"width: 25px;\" src=\"{{building.imagePath}}\">\r\n        {{building.name}} - {{building.description}}\r\n      </a>\r\n    </ul>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/building/building.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/building/building.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBuildingBuildingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n        <app-building-list></app-building-list>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n        <app-building-detail></app-building-detail>\r\n    </div>\r\n  </div>\r\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a href=\"#\" class=\"navbar-brand\">\r\n                Room Management\r\n            </a>\r\n        </div>\r\n    </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a href=\"#\" (click)=\"onSelect('room')\">\r\n                    Rooms  \r\n                </a></li>\r\n                <li> <a href=\"#\" (click)=\"onSelect('building')\">\r\n                        Buildings\r\n                    </a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-collapse\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toogle\" role=\"button\">\r\n                        Manage <span class=\"caret\"></span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n</nav>\r\n\r\n<!-- \r\n<div class=\"container\">\r\n    <div class=\"header\">\r\n        <div class=\"header-left\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n\r\n                <!-- <input class=\"pt-4\" type=\"text\" [(ngModel)]=\"name\"> -->\r\n\r\n<!-- <p class=\"pt-4\">Welcome to {{name}}</p>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n</div>\r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"row h-100 login\">\r\n    <div class=\"col-sm-12 my-auto\">\r\n      <div class=\"card card-block w-25\"><a  routerLink=\"/building\"> <button class=\"btn btn-primary pt-4\"> <span class=\"pt-4\">LOGIN </span></button></a>\r\n\r\n\r\n        \r\n        </div>\r\n    </div>\r\n </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/room-detail/room-detail.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room-detail/room-detail.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoomDetailRoomDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/room-list/room-item/room-edit.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room-list/room-item/room-edit.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoomListRoomItemRoomEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <form>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-5 form-group\">\r\n                    <label for=\"name\">Name</label>\r\n                    <input type=\"text\" id=\"name\" class=\"form-control\"\r\n                    #nameInput>\r\n\r\n                </div>\r\n                <div class=\"col-sm-12 form-group\">\r\n                    <label for=\"amount\">Description</label>\r\n                    <input type=\"number\" id=\"description\" class=\"form-control\"\r\n                    #amountInput>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <button class=\"btn btn-sucess\" type=\"submit\">Add</button>\r\n                    <button class=\"btn  btn-dangger\" type=\"button\">Delete</button>\r\n                    <button class=\"btn  btn-primary\" type=\"button\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/room-list/room-item/room-item.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room-list/room-item/room-item.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoomListRoomItemRoomItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a href=\"#\" class=\"list-group-item clearfix\" \r\n*ngFor=\"let room of rooms\"> \r\n<div class=\"pull-left\">\r\n    <h4 class=\"list-group-item-heading\">{{room.name}}</h4>\r\n    <p class=\"list-group-item-text\">Description </p>\r\n</div>\r\n<span class=\"pull-right\">\r\n    <img src=\"{{room.imagePath}}\" alt=\"{{room.name}}\" class=\"img-responsive\" style=\"max-height: 50px;\">\r\n</span>\r\n</a>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/room-list/room-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room-list/room-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoomListRoomListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-xs-10\">\r\n    <app-room-edit\r\n      (roomAdded)=\"onRoomAdded($event)\"></app-room-edit>\r\n    <hr>\r\n    <ul class=\"list-group\">\r\n      <a\r\n        class=\"list-group-item\"\r\n        style=\"cursor: pointer\"\r\n        *ngFor=\"let room of rooms\">\r\n        {{room.name}} - {{room.amount}} \r\n      </a>\r\n    </ul>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/room/room.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/room/room.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRoomRoomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n      <app-room-list></app-room-list>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n      <app-room-detail></app-room-detail>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/success-alert/success-alert.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/success-alert/success-alert.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuccessAlertSuccessAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>success!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _building_building_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./building/building.component */
    "./src/app/building/building.component.ts");
    /* harmony import */


    var _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./building-list/building-list.component */
    "./src/app/building-list/building-list.component.ts");
    /* harmony import */


    var _building_detail_building_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./building-detail/building-detail.component */
    "./src/app/building-detail/building-detail.component.ts");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);

      this.routes = [{
        path: 'building',
        component: _building_building_component__WEBPACK_IMPORTED_MODULE_3__["BuildingComponent"]
      }, {
        path: 'buildingList',
        component: _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_4__["BuildingListComponent"]
      }, {
        path: 'buildingDetail',
        component: _building_detail_building_detail_component__WEBPACK_IMPORTED_MODULE_5__["BuildingDetailComponent"]
      }];
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.loadedFeature = 'building';
      }

      _createClass(AppComponent, [{
        key: "onNavigate",
        value: function onNavigate(feature) {
          this.loadedFeature = feature;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _success_alert_success_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./success-alert/success-alert.component */
    "./src/app/success-alert/success-alert.component.ts");
    /* harmony import */


    var _warning_alert_warning_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./warning-alert/warning-alert.component */
    "./src/app/warning-alert/warning-alert.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _building_building_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./building/building.component */
    "./src/app/building/building.component.ts");
    /* harmony import */


    var _room_room_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./room/room.component */
    "./src/app/room/room.component.ts");
    /* harmony import */


    var _room_list_room_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./room-list/room-list.component */
    "./src/app/room-list/room-list.component.ts");
    /* harmony import */


    var _building_detail_building_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./building-detail/building-detail.component */
    "./src/app/building-detail/building-detail.component.ts");
    /* harmony import */


    var _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./building-list/building-list.component */
    "./src/app/building-list/building-list.component.ts");
    /* harmony import */


    var _building_list_building_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./building-list/building.edit.component */
    "./src/app/building-list/building.edit.component.ts");
    /* harmony import */


    var _room_list_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./room-list/room-item/room-item.component */
    "./src/app/room-list/room-item/room-item.component.ts");
    /* harmony import */


    var _room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./room-detail/room-detail.component */
    "./src/app/room-detail/room-detail.component.ts");
    /* harmony import */


    var _room_list_room_item_room_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./room-list/room-item/room-edit.component */
    "./src/app/room-list/room-item/room-edit.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _success_alert_success_alert_component__WEBPACK_IMPORTED_MODULE_7__["SuccessAlertComponent"], _warning_alert_warning_alert_component__WEBPACK_IMPORTED_MODULE_8__["WarningAlertComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], //buildings
      _building_building_component__WEBPACK_IMPORTED_MODULE_10__["BuildingComponent"], _building_detail_building_detail_component__WEBPACK_IMPORTED_MODULE_13__["BuildingDetailComponent"], _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_14__["BuildingListComponent"], _building_list_building_edit_component__WEBPACK_IMPORTED_MODULE_15__["BuildingEditComponent"], //rooms
      _room_list_room_item_room_item_component__WEBPACK_IMPORTED_MODULE_16__["RoomItemComponent"], _room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_17__["RoomDetailComponent"], _room_list_room_item_room_edit_component__WEBPACK_IMPORTED_MODULE_18__["RoomEditComponent"], _room_room_component__WEBPACK_IMPORTED_MODULE_11__["RoomComponent"], _room_list_room_list_component__WEBPACK_IMPORTED_MODULE_12__["RoomListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/building-detail/building-detail.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/building-detail/building-detail.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuildingDetailBuildingDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9idWlsZGluZy1kZXRhaWwvYnVpbGRpbmctZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/building-detail/building-detail.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/building-detail/building-detail.component.ts ***!
    \**************************************************************/

  /*! exports provided: BuildingDetailComponent */

  /***/
  function srcAppBuildingDetailBuildingDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingDetailComponent", function () {
      return BuildingDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BuildingDetailComponent =
    /*#__PURE__*/
    function () {
      function BuildingDetailComponent() {
        _classCallCheck(this, BuildingDetailComponent);
      }

      _createClass(BuildingDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BuildingDetailComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BuildingDetailComponent.prototype, "building", void 0);
    BuildingDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-building-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./building-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/building-detail/building-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./building-detail.component.css */
      "./src/app/building-detail/building-detail.component.css")).default]
    })], BuildingDetailComponent);
    /***/
  },

  /***/
  "./src/app/building-list/building-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/building-list/building-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: BuildingListComponent */

  /***/
  function srcAppBuildingListBuildingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingListComponent", function () {
      return BuildingListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/building.service */
    "./src/app/services/building.service.ts");

    var BuildingListComponent =
    /*#__PURE__*/
    function () {
      function BuildingListComponent(buildingService) {
        _classCallCheck(this, BuildingListComponent);

        this.buildingService = buildingService;
        this.buildingWasSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(BuildingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildings = this.buildingService.getBuildings();
        }
      }, {
        key: "onBuildingAdded",
        value: function onBuildingAdded(building) {
          this.buildingWasSelected.emit(building);
        }
      }]);

      return BuildingListComponent;
    }();

    BuildingListComponent.ctorParameters = function () {
      return [{
        type: _services_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BuildingListComponent.prototype, "buildingWasSelected", void 0);
    BuildingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-building-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./building-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/building-list/building-list.component.html")).default
    })], BuildingListComponent);
    /***/
  },

  /***/
  "./src/app/building-list/building.edit.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/building-list/building.edit.component.ts ***!
    \**********************************************************/

  /*! exports provided: BuildingEditComponent */

  /***/
  function srcAppBuildingListBuildingEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingEditComponent", function () {
      return BuildingEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_room_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/room.model */
    "./src/shared/room.model.ts");

    var BuildingEditComponent =
    /*#__PURE__*/
    function () {
      function BuildingEditComponent() {
        _classCallCheck(this, BuildingEditComponent);

        this.buildingAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(BuildingEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddItem",
        value: function onAddItem() {
          var roomName = this.nameInputRef.nativeElement.value;
          var roomDescription = this.descriptionInputRef.nativeElement.value;
          var newBuilding = new _shared_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"](roomName, roomDescription);
          this.buildingAdded.emit(newBuilding);
        }
      }]);

      return BuildingEditComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameInput', {
      static: false
    })], BuildingEditComponent.prototype, "nameInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('descriptionInput', {
      static: false
    })], BuildingEditComponent.prototype, "descriptionInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BuildingEditComponent.prototype, "buildingAdded", void 0);
    BuildingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-building-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./building-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/building-list/building-edit.component.html")).default
    })], BuildingEditComponent);
    /***/
  },

  /***/
  "./src/app/building/building.component.css":
  /*!*************************************************!*\
    !*** ./src/app/building/building.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBuildingBuildingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9idWlsZGluZy9idWlsZGluZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/building/building.component.ts":
  /*!************************************************!*\
    !*** ./src/app/building/building.component.ts ***!
    \************************************************/

  /*! exports provided: BuildingComponent */

  /***/
  function srcAppBuildingBuildingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingComponent", function () {
      return BuildingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/building.service */
    "./src/app/services/building.service.ts");

    var BuildingComponent =
    /*#__PURE__*/
    function () {
      function BuildingComponent(buildingService) {
        _classCallCheck(this, BuildingComponent);

        this.buildingService = buildingService;
      }

      _createClass(BuildingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.buildingService.selectedBuilding.subscribe(function (building) {
            _this.selectedBuilding = building;
          });
        }
      }]);

      return BuildingComponent;
    }();

    BuildingComponent.ctorParameters = function () {
      return [{
        type: _services_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"]
      }];
    };

    BuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-building',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./building.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/building/building.component.html")).default,
      providers: [_services_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./building.component.css */
      "./src/app/building/building.component.css")).default]
    })], BuildingComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\r\n\r\n    color: black;\r\n}\r\np {\r\n    font-family: \"Arial\";\r\n    font-size: 18px;\r\n  }\r\n/* Style the header with a grey background and some padding */\r\n.header {\r\n    overflow: hidden;\r\n    background-color: #f1f1f1;\r\n    padding: 20px 10px;\r\n  }\r\n/* Style the header links */\r\n.header a {\r\n    float: left;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n    border-radius: 4px;\r\n  }\r\n/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */\r\n.header a.logo {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n  }\r\n/* Change the background color on mouse-over */\r\n.header a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n/* Style the active/current link*/\r\n.header a.active {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n  }\r\n/* Float the link section to the right */\r\n.header-right {\r\n    float: right;\r\n  }\r\n/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */\r\n@media screen and (max-width: 500px) {\r\n    .header a {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n    }\r\n    .header-right {\r\n      float: none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtFQUNqQjtBQUNBLDZEQUE2RDtBQUMvRDtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUVBLG9KQUFvSjtBQUNwSjtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFFQSw4Q0FBOEM7QUFDaEQ7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkO0FBRUEsaUNBQWlDO0FBQ2pDO0lBQ0UsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDtBQUVBLHdDQUF3QztBQUN4QztJQUNFLFlBQVk7RUFDZDtBQUVBLHVIQUF1SDtBQUN2SDtJQUNFO01BQ0UsV0FBVztNQUNYLGNBQWM7TUFDZCxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6Ii4uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcblxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLyogU3R5bGUgdGhlIGhlYWRlciB3aXRoIGEgZ3JleSBiYWNrZ3JvdW5kIGFuZCBzb21lIHBhZGRpbmcgKi9cclxuLmhlYWRlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGhlYWRlciBsaW5rcyAqL1xyXG4gIC5oZWFkZXIgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGxvZ28gbGluayAobm90aWNlIHRoYXQgd2Ugc2V0IHRoZSBzYW1lIHZhbHVlIG9mIGxpbmUtaGVpZ2h0IGFuZCBmb250LXNpemUgdG8gcHJldmVudCB0aGUgaGVhZGVyIHRvIGluY3JlYXNlIHdoZW4gdGhlIGZvbnQgZ2V0cyBiaWdnZXIgKi9cclxuICAuaGVhZGVyIGEubG9nbyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvbiBtb3VzZS1vdmVyICovXHJcbi5oZWFkZXIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayovXHJcbiAgLmhlYWRlciBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAvKiBGbG9hdCB0aGUgbGluayBzZWN0aW9uIHRvIHRoZSByaWdodCAqL1xyXG4gIC5oZWFkZXItcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgbWVkaWEgcXVlcmllcyBmb3IgcmVzcG9uc2l2ZW5lc3MgLSB3aGVuIHRoZSBzY3JlZW4gaXMgNTAwcHggd2lkZSBvciBsZXNzLCBzdGFjayB0aGUgbGlua3Mgb24gdG9wIG9mIGVhY2ggb3RoZXIgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmhlYWRlciBhIHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1yaWdodCB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.name = 'Rooms Management';
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      } //select page


      _createClass(HeaderComponent, [{
        key: "onSelect",
        value: function onSelect(feature) {
          this.featureSelected.emit(feature);
        }
      }]);

      return HeaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "featureSelected", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\r\n    font-family: \"Arial\";\r\n    font-size: 16px;\r\n  }\r\n\r\n  .button{\r\n    margin: 5px;\r\n\r\n  }\r\n\r\n  .login{ \r\n    margin: 60px 0 60px 0;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7O0VBRWI7O0VBRUE7SUFDRSxxQkFBcUI7QUFDekIiLCJmaWxlIjoiLi4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5idXR0b257XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgfVxyXG5cclxuICAubG9naW57IFxyXG4gICAgbWFyZ2luOiA2MHB4IDAgNjBweCAwO1xyXG59XHJcbiAgIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/room-detail/room-detail.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/room-detail/room-detail.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoomDetailRoomDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9yb29tLWRldGFpbC9yb29tLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/room-detail/room-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/room-detail/room-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: RoomDetailComponent */

  /***/
  function srcAppRoomDetailRoomDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomDetailComponent", function () {
      return RoomDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RoomDetailComponent =
    /*#__PURE__*/
    function () {
      function RoomDetailComponent() {
        _classCallCheck(this, RoomDetailComponent);
      }

      _createClass(RoomDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RoomDetailComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RoomDetailComponent.prototype, "room", void 0);
    RoomDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-room-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./room-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/room-detail/room-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./room-detail.component.css */
      "./src/app/room-detail/room-detail.component.css")).default]
    })], RoomDetailComponent);
    /***/
  },

  /***/
  "./src/app/room-list/room-item/room-edit.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/room-list/room-item/room-edit.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoomListRoomItemRoomEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9yb29tLWxpc3Qvcm9vbS1pdGVtL3Jvb20tZWRpdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/room-list/room-item/room-edit.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/room-list/room-item/room-edit.component.ts ***!
    \************************************************************/

  /*! exports provided: RoomEditComponent */

  /***/
  function srcAppRoomListRoomItemRoomEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomEditComponent", function () {
      return RoomEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_room_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/room.model */
    "./src/shared/room.model.ts");

    var RoomEditComponent =
    /*#__PURE__*/
    function () {
      function RoomEditComponent() {
        _classCallCheck(this, RoomEditComponent);

        this.roomAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(RoomEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddItem",
        value: function onAddItem() {
          var roomName = this.nameInputRef.nativeElement.value;
          var roomAmount = this.amountInputRef.nativeElement.value;
          var newRoom = new _shared_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"](roomName, roomAmount);
          this.roomAdded.emit(newRoom);
        }
      }]);

      return RoomEditComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameInput', {
      static: false
    })], RoomEditComponent.prototype, "nameInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('amountInput', {
      static: false
    })], RoomEditComponent.prototype, "amountInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RoomEditComponent.prototype, "roomAdded", void 0);
    RoomEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-room-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./room-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/room-list/room-item/room-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./room-edit.component.css */
      "./src/app/room-list/room-item/room-edit.component.css")).default]
    })], RoomEditComponent);
    /***/
  },

  /***/
  "./src/app/room-list/room-item/room-item.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/room-list/room-item/room-item.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoomListRoomItemRoomItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9yb29tLWxpc3Qvcm9vbS1pdGVtL3Jvb20taXRlbS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/room-list/room-item/room-item.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/room-list/room-item/room-item.component.ts ***!
    \************************************************************/

  /*! exports provided: RoomItemComponent */

  /***/
  function srcAppRoomListRoomItemRoomItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomItemComponent", function () {
      return RoomItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RoomItemComponent =
    /*#__PURE__*/
    function () {
      function RoomItemComponent() {
        _classCallCheck(this, RoomItemComponent);
      }

      _createClass(RoomItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RoomItemComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RoomItemComponent.prototype, "room", void 0);
    RoomItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-room-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./room-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/room-list/room-item/room-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./room-item.component.css */
      "./src/app/room-list/room-item/room-item.component.css")).default]
    })], RoomItemComponent);
    /***/
  },

  /***/
  "./src/app/room-list/room-list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/room-list/room-list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoomListRoomListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9yb29tLWxpc3Qvcm9vbS1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/room-list/room-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/room-list/room-list.component.ts ***!
    \**************************************************/

  /*! exports provided: RoomListComponent */

  /***/
  function srcAppRoomListRoomListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomListComponent", function () {
      return RoomListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_room_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/room.model */
    "./src/shared/room.model.ts");

    var RoomListComponent =
    /*#__PURE__*/
    function () {
      function RoomListComponent() {
        _classCallCheck(this, RoomListComponent);

        this.rooms = [new _shared_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Conference Room', 5), new _shared_room_model__WEBPACK_IMPORTED_MODULE_2__["Room"]('Working Room ', 10)];
        console.log(this.rooms);
      }

      _createClass(RoomListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRoomAdded",
        value: function onRoomAdded(room) {
          this.rooms.push(room);
        }
      }]);

      return RoomListComponent;
    }();

    RoomListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-room-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./room-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/room-list/room-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./room-list.component.css */
      "./src/app/room-list/room-list.component.css")).default]
    })], RoomListComponent);
    /***/
  },

  /***/
  "./src/app/room/room.component.css":
  /*!*****************************************!*\
    !*** ./src/app/room/room.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppRoomRoomComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9yb29tL3Jvb20uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/room/room.component.ts":
  /*!****************************************!*\
    !*** ./src/app/room/room.component.ts ***!
    \****************************************/

  /*! exports provided: RoomComponent */

  /***/
  function srcAppRoomRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomComponent", function () {
      return RoomComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RoomComponent =
    /*#__PURE__*/
    function () {
      function RoomComponent() {
        _classCallCheck(this, RoomComponent);
      }

      _createClass(RoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RoomComponent;
    }();

    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-room',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./room.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/room/room.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./room.component.css */
      "./src/app/room/room.component.css")).default]
    })], RoomComponent);
    /***/
  },

  /***/
  "./src/app/services/building.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/building.service.ts ***!
    \**********************************************/

  /*! exports provided: BuildingService */

  /***/
  function srcAppServicesBuildingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingService", function () {
      return BuildingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_building_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/building.model */
    "./src/shared/building.model.ts");

    var apiUrl = "/api/buildings";
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var BuildingService =
    /*#__PURE__*/
    function () {
      function BuildingService(roomService) {
        _classCallCheck(this, BuildingService);

        this.roomService = roomService;
        this.selectedBuilding = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buildings = [new _shared_building_model__WEBPACK_IMPORTED_MODULE_3__["Building"]('blockA', 'desc1', 'imge'), new _shared_building_model__WEBPACK_IMPORTED_MODULE_3__["Building"]('blocvvvvvvvb', 'desc1', 'imge')];
      }

      _createClass(BuildingService, [{
        key: "getBuildings",
        value: function getBuildings() {
          return this.buildings.slice();
        }
      }, {
        key: "addRoomToBuilding",
        value: function addRoomToBuilding(rooms) {
          this.roomService.addRooms(rooms);
        }
      }]);

      return BuildingService;
    }();
    /***/

  },

  /***/
  "./src/app/success-alert/success-alert.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/success-alert/success-alert.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuccessAlertSuccessAlertComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p{\r\n    padding: 20px;\r\n    background-color: palegreen;\r\n    border: 1px solid green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N1Y2Nlc3MtYWxlcnQvc3VjY2Vzcy1hbGVydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoiLi4vc3VjY2Vzcy1hbGVydC9zdWNjZXNzLWFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGVncmVlbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/success-alert/success-alert.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/success-alert/success-alert.component.ts ***!
    \**********************************************************/

  /*! exports provided: SuccessAlertComponent */

  /***/
  function srcAppSuccessAlertSuccessAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessAlertComponent", function () {
      return SuccessAlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SuccessAlertComponent =
    /*#__PURE__*/
    function () {
      function SuccessAlertComponent() {
        _classCallCheck(this, SuccessAlertComponent);
      }

      _createClass(SuccessAlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SuccessAlertComponent;
    }();

    SuccessAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-success-alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./success-alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/success-alert/success-alert.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./success-alert.component.css */
      "./src/app/success-alert/success-alert.component.css")).default]
    })], SuccessAlertComponent);
    /***/
  },

  /***/
  "./src/app/warning-alert/warning-alert.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/warning-alert/warning-alert.component.ts ***!
    \**********************************************************/

  /*! exports provided: WarningAlertComponent */

  /***/
  function srcAppWarningAlertWarningAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarningAlertComponent", function () {
      return WarningAlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WarningAlertComponent =
    /*#__PURE__*/
    function () {
      function WarningAlertComponent() {
        _classCallCheck(this, WarningAlertComponent);
      }

      _createClass(WarningAlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WarningAlertComponent;
    }();

    WarningAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-warning-alert',
      template: "\n    <p>This is a warning! </p>\n    ",
      styles: ["\n      p{\n        padding: 20px;\n        background-color: mistyrose;\n        border: 1px solid red;\n      }\n      "]
    })], WarningAlertComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/shared/building.model.ts":
  /*!**************************************!*\
    !*** ./src/shared/building.model.ts ***!
    \**************************************/

  /*! exports provided: Building */

  /***/
  function srcSharedBuildingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Building", function () {
      return Building;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Building = function Building(name, desc, imagePath) {
      _classCallCheck(this, Building);

      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
    };
    /***/

  },

  /***/
  "./src/shared/room.model.ts":
  /*!**********************************!*\
    !*** ./src/shared/room.model.ts ***!
    \**********************************/

  /*! exports provided: Room */

  /***/
  function srcSharedRoomModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Room", function () {
      return Room;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Room = function Room(name, amount, imagePath) {
      _classCallCheck(this, Room);

      this.name = name;
      this.amount = amount;
      this.imagePath = imagePath;
      this.name = name;
      this.amount = amount;
      this.imagePath = imagePath;
    };
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\GIT\REPOS\rooms_app\Rooms-management\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map