webpackJsonp(["login.module"],{

/***/ "./src/app/pages/main/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var loginservice_1 = __webpack_require__("./src/app/services/loginservice.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var Login = (function () {
    function Login(fb, loginService, router, utilsService) {
        this.loginService = loginService;
        this.router = router;
        this.utilsService = utilsService;
        this.spinnerStatus = false;
        this.versionSistema = environment_1.environment.versionSistema;
        this.form = fb.group({
            'usuario': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
        });
        this.usuario = this.form.controls['usuario'];
        this.password = this.form.controls['password'];
    }
    Login.prototype.ngOnInit = function () {
        var programmers = [
            { id: 1, name: 'Dario Quiroga', department: 'Web' },
            { id: 2, name: 'Adrian Pascuti', department: 'Facturacion' },
            { id: 3, name: 'Sergio Pillon', department: 'Analisis' },
        ];
        var result = programmers.filter(function (obj) {
            // return obj.department === 'web' || obj.id === 1;
            if (obj.id === 1) {
                console.log("-----> " + obj.name + " |  Departamento: " + obj.department);
                return obj;
            }
        });
    };
    Login.prototype.onSubmit = function (values) {
        return __awaiter(this, void 0, void 0, function () {
            var respLogin, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.valid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.spinnerStatus = true;
                        return [4 /*yield*/, this.loginService.login(this.usuario.value)(this.password.value)];
                    case 2:
                        respLogin = _a.sent();
                        this.spinnerStatus = false;
                        // Completa el login
                        this.loginService.completeLogin(respLogin);
                        // Redirecciono al dashboard
                        // this.router.navigate(['/pages/dashboard']);
                        if (respLogin.datos.perfil.idPerfil === 4) {
                            this.router.navigate(['/pages/compras/comprobante-compra']);
                        }
                        else if (respLogin.datos.perfil.idPerfil === 3) {
                            this.router.navigate(['/pages/ventas/emision-remito']);
                        }
                        else {
                            this.router.navigate(['/pages/dashboard']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        this.spinnerStatus = false;
                        this.utilsService.decodeErrorResponse(ex_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        selector: 'login',
        template: __webpack_require__("./src/app/pages/main/login/login.html"),
        styles: [__webpack_require__("./src/app/pages/main/login/login.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object, typeof (_b = typeof loginservice_1.LoginService !== "undefined" && loginservice_1.LoginService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _d || Object])
], Login);
exports.Login = Login;
var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/pages/main/login/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-main\">\r\n    <div *ngIf=\"!spinnerStatus\" class=\"auth-block\">\r\n\r\n        <div style=\"text-align: center\">\r\n            <!-- <img src=\"../../../assets/img/logo-kernel.fw.png\" alt=\"Kernel Informática\" /> -->\r\n            <img style=\"opacity: 0.9;\" src=\"assets/img/app/empresas/06.png\" alt=\"Cooperativa agrícola mixta de Margarita Ltda\" />\r\n            <p>Sistema de Facturación versión: {{ versionSistema }}</p>\r\n        </div>\r\n        <div style=\"text-align: center\">\r\n            <h1 translate>Cooperativa Agrícola Mixta de Margarita Ltda.</h1>\r\n        </div>\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n            <div class=\"form-group row\" [ngClass]=\"{'has-error': (!usuario.valid && usuario.touched), 'has-success': (usuario.valid && usuario.touched)}\">\r\n                <!-- <label for=\"inputEmail3\" class=\"col-sm-2 control-label\" translate>{{'login.email'}}</label>-->\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <input  [formControl]=\"usuario\" type=\"text\" maxlength=\"10\"  class=\"form-control\" id=\"inputUsuario\" placeholder=\"{{'login.Usuario' | translate}}\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n                <!--<label for=\"inputPassword3\" class=\"col-sm-2 control-label\" translate>{{'login.password'}}</label>-->\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"{{'login.password' | translate}}\">\r\n                </div>\r\n\r\n            </div>\r\n            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\" translate>\r\n                {{'login.sign_in'}}\r\n            </button>\r\n\r\n            <!-- <div class=\"form-group row\">\r\n                <div class=\"offset-sm-2 col-sm-10\">\r\n                    <a routerLink=\"/login\" class=\"forgot-pass\" translate>{{'login.forgot_password'}}</a>\r\n                </div>\r\n            </div> -->\r\n        </form>\r\n\r\n        <hr>\r\n        <div class=\"auth-foooter\">\r\n            <img class=\"imgLogo\"  src=\"assets/img/app/empresas/kernel-mini.png\" alt=\"Kernel Informatica\" />\r\n            <div style=\"font-size: 11px;\">Desarrollado por <a href=\"http://www.kernelinformatica.com.ar\" target=\"_blank\">Kernel Informática</a></div>\r\n            <div style=\"font-size: 10px;\">Cooperativa de Trabajo Ltda</div>\r\n\r\n        </div>\r\n\r\n        <!-- <div class=\"auth-sep\"><span><span translate>{{'login.sign_from_app_text'}}</span></span></div>-->\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"spinnerStatus\" class=\"spinner-container\">\r\n        <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/main/login/login.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var app_translation_module_1 = __webpack_require__("./src/app/app.translation.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var nga_module_1 = __webpack_require__("./src/app/theme/nga.module.ts");
var login_component_1 = __webpack_require__("./src/app/pages/main/login/login.component.ts");
var login_routing_1 = __webpack_require__("./src/app/pages/main/login/login.routing.ts");
var loginservice_1 = __webpack_require__("./src/app/services/loginservice.ts");
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            app_translation_module_1.AppTranslationModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            login_routing_1.routing
        ],
        declarations: [
            login_component_1.Login
        ],
        providers: [
            loginservice_1.LoginService,
            authService_1.AuthService,
            utilsService_1.UtilsService
        ],
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "./src/app/pages/main/login/login.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var login_component_1 = __webpack_require__("./src/app/pages/main/login/login.component.ts");
// noinspection TypeScriptValidateTypes
exports.routes = [
    {
        path: '',
        component: login_component_1.Login
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=login.routing.js.map

/***/ }),

/***/ "./src/app/pages/main/login/login.scss":
/***/ (function(module, exports) {

module.exports = "/*Modificacion Dario*/\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n.auth-block {\n  width: 400px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background-color: #A3B8C5;\n  color: #fff;\n  padding: 22px;\n  background-color: #aeaeae;\n  opacity: 0.9; }\n.auth-block h1 {\n    font-weight: 300;\n    font-size: 20px;\n    margin-bottom: 25px;\n    text-align: center;\n    color: #ffffff; }\n.auth-block p {\n    font-size: 15px;\n    color: #111111; }\n.auth-block a {\n    text-decoration: none;\n    outline: none;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    color: #fff; }\n.auth-block a:hover {\n      color: #b6b6b6; }\n.auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n.auth-block .form-group {\n    margin-bottom: 12px; }\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n.auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 14px;\n  text-align: center;\n  display: block;\n  position: relative; }\n.auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n.auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n.auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n.al-share-auth {\n  text-align: center; }\n.al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n.al-share-auth .al-share li {\n      margin-left: 24px; }\n.al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n.al-share-auth .al-share li i {\n        font-size: 24px; }\n.btn-auth {\n  color: #ffffff !important; }\n.auth-main {\n  background: url('fondoFacturacionFin.a97b41137461d3a68224.jpg') no-repeat center center fixed;\n  background-size: cover !important; }\n.auth-main .spinner-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 auto;\n    font-size: 6rem;\n    color: #fefefe; }\n.auth-foooter {\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: black; }\n.auth-foooter a {\n  color: black; }\n.auth-foooter a:hover {\n  color: white; }\n.imgLogo {\n  width: 15%;\n  height: 15%; }\n"

/***/ }),

/***/ "./src/app/services/loginservice.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var theme_1 = __webpack_require__("./src/app/theme/index.ts");
var localStorageService_1 = __webpack_require__("./src/app/services/localStorageService.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var LoginService = (function () {
    function LoginService(modalService, authService, baMenuService, localStorageService) {
        var _this = this;
        this.modalService = modalService;
        this.authService = authService;
        this.baMenuService = baMenuService;
        this.localStorageService = localStorageService;
        /**
         * Se loguea al backend y retorna la respuesta
         */
        this.login = function (usuario) { return function (clave) { return _this.authService.login(usuario)(clave); }; };
        /**
         * Guarda data importante del logueo y genera los menus, entre otras cosas
         */
        this.completeLogin = function (respLogin) {
            // Guardo datos importantes del login (TODO: Cambiar por LocalStorage)
            // debugger;
            _this.localStorageService.setObject(environment_1.environment.localStorage.usuario)({
                nombre: respLogin.datos.cuenta.nombre,
                apellido: respLogin.datos.cuenta.apellido,
                email: respLogin.datos.cuenta.email
            });
            _this.localStorageService.setObject(environment_1.environment.localStorage.acceso)(respLogin.datos.acceso);
            _this.localStorageService.setObject(environment_1.environment.localStorage.perfil)(respLogin.datos.perfil);
            // Guardo los menus PARSEADOS en el localStorage
            // this.localStorageService.setObject(environment.localStorage.menu)(<Routes>this.baMenuService.generatePagesMenu(respLogin.datos.perfil.sucursal.menuSucursal));
            _this.localStorageService.setObject(environment_1.environment.localStorage.menu)(_this.baMenuService.generatePagesMenu(respLogin.datos.perfil.sucursal.permisos));
            // debugger
            // this.authService.actualizaComproVentas(respLogin.datos.acceso.token);
        };
    }
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng_bootstrap_1.NgbModal !== "undefined" && ng_bootstrap_1.NgbModal) === "function" && _a || Object, typeof (_b = typeof authService_1.AuthService !== "undefined" && authService_1.AuthService) === "function" && _b || Object, typeof (_c = typeof theme_1.BaMenuService !== "undefined" && theme_1.BaMenuService) === "function" && _c || Object, typeof (_d = typeof localStorageService_1.LocalStorageService !== "undefined" && localStorageService_1.LocalStorageService) === "function" && _d || Object])
], LoginService);
exports.LoginService = LoginService;
var _a, _b, _c, _d;
//# sourceMappingURL=loginservice.js.map

/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map