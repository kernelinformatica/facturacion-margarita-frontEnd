webpackJsonp(["contratos.module"],{

/***/ "./src/app/pages/main/contratos/abmContratos/abmContratos.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var contratosService_1 = __webpack_require__("./src/app/services/contratosService.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var AbmContratos = (function () {
    function AbmContratos(router, utilsService, recursoService, contratosService) {
        var _this = this;
        this.router = router;
        this.utilsService = utilsService;
        this.recursoService = recursoService;
        this.contratosService = contratosService;
        this.tableDataFiltered = new rxjs_1.BehaviorSubject([]);
        this.tableDataComplete = [];
        this.filtros = { cliente: null, producto: null, estado: 'todos', fechaVto: new dateLikePicker_1.DateLikePicker() };
        this.onClickEdit = function (rec) {
            _this.router.navigate(['/pages/contratos/abm/editar', rec.idContratos]);
        };
        this.onClickRemove = function (recurso) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.utilsService.showModal('Borrar contrato')('¿Estás seguro de borrarlo?')(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.recursoService.borrarRecurso(recurso.idContratos)(resoursesREST_1.resourcesREST.contratos)];
                            case 1:
                                _a.sent();
                                this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.contratos)()
                                    .subscribe(function (resp) {
                                    _this.tableDataFiltered.next(resp);
                                    _this.tableDataComplete = resp;
                                });
                                return [2 /*return*/];
                        }
                    });
                }); })({
                    tipoModal: 'confirmation'
                });
                return [2 /*return*/];
            });
        }); };
        this.onClickDownload = function (contrato) {
            contrato.isDownloading = true;
            _this.contratosService.downloadContrato(contrato.idContratos)
                .subscribe(function (resp) {
                _this.utilsService.downloadBlob(resp['_body'], contrato.contratoNro, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
                contrato.isDownloading = false;
            }, function (error) { return console.log(error); });
        };
        this.getDato = function (td, tc) {
            var dato = tc.subkey ? td[tc.key][tc.subkey] : td[tc.key];
            if (typeof dato === 'number') {
                return _this.utilsService.toLocateString(dato);
            }
            return dato ?
                dato.day ?
                    "" + (dato.day < 10 ? '0' : '') + dato.day + "/" + (dato.month < 10 ? '0' : '') + dato.month + "/" + dato.year
                    :
                        dato
                :
                    '';
        };
        /**
         * Filtra de acuerdo a los filtros seteados
         */
        this.onFiltrar = function (e) {
            _this.tableDataFiltered.next(_this.tableDataComplete
                .filter(function (cont) {
                return _this.filtros.cliente && _this.filtros.cliente.length > 0 ?
                    (cont.idPadron.toString().toLowerCase().trim().includes(_this.filtros.cliente.toString().toLowerCase()) ||
                        cont.padronNombre.toString().toLowerCase().trim().includes(_this.filtros.cliente.toString().toLowerCase()) ||
                        cont.padronApelli.toString().toLowerCase().trim().includes(_this.filtros.cliente.toString().toLowerCase())) : true;
            })
                .filter(function (cont) {
                return _this.filtros.producto && _this.filtros.producto.length > 0 ?
                    (cont.sisCanje.descripcion.toString().toLowerCase().trim().includes(_this.filtros.producto.toString().toLowerCase())) : true;
            })
                .filter(function (cont) {
                return _this.filtros.estado && _this.filtros.estado.length > 0 ?
                    (_this.filtros.estado === 'cumplido' ?
                        cont.kilos === cont.kilosCumplidos :
                        _this.filtros.estado === 'pendiente' ?
                            cont.kilos !== cont.kilosCumplidos :
                            true) : true;
            })
                .filter(function (cont) {
                return _this.filtros.fechaVto ?
                    _this.utilsService.dateLikePickerToDate(cont.fechaVto) <=
                        _this.utilsService.dateLikePickerToDate(_this.filtros.fechaVto)
                    : true;
            }));
        };
        /**
         * Parsea fecha
         */
        this.onCalculateFecha = function (e) {
            if (!_this.filtros.fechaVto || typeof _this.filtros.fechaVto !== 'string')
                return;
            _this.filtros.fechaVto = _this.utilsService.stringToDateLikePicker(_this.filtros.fechaVto);
        };
        this.onChangeFechaVto = function (e) {
            if (!e || e.length === 0) {
                // this.filtros.fechaVto = new DateLikePicker(new Date());
                _this.filtros.fechaVto = null;
            }
            _this.onCalculateFecha(e);
            _this.onFiltrar(e);
        };
        this.tableColumns = [
            {
                nombre: 'Cod Cliente',
                key: 'idPadron',
                ancho: '20%'
            },
            {
                nombre: 'Nombre',
                key: 'padronNombre',
                ancho: '20%'
            },
            {
                nombre: 'Apellido',
                key: 'padronApelli',
                ancho: '20%'
            },
            {
                nombre: 'Cereal',
                key: 'sisCanje',
                subkey: 'descripcion',
                ancho: '20%'
            },
            {
                nombre: 'Kilos',
                key: 'kilos',
                ancho: '20%'
            },
            {
                nombre: 'Fecha Vto',
                key: 'fechaVto',
                ancho: '20%'
            },
            {
                nombre: 'Kilos Cumplidos',
                key: 'kilosCumplidos',
                ancho: '15%'
            }
        ];
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.contratos)()
            .subscribe(function (resp) {
            _this.tableDataFiltered.next(resp);
            _this.tableDataComplete = resp;
        });
    }
    return AbmContratos;
}());
AbmContratos = __decorate([
    core_1.Component({
        selector: 'abm-contratos',
        styles: [__webpack_require__("./src/app/pages/main/contratos/abmContratos/abmContratos.scss")],
        template: __webpack_require__("./src/app/pages/main/contratos/abmContratos/abmContratos.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _c || Object, typeof (_d = typeof contratosService_1.ContratosService !== "undefined" && contratosService_1.ContratosService) === "function" && _d || Object])
], AbmContratos);
exports.AbmContratos = AbmContratos;
var _a, _b, _c, _d;
//# sourceMappingURL=abmContratos.component.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/abmContratos.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"abm-contratos\">\r\n    <ba-card cardTitle=\"Contratos\" baCardClass=\"with-scroll\">\r\n\r\n        <div class=\"filter-container\">\r\n            <span>Filtrar: </span>\r\n\r\n            <div class=\"form-group item\">\r\n                <label for=\"searchCliente\">Cliente</label>\r\n                <input \r\n                    name=\"searchClienteName\" \r\n                    [(ngModel)]=\"filtros.cliente\" \r\n                    (ngModelChange)=\"onFiltrar($event)\"\r\n                    type=\"text\"\r\n                    class=\"form-control\" \r\n                    id=\"searchCliente\">\r\n            </div>\r\n\r\n            <div class=\"form-group item\">\r\n                <label for=\"searchProducto\">Producto</label>\r\n                <input \r\n                    name=\"searchProductoName\" \r\n                    [(ngModel)]=\"filtros.producto\" \r\n                    (ngModelChange)=\"onFiltrar($event)\"\r\n                    type=\"text\"\r\n                    class=\"form-control\" \r\n                    id=\"searchProducto\">\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"selectEstado\">Estado</label>\r\n                <select \r\n                    name=\"selectEstadoName\" \r\n                    [(ngModel)]=\"filtros.estado\" \r\n                    (ngModelChange)=\"onFiltrar($event)\"\r\n                    class=\"form-control\" \r\n                    id=\"selectEstado\">\r\n                    <option value=\"todos\">Todos</option>\r\n                    <option value=\"pendiente\">Pendiente</option>\r\n                    <option value=\"cumplido\">Cumplido</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group item\">\r\n                <label for=\"idFechaVto\">Fecha Vto</label>\r\n                <div class=\"input-group date-picker-fecha\">\r\n                    <input \r\n                        id=\"idFechaVto\"\r\n                        (blur)=\"onCalculateFecha($event)\" \r\n                        class=\"form-control\" \r\n                        placeholder=\"dd/mm/aaaa\" \r\n                        name=\"dp\" \r\n                        [(ngModel)]=\"filtros.fechaVto\"\r\n                        (ngModelChange)=\"onChangeFechaVto($event)\"\r\n                        ngbDatepicker #dDesd=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dDesd.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"bar-separator\"></div>\r\n\r\n        <table class=\"table-contratos\" *ngIf=\"tableDataFiltered && tableColumns\" style=\"width:100%\">\r\n            <tr>\r\n                <th></th>\r\n                <th *ngFor=\"let tc of tableColumns\">\r\n                    {{ tc.nombre }}\r\n                </th>\r\n                <th></th>\r\n            </tr>\r\n            <tr *ngFor=\"let td of tableDataFiltered | async\">\r\n                <td style=\"display: flex;\">\r\n                    <div (click)=\"onClickEdit(td)\" class=\"btn-accion btn-editar\" style=\"padding-top: 1px;\">\r\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div (click)=\"onClickRemove(td)\" class=\"btn-accion btn-remover\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                </td>\r\n                <!-- {{ getDato(td[tc.key]) }} -->\r\n                <td *ngFor=\"let tc of tableColumns\">\r\n                    {{ getDato(td, tc) }}\r\n                </td>\r\n                <td>\r\n                    <div (click)=\"onClickDownload(td)\" class=\"btn-accion btn-download\">\r\n                        <i *ngIf=\"!td.isDownloading\" class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n                        <i *ngIf=\"td.isDownloading\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n\r\n        <div class=\"btn-container\">\r\n            <button routerLink=\"/pages/contratos/abm/nuevo\" type=\"submit\" class=\"btn btn-default\" translate>\r\n                Nuevo Contrato\r\n            </button>\r\n        </div>\r\n    </ba-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/abmContratos.scss":
/***/ (function(module, exports) {

module.exports = ".abm-contratos .table-contratos {\n  margin: 1%; }\n  .abm-contratos .table-contratos tr th {\n    font-weight: bold;\n    margin-bottom: 3px; }\n  .abm-contratos .table-contratos tr .btn-accion {\n    margin: 4px;\n    cursor: pointer; }\n  .abm-contratos .table-contratos tr:nth-child(even) {\n    background: rgba(219, 219, 219, 0.158); }\n  .abm-contratos .filter-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .abm-contratos .filter-container > span {\n    font-size: 1rem;\n    padding: 12px;\n    margin: 10px; }\n  .abm-contratos .filter-container > .item {\n    margin: 0 10px; }\n  .abm-contratos .bar-separator {\n  margin: 0px 15px 20px 0; }\n"

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/editarContrato/editarContrato.component.ts":
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
var contrato_1 = __webpack_require__("./src/app/models/contrato.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var contratosService_1 = __webpack_require__("./src/app/services/contratosService.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var EditarContrato = (function () {
    function EditarContrato(contratosService, recursoService, utilsService, router, route, config) {
        var _this = this;
        this.contratosService = contratosService;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.router = router;
        this.route = route;
        this.recurso = new contrato_1.Contrato();
        this.recursoOriginal = new contrato_1.Contrato();
        // Si NO finalizó la edición, y SI editó el recurso..
        this.canDeactivate = function () {
            return _this.recursoService.getEdicionFinalizada() ||
                _this.recursoService.checkIfEquals(_this.recurso, _this.recursoOriginal);
        };
        this.onFileSelected = function (e) {
            var existFile = e.target && e.target.files && e.target.files.length > 0;
            var file = existFile ? e.target.files[0] : null;
            _this.file = file;
        };
        this.onGenerar = function () {
            if (_this.file) {
                _this.contratosService.generarContrato(_this.file);
            }
        };
        this.onGrabar = function () {
            _this.contratosService
                .editarContrato(_this.file, _this.recurso, function () { return _this.router.navigate(['/pages/contratos/abm']); });
        };
        this.onSelectCliente = function (cli) {
            _this.recurso.idPadron = cli.padronCodigo;
            setTimeout(function () { return document.getElementById('idFechaNacInput').focus(); });
        };
        this.route.params.subscribe(function (params) {
            return _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.contratos)()
                .map(function (recursoList) {
                return recursoList.find(function (recurso) { return recurso.idContratos === parseInt(params.idContratos); });
            })
                .subscribe(function (recurso) {
                _this.recurso = recurso;
                _this.recursoOriginal = Object.assign({}, recurso);
            });
        });
        this.sisCanjes = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisCanjes)();
        // config NgbDatepickerConfig
        config.minDate = { year: 1850, month: 1, day: 1 };
        config.maxDate = { year: 2020, month: 12, day: 31 };
    }
    return EditarContrato;
}());
__decorate([
    core_1.HostListener('window:beforeunload'),
    __metadata("design:type", Object)
], EditarContrato.prototype, "canDeactivate", void 0);
EditarContrato = __decorate([
    core_1.Component({
        selector: 'editar-contrato',
        styles: [__webpack_require__("./src/app/pages/main/contratos/abmContratos/editarContrato/editarContrato.scss")],
        template: __webpack_require__("./src/app/pages/main/contratos/abmContratos/editarContrato/editarContrato.html"),
        providers: [ng_bootstrap_1.NgbDatepickerConfig]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof contratosService_1.ContratosService !== "undefined" && contratosService_1.ContratosService) === "function" && _a || Object, typeof (_b = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _b || Object, typeof (_c = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _e || Object, typeof (_f = typeof ng_bootstrap_1.NgbDatepickerConfig !== "undefined" && ng_bootstrap_1.NgbDatepickerConfig) === "function" && _f || Object])
], EditarContrato);
exports.EditarContrato = EditarContrato;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=editarContrato.component.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/editarContrato/editarContrato.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"abm-contratos\">\r\n    <ba-card cardTitle=\"Editar Contrato\" baCardClass=\"with-scroll\" class=\"editar-contrato-card\">\r\n        \r\n        <div class=\"line\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCliente\">Cliente:</label>\r\n                <search-client \r\n                    (selectItem)=\"onSelectCliente($event)\"\r\n                    [idPadronInit]=\"recurso.idPadron\"\r\n                    >\r\n                </search-client>\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCliente\">Fecha Nac:</label>\r\n                <div class=\"input-group\">\r\n                    <input required \r\n                        id=\"idFechaNacInput\"\r\n                        name=\"fechaNac\" \r\n                        class=\"form-control\" \r\n                        placeholder=\"dd/mm/yyyy\" \r\n                        (blur)=\"recurso.fechaNacimiento = utilsService.stringToDateLikePicker(recurso.fechaNacimiento)\"\r\n                        [(ngModel)]=\"recurso.fechaNacimiento\" ngbDatepicker #dNac=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dNac.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idNacio\">Nacionalidad:</label>\r\n                <input required name=\"nacio\" class=\"form-control\" [(ngModel)]=\"recurso.nacionalidad\" id=\"idNacionalidad\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"line\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Profesion:</label>\r\n                <input required name=\"profe\" class=\"form-control\" [(ngModel)]=\"recurso.profesion\" id=\"idProfe\">\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Tipo y Nro Doc:</label>\r\n                <input required name=\"dni\" class=\"form-control\" [(ngModel)]=\"recurso.documento\" id=\"idDoc\">\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Apellido y Nombre Padre:</label>\r\n                <input required name=\"apeynomp\"  class=\"form-control\" [(ngModel)]=\"recurso.padre\" id=\"idPadre\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"line\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Apellido y Nombre Madre:</label>\r\n                <input required name=\"apeynomm\" class=\"form-control\" [(ngModel)]=\"recurso.madre\" id=\"idMadre\">\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Kilos a devolver:</label>\r\n                <input required name=\"kgdev\" class=\"form-control\" [(ngModel)]=\"recurso.kilos\" id=\"idKilos\">\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Cosecha:</label>\r\n                <input required name=\"cose\" class=\"form-control\" [(ngModel)]=\"recurso.cosecha\" id=\"idCose\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"line\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCanje\">Canje</label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" required name=\"yeah\" [(ngModel)]=\"recurso.sisCanje\" class=\"form-control\" id=\"idCanje\">\r\n                    <option *ngFor=\"let sc of sisCanjes | async\" [ngValue]=\"sc\">\r\n                        {{ sc.descripcion }}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group item\">\r\n                <label for=\"idNroContrato\">Nro Contrato:</label>\r\n                <input required name=\"fasgasd\" class=\"form-control\" [(ngModel)]=\"recurso.contratoNro\" id=\"idNroContrato\">\r\n            </div>\r\n\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCliente\">Fecha Vto:</label>\r\n                <div class=\"input-group\">\r\n                    <input required \r\n                        name=\"fechaNac\" \r\n                        class=\"form-control\" \r\n                        placeholder=\"dd/mm/yyyy\" \r\n                        (blur)=\"recurso.fechaVto = utilsService.stringToDateLikePicker(recurso.fechaVto)\"\r\n                        [(ngModel)]=\"recurso.fechaVto\" ngbDatepicker #dVto=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dVto.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"line\" style=\"justify-content: normal;\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Observaciones:</label>\r\n                <textarea name=\"faf\" [(ngModel)]=\"recurso.observaciones\" class=\"form-control\" id=\"observaciones\"></textarea>\r\n            </div>\r\n\r\n            <div class=\"form-group item\" style=\"margin-left: 58px;\">\r\n                <label for=\"idDescripcion\">Reemplazar Archivo:</label>\r\n                <div class=\"file-uploader-container\">\r\n                    <input \r\n                        type=\"file\" \r\n                        name=\"foo\" \r\n                        accept=\".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\r\n                        [(ngModel)]=\"modelInputFile\"\r\n                        (change)=\"onFileSelected($event)\"\r\n                        >\r\n            \r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"line line-end\">\r\n            <div class=\"btn-container\">\r\n                <button \r\n                    routerLink=\"/pages/contratos/abm\" \r\n                    style=\"margin-right: 5px;\" \r\n                    class=\"btn btn-secondary btn-detalle\">\r\n                    Cancelar\r\n                </button>\r\n \r\n                <button (click)=\"onGrabar()\" type=\"submit\" class=\"btn btn-primary\" id=\"idBtnConfirmar\">Confirmar</button>\r\n            </div>\r\n        </div>\r\n    </ba-card>\r\n</div>\r\n\r\n<!-- \r\n    \r\n    <div class=\"line\">\r\n        <p class=\"instrucciones\"> \r\n            Seleccione el archivo a procesar, reemplazando {{ '{' }}miVariable{{ '}' }} donde miVariable es el dato que quiere asignar\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"form-group item\">\r\n        <label for=\"idDescripcion\">Datos:</label>\r\n        <ul id=\"list\" class=\"list-group datos-list\">\r\n            <li class=\"li-item\">\r\n                <div class=\"bold-item\">Precio Referencia:</div> precioRef\r\n            </li>\r\n            <li class=\"li-item\">\r\n                <div class=\"bold-item\">Cliente:</div> cliente\r\n            </li>\r\n        </ul>\r\n    </div> \r\n-->"

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/editarContrato/editarContrato.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .editar-contrato-card > .card {\n  width: 80%; }\n\n:host /deep/ .editar-contrato-card .btn-container {\n  padding: 12px 12px 3px; }\n\n:host /deep/ .editar-contrato-card .instrucciones {\n  margin: 2px 7px 10px;\n  background: #eeeeeee0;\n  padding: 7px 9px;\n  color: black; }\n\n:host /deep/ .editar-contrato-card .datos-list .li-item {\n  padding: 5px 2px;\n  background: #dcdcdc;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host /deep/ .editar-contrato-card .datos-list .li-item .bold-item {\n    font-weight: bold; }\n\n:host /deep/ .editar-contrato-card .datos-list .li-item:nth-child(even) {\n  background: #efefef; }\n\n:host /deep/ .editar-contrato-card .btn-file-container {\n  margin-top: 14px; }\n"

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/editarContrato/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/contratos/abmContratos/editarContrato/editarContrato.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/contratos/abmContratos/abmContratos.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/nuevoContrato/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/contratos/abmContratos/nuevoContrato/nuevoContrato.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/nuevoContrato/nuevoContrato.component.ts":
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
var contrato_1 = __webpack_require__("./src/app/models/contrato.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var contratosService_1 = __webpack_require__("./src/app/services/contratosService.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var NuevoContrato = (function () {
    function NuevoContrato(contratosService, recursoService, router, utilsService, config) {
        var _this = this;
        this.contratosService = contratosService;
        this.recursoService = recursoService;
        this.router = router;
        this.utilsService = utilsService;
        this.recurso = new contrato_1.Contrato();
        this.onFileSelected = function (e) {
            var existFile = e.target && e.target.files && e.target.files.length > 0;
            var file = existFile ? e.target.files[0] : null;
            _this.file = file;
        };
        this.onGenerar = function () {
            if (_this.file) {
                _this.contratosService.generarContrato(_this.file);
            }
        };
        this.onGrabar = function () {
            if (_this.file) {
                _this.contratosService
                    .grabarContrato(_this.file, _this.recurso, function () { return _this.router.navigate(['/pages/contratos/abm']); });
            }
        };
        this.onSelectCliente = function (cli) {
            _this.recurso.idPadron = cli.padronCodigo;
            _this.recurso.padronNombre = cli.padronNombre;
            _this.recurso.padronApelli = cli.padronApelli;
            setTimeout(function () { return document.getElementById('idFechaNacInput').focus(); });
        };
        this.onDateSelect = function (a) {
        };
        this.sisCanjes = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisCanjes)();
        // config NgbDatepickerConfig
        config.minDate = { year: 1850, month: 1, day: 1 };
        config.maxDate = { year: 2020, month: 12, day: 31 };
    }
    return NuevoContrato;
}());
NuevoContrato = __decorate([
    core_1.Component({
        selector: 'nuevo-contrato',
        styles: [__webpack_require__("./src/app/pages/main/contratos/abmContratos/nuevoContrato/nuevoContrato.scss")],
        template: __webpack_require__("./src/app/pages/main/contratos/abmContratos/nuevoContrato/nuevoContrato.html"),
        providers: [ng_bootstrap_1.NgbDatepickerConfig]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof contratosService_1.ContratosService !== "undefined" && contratosService_1.ContratosService) === "function" && _a || Object, typeof (_b = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _d || Object, typeof (_e = typeof ng_bootstrap_1.NgbDatepickerConfig !== "undefined" && ng_bootstrap_1.NgbDatepickerConfig) === "function" && _e || Object])
], NuevoContrato);
exports.NuevoContrato = NuevoContrato;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=nuevoContrato.component.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/nuevoContrato/nuevoContrato.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"abm-contratos\">\r\n    <ba-card cardTitle=\"Nuevo Contrato\" baCardClass=\"with-scroll\" class=\"nuevo-contrato-card\">\r\n        \r\n        <div class=\"line\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCliente\">Cliente:</label>\r\n                \r\n                <search-client \r\n                    (selectItem)=\"onSelectCliente($event)\"\r\n                    ></search-client>\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCliente\">Fecha Nac:</label>\r\n                <div class=\"input-group\">\r\n                    <input required \r\n                        id=\"idFechaNacInput\"\r\n                        name=\"fechaNac\" \r\n                        class=\"form-control\" \r\n                        placeholder=\"dd/mm/yyyy\" \r\n                        (dateSelect)=\"onDateSelect($event)\"\r\n                        (blur)=\"recurso.fechaNacimiento = utilsService.stringToDateLikePicker(recurso.fechaNacimiento)\"\r\n                        [(ngModel)]=\"recurso.fechaNacimiento\" ngbDatepicker #dNac=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dNac.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idNacio\">Nacionalidad:</label>\r\n                <input required name=\"nacio\" class=\"form-control\" [(ngModel)]=\"recurso.nacionalidad\" id=\"idNacionalidad\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"line\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Profesion:</label>\r\n                <input required name=\"profe\" class=\"form-control\" [(ngModel)]=\"recurso.profesion\" id=\"idProfe\">\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Tipo y Nro Doc:</label>\r\n                <input required name=\"dni\" class=\"form-control\" [(ngModel)]=\"recurso.documento\" id=\"idDoc\">\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Apellido y Nombre Padre:</label>\r\n                <input required name=\"apeynomp\"  class=\"form-control\" [(ngModel)]=\"recurso.padre\" id=\"idPadre\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"line\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Apellido y Nombre Madre:</label>\r\n                <input required name=\"apeynomm\" class=\"form-control\" [(ngModel)]=\"recurso.madre\" id=\"idMadre\">\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Kilos a devolver:</label>\r\n                <input required name=\"kgdev\" class=\"form-control\" [(ngModel)]=\"recurso.kilos\" id=\"idKilos\">\r\n            </div>\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Cosecha:</label>\r\n                <input required name=\"cose\" class=\"form-control\" [(ngModel)]=\"recurso.cosecha\" id=\"idCose\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"line\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCanje\">Canje</label>\r\n                <select required name=\"yeah\" [(ngModel)]=\"recurso.sisCanje\" class=\"form-control\" id=\"idCanje\">\r\n                    <option *ngFor=\"let sc of sisCanjes | async\" [ngValue]=\"sc\">\r\n                        {{ sc.descripcion }}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group item\">\r\n                <label for=\"idNroContrato\">Nro Contrato:</label>\r\n                <input required name=\"fasgasd\" class=\"form-control\" [(ngModel)]=\"recurso.contratoNro\" id=\"idNroContrato\">\r\n            </div>\r\n\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCliente\">Fecha Vto:</label>\r\n                <div class=\"input-group\">\r\n                    <input required \r\n                        name=\"fechaNac\" \r\n                        class=\"form-control\" \r\n                        placeholder=\"dd/mm/yyyy\" \r\n                        (blur)=\"recurso.fechaVto = utilsService.stringToDateLikePicker(recurso.fechaVto)\"\r\n                        [(ngModel)]=\"recurso.fechaVto\" ngbDatepicker #dVto=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dVto.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"line\" style=\"justify-content: normal;\">\r\n            <div class=\"form-group item\">\r\n                <label for=\"idCosecha\">Observaciones:</label>\r\n                <textarea name=\"faf\" [(ngModel)]=\"recurso.observaciones\" class=\"form-control\" id=\"observaciones\"></textarea>\r\n            </div>\r\n\r\n            <div class=\"form-group item\" style=\"margin-left: 58px;\">\r\n                <label for=\"idDescripcion\">Archivo:</label>\r\n                <div class=\"file-uploader-container\">\r\n                    <input \r\n                        type=\"file\" \r\n                        name=\"foo\" \r\n                        accept=\".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document\"\r\n                        [(ngModel)]=\"modelInputFile\"\r\n                        (change)=\"onFileSelected($event)\"\r\n                        >\r\n            \r\n                </div>\r\n                <div class=\"btn-file-container\">\r\n                    <button \r\n                        [disabled]=\"!file\"\r\n                        class=\"btn btn-secondary\"\r\n                        (click)=\"onGenerar()\"\r\n                        >\r\n                        Descargar\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"line line-end\">\r\n            <div class=\"btn-container\">\r\n                <button \r\n                    routerLink=\"/pages/contratos/abm\" \r\n                    style=\"margin-right: 5px;\" \r\n                    class=\"btn btn-secondary btn-detalle\">\r\n                    Cancelar\r\n                </button>\r\n \r\n                <button [disabled]=\"!this.file\" (click)=\"onGrabar()\" type=\"submit\" class=\"btn btn-primary\" id=\"idBtnConfirmar\">Confirmar</button>\r\n            </div>\r\n        </div>\r\n    </ba-card>\r\n</div>\r\n\r\n<!-- \r\n    \r\n    <div class=\"line\">\r\n        <p class=\"instrucciones\"> \r\n            Seleccione el archivo a procesar, reemplazando {{ '{' }}miVariable{{ '}' }} donde miVariable es el dato que quiere asignar\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"form-group item\">\r\n        <label for=\"idDescripcion\">Datos:</label>\r\n        <ul id=\"list\" class=\"list-group datos-list\">\r\n            <li class=\"li-item\">\r\n                <div class=\"bold-item\">Precio Referencia:</div> precioRef\r\n            </li>\r\n            <li class=\"li-item\">\r\n                <div class=\"bold-item\">Cliente:</div> cliente\r\n            </li>\r\n        </ul>\r\n    </div> \r\n-->"

/***/ }),

/***/ "./src/app/pages/main/contratos/abmContratos/nuevoContrato/nuevoContrato.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .nuevo-contrato-card > .card {\n  width: 80%; }\n\n:host /deep/ .nuevo-contrato-card .btn-container {\n  padding: 12px 12px 3px; }\n\n:host /deep/ .nuevo-contrato-card .instrucciones {\n  margin: 2px 7px 10px;\n  background: #eeeeeee0;\n  padding: 7px 9px;\n  color: black; }\n\n:host /deep/ .nuevo-contrato-card .datos-list .li-item {\n  padding: 5px 2px;\n  background: #dcdcdc;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host /deep/ .nuevo-contrato-card .datos-list .li-item .bold-item {\n    font-weight: bold; }\n\n:host /deep/ .nuevo-contrato-card .datos-list .li-item:nth-child(even) {\n  background: #efefef; }\n\n:host /deep/ .nuevo-contrato-card .btn-file-container {\n  margin-top: 14px; }\n"

/***/ }),

/***/ "./src/app/pages/main/contratos/contratos.component.ts":
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
var Contratos = (function () {
    function Contratos() {
    }
    return Contratos;
}());
Contratos = __decorate([
    core_1.Component({
        selector: 'contratos',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], Contratos);
exports.Contratos = Contratos;
//# sourceMappingURL=contratos.component.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/contratos.module.ts":
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
var contratos_routing_1 = __webpack_require__("./src/app/pages/main/contratos/contratos.routing.ts");
var _1 = __webpack_require__("./src/app/pages/main/contratos/index.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var SharedModule_1 = __webpack_require__("./src/app/pages/main/SharedModule.ts");
var filesService_1 = __webpack_require__("./src/app/services/filesService.ts");
var abmContratos_1 = __webpack_require__("./src/app/pages/main/contratos/abmContratos/index.ts");
var nuevoContrato_1 = __webpack_require__("./src/app/pages/main/contratos/abmContratos/nuevoContrato/index.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var editarContrato_1 = __webpack_require__("./src/app/pages/main/contratos/abmContratos/editarContrato/index.ts");
var PendingChangesGuard_1 = __webpack_require__("./src/app/guards/PendingChangesGuard.ts");
var contratosService_1 = __webpack_require__("./src/app/services/contratosService.ts");
var relacionComprobante_1 = __webpack_require__("./src/app/pages/main/contratos/relacionComprobante/index.ts");
var ContratosModule = (function () {
    function ContratosModule() {
    }
    return ContratosModule;
}());
ContratosModule = __decorate([
    core_1.NgModule({
        imports: [
            contratos_routing_1.routing,
            SharedModule_1.SharedModule,
            ng_bootstrap_1.NgbTabsetModule
        ],
        declarations: [
            _1.Contratos,
            abmContratos_1.AbmContratos,
            nuevoContrato_1.NuevoContrato,
            editarContrato_1.EditarContrato,
            relacionComprobante_1.RelacionComprobante
        ],
        providers: [
            filesService_1.FilesService,
            recursoService_1.RecursoService,
            utilsService_1.UtilsService,
            authService_1.AuthService,
            PendingChangesGuard_1.PendingChangesGuard,
            contratosService_1.ContratosService
        ],
        exports: []
    })
], ContratosModule);
exports.ContratosModule = ContratosModule;
//# sourceMappingURL=contratos.module.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/contratos.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var _1 = __webpack_require__("./src/app/pages/main/contratos/index.ts");
var abmContratos_1 = __webpack_require__("./src/app/pages/main/contratos/abmContratos/index.ts");
var nuevoContrato_1 = __webpack_require__("./src/app/pages/main/contratos/abmContratos/nuevoContrato/index.ts");
var editarContrato_1 = __webpack_require__("./src/app/pages/main/contratos/abmContratos/editarContrato/index.ts");
var PendingChangesGuard_1 = __webpack_require__("./src/app/guards/PendingChangesGuard.ts");
var relacionComprobante_1 = __webpack_require__("./src/app/pages/main/contratos/relacionComprobante/index.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _1.Contratos,
        children: [
            { path: 'abm', component: abmContratos_1.AbmContratos },
            { path: 'abm/nuevo', component: nuevoContrato_1.NuevoContrato },
            { path: 'abm/editar/:idContratos', component: editarContrato_1.EditarContrato, canDeactivate: [PendingChangesGuard_1.PendingChangesGuard] },
            { path: 'relacion-comprobante', component: relacionComprobante_1.RelacionComprobante },
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=contratos.routing.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/contratos/contratos.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/relacionComprobante/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/contratos/relacionComprobante/relacionComprobante.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/relacionComprobante/relacionComprobante.component.ts":
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
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var contratosService_1 = __webpack_require__("./src/app/services/contratosService.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var RelacionComprobante = (function () {
    function RelacionComprobante(utilsService, contratosService, recursoService) {
        var _this = this;
        this.utilsService = utilsService;
        this.contratosService = contratosService;
        this.recursoService = recursoService;
        this.resourcesREST = resoursesREST_1.resourcesREST;
        this.compEncabezados = new rxjs_1.BehaviorSubject([]);
        this.contratos = new rxjs_1.BehaviorSubject([]);
        this.fechasFiltro = {
            desde: new dateLikePicker_1.DateLikePicker(),
            hasta: new dateLikePicker_1.DateLikePicker()
        };
        this.estadoComprobante = 2;
        this.isLoading = false;
        this.onClickRefrescar = function () {
            _this.isLoading = true;
            _this.contratosService.buscarComprobantesCanje(_this.fechasFiltro, _this.padronSelect, _this.estadoComprobante)
                .subscribe(function (resp) {
                var encabezados = resp.arraydatos;
                // Actualizo encabezados
                _this.compEncabezados.next(encabezados);
                encabezados && encabezados.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron comprobantes con esas condiciones')()() &&
                        _this.compEncabezados.next([])
                    :
                        null;
                _this.compSeleccionado = null;
                _this.isLoading = false;
            });
            _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.contratos)({ idPadron: _this.padronSelect.padronCodigo })
                .catch(function (err) {
                // Si hay algun error muestro el mensaje
                _this.utilsService.decodeErrorResponse(err);
                _this.contratos.next([]);
                return rxjs_1.Observable.throw(err);
            })
                .subscribe(function (resp) {
                // Actualizo contratos
                _this.contratos.next(resp);
                resp && resp.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron contratos para ese cliente')()() &&
                        _this.contratos.next([])
                    : null;
                _this.contSeleccionado = null;
            });
        };
        /**
         * Setea la fecha de compra calculandola dado un string en formato 'ddmm', parseando a 'dd/mm/aaaa'
         */
        this.onCalculateFecha = function (e) { return function (keyFecha) {
            if (!_this.fechasFiltro[keyFecha] || typeof _this.fechasFiltro[keyFecha] !== 'string')
                return;
            _this.fechasFiltro[keyFecha] = _this.utilsService.stringToDateLikePicker(_this.fechasFiltro[keyFecha]);
            // Hago focus en el prox input y luego al boton buscar
            (keyFecha === 'desde') ? document.getElementById("fechaHasta").focus() :
                (keyFecha === 'hasta') ? document.getElementById("btnBuscar").focus() : null;
        }; };
        this.onSelectCliente = function (cli) {
            _this.padronSelect = cli;
            setTimeout(function () { return document.getElementById('btnBuscar').focus(); });
        };
        /**
         * Formatea el numero pto-venta 4 caracteres y numero 8 caracteres
         */
        this.formatNumero = function (numero) {
            return numero && numero.toString() &&
                numero.toString().substring(0, numero.toString().length - 8) ?
                numero.toString().substring(0, numero.toString().length - 8).padStart(4, 0) + " - " + numero.toString().substring(numero.toString().length - 8) :
                '';
        };
        this.onClickRelacionar = function () {
            _this.contratosService.relacionContrato(_this.compSeleccionado, _this.contSeleccionado)
                .subscribe(function (resp) {
                _this.utilsService.showModal(resp.control.codigo)(resp.control.descripcion)()();
            });
        };
        this.onClickComprobante = function (compBusc) {
            _this.compSeleccionado = compBusc;
        };
        this.onClickContrato = function (contBusc) {
            _this.contSeleccionado = contBusc;
        };
    }
    return RelacionComprobante;
}());
RelacionComprobante = __decorate([
    core_1.Component({
        selector: 'relacion-comprobante',
        styles: [__webpack_require__("./src/app/pages/main/contratos/relacionComprobante/relacionComprobante.scss")],
        template: __webpack_require__("./src/app/pages/main/contratos/relacionComprobante/relacionComprobante.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _a || Object, typeof (_b = typeof contratosService_1.ContratosService !== "undefined" && contratosService_1.ContratosService) === "function" && _b || Object, typeof (_c = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _c || Object])
], RelacionComprobante);
exports.RelacionComprobante = RelacionComprobante;
var _a, _b, _c;
//# sourceMappingURL=relacionComprobante.component.js.map

/***/ }),

/***/ "./src/app/pages/main/contratos/relacionComprobante/relacionComprobante.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filtros-container\">\r\n    <ba-card \r\n        class=\"filtros-card\"\r\n        toggleBtnExtra=\"true\"\r\n        cardTitle=\"Filtros\"\r\n        headerMin=\"true\">\r\n\r\n        <div class=\"input-row\" style=\"justify-content: space-between;\">\r\n\r\n            <div style=\"display: flex;\">\r\n\r\n                <div class=\"item-input\">\r\n                    <label for=\"desde\">Desde</label>\r\n                    <div class=\"input-group date-picker-fecha\">\r\n                        <input (blur)=\"onCalculateFecha($event)('desde')\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" [(ngModel)]=\"fechasFiltro.desde\"\r\n                            ngbDatepicker #dDesd=\"ngbDatepicker\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" (click)=\"dDesd.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"item-input\">\r\n                    <label for=\"al\">al</label>\r\n    \r\n                    <div class=\"input-group date-picker-fecha\">\r\n                        <input (blur)=\"onCalculateFecha($event)('hasta')\" id=\"fechaHasta\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\"\r\n                            [(ngModel)]=\"fechasFiltro.hasta\" ngbDatepicker #dHast=\"ngbDatepicker\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" (click)=\"dHast.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"item-input\">\r\n                    <label for=\"idClienteSelect\">Cliente: </label>\r\n                    <search-client \r\n                        (selectItem)=\"onSelectCliente($event)\"\r\n                        isRequired=\"false\"\r\n                        >\r\n                    </search-client>\r\n                </div>\r\n\r\n                <div class=\"item-input\">\r\n                    <label for=\"idEstadoComp\">Estado: </label>\r\n                    <select \r\n                        [(ngModel)]=\"estadoComprobante\" \r\n                        class=\"form-control select-input\" \r\n                        id=\"idEstadoComp\">\r\n                        <option value=1>\r\n                            Con contratos\r\n                        </option>\r\n                        <option value=2>\r\n                            Sin contratos\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"btn-container item-input\">\r\n                <button id=\"btnBuscar\"\r\n                        (click)=\"onClickRefrescar()\"\r\n                        [disabled]=\"!padronSelect\"\r\n                        style=\"height: 25px;\"\r\n                        class=\"btn btn-primary\">\r\n                    Refrescar\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n    \r\n    \r\n    </ba-card>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n</div>\r\n\r\n<div *ngIf=\"!isLoading\" class=\"relacion-compro-container\">\r\n    <ba-card class=\"comprobante-container\" toggleBtn=\"true\">\r\n        <div class=\"mini-title\">\r\n            Comprobantes\r\n        </div>\r\n\r\n        <table \r\n            class=\"table table-striped table-consulta-comp\" \r\n            [mfData]=\"compEncabezados | async\"\r\n            #mfEnca=\"mfDataTable\" \r\n            mfRowsOnPage=\"10\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Tipo</th>\r\n                    <th class=\"text-right\">Numero</th>\r\n                    <th class=\"text-right\">Fecha</th>\r\n                    <th class=\"text-left\">Clie/Prov</th>\r\n                    <th class=\"text-left\">Tipo Op</th>\r\n                    <th class=\"text-left\">Imp</th>\r\n                    <th class=\"text-left\">Kilos</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <!-- En el ngClass con compSeleccionado.fechaEmision, si es FALSE siginfica que NO es una imputacion -->\r\n                <tr \r\n                    *ngFor=\"let compBusc of mfEnca.data\" \r\n                    class=\"comprobante-tr\"\r\n                    (click)=\"onClickComprobante(compBusc)\"\r\n                    [ngClass]=\"{\r\n                        'comprobante-tr-select': compSeleccionado && compBusc && \r\n                            compSeleccionado.idFactCab === compBusc.idFactCab\r\n                    }\"\r\n                    >\r\n                    <td>{{ compBusc.comprobante }}</td>\r\n                    <td class=\"text-right td-nowrap\">{{ formatNumero(compBusc.numero) }}</td>\r\n                    <td class=\"text-right\">{{ utilsService.formatearFecha('DD/MM/YYYY')(compBusc.fechaEmi) }}</td>  \r\n                    <td class=\"text-left\">{{ compBusc.nombre }}</td>  \r\n                    <td class=\"text-left\">{{ compBusc.nombre }}</td>  \r\n                    <td class=\"text-left\">{{ compBusc.imputada }}</td>  \r\n                    <td class=\"text-right\">{{ compBusc.kilosCanje }}</td>  \r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n                <tr>\r\n                    <td colspan=\"12\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n            </tfoot>\r\n        </table>\r\n    </ba-card>\r\n\r\n    <ba-card class=\"contrato-container\" toggleBtn=\"true\">\r\n        <div class=\"mini-title\">\r\n            Contratos\r\n        </div>\r\n\r\n        <table \r\n            class=\"table table-striped table-consulta-comp\" \r\n            [mfData]=\"contratos | async\"\r\n            #mfCont=\"mfDataTable\" \r\n            mfRowsOnPage=\"10\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Cod Cliente</th>\r\n                    <th class=\"text-right\">Nombre</th>\r\n                    <th class=\"text-right\">Apellido</th>\r\n                    <th class=\"text-left\">Cereal</th>\r\n                    <th class=\"text-left\">Kilos</th>\r\n                    <th class=\"text-left\">Fecha Vto</th>\r\n                    <th class=\"text-left\">Kilos Cumplidos</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr \r\n                    *ngFor=\"let cont of mfCont.data\" \r\n                    class=\"comprobante-tr\"\r\n                    (click)=\"onClickContrato(cont)\"\r\n                    [ngClass]=\"{\r\n                        'comprobante-tr-select': contSeleccionado && cont && \r\n                            contSeleccionado.idFactCab === cont.idFactCab\r\n                    }\"\r\n                    >\r\n                    <td>{{ cont.idPadron }}</td>\r\n                    <td class=\"text-left\">{{ cont.padronNombre }}</td>\r\n                    <td class=\"text-left\">{{ cont.padronApelli }}</td>\r\n                    <td class=\"text-left\">{{ cont.sisCanje ? cont.sisCanje.descripcion : '' }}</td>\r\n                    <td class=\"text-right\">{{ cont.kilos }}</td>\r\n                    <td class=\"text-right\">{{ utilsService.formatearFecha('DD/MM/YYYY')(cont.fechaVto) }}</td>\r\n                    <td class=\"text-right\">{{ cont.kilosCumplidos }}</td>\r\n                    \r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n                <tr>\r\n                    <td colspan=\"12\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n            </tfoot>\r\n        </table>\r\n    </ba-card>\r\n    \r\n</div>\r\n\r\n<div class=\"btn-container\">\r\n    <button id=\"btnRelacionar\"\r\n            (click)=\"onClickRelacionar()\"\r\n            class=\"btn btn-primary\"\r\n            [disabled]=\"!contSeleccionado || !compSeleccionado\"\r\n            >\r\n        Relacionar\r\n    </button>  \r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/contratos/relacionComprobante/relacionComprobante.scss":
/***/ (function(module, exports) {

module.exports = ".input-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .input-row .item-input {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0 5px; }\n  .input-row .item-input > input {\n      margin: 0 5px; }\n  .input-row .item-input > label {\n      margin-bottom: 5px;\n      margin-top: 6px;\n      white-space: nowrap;\n      padding-right: 10px; }\n  .relacion-compro-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 1%; }\n  .relacion-compro-container ba-card {\n    width: 48%; }\n  .relacion-compro-container .comprobante-tr {\n    cursor: pointer; }\n  .relacion-compro-container .comprobante-tr:hover {\n    background: #c5c5c5; }\n  .relacion-compro-container .comprobante-tr-select {\n    background: #2f7da357; }\n  .relacion-compro-container .comprobante-tr-select:hover {\n    background: #174c6657; }\n  .relacion-compro-container .imputacion-tr-select {\n    background: #17662b57; }\n  .mini-title {\n  margin-bottom: 0.8rem;\n  /* padding: 1px 14px; */\n  font-size: 0.9rem;\n  text-align: center; }\n  .spinner-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2rem;\n  margin: 14px 0;\n  background: #fafafa;\n  padding: 10px 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  color: #213742; }\n"

/***/ })

});
//# sourceMappingURL=contratos.module.chunk.js.map