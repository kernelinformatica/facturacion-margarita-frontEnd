webpackJsonp(["register.module"],{

/***/ "./src/app/pages/main/register/register.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var validators_1 = __webpack_require__("./src/app/theme/validators/index.ts");
var Register = (function () {
    function Register(fb) {
        this.submitted = false;
        this.form = fb.group({
            'name': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, validators_1.EmailValidator.validate])],
            'passwords': fb.group({
                'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
                'repeatPassword': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])]
            }, { validator: validators_1.EqualPasswordsValidator.validate('password', 'repeatPassword') })
        });
        this.name = this.form.controls['name'];
        this.email = this.form.controls['email'];
        this.passwords = this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
    }
    Register.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.form.valid) {
            // your code goes here
            // console.log(values);
        }
    };
    return Register;
}());
Register = __decorate([
    core_1.Component({
        selector: 'register',
        template: __webpack_require__("./src/app/pages/main/register/register.html"),
        styles: [__webpack_require__("./src/app/pages/main/register/register.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object])
], Register);
exports.Register = Register;
var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/pages/main/register/register.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-main\">\r\n  <div class=\"auth-block\">\r\n    <h1>Sign up to ng2-admin</h1>\r\n    <a routerLink=\"/login\" class=\"auth-link\">Already have an ng2-admin account? Sign in!</a>\r\n\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!name.valid && name.touched), 'has-success': (name.valid && name.touched)}\">\r\n        <label for=\"inputName3\" class=\"col-sm-2 control-label\">Name</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"name\" type=\"text\" class=\"form-control\" id=\"inputName3\" placeholder=\"Full Name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\r\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Email\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!repeatPassword.valid && repeatPassword.touched), 'has-success': (repeatPassword.valid && repeatPassword.touched)}\">\r\n        <label for=\"inputPassword4\" class=\"col-sm-2 control-label\">Repeat</label>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <input [formControl]=\"repeatPassword\" type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Repeat\">\r\n          <span *ngIf=\"!passwords.valid && (password.touched || repeatPassword.touched)\" class=\"help-block sub-little-text\">Passwords don't match.</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"offset-sm-2 col-sm-10\">\r\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\">Sign up</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"auth-sep\"><span><span>or Sign up with one click</span></span></div>\r\n\r\n    <div class=\"al-share-auth\">\r\n      <ul class=\"al-share clearfix\">\r\n        <li><i class=\"socicon socicon-facebook\" title=\"Share on Facebook\"></i></li>\r\n        <li><i class=\"socicon socicon-twitter\" title=\"Share on Twitter\"></i></li>\r\n        <li><i class=\"socicon socicon-google\" title=\"Share on Google Plus\"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/main/register/register.module.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var nga_module_1 = __webpack_require__("./src/app/theme/nga.module.ts");
var register_component_1 = __webpack_require__("./src/app/pages/main/register/register.component.ts");
var register_routing_1 = __webpack_require__("./src/app/pages/main/register/register.routing.ts");
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            register_routing_1.routing
        ],
        declarations: [
            register_component_1.Register
        ]
    })
], RegisterModule);
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ "./src/app/pages/main/register/register.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var register_component_1 = __webpack_require__("./src/app/pages/main/register/register.component.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: register_component_1.Register
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=register.routing.js.map

/***/ }),

/***/ "./src/app/pages/main/register/register.scss":
/***/ (function(module, exports) {

module.exports = "/*Modificacion Dario*/\n.auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n.auth-block {\n  width: 400px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background-color: #A3B8C5;\n  color: #fff;\n  padding: 22px;\n  background-color: #aeaeae;\n  opacity: 0.9; }\n.auth-block h1 {\n    font-weight: 300;\n    font-size: 20px;\n    margin-bottom: 25px;\n    text-align: center;\n    color: #ffffff; }\n.auth-block p {\n    font-size: 15px;\n    color: #111111; }\n.auth-block a {\n    text-decoration: none;\n    outline: none;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    color: #fff; }\n.auth-block a:hover {\n      color: #b6b6b6; }\n.auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n.auth-block .form-group {\n    margin-bottom: 12px; }\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n.auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 14px;\n  text-align: center;\n  display: block;\n  position: relative; }\n.auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n.auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n.auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n.al-share-auth {\n  text-align: center; }\n.al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n.al-share-auth .al-share li {\n      margin-left: 24px; }\n.al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n.al-share-auth .al-share li i {\n        font-size: 24px; }\n.btn-auth {\n  color: #ffffff !important; }\n"

/***/ })

});
//# sourceMappingURL=register.module.chunk.js.map