webpackJsonp([1],{

/***/ "+bhF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1d4v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var Main_vue_1 = __webpack_require__("l7Tq");
var VLink_vue_1 = __webpack_require__("N5E8");
var wwwtool_1 = __webpack_require__("50aY");
var FeatureComponent = /** @class */ (function (_super) {
    __extends(FeatureComponent, _super);
    function FeatureComponent() {
        var _this = _super.call(this) || this;
        _this.balance = "";
        _this.nns = "";
        _this.transfer = "";
        _this.setting = "";
        _this.blockheight = 0;
        return _this;
    }
    FeatureComponent.prototype.mounted = function () {
        this.balance = this.$refs["balance"]["isActive"]
            ? "icon-balance-select"
            : "icon-balance-unselect";
        this.transfer = this.$refs["transfer"]["isActive"]
            ? "icon-transfer-select"
            : "icon-transfer-unselect";
        this.nns = this.$refs["nns"]["isActive"]
            ? "icon-nns-select"
            : "icon-nns-unselect";
        this.setting = this.$refs["setting"]["isActive"]
            ? "icon-setting-select"
            : "icon-setting-unselect";
        this.getHeight();
    };
    FeatureComponent.prototype.getHeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, wwwtool_1.WWW.api_getHeight()];
                    case 1:
                        _a.blockheight = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeatureComponent = __decorate([
        vue_class_component_1.default({
            components: {
                VLink: VLink_vue_1.default,
                MainLayout: Main_vue_1.default
            }
        }),
        __metadata("design:paramtypes", [])
    ], FeatureComponent);
    return FeatureComponent;
}(vue_1.default));
exports.default = FeatureComponent;


/***/ }),

/***/ "2781":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "2xXY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cointool_1 = __webpack_require__("pLPz");
var entity_1 = __webpack_require__("6nHw");
var storagetool_1 = __webpack_require__("5LD5");
var vue_1 = __webpack_require__("/5sW");
var vue_property_decorator_1 = __webpack_require__("EOM2");
var wallet_vue_1 = __webpack_require__("PPZq");
var wwwtool_1 = __webpack_require__("50aY");
var balance = /** @class */ (function (_super) {
    __extends(balance, _super);
    function balance() {
        var _this = _super.call(this) || this;
        // Data property
        _this.neoasset = new entity_1.NeoAsset();
        _this.balances = new Array();
        _this.currentAddress = "";
        _this.chooseAddress = new Array();
        _this.neoasset = new entity_1.NeoAsset();
        _this.balances = new Array();
        _this.neoasset.gas = 0;
        _this.neoasset.neo = 0;
        _this.neoasset.claim = 0;
        _this.chooseAddress = new Array();
        _this.chooseAddress = storagetool_1.StorageTool.getLoginArr();
        return _this;
    }
    // Component method
    balance.prototype.mounted = function () {
        this.currentAddress = entity_1.LoginInfo.getCurrentAddress();
        this.getBalances();
    };
    balance.prototype.getNeoasset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    balance.prototype.getBalances = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, clamis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cointool_1.CoinTool.initAllAsset();
                        return [4 /*yield*/, wwwtool_1.WWW.api_getBalance(this.currentAddress)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, wwwtool_1.WWW.api_getclaimgas(this.currentAddress)];
                    case 2:
                        clamis = _a.sent();
                        if (res.err) {
                            // mui.alert("Current address balance is empty -_-!");
                        }
                        else {
                            this.balances = res.info;
                            this.neoasset.claim = clamis;
                            this.balances.map(function (balance) {
                                if (balance.names == "NEO") {
                                    _this.neoasset.neo = balance.balance;
                                }
                                if (balance.names == "GAS") {
                                    _this.neoasset.gas = balance.balance;
                                }
                            });
                            storagetool_1.StorageTool.setStorage("balances_asset", JSON.stringify(this.balances));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    balance.prototype.toTransfer = function (asset) {
        storagetool_1.StorageTool.setStorage("transfer_choose", asset);
        window.location.hash = "#transfer";
    };
    balance = __decorate([
        vue_property_decorator_1.Component({
            components: {
                "wallet-layout": wallet_vue_1.default
            }
        }),
        __metadata("design:paramtypes", [])
    ], balance);
    return balance;
}(vue_1.default));
exports.default = balance;


/***/ }),

/***/ "4+Dl":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQ4cHgiIHZpZXdCb3g9IjAgMCA0MCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+DQogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTkuOTYzNTM0MSUiIHkxPSI3Mi40OTU5MTc2JSIgeDI9IjEwMCUiIHkyPSIyMC4wMzA4OTgxJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPg0KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0I4RTYyRSIgb2Zmc2V0PSIwJSI+PC9zdG9wPg0KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzVDQkQyMiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+DQogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgPC9kZWZzPg0KICAgIDxnIGlkPSLnmbvpmYbms6jlhow1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IummlumhtSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4MC4wMDAwMDAsIC0xNzQuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA1LjAwMDAwMCwgMTQ0LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NS4wMDAwMDAsIDMwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC43Mzg1ODY3NjgsOC4zNTgxMTQzNiBMMjMuOTU3NDUxNiwwIEwzOS42MzI5OTYsNy41MTU4NjEyNSBMMTYuNDk1ODE3OCwxNS44NjU1MTM0IEwwLjczODU4Njc2OCw4LjM1ODExNDM2IFogTTIzLjUwNzQ4MjMsMzEuNTk4NTkxNCBMMjMuNTA3NDgyMywxMy45OTY1NDc4IEw0MCw4LjI5NjkwMzY4IEw0MCwzOS41MDgxODcxIEwyMy41MDc0ODIzLDMxLjU5ODU5MTQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjNUNCRDIyIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTIiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHBvaW50cz0iMCAzOS45ODY2ODggMCA4Ljg2Njk5MjcgMTUuOTg5OTA2NiAxNi40MjQ4Nzc4IDE1Ljk4OTkwNjYgNDcuMzUxNzM5NyI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }),

/***/ "50aY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__("6nHw");
var WWW = /** @class */ (function () {
    function WWW() {
    }
    WWW.makeRpcUrl = function (url, method) {
        var _params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _params[_i - 2] = arguments[_i];
        }
        if (url[url.length - 1] != '/')
            url = url + "/";
        var urlout = url + "?jsonrpc=2.0&id=1&method=" + method + "&params=[";
        for (var i = 0; i < _params.length; i++) {
            urlout += JSON.stringify(_params[i]);
            if (i != _params.length - 1)
                urlout += ",";
        }
        urlout += "]";
        return urlout;
    };
    WWW.makeRpcPostBody = function (method) {
        var _params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _params[_i - 1] = arguments[_i];
        }
        var body = {};
        body["jsonrpc"] = "2.0";
        body["id"] = 1;
        body["method"] = method;
        var params = [];
        for (var i = 0; i < _params.length; i++) {
            params.push(_params[i]);
        }
        body["params"] = params;
        return body;
    };
    WWW.api_getHeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r, height;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getblockcount");
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        height = parseInt(r[0]["blockcount"]) - 1;
                        return [2 /*return*/, height];
                }
            });
        });
    };
    WWW.api_getAllAssets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getallasset");
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_getUTXO = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getutxo", address);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_getBalance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var res, str, value, json, r, balances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = new entity_1.Result();
                        str = WWW.makeRpcUrl(WWW.api, "getbalance", address);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, value.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"];
                            balances = r;
                            balances.map(function (balance) { return balance.names = balance.name.map(function (name) { return name.name; }).join('|'); });
                            balances.map(function (balance) {
                                if (balance.asset == entity_1.AssetEnum.NEO) {
                                    balance.names = "NEO";
                                }
                                if (balance.asset == entity_1.AssetEnum.GAS) {
                                    balance.names = "GAS";
                                }
                            });
                            res.err = false;
                            res.info = balances;
                        }
                        else {
                            res.err = true;
                            res.info = json["error"];
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    WWW.otc_getBalances = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var str, value, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.otcgo + "/address/balances/{" + address + "}";
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, value.json()];
                    case 2:
                        json = _a.sent();
                        r = json["data"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_getAddressTxs = function (address, size, page) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getaddresstxs", address, size, page);
                        return [4 /*yield*/, fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_postRawTransaction = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("sendrawtransaction", data.toHexString());
                        return [4 /*yield*/, fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_getclaimgas = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getclaimgas", address);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        if (r == undefined)
                            return [2 /*return*/, 0];
                        return [2 /*return*/, r[0]["gas"]];
                }
            });
        });
    };
    WWW.rpc_getURL = function () {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getnoderpcapi");
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        url = r.nodeList[0];
                        WWW.rpc = url;
                        WWW.rpcName = r.nodeType;
                        return [2 /*return*/, url];
                }
            });
        });
    };
    WWW.rpc_getHeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r, height;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getblockcount");
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        height = parseInt(r) - 1;
                        return [2 /*return*/, height];
                }
            });
        });
    };
    WWW.rpc_getStorage = function (scripthash, key) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getstorage", scripthash.toHexString(), key.toHexString());
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"] == null)
                            return [2 /*return*/, null];
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.rpc_getInvokescript = function (scripthash) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "invokescript", scripthash.toHexString());
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"] == null)
                            return [2 /*return*/, null];
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api = "https://api.nel.group/api/mainnet";
    WWW.rpc = "http://47.96.168.8:20332/mainnet";
    WWW.otcgo = "http://state-api.otcgo.cn/api/v1/mainnet";
    WWW.rpcName = "";
    return WWW;
}());
exports.WWW = WWW;


/***/ }),

/***/ "5LD5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__("6nHw");
var StorageTool = /** @class */ (function () {
    function StorageTool() {
    }
    StorageTool.getLoginArr = function () {
        var message = sessionStorage.getItem("login-info-arr");
        var arr = entity_1.LoginInfo.StringToArray(message);
        return arr;
    };
    StorageTool.setLoginArr = function (value) {
        sessionStorage.setItem('login-info-arr', entity_1.LoginInfo.ArrayToString(value));
    };
    StorageTool.setStorage = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    StorageTool.getStorage = function (key) {
        return sessionStorage.getItem(key);
    };
    return StorageTool;
}());
exports.StorageTool = StorageTool;
var StaticStore = /** @class */ (function () {
    function StaticStore() {
    }
    StaticStore.setAsset = function (asset) {
        StaticStore.choiceAsset = asset;
    };
    StaticStore.choiceAsset = "";
    return StaticStore;
}());
exports.StaticStore = StaticStore;


/***/ }),

/***/ "6nHw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var storagetool_1 = __webpack_require__("5LD5");
var LoginInfo = /** @class */ (function () {
    function LoginInfo() {
    }
    LoginInfo.ArrayToString = function (array) {
        var obj = [];
        for (var i = 0; i < array.length; i++) {
            obj.push({});
            obj[i].pubkey = array[i].pubkey.toHexString();
            obj[i].prikey = array[i].prikey.toHexString();
            obj[i].address = array[i].address;
        }
        return JSON.stringify(obj);
    };
    LoginInfo.StringToArray = function (str) {
        var obj = JSON.parse(str);
        var arr = [];
        for (var i = 0; i < obj.length; i++) {
            arr.push(new LoginInfo());
            var str = obj[i].prikey;
            var str2 = obj[i].pubkey;
            arr[i].prikey = str.hexToBytes();
            arr[i].pubkey = str2.hexToBytes();
            arr[i].address = obj[i].address;
        }
        return arr;
    };
    LoginInfo.getCurrentLogin = function () {
        var address = LoginInfo.getCurrentAddress();
        var arr = storagetool_1.StorageTool.getLoginArr();
        var n = arr.findIndex(function (info) { return info.address == address; });
        return arr[n];
    };
    LoginInfo.getCurrentAddress = function () {
        return storagetool_1.StorageTool.getStorage("current-address");
    };
    LoginInfo.setCurrentAddress = function (str) {
        storagetool_1.StorageTool.setStorage("current-address", str);
    };
    return LoginInfo;
}());
exports.LoginInfo = LoginInfo;
var BalanceInfo = /** @class */ (function () {
    function BalanceInfo() {
    }
    return BalanceInfo;
}());
exports.BalanceInfo = BalanceInfo;
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());
exports.Result = Result;
var AssetEnum;
(function (AssetEnum) {
    AssetEnum["NEO"] = "0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    AssetEnum["GAS"] = "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
})(AssetEnum = exports.AssetEnum || (exports.AssetEnum = {}));
var NeoAsset = /** @class */ (function () {
    function NeoAsset() {
    }
    return NeoAsset;
}());
exports.NeoAsset = NeoAsset;
var UTXO = /** @class */ (function () {
    function UTXO() {
    }
    return UTXO;
}());
exports.UTXO = UTXO;
var Consts = /** @class */ (function () {
    function Consts() {
    }
    Consts.baseContract = "0xdffbdd534a41dd4c56ba5ccba9dfaaf4f84e1362";
    Consts.registerContract = "d6a5e965f67b0c3e5bec1f04f028edb9cb9e3f7c";
    return Consts;
}());
exports.Consts = Consts;
var DomainInfo = /** @class */ (function () {
    function DomainInfo() {
    }
    return DomainInfo;
}());
exports.DomainInfo = DomainInfo;
var RootDomainInfo = /** @class */ (function (_super) {
    __extends(RootDomainInfo, _super);
    function RootDomainInfo() {
        return _super.call(this) || this;
    }
    return RootDomainInfo;
}(DomainInfo));
exports.RootDomainInfo = RootDomainInfo;


/***/ }),

/***/ "7vgD":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJiYWxhbmNlNC10ZXN0bmV0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IummlumhtS10cmFuc2Zlci1pbnB1dDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MjIuMDAwMDAwLCAtMzc4LjAwMDAwMCkiPg0KICAgICAgICAgICAgPGcgaWQ9InRyYW5zZmVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAuMDAwMDAwLCAyMjYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9IuWkp+Wbvuaghy/orablkYoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyMi4wMDAwMDAsIDE1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDEyLjE0ODE0ODEgQzI0LDUuMzcyNDQ0NDQgMTguNjI3NTU1NiwwIDExLjg1MTg1MTksMCBDNS4zNzI0NDQ0NCwwIDAsNS4zNzI0NDQ0NCAwLDEyLjE0ODE0ODEgQzAsMTguNjI3NTU1NiA1LjM3MjQ0NDQ0LDI0IDExLjg1MTg1MTksMjQgQzE4LjYyNzU1NTYsMjQgMjQsMTguNjI3NTU1NiAyNCwxMi4xNDgxNDgxIFoiIGlkPSJGaWxsLSIgZmlsbD0iI0ZGNkE2QSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIsNi40NTE2MTI5IEMxMi41MDIzMTU2LDYuNDUxNjEyOSAxMi44ODg1NDM3LDYuODQ5MTA0ODUgMTIuODcwNDMyMyw3LjMzOTQzNjAxIEwxMi42MzQ5NDQsMTMuNzE0ODUyIEMxMi42MTY2NzIsMTQuMjA5NTMyNCAxMi4xOTkwMjU1LDE0LjYwMjY3NTEgMTEuNzAxNzQ1NSwxNC42MDI2NzUxIEwxMi4yOTgyNTQ1LDE0LjYwMjY3NTEgQzExLjgwNTU3MDksMTQuNjAyNjc1MSAxMS4zODMxNjczLDE0LjIwNTE4MzEgMTEuMzY1MDU2LDEzLjcxNDg1MiBMMTEuMTI5NTY3Nyw3LjMzOTQzNjAxIEMxMS4xMTEyOTU3LDYuODQ0NzU1NTcgMTEuNTAxMTYyMiw2LjQ1MTYxMjkgMTIsNi40NTE2MTI5IFogTTEyLDE3LjU0ODM4NzEgQzExLjUwMTE2MjIsMTcuNTQ4Mzg3MSAxMS4wOTY3NzQyLDE3LjE0Mzk5OTEgMTEuMDk2Nzc0MiwxNi42NDUxNjEzIEMxMS4wOTY3NzQyLDE2LjE0NjMyMzUgMTEuNTAxMTYyMiwxNS43NDE5MzU1IDEyLDE1Ljc0MTkzNTUgQzEyLjQ5ODgzNzgsMTUuNzQxOTM1NSAxMi45MDMyMjU4LDE2LjE0NjMyMzUgMTIuOTAzMjI1OCwxNi42NDUxNjEzIEMxMi45MDMyMjU4LDE3LjE0Mzk5OTEgMTIuNDk4ODM3OCwxNy41NDgzODcxIDEyLDE3LjU0ODM4NzEgWiIgaWQ9IlBhdGgtIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"

/***/ }),

/***/ "BBLG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "D8AQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "GZV2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./src/pages/nns.ts
var nns = __webpack_require__("cfoD");
var nns_default = /*#__PURE__*/__webpack_require__.n(nns);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-56c6e3ba","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/nns.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('wallet-layout',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"title"},[_c('span',[_vm._v("Register Neo Name")])]),_vm._v(" "),_c('div',{staticClass:"form-inline"},[_c('div',{staticClass:"input-group nns-register",class:{ 'input-err': _vm.domainerr }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.nnsstr),expression:"nnsstr"}],staticClass:"form-control nel",attrs:{"type":"text","placeholder":"type a name"},domProps:{"value":(_vm.nnsstr)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.nnsstr=$event.target.value},_vm.verifyDomain]}}),_vm._v(" "),_c('span',{staticClass:"input-group-addon nel "},[_c('Span',[_vm._v(_vm._s(_vm.network))])],1)]),_vm._v(" "),_c('button',{staticClass:"btn btn-nel btn-big",on:{"click":_vm.nnsRegister}},[_vm._v("Register")]),_vm._v(" "),_c('div',[_c('span',[_vm._v(_vm._s(_vm.errmsg))])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_nns = (esExports);
// CONCATENATED MODULE: ./src/pages/nns.vue
function injectStyle (ssrContext) {
  __webpack_require__("uw+d")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  nns_default.a,
  pages_nns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_nns = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Gc41":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VLink_vue_1 = __webpack_require__("N5E8");
var vue_class_component_1 = __webpack_require__("c+8m");
var vue_1 = __webpack_require__("/5sW");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loginshow = false;
        return _this;
    }
    Main.prototype.mounted = function () {
        if (this.$root["currentRoute"] == "") {
            this.$root["currentRoute"] = "#login";
        }
        if (this.$root["currentRoute"] == "#login") {
            document.body.classList.add("login-body");
            this.loginshow = false;
        }
        else {
            document.body.classList.remove("login-body");
            this.loginshow = true;
        }
    };
    Main = __decorate([
        vue_class_component_1.default({
            components: {
                VLink: VLink_vue_1.default
            }
        })
    ], Main);
    return Main;
}(vue_1.default));
exports.default = Main;


/***/ }),

/***/ "HTQ/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ILH5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_property_decorator_1 = __webpack_require__("EOM2");
var Main_vue_1 = __webpack_require__("l7Tq");
var neotools_1 = __webpack_require__("PMwo");
var storagetool_1 = __webpack_require__("5LD5");
var entity_1 = __webpack_require__("6nHw");
var VLink_vue_1 = __webpack_require__("N5E8");
var login = /** @class */ (function (_super) {
    __extends(login, _super);
    function login() {
        var _this = _super.call(this) || this;
        // Data property
        _this.Message = "hello world";
        _this.wallet = new ThinNeo.nep6wallet();
        _this.filename = "";
        _this.password = "";
        _this.nep2 = "";
        _this.nep2pwd = "";
        _this.wif = "";
        _this.walletname = "";
        _this.walletpwd = "";
        _this.confirmpwd = "";
        _this.nameerr = "";
        _this.pwderr = "";
        _this.pwdmsg = "";
        _this.confirmerr = "";
        _this.moudle_nep6 = true;
        _this.moudle_wif = false;
        _this.moudle_nep2 = false;
        _this.moudle_generate = false;
        _this.moudle_download = false;
        _this.download_name = "";
        _this.download_href = "";
        _this.reader = new FileReader();
        _this.reader.onload = function () {
            var walletstr = _this.reader.result;
            _this.wallet.fromJsonStr(walletstr);
        };
        //初始化隨機數生成器
        //該隨機數生成器的原理是收集鼠標事件，所以早點打開，效果好
        Neo.Cryptography.RandomNumberGenerator.startCollectors();
        return _this;
    }
    login.prototype.mounted = function () {
    };
    // Lifecycle hook
    login.prototype.fileChange = function ($event) {
        this.file = $event.target.files[0];
        this.filename = this.file.name;
        if (this.filename.includes(".json")) {
            this.reader.readAsText(this.file);
        }
    };
    login.prototype.login = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var res, loginarray, login, res, loginarray, login;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mui.toast("Be patient and wait for patience ...");
                        if (type == "nep6") {
                            neotools_1.neotools.nep6Load(this.wallet, this.password)
                                .then(function (res) {
                                var loginarray = res.info;
                                storagetool_1.StorageTool.setLoginArr(loginarray);
                                entity_1.LoginInfo.setCurrentAddress(loginarray[0].address);
                                mui.toast('Authentication passed, entering your account ^_^ ...', { duration: 'long', type: 'div' });
                                window.location.hash = "#balance";
                            })
                                .catch(function (e) {
                                mui.alert(">_< !!! The login failure error message is as follows:" + e);
                            });
                        }
                        if (type == "wif") {
                            res = neotools_1.neotools.wifDecode(this.wif);
                            if (res.err) {
                                mui.toast(">_< !!! Please enter the correct string ");
                            }
                            else {
                                loginarray = new Array();
                                login = res.info;
                                loginarray.push(login);
                                storagetool_1.StorageTool.setLoginArr(loginarray);
                                entity_1.LoginInfo.setCurrentAddress(login.address);
                                mui.toast('Authentication passed, entering your account ^_^ ...', { duration: 'long', type: 'div' });
                                window.location.hash = "#balance";
                            }
                        }
                        if (!(type == "nep2")) return [3 /*break*/, 2];
                        return [4 /*yield*/, neotools_1.neotools.nep2ToWif(this.nep2, this.nep2pwd)];
                    case 1:
                        res = _a.sent();
                        if (res.err) {
                            mui.toast(">_< !!! Please enter the correct string ");
                        }
                        else {
                            loginarray = new Array();
                            login = res.info;
                            loginarray.push(login);
                            storagetool_1.StorageTool.setLoginArr(loginarray);
                            entity_1.LoginInfo.setCurrentAddress(login.address);
                            mui.toast('Authentication passed, entering your account ^_^ ...', { duration: 'long', type: 'div' });
                            window.location.hash = "#balance";
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    login.prototype.cutModual = function (page) {
        if (page == "wif") {
            this.moudle_wif = true;
            this.moudle_nep2 = false;
            this.moudle_nep6 = false;
            this.moudle_generate = false;
            this.moudle_download = false;
        }
        if (page == "nep2") {
            this.moudle_wif = false;
            this.moudle_nep2 = true;
            this.moudle_nep6 = false;
            this.moudle_generate = false;
            this.moudle_download = false;
        }
        if (page == "nep6") {
            this.moudle_wif = false;
            this.moudle_nep2 = false;
            this.moudle_nep6 = true;
            this.moudle_generate = false;
            this.moudle_download = false;
        }
        if (page == "generate") {
            this.moudle_wif = false;
            this.moudle_nep2 = false;
            this.moudle_nep6 = false;
            this.moudle_generate = true;
            this.moudle_download = false;
        }
        if (page == "download") {
            this.moudle_wif = false;
            this.moudle_nep2 = false;
            this.moudle_nep6 = false;
            this.moudle_generate = false;
            this.moudle_download = true;
        }
    };
    login.prototype.verifypwd = function () {
        if (this.walletpwd.length < 8) {
            this.pwderr = 'true';
            this.pwdmsg = "Please enter a password of at least eight characters";
            return false;
        }
        var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
        if (!reg.test(this.walletpwd)) {
            this.pwderr = 'true';
            this.pwdmsg = "Use at least one character and one number ";
            return false;
        }
        else {
            this.pwderr = 'false';
            this.pwdmsg = '';
            return true;
        }
    };
    login.prototype.verifyConfirm = function () {
        if (this.walletpwd == this.confirmpwd) {
            this.confirmerr = 'false';
            return true;
        }
        else {
            this.confirmerr = 'true';
            return false;
        }
    };
    login.prototype.verifyName = function () {
        this.walletname = this.walletname.replace(' ', '');
        if (this.walletname.length == 0) {
            this.nameerr = 'true';
            return false;
        }
        else {
            this.nameerr = 'false';
            return true;
        }
    };
    login.prototype.generate = function () {
        var _this = this;
        var confirm = this.verifyConfirm();
        var pwd = this.verifypwd();
        var name = this.verifyName();
        if (confirm && pwd && name) {
            this.cutModual('download');
            var array = new Uint8Array(32);
            var key = Neo.Cryptography.RandomNumberGenerator.getRandomValues(array);
            // spanPri.textContent = key.toHexString();
            var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(key);
            var addr = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
            this.moudle_download = true;
            this.wallet.scrypt = new ThinNeo.nep6ScryptParameters();
            this.wallet.scrypt.N = 16384;
            this.wallet.scrypt.r = 8;
            this.wallet.scrypt.p = 8;
            this.wallet.accounts = [];
            this.wallet.accounts[0] = new ThinNeo.nep6account();
            this.wallet.accounts[0].address = addr;
            ThinNeo.Helper.GetNep2FromPrivateKey(key, this.walletpwd, this.wallet.scrypt.N, this.wallet.scrypt.r, this.wallet.scrypt.p, function (info, result) {
                if (info == "finish") {
                    _this.wallet.accounts[0].nep2key = result;
                    _this.wallet.accounts[0].contract = new ThinNeo.contract();
                    var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(key);
                    _this.wallet.accounts[0].contract.script = ThinNeo.Helper.GetAddressCheckScriptFromPublicKey(pubkey).toHexString();
                    var jsonstr = JSON.stringify(_this.wallet.toJson());
                    var blob = new Blob([ThinNeo.Helper.String2Bytes(jsonstr)]);
                    _this.download_href = URL.createObjectURL(blob);
                    _this.download_name = _this.walletname + ".json";
                }
            });
        }
    };
    login.prototype.wifImport = function () {
    };
    login.prototype.nep2Import = function () {
    };
    login = __decorate([
        vue_property_decorator_1.Component({
            components: {
                "main-layout": Main_vue_1.default,
                "v-link": VLink_vue_1.default
            }
        }),
        __metadata("design:paramtypes", [])
    ], login);
    return login;
}(vue_1.default));
exports.default = login;


/***/ }),

/***/ "Luci":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./src/pages/login.ts
var login = __webpack_require__("ILH5");
var login_default = /*#__PURE__*/__webpack_require__.n(login);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c60d9592","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/login.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main-layout',[_c('div',{staticStyle:{"height":"180px"}}),_vm._v(" "),_c('div',{staticClass:"container-box"},[_c('div',{staticClass:"row login-container"},[_c('div',{staticClass:"container-left"},[_c('div',{staticClass:"container-icon"},[_c('img',{attrs:{"src":__webpack_require__("4+Dl"),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"container-title",class:{'active':!(_vm.moudle_generate||_vm.moudle_download)},on:{"click":function($event){_vm.cutModual('nep6')}}},[_c('span',{ref:"login"},[_vm._v("Login")])]),_vm._v(" "),_c('div',{staticClass:"container-title",class:{'active':(_vm.moudle_generate || _vm.moudle_download)},on:{"click":function($event){_vm.cutModual('generate')}}},[_c('span',{ref:"login"},[_vm._v("Generate")])])]),_vm._v(" "),_c('div',{staticClass:"container-right"},[(_vm.moudle_nep6)?_c('div',{staticClass:"nep6-imp"},[_c('div',{staticClass:"title-login"},[_c('span',[_vm._v("\n              Login your wallet\n            ")])]),_vm._v(" "),_c('div',{staticClass:"input-login"},[_c('div',{staticClass:"input-group nel-input-blg"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.filename),expression:"filename"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Select keystore file. ","disabled":"true"},domProps:{"value":(_vm.filename)},on:{"input":function($event){if($event.target.composing){ return; }_vm.filename=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"input-group-addon"},[_c('button',{staticClass:"btn btn-nel fileinput-button"},[_c('span',[_vm._v("Select")]),_vm._v(" "),_c('input',{attrs:{"type":"file"},on:{"change":_vm.fileChange}})])])])]),_vm._v(" "),_c('div',{staticClass:"input-login",staticStyle:{"padding-top":"40px"}},[_c('div',{staticClass:"input-group nel-input-blg"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"form-control",attrs:{"placeholder":"Enter password. ","type":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"input-group-addon"},[_c('button',{staticClass:"btn btn-nel fileinput-button",on:{"click":function($event){_vm.login('nep6')}}},[_vm._v("\n                  Login\n                ")])])])]),_vm._v(" "),_c('div',{staticStyle:{"height":"36px","padding-top":"80px","padding-bottom":"30px","text-align":"center"}},[_c('hr',{attrs:{"width":"80%","color":"#987cb9"}}),_vm._v(" "),_c('div',{staticClass:"hr-more"},[_vm._v("or you can")])]),_vm._v(" "),_c('div',{staticStyle:{"width":"417px","margin":"0 auto","padding-top":"30px"}},[_c('button',{staticClass:"btn btn-nel btn-import",on:{"click":function($event){_vm.cutModual('wif')}}},[_vm._v("Import key from WIF String ")])]),_vm._v(" "),_c('div',{staticStyle:{"width":"417px","margin":"0 auto","padding-top":"20px","padding-bottom":"5.9%"}},[_c('button',{staticClass:"btn btn-nel btn-import",on:{"click":function($event){_vm.cutModual('nep2')}}},[_vm._v("Import key from nep2 String ")])])]):_vm._e(),_vm._v(" "),(_vm.moudle_wif)?_c('div',{staticClass:"wif_imp"},[_c('div',{staticClass:"title-login"},[_c('span',[_vm._v("WIF Private Key")])]),_vm._v(" "),_c('div',{staticClass:"nel-input-blg"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.wif),expression:"wif"}],attrs:{"type":"text","placeholder":"Enter your private key. "},domProps:{"value":(_vm.wif)},on:{"input":function($event){if($event.target.composing){ return; }_vm.wif=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"login-btn"},[_c('button',{staticClass:"btn btn-nel btn-import",on:{"click":function($event){_vm.login('wif')}}},[_vm._v("Login")])]),_vm._v(" "),_c('div',{staticClass:"back"},[_c('a',{on:{"click":function($event){_vm.cutModual('nep6')}}},[_vm._v("< Back")])])]):_vm._e(),_vm._v(" "),(_vm.moudle_nep2)?_c('div',{staticClass:"nep2_imp"},[_c('div',{staticClass:"title-login"},[_c('span',[_vm._v("Nep2")])]),_vm._v(" "),_c('div',{staticClass:"nel-input-blg"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.nep2),expression:"nep2"}],attrs:{"type":"text","placeholder":"Enter your Nep2. "},domProps:{"value":(_vm.nep2)},on:{"input":function($event){if($event.target.composing){ return; }_vm.nep2=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"nel-input-blg"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.nep2pwd),expression:"nep2pwd"}],attrs:{"type":"password","placeholder":"Enter password. "},domProps:{"value":(_vm.nep2pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.nep2pwd=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"login-btn"},[_c('button',{staticClass:"btn btn-nel btn-import",on:{"click":function($event){_vm.login('nep2')}}},[_vm._v("Login")])]),_vm._v(" "),_c('div',{staticClass:"back"},[_c('a',{on:{"click":function($event){_vm.cutModual('nep6')}}},[_vm._v("< Back")])])]):_vm._e(),_vm._v(" "),(_vm.moudle_generate)?_c('div',{staticClass:"generate"},[_c('div',{staticClass:"title-login"},[_c('span',[_vm._v("Generate a new wallet")])]),_vm._v(" "),_c('div',{class:_vm.nameerr!=''?( _vm.nameerr == 'true' ?'err':'success') :''},[_c('div',{staticClass:"nel-input-blg"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.walletname),expression:"walletname"}],attrs:{"type":"text","placeholder":"Name your wallet. "},domProps:{"value":(_vm.walletname)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.walletname=$event.target.value},_vm.verifyName],"blur":_vm.verifyName}})]),_vm._v(" "),_c('div',{staticClass:"message"},[(_vm.nameerr=='true')?_c('p',[_c('img',{attrs:{"src":__webpack_require__("7vgD"),"alt":""}}),_vm._v("   Wallet name cannot be empty.")]):_vm._e(),_vm._v(" "),(_vm.nameerr=='false')?_c('p',[_c('img',{attrs:{"src":__webpack_require__("wtuE"),"alt":""}}),_vm._v("   Verification pass. ")]):_vm._e()])]),_vm._v(" "),_c('div',{class:_vm.pwderr!=''?( _vm.pwderr == 'true' ?'err':'success') :''},[_c('div',{staticClass:"nel-input-blg"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.walletpwd),expression:"walletpwd"}],attrs:{"type":"password","placeholder":"Enter password. "},domProps:{"value":(_vm.walletpwd)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.walletpwd=$event.target.value},_vm.verifypwd],"blur":_vm.verifypwd}})]),_vm._v(" "),_c('div',{staticClass:"message"},[(_vm.pwderr=='true')?_c('p',[_c('img',{attrs:{"src":__webpack_require__("7vgD"),"alt":""}}),_vm._v("   "+_vm._s(_vm.pwdmsg)+"\n              ")]):_vm._e(),_vm._v(" "),(_vm.pwderr=='false')?_c('p',[_c('img',{attrs:{"src":__webpack_require__("wtuE"),"alt":""}}),_vm._v("   Verification pass.\n              ")]):_vm._e()])]),_vm._v(" "),_c('div',{class:_vm.confirmerr!=''?( _vm.confirmerr == 'true' ?'err':'success') :''},[_c('div',{staticClass:"nel-input-blg"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.confirmpwd),expression:"confirmpwd"}],attrs:{"type":"password","placeholder":"Confirm password. "},domProps:{"value":(_vm.confirmpwd)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.confirmpwd=$event.target.value},_vm.verifyConfirm],"blur":_vm.verifyConfirm}})]),_vm._v(" "),_c('div',{staticClass:"message"},[(_vm.confirmerr=='true')?_c('p',[_c('img',{attrs:{"src":__webpack_require__("7vgD"),"alt":""}}),_vm._v("   Please enter the same password as above.\n              ")]):_vm._e(),_vm._v(" "),(_vm.confirmerr=='false')?_c('p',[_c('img',{attrs:{"src":__webpack_require__("wtuE"),"alt":""}}),_vm._v("   Verification pass.\n              ")]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"login-btn"},[_c('button',{staticClass:"btn btn-nel btn-import",on:{"click":function($event){_vm.generate()}}},[_vm._v("Generate")])])]):_vm._e(),_vm._v(" "),(_vm.moudle_download)?_c('div',{staticClass:"generate download"},[_c('div',{staticClass:"title-login"},[_c('span',[_vm._v("Your keystore file has been created.")])]),_vm._v(" "),_c('p',{staticClass:"guide"},[_vm._v("You can click the ‘download’ button to save your keystore file!")]),_vm._v(" "),_c('div',{staticClass:"login-btn"},[_c('a',{staticClass:"btn btn-nel btn-import",attrs:{"download":_vm.download_name,"href":_vm.download_href}},[_vm._v("Download")])]),_vm._v(" "),_c('div',{staticClass:"remind"},[_c('p',{staticClass:"title-remind"},[_vm._v("Do not lose it!")]),_vm._v(" "),_c('p',{staticClass:"content-remind"},[_vm._v("It can’t be recovered if you lose it.")])])]):_vm._e()])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_login = (esExports);
// CONCATENATED MODULE: ./src/pages/login.vue
function injectStyle (ssrContext) {
  __webpack_require__("+bhF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  login_default.a,
  pages_login,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_login = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "N5E8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/VLink.vue
//
//
//
//
//
//

/* harmony default export */ var VLink = ({
  props: {
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    }
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, this.href, window.location.pathname + this.href);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-179656f6","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/VLink.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:{ active: _vm.isActive },attrs:{"href":_vm.href},on:{"click":_vm.go}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_VLink = (esExports);
// CONCATENATED MODULE: ./src/components/VLink.vue
function injectStyle (ssrContext) {
  __webpack_require__("NLED")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-179656f6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  VLink,
  components_VLink,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_VLink = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NLED":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PMwo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__("6nHw");
///<reference path="./neo-ts.d.ts"/>
var neotools = /** @class */ (function () {
    function neotools() {
    }
    /**
     * verifyPublicKey 验证公钥
     * @param publicKey 公钥
     */
    neotools.verifyPublicKey = function (publicKey) {
        var array = Neo.Cryptography.Base58.decode(publicKey);
        //var hexstr = array.toHexString();
        //var salt = array.subarray(0, 1);
        //var hash = array.subarray(1, 1 + 20);
        var check = array.subarray(21, 21 + 4); //
        var checkdata = array.subarray(0, 21); //
        var hashd = Neo.Cryptography.Sha256.computeHash(checkdata); //
        hashd = Neo.Cryptography.Sha256.computeHash(hashd); //
        var hashd = hashd.slice(0, 4); //
        var checked = new Uint8Array(hashd); //
        var error = false;
        for (var i = 0; i < 4; i++) {
            if (checked[i] != check[i]) {
                error = true;
                break;
            }
        }
        return !error;
    };
    /**
     * wifDecode wif解码
     * @param wif wif私钥
     */
    neotools.wifDecode = function (wif) {
        var result = new entity_1.Result();
        var login = new entity_1.LoginInfo();
        try {
            login.prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
        }
        catch (e) {
            result.err = true;
            result.info = e.message;
            return result;
        }
        try {
            login.pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(login.prikey);
        }
        catch (e) {
            result.err = true;
            result.info = e.message;
            return result;
        }
        try {
            login.address = ThinNeo.Helper.GetAddressFromPublicKey(login.pubkey);
        }
        catch (e) {
            result.err = true;
            result.info = e.message;
            return result;
        }
        result.info = login;
        return result;
    };
    /**
     * nep2FromWif
     */
    neotools.nep2FromWif = function (wif, password) {
        var prikey;
        var pubkey;
        var address;
        var res = new entity_1.Result();
        try {
            prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
            var n = 16384;
            var r = 8;
            var p = 8;
            ThinNeo.Helper.GetNep2FromPrivateKey(prikey, password, n, r, p, function (info, result) {
                res.err = false;
                res.info.nep2 = result;
                pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
                var hexstr = pubkey.toHexString();
                address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                res.info.address = address;
                return res;
            });
        }
        catch (e) {
            res.err = true;
            res.info = e.message;
            return res;
        }
    };
    /**
     * nep2TOWif
     */
    neotools.nep2ToWif = function (nep2, password) {
        return __awaiter(this, void 0, void 0, function () {
            var res, login, promise;
            return __generator(this, function (_a) {
                res = new entity_1.Result();
                login = new entity_1.LoginInfo();
                promise = new Promise(function (resolve, reject) {
                    var n = 16384;
                    var r = 8;
                    var p = 8;
                    ThinNeo.Helper.GetPrivateKeyFromNep2(nep2, password, n, r, p, function (info, result) {
                        //spanNep2.textContent = "info=" + info + " result=" + result;
                        console.log("result=" + "info=" + info + " result=" + result);
                        login.prikey = result;
                        if (login.prikey != null) {
                            login.pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(login.prikey);
                            login.address = ThinNeo.Helper.GetAddressFromPublicKey(login.pubkey);
                            res.err = false;
                            res.info = login;
                            resolve(res);
                        }
                        else {
                            res.err = true;
                            // spanWif.textContent = "result=" + "info=" + info + " result=" + result;
                            reject(res);
                        }
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    /**
     * nep6Load
     */
    neotools.nep6Load = function (wallet, password) {
        return __awaiter(this, void 0, void 0, function () {
            var istart, res, arr, keyindex, account, result, error_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        istart = 0;
                        res = new entity_1.Result();
                        arr = new Array();
                        keyindex = 0;
                        _a.label = 1;
                    case 1:
                        if (!(keyindex < wallet.accounts.length)) return [3 /*break*/, 6];
                        account = wallet.accounts[keyindex];
                        if (account.nep2key == null) {
                            return [3 /*break*/, 5];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, neotools.getPriKeyfromAccount(wallet.scrypt, password, account)];
                    case 3:
                        result = _a.sent();
                        console.log("getpkformacc:" + result);
                        arr.push(result.info);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        res.err = true;
                        res.info = error_1;
                        return [2 /*return*/, res];
                    case 5:
                        keyindex++;
                        return [3 /*break*/, 1];
                    case 6:
                        res.err = false;
                        res.info = arr;
                        return [2 /*return*/, res];
                    case 7:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * getPriKeyform
     */
    neotools.getPriKeyfromAccount = function (scrypt, password, account) {
        return __awaiter(this, void 0, void 0, function () {
            var res, promise;
            return __generator(this, function (_a) {
                res = new entity_1.Result();
                promise = new Promise(function (resolve, reject) {
                    account.getPrivateKey(scrypt, password, function (info, result) {
                        if (info == "finish") {
                            var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(result);
                            var address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                            var wif = ThinNeo.Helper.GetWifFromPrivateKey(result);
                            var hexkey = result.toHexString();
                            console.log(info + "|" + address + " wif=" + wif);
                            res.err = false;
                            res.info = { pubkey: pubkey, address: address, prikey: result };
                            resolve(res);
                        }
                        else {
                            // info2.textContent += info + "|" + result;
                            reject({ err: true, result: result });
                        }
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    return neotools;
}());
exports.neotools = neotools;


/***/ }),

/***/ "PPZq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/layouts/wallet.vue
var wallet = __webpack_require__("1d4v");
var wallet_default = /*#__PURE__*/__webpack_require__.n(wallet);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8294906a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layouts/wallet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main-layout',[_c('nav',{staticClass:"navbar navbar-wallet"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"navbar-collapse collapse",attrs:{"id":"navbar"}},[_c('ul',{staticClass:"nav navbar-nav navbar-left"},[_c('li',[_c('v-link',{ref:"balance",attrs:{"href":"#balance"}},[_c('span',{class:[_vm.balance]}),_vm._v(" Balance\n            ")])],1),_vm._v(" "),_c('li',[_c('v-link',{ref:"transfer",attrs:{"href":"#transfer"}},[_c('span',{class:[_vm.transfer]}),_vm._v(" Transfer\n            ")])],1),_vm._v(" "),_c('li',[_c('v-link',{ref:"nns",attrs:{"href":"#nns"}},[_c('span',{class:[_vm.nns]}),_vm._v(" NNS\n            ")])],1),_vm._v(" "),_c('li',[_c('v-link',{ref:"setting",attrs:{"href":"#settings"}},[_c('span',{class:[_vm.setting]}),_vm._v(" Settings\n            ")])],1)]),_vm._v(" "),_c('div',{staticClass:"blockheight"},[_vm._v("Block Height："+_vm._s(_vm.blockheight))])])])]),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layouts_wallet = (esExports);
// CONCATENATED MODULE: ./src/layouts/wallet.vue
function injectStyle (ssrContext) {
  __webpack_require__("BBLG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  wallet_default.a,
  layouts_wallet,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_layouts_wallet = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "QRjO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./src/pages/balance.ts
var balance = __webpack_require__("2xXY");
var balance_default = /*#__PURE__*/__webpack_require__.n(balance);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f7c2a300","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/balance.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('wallet-layout',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"title",staticStyle:{"padding-bottom":"28px"}},[_c('span',[_vm._v("NEO Balance")]),_vm._v(" "),_c('div',{staticStyle:{"float":"right"}},[_c('span',{staticClass:"user-select-ok",staticStyle:{"margin-right":"11px","color":"#fff"}},[_vm._v("Key Address ："+_vm._s(_vm.currentAddress))]),_vm._v(" "),_c('button',{staticClass:"btn",class:_vm.chooseAddress && _vm.chooseAddress.length>1 ? 'btn-nel' : 'btn-disabled'},[_vm._v("Switch")])])]),_vm._v(" "),_c('div',{staticClass:"neobalance",staticStyle:{"background":"#454F60","border-radius":"5px"}},[_c('div',[_c('div',{staticStyle:{"padding":"30px","padding-bottom":"40px"}},[_c('span',{staticClass:"balance-type"},[_vm._v("NEO ")]),_vm._v(" "),_c('span',{staticClass:"balance-amount"},[_vm._v(_vm._s(_vm.neoasset.neo))])]),_vm._v(" "),_c('div',{staticStyle:{"padding-left":"30px","padding-bottom":"30px"}},[_c('span',{staticClass:"balance-type"},[_vm._v("GAS ")]),_vm._v(" "),_c('span',{staticClass:"balance-amount"},[_vm._v(_vm._s(_vm.neoasset.gas))])]),_vm._v(" "),_c('div',{staticClass:"claim",staticStyle:{"padding":"30px","padding-left":"2.3%"}},[_c('span',{staticStyle:{"margin-right":"17px"}},[_vm._v("GAS available to claim : "+_vm._s(_vm.neoasset.claim))]),_vm._v(" "),(_vm.neoasset.claim>0)?_c('button',{staticClass:"btn btn-nel"},[_vm._v("Claim")]):_vm._e()])])]),_vm._v(" "),(_vm.balances.length)?_c('div',{staticClass:"balance-asset"},[_c('div',{staticClass:"title"},[_c('span',[_vm._v("Asset")])]),_vm._v(" "),_vm._l((_vm.balances),function(balance){return _c('div',{key:balance.asset,staticClass:"assetrow"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-2 info"},[_c('span',[_vm._v(_vm._s(balance.names))])]),_vm._v(" "),_c('div',{staticClass:"col-lg-8 info"},[_c('span',[_vm._v(" "+_vm._s(balance.balance))])]),_vm._v(" "),_c('div',{staticClass:"col-lg-2 transfer-btn"},[_c('span',{staticClass:"btn btn-transfer",on:{"click":function($event){_vm.toTransfer(balance.asset)}}},[_vm._v("Transfer")])])])])})],2):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_balance = (esExports);
// CONCATENATED MODULE: ./src/pages/balance.vue
function injectStyle (ssrContext) {
  __webpack_require__("HTQ/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  balance_default.a,
  pages_balance,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_balance = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ar5l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__("6nHw");
var wwwtool_1 = __webpack_require__("50aY");
var cointool_1 = __webpack_require__("pLPz");
/**
 * @name NEONameServiceTool
 * @method initRootDomain_初始化根域名信息
 */
var NNSTool = /** @class */ (function () {
    function NNSTool() {
    }
    /**
     * @method 初始化根域名信息
     */
    NNSTool.initRootDomain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var test, _a, _b, domain;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        test = new entity_1.RootDomainInfo();
                        _a = test;
                        return [4 /*yield*/, NNSTool.getRootNameHash()];
                    case 1:
                        _a.roothash = _c.sent();
                        _b = test;
                        return [4 /*yield*/, NNSTool.getRootName()];
                    case 2:
                        _b.rootname = _c.sent();
                        return [4 /*yield*/, NNSTool.getDomainInfo(test.roothash)];
                    case 3:
                        domain = _c.sent();
                        test.owner = domain.owner;
                        test.register = domain.register;
                        test.resolver = domain.resolver;
                        test.ttl = domain.ttl;
                        NNSTool.root_test = test;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @method 查询域名信息
     * @param doamin 域名字符串
     */
    NNSTool.queryDomainInfo = function (doamin) {
        return __awaiter(this, void 0, void 0, function () {
            var domainarr, subdomain, nnshash, domains;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domainarr = doamin.split('.');
                        subdomain = domainarr[0];
                        domainarr.shift();
                        domainarr.push(this.root_test.rootname);
                        nnshash = NNSTool.nameHashArray(domainarr);
                        return [4 /*yield*/, NNSTool.getSubOwner(nnshash, subdomain, NNSTool.root_test.register)];
                    case 1:
                        domains = _a.sent();
                        return [2 /*return*/, domains];
                }
            });
        });
    };
    /**
     * 注册域名
     * @param doamin 域名字符串
     */
    NNSTool.registerDomain = function (doamin) {
        return __awaiter(this, void 0, void 0, function () {
            var domainarr, subdomain, nnshash, domains, sb, scriptaddress, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domainarr = doamin.split('.');
                        subdomain = domainarr[0];
                        domainarr.shift();
                        domainarr.push(NNSTool.root_test.rootname);
                        nnshash = NNSTool.nameHashArray(domainarr);
                        return [4 /*yield*/, NNSTool.getSubOwner(nnshash, subdomain, NNSTool.root_test.register)];
                    case 1:
                        domains = _a.sent();
                        sb = new ThinNeo.ScriptBuilder();
                        scriptaddress = NNSTool.root_test.register;
                        sb.EmitParamJson(["(addr)" + entity_1.LoginInfo.getCurrentAddress(), "(bytes)" + nnshash.toHexString(), "(str)" + subdomain]); //第二个参数是个数组
                        sb.EmitPushString("requestSubDomain"); //第一个参数
                        sb.EmitAppCall(scriptaddress); //资产合约
                        res = cointool_1.CoinTool.contractTransaction(sb);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * @method 返回根域名名称
     */
    NNSTool.getRootName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, sb, scriptaddress, data, result, state, stack, bs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "";
                        sb = new ThinNeo.ScriptBuilder();
                        sb.EmitParamJson(JSON.parse("[]"));
                        sb.EmitPushString("rootName");
                        scriptaddress = entity_1.Consts.baseContract.hexToBytes().reverse();
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, wwwtool_1.WWW.rpc_getInvokescript(data)];
                    case 1:
                        result = _a.sent();
                        try {
                            state = result[0].state;
                            // info2.textContent = "";
                            if (state.includes("HALT, BREAK")) {
                                // info2.textContent += "Succ\n";
                            }
                            stack = result[0].stack;
                            //find name 他的type 有可能是string 或者ByteArray
                            if (stack[0].type == "Array") {
                                // info2.textContent += "name=" + stack[0].value + "\n";
                                length = stack[0].lenght;
                            }
                            else if (stack[0].type == "ByteArray") {
                                bs = stack[0].value.hexToBytes();
                                name = ThinNeo.Helper.Bytes2String(bs);
                            }
                            return [2 /*return*/, name];
                        }
                        catch (e) {
                            return [2 /*return*/, e.message];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @method 返回根域名hash
     */
    NNSTool.getRootNameHash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nameHash, sb, scriptaddress, data, result, state, stack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sb = new ThinNeo.ScriptBuilder();
                        sb.EmitParamJson(JSON.parse("[]"));
                        sb.EmitPushString("rootNameHash");
                        scriptaddress = entity_1.Consts.baseContract.hexToBytes().reverse();
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, wwwtool_1.WWW.rpc_getInvokescript(data)];
                    case 1:
                        result = _a.sent();
                        try {
                            state = result[0].state;
                            // info2.textContent = "";
                            if (state.includes("HALT, BREAK")) {
                                // info2.textContent += "Succ\n";
                            }
                            stack = result[0].stack;
                            //find name 他的type 有可能是string 或者ByteArray
                            if (stack[0].type == "ByteArray") {
                                nameHash = stack[0].value.hexToBytes();
                            }
                            return [2 /*return*/, nameHash];
                        }
                        catch (e) {
                            return [2 /*return*/, e.message];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //返回域名详情
    NNSTool.getDomainInfo = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var info, sb, scriptaddress, data, result, state, stackarr, stack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = new entity_1.DomainInfo();
                        sb = new ThinNeo.ScriptBuilder();
                        scriptaddress = entity_1.Consts.baseContract.hexToBytes().reverse();
                        sb.EmitParamJson(["(bytes)" + domain.toHexString()]); //第二个参数是个数组
                        sb.EmitPushString("getInfo");
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, wwwtool_1.WWW.rpc_getInvokescript(data)];
                    case 1:
                        result = _a.sent();
                        try {
                            state = result[0].state;
                            // info2.textContent = "";
                            if (state.includes("HALT, BREAK")) {
                                // info2.textContent += "Succ\n";
                            }
                            stackarr = result[0].stack;
                            if (stackarr[0].type == "Array") {
                                stack = stackarr[0].value;
                                if (stack[0].type == "ByteArray") {
                                    info.owner = stack[0].value.hexToBytes();
                                }
                                if (stack[1].type == "ByteArray") {
                                    info.register = stack[1].value.hexToBytes();
                                }
                                if (stack[2].type == "ByteArray") {
                                    info.resolver = stack[2].value.hexToBytes();
                                }
                                if (stack[3].type == "Integer") {
                                    info.ttl = new Neo.BigInteger(stack[3].value);
                                }
                            }
                        }
                        catch (e) {
                        }
                        return [2 /*return*/, info];
                }
            });
        });
    };
    //返回域名hash
    NNSTool.getNameHash = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var namehash, domainarr, subdomain, root, nnshash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domainarr = domain.split('.');
                        subdomain = domainarr[0];
                        return [4 /*yield*/, NNSTool.getRootName()];
                    case 1:
                        root = _a.sent();
                        domainarr.shift();
                        domainarr.push(root);
                        nnshash = NNSTool.nameHashArray(domainarr);
                        return [2 /*return*/, nnshash];
                }
            });
        });
    };
    //计算子域名hash
    NNSTool.getNameHashSub = function (domainhash, subdomain) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    //nanmeHashArray
    NNSTool.getNameHashArray = function (nameArray) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /**
     *
     * @param protocol
     * @param nnshash
     * @param scriptaddress
     */
    NNSTool.resolve = function (protocol, nnshash, scriptaddress) {
        return __awaiter(this, void 0, void 0, function () {
            var namehash, sb, data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sb = new ThinNeo.ScriptBuilder();
                        sb.EmitParamJson(["(str)" + protocol, "(bytes)" + nnshash.toHexString()]); //第二个参数是个数组
                        sb.EmitPushString("resolve");
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, wwwtool_1.WWW.rpc_getInvokescript(data)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //解析域名完整模式
    NNSTool.resolveFull = function (protocol, nameArray) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /**
     * 此接口为注册器规范要求，必须实现，完整解析域名时会调用此接口验证权利
     * @param nnshash   域名中除最后一位的hash : aa.bb.cc 中的 bb.cc的hash
     * @param subdomain 域名中的最后一位: aa.bb.cc 中的 aa
     */
    NNSTool.getSubOwner = function (nnshash, subdomain, scriptaddress) {
        return __awaiter(this, void 0, void 0, function () {
            var owner, sb, data, result, state, stack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        owner = "";
                        sb = new ThinNeo.ScriptBuilder();
                        //var scriptaddress = Consts.registerContract.hexToBytes().reverse();
                        sb.EmitParamJson(["(bytes)" + nnshash.toHexString(), "(str)" + subdomain]); //第二个参数是个数组
                        sb.EmitPushString("getSubOwner");
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, wwwtool_1.WWW.rpc_getInvokescript(data)];
                    case 1:
                        result = _a.sent();
                        try {
                            state = result[0].state;
                            // info2.textContent = "";
                            if (state.includes("HALT, BREAK")) {
                                stack = result[0].stack;
                                //find name 他的type 有可能是string 或者ByteArray
                                if (stack[0].type == "ByteArray") {
                                    if (stack[0].value != "00") {
                                        owner = ThinNeo.Helper.GetAddressFromScriptHash(stack[0].value.hexToBytes());
                                    }
                                }
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                        return [2 /*return*/, owner];
                }
            });
        });
    };
    /**
     * 此接口为演示的先到先得注册器使用，用户调用注册器的这个接口申请域名
     * @param who         注册人的地址
     * @param nnshash     域名中除最后一位的hash : aa.bb.cc 中的 bb.cc的hash
     * @param subdomain   域名中的最后一位: aa.bb.cc 中的 aa
     */
    NNSTool.requestSubDomain = function (who, nnshash, subdomain) {
        return __awaiter(this, void 0, void 0, function () {
            var namehash, sb, scriptaddress, data, result, state, stack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sb = new ThinNeo.ScriptBuilder();
                        scriptaddress = entity_1.Consts.registerContract.hexToBytes().reverse();
                        sb.EmitParamJson(["(bytes)" + nnshash.toHexString(), "(str)" + subdomain]); //第二个参数是个数组
                        sb.EmitPushString("getSubOwner");
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, wwwtool_1.WWW.rpc_getInvokescript(data)];
                    case 1:
                        result = _a.sent();
                        try {
                            state = result[0].state;
                            // info2.textContent = "";
                            if (state.includes("HALT, BREAK")) {
                                // info2.textContent += "Succ\n";
                            }
                            stack = result[0].stack;
                            //find name 他的type 有可能是string 或者ByteArray
                            if (stack[0].type == "ByteArray") {
                                namehash = stack[0].value.hexToBytes();
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //#region 域名转hash算法
    //域名转hash算法
    //aaa.bb.test =>{"test","bb","aa"}
    /**
     * 域名转hash
     * @param domain 域名
     */
    NNSTool.nameHash = function (domain) {
        var domain_bytes = ThinNeo.Helper.String2Bytes(domain);
        var hashd = Neo.Cryptography.Sha256.computeHash(domain_bytes);
        var namehash = new Uint8Array(hashd);
        return namehash.clone();
    };
    /**
     * 子域名转hash
     * @param roothash  根域名hash
     * @param subdomain 子域名
     */
    NNSTool.nameHashSub = function (roothash, subdomain) {
        var bs = ThinNeo.Helper.String2Bytes(subdomain);
        if (bs.length == 0)
            return roothash;
        var domain = Neo.Cryptography.Sha256.computeHash(bs);
        var domain_bytes = new Uint8Array(domain);
        var domainUint8arry = domain_bytes.concat(roothash);
        var sub = Neo.Cryptography.Sha256.computeHash(domainUint8arry);
        var sub_bytes = new Uint8Array(sub);
        return sub_bytes.clone();
    };
    /**
     * 返回一组域名的最终hash
     * @param domainarray 域名倒叙的数组
     */
    NNSTool.nameHashArray = function (domainarray) {
        domainarray.reverse();
        var hash = NNSTool.nameHash(domainarray[0]);
        for (var i = 1; i < domainarray.length; i++) {
            hash = NNSTool.nameHashSub(hash, domainarray[i]);
        }
        return hash;
    };
    /**
     *
     * @param owner 拥有者
     * @param nnshash 域名hash
     * @param subdomain 子域名
     * @param protocol 解析器类型
     * @param data 解析地址
     */
    NNSTool.setResolveData = function (owner, nnshash, subdomain, protocol, data) {
        return __awaiter(this, void 0, void 0, function () {
            var sb, scriptaddress;
            return __generator(this, function (_a) {
                try {
                    sb = new ThinNeo.ScriptBuilder();
                    scriptaddress = entity_1.Consts.registerContract.hexToBytes().reverse();
                    sb.EmitParamJson(["(addr)" + owner, "(bytes)" + nnshash.toHexString(), "(str)" + subdomain, "(str)addr", "(addr)" + data]); //第二个参数是个数组
                    sb.EmitPushString("getSubOwner");
                    sb.EmitAppCall(scriptaddress);
                    //var data = sb.ToArray();
                    //let result = await WWW.rpc_getInvokescript(data);
                }
                catch (e) {
                }
                return [2 /*return*/, true];
            });
        });
    };
    return NNSTool;
}());
exports.NNSTool = NNSTool;


/***/ }),

/***/ "cfoD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var wallet_vue_1 = __webpack_require__("PPZq");
var nnstool_1 = __webpack_require__("ar5l");
var Nnsmanage = /** @class */ (function (_super) {
    __extends(Nnsmanage, _super);
    function Nnsmanage() {
        var _this = _super.call(this) || this;
        _this.network = ".test";
        _this.nnsstr = "";
        _this.domainerr = false;
        _this.errmsg = "";
        _this.mounted();
        return _this;
    }
    Nnsmanage.prototype.mounted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nnstool_1.NNSTool.initRootDomain()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Nnsmanage.prototype.verifyDomain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var regStr, re, domains;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.nnsstr = this.nnsstr.trim();
                        regStr = "^([a-zA-Z0-9-])";
                        re = new RegExp(regStr);
                        if (!!re.exec(this.nnsstr)) return [3 /*break*/, 1];
                        this.domainerr = true;
                        this.errmsg = "Please enter a domain name in the correct format ";
                        return [2 /*return*/];
                    case 1: return [4 /*yield*/, nnstool_1.NNSTool.queryDomainInfo(this.nnsstr)];
                    case 2:
                        domains = _a.sent();
                        if (domains) {
                            this.domainerr = true;
                            mui.toast("The current domain name is registered : " + domains);
                        }
                        else {
                            this.domainerr = false;
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Nnsmanage.prototype.nnsRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.domainerr) return [3 /*break*/, 2];
                        return [4 /*yield*/, nnstool_1.NNSTool.registerDomain(this.nnsstr)];
                    case 1:
                        res = _a.sent();
                        if (res.err) {
                            console.error(res.info);
                        }
                        else {
                            mui.alert("Domain name registration contract has been issued, please see ");
                            mui.toast(res.info);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Nnsmanage = __decorate([
        vue_class_component_1.default({
            components: {
                "wallet-layout": wallet_vue_1.default
            }
        }),
        __metadata("design:paramtypes", [])
    ], Nnsmanage);
    return Nnsmanage;
}(vue_1.default));
exports.default = Nnsmanage;


/***/ }),

/***/ "dkEd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./src/pages/settings.ts
var settings = __webpack_require__("lqCQ");
var settings_default = /*#__PURE__*/__webpack_require__.n(settings);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ce834676","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/settings.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('wallet-layout',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"title"},[_c('span',[_vm._v("Settings")])]),_vm._v(" "),_c('div',{staticClass:"panel panel-default settings"},[_c('div',[_c('div',{staticStyle:{"padding-top":"2.8%","padding-bottom":"0.9%","padding-left":"2.3%"}},[_c('span',[_vm._v("My Wallet Adress :  "),_c('span',{staticClass:"user-select-ok"},[_vm._v(_vm._s(_vm.address))])])]),_vm._v(" "),_c('div',{staticStyle:{"padding-top":"2.8%","padding-bottom":"0.9%","padding-left":"2.3%"}},[_c('span',[_vm._v("My WIF :   ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-nel",on:{"click":_vm.visibleWif}},[_vm._v("Visible")]),_vm._v(" "),_c('span',{staticClass:"user-select-ok"},[_vm._v("  "+_vm._s(_vm.wif))])]),_vm._v(" "),_c('div',{staticStyle:{"padding-top":"2.8%","padding-bottom":"0.9%","padding-left":"2.3%"}},[_c('span',[_vm._v("My Wallet file :   ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-nel",on:{"click":_vm.download}},[_vm._v("Create")]),_vm._v("   \n                    "),(_vm.href!='')?_c('a',{attrs:{"download":_vm.walletname,"href":_vm.href}},[_vm._v("download")]):_vm._e()]),_vm._v(" "),_c('div',{staticStyle:{"padding-top":"2.8%","padding-bottom":"0.9%","padding-left":"2.3%"}},[_c('p',[_vm._v("This information is very important . It may cause your loss if you lose it .  \n                        "),_c('br'),_vm._v(" Save your keystore file and make copies of your wallet address and your WIF . Don't lose them .\n                    ")])])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_settings = (esExports);
// CONCATENATED MODULE: ./src/pages/settings.vue
function injectStyle (ssrContext) {
  __webpack_require__("D8AQ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  settings_default.a,
  pages_settings,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_settings = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "f3HO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cointool_1 = __webpack_require__("pLPz");
var neotools_1 = __webpack_require__("PMwo");
var entity_1 = __webpack_require__("6nHw");
var storagetool_1 = __webpack_require__("5LD5");
var wallet_vue_1 = __webpack_require__("PPZq");
var wwwtool_1 = __webpack_require__("50aY");
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var transfer = /** @class */ (function (_super) {
    __extends(transfer, _super);
    function transfer() {
        var _this = _super.call(this) || this;
        _this.balances = [];
        _this.balance = new entity_1.BalanceInfo();
        _this.addrerr = "";
        _this.amounterr = "";
        _this.targetaddr = "";
        _this.amount = "";
        _this.asset = "";
        return _this;
    }
    transfer.prototype.mounted = function () {
        var _this = this;
        var str = storagetool_1.StorageTool.getStorage("balances_asset");
        if (str == null)
            this.balances = new Array();
        else {
            this.balances = JSON.parse(str);
            var choose = storagetool_1.StorageTool.getStorage("transfer_choose");
            this.asset = (choose == null ? this.balances[0].asset : choose);
            var n = this.balances.findIndex(function (b) { return b.asset == _this.asset; });
            this.balance = this.balances[n];
            this.history();
        }
    };
    transfer.prototype.choose = function (assetid) {
        var _this = this;
        this.asset = assetid;
        storagetool_1.StorageTool.setStorage("transfer_choose", assetid);
        var n = this.balances.findIndex(function (b) { return b.asset == _this.asset; });
        this.balance = this.balances[n];
    };
    transfer.prototype.verify_addr = function () {
        if (neotools_1.neotools.verifyPublicKey(this.targetaddr))
            this.addrerr = 'false';
        else
            this.addrerr = 'true';
    };
    transfer.prototype.verify_Amount = function () {
    };
    transfer.prototype.send = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cointool_1.CoinTool.rawTransaction(this.targetaddr, this.asset, this.amount)];
                    case 1:
                        res = _a.sent();
                        if (!res.err)
                            mui.alert(res.info);
                        return [2 /*return*/];
                }
            });
        });
    };
    transfer.prototype.history = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, wwwtool_1.WWW.api_getAddressTxs(entity_1.LoginInfo.getCurrentAddress(), 20, 1)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    transfer = __decorate([
        vue_class_component_1.default({
            components: {
                "wallet-layout": wallet_vue_1.default
            }
        }),
        __metadata("design:paramtypes", [])
    ], transfer);
    return transfer;
}(vue_1.default));
exports.default = transfer;


/***/ }),

/***/ "l7Tq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/layouts/Main.vue
var Main = __webpack_require__("Gc41");
var Main_default = /*#__PURE__*/__webpack_require__.n(Main);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-663871e6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layouts/Main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('nav',{staticClass:"navbar navbar-nel navbar-fixed-top"},[_c('div',{staticClass:"container"},[_vm._m(0,false,false),_vm._v(" "),_c('div',{staticClass:"navbar-collapse collapse",attrs:{"id":"navbar"}},[_c('div',{staticClass:"logo"}),_vm._v(" "),_vm._m(1,false,false),_vm._v(" "),_c('ul',{staticClass:"nav navbar-nav navbar-right"},[_vm._m(2,false,false),_vm._v(" "),(_vm.loginshow)?_c('li',[_c('v-link',{ref:"login",attrs:{"href":"#login"}},[_vm._v("logout")])],1):_vm._e()])])])]),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar-header"},[_c('button',{staticClass:"navbar-toggle collapsed",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Toggle navigation")]),_vm._v(" "),_c('span',{staticClass:"icon-bar"}),_vm._v(" "),_c('span',{staticClass:"icon-bar"}),_vm._v(" "),_c('span',{staticClass:"icon-bar"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav navbar-nav navbar-left"},[_c('li',[_c('a',{attrs:{"href":"https://scan.nel.group/#mainnet","target":"_blank"}},[_vm._v("Explorer")])]),_vm._v(" "),_c('li',[_c('a',{staticClass:"active-nel",attrs:{"href":"#wallet"}},[_vm._v("Wallet")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"dropdown"},[_c('a',{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown","role":"button","aria-haspopup":"true","aria-expanded":"false"}},[_c('span',{staticClass:"text",attrs:{"id":"network"}},[_vm._v("MainNet")]),_vm._v(" "),_c('span',{staticClass:" caret"})]),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu dropdown-nel"},[_c('li',{attrs:{"id":"testnet-btn"}},[_c('a',{attrs:{"id":"testa"}},[_vm._v("TestNet")])]),_vm._v(" "),_c('li',{staticClass:"active",attrs:{"id":"mainnet-btn"}},[_c('a',{attrs:{"id":"maina"}},[_vm._v("MainNet")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layouts_Main = (esExports);
// CONCATENATED MODULE: ./src/layouts/Main.vue
function injectStyle (ssrContext) {
  __webpack_require__("veze")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Main_default.a,
  layouts_Main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_layouts_Main = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "lqCQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var wallet_vue_1 = __webpack_require__("PPZq");
var entity_1 = __webpack_require__("6nHw");
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        var _this = _super.call(this) || this;
        _this.address = "";
        _this.wifshow = false;
        _this.wif = "";
        _this.href = "";
        _this.walletname = "";
        return _this;
    }
    Settings.prototype.mounted = function () {
        this.address = entity_1.LoginInfo.getCurrentAddress();
    };
    Settings.prototype.visibleWif = function () {
        this.wifshow = (this.wifshow == true ? false : true);
        var msg = entity_1.LoginInfo.getCurrentLogin();
        var wif = ThinNeo.Helper.GetWifFromPrivateKey(msg.prikey);
        this.wif = (this.wifshow == true ? wif : "");
    };
    Settings.prototype.download = function () {
        var _this = this;
        this.walletname = entity_1.LoginInfo.getCurrentAddress() + ".json";
        var wallet = new ThinNeo.nep6wallet();
        wallet.scrypt = new ThinNeo.nep6ScryptParameters();
        wallet.scrypt.N = 16384;
        wallet.scrypt.r = 8;
        wallet.scrypt.p = 8;
        wallet.accounts = [];
        wallet.accounts[0] = new ThinNeo.nep6account();
        wallet.accounts[0].address = entity_1.LoginInfo.getCurrentAddress();
        mui.prompt('Set the password ', 'Enter your password ', 'Create a wallet', ['cancel', 'confirm'], function (e) {
            if (e.index == 1) {
                ThinNeo.Helper.GetNep2FromPrivateKey(entity_1.LoginInfo.getCurrentLogin().prikey, e.value, wallet.scrypt.N, wallet.scrypt.r, wallet.scrypt.p, function (info, result) {
                    if (info == "finish") {
                        wallet.accounts[0].nep2key = result;
                        wallet.accounts[0].contract = new ThinNeo.contract();
                        wallet.accounts[0].contract.script = ThinNeo.Helper.GetAddressCheckScriptFromPublicKey(entity_1.LoginInfo.getCurrentLogin().pubkey).toHexString();
                        var jsonstr = JSON.stringify(wallet.toJson());
                        var blob = new Blob([ThinNeo.Helper.String2Bytes(jsonstr)]);
                        _this.href = URL.createObjectURL(blob);
                    }
                });
            }
        }, 'div');
        var input = document.querySelector('.mui-popup-input input');
        var download = document.querySelector('.mui-popup-button mui-popup-button-bold');
        input.type = 'password';
    };
    Settings = __decorate([
        vue_class_component_1.default({
            components: {
                "wallet-layout": wallet_vue_1.default
            }
        }),
        __metadata("design:paramtypes", [])
    ], Settings);
    return Settings;
}(vue_1.default));
exports.default = Settings;


/***/ }),

/***/ "owRU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./src/pages/transfer.ts
var transfer = __webpack_require__("f3HO");
var transfer_default = /*#__PURE__*/__webpack_require__.n(transfer);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-16249756","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/transfer.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('wallet-layout',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"title"},[_c('span',[_vm._v("Transfer")])])]),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"transfer-panel"},[_c('div',{staticClass:"form-horizontal"},[_c('div',{staticClass:"col-sm-12"},[_c('label',{staticClass:"col-sm-2 control-label",staticStyle:{"padding-top":"20px"},attrs:{"for":"firstname"}},[_vm._v("Asset：")]),_vm._v(" "),_c('div',{staticClass:"col-sm-3"},[_c('div',{staticClass:"dropdown"},[_c('div',{staticClass:"btn dropdown-toggle select-nel",class:_vm.balance.length>0 ? '' : 'select-disabled',attrs:{"type":"button","id":"dropdownMenu1","data-toggle":"dropdown"}},[_c('div',{staticClass:"select-title"},[_vm._v(_vm._s(_vm.balance.names))]),_vm._v(" "),_c('div',{staticClass:"select-caret"},[_c('span',{staticClass:"caret"})])]),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu dropdown-nel",attrs:{"role":"menu","aria-labelledby":"dropdownMenu1"}},_vm._l((_vm.balances),function(balance){return _c('li',{key:balance.asset,attrs:{"role":"presentation","value":balance.asset}},[_c('a',{attrs:{"role":"menuitem","tabindex":"-1"},on:{"click":function($event){_vm.choose(balance.asset)}}},[_vm._v(_vm._s(balance.names))])])}))])]),_vm._v(" "),_c('div',{staticClass:"col-sm-4",staticStyle:{"padding-top":"20px"}},[_c('span',[_vm._v("      "+_vm._s(_vm.balance.balance)+" "+_vm._s(_vm.balance.names ? _vm.balance.names + "available" : "")+" ")])])]),_vm._v(" "),_c('div',{staticClass:"col-sm-12",class:_vm.addrerr!=''?(_vm.addrerr == 'true' ?'err':'success') :''},[_c('label',{staticClass:"col-sm-2 control-label",attrs:{"for":""}},[_c('div',{staticStyle:{"padding-top":"40px"}},[_vm._v("Address:")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-7"},[_c('div',{staticStyle:{"padding-top":"30px"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.targetaddr),expression:"targetaddr"}],staticClass:"nel-input big",attrs:{"type":"text"},domProps:{"value":(_vm.targetaddr)},on:{"change":_vm.verify_addr,"input":function($event){if($event.target.composing){ return; }_vm.targetaddr=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-sm-3 mess"},[(_vm.addrerr=='true')?_c('p',[_c('img',{attrs:{"src":__webpack_require__("7vgD"),"alt":""}}),_vm._v("   Your adress is incorrect.")]):_vm._e(),_vm._v(" "),(_vm.addrerr=='false')?_c('p',[_c('img',{attrs:{"src":__webpack_require__("wtuE"),"alt":""}})]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"col-sm-12"},[_c('label',{staticClass:"col-sm-2 control-label",attrs:{"for":""}},[_c('div',{staticStyle:{"padding-top":"40px"}},[_vm._v("Amount:")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-7"},[_c('div',{staticStyle:{"padding-top":"30px"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.amount),expression:"amount"}],staticClass:"nel-input big",attrs:{"type":"number"},domProps:{"value":(_vm.amount)},on:{"change":_vm.verify_addr,"input":function($event){if($event.target.composing){ return; }_vm.amount=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"col-sm-3 mess"})]),_vm._v(" "),_c('div',{staticClass:"col-sm-12",staticStyle:{"padding-top":"30px"}},[_c('div',{staticClass:"col-sm-6"}),_vm._v(" "),_c('div',{staticClass:"col-sm-3"},[_c('button',{staticClass:"btn btn-link"},[_vm._v("Details")]),_vm._v(" "),_c('button',{staticClass:"btn btn-nel btn-big",on:{"click":_vm.send}},[_vm._v("Send")])])])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_transfer = (esExports);
// CONCATENATED MODULE: ./src/pages/transfer.vue
function injectStyle (ssrContext) {
  __webpack_require__("2781")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  transfer_default.a,
  pages_transfer,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_transfer = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "pLPz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var wwwtool_1 = __webpack_require__("50aY");
var entity_1 = __webpack_require__("6nHw");
var storagetool_1 = __webpack_require__("5LD5");
///<reference path="./neo-ts.d.ts"/>
var CoinTool = /** @class */ (function () {
    function CoinTool() {
    }
    CoinTool.initAllAsset = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allassets, a, asset, names, id, name, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, wwwtool_1.WWW.api_getAllAssets()];
                    case 1:
                        allassets = _a.sent();
                        for (a in allassets) {
                            asset = allassets[a];
                            names = asset.name;
                            id = asset.id;
                            name = "";
                            if (id == CoinTool.id_GAS) {
                                name = "GAS";
                            }
                            else if (id == CoinTool.id_NEO) {
                                name = "NEO";
                            }
                            else {
                                for (i in names) {
                                    name = names[i].name;
                                    if (names[i].lang == "en")
                                        break;
                                }
                            }
                            CoinTool.assetID2name[id] = name;
                            CoinTool.name2assetID[name] = id;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CoinTool.makeTran = function (utxos, targetaddr, assetid, sendcount) {
        //if (sendcount.compareTo(Neo.Fixed8.Zero) <= 0)
        //    throw new Error("can not send zero.");
        var tran = new ThinNeo.Transaction();
        tran.type = ThinNeo.TransactionType.ContractTransaction;
        tran.version = 0; //0 or 1
        tran.extdata = null;
        tran.attributes = [];
        tran.inputs = [];
        var scraddr = "";
        utxos[assetid].sort(function (a, b) {
            return a.count.compareTo(b.count);
        });
        var us = utxos[assetid];
        var count = Neo.Fixed8.Zero;
        for (var i = 0; i < us.length; i++) {
            var input = new ThinNeo.TransactionInput();
            input.hash = us[i].txid.hexToBytes().reverse();
            input.index = us[i].n;
            input["_addr"] = us[i].addr; //利用js的隨意性，臨時傳個值
            tran.inputs.push(input);
            count = count.add(us[i].count);
            scraddr = us[i].addr;
            if (count.compareTo(sendcount) > 0) {
                break;
            }
        }
        if (count.compareTo(sendcount) >= 0) {
            tran.outputs = [];
            //输出
            if (sendcount.compareTo(Neo.Fixed8.Zero) > 0) {
                var output = new ThinNeo.TransactionOutput();
                output.assetId = assetid.hexToBytes().reverse();
                output.value = sendcount;
                output.toAddress = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(targetaddr);
                tran.outputs.push(output);
            }
            //找零
            var change = count.subtract(sendcount);
            if (change.compareTo(Neo.Fixed8.Zero) > 0) {
                var outputchange = new ThinNeo.TransactionOutput();
                outputchange.toAddress = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(scraddr);
                outputchange.value = change;
                outputchange.assetId = assetid.hexToBytes().reverse();
                tran.outputs.push(outputchange);
            }
        }
        else {
            throw new Error("no enough money.");
        }
        return tran;
    };
    CoinTool.rawTransaction = function (targetaddr, asset, count) {
        return __awaiter(this, void 0, void 0, function () {
            var arr, add, n, _count, utxo, tran, txid, msg, pubkey, prekey, addr, signdata, data, res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arr = storagetool_1.StorageTool.getLoginArr();
                        add = storagetool_1.StorageTool.getStorage("current-address");
                        n = arr.findIndex(function (login) { return login.address == add; });
                        _count = Neo.Fixed8.parse(count + "");
                        return [4 /*yield*/, CoinTool.getassets()];
                    case 1:
                        utxo = _a.sent();
                        tran = CoinTool.makeTran(utxo, targetaddr, asset, _count);
                        if (tran.witnesses == null)
                            tran.witnesses = [];
                        txid = tran.GetHash().clone().reverse().toHexString();
                        msg = tran.GetMessage().clone();
                        pubkey = arr[n].pubkey.clone();
                        prekey = arr[n].prikey.clone();
                        addr = arr[n].address;
                        signdata = ThinNeo.Helper.Sign(msg, prekey);
                        tran.AddWitness(signdata, pubkey, addr);
                        data = tran.GetRawData();
                        res = new entity_1.Result();
                        return [4 /*yield*/, wwwtool_1.WWW.api_postRawTransaction(data)];
                    case 2:
                        result = _a.sent();
                        res.err = !result;
                        res.info = txid;
                        return [2 /*return*/, res];
                }
            });
        });
    };
    CoinTool.contractTransaction = function (sb) {
        return __awaiter(this, void 0, void 0, function () {
            var utxo, targeraddr, current, assetid, tran, txid, msg, pubkey, prekey, addr, signdata, data, res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CoinTool.getassets()];
                    case 1:
                        utxo = _a.sent();
                        targeraddr = entity_1.LoginInfo.getCurrentAddress();
                        current = entity_1.LoginInfo.getCurrentLogin();
                        assetid = CoinTool.id_GAS;
                        tran = CoinTool.makeTran(utxo, targeraddr, assetid, Neo.Fixed8.Zero);
                        //合约类型
                        tran.type = ThinNeo.TransactionType.InvocationTransaction;
                        tran.extdata = new ThinNeo.InvokeTransData();
                        //塞入脚本
                        tran.extdata.script = sb.ToArray();
                        //估计一个gas用量
                        //如果估计gas用量少了，智能合约执行会失败。
                        //如果估计gas用量>10,交易必须丢弃gas，否则智能合约执行会失败
                        tran.extdata.gas = Neo.Fixed8.fromNumber(1.0);
                        if (tran.witnesses == null)
                            tran.witnesses = [];
                        txid = tran.GetHash().clone().reverse().toHexString();
                        msg = tran.GetMessage().clone();
                        pubkey = current.pubkey.clone();
                        prekey = current.prikey.clone();
                        addr = current.address;
                        signdata = ThinNeo.Helper.Sign(msg, prekey);
                        tran.AddWitness(signdata, pubkey, addr);
                        data = tran.GetRawData();
                        res = new entity_1.Result();
                        return [4 /*yield*/, wwwtool_1.WWW.api_postRawTransaction(data)];
                    case 2:
                        result = _a.sent();
                        res.err = !result;
                        res.info = txid;
                        return [2 /*return*/, res];
                }
            });
        });
    };
    CoinTool.getassets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var utxos, assets, i, item, txid, n, asset, count, utxo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, wwwtool_1.WWW.api_getUTXO(storagetool_1.StorageTool.getStorage("current-address"))];
                    case 1:
                        utxos = _a.sent();
                        assets = {};
                        for (i in utxos) {
                            item = utxos[i];
                            txid = item.txid;
                            n = item.n;
                            asset = item.asset;
                            count = item.value;
                            if (assets[asset] == undefined) {
                                assets[asset] = [];
                            }
                            utxo = new entity_1.UTXO();
                            utxo.addr = item.addr;
                            utxo.asset = asset;
                            utxo.n = n;
                            utxo.txid = txid;
                            utxo.count = Neo.Fixed8.parse(count);
                            assets[asset].push(utxo);
                        }
                        return [2 /*return*/, assets];
                }
            });
        });
    };
    CoinTool.id_GAS = "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
    CoinTool.id_NEO = "0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    CoinTool.assetID2name = {};
    CoinTool.name2assetID = {};
    return CoinTool;
}());
exports.CoinTool = CoinTool;


/***/ }),

/***/ "uw+d":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "veze":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wtuE":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJiYWxhbmNlNC10ZXN0bmV0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IummlumhtS10cmFuc2Zlci1pbnB1dCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyMi4wMDAwMDAsIC0zNzguMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwLjAwMDAwMCwgMjI2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSLmiZPli74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyMi4wMDAwMDAsIDE1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDEyLjE0ODE0ODEgQzI0LDUuMzcyNDQ0NDQgMTguNjI3NTU1NiwwIDExLjg1MTg1MTksMCBDNS4zNzI0NDQ0NCwwIDAsNS4zNzI0NDQ0NCAwLDEyLjE0ODE0ODEgQzAsMTguNjI3NTU1NiA1LjM3MjQ0NDQ0LDI0IDExLjg1MTg1MTksMjQgQzE4LjYyNzU1NTYsMjQgMjQsMTguNjI3NTU1NiAyNCwxMi4xNDgxNDgxIFoiIGlkPSJGaWxsLSIgZmlsbD0iIzJEREU0RiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi4yNDQ5NTE3MywxMi44NDYzNTA0IEM1Ljg1NjI5Mzc1LDEyLjQ0NjI2NzIgNS44MDk5NDA0OCwxMS43NTgyNjA2IDYuMTMyMDI0OTksMTEuMzIyMzU4MiBMNS42NTA2MzE3NSwxMS45NzM4NjU3IEM1Ljk3NjkyMjAyLDExLjUzMjI3MTMgNi41OTc0OTM2MiwxMS40NDU3MjQzIDcuMDQxMjU0NzcsMTEuNzg0MDE2NiBMOC44OTAxMDY5NywxMy4xOTM0NTE2IEM5LjMzMTgzNjU5LDEzLjUzMDE5NTIgMTAuMDM3NTcyNSwxMy41MTUxMTkgMTAuNDY1NjkwNiwxMy4xNjAzNzU5IEwxNy4wMDQ3NzQ2LDcuNzQyMDIzMTIgQzE3LjQzMzIxNTgsNy4zODcwMTIzMiAxOC4wOTc4NjA3LDcuNDEwOTI2MjQgMTguNDgwNzQ0NCw3Ljc4NzAzMTc1IEwxNy43ODA1MzYsNy4wOTkyMTkxOSBDMTguMTY3MjUwNCw3LjQ3OTA4NzU4IDE4LjE2Nzg2NTQsOC4wOTMyOTg5OSAxNy43NjEzMzQsOC40OTEyMzk2OSBMMTAuNDA5MDgxOSwxNS42ODgxMjUzIEMxMC4wMTE3NjI1LDE2LjA3NzA0ODYgOS4zNzc4NjM2OSwxNi4wNzEzNTk0IDguOTg1OTQzOTUsMTUuNjY3OTE4NSBMNi4yNDQ5NTE3MywxMi44NDYzNTA0IFoiIGlkPSJGaWxsLSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }),

/***/ "x35b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var login_vue_1 = __webpack_require__("Luci");
var balance_vue_1 = __webpack_require__("QRjO");
var transfer_vue_1 = __webpack_require__("owRU");
var nns_vue_1 = __webpack_require__("GZV2");
var settings_vue_1 = __webpack_require__("dkEd");
vue_1.default.config.productionTip = false;
var notFound = vue_1.default.component('notFound', function (resolve) { return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("c5Mg")]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe); });
var app = new vue_1.default({
    el: '#app',
    data: {
        currentRoute: window.location.hash
    },
    computed: {
        ViewComponent: function () {
            switch (this.currentRoute) {
                case "#balance":
                    return balance_vue_1.default;
                case "#login":
                    return login_vue_1.default;
                case "#transfer":
                    return transfer_vue_1.default;
                case "#nns":
                    return nns_vue_1.default;
                case "#settings":
                    return settings_vue_1.default;
            }
            return notFound;
        }
    },
    render: function (h) {
        return h(this.ViewComponent);
    }
});
window.addEventListener('popstate', function () {
    app.currentRoute = window.location.hash;
});


/***/ })

},["x35b"]);