webpackJsonp(["stock.module"],{

/***/ "./src/app/models/stock.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stock = (function () {
    function Stock(stock) {
        if (stock) {
            this.ingresos = stock.ingresos;
            this.egresos = stock.egresos;
            this.monedaNombre = stock.monedaNombre;
            this.precioCompra = stock.precioCompra;
            this.trazable = stock.trazable;
            this.rubro = stock.rubro;
            this.subRubro = stock.subRubro;
            this.comprobante = stock.comprobante;
            this.numero = stock.numero;
            this.fechaEmision = stock.fechaEmision;
            this.pendiente = stock.pendiente;
            this.deposito = stock.deposito;
            this.idFactCab = stock.idFactCab;
            this.codProducto = stock.codProducto;
            this.codProductoOriginal = stock.codProductoOriginal;
            this.descripcion = stock.descripcion;
            this.fisicoImputado = stock.fisicoImputado;
            this.stockFisico = stock.stockFisico;
            this.ingresoVirtual = stock.ingresoVirtual;
            this.egresoVirtual = stock.egresoVirtual;
            this.virtualImputado = stock.virtualImputado;
            this.stockVirtual = stock.stockVirtual;
        }
        else {
            this.comprobante = null;
            this.numero = null;
            this.fechaEmision = null;
            this.ingresos = null;
            this.egresos = null;
            this.pendiente = null;
            this.deposito = null;
            this.trazable = null;
            this.rubro = null;
            this.subRubro = null;
            this.idFactCab = null;
            this.monedaNombre = null;
            this.precioCompra = null;
            this.codProducto = null;
            this.codProductoOriginal = null;
            this.descripcion = null;
            this.fisicoImputado = null;
            this.virtualImputado = null;
            this.stockFisico = null;
            this.stockVirtual = null;
            this.ingresoVirtual = null;
            this.egresoVirtual = null;
        }
    }
    return Stock;
}());
exports.Stock = Stock;
//# sourceMappingURL=stock.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/consultaGeneral/consultaGeneral.component.ts":
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
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var consultaGeneralService_1 = __webpack_require__("./src/app/pages/main/stock/consultaGeneral/consultaGeneralService.ts");
var ConsultaGeneral = (function () {
    function ConsultaGeneral(recursoService, utilsService, popupListaService, consultaGeneralService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.popupListaService = popupListaService;
        this.consultaGeneralService = consultaGeneralService;
        // Data de la tabla
        this.stockData = Observable_1.Observable.of([]);
        this.depositos = Observable_1.Observable.of([]);
        // columnas de la tabla
        //columnsTablaHeader = "codigo, descripcion, Ingresos, Egresos, Stock, Ingresos Virtual, Egresos Virtual, Imnputado Virtual, StockVirtual";
        this.columnasTablaHeader = ["codProducto", "codProductoOriginal", "descripcion", "ingresos", "egresos", "monedaNombre", "precioCompra", "stockFisico", "ingresoVirtual", "egresoVirtual", "virtualImputado", "stockVirtual"];
        this.conSinStock = "Con Stock";
        this.conSinStockCheck = true;
        // Filtros
        this.filtros = {
            fechaDesde: null,
            fechaHasta: null,
            codProducto: null,
            codProducto2: null,
            productoSelect: null,
            productoSelect2: null,
            gruposRubros: null,
            rubro: null,
            subrubro: null,
            deposito: null,
            todos: false,
            conStock: true,
        };
        // Desplegables
        this.rubroGrupo = Observable_1.Observable.of([]);
        this.rubros = Observable_1.Observable.of([]);
        this.subRubros = Observable_1.Observable.of([]);
        // Indices
        this.productoEnfocadoIndex = -1;
        this.productoEnfocadoIndex2 = -1;
        // Busquedas
        this.productos = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.productos2 = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.isLoading = false;
        this.isProdSelec1 = false;
        this.isProdSelec2 = false;
        /**
         * Autocompletar fechaHasta
         */
        this.onBlurFechaDesde = function (e) { return (!_this.filtros.fechaDesde || typeof _this.filtros.fechaDesde !== 'string') ?
            null : _this.filtros.fechaDesde = _this.utilsService.stringToDateLikePicker(_this.filtros.fechaDesde); };
        this.onBlurFechaHasta = function (e) { return (!_this.filtros.fechaHasta || typeof _this.filtros.fechaHasta !== 'string') ?
            null : _this.filtros.fechaHasta = _this.utilsService.stringToDateLikePicker(_this.filtros.fechaHasta); };
        this.onClickConSinStock = function () {
            if (_this.filtros.conStock == true) {
                _this.conSinStock = "Sin Stock";
                _this.filtros.conStock = true;
            }
            else {
                _this.conSinStock = "Con Stock";
                _this.filtros.conStock = false;
            }
            debugger;
        };
        this.onClickConsultar = function () {
            // Se setea por defecto la fechaDesde = 222-01-01
            _this.isLoading = true;
            if (_this.filtros.conStock == true) {
                _this.filtros.fechaDesde = '2022-01-01';
            }
            if (_this.filtros.todos && _this.productos && _this.productos.todos && _this.productos.todos.length > 0) {
                _this.filtros.productoSelect2 = _this.productos.todos[_this.productos.todos.length - 1];
            }
            _this.stockData = _this.consultaGeneralService.consultarStock(_this.filtros);
            _this.stockData.subscribe(function (result) {
                if (result.length > 0) {
                    _this.isLoading = false;
                }
            });
        };
        ///// EVENTOS BUSQUEDA PRODUCTO 1 /////
        /**
         * Evento on enter en el input de buscar cliente
         */
        this.onEnterInputProd = function (e) {
            e.preventDefault();
            // Busco el producto
            var prodsLista = _this.productos.filtrados.value;
            var prodSelect = prodsLista && prodsLista.length ? prodsLista[_this.productoEnfocadoIndex] : null;
            // Lo selecciono
            prodSelect ? _this.onSelectProducto(prodSelect) : null;
            // Reseteo el index
            _this.productoEnfocadoIndex = -1;
            // Vacio filtrados y focus lote input
            _this.productos.filtrados.next([]);
            document.getElementById('inputLoteNro') ? document.getElementById('inputLoteNro').focus() : null;
        };
        /**
         * Evento change del input del proovedor
         */
        this.onChangeInputProd = function (valor) {
            _this.isProdSelec1 = false;
            _this.productos.filtrados.next(_this.consultaGeneralService.filtrarProductos(_this.productos.todos, valor));
            // Reseteo el indice
            _this.productoEnfocadoIndex = -1;
        };
        this.onBlurInputProd = function (evento) {
            if (!evento.target.value || evento.target.value.toString().length <= 0)
                return;
            // Busco si existe
            var prodExist = _this.productos.todos.find(function (p) { return p.codProducto.toString() === evento.target.value.toString(); });
            // Si existe actualizo el existente
            if (prodExist && prodExist.idProductos) {
                _this.onSelectProducto(prodExist);
            }
            else {
                _this.filtros.codProducto = null;
                _this.filtros.productoSelect = null;
                // this.info.nombreProd = null;
            }
            // Vacio filtrados
            _this.productos.filtrados.next([]);
            // Hago focus en input producto
            document.getElementById('inputLoteNro') ? document.getElementById('inputLoteNro').focus() : null;
        };
        this.onSelectProducto = function (prod) {
            _this.filtros.codProducto = prod.codProducto.toString();
            _this.filtros.productoSelect = prod;
            // this.info.nombreProd = prod.descripcion;
            _this.isProdSelec1 = true;
        };
        ///// EVENTOS BUSQUEDA PRODUCTO 2 /////
        /**
         * Evento on enter en el input de buscar cliente
         */
        this.onEnterInputProd2 = function (e) {
            e.preventDefault();
            // Busco el producto
            var prodsLista = _this.productos2.filtrados.value;
            var prodSelect = prodsLista && prodsLista.length ? prodsLista[_this.productoEnfocadoIndex2] : null;
            // Lo selecciono
            prodSelect ? _this.onSelectProducto2(prodSelect) : null;
            // Reseteo el index
            _this.productoEnfocadoIndex2 = -1;
            // Vacio filtrados y focus lote input
            _this.productos2.filtrados.next([]);
            // document.getElementById('inputLoteNro') ? document.getElementById('inputLoteNro').focus() : null
            // this.productos2.filtrados.subscribe(prodsLista => {
            //     // Busco el producto
            //     const prodSelect: any = prodsLista && prodsLista.length ? prodsLista[this.productoEnfocadoIndex] : null;
            //     // Lo selecciono
            //     prodSelect ? this.onSelectProducto2(prodSelect) : null;
            //     // Reseteo el index
            //     this.productoEnfocadoIndex2 = -1;
            //     // Vacio filtrados y focus lote input
            //     this.productos2.filtrados.next([]);
            //     document.getElementById('inputLoteNro') ? document.getElementById('inputLoteNro').focus() : null
            // })
        };
        /**
         * Evento change del input del proovedor
         */
        this.onChangeInputProd2 = function (valor) {
            _this.isProdSelec2 = false;
            _this.productos2.filtrados.next(_this.consultaGeneralService.filtrarProductos(_this.productos2.todos, valor));
            // Reseteo el indice
            _this.productoEnfocadoIndex2 = -1;
        };
        this.onBlurInputProd2 = function (evento) {
            if (!evento.target.value || evento.target.value.toString().length <= 0)
                return;
            // Busco si existe
            var prodExist = _this.productos2.todos.find(function (p) { return p.codProducto.toString() === evento.target.value.toString(); });
            // Si existe actualizo el existente
            if (prodExist && prodExist.idProductos) {
                _this.onSelectProducto2(prodExist);
            }
            else {
                _this.filtros.codProducto2 = null;
                _this.filtros.productoSelect2 = null;
                // this.info.nombreProd2 = null;
            }
            // Vacio filtrados
            _this.productos2.filtrados.next([]);
            // Hago focus en input producto
            document.getElementById('inputLoteNro') ? document.getElementById('inputLoteNro').focus() : null;
        };
        this.onSelectProducto2 = function (prod) {
            _this.filtros.codProducto2 = prod.codProducto.toString();
            _this.filtros.productoSelect2 = prod;
            // this.info.nombreProd2 = prod.descripcion;
            _this.isProdSelec2 = true;
        };
        //////////////////////////////////////////////////////////////////////
        /**
        * Cuanbdo cambia GrupoRubro, actualizo Rubros
        */
        this.onChangeRubroGrupo = function (selectRubroGrupo) {
            if (selectRubroGrupo) {
                _this.rubros = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.rubros)({
                    'idGrupo': selectRubroGrupo.idRubrosGrupos
                });
            }
        };
        /**
         * Cuanbdo cambia Rubro, actualizo SubRubros
         */
        this.onChangeRubro = function (rubroSelect) {
            if (rubroSelect) {
                _this.subRubros = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.subRubros)({
                    'idRubro': rubroSelect.idRubro
                });
            }
        };
        this.descargarReporte = function () {
            _this.consultaGeneralService.descargarReporte(_this.filtros).subscribe(function (resp) {
                if (resp && resp['_body']) {
                    _this.utilsService.downloadBlob(resp['_body'], 'stockGeneral');
                }
            });
        };
        this.descargarReporteInventario = function () {
            _this.consultaGeneralService.descargarReporteInventario(_this.filtros).subscribe(function (resp) {
                if (resp && resp['_body']) {
                    _this.utilsService.downloadBlob(resp['_body'], 'stockGeneral');
                }
            });
        };
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)().subscribe(function (productos) {
            _this.productos.todos = productos;
            _this.productos.filtrados.next(productos);
            _this.productos2.todos = productos;
            _this.productos2.filtrados.next(productos);
        });
        this.rubroGrupo = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.rubrosGrupos)();
        // this.rubros = this.recursoService.getRecursoList(resourcesREST.rubros)()
        this.depositos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.depositos)();
        // this.subRubros = this.recursoService.getRecursoList(resourcesREST.subRubros)()
    }
    return ConsultaGeneral;
}());
ConsultaGeneral = __decorate([
    core_1.Component({
        selector: 'consulta-general',
        styles: [__webpack_require__("./src/app/pages/main/stock/consultaGeneral/consultaGeneral.scss")],
        template: __webpack_require__("./src/app/pages/main/stock/consultaGeneral/consultaGeneral.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _c || Object, typeof (_d = typeof consultaGeneralService_1.ConsultaGeneralService !== "undefined" && consultaGeneralService_1.ConsultaGeneralService) === "function" && _d || Object])
], ConsultaGeneral);
exports.ConsultaGeneral = ConsultaGeneral;
var _a, _b, _c, _d;
//# sourceMappingURL=consultaGeneral.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/consultaGeneral/consultaGeneral.html":
/***/ (function(module, exports) {

module.exports = "<ba-card cardTitle=\"Filtros\" class=\"consulta-general\" toggleBtn=\"true\">\r\n\r\n    <div class=\"row\">\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"item-select\">\r\n                <label for=\"selectComprobante\">\r\n                    Deposito\r\n                </label>\r\n                <select [(ngModel)]=\"filtros.deposito\" class=\"form-control\" id=\"selectDeposito\">\r\n                    <option [ngValue]=\"null\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let dep of depositos | async\" [ngValue]=\"dep\">\r\n                        {{dep.descripcion}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n\r\n            <label for=\"desde\">\r\n                Producto *\r\n            </label>\r\n            <input [disabled]=\"filtros.todos\" [(ngModel)]=\"filtros.codProducto\" type=\"text\"\r\n                class=\"form-control text-right\" id=\"inputProducto\" placeholder=\"\" (keydown.arrowdown)=\"\r\n                            productoEnfocadoIndex = popupListaService\r\n                                .keyPressInputForPopup('down')(productos.filtrados.value)(productoEnfocadoIndex);\r\n                        \" (keydown.arrowup)=\"\r\n                            productoEnfocadoIndex = popupListaService\r\n                                .keyPressInputForPopup('up')(productos.filtrados.value)(productoEnfocadoIndex);\r\n                        \" (keyup.enter)=\"onEnterInputProd($event)\" (ngModelChange)=\"onChangeInputProd($event)\"\r\n                (blur)=\"onBlurInputProd($event)\">\r\n\r\n            <popup-lista *ngIf=\"\r\n                                    filtros.codProducto &&\r\n                                    filtros.codProducto.length > 0 &&\r\n                                    !isProdSelec1\r\n                                \" [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['descripcion', 'codProducto']\" [onClickItem]=\"onSelectProducto\"\r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('inputProducto')\">\r\n            </popup-lista>\r\n\r\n\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"hasta\">\r\n                Hasta *\r\n            </label>\r\n            <input [disabled]=\"filtros.todos\" [(ngModel)]=\"filtros.codProducto2\" type=\"text\"\r\n                class=\"form-control text-right\" id=\"inputProducto2\" placeholder=\"\"\r\n                (keyup.enter)=\"onEnterInputProd2($event)\" (ngModelChange)=\"onChangeInputProd2($event)\"\r\n                (blur)=\"onBlurInputProd2($event)\" (keydown.arrowdown)=\"\r\n                            productoEnfocadoIndex2 = popupListaService\r\n                                .keyPressInputForPopup('down')(productos2.filtrados.value)(productoEnfocadoIndex2);\r\n                        \" (keydown.arrowup)=\"\r\n                            productoEnfocadoIndex2 = popupListaService\r\n                                .keyPressInputForPopup('up')(productos2.filtrados.value)(productoEnfocadoIndex2);\r\n                        \">\r\n\r\n            <popup-lista *ngIf=\"\r\n                                    filtros.codProducto2 &&\r\n                                    filtros.codProducto2.length > 0 &&\r\n                                    !isProdSelec2\" [items]=\"productos2.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['descripcion', 'codProducto']\" [onClickItem]=\"onSelectProducto2\"\r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('inputProducto2')\">\r\n            </popup-lista>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n            <label for=\"hasta\">\r\n                Todos\r\n            </label>\r\n            <div class=\"item-input checkbox-container\">\r\n                <ba-checkbox [(ngModel)]=\"filtros.todos\" [ngModelOptions]=\"{standalone: true}\">\r\n                </ba-checkbox>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"item-select\">\r\n                <label for=\"selectRubroGrupo\">\r\n                    Grupos\r\n                </label>\r\n                <select [(ngModel)]=\"filtros.gruposRubros\" (ngModelChange)=\"onChangeRubroGrupo($event)\"  class=\"form-control\" id=\"selectRubroGrupo\">\r\n                    <option [ngValue]=\"null\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let grupRub of rubroGrupo | async\" [ngValue]=\"grupRub\">\r\n                        {{grupRub.descripcion}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n       </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"item-select\">\r\n                <label for=\"selectRubro\">\r\n                    Rubro\r\n                </label>\r\n                <select [(ngModel)]=\"filtros.rubro\" (ngModelChange)=\"onChangeRubro($event)\" class=\"form-control\"\r\n                    id=\"selectRubro\">\r\n                    <option [ngValue]=\"null\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let rub of rubros | async\" [ngValue]=\"rub\">\r\n                        {{rub.descripcion}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"item-select\">\r\n                <label for=\"selectSubRubro\">\r\n                    Sub Rubro\r\n                </label>\r\n                <select [(ngModel)]=\"filtros.subrubro\" class=\"form-control\" id=\"selectSubRubro\">\r\n                    <option [ngValue]=\"null\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let subrub of subRubros | async\" [ngValue]=\"subrub\">\r\n                        {{subrub.descripcion}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n       </div>\r\n       <div class=\"col-sm-2\" *ngIf=\"filtros.conStock == false\" >\r\n\r\n        <label for=\"desde\" [ngStyle]=\"{'min-width': '85px'}\">\r\n            Desde *\r\n        </label>\r\n\r\n        <div  class=\"input-group date-picker-venc-desde\">\r\n            <input [(ngModel)]=\"filtros.fechaDesde\" (blur)=\"onBlurFechaDesde($event)\" class=\"form-control\"\r\n                placeholder=\"dd/mm/aaaa\" name=\"dp\" ngbDatepicker #dDesde=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary\" (click)=\"dDesde.toggle()\" type=\"button\"\r\n                    style=\"height: 100%;\">\r\n                    <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.0rem; height: 1rem; cursor: pointer;\" />\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"col-sm-2\">\r\n        <label for=\"desde\" [ngStyle]=\"{'min-width': '85px'}\">\r\n            Hasta *\r\n        </label>\r\n\r\n        <div class=\"input-group date-picker-venc-desde\">\r\n            <input [(ngModel)]=\"filtros.fechaHasta\" (blur)=\"onBlurFechaHasta($event)\" class=\"form-control\"\r\n                placeholder=\"dd/mm/aaaa\" name=\"dp\" ngbDatepicker #dHasta=\"ngbDatepicker\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary\" (click)=\"dHasta.toggle()\" type=\"button\"\r\n                    style=\"height: 100%;\">\r\n                    <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.0rem; height: 1rem; cursor: pointer;\" />\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n       <div class=\"col-sm-1\">\r\n        <label for=\"label_stock\">\r\n           {{conSinStock}}\r\n        </label>\r\n        <div class=\"item-input checkbox-container\">\r\n            <ba-checkbox (click)=\"onClickConSinStock()\"  [(ngModel)]=\"filtros.conStock\" [ngModelOptions]=\"{standalone: true}\">\r\n            </ba-checkbox>\r\n        </div>\r\n    </div>\r\n        <div class=\"col-sm-1\" style=\"padding-top: 23px;\">\r\n\r\n            <button id=\"btnConsultar\" [disabled]=\"\r\n                                            (\r\n                                                filtros.todos &&\r\n                                                !filtros.fechaHasta &&\r\n                                                !filtros.fechaDesde\r\n                                            )\r\n                                            ||\r\n                                            (\r\n                                                !filtros.todos &&\r\n                                                (\r\n                                                    !filtros.codProducto ||\r\n                                                    !filtros.codProducto2\r\n                                                )\r\n                                                ||\r\n\r\n                                                !filtros.fechaHasta\r\n                                            )\r\n                                        \" (click)=\"onClickConsultar()\" class=\"btn btn-primary\">\r\n                                            <i class=\"fa fa-search\" aria-hidden=\"true\"></i> Buscar\r\n\r\n                                        </button>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ba-card>\r\n<div style=\"text-align: center;\" *ngIf=\"isLoading\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n    <p style=\"text-align: center;\">Aguarde un momento, por favor.</p>\r\n</div>\r\n\r\n<ba-card *ngIf=\"(stockData | async)?.length\">\r\n    <div class=\"row\">\r\n\r\n\r\n\r\n</div>\r\n\r\n    <table id=\"tabla\" name = \"tabla\" class=\"table table-striped\" [mfData]=\"stockData | async\"   #mf=\"mfDataTable\" style=\"font-size: 11px;\">\r\n        <thead>\r\n            <tr>\r\n                <th>Codigo</th>\r\n                <th>Original</th>\r\n                <th>Descripcion</th>\r\n                <!-- <th class=\"text-right\">Pendiente</th> -->\r\n                <th class=\"text-right\">Ingresos</th>\r\n                <th class=\"text-right\">Egresos</th>\r\n                <th class=\"text-right\">Mon</th>\r\n                <th class=\"text-right\">PreComp $</th>\r\n                <th class=\"text-right\">PreComp U$d</th>\r\n                <th class=\"text-right\">Stock</th>\r\n                <th class=\"text-right\">Ing Virtual</th>\r\n                <th class=\"text-right\">Eg Virtual</th>\r\n                <th class=\"text-right\">Imp Virtual</th>\r\n                <th class=\"text-right\">Stock Virtual</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let stockElement of mf.data\">\r\n                <td>{{ stockElement.codProducto }}</td>\r\n                <td>{{ stockElement.codProductoOriginal }}</td>\r\n                <td>{{ stockElement.descripcion }}</td>\r\n                <!-- <td class=\"text-right\">{{ stockElement.pendiente }}</td> -->\r\n                <td class=\"text-right\">{{ stockElement.ingresos| number :'1.2-2' }}</td>\r\n                <td class=\"text-right\">{{ stockElement.egresos | number :'1.2-2'}}</td>\r\n                <td class=\"text-right\">{{ stockElement.monedaNombre }}</td>\r\n                <td class=\"text-right\"><div *ngIf=\"stockElement.monedaNombre == '$AR'\">{{ stockElement.precioCompra | number :'1.2-2' }}</div></td>\r\n                <td class=\"text-right\"><div *ngIf=\"stockElement.monedaNombre == 'u$s'\">{{ stockElement.precioCompra | number :'1.2-2' }}</div></td>\r\n                <td class=\"text-right\">{{ stockElement.stockFisico | number :'1.2-2' }}</td>\r\n                <td class=\"text-right\">{{ stockElement.ingresoVirtual  | number :'1.2-2' }}</td>\r\n                <td class=\"text-right\">{{ stockElement.egresoVirtual | number :'1.2-2' }}</td>\r\n                <td class=\"text-right\">{{stockElement.virtualImputado | number :'1.2-2'}} </td>\r\n               <td class=\"text-right\">  {{ (stockElement.ingresos  - stockElement.egresos) + (stockElement.ingresoVirtual - stockElement.egresoVirtual)-stockElement.virtualImputado | number :'1.2-2'}}</td>\r\n                <!-- <td class=\"text-right\">{{ stockElement.stockVirtual }}</td>-->\r\n            </tr>\r\n        </tbody>\r\n\r\n\r\n <tfoot>\r\n            <tr>\r\n                <td colspan=\"12\">\r\n                 <!--    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator> -->\r\n                </td>\r\n            </tr>\r\n        </tfoot>\r\n\r\n\r\n    </table>\r\n <div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <div class=\"btn-imprimir-container\">\r\n        <button style=\"margin: 0 19px;\" (click)=\"descargarReporte()\" type=\"submit\" class=\"btn btn-secondary\">\r\n            <i style=\"padding-right: 4px\" class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\r\n            Reporte General\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"col-sm-2\">\r\n    <div class=\"btn-imprimir-container\">\r\n        <button style=\"margin: 0 19px;\" (click)=\"this.utilsService.descargarArchivoCsv(mf.data,  columnasTablaHeader, 'stockGeneral')\" type=\"submit\" class=\"btn btn-secondary\">\r\n\r\n            <i style=\"padding-right: 8px\"class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n          Descargar Excel/Csv\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"col-sm-2\">\r\n    <div class=\"btn-imprimir-container\">\r\n        <button style=\"margin: 0 19px;\" (click)=\"descargarReporteInventario()\" type=\"submit\" class=\"btn btn-secondary\">\r\n            <i style=\"padding-right: 4px\" class=\"fa fa-archive\" aria-hidden=\"true\"></i>\r\n            Control de Inventario\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n</ba-card>\r\n"

/***/ }),

/***/ "./src/app/pages/main/stock/consultaGeneral/consultaGeneral.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-general > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 10px; }\n  :host /deep/ .consulta-general > .card > .card-body .block-column {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 10px; }\n  :host /deep/ .consulta-general > .card > .card-body .column-reverse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 2px;\n    margin-bottom: 10px;\n    margin-top: 6px; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row > .item-input {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 5px; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row > .item-input > input {\n        margin: 0 5px; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row > .item-input > label {\n        margin-bottom: 5px;\n        margin-top: 3px;\n        white-space: nowrap;\n        padding-right: 5px;\n        min-width: 81px; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row > .item-input .minor-input {\n        width: 70px; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row > .item-select {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 5px; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row > .item-select > select {\n        margin: 0 5px;\n        min-width: 159px; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row > .item-select > label {\n        margin-bottom: 5px;\n        margin-top: 3px;\n        white-space: nowrap;\n        padding-right: 5px;\n        min-width: 81px; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row .date-picker-venc-hasta {\n      margin: 0 5px; }\n  :host /deep/ .consulta-general > .card > .card-body .input-row > .checkbox-container .checkbox-inline {\n      margin-bottom: 0px;\n      margin-top: 4px; }\n  :host /deep/ .consulta-general > .card > .card-body .flex-end {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .table-striped > tbody > tr > td {\n  border: none;\n  padding: 1px 12px; }\n  .table-striped > tbody > tr > .td-right {\n  text-align: right !important; }\n  .table-striped > tbody > tr > .td-nowrap {\n  white-space: nowrap; }\n  .table-consulta-comp thead tr th {\n  padding: 7px 10px; }\n  .table-consulta-comp thead td {\n  padding: 7px 5px; }\n  .table-consulta-comp .btn-print {\n  cursor: pointer; }\n  .btn-imprimir-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin: 1% -0.8%; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/consultaGeneral/consultaGeneralService.ts":
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
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var localStorageService_1 = __webpack_require__("./src/app/services/localStorageService.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var stock_1 = __webpack_require__("./src/app/models/stock.ts");
var ConsultaGeneralService = (function () {
    function ConsultaGeneralService(authService, localStorageService) {
        var _this = this;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.filtrarProductos = function (lista, textoBuscado) {
            return lista.filter(function (prov) { return prov.codProducto.toString().includes(textoBuscado) ||
                prov.descripcion.toString().toLowerCase().includes(textoBuscado); });
        };
        this.consultarStock = function (filtros) {
            return _this.authService.getBuscaStock(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token)(filtros)('general').map(function (resp) { return resp.arraydatos.map(function (stockItem) { return new stock_1.Stock(stockItem); }); });
        };
        this.descargarReporteInventario = function (filtros) {
            return _this.authService.descargaStock(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token)(filtros)('inventario');
        };
        this.descargarReporte = function (filtros) {
            return _this.authService.descargaStock(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token)(filtros)('general');
        };
    }
    return ConsultaGeneralService;
}());
ConsultaGeneralService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authService_1.AuthService !== "undefined" && authService_1.AuthService) === "function" && _a || Object, typeof (_b = typeof localStorageService_1.LocalStorageService !== "undefined" && localStorageService_1.LocalStorageService) === "function" && _b || Object])
], ConsultaGeneralService);
exports.ConsultaGeneralService = ConsultaGeneralService;
var _a, _b;
//# sourceMappingURL=consultaGeneralService.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/consultaGeneral/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/consultaGeneral/consultaGeneral.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/consultaPorProducto/consultaPorProducto.component.ts":
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
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var consultaPorProductoService_1 = __webpack_require__("./src/app/pages/main/stock/consultaPorProducto/consultaPorProductoService.ts");
var ConsultaPorProducto = (function () {
    function ConsultaPorProducto(recursoService, utilsService, popupListaService, consultaPorProductoService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.popupListaService = popupListaService;
        this.consultaPorProductoService = consultaPorProductoService;
        this.columnasTablaHeader = ["comprobante", "numero", "fechaEmision", "ingresos", "egresos", "precioCompra", "stockFisico", "pendiente", "stockVirtual"];
        // Filtros
        this.filtros = {
            fechaDesde: null,
            fechaHasta: null,
            codProducto: null,
            productoSelect: null,
            cteTipo: null,
            deposito: null,
            orden: null
        };
        // Info seleccionados
        this.info = {
            nombreProd: null
        };
        this.isLoading = false;
        // Data de la tabla
        this.stockData = Observable_1.Observable.of([]);
        // importacion de comprobantes de ventas
        this.actualizaVentasStock = Observable_1.Observable.of([]);
        // Desplegables
        this.cteTipos = Observable_1.Observable.of([]);
        this.depositos = Observable_1.Observable.of([]);
        // Indices
        this.productoEnfocadoIndex = -1;
        // Busquedas
        this.productos = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.isProdSelected = false;
        /**
         * Autocompletar fechaHasta
         */
        this.onBlurFechaDesde = function (e) { return (!_this.filtros.fechaDesde || typeof _this.filtros.fechaDesde !== 'string') ?
            null : _this.filtros.fechaDesde = _this.utilsService.stringToDateLikePicker(_this.filtros.fechaDesde); };
        this.onBlurFechaHasta = function (e) { return (!_this.filtros.fechaHasta || typeof _this.filtros.fechaHasta !== 'string') ?
            null : _this.filtros.fechaHasta = _this.utilsService.stringToDateLikePicker(_this.filtros.fechaHasta); };
        this.onClickConsultar = function () {
            _this.filtros.fechaDesde = '2022-01-01';
            _this.filtros.orden = 0;
            _this.isLoading = true;
            _this.stockData = _this.consultaPorProductoService.consultarStock(_this.filtros);
            _this.stockData.subscribe(function (result) {
                if (result.length > 0) {
                    _this.isLoading = false;
                }
            });
        };
        ///// EVENTOS BUSQUEDA PRODUCTO /////
        this.keyPressInputTextoProd = function (e) { return function (upOrDown) {
            e.preventDefault();
            // Hace todo el laburo de la lista popup y retorna el nuevo indice seleccionado
            _this.productoEnfocadoIndex =
                _this.popupListaService.keyPressInputForPopup(upOrDown)(_this.productos.filtrados.value)(_this.productoEnfocadoIndex);
        }; };
        /**
         * Evento on enter en el input de buscar cliente
         */
        this.onEnterInputProd = function (e) {
            e.preventDefault();
            var prodsLista = _this.productos.filtrados.value;
            // Busco el producto
            var prodSelect = prodsLista && prodsLista.length ? prodsLista[_this.productoEnfocadoIndex] : null;
            // Lo selecciono
            prodSelect ? _this.onSelectProducto(prodSelect) : null;
            // Reseteo el index
            _this.productoEnfocadoIndex = -1;
            // Vacio filtrados y focus lote input
            _this.productos.filtrados.next([]);
            document.getElementById('inputLoteNro') ? document.getElementById('inputLoteNro').focus() : null;
        };
        /**
         * Evento change del input del proovedor
         */
        this.onChangeInputProd = function (valor) {
            _this.isProdSelected = false;
            _this.productos.filtrados.next(_this.consultaPorProductoService.filtrarProductos(_this.productos.todos, valor));
            // Reseteo el indice
            _this.productoEnfocadoIndex = -1;
        };
        this.onBlurInputProd = function (evento) {
            if (!evento.target.value || evento.target.value.toString().length <= 0)
                return;
            // Busco si existe
            var prodExist = _this.productos.todos.find(function (p) { return p.codProducto.toString() === evento.target.value.toString(); });
            document.getElementById("card_producto").style.display = "none";
            // Si existe actualizo el existente
            if (prodExist && prodExist.idProductos) {
                _this.onSelectProducto(prodExist);
                document.getElementById("card_producto").style.display = "";
            }
            else {
                _this.filtros.codProducto = null;
                _this.filtros.productoSelect = null;
                _this.info.nombreProd = null;
            }
            // Vacio filtrados
            _this.productos.filtrados.next([]);
            // Hago focus en input producto
            document.getElementById("card_producto").style.display = "none";
            document.getElementById('inputLoteNro') ? document.getElementById('inputLoteNro').focus() : null;
        };
        this.onSelectProducto = function (prod) {
            _this.filtros.codProducto = prod.codProducto.toString();
            _this.filtros.productoSelect = prod;
            _this.info.nombreProd = prod.descripcion;
            _this.isProdSelected = true;
        };
        this.descargarReporte = function () {
            var fil = _this.filtros;
            _this.filtros.fechaDesde = "2022-01-01";
            _this.consultaPorProductoService.descargarReporte(_this.filtros).subscribe(function (resp) {
                if (resp && resp['_body']) {
                    _this.utilsService.downloadBlob(resp['_body'], _this.info.nombreProd);
                }
            });
        };
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)().subscribe(function (productos) {
            _this.productos.todos = productos;
            _this.productos.filtrados.next(productos);
        });
        this.cteTipos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)();
        this.depositos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.depositos)();
    }
    return ConsultaPorProducto;
}());
ConsultaPorProducto = __decorate([
    core_1.Component({
        selector: 'consulta-por-producto',
        styles: [__webpack_require__("./src/app/pages/main/stock/consultaPorProducto/consultaPorProducto.scss")],
        template: __webpack_require__("./src/app/pages/main/stock/consultaPorProducto/consultaPorProducto.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _c || Object, typeof (_d = typeof consultaPorProductoService_1.ConsultaPorProductoService !== "undefined" && consultaPorProductoService_1.ConsultaPorProductoService) === "function" && _d || Object])
], ConsultaPorProducto);
exports.ConsultaPorProducto = ConsultaPorProducto;
var _a, _b, _c, _d;
//# sourceMappingURL=consultaPorProducto.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/consultaPorProducto/consultaPorProducto.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"consulta-por-producto\">\r\n    <ba-card cardTitle=\"Filtros\" class=\"consulta-por-producto\" toggleBtn=\"true\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n\r\n                <label for=\"desde\">\r\n                    Producto *\r\n                </label>\r\n                <input [(ngModel)]=\"filtros.codProducto\" type=\"text\" class=\"form-control text-left\" id=\"inputProducto\"\r\n                    placeholder=\"\" (keydown.arrowdown)=\"keyPressInputTextoProd($event)('down')\"\r\n                    (keydown.arrowup)=\"keyPressInputTextoProd($event)('up')\" (keyup.enter)=\"onEnterInputProd($event)\"\r\n                    (ngModelChange)=\"onChangeInputProd($event)\" (blur)=\"onBlurInputProd($event)\">\r\n\r\n                <popup-lista *ngIf=\"\r\n                                    filtros.codProducto &&\r\n                                    filtros.codProducto.length > 0 &&\r\n                                    !isProdSelected\r\n                                \" [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                    [keysToShow]=\"['descripcion', 'codProducto']\" [onClickItem]=\"onSelectProducto\"\r\n                    [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('inputProducto')\">\r\n                </popup-lista>\r\n\r\n                <!--\r\n                 <input  disabled\r\n                        [(ngModel)]=\"info.nombreProd\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right\"\r\n                        id=\"inputInfoProd\"\r\n                        placeholder=\"\">\r\n\r\n               -->\r\n            </div>\r\n\r\n\r\n            <div class=\"col-sm-2\">\r\n\r\n                <label for=\"selectComprobante\">\r\n                    Comprobante\r\n                </label>\r\n                <select [(ngModel)]=\"filtros.cteTipo\" disabled class=\"form-control\" id=\"selectComprobante\">\r\n                    <option [ngValue]=\"null\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let tipoCte of cteTipos | async\" [ngValue]=\"tipoCte\">\r\n                        {{tipoCte.descCorta}}\r\n                    </option>\r\n                </select>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"col-sm-2\">\r\n                <div class=\"item-select\">\r\n                    <label for=\"selectComprobante\">\r\n                        Deposito\r\n                    </label>\r\n                    <select [(ngModel)]=\"filtros.deposito\" class=\"form-control\" id=\"selectDeposito\">\r\n                        <option [ngValue]=\"null\">\r\n                            Todos\r\n                        </option>\r\n                        <option *ngFor=\"let dep of depositos | async\" [ngValue]=\"dep\">\r\n                            {{dep.descripcion}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n               <!--\r\n                 <div class=\"col-sm-2\">\r\n\r\n                <div class=\"item-input nro-cte\">\r\n                    <label for=\"desde\" [ngStyle]=\"{'min-width': '117px'}\">\r\n                        Fecha Desde *\r\n                    </label>\r\n\r\n                    <div class=\"input-group date-picker-venc-hasta\">\r\n                        <input [(ngModel)]=\"filtros.fechaDesde\" (blur)=\"onBlurFechaDesde($event)\" class=\"form-control\"\r\n                            placeholder=\"dd/mm/aaaa\" name=\"dp\" ngbDatepicker #dDesd=\"ngbDatepicker\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" (click)=\"dDesd.toggle()\" type=\"button\"\r\n                                style=\"height: 100%;\">\r\n                                <img src=\"assets/img/calendar-icon.svg\"\r\n                                    style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>-->\r\n\r\n\r\n\r\n            <div class=\"col-sm-2\">\r\n\r\n                <label for=\"desde\" [ngStyle]=\"{'min-width': '117px'}\">\r\n                    Fecha Hasta *\r\n                </label>\r\n\r\n                <div class=\"input-group date-picker-venc-hasta\">\r\n                    <input [(ngModel)]=\"filtros.fechaHasta\" (blur)=\"onBlurFechaHasta($event)\" class=\"form-control\"\r\n                        placeholder=\"dd/mm/aaaa\" name=\"dp\" ngbDatepicker #dHast=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dHast.toggle()\" type=\"button\"\r\n                            style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\"\r\n                                style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n          <div class=\"col-sm-1\">\r\n                <label for=\".\" [ngStyle]=\"{'min-width': '117px'}\">\r\n                        .\r\n                    </label>\r\n                <div class=\"input-group\">\r\n                        <button id=\"btnConsultar\" [disabled]=\"!filtros.codProducto\r\n                       || !filtros.fechaHasta\"\r\n                        (click)=\"onClickConsultar()\" class=\"btn btn-primary\">\r\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                        Consultar\r\n                    </button>\r\n                </div>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n    </ba-card>\r\n    <div style=\"text-align: center;\" *ngIf=\"isLoading\" class=\"spinner-container\">\r\n        <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n        <p style=\"text-align: center;\">Aguarde un momento, por favor.</p>\r\n    </div>\r\n    <ba-card id=\"card_producto\"  *ngIf=\"(stockData | async)?.length\" cardTitle=\"{{info.nombreProd}}\">\r\n        <table class=\"table table-striped\" [mfData]=\"stockData | async\" #mf=\"mfDataTable\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Cte</th>\r\n\r\n                    <th class=\"text-right\">Numero</th>\r\n                    <th>Fecha</th>\r\n                    <th class=\"text-right\">Ingresos</th>\r\n                    <th class=\"text-right\">Egresos</th>\r\n                    <th class=\"text-right\">Precio Compra</th>\r\n                    <th class=\"text-right\">Stock</th>\r\n                    <th class=\"text-right\">Pendiente</th>\r\n                    <th class=\"text-right\">Virtual</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let stockElement of mf.data\">\r\n\r\n                    <td>{{ stockElement.comprobante }}</td>\r\n                    <td class=\"text-right\">{{ stockElement.numero }}</td>\r\n                    <td>{{ utilsService.formatearFecha('DD/MM/YYYY')(stockElement.fechaEmision) }}</td>\r\n                    <td class=\"text-right\">{{ stockElement.ingresos | number :'1.2-2' }}</td>\r\n                    <td class=\"text-right\">{{ stockElement.egresos | number :'1.2-2' }}</td>\r\n                    <td class=\"text-right\">{{ stockElement.precioCompra | number :'1.2-2' }}</td>\r\n                    <td class=\"text-right\">{{ stockElement.stockFisico | number :'1.2-2' }}</td>\r\n                    <td class=\"text-right\">{{ stockElement.pendiente | number :'1.2-2' }}</td>\r\n                    <td class=\"text-right\">{{ stockElement.stockFisico+stockElement.stockVirtual | number :'1.2-2' }}</td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n                <tr>\r\n                    <td colspan=\"12\">\r\n                        <!-- <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator> -->\r\n                    </td>\r\n                </tr>\r\n            </tfoot>\r\n        </table>\r\n\r\n        <div class=\"btn-imprimir-container\">\r\n            <button style=\"margin: 0 19px;\"\r\n            [disabled]=\"!filtros.codProducto  || !filtros.fechaHasta\"\r\n            (click)=\"descargarReporte()\" type=\"submit\" class=\"btn btn-secondary\">\r\n                <i style=\"padding-right: 4px\" class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\r\n               Descargar Reporte\r\n            </button>\r\n            <button style=\"margin: 0 19px;\" (click)=\"this.utilsService.descargarArchivoCsv(mf.data,  columnasTablaHeader, 'stockProducto-'+filtros.codProducto)\" type=\"submit\" class=\"btn btn-secondary\">\r\n\r\n                <i style=\"padding-right: 8px\"class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n              Descargar Excel/Csv\r\n            </button>\r\n        </div>\r\n\r\n\r\n\r\n\r\n    </ba-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/main/stock/consultaPorProducto/consultaPorProducto.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-por-producto > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .block-column {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 10px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .column-reverse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .input-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 2px;\n    margin-bottom: 10px;\n    margin-top: 6px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .input-row > .item-input {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 5px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .input-row > .item-input > input {\n        margin: 0 5px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .input-row > .item-input > label {\n        margin-bottom: 5px;\n        margin-top: 3px;\n        white-space: nowrap;\n        padding-right: 5px;\n        min-width: 81px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .input-row > .item-input .minor-input {\n        width: 70px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .input-row > .item-select {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 5px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .input-row > .item-select > select {\n        min-width: 120px;\n        margin: 0 7px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .input-row > .item-select > label {\n        padding-top: 5px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .input-row .date-picker-venc-hasta {\n      margin: 0 5px; }\n  :host /deep/ .consulta-por-producto > .card > .card-body .flex-end {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .consulta-por-producto {\n  font-size: 11px; }\n  .btn-imprimir-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin: 1% -0.8%; }\n  .row {\n  width: 100%; }\n  .btn-imprimir-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin: 1% -0.8%; }\n  .table-striped > tbody > tr > td {\n  border: none;\n  padding: 1px 12px; }\n  .table-striped > tbody > tr > .td-right {\n  text-align: right !important; }\n  .table-striped > tbody > tr > .td-nowrap {\n  white-space: nowrap; }\n  .table-consulta-comp thead tr th {\n  padding: 7px 10px; }\n  .table-consulta-comp thead td {\n  padding: 7px 5px; }\n  .table-consulta-comp .btn-print {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/consultaPorProducto/consultaPorProductoService.ts":
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
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var localStorageService_1 = __webpack_require__("./src/app/services/localStorageService.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var stock_1 = __webpack_require__("./src/app/models/stock.ts");
var ConsultaPorProductoService = (function () {
    function ConsultaPorProductoService(authService, localStorageService) {
        var _this = this;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.filtrarProductos = function (lista, textoBuscado) {
            return lista.filter(function (prov) { return prov.codProducto.toString().includes(textoBuscado) ||
                prov.descripcion.toString().toLowerCase().includes(textoBuscado); });
        };
        this.consultarStock = function (filtros) {
            return _this.authService.getBuscaStock(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token)(filtros)('producto').map(function (resp) { return resp.arraydatos.map(function (stockItem) { return new stock_1.Stock(stockItem); }); });
        };
        this.descargarReporte = function (filtros) {
            return _this.authService.descargaStock(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token)(filtros)('producto');
        };
    }
    return ConsultaPorProductoService;
}());
ConsultaPorProductoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authService_1.AuthService !== "undefined" && authService_1.AuthService) === "function" && _a || Object, typeof (_b = typeof localStorageService_1.LocalStorageService !== "undefined" && localStorageService_1.LocalStorageService) === "function" && _b || Object])
], ConsultaPorProductoService);
exports.ConsultaPorProductoService = ConsultaPorProductoService;
var _a, _b;
//# sourceMappingURL=consultaPorProductoService.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/consultaPorProducto/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/consultaPorProducto/consultaPorProducto.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/pasajesLogs/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/pasajesLogs/pasajesLogs.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/pasajesLogs/pasajesLogs.component.ts":
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
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var PasajesLogs = (function () {
    function PasajesLogs(recursoService, utilsService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        // Data de la tabla
        this.tableData = new rxjs_1.BehaviorSubject([]);
        this.isLoading = true;
        this.tableColumns = [
            {
                nombre: 'Fecha y Hora',
                key: 'fechayhora',
                ancho: '20%',
                customClass: 'text-rigth',
                enEdicion: false
            },
            {
                nombre: 'Descripción',
                key: 'dato',
                ancho: '80%',
                customClass: 'text-left',
                enEdicion: false
            }
        ];
        this.isLoading = false;
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.listaPasajesLogs)().subscribe(function (values) {
            values.map(function (element) {
                if (element.dato.toLowerCase().includes("no", 0)) {
                    element.class = 'text-danger font-weight-bold';
                }
                else if (element.dato.toLowerCase().includes("no se conecto", 0)) {
                    element.class = 'text-danger font-weight-bold';
                }
            });
            _this.isLoading = false;
            _this.tableData.next(values);
        });
    }
    ;
    return PasajesLogs;
}());
PasajesLogs = __decorate([
    core_1.Component({
        selector: 'pasajes-logs',
        styles: [__webpack_require__("./src/app/pages/main/stock/pasajesLogs/pasajesLogs.scss")],
        template: __webpack_require__("./src/app/pages/main/stock/pasajesLogs/pasajesLogs.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object])
], PasajesLogs);
exports.PasajesLogs = PasajesLogs;
var _a, _b;
//# sourceMappingURL=pasajesLogs.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/pasajesLogs/pasajesLogs.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"lista-pasajes\">\r\n\r\n    <ba-card cardTitle=\"Logs Pasajes\" baCardClass=\"with-scroll\" class=\"data-table-container\">\r\n        <data-tables\r\n            [data]=\"tableData | async\"\r\n            [columns]=\"tableColumns\"\r\n            [rowsOnPage]=\"100\"\r\n            tituloTabla=\"Lista Pasajes\" >\r\n        </data-tables>\r\n\r\n    </ba-card>\r\n</div>\r\n<div style=\"text-align: center;\" *ngIf=\"isLoading\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n    <p style=\"text-align: center;\">Aguarde un momento, por favor.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/main/stock/pasajesLogs/pasajesLogs.scss":
/***/ (function(module, exports) {

module.exports = ".lista-pasajes {\n  font-size: 11px; }\n  .lista-pasajes .btn-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/posicionStock/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/posicionStock/posicionStock.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/posicionStock/posicionStock.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var producto_1 = __webpack_require__("./src/app/models/producto.ts");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var PosicionStock = (function () {
    function PosicionStock(recursoService, utilsService, comprobanteService, popupListaService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.comprobanteService = comprobanteService;
        this.popupListaService = popupListaService;
        this.resourcesREST = resoursesREST_1.resourcesREST;
        this.productos = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.productoEnfocadoIndex = -1;
        this.fechasFiltro = {
            desde: new dateLikePicker_1.DateLikePicker(),
            hasta: new dateLikePicker_1.DateLikePicker()
        };
        this.productoSelec = new producto_1.Producto();
        this.productoDesde = new producto_1.Producto();
        this.productoHasta = new producto_1.Producto();
        this.focusProductoHasta = false;
        this.focusProductoDesde = false;
        this.focusProductoSelec = false;
        this.posicionesStock = new rxjs_1.BehaviorSubject([]);
        this.totalSaldoFacturas = 0;
        this.totalSaldoRemitos = 0;
        this.saldoTotal = 0;
        this.isLoading = false;
        /**
         * On click buscar
         */
        this.onClickBuscar = function () {
            _this.isLoading = true;
            _this.totalSaldoFacturas = 0;
            _this.totalSaldoRemitos = 0;
            _this.saldoTotal = 0;
            // Busco los encabezados
            // Me suscribo a los cambios de los encabezados y en cada actualizacion de estos, actualizo también todos los detalles
            // Aprovecho a fijarme si la cantidad es 0. En ese caso, muestro mensaje
            _this.recursoService.getPosicionStock(_this.fechasFiltro)(_this.productoDesde.codProducto)
                .subscribe(function (posStock) {
                _this.posicionesStock.next(posStock);
                posStock && posStock.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron posiciones de stock con esas condiciones')()() : null;
                _this.posicionesStock.value.forEach(function (value) {
                    _this.totalSaldoFacturas = _this.totalSaldoFacturas + value.factura;
                    _this.totalSaldoRemitos = _this.totalSaldoRemitos + value.remito;
                });
                _this.saldoTotal = _this.totalSaldoFacturas - _this.totalSaldoRemitos;
                _this.isLoading = false;
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
        // Buscador producto
        this.onChangeProducto = function (busqueda) {
            if (busqueda && busqueda.length === 0) {
                _this.productos.filtrados.next([]);
            }
            else {
                _this.productos.filtrados.next(_this.comprobanteService.filtrarProductos(_this.productos.todos, busqueda));
            }
            _this.productoEnfocadoIndex = -1;
        };
        this.onClickPopupProducto = function (prod) {
            return _this.productoSelec = new producto_1.Producto(__assign({}, prod));
        };
        this.onClickPopupProductoDesde = function (prod) {
            return _this.productoDesde = new producto_1.Producto(__assign({}, prod));
        };
        this.onClickPopupProductoHasta = function (prod) {
            return _this.productoHasta = new producto_1.Producto(__assign({}, prod));
        };
        this.onClickReporte = function () {
            _this.recursoService.generarReportesPosStock(_this.fechasFiltro.desde)(_this.fechasFiltro.hasta)(_this.productoDesde.codProducto)
                .subscribe(function (resp) {
                if (resp) {
                    _this.utilsService.downloadBlob(resp['_body'], "posicionStock-" + _this.productoDesde.codProducto);
                }
            });
        };
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)()
            .subscribe(function (productos) {
            _this.productos.todos = productos;
            _this.productos.filtrados.next([]);
        });
    }
    PosicionStock.prototype.onFocusHasta = function () {
        this.focusProductoHasta = true;
    };
    PosicionStock.prototype.onBlurHasta = function () {
        this.focusProductoHasta = false;
    };
    PosicionStock.prototype.onFocusDesde = function () {
        this.focusProductoDesde = true;
    };
    PosicionStock.prototype.onBlurDesde = function () {
        this.focusProductoDesde = false;
    };
    PosicionStock.prototype.onFocusSelec = function () {
        this.focusProductoSelec = true;
    };
    PosicionStock.prototype.onBlurSelec = function () {
        this.focusProductoSelec = false;
    };
    return PosicionStock;
}());
PosicionStock = __decorate([
    core_1.Component({
        selector: 'posicion-stock',
        styles: [__webpack_require__("./src/app/pages/main/stock/posicionStock/posicionStock.scss")],
        template: __webpack_require__("./src/app/pages/main/stock/posicionStock/posicionStock.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object, typeof (_d = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _d || Object])
], PosicionStock);
exports.PosicionStock = PosicionStock;
var _a, _b, _c, _d;
//# sourceMappingURL=posicionStock.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/posicionStock/posicionStock.html":
/***/ (function(module, exports) {

module.exports = "<ba-card \r\n    class=\"consulta-comprobante criterio-busqueda\" \r\n    toggleBtn=\"true\"\r\n    cardTitle=\"Filtros\"\r\n    headerMin=\"true\"\r\n    >\r\n\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"desde\">Hasta</label>\r\n                <div class=\"input-group date-picker-fecha\">\r\n                    <input (blur)=\"onCalculateFecha($event)('desde')\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" [(ngModel)]=\"fechasFiltro.desde\"\r\n                        ngbDatepicker #dDesd=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dDesd.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"productoDesde\" class=\"min-width\">Producto:</label>\r\n                <input id=\"productoDesde\" \r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    (focus)=\"onFocusDesde()\"\r\n                    (blur)=\"onBlurDesde()\"\r\n                    name=\"productoDesde\"\r\n                    [(ngModel)]=\"productoDesde.codProducto\" type=\"text\" class=\"input-group form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"productoDesde.codProducto && productoDesde.codProducto.length > 0 && focusProductoDesde\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\" \r\n                [onClickItem]=\"onClickPopupProductoDesde\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoDesde')\">\r\n            </popup-lista>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"input-row flex-end-row\"> -->\r\n        <div class=\"input-row\" style=\"justify-content: space-between; display: flex;\">\r\n\r\n            <div class=\"btn-container item-input\">\r\n                <button id=\"btnBuscar\"\r\n                        [disabled]=\"!fechasFiltro.desde ||\r\n                                    !fechasFiltro.desde.day ||\r\n                                    !fechasFiltro.hasta ||\r\n                                    !fechasFiltro.hasta.day\"\r\n                        (click)=\"onClickBuscar()\"\r\n                        class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                    Buscar\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</ba-card>\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n</div>\r\n\r\n<!-- <ngb-tabset *ngIf=\"(compEncabezados | async)?.length > 0\" class=\"col-sm-12 tabset-consulta\"> -->\r\n<ngb-tabset *ngIf=\"!isLoading && (posicionesStock | async)?.length > 0\" class=\"col-sm-12 tabset-consulta\">\r\n    <ngb-tab title=\"Posiciones de Stock\">\r\n        <ng-template ngbTabContent>\r\n            <table style=\"table-layout: fixed; width: 100%;\" class=\"table table-striped table-consulta-comp\" [mfData]=\"posicionesStock | async\" #mf=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n                <thead>\r\n                    <tr>\r\n                        <th style=\"width:10%\">Fecha de emisión</th>\r\n                        <th style=\"width:20%\">Descripción</th>\r\n                        <th class=\"text-right\">Número</th>\r\n                        <th class=\"text-right\">Factura</th>\r\n                        <th class=\"text-right\">Remito</th>\r\n                        <th>Operación</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let posStock of mf.data\">\r\n                        <tr class=\"comprobante-tr\">\r\n                            <td style=\"width:10%\">{{ utilsService.formatearFecha('DD/MM/YYYY')(posStock.fechaEmision) }}</td>\r\n                            <td>{{ posStock.descripcion }}</td>\r\n                            <td class=\"text-right\">{{ posStock.numero }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(posStock.factura) }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(posStock.remito) }}</td>\r\n                            <td>{{ posStock.operacion }}</td>\r\n                        </tr>\r\n                    </ng-container>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"6\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n            <div class=\"detail-spacing\">\r\n                Total Período (Factura): {{ totalSaldoFacturas }}\r\n            </div>\r\n            <div class=\"detail-spacing\">\r\n                Total Período (Remito): {{ totalSaldoRemitos }}\r\n            </div>\r\n            <div class=\"detail-spacing\">\r\n                Total General Producto: {{ saldoTotal }}\r\n            </div>\r\n            <div class=\"btn-imprimir-container\">\r\n                <button style=\"margin: 0 19px;\" (click)=\"onClickReporte()\" type=\"submit\" class=\"btn btn-secondary\">\r\n                    <i style=\"padding-right: 4px\" class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\r\n                    Reporte\r\n                </button>\r\n            </div>\r\n        </ng-template>\r\n    </ngb-tab>\r\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/pages/main/stock/posicionStock/posicionStock.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-comprobante > .card {\n  margin-bottom: 2px;\n  font-size: 11px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda {\n    font-size: 11px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    padding: 0 1%;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 2px;\n      margin-bottom: 10px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > label {\n          margin-bottom: 5px;\n          margin-top: 3px;\n          padding-right: 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .flex-end-row {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-title {\n      width: 20%;\n      font-weight: 350;\n      margin: 5px 0 2px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content {\n      width: 98.8%;\n      font-size: 11px;\n      border: solid 1px #c2c2c7;\n      border-radius: 7px;\n      margin: 0px 8px 14px 0px;\n      padding: 6px 5px 0px 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .item-input {\n        width: 50%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > label {\n          width: 7%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input {\n          width: 49px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input:last-child {\n          width: 152px;\n          margin-right: 0; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .flex-end-with-padding {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 1%; }\n\n:host /deep/ .tabset-consulta {\n  font-size: 11px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > td {\n    border: none;\n    padding: 10px 12px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > th {\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > .td-right {\n    text-align: right !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead tr th {\n    padding: 7px 10px;\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead td {\n    padding: 7px 5px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp .btn-accion {\n    cursor: pointer;\n    margin: 8px 6px 0; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-titulo {\n    font-size: 1.2rem;\n    font-size: 0.9rem;\n    font-weight: bold; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td {\n    padding: 0 !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td tr th {\n      font-size: 11px;\n      border: solid 0px;\n      font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle {\n    cursor: pointer; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle:hover {\n    background: #c7c7c7; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > td {\n    padding: 1px 12px; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > th {\n    padding: 4px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta .btn-imprimir-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin: 1% -0.8%; }\n\n.popup-spinner {\n  position: fixed;\n  z-index: 9999999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 151px;\n  padding: 5px 9px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: white;\n  border: solid 1px #e0e0e0;\n  border-radius: 6px 9px 0px 0px;\n  margin-top: 4px; }\n\n.width-5 {\n  width: 5%; }\n\n.table > thead > tr > th {\n  white-space: normal !important; }\n\n.spinner-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2rem;\n  margin: 14px 0;\n  background: #fafafa;\n  padding: 10px 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  color: #213742; }\n\n.total-container {\n  padding: 0.5rem; }\n\n.title-text {\n  font-weight: bold; }\n\n.total-span {\n  padding-left: 2rem; }\n\n.min-width {\n  min-width: 70px; }\n\n.data-divider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly; }\n\n.detail-spacing {\n  font-weight: bold;\n  font-size: 0.8rem;\n  padding: 10px 20px; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/posicionStockGral/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/posicionStockGral/posicionStockGral.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/posicionStockGral/posicionStockGral.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var producto_1 = __webpack_require__("./src/app/models/producto.ts");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var PosicionStockGral = (function () {
    function PosicionStockGral(recursoService, utilsService, comprobanteService, popupListaService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.comprobanteService = comprobanteService;
        this.popupListaService = popupListaService;
        this.resourcesREST = resoursesREST_1.resourcesREST;
        this.productos = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.productoEnfocadoIndex = -1;
        this.filtroNulos = false;
        this.fechasFiltro = {
            desde: new dateLikePicker_1.DateLikePicker(),
            hasta: new dateLikePicker_1.DateLikePicker()
        };
        this.productoSelec = new producto_1.Producto();
        this.productoDesde = new producto_1.Producto();
        this.productoHasta = new producto_1.Producto();
        this.focusProductoHasta = false;
        this.focusProductoDesde = false;
        this.focusProductoSelec = false;
        this.posicionesStock = new rxjs_1.BehaviorSubject([]);
        this.isLoading = false;
        /**
         * On click buscar
         */
        this.onClickBuscar = function () {
            _this.isLoading = true;
            // Busco los encabezados
            // Me suscribo a los cambios de los encabezados y en cada actualizacion de estos, actualizo también todos los detalles
            // Aprovecho a fijarme si la cantidad es 0. En ese caso, muestro mensaje
            _this.recursoService.getPosicionStockGral(_this.fechasFiltro)(_this.productoDesde.codProducto)(_this.productoHasta.codProducto)
                .subscribe(function (posStock) {
                if (_this.filtroNulos) {
                    _this.posicionesStock.next(posStock.filter(function (element) { return element.saldo != 0; }));
                }
                else {
                    _this.posicionesStock.next(posStock);
                }
                posStock && posStock.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron posiciones de stock con esas condiciones')()() : null;
                _this.isLoading = false;
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
        // Buscador producto
        this.onChangeProducto = function (busqueda) {
            if (busqueda && busqueda.length === 0) {
                _this.productos.filtrados.next([]);
            }
            else {
                _this.productos.filtrados.next(_this.comprobanteService.filtrarProductos(_this.productos.todos, busqueda));
            }
            _this.productoEnfocadoIndex = -1;
        };
        this.onClickPopupProducto = function (prod) {
            return _this.productoSelec = new producto_1.Producto(__assign({}, prod));
        };
        this.onClickPopupProductoDesde = function (prod) {
            return _this.productoDesde = new producto_1.Producto(__assign({}, prod));
        };
        this.onClickPopupProductoHasta = function (prod) {
            return _this.productoHasta = new producto_1.Producto(__assign({}, prod));
        };
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)()
            .subscribe(function (productos) {
            _this.productos.todos = productos;
            _this.productos.filtrados.next([]);
        });
    }
    PosicionStockGral.prototype.onFocusHasta = function () {
        this.focusProductoHasta = true;
    };
    PosicionStockGral.prototype.onBlurHasta = function () {
        this.focusProductoHasta = false;
    };
    PosicionStockGral.prototype.onFocusDesde = function () {
        this.focusProductoDesde = true;
    };
    PosicionStockGral.prototype.onBlurDesde = function () {
        this.focusProductoDesde = false;
    };
    PosicionStockGral.prototype.onFocusSelec = function () {
        this.focusProductoSelec = true;
    };
    PosicionStockGral.prototype.onBlurSelec = function () {
        this.focusProductoSelec = false;
    };
    return PosicionStockGral;
}());
PosicionStockGral = __decorate([
    core_1.Component({
        selector: 'posicion-stock-gral',
        styles: [__webpack_require__("./src/app/pages/main/stock/posicionStockGral/posicionStockGral.scss")],
        template: __webpack_require__("./src/app/pages/main/stock/posicionStockGral/posicionStockGral.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object, typeof (_d = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _d || Object])
], PosicionStockGral);
exports.PosicionStockGral = PosicionStockGral;
var _a, _b, _c, _d;
//# sourceMappingURL=posicionStockGral.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/posicionStockGral/posicionStockGral.html":
/***/ (function(module, exports) {

module.exports = "<ba-card \r\n    class=\"consulta-comprobante criterio-busqueda\" \r\n    toggleBtn=\"true\"\r\n    cardTitle=\"Filtros\"\r\n    headerMin=\"true\"\r\n    >\r\n\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"desde\">Desde</label>\r\n                <div class=\"input-group date-picker-fecha\">\r\n                    <input (blur)=\"onCalculateFecha($event)('desde')\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" [(ngModel)]=\"fechasFiltro.desde\"\r\n                        ngbDatepicker #dDesd=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dDesd.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"al\">al</label>\r\n\r\n                <div class=\"input-group date-picker-fecha\">\r\n                    <input (blur)=\"onCalculateFecha($event)('hasta')\" id=\"fechaHasta\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\"\r\n                        [(ngModel)]=\"fechasFiltro.hasta\" ngbDatepicker #dHast=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dHast.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"productoDesde\" class=\"min-width\">Prod. Desde:</label>\r\n                <input id=\"productoDesde\" \r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    (focus)=\"onFocusDesde()\"\r\n                    (blur)=\"onBlurDesde()\"\r\n                    name=\"productoDesde\"\r\n                    [(ngModel)]=\"productoDesde.codProducto\" type=\"text\" class=\"input-group form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"productoDesde.codProducto && productoDesde.codProducto.length > 0 && focusProductoDesde\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\" \r\n                [onClickItem]=\"onClickPopupProductoDesde\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoDesde')\">\r\n            </popup-lista>\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"productoHasta\" class=\"min-width\">Prod. Hasta:</label>\r\n                <input id=\"productoHasta\" \r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    (focus)=\"onFocusHasta()\"\r\n                    (blur)=\"onBlurHasta()\"\r\n                    name=\"productoHasta\"\r\n                    [(ngModel)]=\"productoHasta.codProducto\" type=\"text\" class=\"input-group form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"productoHasta.codProducto && productoHasta.codProducto.length > 0 && focusProductoHasta\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\" \r\n                [onClickItem]=\"onClickPopupProductoHasta\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoHasta')\">\r\n            </popup-lista>\r\n        </div>\r\n\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"filtroNulos\" class=\"min-width\">Filtrar Saldos Nulos</label>\r\n                <input id=\"filtroNulos\" \r\n                    name=\"filtroNulos\"\r\n                    [(ngModel)]=\"filtroNulos\" type=\"checkbox\" class=\"input-group form-control\"\r\n                    >\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"input-row flex-end-row\"> -->\r\n        <div class=\"input-row\" style=\"justify-content: space-between; display: flex;\">\r\n\r\n            <div class=\"btn-container item-input\">\r\n                <button id=\"btnBuscar\"\r\n                        [disabled]=\"!fechasFiltro.desde ||\r\n                                    !fechasFiltro.desde.day ||\r\n                                    !fechasFiltro.hasta ||\r\n                                    !fechasFiltro.hasta.day\"\r\n                        (click)=\"onClickBuscar()\"\r\n                        class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                    Buscar\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</ba-card>\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n</div>\r\n\r\n<!-- <ngb-tabset *ngIf=\"(compEncabezados | async)?.length > 0\" class=\"col-sm-12 tabset-consulta\"> -->\r\n<ngb-tabset *ngIf=\"!isLoading && (posicionesStock | async)?.length > 0\" class=\"col-sm-12 tabset-consulta\">\r\n    <ngb-tab title=\"Posiciones de Stock\">\r\n        <ng-template ngbTabContent>\r\n            <table style=\"table-layout: fixed; width: 100%;\" class=\"table table-striped table-consulta-comp\" [mfData]=\"posicionesStock | async\" #mf=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n                <thead>\r\n                    <tr>\r\n                        <th style=\"width:10%\">Cod Producto</th>\r\n                        <th style=\"width:20%\">Descripción</th>\r\n                        <th class=\"text-right\">Saldo Ant. Fecha</th>\r\n                        <th class=\"text-right\">Facturas</th>\r\n                        <th class=\"text-right\">Remitos</th>\r\n                        <th class=\"text-right\">Saldo Producto</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let posStock of mf.data\">\r\n                        <tr class=\"comprobante-tr\">\r\n                            <td style=\"width:10%\">{{ posStock.codProducto }}</td>\r\n                            <td>{{ posStock.descripcion }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(posStock.anterior) }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(posStock.facturas) }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(posStock.remitos) }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(posStock.saldo) }}</td>\r\n                        </tr>\r\n                    </ng-container>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"6\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </ng-template>\r\n    </ngb-tab>\r\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/pages/main/stock/posicionStockGral/posicionStockGral.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-comprobante > .card {\n  margin-bottom: 2px;\n  font-size: 11px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda {\n    font-size: 11px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    padding: 0 1%;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 2px;\n      margin-bottom: 10px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > label {\n          margin-bottom: 5px;\n          margin-top: 3px;\n          padding-right: 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .flex-end-row {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-title {\n      width: 20%;\n      font-weight: 350;\n      margin: 5px 0 2px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content {\n      width: 98.8%;\n      font-size: 11px;\n      border: solid 1px #c2c2c7;\n      border-radius: 7px;\n      margin: 0px 8px 14px 0px;\n      padding: 6px 5px 0px 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .item-input {\n        width: 50%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > label {\n          width: 7%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input {\n          width: 49px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input:last-child {\n          width: 152px;\n          margin-right: 0; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .flex-end-with-padding {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 1%; }\n\n:host /deep/ .tabset-consulta {\n  font-size: 11px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > td {\n    border: none;\n    padding: 10px 12px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > th {\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > .td-right {\n    text-align: right !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead tr th {\n    padding: 7px 10px;\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead td {\n    padding: 7px 5px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp .btn-accion {\n    cursor: pointer;\n    margin: 8px 6px 0; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-titulo {\n    font-size: 1.2rem;\n    font-size: 0.9rem;\n    font-weight: bold; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td {\n    padding: 0 !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td tr th {\n      font-size: 11px;\n      border: solid 0px;\n      font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle {\n    cursor: pointer; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle:hover {\n    background: #c7c7c7; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > td {\n    padding: 1px 12px; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > th {\n    padding: 4px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta .btn-imprimir-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin: 1% -0.8%; }\n\n.popup-spinner {\n  position: fixed;\n  z-index: 9999999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 151px;\n  padding: 5px 9px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: white;\n  border: solid 1px #e0e0e0;\n  border-radius: 6px 9px 0px 0px;\n  margin-top: 4px; }\n\n.width-5 {\n  width: 5%; }\n\n.table > thead > tr > th {\n  white-space: normal !important; }\n\n.spinner-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2rem;\n  margin: 14px 0;\n  background: #fafafa;\n  padding: 10px 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  color: #213742; }\n\n.total-container {\n  padding: 0.5rem; }\n\n.title-text {\n  font-weight: bold; }\n\n.total-span {\n  padding-left: 2rem; }\n\n.min-width {\n  min-width: 70px; }\n\n.data-divider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/editarProducto/editarProducto.component.ts":
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
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var producto_1 = __webpack_require__("./src/app/models/producto.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var EditarProducto = (function () {
    function EditarProducto(recursoService, utilsService, router, route) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.router = router;
        this.route = route;
        this.recurso = new producto_1.Producto();
        this.recursoOriginal = new producto_1.Producto();
        this.cultivos = [];
        // Si NO finalizó la edición, y SI editó el recurso..
        this.canDeactivate = function () {
            return _this.recursoService.getEdicionFinalizada() ||
                _this.recursoService.checkIfEquals(_this.recurso, _this.recursoOriginal);
        };
        this.onClickEditar = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var resp, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.recursoService.editarRecurso(this.recurso)()];
                    case 1:
                        resp = _a.sent();
                        this.utilsService.showModal(resp.control.codigo)(resp.control.descripcion)(function () {
                            _this.router.navigate(['/pages/stock/productos']);
                            _this.recursoService.setEdicionFinalizada(true);
                        })();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        this.utilsService.decodeErrorResponse(ex_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.compareWithModeloImpu = function (mod1, mod2) { return mod1 && mod2 ? mod1.idModeloCab === mod2.idModeloCab : mod1 === mod2; };
        /**
         * Cuanbdo cambia Rubro, actualizo SubRubros
         */
        this.onChangeRubro = function (rubroSelect) {
            _this.subRubros = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.subRubros)({
                'idRubro': rubroSelect.idRubro
            });
            // this.recursoEditado = true;
        };
        this.compareWithSubRubro = function (r1, r2) {
            if (r1 && r2 && _this.recurso && _this.recurso.subRubro) {
                return r2.idSubRubro === _this.recurso.subRubro.idSubRubro;
            }
            ;
        };
        this.onConditionCultivo = function (cult) {
            return _this.recurso.cultivos.length > 0 &&
                _this.recurso.cultivos.some(function (recCult) { return recCult.idCultivo === cult.idCultivo; });
        };
        /**
         * Agrega/quita un cultivo de los cultivos del producto
         */
        this.onClickCultivo = function (cult) { return function () {
            return _this.recurso.cultivos.some(function (recCult) { return recCult.idCultivo === cult.idCultivo; }) ?
                _this.recurso.cultivos = _this.recurso.cultivos.filter(function (recCult) { return recCult.idCultivo !== cult.idCultivo; }) :
                _this.recurso.cultivos = _this.recurso.cultivos.concat(cult);
        }; };
        this.compareRubro = function (a, b) { return a && b && a.idRubro && b.idRubro && a.idRubro === b.idRubro; };
        this.rubros = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.rubros)();
        this.unidadesCompra = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisUnidad)();
        this.unidadesVenta = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisUnidad)();
        this.ivas = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisIVA)();
        this.modelosCab = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.modeloCab)();
        this.marcas = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.marcas)();
        this.monedas = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisMonedas)();
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cultivo)().toPromise()
            .then(function (cultivos) { return _this.cultivos = cultivos; });
        // Busco el recurso por id
        this.route.params.subscribe(function (params) {
            return _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)()
                .map(function (recursoList) {
                return recursoList.find(function (recurso) { return recurso.idProductos === parseInt(params.idProductos); });
            })
                .subscribe(function (recurso) {
                _this.recurso = recurso;
                _this.recursoOriginal = Object.assign({}, recurso);
                _this.subRubros = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.subRubros)({
                    idRubro: _this.recurso.subRubro.rubro.idRubro
                });
            });
        });
    }
    EditarProducto.prototype.ngOnInit = function () {
        this.recursoService.setEdicionFinalizada(false);
    };
    return EditarProducto;
}());
__decorate([
    core_1.HostListener('window:beforeunload'),
    __metadata("design:type", Object)
], EditarProducto.prototype, "canDeactivate", void 0);
EditarProducto = __decorate([
    core_1.Component({
        selector: 'editar-producto',
        styles: [__webpack_require__("./src/app/pages/main/stock/productos/components/editarProducto/editarProducto.scss")],
        template: __webpack_require__("./src/app/pages/main/stock/productos/components/editarProducto/editarProducto.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object])
], EditarProducto);
exports.EditarProducto = EditarProducto;
var _a, _b, _c, _d;
//# sourceMappingURL=editarProducto.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/editarProducto/editarProducto.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editar-producto\">\r\n    <ba-card cardTitle=\"Modificar producto\" baCardClass=\"with-scroll\">\r\n        <form #producForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codProducto\">Codigo </label>\r\n                        <input required name=\"fafa1\" [(ngModel)]=\"recurso.codProducto\" type=\"text\" class=\"form-control\"\r\n                            id=\"codProducto\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codProductoOriginal\">Codigo Original</label>\r\n                        <input name=\"fafa66\" [(ngModel)]=\"recurso.codProductoOriginal\" type=\"text\" class=\"form-control\" id=\"codProductoOriginal\"\r\n                            placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigoBarra\">Codigo Barra</label>\r\n                        <input name=\"fafa2\" [(ngModel)]=\"recurso.codigoBarra\" type=\"text\" class=\"form-control\" id=\"codigoBarra\"\r\n                            placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-5\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"descripcion\">Descripcion</label>\r\n                        <input name=\"fafa3\" [(ngModel)]=\"recurso.descripcion\" type=\"text\" class=\"form-control\" id=\"descripcion\"\r\n                            placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"descripcionCorta\">Desc Corta</label>\r\n                        <input name=\"fafa4\" [(ngModel)]=\"recurso.descripcionCorta\" type=\"text\" class=\"form-control\" id=\"descripcionCorta\"\r\n                            placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row custom-card\">\r\n                <div class=\"col-sm-7\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rubro\">Rubro </label>\r\n                                <select [compareWith]=\"compareRubro\" required name=\"fafa5\" [(ngModel)]=\"recurso.subRubro.rubro\" (ngModelChange)=\"onChangeRubro($event)\"\r\n                                    class=\"form-control\" id=\"rubro\">\r\n                                    <option *ngFor=\"let rubro of rubros | async\" [ngValue]=\"rubro\">\r\n                                        {{rubro.descripcion}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"subRubro\">Sub Rubro </label>\r\n                                <select [compareWith]=\"utilsService.dropdownCompareWith\" required name=\"fafa6\" [(ngModel)]=\"recurso.subRubro\" class=\"form-control\" id=\"subRubro\">\r\n                                    <option *ngFor=\"let subRubro of subRubros | async\" [ngValue]=\"subRubro\">\r\n                                        {{subRubro.descripcion}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"unidadCompra\">Unidad Compra </label>\r\n                                <select [compareWith]=\"utilsService.dropdownCompareWith\" required name=\"fafa7\" [(ngModel)]=\"recurso.unidadCompra\" class=\"form-control\"\r\n                                    id=\"unidadCompra\">\r\n                                    <option *ngFor=\"let uniCompra of unidadesCompra | async\" [ngValue]=\"uniCompra\">\r\n                                        {{uniCompra.descripcion}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"unidadVenta\">Unidad Venta </label>\r\n                                <select [compareWith]=\"utilsService.dropdownCompareWith\" required name=\"fafa8\" [(ngModel)]=\"recurso.unidadVenta\" class=\"form-control\" id=\"unidadVenta\">\r\n                                    <option *ngFor=\"let uniVenta of unidadesVenta | async\" [ngValue]=\"uniVenta\">\r\n                                        {{uniVenta.descripcion}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"checkbox-categ\">\r\n                                <ba-checkbox name=\"fafa9\" [(ngModel)]=\"recurso.stock\" [label]=\"'Stock'\"\r\n                                    [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"IVA\">IVA </label>\r\n                                <select [compareWith]=\"utilsService.dropdownCompareWith\" required name=\"fafa11\" [(ngModel)]=\"recurso.IVA\" class=\"form-control text-right-select\"\r\n                                    id=\"IVA\">\r\n                                    <option *ngFor=\"let iva of ivas | async\" [ngValue]=\"iva\">\r\n                                        {{utilsService.parseDecimal(iva.porcIVA)}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"marca\">Marca </label>\r\n                                <select [compareWith]=\"utilsService.dropdownCompareWith\" required name=\"fafa12\" [(ngModel)]=\"recurso.marca\" class=\"form-control text-right-select\"\r\n                                    id=\"marca\">\r\n                                    <!-- [attr.selected]=\"i == 0 ? true : null\" -->\r\n                                    <option *ngFor=\"let mar of marcas | async; let i = index\" [ngValue]=\"mar\"\r\n                                        >\r\n                                        {{ mar.descripcion }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"checkbox-apto-canje\">\r\n                                <ba-checkbox name=\"fafa13\" [(ngModel)]=\"recurso.aptoCanje\" [label]=\"'Apto Canje'\"\r\n                                    [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"recurso.aptoCanje\" class=\"col-sm-5\">\r\n                    <div class=\"badges-container\">\r\n                        <span class=\"title\">Seleccionados: </span>\r\n                        <div *ngFor=\"let cult of recurso.cultivos\" class=\"badge-item\">\r\n                            {{ cult.descripcion.substring(0,3).toUpperCase() }}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"cultivos-list\">\r\n                        <sexi-list title=\"Cultivos\" [items]=\"cultivos\" [onCondition]=\"onConditionCultivo\"\r\n                            [onClickEvent]=\"onClickCultivo\" [keysToShow]=\"['descripcion', 'cosecha']\">\r\n                        </sexi-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row custom-card\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"precioVentaProv\">Precio Venta Proveedor </label>\r\n                        <input (blur)=\"utilsService.onBlurInputNumber($event)\" required name=\"fafa14\" [(ngModel)]=\"recurso.precioVentaProv\" type=\"text\" class=\"form-control text-right\"\r\n                            id=\"precioVentaProv\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"costoReposicion\">Costo Reposicion </label>\r\n                        <input (blur)=\"utilsService.onBlurInputNumber($event)\" required name=\"fafa15\" [(ngModel)]=\"recurso.costoReposicion\" type=\"text\" class=\"form-control text-right\"\r\n                            id=\"costoReposicion\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"rubro\">Moneda</label>\r\n                        <select [compareWith]=\"utilsService.dropdownCompareWith\" name=\"monedar\" required [(ngModel)]=\"recurso.moneda\" class=\"form-control\" id=\"moneda\">\r\n                            <option *ngFor=\"let m of monedas | async\" [ngValue]=\"m\">\r\n                                {{ m.descripcion }}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"puntoPedido\">Punto Pedido </label>\r\n                        <input (blur)=\"utilsService.onBlurInputNumber($event)\" required name=\"fafa16\" [(ngModel)]=\"recurso.puntoPedido\" type=\"text\" class=\"form-control text-right\"\r\n                            id=\"puntoPedido\" placeholder=\"\">\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"row custom-card\">\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"checkbox-traza\">\r\n                        <ba-checkbox name=\"fafa18\" [(ngModel)]=\"recurso.trazable\" [label]=\"'Trazable'\" [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"checkbox-traza\">\r\n                        <ba-checkbox [disabled]=\"!recurso.trazable\" name=\"fafa123\" [(ngModel)]=\"recurso.traReceta\"\r\n                            [label]=\"'Receta'\" [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"checkbox-traza\">\r\n                        <ba-checkbox [disabled]=\"!recurso.trazable\" name=\"faf421\" [(ngModel)]=\"recurso.traInforma\"\r\n                            [label]=\"'Informa'\" [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group gtin-group\">\r\n                        <label for=\"gtin\">GTIN</label>\r\n                        <input [disabled]=\"!recurso.trazable\" required name=\"faf41a\" [(ngModel)]=\"recurso.gtin\" type=\"text\"\r\n                            class=\"form-control\" id=\"gtin\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row custom-card\">\r\n                <div class=\"col-sm-7\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"observaciones\">Observaciones</label>\r\n                        <textarea name=\"faf12321a\" [(ngModel)]=\"recurso.observaciones\" class=\"form-control\" placeholder=\"\"\r\n                            id=\"observaciones\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"offset-sm-2 col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"modeloInputacion\">Modelo inputacion </label>\r\n                        <select [compareWith]=\"utilsService.dropdownCompareWith\" [compareWith]=\"compareWithModeloImpu\" required name=\"fa123123fa\" [(ngModel)]=\"recurso.modeloCab\"\r\n                            class=\"form-control\" id=\"modeloCab\">\r\n                            <option *ngFor=\"let modCab of modelosCab | async\" [ngValue]=\"modCab\">\r\n                                {{modCab.descripcion}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                    <!-- <div class=\"col-sm-3\"> -->\r\n                        <div class=\"form-group\">\r\n                            <label for=\"puntoPedido\">Punto Pedido </label>\r\n                            <input (blur)=\"utilsService.onBlurInputNumber($event)\" required name=\"fafa16\" [(ngModel)]=\"recurso.puntoPedido\" type=\"text\" class=\"form-control text-right\"\r\n                                id=\"puntoPedido\" placeholder=\"\">\r\n                        </div>\r\n                    <!-- </div> -->\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" style=\"display: flex; justify-content: flex-end;\">\r\n                <button \r\n                    routerLink=\"/pages/stock/productos\"\r\n                    style=\"margin-right: 5px;\"\r\n                    class=\"btn btn-secondary \r\n                    btn-detalle\">\r\n                    Cancelar\r\n                </button>\r\n                <button\r\n                    (click)=\"onClickEditar()\" type=\"submit\" class=\"btn btn-primary\">Confirmar</button>\r\n            </div>\r\n\r\n        </form>\r\n    </ba-card>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/editarProducto/editarProducto.scss":
/***/ (function(module, exports) {

module.exports = ".editar-producto {\n  margin-top: 2%; }\n  .editar-producto .radio-comun {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-top: 3.7%; }\n  .editar-producto .custom-card {\n    border: 0;\n    border-radius: 5px;\n    position: relative;\n    -webkit-box-shadow: 0 0px 26px 0 rgba(0, 0, 0, 0.25);\n            box-shadow: 0 0px 26px 0 rgba(0, 0, 0, 0.25);\n    margin: 1px;\n    margin-bottom: 24px; }\n  .editar-producto .custom-card div {\n      margin-top: 3px;\n      margin-bottom: 3px; }\n  .editar-producto .custom-card .checkbox-apto-canje {\n      padding-top: 13%; }\n  .editar-producto .custom-card .checkbox-traza {\n      padding: 3%;\n      margin-top: 5%; }\n  .editar-producto .custom-card .checkbox-categ {\n      padding-top: 10%;\n      padding-left: 4%; }\n  .editar-producto .custom-card .gtin-group {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-top: 0; }\n  .editar-producto .custom-card .gtin-group label {\n        padding-top: 3%;\n        padding-right: 2%; }\n  .editar-producto .gtin-only {\n    margin: 7px 2px -1px; }\n  .editar-producto .btn-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .editar-producto .btn-container button {\n      margin-left: 5px; }\n  .editar-producto .badges-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 20px 0 9px;\n    min-height: 28px;\n    padding-top: 10px; }\n  .editar-producto .badges-container .title {\n      padding: 6px 8px 0px 0px; }\n  .editar-producto .badges-container .badge-item {\n      background: #d8efca;\n      border-radius: 12px;\n      color: #4d4d4d;\n      font-weight: 700;\n      height: 22px;\n      margin: 3px 11.7px 2px 0;\n      padding: 3px 8px 0;\n      text-transform: capitalize; }\n  .editar-producto .cultivos-list {\n    margin: 0 20px 0 9px !important;\n    max-height: 110px;\n    overflow: auto; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/editarProducto/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/productos/components/editarProducto/editarProducto.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/nuevoProducto/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/productos/components/nuevoProducto/nuevoProducto.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/nuevoProducto/nuevoProducto.component.ts":
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
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var producto_1 = __webpack_require__("./src/app/models/producto.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var NuevoProducto = (function () {
    function NuevoProducto(recursoService, utilsService, router) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.router = router;
        this.recurso = new producto_1.Producto();
        this.cultivos = [];
        this.onClickCrear = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var resp, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.recursoService.setRecurso(this.recurso)()];
                    case 1:
                        resp = _a.sent();
                        this.utilsService.showModal(resp.control.codigo)(resp.control.descripcion)(function () { return _this.router.navigate(['/pages/stock/productos']); })();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        this.utilsService.decodeErrorResponse(ex_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.compareWithModeloImpu = function (mod1, mod2) { return mod1 && mod2 ? mod1.idModeloCab === mod2.idModeloCab : mod1 === mod2; };
        /**
         * Cuanbdo cambia Rubro, actualizo SubRubros
         */
        this.onChangeRubro = function (rubroSelect) {
            _this.subRubros = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.subRubros)({
                'idRubro': rubroSelect.idRubro
            });
        };
        this.onConditionCultivo = function (cult) {
            return _this.recurso.cultivos.length > 0 &&
                _this.recurso.cultivos.some(function (recCult) { return recCult.idCultivo === cult.idCultivo; });
        };
        /**
         * Agrega/quita un cultivo de los cultivos del producto
         */
        this.onClickCultivo = function (cult) { return function () {
            return _this.recurso.cultivos.some(function (recCult) { return recCult.idCultivo === cult.idCultivo; }) ?
                _this.recurso.cultivos = _this.recurso.cultivos.filter(function (recCult) { return recCult.idCultivo !== cult.idCultivo; }) :
                _this.recurso.cultivos = _this.recurso.cultivos.concat(cult);
        }; };
        this.rubros = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.rubros)();
        this.unidadesCompra = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisUnidad)();
        this.unidadesVenta = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisUnidad)();
        this.ivas = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisIVA)();
        this.modelosCab = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.modeloCab)();
        this.marcas = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.marcas)();
        this.monedas = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisMonedas)();
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cultivo)().toPromise()
            .then(function (cultivos) { return _this.cultivos = cultivos; });
        // nullizo los valores del recurso
        this.recurso.IVA = null;
        this.recurso.subRubro = null;
        this.recurso.unidadCompra = null;
        this.recurso.unidadVenta = null;
        this.recurso.modeloCab = null;
        this.recurso.marca = null;
        this.recurso.moneda = null;
    }
    NuevoProducto.prototype.ngOnInit = function () {
        var _this = this;
        this.recursoService.getProximoCodigoProducto().subscribe(function (proxCodigo) { return _this.recurso.codProducto = proxCodigo; });
    };
    return NuevoProducto;
}());
NuevoProducto = __decorate([
    core_1.Component({
        selector: 'nuevo-producto',
        styles: [__webpack_require__("./src/app/pages/main/stock/productos/components/nuevoProducto/nuevoProducto.scss")],
        template: __webpack_require__("./src/app/pages/main/stock/productos/components/nuevoProducto/nuevoProducto.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], NuevoProducto);
exports.NuevoProducto = NuevoProducto;
var _a, _b, _c;
//# sourceMappingURL=nuevoProducto.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/nuevoProducto/nuevoProducto.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nuevo-producto\">\r\n    <ba-card cardTitle=\"Nuevo producto\" baCardClass=\"with-scroll\">\r\n        <form #producForm=\"ngForm\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codProducto\">Codigo </label>\r\n                        <input required name=\"fafa1\" [(ngModel)]=\"recurso.codProducto\" type=\"text\" class=\"form-control\"\r\n                            id=\"codProducto\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codProductoOriginal\">Codigo Original (Sis Anterior)</label>\r\n                        <input required name=\"fafa1a\" [(ngModel)]=\"recurso.codProductoOriginal\" type=\"text\" class=\"form-control\"\r\n                            id=\"codProductoOriginal\">\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"codigoBarra\">Codigo Barra</label>\r\n                        <input name=\"fafa2\" [(ngModel)]=\"recurso.codigoBarra\" type=\"text\" class=\"form-control\"\r\n                            id=\"codigoBarra\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-5\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"descripcion\">Descripcion</label>\r\n                        <input name=\"fafa3\" [(ngModel)]=\"recurso.descripcion\" type=\"text\" class=\"form-control\"\r\n                            id=\"descripcion\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"descripcionCorta\">Desc Corta</label>\r\n                        <input name=\"fafa4\" [(ngModel)]=\"recurso.descripcionCorta\" type=\"text\" class=\"form-control\"\r\n                            id=\"descripcionCorta\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row custom-card\">\r\n                <div class=\"col-sm-7\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"rubro\">Rubro </label>\r\n                                <select required name=\"fafa5\" [(ngModel)]=\"recurso.rubro\" (ngModelChange)=\"onChangeRubro($event)\"\r\n                                    class=\"form-control\" id=\"rubro\">\r\n                                    <option *ngFor=\"let rubro of rubros | async\" [ngValue]=\"rubro\">\r\n                                        {{rubro.descripcion}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"subRubro\">Sub Rubro </label>\r\n                                <select required name=\"fafa6\" [(ngModel)]=\"recurso.subRubro\" class=\"form-control\" id=\"subRubro\">\r\n                                    <option *ngFor=\"let subRubro of subRubros | async\" [ngValue]=\"subRubro\">\r\n                                        {{subRubro.descripcion}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"unidadCompra\">Unidad Compra </label>\r\n                                <select required name=\"fafa7\" [(ngModel)]=\"recurso.unidadCompra\" class=\"form-control\"\r\n                                    id=\"unidadCompra\">\r\n                                    <option *ngFor=\"let uniCompra of unidadesCompra | async\" [ngValue]=\"uniCompra\">\r\n                                        {{uniCompra.descripcion}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"unidadVenta\">Unidad Venta </label>\r\n                                <select required name=\"fafa8\" [(ngModel)]=\"recurso.unidadVenta\" class=\"form-control\" id=\"unidadVenta\">\r\n                                    <option *ngFor=\"let uniVenta of unidadesVenta | async\" [ngValue]=\"uniVenta\">\r\n                                        {{uniVenta.descripcion}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"checkbox-categ\">\r\n                                <ba-checkbox name=\"fafa9\" [(ngModel)]=\"recurso.stock\" [label]=\"'Stock'\"\r\n                                    [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"IVA\">IVA </label>\r\n                                <select required name=\"fafa11\" [(ngModel)]=\"recurso.IVA\" class=\"form-control text-right-select\"\r\n                                    id=\"IVA\">\r\n                                    <option *ngFor=\"let iva of ivas | async\" [ngValue]=\"iva\">\r\n                                        {{utilsService.parseDecimal(iva.porcIVA)}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"marca\">Marca </label>\r\n                                <select required name=\"fafa12\" [(ngModel)]=\"recurso.marca\" class=\"form-control text-right-select\"\r\n                                    id=\"marca\">\r\n                                    <!-- [attr.selected]=\"i == 0 ? true : null\" -->\r\n                                    <option *ngFor=\"let mar of marcas | async; let i = index\" [ngValue]=\"mar\"\r\n                                        >\r\n                                        {{ mar.descripcion }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <div class=\"checkbox-apto-canje\">\r\n                                <ba-checkbox name=\"fafa13\" [(ngModel)]=\"recurso.aptoCanje\" [label]=\"'Apto Canje'\"\r\n                                    [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"recurso.aptoCanje\" class=\"col-sm-5\">\r\n                    <div class=\"badges-container\">\r\n                        <span class=\"title\">Seleccionados: </span>\r\n                        <div *ngFor=\"let cult of recurso.cultivos\" class=\"badge-item\">\r\n                            {{ cult.descripcion.substring(0,3).toUpperCase() }}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"cultivos-list\">\r\n                        <sexi-list title=\"Cultivos\" [items]=\"cultivos\" [onCondition]=\"onConditionCultivo\"\r\n                            [onClickEvent]=\"onClickCultivo\" [keysToShow]=\"['descripcion', 'cosecha']\">\r\n                        </sexi-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row custom-card\">\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"precioVentaProv\">Precio Venta Proveedor </label>\r\n                        <input \r\n                            (blur)=\"utilsService.onBlurInputNumber($event)\"\r\n                            required name=\"fafa14\" [(ngModel)]=\"recurso.precioVentaProv\" type=\"text\" class=\"form-control text-right\"\r\n                            id=\"precioVentaProv\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"costoReposicion\">Costo Reposicion </label>\r\n                        <input \r\n                            (blur)=\"utilsService.onBlurInputNumber($event)\"\r\n                            required name=\"fafa15\" [(ngModel)]=\"recurso.costoReposicion\" type=\"text\" class=\"form-control text-right\"\r\n                            id=\"costoReposicion\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"rubro\">Moneda</label>\r\n                        <select name=\"monedar\" required [(ngModel)]=\"recurso.moneda\" class=\"form-control\" id=\"moneda\">\r\n                            \r\n                            <option *ngFor=\"let m of monedas | async\" [ngValue]=\"m\">\r\n                                {{ m.descripcion }}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"puntoPedido\">Punto Pedido </label>\r\n                        <input (blur)=\"utilsService.onBlurInputNumber($event)\" required name=\"fafa16\" [(ngModel)]=\"recurso.puntoPedido\" type=\"text\" class=\"form-control text-right\"\r\n                            id=\"puntoPedido\" placeholder=\"\">\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"row custom-card\">\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"checkbox-traza\">\r\n                        <ba-checkbox name=\"fafa18\" [(ngModel)]=\"recurso.trazable\" [label]=\"'Trazable'\" [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"checkbox-traza\">\r\n                        <ba-checkbox [disabled]=\"!recurso.trazable\" name=\"fafa123\" [(ngModel)]=\"recurso.traReceta\"\r\n                            [label]=\"'Receta'\" [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"checkbox-traza\">\r\n                        <ba-checkbox [disabled]=\"!recurso.trazable\" name=\"faf421\" [(ngModel)]=\"recurso.traInforma\"\r\n                            [label]=\"'Informa'\" [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"form-group gtin-group\">\r\n                        <label for=\"gtin\">GTIN</label>\r\n                        <input [disabled]=\"!recurso.trazable\" required name=\"faf41a\" [(ngModel)]=\"recurso.gtin\" type=\"text\"\r\n                            class=\"form-control\" id=\"gtin\" placeholder=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row custom-card\">\r\n                <div class=\"col-sm-7\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"observaciones\">Observaciones</label>\r\n                        <textarea name=\"faf12321a\" [(ngModel)]=\"recurso.observaciones\" class=\"form-control\"\r\n                            placeholder=\"\" id=\"observaciones\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"offset-sm-2 col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"modeloInputacion\">Modelo inputacion </label>\r\n                        <select [compareWith]=\"compareWithModeloImpu\" required name=\"fa123123fa\" [(ngModel)]=\"recurso.modeloCab\"\r\n                            class=\"form-control\" id=\"modeloCab\">\r\n                            <option *ngFor=\"let modCab of modelosCab | async\" [ngValue]=\"modCab\">\r\n                                {{modCab.descripcion}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                    <!-- <div class=\"col-sm-3\"> -->\r\n                        <div class=\"form-group\">\r\n                            <label for=\"puntoPedido\">Punto Pedido </label>\r\n                            <input (blur)=\"utilsService.onBlurInputNumber($event)\" required name=\"fafa16\" [(ngModel)]=\"recurso.puntoPedido\" type=\"text\" class=\"form-control text-right\"\r\n                                id=\"puntoPedido\" placeholder=\"\">\r\n                        </div>\r\n                    <!-- </div> -->\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" style=\"display: flex; justify-content: flex-end;\">\r\n                <button \r\n                    routerLink=\"/pages/stock/productos\"\r\n                    style=\"margin-right: 5px;\"\r\n                    class=\"btn btn-secondary \r\n                    btn-detalle\">\r\n                    Cancelar\r\n                </button>\r\n                <button [disabled]=\"utilsService.checkIfIncomplete(recurso)([\r\n                                        'idProductos',\r\n                                        'codigoBarra',\r\n                                        'aptoCanje',\r\n                                        'stock',\r\n                                        'trazable',\r\n                                        'traReceta',\r\n                                        'traInforma',\r\n                                        'IVA',\r\n                                        'descripcionCorta',\r\n                                        'descripcion',\r\n                                        'gtin',\r\n                                        'observaciones',\r\n                                        'editar'\r\n                                    ])()\"\r\n                    (click)=\"onClickCrear()\" type=\"submit\" class=\"btn btn-primary\">Confirmar</button>\r\n\r\n            </div>\r\n\r\n        </form>\r\n    </ba-card>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/nuevoProducto/nuevoProducto.scss":
/***/ (function(module, exports) {

module.exports = ".nuevo-producto {\n  margin-top: 2%; }\n  .nuevo-producto .radio-comun {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-top: 3.7%; }\n  .nuevo-producto .custom-card {\n    border: 0;\n    border-radius: 5px;\n    position: relative;\n    -webkit-box-shadow: 0 0px 26px 0 rgba(0, 0, 0, 0.25);\n            box-shadow: 0 0px 26px 0 rgba(0, 0, 0, 0.25);\n    margin: 1px;\n    margin-bottom: 24px; }\n  .nuevo-producto .custom-card div {\n      margin-top: 1%;\n      margin-bottom: 1.6%; }\n  .nuevo-producto .custom-card .checkbox-apto-canje {\n      padding-top: 13%; }\n  .nuevo-producto .custom-card .checkbox-traza {\n      padding: 3%;\n      margin-top: 5%; }\n  .nuevo-producto .custom-card .checkbox-categ {\n      padding-top: 10%;\n      padding-left: 4%; }\n  .nuevo-producto .custom-card .gtin-group {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-top: 0; }\n  .nuevo-producto .custom-card .gtin-group label {\n        padding-top: 3%;\n        padding-right: 2%; }\n  .nuevo-producto .badges-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 20px 0 9px;\n    min-height: 28px;\n    padding-top: 10px; }\n  .nuevo-producto .badges-container .title {\n      padding: 6px 8px 0px 0px; }\n  .nuevo-producto .badges-container .badge-item {\n      background: #d8efca;\n      border-radius: 12px;\n      color: #4d4d4d;\n      font-weight: 700;\n      height: 22px;\n      margin: 3px 11.7px 2px 0;\n      padding: 3px 8px 0;\n      text-transform: capitalize; }\n  .nuevo-producto .cultivos-list {\n    margin: 0 20px 0 9px !important;\n    max-height: 110px;\n    overflow: auto; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/tablaProductos/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/productos/components/tablaProductos/tablaProductos.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/tablaProductos/tablaProductos.component.ts":
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
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var productoPendiente_1 = __webpack_require__("./src/app/models/productoPendiente.ts");
var TablaProductos = (function () {
    function TablaProductos(utilsService, popupListaService) {
        var _this = this;
        this.utilsService = utilsService;
        this.popupListaService = popupListaService;
        // Datos de mierda que me da paja sacar por miedo a romper todo
        this.sortBy = 'nombre';
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortOrder = "asc";
        // Fin datos de mierda
        // Reusabilidad tabla
        this.enableAddItem = false;
        this.productosBusqueda = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.productoSeleccionado = new productoPendiente_1.ProductoPendiente();
        // Inhdice del producto enfocado del popup
        this.productoEnfocadoIndex = -1;
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
        /**
         * Evento change del input de codProducto
         */
        this.onChangeInputItemAdd = function (textoBuscado) {
            _this.productosBusqueda.filtrados.next(_this.productosBusqueda.todos.filter(function (prodPend) { return prodPend.producto.codProducto.toString().includes(textoBuscado) ||
                prodPend.producto.descripcion.toString().toLowerCase().includes(textoBuscado); }));
        };
        /**
         * El blur es cuando se hace un leave del input (caundo se apreta click afuera por ejemplo).
         * Acá lo que hago es poner un array vacio como próx valor de los filtrados, cosa que la lista desaparezca porque no hay nada
         */
        this.onBlurInputItemAdd = function () {
            setTimeout(function () { return _this.productosBusqueda.filtrados.next([]); }, 100);
            // También reseteo el indice de busqueda
            _this.productoEnfocadoIndex = -1;
        };
        /**
         * Retorna el offset del input add
         */
        this.getOffsetOfAddInput = function () {
            return _this.utilsService.getOffset(document.getElementById('addInput'));
        };
        /**
         * Setea la fecha de compra calculandola dado un string en formato 'ddmm', parseando a 'dd/mm/aaaa'
         */
        this.onCalculateFecha = function (e) { return function (key) { return function (subkey) { return function (item) {
            if (!item[key][subkey] || typeof item[key][subkey] !== 'string')
                return;
            item[key][subkey] = _this.utilsService.stringToDateLikePicker(item[key][subkey]);
            // Hago focus en el prox input
            (subkey === 'fechaElab') ? document.getElementById("fecha-fechaVto").focus() : null;
            // Confirmo edicion despues de hacer blur en el último campo
            (subkey === 'fechaVto') ? _this.confirmEdit(item) : null;
        }; }; }; };
        /**
         * Evento de cuando se apreta felcha arriba o feclah abajo en input de busca producto
         */
        this.keyPressInputTexto = function (e) { return function (upOrDown) {
            e.preventDefault();
            // Hace todo el laburo de la lista popup y retorna el nuevo indice seleccionado
            _this.productoEnfocadoIndex =
                _this.popupListaService.keyPressInputForPopup(upOrDown)(_this.productosBusqueda.filtrados.value)(_this.productoEnfocadoIndex);
        }; };
        /**
         * Evento on enter en el input de buscar productos
         */
        this.onEnterInputBuscProd = function (e) {
            e.preventDefault();
            _this.productosBusqueda.filtrados.subscribe(function (prodsLista) {
                // Busco el producto
                var prodSelect = prodsLista && prodsLista.length ? prodsLista[_this.productoEnfocadoIndex] : null;
                // Lo selecciono
                prodSelect ? _this.onClickProductoListaLocal(prodSelect) : null;
                // Reseteo el indice del prod buscado
                _this.productoEnfocadoIndex = -1;
            });
        };
        /**
         * Funcionalidad extra en onclickproductolsita
         */
        this.onClickProductoListaLocal = function (prodSelect) {
            _this.textoBusqueda = '';
            _this.onClickProductoLista(prodSelect);
        };
        /**
         * Retorna el subtotal requerido
         */
        this.getSubtotal = function (item) { return function (key) {
            var subtotalBuscado = _this.subtotales
                .find(function (st) { return st.idProducto === item.producto.idProductos; });
            return subtotalBuscado && subtotalBuscado[key] ?
                subtotalBuscado[key] : 0;
        }; };
        // Checkea si NO esta en edicion
        // checkIfEnEdicion = (col) => (item) => 
        //     !col.enEdicion || col.enEdicion !== item.producto.idProductos
        this.checkIfEnEdicion = function (col) { return function (item) {
            return col.enEdicion && col.enEdicion === item.producto.idProductos;
        }; };
        // Cheackea si esta en edicion
        this.checkIfEditOn = function (item) { return function (col) { return col.enEdicion && ((item.producto && item.producto.idProductos && col.enEdicion === item.producto.idProductos) ||
            (item.nroLote && col.enEdicion === item.nroLote) ||
            (item.idFormaPagoDet && col.enEdicion === item.idFormaPagoDet)); }; };
        /**
         * Retorna la clase del input que se va a poner en edicio y enfocar primero, cuando se apreta en editar
         */
        this.getClassInputEditable = function (item) { return function (col) {
            if (item) {
                // Agarro el id dependiendo el tipo de archivo. Como lo uso en lotes trazables y en detalles formas pagos y productos pendientes, solo me fijo esos dos
                var idItem = item.nroLote ? item.nroLote :
                    item.idFormaPagoDet ? item.idFormaPagoDet :
                        item.producto && item.producto.idProductos ? item.producto.idProductos : '000';
                // 'form-control edit-input input-edit-' + item.producto.idProductos
                return "form-control edit-input" + (col.editarFocus ? " editar-focus-" + idItem : '');
            }
        }; };
    }
    TablaProductos.prototype.ngOnInit = function () {
        var _this = this;
        // Cargo todos los productos pendientes posibles
        if (this.productosObservable) {
            this.productosObservable.subscribe(function (prodsPendPosibles) {
                _this.productosBusqueda.todos = prodsPendPosibles;
                _this.productosBusqueda.filtrados.next(prodsPendPosibles);
            });
        }
    };
    TablaProductos.prototype.toInt = function (num) {
        return +num;
    };
    /**
     * Obtiene el style a partir de una columna
     * @param col
     */
    TablaProductos.prototype.getStyleFromCol = function (col) {
        var styles = {
            'width': col.ancho,
            'border-top': 'none'
        };
        return styles;
    };
    /**
     * Este método checkea el tipo de dato de la key y la parsea de acuerdo a el. Por ejemplo, si es boolean retorna 'si' en 'true' y 'no' en 'false'
     * @param key
     */
    TablaProductos.prototype.parseKey = function (key) {
        var tipoDato = typeof key;
        if (tipoDato === 'boolean') {
            return key ? 'Si' : 'No';
        }
        else if (tipoDato === 'object') {
            // Me fijo el nombre de la clase del objeto
            if (key &&
                (key.constructor.name === 'DateLikePicker' ||
                    key.year && key.month && key.day)) {
                return "" + (key.day < 10 ? '0' : '') + key.day + "/" + (key.month < 10 ? '0' : '') + key.month + "/" + key.year;
            }
        }
        ;
        return key;
    };
    // Checkea si pongo el 'tick' para finalizar la edicion.
    TablaProductos.prototype.checkIfShowTick = function (item) {
        if (this.columns) {
            return this.columns.some(function (col) {
                return col.enEdicion && ((item.producto && item.producto.idProductos && col.enEdicion === item.producto.idProductos) ||
                    (item.nroLote && col.enEdicion === item.nroLote) ||
                    (item.idFormaPagoDet && col.enEdicion === item.idFormaPagoDet));
            });
        }
        ;
    };
    return TablaProductos;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "enableAddItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "columns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "edit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "remove", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "confirmEdit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TablaProductos.prototype, "subtotales", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" && _a || Object)
], TablaProductos.prototype, "productosObservable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "onClickProductoLista", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "comprobante", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "filtros", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaProductos.prototype, "onFilter", void 0);
TablaProductos = __decorate([
    core_1.Component({
        selector: 'tabla-productos',
        template: __webpack_require__("./src/app/pages/main/stock/productos/components/tablaProductos/tablaProductos.html"),
        styles: [__webpack_require__("./src/app/pages/main/stock/productos/components/tablaProductos/tablaProductos.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _c || Object])
], TablaProductos);
exports.TablaProductos = TablaProductos;
var _a, _b, _c;
//# sourceMappingURL=tablaProductos.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/tablaProductos/tablaProductos.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default tabla-productos\">\r\n    <!-- <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\"\r\n        [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\"> -->\r\n    <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n        <thead>\r\n\r\n            <tr>\r\n                <th *ngIf=\"edit || remove\" style=\"width: 10%\">\r\n\r\n                </th>\r\n\r\n                <th class=\"table-column\" *ngFor=\"let col of columns\" [ngStyle]=\"getStyleFromCol(col)\" [ngClass]=\"col.customClass ? col.customClass : 'text-align: left;'\">\r\n                    <input [(ngModel)]=\"filtros[col.nombreFiltro]\" (ngModelChange)=\"onFilter($event)\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                </th>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th *ngIf=\"edit || remove\" style=\"width: 10%; border-top: none;\"></th>\r\n                <!-- Recorro y muestro las columnas recibidas en el input -->\r\n                <th class=\"table-column\" *ngFor=\"let col of columns\" [ngStyle]=\"getStyleFromCol(col)\" [ngClass]=\"col.customClass ? col.customClass : 'text-align: left;'\">\r\n                    <mfDefaultSorter by=\"name\">{{col.nombre}}</mfDefaultSorter>\r\n                </th>\r\n            </tr>\r\n\r\n        </thead>\r\n\r\n        <tbody #tbodyref>\r\n            <tr *ngFor=\"let item of mf.data\">\r\n                <!-- BOTONES EDITAR Y BORRAR -->\r\n                <td *ngIf=\"edit || remove\" class=\"btn-container-td\">\r\n                    <div class=\"btn-container\">\r\n                        <div *ngIf=\"edit\" (click)=\"edit(item)\" class=\"btn-accion btn-editar\">\r\n                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                        <div *ngIf=\"remove\" (click)=\"remove(item)\" class=\"btn-accion btn-remover\">\r\n                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                        <div *ngIf=\"checkIfShowTick(item)\" (click)=\"confirmEdit(item)\" class=\"btn-accion btn-remover\">\r\n                            <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <!-- FIN BOTONES EDITAR Y BORRAR -->\r\n\r\n                <!-- ACA MUESTRA LA DATA -->\r\n                <td *ngFor=\"let col of columns\" [ngClass]=\"col.customClass ? col.customClass : 'text-align: left;'\">\r\n                    <div *ngIf=\"col.subkey\">\r\n                        <div *ngIf=\"!checkIfEditOn(item)(col)\">\r\n                            {{parseKey( !utilsService.checkIfJson(item[col.key][col.subkey]) ? item[col.key][col.subkey] : item[col.key][col.subkey].descripcion\r\n                            )}}\r\n                        </div>\r\n\r\n                        <div *ngIf=\"checkIfEditOn(item)(col)\">\r\n                            <input *ngIf=\" (col.nombre !== 'trazable' && col.key !== 'trazabilidad') ||\r\n                                            (col.key === 'trazabilidad' && col.subkey !== 'fechaElab' && col.subkey !== 'fechaVto')\"\r\n                                [(ngModel)]=\"item[col.key][col.subkey]\" style=\"margin: 4px 6px;\" type=\"text\" [ngClass]=\"getClassInputEditable(item)(col)\"\r\n                                id=\"inputSubKey\" placeholder=\"\">\r\n\r\n                            <!-- Datepicker para fecha -->\r\n                            <div *ngIf=\"col.key === 'trazabilidad' && (col.subkey === 'fechaElab' || col.subkey === 'fechaVto')\" class=\"datepicker-datelikepicker\">\r\n                                <input [attr.id]=\"'fecha-' + col.subkey\" (blur)=\"onCalculateFecha($event)(col.key)(col.subkey)(item)\" (keyup.enter)=\"onCalculateFecha($event)(col.key)(col.subkey)(item)\"\r\n                                    class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"dp\" [(ngModel)]=\"item[col.key][col.subkey]\"\r\n                                    ngbDatepicker #dComp=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"dComp.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div *ngIf=\"!col.subkey\">\r\n                        <div *ngIf=\"!checkIfEditOn(item)(col)\">\r\n                            <!-- Caso comun -->\r\n                            <div *ngIf=\"col.nombre !== 'imputacion' && col.key !== 'subtotal' && col.key !== 'subtotalIva'\">\r\n                                {{parseKey(item[col.key])}}\r\n                            </div>\r\n\r\n                            <!-- CASOS PARTICULARES -->\r\n                            <div *ngIf=\"col.nombre === 'imputacion'\">\r\n                                {{ item[col.key] && item[col.key].seleccionada ? item[col.key].seleccionada.descripcion : ''}}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"col.key === 'subtotal' || col.key === 'subtotalIva'\">\r\n                                {{ getSubtotal(item)(col.key) }}\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                        <div *ngIf=\"checkIfEditOn(item)(col)\">\r\n\r\n                            <input *ngIf=\" (col.nombre !== 'imputacion' && col.key !== 'trazabilidad' && !col.elementoFinalBlur)\" [(ngModel)]=\"item[col.key]\"\r\n                                style=\"margin: 4px 6px; text-align: end;\" type=\"text\" [ngClass]=\"getClassInputEditable(item)(col)\"\r\n                                id=\"inputSubKey\" placeholder=\"\">\r\n\r\n                            <!-- ULTIMO INPUT EDITABLE. CAPTURO EL BLUR -->\r\n                            <input *ngIf=\"col.elementoFinalBlur\" [(ngModel)]=\"item[col.key]\" style=\"margin: 4px 6px; text-align: end;\" type=\"text\" class=\"form-control edit-input\"\r\n                                id=\"inputSubKey\" placeholder=\"\" (blur)=\"confirmEdit(item)\">\r\n                            <!-- FIN ULTIMO INPUT EDITABLE -->\r\n\r\n\r\n                            <!-- CASOS PARTICULARES -->\r\n                            <select *ngIf=\"col.nombre === 'imputacion'\" [(ngModel)]=\"item[col.key].seleccionada\" [ngClass]=\"'form-control without-padding editar-focus-' + item.producto.idProductos\">\r\n                                <option *ngFor=\"let impu of item[col.key].todas\" [ngValue]=\"impu\">\r\n                                    {{impu.descripcion}}\r\n                                </option>\r\n                            </select>\r\n                            <!-- FIN CASOS PARTICULARES -->\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <!-- FIN DE MUESTREO DE DATA -->\r\n\r\n            </tr>\r\n\r\n            <!-- ROW PARA AGREGAR UN PRODUCTO -->\r\n            <tr class=\"row-agregar-producto\" *ngIf=\"enableAddItem\">\r\n                <td></td>\r\n                <td *ngFor=\"let col of columns\">\r\n                    <div *ngIf=\"col.nombre === 'articulo'\">\r\n                        <input [(ngModel)]=\"textoBusqueda\" type=\"text\" class=\"form-control input-new-prod\" id=\"addInput\" placeholder=\"\" (blur)=\"onBlurInputItemAdd()\"\r\n                            (ngModelChange)=\"onChangeInputItemAdd($event)\" (keydown.arrowdown)=\"keyPressInputTexto($event)('down')\"\r\n                            (keydown.arrowup)=\"keyPressInputTexto($event)('up')\" (keydown.enter)=\"onEnterInputBuscProd($event)\"\r\n                            [disabled]=\"!comprobante.fechaComprobante || !comprobante.fechaComprobante.year\">\r\n\r\n                        <popup-lista *ngIf=\"textoBusqueda && textoBusqueda.length > 0\" [items]=\"productosBusqueda.filtrados\" [keysToShow]=\"['producto.descripcion', 'producto.codProducto']\"\r\n                            [onClickItem]=\"onClickProductoListaLocal\" [fatherPosition]=\"getOffsetOfAddInput()\">\r\n                        </popup-lista>\r\n                    </div>\r\n\r\n                </td>\r\n            </tr>\r\n            <!-- FIN ROW PARA AGREGAR UN PRODUCTO -->\r\n\r\n        </tbody>\r\n\r\n        <tfoot>\r\n            <tr>\r\n                <td colspan=\"12\">\r\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                </td>\r\n            </tr>\r\n        </tfoot>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/stock/productos/components/tablaProductos/tablaProductos.scss":
/***/ (function(module, exports) {

module.exports = "/*Modificacion Dario*/\n:host /deep/ .widgets .data-table-container {\n  width: 100%; }\n:host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n.panel .table .table-column {\n  text-transform: capitalize; }\n.panel .table thead {\n  background: #c2c3d2;\n  color: black;\n  text-shadow: 0 0 3px #fff; }\n.panel .table thead tr th {\n    text-align: center;\n    padding: 6px 4px; }\n.panel .table tbody tr td {\n  text-align: center;\n  padding: 0 4px; }\n.panel .table tbody tr td .datepicker-datelikepicker {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 90%;\n    margin-left: 9%; }\n.panel .table tbody .btn-container-td {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.panel .table tbody .btn-container-td .btn-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    padding-top: 7px; }\n.panel .table tbody .btn-container-td .btn-container .btn-accion {\n      margin: 2%;\n      font-size: 0.9rem;\n      padding: 5px 9px;\n      cursor: pointer;\n      padding-top: 0; }\n.panel .table tbody .btn-container-td .btn-container .btn-editar i {\n      vertical-align: middle; }\n.panel .table tbody .add-tr .add-td {\n  padding: 0 4px; }\n.panel .table tbody .add-tr .add-td .checkbox-traza {\n    margin-top: 6px; }\n.panel .table tbody .lista-filtrada-items {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.panel .table tbody tr td .input-new-prod {\n  width: 97%;\n  margin: 0 auto; }\n.panel .table tbody .row-agregar-producto td {\n  padding: 3px 0px; }\n.tabla-productos .form-control .sort-option {\n  text-transform: capitalize; }\n.tabla-productos .footer-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.tabla-productos .footer-table .add-item-label {\n    font-size: 0.9rem; }\n.tabla-productos .footer-table .deposito {\n    margin-right: 2%; }\n.without-padding {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/productos/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/productos/productos.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/productos/productos.component.ts":
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
var Productos = (function () {
    function Productos(recursoService, router, utilsService) {
        var _this = this;
        this.recursoService = recursoService;
        this.router = router;
        this.utilsService = utilsService;
        // Filtros de la tabla
        this.filtros = {
            codigo: '',
            descripcion: '',
            rubro: '',
            subRubro: '',
        };
        this.onClickEdit = function (recurso) {
            _this.router.navigate(['/pages/stock/productos/editar', recurso.idProductos]);
        };
        this.onClickRemove = function (recurso) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.utilsService.showModal('Borrar producto')('¿Estás seguro de borrar el producto?')(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var resp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.recursoService.borrarRecurso(recurso.idProductos)(resoursesREST_1.resourcesREST.productos)];
                            case 1:
                                resp = _a.sent();
                                // this.tableData = 
                                this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)().subscribe(function (resp) {
                                    _this.productosFiltrados = resp;
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
        /**
         * Filtra aplicando todos los filtros
         */
        this.onFilter = function (valor) {
            return _this.productosFiltrados = _this.allProductos
                .filter(function (producto) { return _this.filtros.codigo.length > 0 ? producto.codProducto.toLowerCase().includes(_this.filtros.codigo) : true; })
                .filter(function (producto) { return _this.filtros.descripcion.length > 0 ? producto.descripcion.toLowerCase().includes(_this.filtros.descripcion) : true; })
                .filter(function (producto) { return _this.filtros.rubro.length > 0 ? producto.subRubro.rubro.descripcion.toLowerCase().includes(_this.filtros.rubro) : true; })
                .filter(function (producto) { return _this.filtros.subRubro.length > 0 ? producto.subRubro.descripcion.toLowerCase().includes(_this.filtros.subRubro) : true; });
        };
        this.tableColumns = [
            {
                nombre: 'Código',
                key: 'codProducto',
                ancho: '10%',
                customClass: 'text-left',
                nombreFiltro: 'codigo'
            },
            {
                nombre: 'descripción',
                key: 'descripcion',
                ancho: '22%',
                customClass: 'text-left',
                nombreFiltro: 'descripcion'
            },
            {
                nombre: 'Rubro',
                key: 'subRubro',
                subkey: 'rubro',
                subsubkey: 'descripcion',
                ancho: '22%',
                customClass: 'text-left',
                nombreFiltro: 'rubro'
            },
            {
                nombre: 'Sub rubro',
                key: 'subRubro',
                subkey: 'descripcion',
                ancho: '22%',
                customClass: 'text-left',
                nombreFiltro: 'subRubro'
            }
        ];
        // this.tableData = this.recursoService.getRecursoList(resourcesREST.productos)();
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)().subscribe(function (resp) {
            _this.allProductos = resp;
            _this.productosFiltrados = resp;
        });
    }
    return Productos;
}());
Productos = __decorate([
    core_1.Component({
        selector: 'productos',
        styles: [__webpack_require__("./src/app/pages/main/stock/productos/productos.scss")],
        template: __webpack_require__("./src/app/pages/main/stock/productos/productos.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _c || Object])
], Productos);
exports.Productos = Productos;
var _a, _b, _c;
//# sourceMappingURL=productos.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/productos/productos.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"productos\">\r\n\r\n    <tabla-productos  [data]=\"productosFiltrados\" \r\n                        [columns]=\"tableColumns\" \r\n                        [remove]=\"onClickRemove\" \r\n                        [edit]=\"onClickEdit\" \r\n                        [onFilter]=\"onFilter\" \r\n                        [filtros]=\"filtros\">\r\n    </tabla-productos>\r\n\r\n    <div class=\"btn-container\">\r\n        <button routerLink=\"/pages/stock/productos/nuevo\" type=\"submit\" class=\"btn btn-default btn-new-user\" translate>\r\n            Nuevo\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/stock/productos/productos.scss":
/***/ (function(module, exports) {

module.exports = ".productos {\n  font-size: 11px; }\n  .productos .filtros-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .productos .filtros-container input {\n      margin: 0 5px; }\n  .productos .btn-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-bottom: 5%; }\n  .productos .btn-container button {\n      margin: 12px; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternos/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternos/tablaRemitosInternos.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternos/tablaRemitosInternos.component.ts":
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
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var remitosInternosService_1 = __webpack_require__("./src/app/pages/main/stock/remitosInternos/remitosInternosService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var comprobante_1 = __webpack_require__("./src/app/models/comprobante.ts");
var TablaRemitosInternos = (function () {
    function TablaRemitosInternos(remitosInternosService, utilsService) {
        var _this = this;
        this.remitosInternosService = remitosInternosService;
        this.utilsService = utilsService;
        // Datos de la tabla
        this.dataTable = [];
        this.emitActualizarTraza = new core_1.EventEmitter();
        // Índice del producto que está en edición
        this.indexProdEnEdicion = null;
        /**
         * Cuando se selecciona el producto reducido se hace una consulta buscando el producto completo
         */
        this.onSelectItem = function (prod) {
            _this.remitosInternosService.buscarProducto(prod.idProductos)
                .then(function (prod) {
                var auxProd = Object.assign(prod);
                auxProd.numero = _this.utilsService.numeroObjectToString(_this.comprobante.numerador);
                _this.dataTable.push(auxProd);
                // Busco el índice del producto
                var ind = _this.dataTable.indexOf(auxProd);
                // Lo pongo en edición
                _this.editItem(ind);
                // Actualizo trazables
                _this.emitActualizarTraza.emit(auxProd);
            });
        };
        this.editItem = function (ind) {
            _this.indexProdEnEdicion = ind;
            setTimeout(function () { return document.getElementById('idInputEditPendiente').focus(); });
        };
        /**
         * Saca un producto de los agregados
         */
        this.remove = function (prod) {
            _.remove(_this.dataTable, function (prod) {
                return prod.idFactDetalle === prod.idFactDetalle;
            });
            // Actualizo trazables
            _this.emitActualizarTraza.emit(prod);
        };
    }
    ;
    return TablaRemitosInternos;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TablaRemitosInternos.prototype, "dataTable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof rxjs_1.BehaviorSubject !== "undefined" && rxjs_1.BehaviorSubject) === "function" && _a || Object)
], TablaRemitosInternos.prototype, "productosReducidos", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof comprobante_1.Comprobante !== "undefined" && comprobante_1.Comprobante) === "function" && _b || Object)
], TablaRemitosInternos.prototype, "comprobante", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TablaRemitosInternos.prototype, "emitActualizarTraza", void 0);
TablaRemitosInternos = __decorate([
    core_1.Component({
        selector: 'tabla-remitos-internos',
        template: __webpack_require__("./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternos/tablaRemitosInternos.html"),
        styles: [__webpack_require__("./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternos/tablaRemitosInternos.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof remitosInternosService_1.RemitosInternosService !== "undefined" && remitosInternosService_1.RemitosInternosService) === "function" && _c || Object, typeof (_d = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _d || Object])
], TablaRemitosInternos);
exports.TablaRemitosInternos = TablaRemitosInternos;
var _a, _b, _c, _d;
//# sourceMappingURL=tablaRemitosInternos.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternos/tablaRemitosInternos.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabla-remitos-internos-container\">\r\n    <div class=\"tabla-remitos-internos\">\r\n        <table style=\"width:100%\">\r\n            <tr class=\"table-header\">\r\n                <th></th>\r\n                <th>Articulo</th>\r\n                <th>Descripcion</th>\r\n                <th>Cantidad</th>\r\n                <th>Unidad</th>\r\n                <th>Trazable</th>\r\n                <th>Nro Comp</th>\r\n                <th>LP</th>\r\n            </tr>\r\n        \r\n            <tr *ngFor=\"let p of dataTable; index as ind; last as isLast\">\r\n                <td>\r\n                    <div class=\"btn-actions-container\">\r\n                        <div \r\n                            (click)=\"editItem(ind)\" \r\n                            class=\"btn-accion btn-editar\">\r\n                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                        <div \r\n                            (click)=\"remove(item)\" \r\n                            class=\"btn-accion btn-remover\">\r\n                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                        <div \r\n                            *ngIf=\"indexProdEnEdicion === ind\"\r\n                            (click)=\"indexProdEnEdicion = null\" \r\n                            class=\"btn-accion btn-remover\">\r\n                            <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td>{{ p.producto.codProducto }}</td>\r\n                <td>{{ p.producto.descripcion }}</td>\r\n                <td>\r\n                    <input \r\n                        id=\"idInputEditPendiente\"\r\n                        *ngIf=\"indexProdEnEdicion === ind\"\r\n                        (blur)=\"indexProdEnEdicion = null\"\r\n                        [(ngModel)]=\"p.pendiente\"\r\n                        type=\"text\" \r\n                        class=\"form-control\">\r\n                    <div\r\n                        *ngIf=\"indexProdEnEdicion !== ind\">\r\n                        {{ p.pendiente }}\r\n                    </div>\r\n                </td>\r\n                <td>{{ p.producto.unidadVenta.descripcion }}</td>\r\n                <td>{{ p.producto.trazable ? 'Si' : 'No' }}</td>\r\n                <td>{{ p.numero }}</td>\r\n                <td>{{ p.codigoListaPrecio }}</td>\r\n            </tr>\r\n        </table> \r\n    \r\n    </div>\r\n    \r\n    <div class=\"search-container\">\r\n        <span>\r\n            Buscar Producto: \r\n        </span>\r\n        <search-producto \r\n            (selectItem)=\"onSelectItem($event)\"\r\n            [productosReducidos]=\"productosReducidos\"\r\n            [disableInput]=\"productosReducidos.value.length <= 0\"\r\n            >\r\n        </search-producto>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternos/tablaRemitosInternos.scss":
/***/ (function(module, exports) {

module.exports = "/*Modificacion Dario*/\n.tabla-remitos-internos-container .tabla-remitos-internos {\n  height: 112px;\n  overflow: auto; }\n.tabla-remitos-internos-container .tabla-remitos-internos table .table-header {\n    background: #b8b8bd; }\n.tabla-remitos-internos-container .tabla-remitos-internos table .table-header > th {\n      padding: 5px 2px; }\n.tabla-remitos-internos-container .tabla-remitos-internos table tr:nth-child(even) {\n    background: #cacad2; }\n.tabla-remitos-internos-container .tabla-remitos-internos table td {\n    padding: 2px; }\n.tabla-remitos-internos-container .tabla-remitos-internos table td .checkbox-td {\n      display: block;\n      margin: 2px; }\n.tabla-remitos-internos-container .tabla-remitos-internos .btn-actions-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    padding-top: 7px; }\n.tabla-remitos-internos-container .tabla-remitos-internos .btn-actions-container .btn-accion {\n      margin: 2%;\n      font-size: 0.9rem;\n      padding: 5px 9px;\n      cursor: pointer;\n      padding-top: 0; }\n.tabla-remitos-internos-container .tabla-remitos-internos .btn-actions-container .btn-editar i {\n      vertical-align: middle; }\n.tabla-remitos-internos-container .search-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n  width: 330px; }\n.tabla-remitos-internos-container .search-container > span {\n    padding: 6px; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternosTraza/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternosTraza/tablaRemitosInternosTraza.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternosTraza/tablaRemitosInternosTraza.component.ts":
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
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var comprobante_1 = __webpack_require__("./src/app/models/comprobante.ts");
var TablaRemitosInternosTraza = (function () {
    function TablaRemitosInternosTraza(utilsService) {
        var _this = this;
        this.utilsService = utilsService;
        // Datos de la tabla
        this.dataTable = [];
        // Índice del producto que está en edición
        this.indexProdEnEdicion = null;
        this.editItem = function (ind) {
            _this.indexProdEnEdicion = ind;
            setTimeout(function () { return document.getElementById('idInputEditPendiente').focus(); });
        };
    }
    ;
    return TablaRemitosInternosTraza;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TablaRemitosInternosTraza.prototype, "dataTable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof comprobante_1.Comprobante !== "undefined" && comprobante_1.Comprobante) === "function" && _a || Object)
], TablaRemitosInternosTraza.prototype, "comprobante", void 0);
TablaRemitosInternosTraza = __decorate([
    core_1.Component({
        selector: 'tabla-remitos-internos-traza',
        template: __webpack_require__("./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternosTraza/tablaRemitosInternosTraza.html"),
        styles: [__webpack_require__("./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternosTraza/tablaRemitosInternosTraza.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object])
], TablaRemitosInternosTraza);
exports.TablaRemitosInternosTraza = TablaRemitosInternosTraza;
var _a, _b;
//# sourceMappingURL=tablaRemitosInternosTraza.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternosTraza/tablaRemitosInternosTraza.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabla-remitos-internos-traza-container\">\r\n    <div class=\"tabla-remitos-internos\">\r\n        <table style=\"width:100%\">\r\n            <tr class=\"table-header\">\r\n                <th></th>\r\n                <th>Articulo</th>\r\n                <th>Descripcion</th>\r\n                <th>Proveedor</th>\r\n                <th>Gtin</th>\r\n                <th>Lote</th>\r\n                <th>Serie</th>\r\n                <th>Vto</th>\r\n                <th>Stock</th>\r\n                <th>Receta N</th>\r\n                <th>Cantidad</th>\r\n            </tr>\r\n        \r\n            <tr *ngFor=\"let p of dataTable; index as ind; last as isLast\">\r\n                <td>\r\n                    <div class=\"btn-actions-container\">\r\n                        <div \r\n                            (click)=\"editItem(ind)\" \r\n                            class=\"btn-accion btn-editar\">\r\n                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                        <div \r\n                            *ngIf=\"indexProdEnEdicion === ind\"\r\n                            (click)=\"indexProdEnEdicion = null\" \r\n                            class=\"btn-accion btn-remover\">\r\n                            <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td>{{ p.codProducto }}</td>\r\n                <td>{{ p.descripcionProd }}</td>\r\n                <td>{{ p.proveedor }}</td>\r\n                <td>{{ p.gtin }}</td>\r\n                <td>{{ p.nroLote }}</td>\r\n                <td>{{ p.serie }}</td>\r\n                <td>{{ utilsService.prettyDate(p.fechaVto) }}</td>\r\n                <td>{{ p.stock }}</td>\r\n                <!-- <td>{{ p.recetaN }}</td> -->\r\n                <td>\r\n                    <input \r\n                        id=\"idInputEditPendiente\"\r\n                        *ngIf=\"indexProdEnEdicion === ind\"\r\n                        (blur)=\"indexProdEnEdicion = null\"\r\n                        [(ngModel)]=\"p.recetaN\"\r\n                        type=\"text\" \r\n                        class=\"form-control\">\r\n                    <div\r\n                        *ngIf=\"indexProdEnEdicion !== ind\">\r\n                        {{ p.recetaN }}\r\n                    </div>\r\n                </td>\r\n                <td>{{ p.cantidad }}</td>\r\n            </tr>\r\n        </table> \r\n    \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternosTraza/tablaRemitosInternosTraza.scss":
/***/ (function(module, exports) {

module.exports = "/*Modificacion Dario*/\n.tabla-remitos-internos-traza-container .tabla-remitos-internos {\n  height: 112px;\n  overflow: auto; }\n.tabla-remitos-internos-traza-container .tabla-remitos-internos table .table-header {\n    background: #b8b8bd; }\n.tabla-remitos-internos-traza-container .tabla-remitos-internos table .table-header > th {\n      padding: 5px 2px; }\n.tabla-remitos-internos-traza-container .tabla-remitos-internos table tr:nth-child(even) {\n    background: #cacad2; }\n.tabla-remitos-internos-traza-container .tabla-remitos-internos table td {\n    padding: 2px; }\n.tabla-remitos-internos-traza-container .tabla-remitos-internos table td .checkbox-td {\n      display: block;\n      margin: 2px; }\n.tabla-remitos-internos-traza-container .tabla-remitos-internos .btn-actions-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    padding-top: 7px; }\n.tabla-remitos-internos-traza-container .tabla-remitos-internos .btn-actions-container .btn-accion {\n      margin: 2%;\n      font-size: 0.9rem;\n      padding: 5px 9px;\n      cursor: pointer;\n      padding-top: 0; }\n.tabla-remitos-internos-traza-container .tabla-remitos-internos .btn-actions-container .btn-editar i {\n      vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/stock/remitosInternos/remitosInternos.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/remitosInternos.component.ts":
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
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var sisModulos_1 = __webpack_require__("./src/constantes/sisModulos.ts");
var comprobante_1 = __webpack_require__("./src/app/models/comprobante.ts");
var comprobanteRelacionado_1 = __webpack_require__("./src/app/models/comprobanteRelacionado.ts");
var remitosInternosService_1 = __webpack_require__("./src/app/pages/main/stock/remitosInternos/remitosInternosService.ts");
var comprobanteEncabezado_1 = __webpack_require__("./src/app/models/comprobanteEncabezado.ts");
var RemitosInternos = (function () {
    function RemitosInternos(recursoService, utilsService, comprobanteService, remitosInternosService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.comprobanteService = comprobanteService;
        this.remitosInternosService = remitosInternosService;
        // Using a private subject like this is a pattern to manage unsubscribing many observables in the component.
        this._destroyed$ = new rxjs_1.Subject();
        this.comprobante = new comprobante_1.Comprobante();
        this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
        /** Tablas **/
        this.dataProductos = [];
        this.lotesTraza = [];
        /** Buscador productos **/
        this.productosReducidos = new rxjs_1.BehaviorSubject([]);
        /**
         * Evento onchange desplegable Tipo Operacion
         * Actualiza los depositos
         */
        this.onChangeTipoOperacion = function (tipoOpSelect) {
            _this.depositosOrigen = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.depositos)({
                todos: tipoOpSelect.depositoOrigen
            });
            _this.depositosDestino = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.depositos)({
                todos: tipoOpSelect.depositoDestino
            });
            _this.tiposComprobantes = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                'sisTipoOperacion': tipoOpSelect.idSisTipoOperacion,
            });
        };
        /**
         * Setea la fecha de compra calculandola dado un string en formato 'ddmm', parseando a 'dd/mm/aaaa'
         * También hago otras cosas
         */
        this.onBlurFechaComprobante = function (e) {
            // Actualizo fecha (sobretodo si el formato es 'ddmm')
            _this.comprobante.fechaComprobante = _this.utilsService.stringToDateLikePicker(_this.comprobante.fechaComprobante);
            // Hago foco en el primer checbkox de la sformas de pago (el timeout es necesario para que espere a que se haga la consulta)
            // en gral esta consulta dura poquito (entre 10 y 40 milisegundos). Por eso con 150 milisegundos de espera es mas que suficiente
            setTimeout(function () {
                // Hago focus al siguiente elemento de lps
                var primerCheckBoxFp = document.getElementById('lp-radio-0');
                if (primerCheckBoxFp) {
                    // primerCheckBoxFp.checked = true;
                    primerCheckBoxFp.focus();
                }
            }, 150);
        };
        this.onBlurPtoVenta = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobante.numerador && _this.comprobante.numerador.ptoVenta ?
                _this.comprobante.numerador.ptoVenta.ptoVenta = _this.comprobante.numerador.ptoVenta.ptoVenta
                    .padStart(4, '0') : null;
        };
        this.onBlurNumerador = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobante.numerador && _this.comprobante.numerador.numerador ?
                _this.comprobante.numerador.numerador = _this.comprobante.numerador.numerador
                    .padStart(8, '0') : null;
        };
        this.onBlurPtoVentaCteRel = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobanteRelacionado.puntoVenta ?
                _this.comprobanteRelacionado.puntoVenta = _this.comprobanteRelacionado.puntoVenta
                    .padStart(4, '0') : null;
        };
        this.onBlurNumeradorCteRel = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobanteRelacionado.numero ?
                _this.comprobanteRelacionado.numero = _this.comprobanteRelacionado.numero
                    .padStart(8, '0') : null;
        };
        /**
         * Trae data que depende del tipo comprobante relacionado
         * También limpia varios campos
         */
        this.onChangeTipoComprobante = function (cteTipoSelect) {
            _this.tiposComprobantesRel = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                'sisModulo': sisModulos_1.default.interno,
                'idCteTipo': cteTipoSelect.idCteTipo,
                'sisTipoOperacion': _this.tipoOpSelect.idSisTipoOperacion
            });
            // Si trae observaciones, las seteo en el nuevo comprobante que se está creando
            _this.comprobante.observaciones = cteTipoSelect.comprobante && cteTipoSelect.comprobante.observaciones ?
                cteTipoSelect.comprobante.observaciones : null;
            _this.comprobante.numerador = null;
            _this.comprobante.moneda = null;
            _this.comprobante.letraCodigo = null;
            // Blanqueo todo lo que le sigue
            _this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
            _this.dataProductos = [];
            _this.lotesTraza = [];
        };
        this.onChangeDeposito = function (depSelec) {
            _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productosReducidos)({
                tipo: 'reducida',
                idDeposito: depSelec.idDeposito
            })
                .take(1)
                .takeUntil(_this._destroyed$)
                .subscribe(function (prods) { return _this.productosReducidos.next(prods); });
        };
        this.onClickConfirmar = function () {
            _this.remitosInternosService.grabaRemitoInterno(_this.tipoOpSelect, _this.comprobante, _this.depositoDestinoSelect, _this.depositoOrigenSelect, _this.dataProductos, _this.lotesTraza).subscribe(function (resp) {
                if (resp) {
                    // Modal para imprimir
                    var compCreado_1 = new comprobanteEncabezado_1.ComprobanteEncabezado();
                    compCreado_1.idFactCab = resp.datos.idFactCab;
                    compCreado_1.numero = Number("" + _this.comprobante.numerador.ptoVenta.ptoVenta + _this.comprobante.numerador.ptoVenta.ptoVenta.toString().padStart(8, '0'));
                    _this.utilsService.showImprimirModal(resp.control.codigo)("" + resp.control.descripcion)(function () { return _this.recursoService.downloadComp(compCreado_1); })(compCreado_1);
                    _this.comprobante = new comprobante_1.Comprobante();
                    _this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
                    /** Seleccionados **/
                    _this.tipoOpSelect = null;
                    _this.depositoOrigenSelect = null;
                    _this.depositoDestinoSelect = null;
                    /** Tablas **/
                    _this.dataProductos = [];
                    /** Hago focus en Tipo Operacion (idTipoOp) **/
                    document.getElementById('idTipoOp') ?
                        document.getElementById('idTipoOp').focus() : null;
                }
            });
        };
        /**
         * Busca pendientes
         */
        this.onClickBuscarPendientes = function () {
            return _this.remitosInternosService.buscarPendientes(_this.comprobante, _this.comprobanteRelacionado)
                .subscribe(function (prodsPend) { return _this.dataProductos = prodsPend; });
        };
        /**
         * Actualiza trazables
         */
        this.onEmitActualizarTraza = function (p, isRemove) {
            if (isRemove === void 0) { isRemove = false; }
            // Agrego los lotes de los productos trazables a la grilla de trazabilidad lotes
            if (_this.dataProductos.length > 0) {
                _this.remitosInternosService
                    .buscaLotes(_this.dataProductos, _this.comprobante)
                    .subscribe(function (lotes) {
                    var nuevosLotes = lotes.filter(function (lotNew) { return !_this.lotesTraza.some(function (lotOld) { return lotOld.idLote === lotNew.idLote; }); });
                    _this.lotesTraza = _this.lotesTraza.concat(nuevosLotes);
                    // Si se borró algún producto, borro sus lotes correspondientes
                    if (isRemove) {
                        _this.lotesTraza = _this.lotesTraza.filter(function (lot) { return lot.idProducto === p.idProductos; });
                    }
                });
            }
            else {
                _this.lotesTraza = [];
            }
        };
        this.tiposOperaciones = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisTipoOperacion)({
            sisModulo: sisModulos_1.default.interno
        });
    }
    RemitosInternos.prototype.ngOnDestroy = function () {
        this._destroyed$.next();
        this._destroyed$.complete();
    };
    /**
     * Evento que se dispara cuando se selecciona una fecha
     */
    RemitosInternos.prototype.onModelChangeFechaComp = function (e, d) {
        // Actualizo fecha (sobretodo si el formato es 'ddmm')
        this.comprobante.fechaComprobante = this.utilsService.stringToDateLikePicker(this.comprobante.fechaComprobante);
    };
    return RemitosInternos;
}());
RemitosInternos = __decorate([
    core_1.Component({
        selector: 'remitos-internos',
        styles: [__webpack_require__("./src/app/pages/main/stock/remitosInternos/remitosInternos.scss")],
        template: __webpack_require__("./src/app/pages/main/stock/remitosInternos/remitosInternos.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object, typeof (_d = typeof remitosInternosService_1.RemitosInternosService !== "undefined" && remitosInternosService_1.RemitosInternosService) === "function" && _d || Object])
], RemitosInternos);
exports.RemitosInternos = RemitosInternos;
var _a, _b, _c, _d;
//# sourceMappingURL=remitosInternos.component.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/remitosInternos.html":
/***/ (function(module, exports) {

module.exports = "<ba-card class=\"remitos-internos\" toggleBtn=\"true\" cardTitle=\"Remitos Internos\" headerMin=\"true\">\r\n    <form style=\"width: 100%;\" #remIntForm=\"ngForm\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group inline-group\">\r\n                    <label for=\"tipoOperacion\">Tipo Operacion</label>\r\n                    <select \r\n                        id=\"idTipoOp\"\r\n                        class=\"form-control\"\r\n                        required \r\n                        name=\"nameTipoOp\" \r\n                        [(ngModel)]=\"tipoOpSelect\"\r\n                        (ngModelChange)=\"onChangeTipoOperacion($event)\"\r\n                        >\r\n                        <option *ngFor=\"let tipoOp of tiposOperaciones | async\" [ngValue]=\"tipoOp\">\r\n                            {{ tipoOp.descripcion }}\r\n                        </option>\r\n                    </select>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group inline-group\">\r\n                    <label for=\"idDepoOr\">Deposito Origen</label>\r\n                    <select \r\n                        id=\"idDepoOr\"\r\n                        class=\"form-control\"\r\n                        required \r\n                        name=\"nameDepoOr\" \r\n                        [(ngModel)]=\"depositoOrigenSelect\"\r\n                        (ngModelChange)=\"onChangeDeposito($event)\"\r\n                        >\r\n                        <option *ngFor=\"let depO of depositosOrigen | async\" [ngValue]=\"depO\">\r\n                            {{ depO.descripcion }}\r\n                        </option>\r\n                    </select>\r\n\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group inline-group\">\r\n                    <label for=\"idDepoDes\">Deposito Destino</label>\r\n                    <select \r\n                        id=\"idDepoDes\"\r\n                        class=\"form-control\"\r\n                        required \r\n                        name=\"nameDepoDes\" \r\n                        [(ngModel)]=\"depositoDestinoSelect\"\r\n                        >\r\n                        <option *ngFor=\"let depD of depositosDestino | async\" [ngValue]=\"depD\">\r\n                            {{ depD.descripcion }}\r\n                        </option>\r\n                    </select>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n            <custom-card class=\"col-sm-6\" title=\"Comprobante\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group inline-group\">\r\n                            <label for=\"cteTipo\">Cte:</label>\r\n                            <select \r\n                                required \r\n                                name=\"clCompTip\" \r\n                                [(ngModel)]=\"comprobante.tipo\" \r\n                                class=\"form-control without-padding\" \r\n                                [ngStyle]=\"{padding: '1px 8px 0px 8px'}\" \r\n                                id=\"cteTipo\"\r\n                                (ngModelChange)=\"onChangeTipoComprobante($event)\">\r\n                                <option *ngFor=\"let tipoComp of tiposComprobantes | async\" [ngValue]=\"tipoComp\">\r\n                                    {{ tipoComp.descCorta }} {{ tipoComp.comprobante.referencia }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"comprobante && comprobante.tipo && comprobante.tipo.letrasCodigos\" class=\"col-sm-1\" style=\"padding: 0;\">\r\n                        <div class=\"form-group inline-group\">\r\n                            <select \r\n                                required \r\n                                name=\"letraSelct\" \r\n                                [(ngModel)]=\"comprobante.letraCodigo\"\r\n                                class=\"form-control without-padding\" \r\n                                id=\"letraCodId\"\r\n                                >\r\n                                <option *ngFor=\"let lc of comprobante.tipo.letrasCodigos\" [ngValue]=\"lc\">\r\n                                    {{ lc.letra.letra }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-7\">\r\n                        <div [ngStyle]=\"{'justify-content': 'center'}\" class=\"form-group inline-group\">\r\n                            <label for=\"cteNro\">Nro:</label>\r\n                            <div *ngIf=\"\r\n                                comprobante && \r\n                                comprobante.letraCodigo && \r\n                                comprobante.letraCodigo.numeradores && \r\n                                comprobante.letraCodigo.numeradores.length > 0\r\n                                \">\r\n                                <select     required\r\n                                            id=\"selectPtoVentaNum\" \r\n                                            class=\"form-control\" \r\n                                            [ngStyle]=\"{padding: '1px 8px 0px 8px'}\"\r\n                                            name=\"compNumerador\"\r\n                                            [(ngModel)]=\"comprobante.numerador\"\r\n                                            >\r\n                                    <option *ngFor=\"let upNum of comprobante.letraCodigo.numeradores\" [ngValue]=\"upNum\">\r\n                                        {{ \r\n                                            upNum.ptoVenta.ptoVenta.toString().padStart(4, '0')\r\n                                        }} - {{ \r\n                                            upNum.numerador.toString().padStart(8, '0')\r\n                                        }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                            <div \r\n                                *ngIf=\"comprobanteService.comprobanteContainNumerador(comprobante)\"\r\n                                [ngStyle]=\"{display: 'flex'}\" \r\n                                >\r\n                                <input autocomplete=\"off\"   required\r\n                                        maxlength=\"4\" \r\n                                        (blur)=\"\r\n                                            onBlurPtoVenta($event)\r\n                                        \" \r\n                                        name=\"compPtoVenta\"\r\n                                        [(ngModel)]=\"comprobante.numerador.ptoVenta.ptoVenta\" \r\n                                        type=\"text\" class=\"form-control pre-numero-input text-right\" id=\"puntoVenta\" placeholder=\"\">\r\n                                        \r\n                                <input autocomplete=\"off\"   required\r\n                                        maxlength=\"8\" \r\n                                        (blur)=\"\r\n                                            onBlurNumerador($event)\r\n                                        \" \r\n                                        name=\"compNumero\"\r\n                                        [(ngModel)]=\"comprobante.numerador.numerador\" \r\n                                        type=\"text\" class=\"form-control text-right\" id=\"numero\" placeholder=\"\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-7\">\r\n                        <div class=\"form-group inline-group last-child-custom-card\">\r\n                            <label for=\"fechaComprobante\">Fecha: </label>\r\n                            <div class=\"input-group\">\r\n                                \r\n                                <input \r\n                                    autocomplete=\"off\" \r\n                                    required \r\n                                    (blur)=\"onBlurFechaComprobante($event)\" \r\n                                    (keyup.enter)=\"onBlurFechaComprobante($event)\"\r\n                                    class=\"form-control\" \r\n                                    placeholder=\"dd/mm/aaaa\" \r\n                                    name=\"dp1\" \r\n                                    [(ngModel)]=\"comprobante.fechaComprobante\"\r\n                                    ngbDatepicker \r\n                                    (ngModelChange)=\"onModelChangeFechaComp($event, dComp)\" \r\n                                    #dComp=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"dComp.toggle()\" type=\"button\"\r\n                                        style=\"height: 100%;\">\r\n                                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>   \r\n            </custom-card>\r\n\r\n            <custom-card class=\"col-sm-6\" title=\"Comprobante Relacionado\">\r\n\r\n                <div class=\"cte-rel-container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group inline-group\">\r\n                                <label for=\"cteRelTipo\">Cte:</label>\r\n\r\n                                <select \r\n                                    name=\"clCompRelTi\" \r\n                                    [(ngModel)]=\"comprobanteRelacionado.tipo\" \r\n                                    class=\"form-control without-padding\"\r\n                                    [ngStyle]=\"{padding: '2px 8px 0px 8px'}\" \r\n                                    id=\"cteRelTipo\">\r\n                                    <option *ngFor=\"let tipoComp of tiposComprobantesRel | async\" [ngValue]=\"tipoComp\">\r\n                                        {{tipoComp.descCorta}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group inline-group\">\r\n                                <label for=\"cteNro\">Nro:</label>\r\n                                <input autocomplete=\"off\" [attr.disabled]=\"comprobanteRelacionado.todosLosPendientes ? '' : null\"\r\n                                    (blur)=\"onBlurPtoVentaCteRel($event)\"\r\n                                    maxlength=\"4\" \r\n                                    [(ngModel)]=\"comprobanteRelacionado.puntoVenta\" \r\n                                    type=\"text\" class=\"form-control pre-numero-input\"\r\n                                    name=\"clPtoVentRel\"\r\n                                    id=\"puntoVenta\" placeholder=\"\">\r\n                                <input autocomplete=\"off\" [attr.disabled]=\"comprobanteRelacionado.todosLosPendientes ? '' : null\"\r\n                                    (blur)=\"onBlurNumeradorCteRel($event)\"\r\n                                    maxlength=\"8\" \r\n                                    name=\"clNroRel\"\r\n                                    [(ngModel)]=\"comprobanteRelacionado.numero\" type=\"text\" class=\"form-control\"\r\n                                    id=\"numero\" placeholder=\"\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-7\">\r\n                            <div class=\"checkbox-todoPendiente\">\r\n                                <ba-checkbox \r\n                                    name=\"clTodsPends\" \r\n                                    [(ngModel)]=\"comprobanteRelacionado.todosLosPendientes\" \r\n                                    [label]=\"'Todos los pendientes'\"\r\n                                    [ngModelOptions]=\"{standalone: true}\"\r\n                                    [disabled]=\"\r\n                                        comprobante && comprobante.tipo && \r\n                                        comprobante.tipo.comprobante && !comprobante.tipo.comprobante.relacionadosMultiples\r\n                                    \"\r\n                                    >\r\n                                </ba-checkbox>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-5 btn-container\">\r\n                            <button \r\n                                [disabled]=\"\r\n                                    !comprobanteRelacionado.todosLosPendientes &&\r\n                                    !(\r\n                                        comprobanteRelacionado.puntoVenta &&\r\n                                        comprobanteRelacionado.numero\r\n                                    )\r\n                                \"\r\n                                (click)=\"onClickBuscarPendientes()\" \r\n                                type=\"submit\" class=\"btn btn-primary\">\r\n                                Buscar\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </custom-card>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin-top: 16px;\">\r\n\r\n            <ngb-tabset [destroyOnHide]=false class=\"col-sm-12\">\r\n                <ngb-tab title=\"Articulos\">\r\n                    <ng-template ngbTabContent>\r\n                        \r\n                        <tabla-remitos-internos \r\n                            [dataTable]=\"dataProductos\"\r\n                            [productosReducidos]=\"productosReducidos\"\r\n                            [comprobante]=\"comprobante\"\r\n                            (emitActualizarTraza)=\"onEmitActualizarTraza($event)\">\r\n\r\n                        </tabla-remitos-internos>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n\r\n                <ngb-tab title=\"Trazable Lotes\">\r\n                    <ng-template ngbTabContent>\r\n                    \r\n\r\n                        <tabla-remitos-internos-traza \r\n                            [dataTable]=\"lotesTraza\"\r\n                            [comprobante]=\"comprobante\"\r\n                            >\r\n\r\n                        </tabla-remitos-internos-traza>\r\n\r\n                        <!-- <tabla-emision-rem  \r\n                            [data]=\"tablas.datos.lotesTraza\" \r\n                            [columns]=\"tablas.columnas.columnasTrazabilidad\"\r\n                            [edit]=\"onClickEdit('columnasTrazabilidad')\" \r\n                            [confirmEdit]=\"onClickConfirmEdit('columnasTrazabilidad')\"\r\n                            >\r\n                        </tabla-emision-rem> -->\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n            </ngb-tabset>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin-top: 16px;\">\r\n            <custom-card class=\"col-sm-5 card-observaciones card-flex-column-reverse\" title=\"Observaciones\">\r\n                <textarea \r\n                    class=\"form-control\"\r\n                    name=\"clObser\" \r\n                    lass=\"form-control text-area-observaciones\" \r\n                    id=\"observaciones\"></textarea>\r\n            </custom-card>\r\n\r\n            <div class=\"col-sm-5 card-total card-flex-column-reverse\">\r\n            </div>\r\n\r\n            <custom-card class=\"col-sm-2 card-flex-column-reverse\" title=\"\">\r\n                <div class=\"col-sm-12 btn-container\">\r\n                    <button (click)=\"onClickConfirmar()\" class=\"btn btn-primary btn-ingreso-from\">\r\n                        Confirmar\r\n                    </button>\r\n                    <button class=\"btn btn-primary btn-ingreso-from\">\r\n                        Cancelar\r\n                    </button>\r\n                </div>\r\n            </custom-card>\r\n        </div>\r\n\r\n    </form>\r\n\r\n</ba-card>"

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/remitosInternos.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .remitos-internos > .card {\n  margin-bottom: 2px; }\n\n:host /deep/ .remitos-internos > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ .remitos-internos > .card > .card-body .flex-end-with-padding {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 1%; }\n\n:host /deep/ .remitos-internos > .card > .card-body .filtros-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n:host /deep/ .remitos-internos > .card > .card-body .filtros-container .btn-container {\n      margin-left: 19px;\n      margin-top: 15px; }\n\n:host /deep/ .remitos-internos .inline-group select {\n  height: 21px !important;\n  padding-top: 3px !important;\n  padding-bottom: 2px !important; }\n\n:host /deep/ .remitos-internos .card-flex-column-reverse {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse; }\n\n:host /deep/ .remitos-internos .btn-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host /deep/ .remitos-internos .btn-container .btn-ingreso-from {\n    float: none;\n    margin: 7% 0; }\n\n:host /deep/ .remitos-internos .pre-numero-input {\n  width: 30%;\n  margin-right: 3px; }\n"

/***/ }),

/***/ "./src/app/pages/main/stock/remitosInternos/remitosInternosService.ts":
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
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var localStorageService_1 = __webpack_require__("./src/app/services/localStorageService.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var productoPendiente_1 = __webpack_require__("./src/app/models/productoPendiente.ts");
var sisModulos_1 = __webpack_require__("./src/constantes/sisModulos.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var lote_1 = __webpack_require__("./src/app/models/lote.ts");
var RemitosInternosService = (function () {
    function RemitosInternosService(authService, localStorageService, utilsService) {
        var _this = this;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.utilsService = utilsService;
        /**
         * Busca un producto
         */
        this.buscarProducto = function (idProducto) {
            /*busca por stock*/
            var idMonedaPeso = 1;
            return _this.authService.getBuscarProducto(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token)(idProducto)()(idMonedaPeso)()()()()()()
                .map(function (respProdEnc) { return respProdEnc && respProdEnc.arraydatos && respProdEnc.arraydatos.length > 0 ?
                new productoPendiente_1.ProductoPendiente(respProdEnc.arraydatos[0]) : null; })
                .toPromise();
            // busca pro producto  
            /**
            * Retorna todos los productos de la empresa actual
            */
        };
        this.grabaRemitoInterno = function (tipoOperacion, comprobante, depositoDestino, depositoOrigen, productosPend, lotesTraza) {
            return _this.authService.grabaRemitoInterno(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token, tipoOperacion, comprobante, depositoDestino, depositoOrigen, productosPend, lotesTraza)
                .map(function (resp) {
                return resp && resp['_body'] ?
                    (typeof resp['_body'] === 'object') ?
                        resp['_body'] : JSON.parse(resp['_body']) :
                    null;
            })
                .catch(function (err, caught) {
                // debugger;
                _this.utilsService.showErrorWithBody(err);
                return rxjs_1.Observable.of(null);
            });
        };
        this.buscarPendientes = function (comprobante, comprobanteRel) {
            return _this.authService.getProductosPendientes(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token)(null)(comprobanteRel)(comprobante)(null)(null)(sisModulos_1.default.interno)()()()()
                .catch(function (err) {
                _this.utilsService.showErrorWithBody(err);
                return rxjs_1.Observable.of({
                    arraydatos: []
                });
            })
                .map(function (respuesta) { return respuesta.arraydatos.map(function (prodPend) { return new productoPendiente_1.ProductoPendiente(prodPend); }); });
        };
        this.buscaLotes = function (productos, comprobante) {
            return _this.authService.getBuscaLotes(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token)(productos)(comprobante).map(function (resp) { return resp.arraydatos.map(function (lote) { return new lote_1.Lote(lote); }); });
        };
    }
    return RemitosInternosService;
}());
RemitosInternosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authService_1.AuthService !== "undefined" && authService_1.AuthService) === "function" && _a || Object, typeof (_b = typeof localStorageService_1.LocalStorageService !== "undefined" && localStorageService_1.LocalStorageService) === "function" && _b || Object, typeof (_c = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _c || Object])
], RemitosInternosService);
exports.RemitosInternosService = RemitosInternosService;
var _a, _b, _c;
//# sourceMappingURL=remitosInternosService.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/stock.module.ts":
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
var stock_routing_1 = __webpack_require__("./src/app/pages/main/stock/stock.routing.ts");
var _1 = __webpack_require__("./src/app/pages/main/stock/index.ts");
var SharedModule_1 = __webpack_require__("./src/app/pages/main/SharedModule.ts");
var productos_1 = __webpack_require__("./src/app/pages/main/stock/productos/index.ts");
var nuevoProducto_1 = __webpack_require__("./src/app/pages/main/stock/productos/components/nuevoProducto/index.ts");
var editarProducto_1 = __webpack_require__("./src/app/pages/main/stock/productos/components/editarProducto/index.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var tablaProductos_1 = __webpack_require__("./src/app/pages/main/stock/productos/components/tablaProductos/index.ts");
var consultaPorProducto_1 = __webpack_require__("./src/app/pages/main/stock/consultaPorProducto/index.ts");
var consultaPorProductoService_1 = __webpack_require__("./src/app/pages/main/stock/consultaPorProducto/consultaPorProductoService.ts");
var consultaGeneralService_1 = __webpack_require__("./src/app/pages/main/stock/consultaGeneral/consultaGeneralService.ts");
var consultaGeneral_1 = __webpack_require__("./src/app/pages/main/stock/consultaGeneral/index.ts");
var PendingChangesGuard_1 = __webpack_require__("./src/app/guards/PendingChangesGuard.ts");
var remitosInternos_1 = __webpack_require__("./src/app/pages/main/stock/remitosInternos/index.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var tablaRemitosInternos_1 = __webpack_require__("./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternos/index.ts");
var remitosInternosService_1 = __webpack_require__("./src/app/pages/main/stock/remitosInternos/remitosInternosService.ts");
var tablaRemitosInternosTraza_1 = __webpack_require__("./src/app/pages/main/stock/remitosInternos/components/tablaRemitosInternosTraza/index.ts");
var posicionStockGral_1 = __webpack_require__("./src/app/pages/main/stock/posicionStockGral/index.ts");
var posicionStock_1 = __webpack_require__("./src/app/pages/main/stock/posicionStock/index.ts");
var pasajesLogs_1 = __webpack_require__("./src/app/pages/main/stock/pasajesLogs/index.ts");
var StockModule = (function () {
    function StockModule() {
    }
    return StockModule;
}());
StockModule = __decorate([
    core_1.NgModule({
        imports: [
            stock_routing_1.routing,
            SharedModule_1.SharedModule,
            ng_bootstrap_1.NgbTabsetModule
        ],
        declarations: [
            _1.Stock,
            productos_1.Productos,
            nuevoProducto_1.NuevoProducto,
            editarProducto_1.EditarProducto,
            tablaProductos_1.TablaProductos,
            consultaPorProducto_1.ConsultaPorProducto,
            consultaGeneral_1.ConsultaGeneral,
            remitosInternos_1.RemitosInternos,
            pasajesLogs_1.PasajesLogs,
            tablaRemitosInternos_1.TablaRemitosInternos,
            tablaRemitosInternosTraza_1.TablaRemitosInternosTraza,
            posicionStockGral_1.PosicionStockGral,
            posicionStock_1.PosicionStock
        ],
        providers: [
            recursoService_1.RecursoService,
            authService_1.AuthService,
            utilsService_1.UtilsService,
            consultaPorProductoService_1.ConsultaPorProductoService,
            consultaGeneralService_1.ConsultaGeneralService,
            PendingChangesGuard_1.PendingChangesGuard,
            comprobanteService_1.ComprobanteService,
            tablaRemitosInternos_1.TablaRemitosInternos,
            remitosInternosService_1.RemitosInternosService,
            tablaRemitosInternosTraza_1.TablaRemitosInternosTraza
        ],
        exports: [
            tablaProductos_1.TablaProductos
        ]
    })
], StockModule);
exports.StockModule = StockModule;
//# sourceMappingURL=stock.module.js.map

/***/ }),

/***/ "./src/app/pages/main/stock/stock.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var _1 = __webpack_require__("./src/app/pages/main/stock/index.ts");
var productos_1 = __webpack_require__("./src/app/pages/main/stock/productos/index.ts");
var nuevoProducto_1 = __webpack_require__("./src/app/pages/main/stock/productos/components/nuevoProducto/index.ts");
var editarProducto_1 = __webpack_require__("./src/app/pages/main/stock/productos/components/editarProducto/index.ts");
var consultaPorProducto_1 = __webpack_require__("./src/app/pages/main/stock/consultaPorProducto/index.ts");
var consultaGeneral_1 = __webpack_require__("./src/app/pages/main/stock/consultaGeneral/index.ts");
var PendingChangesGuard_1 = __webpack_require__("./src/app/guards/PendingChangesGuard.ts");
var remitosInternos_1 = __webpack_require__("./src/app/pages/main/stock/remitosInternos/index.ts");
var posicionStockGral_1 = __webpack_require__("./src/app/pages/main/stock/posicionStockGral/index.ts");
var posicionStock_1 = __webpack_require__("./src/app/pages/main/stock/posicionStock/index.ts");
var pasajesLogs_component_1 = __webpack_require__("./src/app/pages/main/stock/pasajesLogs/pasajesLogs.component.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _1.Stock,
        children: [
            { path: 'productos', component: productos_1.Productos },
            { path: 'productos/nuevo', component: nuevoProducto_1.NuevoProducto },
            { path: 'productos/editar/:idProductos', component: editarProducto_1.EditarProducto, canDeactivate: [PendingChangesGuard_1.PendingChangesGuard] },
            { path: 'consulta-producto', component: consultaPorProducto_1.ConsultaPorProducto },
            { path: 'consulta-general', component: consultaGeneral_1.ConsultaGeneral },
            { path: 'remitos-internos', component: remitosInternos_1.RemitosInternos },
            { path: 'posicion-stock-gral', component: posicionStockGral_1.PosicionStockGral },
            { path: 'posicion-stock', component: posicionStock_1.PosicionStock },
            { path: 'pasajes-logs', component: pasajesLogs_component_1.PasajesLogs }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=stock.routing.js.map

/***/ })

});
//# sourceMappingURL=stock.module.chunk.js.map