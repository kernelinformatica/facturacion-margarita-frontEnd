webpackJsonp(["lotes.module"],{

/***/ "./src/app/pages/main/lotes/consultaLotes/consultaLotes.component.ts":
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
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var consultaLotesService_1 = __webpack_require__("./src/app/pages/main/lotes/consultaLotes/consultaLotesService.ts");
var gruposParametros_1 = __webpack_require__("./src/constantes/gruposParametros.ts");
var ConsultaLotes = (function () {
    function ConsultaLotes(utilsService, popupListaService, recursoService, consultaLotesService) {
        var _this = this;
        this.utilsService = utilsService;
        this.popupListaService = popupListaService;
        this.recursoService = recursoService;
        this.consultaLotesService = consultaLotesService;
        this.resourcesREST = resoursesREST_1.resourcesREST;
        // Data de la tabla
        this.lotes = new rxjs_1.BehaviorSubject([]);
        // Busquedas
        this.proveedores = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.productos = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        // Filtros
        this.filtros = {
            idPadron: null,
            nroLote: null,
            codProducto: null,
            fechaVtoHasta: null
        };
        // Info seleccionados
        this.info = {
            nombreProv: null,
            nombreProd: null
        };
        // Indices
        this.proveedorEnfocadoIndex = -1;
        this.productoEnfocadoIndex = -1;
        this.isLoading = false;
        this.blurFechaVencHasta = function (e) { return (!_this.filtros.fechaVtoHasta || typeof _this.filtros.fechaVtoHasta !== 'string') ?
            null : _this.filtros.fechaVtoHasta = _this.utilsService.stringToDateLikePicker(_this.filtros.fechaVtoHasta); };
        this.onSelectProveedor = function (prov) {
            _this.filtros.idPadron = prov.padronCodigo.toString();
            _this.info.nombreProv = prov.padronApelli;
        };
        this.onSelectProducto = function (prod) {
            _this.filtros.codProducto = prod.codProducto.toString();
            _this.info.nombreProd = prod.descripcion;
        };
        ///// EVENTOS BUSQUEDA PROVEEDOR /////
        /**
         * Evento de cuando se apreta felcha arriba o feclah abajo en input de busca cliente
         */
        this.keyPressInputTextoProv = function (e) { return function (upOrDown) {
            e.preventDefault();
            // Hace todo el laburo de la lista popup y retorna el nuevo indice seleccionado
            _this.proveedorEnfocadoIndex =
                _this.popupListaService.keyPressInputForPopup(upOrDown)(_this.proveedores.filtrados.value)(_this.proveedorEnfocadoIndex);
        }; };
        /**
         * Evento on enter en el input de buscar cliente
         */
        this.onEnterInputProv = function (e) {
            e.preventDefault();
            _this.proveedores.filtrados.subscribe(function (provsLista) {
                // Busco el producto
                var provSelect = provsLista && provsLista.length ? provsLista[_this.proveedorEnfocadoIndex] : null;
                // Lo selecciono
                provSelect ? _this.onSelectProveedor(provSelect) : null;
                // Reseteo el index
                _this.proveedorEnfocadoIndex = -1;
                // Vacio filtrados y focus produc
                _this.proveedores.filtrados.next([]);
                document.getElementById('inputProducto') ? document.getElementById('inputProducto').focus() : null;
            });
        };
        /**
         * Evento change del input del proovedor
         */
        this.onChangeInputProv = function (codigo) {
            _this.proveedores.filtrados.next(_this.consultaLotesService.filtrarProveedores(_this.proveedores.todos, codigo));
            // Reseteo el indice
            _this.proveedorEnfocadoIndex = -1;
        };
        this.onBlurInputProv = function (evento) {
            if (!evento.target.value || evento.target.value.toString().length <= 0)
                return;
            // Busco si existe
            var provExist = _this.proveedores.todos.find(function (p) { return p.padronCodigo.toString() === evento.target.value.toString(); });
            // Si existe actualizo el existente
            if (provExist && provExist.padronCodigo) {
                _this.onSelectProveedor(provExist);
            }
            else {
                // Si no existe, borro el existente
                _this.filtros.idPadron = null;
                _this.info.nombreProv = null;
            }
            // Vacio filtrados
            _this.proveedores.filtrados.next([]);
            // Hago focus en input producto
            // document.getElementById('inputProducto') ? document.getElementById('inputProducto').focus() : null
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
            _this.productos.filtrados.subscribe(function (prodsLista) {
                // Busco el producto
                var prodSelect = prodsLista && prodsLista.length ? prodsLista[_this.productoEnfocadoIndex] : null;
                // Lo selecciono
                prodSelect ? _this.onSelectProducto(prodSelect) : null;
                // Reseteo el index
                _this.productoEnfocadoIndex = -1;
                // Vacio filtrados y focus lote input
                _this.productos.filtrados.next([]);
                document.getElementById('inputLoteNro') ? document.getElementById('inputLoteNro').focus() : null;
            });
        };
        /**
         * Evento change del input del proovedor
         */
        this.onChangeInputProd = function (valor) {
            _this.productos.filtrados.next(_this.consultaLotesService.filtrarProductos(_this.productos.todos, valor));
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
                _this.info.nombreProd = null;
            }
            // Vacio filtrados
            _this.productos.filtrados.next([]);
            // Hago focus en input producto
            // document.getElementById('inputLoteNro') ? document.getElementById('inputLoteNro').focus() : null
        };
        /**
         * Evento click consultar
         */
        this.onClickConsultar = function () {
            _this.isLoading = true;
            // Si hay error, entonces mando un array vacio para que actualice la grilla
            _this.consultaLotesService.consultarLotes(_this.filtros)
                .catch(function (err, caught) {
                _this.utilsService.showErrorWithBody(err, true);
                return rxjs_1.Observable.of([]);
            })
                .subscribe(function (lotes) {
                _this.lotes.next(lotes);
                _this.isLoading = false;
            });
        };
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.padron)({
            grupo: gruposParametros_1.default.cliente
        }).subscribe(function (proveedores) {
            _this.proveedores.todos = proveedores;
            _this.proveedores.filtrados.next(proveedores);
        });
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)().subscribe(function (productos) {
            _this.productos.todos = productos;
            _this.productos.filtrados.next(productos);
        });
    }
    return ConsultaLotes;
}());
ConsultaLotes = __decorate([
    core_1.Component({
        selector: 'consulta-lotes',
        styles: [__webpack_require__("./src/app/pages/main/lotes/consultaLotes/consultaLotes.scss")],
        template: __webpack_require__("./src/app/pages/main/lotes/consultaLotes/consultaLotes.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _a || Object, typeof (_b = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _b || Object, typeof (_c = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _c || Object, typeof (_d = typeof consultaLotesService_1.ConsultaLotesService !== "undefined" && consultaLotesService_1.ConsultaLotesService) === "function" && _d || Object])
], ConsultaLotes);
exports.ConsultaLotes = ConsultaLotes;
var _a, _b, _c, _d;
//# sourceMappingURL=consultaLotes.component.js.map

/***/ }),

/***/ "./src/app/pages/main/lotes/consultaLotes/consultaLotes.html":
/***/ (function(module, exports) {

module.exports = "<ba-card cardTitle=\"Filtros\" class=\"consulta-lotes criterio-busqueda\" toggleBtn=\"true\">\r\n\r\n    <div class=\"block-column\">\r\n        <div class=\"input-row\">\r\n            <div class=\"item-input nro-cte\">\r\n                <label  for=\"desde\">\r\n                    Proveedor\r\n                </label>\r\n                <input  [(ngModel)]=\"filtros.idPadron\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right minor-input\"\r\n                        id=\"inputProveedor\"\r\n                        placeholder=\"\"\r\n                        (keydown.arrowdown)=\"keyPressInputTextoProv($event)('down')\"\r\n                        (keydown.arrowup)=\"keyPressInputTextoProv($event)('up')\"\r\n                        (keyup.enter)=\"onEnterInputProv($event)\"\r\n                        (ngModelChange)=\"onChangeInputProv($event)\"\r\n                        (blur)=\"onBlurInputProv($event)\"\r\n                        >\r\n\r\n                <popup-lista    *ngIf=\"filtros.idPadron && filtros.idPadron.length > 0\"\r\n                                [items]=\"proveedores.filtrados.asObservable().distinctUntilChanged()\"\r\n                                [keysToShow]=\"['padronApelli', 'padronCodigo']\"\r\n                                [onClickItem]=\"onSelectProveedor\"\r\n                                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('inputProveedor')\">\r\n                </popup-lista>\r\n\r\n                <input  [disabled]=\"true\"\r\n                        [(ngModel)]=\"info.nombreProv\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right\"\r\n                        id=\"nroProv\"\r\n                        placeholder=\"\">\r\n            </div>\r\n\r\n            <div class=\"item-input nro-cte\">\r\n                <label  for=\"desde\" >\r\n                    Producto\r\n                </label>\r\n                <input  [(ngModel)]=\"filtros.codProducto\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right minor-input\"\r\n                        id=\"inputProducto\"\r\n                        placeholder=\"\"\r\n                        (keydown.arrowdown)=\"keyPressInputTextoProd($event)('down')\"\r\n                        (keydown.arrowup)=\"keyPressInputTextoProd($event)('up')\"\r\n                        (keyup.enter)=\"onEnterInputProd($event)\"\r\n                        (ngModelChange)=\"onChangeInputProd($event)\"\r\n                        (blur)=\"onBlurInputProd($event)\"\r\n                        >\r\n\r\n                <popup-lista    *ngIf=\"filtros.codProducto && filtros.codProducto.length > 0\"\r\n                                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                                [keysToShow]=\"['descripcion', 'codProducto']\"\r\n                                [onClickItem]=\"onSelectProducto\"\r\n                                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('inputProducto')\">\r\n                </popup-lista>\r\n\r\n                <input  [disabled]=\"true\"\r\n                        [(ngModel)]=\"info.nombreProd\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right\"\r\n                        id=\"nroProv\"\r\n                        placeholder=\"\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"input-row\">\r\n            <div class=\"item-input nro-cte\">\r\n                <label  for=\"desde\">\r\n                    Lote Nro\r\n                </label>\r\n                <input  [(ngModel)]=\"filtros.nroLote\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right minor-input\"\r\n                        id=\"inputLoteNro\"\r\n                        placeholder=\"\"\r\n                        >\r\n\r\n            </div>\r\n\r\n            <div class=\"item-input nro-cte\">\r\n                <label for=\"desde\" [ngStyle]=\"{'min-width': '117px', 'margin-top': '7px'}\">\r\n                    Vencimiento Hasta\r\n                </label>\r\n\r\n                <div class=\"input-group date-picker-venc-hasta\">\r\n                    <input id=\"idFechaVenc\" (blur)=\"blurFechaVencHasta($event)\" [(ngModel)]=\"filtros.fechaVtoHasta\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" ngbDatepicker #dDesd=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dDesd.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"block-column\">\r\n        <div class=\"input-row\">\r\n            <div class=\"item-input nro-cte\">\r\n                <label  for=\"desde\" [ngStyle]=\"{'min-width': '117px'}\">\r\n                    Producto\r\n                </label>\r\n                <input  [(ngModel)]=\"filtros.codProducto\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right minor-input\"\r\n                        id=\"inputProducto\"\r\n                        placeholder=\"\"\r\n                        (keydown.arrowdown)=\"keyPressInputTextoProd($event)('down')\"\r\n                        (keydown.arrowup)=\"keyPressInputTextoProd($event)('up')\"\r\n                        (keyup.enter)=\"onEnterInputProd($event)\"\r\n                        (ngModelChange)=\"onChangeInputProd($event)\"\r\n                        (blur)=\"onBlurInputProd($event)\"\r\n                        >\r\n\r\n                <popup-lista    *ngIf=\"filtros.codProducto && filtros.codProducto.length > 0\"\r\n                                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                                [keysToShow]=\"['descripcion', 'codProducto']\"\r\n                                [onClickItem]=\"onSelectProducto\"\r\n                                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('inputProducto')\">\r\n                </popup-lista>\r\n\r\n                <input  [disabled]=\"true\"\r\n                        [(ngModel)]=\"info.nombreProd\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right\"\r\n                        id=\"nroProv\"\r\n                        placeholder=\"\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"input-row\">\r\n            <div class=\"item-input nro-cte\">\r\n                <label  for=\"desde\" [ngStyle]=\"{'min-width': '117px', 'margin-top': '7px'}\">\r\n                    Vencimiento Hasta\r\n                </label>\r\n\r\n                <div class=\"input-group date-picker-venc-hasta\">\r\n                    <input id=\"idFechaVenc\" (blur)=\"blurFechaVencHasta($event)\" [(ngModel)]=\"filtros.fechaVtoHasta\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" ngbDatepicker #dDesd=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dDesd.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"block-column column-reverse\">\r\n        <div class=\"input-row\">\r\n            <div class=\"item-input nro-cte\">\r\n                <button id=\"btnConsultar\"\r\n                    [disabled]=\"!filtros.fechaVtoHasta\"\r\n                    (click)=\"onClickConsultar()\"\r\n                    class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                    Consultar\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ba-card>\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n</div>\r\n\r\n<ba-card *ngIf=\"!isLoading && (lotes | async)?.length > 0\">\r\n    <table class=\"table table-striped\" [mfData]=\"lotes | async\" #mf=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n        <thead>\r\n            <tr>\r\n                <th>Lote</th>\r\n                <th class=\"text-right\">Serie</th>\r\n                <th class=\"text-right\">Cod</th>\r\n                <th>Producto</th>\r\n                <th>Vto</th>\r\n                <th class=\"text-right\">Ingresos</th>\r\n                <th class=\"text-right\">Egresos</th>\r\n                <th class=\"text-right\">Stock</th>\r\n                <th>Tipo</th>\r\n                <th class=\"text-right\">Nro Comp</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let lote of mf.data\">\r\n                <td>{{ lote.nroLote }}</td>\r\n                <td class=\"text-right\">{{ lote.serie }}</td>\r\n                <td class=\"text-right\">{{ lote.codProducto }}</td>\r\n                <td class=\"td-nowrap\">{{ lote.descripcionProd }}</td>\r\n                <td>{{ utilsService.formatearFecha('DD/MM/YYYY')(lote.fechaVto) }}</td>\r\n                <td class=\"text-right\">{{ lote.ingresos }}</td>\r\n                <td class=\"text-right\">{{ lote.egresos }}</td>\r\n                <td class=\"text-right\">{{ lote.stock }}</td>\r\n                <td>{{ lote.comprobante }}</td>\r\n                <td class=\"text-right\">{{ lote.numero }}</td>\r\n            </tr>\r\n        </tbody>\r\n        <tfoot>\r\n            <tr>\r\n                <td colspan=\"12\">\r\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                </td>\r\n            </tr>\r\n        </tfoot>\r\n    </table>\r\n</ba-card>\r\n"

/***/ }),

/***/ "./src/app/pages/main/lotes/consultaLotes/consultaLotes.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-lotes > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host /deep/ .consulta-lotes > .card > .card-body .block-column {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 10px; }\n  :host /deep/ .consulta-lotes > .card > .card-body .column-reverse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  :host /deep/ .consulta-lotes > .card > .card-body .input-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 2px;\n    margin-bottom: 10px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  :host /deep/ .consulta-lotes > .card > .card-body .input-row > .item-input {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 5px; }\n  :host /deep/ .consulta-lotes > .card > .card-body .input-row > .item-input > input {\n        margin: 0 5px; }\n  :host /deep/ .consulta-lotes > .card > .card-body .input-row > .item-input > label {\n        margin-bottom: 5px;\n        margin-top: 3px;\n        white-space: nowrap;\n        padding-right: 5px;\n        min-width: 75px; }\n  :host /deep/ .consulta-lotes > .card > .card-body .input-row > .item-input .minor-input {\n        width: 70px; }\n  :host /deep/ .consulta-lotes > .card > .card-body .input-row > .item-input:last-child {\n      margin-left: 20px; }\n  :host /deep/ .consulta-lotes > .card > .card-body .input-row .date-picker-venc-hasta {\n      margin: 0 5px; }\n  .table-striped > tbody > tr > td {\n  border: none;\n  padding: 1px 12px; }\n  .table-striped > tbody > tr > .td-right {\n  text-align: right !important; }\n  .table-striped > tbody > tr > .td-nowrap {\n  white-space: nowrap; }\n  .table-consulta-comp thead tr th {\n  padding: 7px 10px; }\n  .table-consulta-comp thead td {\n  padding: 7px 5px; }\n  .table-consulta-comp .btn-print {\n  cursor: pointer; }\n  .spinner-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2rem;\n  margin: 14px 0;\n  background: #fafafa;\n  padding: 10px 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  color: #213742; }\n"

/***/ }),

/***/ "./src/app/pages/main/lotes/consultaLotes/consultaLotesService.ts":
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
var lote_1 = __webpack_require__("./src/app/models/lote.ts");
var ConsultaLotesService = (function () {
    function ConsultaLotesService(authService, localStorageService) {
        var _this = this;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.filtrarProveedores = function (lista, textoBuscado) {
            return lista.filter(function (prov) { return prov.padronCodigo.toString().includes(textoBuscado) ||
                prov.padronApelli.toString().toLowerCase().includes(textoBuscado); });
        };
        this.filtrarProductos = function (lista, textoBuscado) {
            return lista.filter(function (prov) { return prov.codProducto.toString().includes(textoBuscado) ||
                prov.descripcion.toString().toLowerCase().includes(textoBuscado); });
        };
        this.consultarLotes = function (filtros) {
            return _this.authService.getBuscaLote(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token)(filtros).map(function (resp) { return resp.arraydatos.map(function (lot) { return new lote_1.Lote(lot); }); });
        };
    }
    return ConsultaLotesService;
}());
ConsultaLotesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authService_1.AuthService !== "undefined" && authService_1.AuthService) === "function" && _a || Object, typeof (_b = typeof localStorageService_1.LocalStorageService !== "undefined" && localStorageService_1.LocalStorageService) === "function" && _b || Object])
], ConsultaLotesService);
exports.ConsultaLotesService = ConsultaLotesService;
var _a, _b;
//# sourceMappingURL=consultaLotesService.js.map

/***/ }),

/***/ "./src/app/pages/main/lotes/consultaLotes/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/lotes/consultaLotes/consultaLotes.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/lotes/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/lotes/lotes.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/lotes/lotes.component.ts":
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
var Lotes = (function () {
    function Lotes() {
    }
    return Lotes;
}());
Lotes = __decorate([
    core_1.Component({
        selector: 'lotes',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], Lotes);
exports.Lotes = Lotes;
//# sourceMappingURL=lotes.component.js.map

/***/ }),

/***/ "./src/app/pages/main/lotes/lotes.module.ts":
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
var lotes_routing_1 = __webpack_require__("./src/app/pages/main/lotes/lotes.routing.ts");
var _1 = __webpack_require__("./src/app/pages/main/lotes/index.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var SharedModule_1 = __webpack_require__("./src/app/pages/main/SharedModule.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var consultaLotes_1 = __webpack_require__("./src/app/pages/main/lotes/consultaLotes/index.ts");
var consultaLotesService_1 = __webpack_require__("./src/app/pages/main/lotes/consultaLotes/consultaLotesService.ts");
var LotesModule = (function () {
    function LotesModule() {
    }
    return LotesModule;
}());
LotesModule = __decorate([
    core_1.NgModule({
        imports: [
            lotes_routing_1.routing,
            SharedModule_1.SharedModule,
            ng_bootstrap_1.NgbTabsetModule
        ],
        declarations: [
            _1.Lotes,
            consultaLotes_1.ConsultaLotes
        ],
        providers: [
            recursoService_1.RecursoService,
            authService_1.AuthService,
            utilsService_1.UtilsService,
            consultaLotesService_1.ConsultaLotesService
        ],
        exports: []
    })
], LotesModule);
exports.LotesModule = LotesModule;
//# sourceMappingURL=lotes.module.js.map

/***/ }),

/***/ "./src/app/pages/main/lotes/lotes.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var _1 = __webpack_require__("./src/app/pages/main/lotes/index.ts");
var consultaLotes_1 = __webpack_require__("./src/app/pages/main/lotes/consultaLotes/index.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _1.Lotes,
        children: [
            { path: 'consulta', component: consultaLotes_1.ConsultaLotes },
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=lotes.routing.js.map

/***/ })

});
//# sourceMappingURL=lotes.module.chunk.js.map