webpackJsonp(["ventas.module"],{

/***/ "./src/app/pages/main/ventas/emisionRemitos/components/tablaEmisionRem/tablaEmisionRem.component.ts":
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
var productoReducido_1 = __webpack_require__("./src/app/models/productoReducido.ts");
var TablaEmisionRem = (function () {
    function TablaEmisionRem(utilsService, popupListaService) {
        var _this = this;
        this.utilsService = utilsService;
        this.popupListaService = popupListaService;
        this.showTooltip = false;
        this.sortBy = 'nombre';
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortOrder = "asc";
        // Fin datos de mierda
        // Reusabilidad tabla
        this.enableAddItem = false;
        this.claveAutorizacion = false;
        this.productosBusqueda = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.productoSeleccionado = new productoReducido_1.ProductoReducido();
        // Inhdice del producto enfocado del popup
        this.productoEnfocadoIndex = -1;
        this.tablaSubtotales = false;
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
        /**
         * Retorna el subtotal requerido
         */
        this.getSubtotal = function (item) { return function (key) {
            if (_this.subtotales && _this.subtotales.length > 0) {
                var subtotalBuscado = _this.subtotales
                    .find(function (st) { return st.idFactDetalle === item.idFactDetalle; });
                if (key === 'precioDesc') {
                    // debugger;
                    return subtotalBuscado && subtotalBuscado[key] ?
                        _this.utilsService.toThreeDecimals(subtotalBuscado[key]) : 0;
                }
                else {
                    return _this.utilsService.parseDecimal(subtotalBuscado && subtotalBuscado[key] ?
                        subtotalBuscado[key] : 0);
                }
            }
            else {
                return null;
            }
        }; };
        /**
         * Evento change del input de codProducto
         */
        this.onChangeInputItemAdd = function (textoBuscado) {
            _this.productosBusqueda.filtrados.next(_this.productosBusqueda.todos.filter(function (prodPend) { return prodPend.codProducto.toString().includes(textoBuscado) ||
                prodPend.descripcion.toString().toLowerCase().includes(textoBuscado); }));
        };
        /**
         * Busca el producto y limpia la lista
         */
        this.onBlurInputItemAdd = function (eventInput) {
            // Busco si ingresó un cód producto
            var codIngre = eventInput && eventInput.currentTarget ? eventInput.currentTarget.value : null;
            // Si lo ingresó, lo busco en la lista de filtrados
            if (codIngre) {
                // Busco el producto en la lista
                var prodBuscado = _this.productosBusqueda.filtrados.getValue().find(function (p) { return p.codProducto === codIngre; });
                // Si lo encontré, lo selecciono. Sinó, no.
                if (prodBuscado) {
                    _this.onClickProductoListaLocal(prodBuscado);
                }
                else {
                    _this.utilsService.showModal('Error')('No existe un artículo con ese código')()();
                }
            }
            setTimeout(function () { return _this.productosBusqueda.filtrados.next([]); }, 100);
            // También reseteo el indice de busqueda
            _this.productoEnfocadoIndex = -1;
        };
        this.leftProduct = function (event) { return event.target.value ? _this.utilsService.showModal("Error")("No existe un producto con ese codigo") : null; };
        this.tiraError = function () { return _this.utilsService.showModal("Error")("No existe un producto con ese codigo"); };
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
        this.onCalculateFechaPago = function (e) { return function (key) { return function (item) {
            if (!item[key] || typeof item[key] !== 'string')
                return;
            item[key] = _this.utilsService.stringToDateLikePicker(item[key]);
        }; }; };
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
        this.checkIfEnEdicion = function (col) { return function (item) {
            return col.enEdicion && col.enEdicion === item.idFactDetalle;
        }; };
        // Cheackea si esta en edicion
        this.checkIfEditOn = function (item) { return function (col) { return col.enEdicion && ((item && item.idFactDetalle && col.enEdicion === item.idFactDetalle) ||
            (item.nroLote && col.enEdicion === item.nroLote) ||
            (item.idFormaPagoDet && col.enEdicion === item.idFormaPagoDet) ||
            (item.cuentaContable && col.enEdicion === item.cuentaContable)); }; };
        /**
         * Retorna la clase del input que se va a poner en edicio y enfocar primero, cuando se apreta en editar
         */
        this.getClassInputEditable = function (item) { return function (col) {
            if (item) {
                // Agarro el id dependiendo el tipo de archivo. Como lo uso en lotes trazables y en detalles formas pagos y productos pendientes, solo me fijo esos dos
                var idItem = item.nroLote ? item.nroLote :
                    item.idFormaPagoDet ? item.idFormaPagoDet :
                        item.cuentaContable ? item.cuentaContable :
                            item && item.idFactDetalle ? item.idFactDetalle : '000';
                // 'form-control edit-input input-edit-' + item.producto.idProductos
                return "form-control edit-input" + (col.editarFocus ? " editar-focus-" + idItem : '');
            }
        }; };
        this.getPositionTooltip = function () {
            var fatherPosition = _this.getOffsetOfAddInput();
            return {
                top: (fatherPosition.top - 3) + 'px',
                left: (fatherPosition.left + 60) + 'px'
            };
        };
        /**
         * Retorna true si PUEDE agregar un producto.
         * Retorna false si NO PUEDE agregar un producto.
         */
        this.canAddProduct = function () {
            if (_this.comprobante && _this.comprobante.tipo && _this.comprobante.tipo.idCteTipo && _this.comprobante.tipo.idCteTipo == 77) {
                return _this.comprobante.fechaComprobante &&
                    _this.comprobante.fechaComprobante.year &&
                    _this.comprobante.moneda &&
                    _this.comprobante.moneda.idMoneda &&
                    _this.claveAutorizacion;
            }
            else {
                return _this.comprobante.fechaComprobante &&
                    _this.comprobante.fechaComprobante.year &&
                    _this.comprobante.moneda &&
                    _this.comprobante.moneda.idMoneda;
            }
        };
        this.checkIncluyeNetoAndIva = function (col) {
            var fafa = (col.key === 'subtotal' ||
                (col.key === 'importeTotal' &&
                    col.nombre === 'importe') ||
                col.key === 'subtotalIva') &&
                _this.comprobante.tipo &&
                _this.comprobante.tipo.comprobante &&
                ((!_this.tablaSubtotales &&
                    !_this.comprobante.tipo.comprobante.incluyeNeto) ||
                    (_this.tablaSubtotales &&
                        !_this.comprobante.tipo.comprobante.incluyeIva) || (col.key === 'subtotalIva' &&
                    !_this.comprobante.tipo.comprobante.incluyeIva));
            return fafa;
        };
        /**
         *
         */
        this.onBlurInput = function (e, col) { return col.decimal &&
            _this.utilsService.onBlurInputNumber(e); };
    }
    TablaEmisionRem.prototype.ngOnInit = function () {
        var _this = this;
        // Cargo todos los productos pendientes posibles
        if (this.productosObservable) {
            this.productosObservable.subscribe(function (prodsPendPosibles) {
                _this.productosBusqueda.todos = prodsPendPosibles;
                _this.productosBusqueda.filtrados.next(prodsPendPosibles);
            });
        }
        console.log(this.remove);
    };
    TablaEmisionRem.prototype.toInt = function (num) {
        return +num;
    };
    /**
     * Obtiene el style a partir de una columna
     * @param col
     */
    TablaEmisionRem.prototype.getStyleFromCol = function (col) {
        var styles = {
            'width': col.ancho,
            'border-top': 'none'
        };
        return styles;
    };
    /**
     * Este método checkea el tipo de dato de la key y la parsea de acuerdo a el. Por ejemplo, si es boolean retorna 'si' en 'true' y 'no' en 'false'
     * @param valueKey
     */
    TablaEmisionRem.prototype.parseKey = function (valueKey, key) {
        var tipoDato = typeof valueKey;
        if (tipoDato === 'boolean') {
            return valueKey ? 'Si' : 'No';
        }
        else if (tipoDato === 'object') {
            // Me fijo el nombre de la clase del objeto
            if (valueKey &&
                (valueKey.constructor.name === 'DateLikePicker' ||
                    valueKey.year && valueKey.month && valueKey.day)) {
                return "" + (valueKey.day < 10 ? '0' : '') + valueKey.day + "/" + (valueKey.month < 10 ? '0' : '') + valueKey.month + "/" + valueKey.year;
            }
        }
        ;
        // Si es numero, retorna la key nomas
        // return valueKey
        // return typeof valueKey === 'number' ?
        //     this.utilsService.parseDecimal(valueKey) : 
        //     valueKey
        return (key && key === 'precio' || typeof valueKey !== 'number') ?
            valueKey :
            this.utilsService.parseDecimal(valueKey);
    };
    // Checkea si pongo el 'tick' para finalizar la edicion.
    TablaEmisionRem.prototype.checkIfShowTick = function (item) {
        if (this.columns) {
            return this.columns.some(function (col) {
                return col.enEdicion && ((item && item.idFactDetalle && col.enEdicion === item.idFactDetalle) ||
                    (item.nroLote && col.enEdicion === item.nroLote) ||
                    (item.idFormaPagoDet && col.enEdicion === item.idFormaPagoDet) ||
                    (item.cuentaContable && col.enEdicion === item.cuentaContable));
            });
        }
        ;
    };
    return TablaEmisionRem;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "enableAddItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "columns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "edit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "remove", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "confirmEdit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "checkPrecio", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "claveAutorizacion", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TablaEmisionRem.prototype, "subtotales", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof rxjs_1.BehaviorSubject !== "undefined" && rxjs_1.BehaviorSubject) === "function" && _a || Object)
], TablaEmisionRem.prototype, "productosObservable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "onClickProductoLista", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "comprobante", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaEmisionRem.prototype, "tablaSubtotales", void 0);
TablaEmisionRem = __decorate([
    core_1.Component({
        selector: 'tabla-emision-rem',
        template: __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/components/tablaEmisionRem/tablaEmisionRem.html"),
        styles: [__webpack_require__("./src/app/pages/main/ventas/emisionRemitos/components/tablaEmisionRem/tablaEmisionRem.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _c || Object])
], TablaEmisionRem);
exports.TablaEmisionRem = TablaEmisionRem;
var _a, _b, _c;
//# sourceMappingURL=tablaEmisionRem.component.js.map

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/components/tablaEmisionRem/tablaEmisionRem.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"panel panel-default tabla-ingreso\">\r\n    <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n        <thead>\r\n            <tr>\r\n                <th *ngIf=\"edit || remove\" style=\"width: 10%; border-top: none;\"></th>\r\n                <!-- Recorro y muestro las columnas recibidas en el input -->\r\n                <th class=\"table-column\" *ngFor=\"let col of columns\" [ngStyle]=\"getStyleFromCol(col)\" [ngClass]=\"col.customClass ? col.customClass : 'text-align: left;'\">\r\n                    <mfDefaultSorter by=\"name\">{{col.nombre}}</mfDefaultSorter>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n\r\n        <tbody #tbodyref>\r\n            <tr *ngFor=\"let item of mf.data\">\r\n                <!-- BOTONES EDITAR Y BORRAR -->\r\n                <td *ngIf=\"edit || remove\" class=\"btn-container-td\">\r\n                    <div class=\"btn-container\">\r\n                        <div *ngIf=\"edit\" (click)=\"edit(item)\" class=\"btn-accion btn-editar\">\r\n                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                        <div *ngIf=\"remove\" (click)=\"remove(item)\" class=\"btn-accion btn-remover\">\r\n                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                        <div *ngIf=\"checkIfShowTick(item)\" (click)=\"confirmEdit(item)\" class=\"btn-accion btn-remover\">\r\n                            <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <!-- FIN BOTONES EDITAR Y BORRAR -->\r\n\r\n                <!-- ACA MUESTRA LA DATA -->\r\n                <td *ngFor=\"let col of columns\" [ngClass]=\"col.customClass ? col.customClass : 'text-align: left;'\">\r\n                    <div *ngIf=\"col.subkey\">\r\n                        <div *ngIf=\"!checkIfEditOn(item)(col)\">\r\n\r\n\r\n                            <div *ngIf=\"col.decimal\">\r\n                                {{utilsService.parseDecimal(!utilsService.checkIfJson(item[col.key][col.subkey]) ? item[col.key][col.subkey] : item[col.key][col.subkey].descripcion)}}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"!col.decimal\">\r\n                                    {{parseKey(\r\n                                        !utilsService.checkIfJson(item[col.key][col.subkey]) ? item[col.key][col.subkey] : item[col.key][col.subkey].descripcion\r\n                                        )}}\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"checkIfEditOn(item)(col)\">\r\n                            <input *ngIf=\"(col.nombre !== 'trazable' && col.key !== 'trazabilidad')\"\r\n\r\n                                    [(ngModel)]=\"item[col.key][col.subkey]\"\r\n                                    style=\"margin: 4px 6px;\"\r\n                                    type=\"text\"\r\n\r\n                                    [ngClass]=\"getClassInputEditable(item)(col)\"\r\n                                    id=\"inputSubKey\"\r\n                                    placeholder=\"\">\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div *ngIf=\"!col.subkey\">\r\n                        <div *ngIf=\"!checkIfEditOn(item)(col)\">\r\n                            <!-- Caso comun -->\r\n                            <div *ngIf=\"\r\n                                col.nombre !== 'imputacion' &&\r\n                                col.key !== 'subtotal' &&\r\n                                col.key !== 'subtotalIva' &&\r\n                                col.key !== 'precioDesc' &&\r\n                                col.key !== 'importeTotal' &&\r\n                                !col.decimal\" >\r\n                                {{parseKey(item[col.key])}}\r\n                            </div>\r\n\r\n                            <!-- CASOS PARTICULARES -->\r\n                            <div *ngIf=\"col.nombre === 'imputacion' && !col.decimal\">\r\n                                {{ item[col.key] && item[col.key].seleccionada ? item[col.key].seleccionada.descripcion : ''}}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"\r\n                                col.decimal && (col.key == 'recargo' || col.key == 'recargoTotal')\r\n                            \">\r\n                                {{ item[col.key] }}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"\r\n                                col.decimal && col.key == 'diferenciaPrecio'\r\n                            \">\r\n                                {{ utilsService.parseDecimalToThree(item[col.key]) }}\r\n                            </div>\r\n\r\n\r\n                            <div *ngIf=\"\r\n                                col.decimal && col.key !== 'precio'\r\n                            \">\r\n                                {{ utilsService.parseDecimal(item[col.key]) }}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"\r\n                                col.decimal && col.key === 'precio'\r\n                            \" [ngStyle]=\"{'color': (checkPrecio && item.cotaInferior && item.cotaSuperior && (item.cotaInferior > item.precio || item.precio > item.cotaSuperior)) ? '#ff0000' : '#000000'}\">\r\n                                {{\r\n                                    utilsService.toThreeDecimals(item[col.key])\r\n                                }}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"\r\n                                    !col.decimal &&\r\n                                    col.key !== 'imputacion' &&\r\n                                    col.key !== 'tipoDescuento' &&\r\n                                    col.key !== 'numero' &&\r\n                                    col.key !== 'codigoListaPrecio' &&\r\n                                    !checkIncluyeNetoAndIva(col)\r\n\r\n                                \">\r\n                                {{\r\n                                    col.key == 'importeTotal'\r\n                                    ?\r\n                                    parseKey(item[col.key]) :\r\n                                    getSubtotal(item)(col.key)\r\n                                }}\r\n                            </div>\r\n\r\n                            <!-- <div    style=\"background: #ff000061 !important;\" -->\r\n                            <div    style=\"color: #c10000 !important;\"\r\n                                    *ngIf=\"\r\n                                        checkIncluyeNetoAndIva(col)\r\n                                    \">\r\n                                {{\r\n                                    col.key == 'importeTotal'\r\n                                    ?\r\n                                    parseKey(item[col.key]) :\r\n                                    getSubtotal(item)(col.key)\r\n                                }}\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                        <div *ngIf=\"checkIfEditOn(item)(col)\">\r\n\r\n                            <input  *ngIf=\"(\r\n                                        col.nombre !== 'imputacion' &&\r\n                                        col.key !== 'trazabilidad' &&\r\n                                        !col.elementoFinalBlur &&\r\n                                        (col.key !== 'fechaPago')\r\n                                    )\r\n                                    \"\r\n                                    [(ngModel)]=\"item[col.key]\"\r\n                                    style=\"margin: 4px 6px; text-align: end;\"\r\n                                    type=\"text\"\r\n                                    [ngClass]=\"getClassInputEditable(item)(col)\"\r\n                                    id=\"inputSubKey\"\r\n                                    placeholder=\"\"\r\n                                    (blur)=\"onBlurInput($event, col)\"\r\n                                    >\r\n\r\n                                <!-- Datepicker para fechaPago -->\r\n                            <div *ngIf=\"col.key === 'fechaPago'\" class=\"datepicker-datelikepicker\">\r\n                                <input  [attr.id]=\"'fecha-pago'\" (blur)=\"onCalculateFechaPago($event)(col.key)(item)\"\r\n                                        (keyup.enter)=\"onCalculateFechaPago($event)(col.key)(item)\"\r\n                                        class=\"form-control\"\r\n                                        placeholder=\"dd-mm-yyyy\"\r\n                                        name=\"dp\"\r\n                                        [(ngModel)]=\"item[col.key]\"\r\n                                        ngbDatepicker #dComp2=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"dComp2.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- ULTIMO INPUT EDITABLE. CAPTURO EL BLUR -->\r\n                            <input  *ngIf=\"col.elementoFinalBlur && col.key !== 'tipoDescuento'\"\r\n                                [(ngModel)]=\"item[col.key]\"  style=\"margin: 4px 6px; text-align: end;\" type=\"text\"\r\n                                class=\"form-control edit-input\" id=\"inputSubKey\" placeholder=\"\"\r\n                                (blur)=\"confirmEdit(item)\">\r\n\r\n                                <!-- CASO ESPECIAL EN ULTIMO IPUT EDITABLE -->\r\n                                <select *ngIf=\"col.elementoFinalBlur && col.key === 'tipoDescuento'\"\r\n                                        [(ngModel)]=\"item[col.key]\"\r\n                                        class=\"form-control edit-input\"\r\n                                        (blur)=\"confirmEdit(item)\"\r\n                                        >\r\n                                    <option>\r\n                                        %\r\n                                    </option>\r\n                                    <option>\r\n                                        $\r\n                                    </option>\r\n                                </select>\r\n\r\n                                <!-- FIN CASO ESPECIAL EN ULTIMO IPUT EDITABLE -->\r\n\r\n                            <!-- FIN ULTIMO INPUT EDITABLE -->\r\n\r\n\r\n                            <!-- CASOS PARTICULARES -->\r\n                            <select *ngIf=\"col.nombre === 'imputacion'\"\r\n                                    [(ngModel)]=\"item[col.key].seleccionada\"\r\n                                    [ngClass]=\"'form-control without-padding editar-focus-' + item.idFactDetalle\"\r\n                                    >\r\n                                <option *ngFor=\"let impu of item[col.key].todas\" [ngValue]=\"impu\">\r\n                                    {{impu.descripcion}}\r\n                                </option>\r\n                            </select>\r\n                            <!-- FIN CASOS PARTICULARES -->\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <!-- FIN DE MUESTREO DE DATA -->\r\n            </tr>\r\n\r\n            <!-- <div *ngIf=\"showTooltip && (!comprobante || !comprobante.fechaComprobante || !comprobante.fechaComprobante.year)\" class=\"tooltip-add-prod\" [ngStyle]=\"getPositionTooltip()\"> -->\r\n            <div *ngIf=\"showTooltip && !canAddProduct()\" class=\"tooltip-add-prod\" [ngStyle]=\"getPositionTooltip()\">\r\n                <span *ngIf=\"productosObservable.value && productosObservable.value.length > 0\">\r\n                    Debe completar la fecha del comprobante antes de agregar productos\r\n                </span>\r\n                <!-- <span *ngIf=\"!(productosObservable.value && productosObservable.value.length > 0)\">\r\n                    Debe seleccionar una forma de pago para poder agregar productos\r\n                </span> -->\r\n            </div>\r\n\r\n            <!-- ROW PARA AGREGAR UN PRODUCTO -->\r\n            <tr class=\"row-agregar-producto\" *ngIf=\"enableAddItem\">\r\n                <td></td>\r\n                <td (mouseenter) = \"showTooltip = true\" (mouseleave) = \"showTooltip = false\">\r\n                    <input  [(ngModel)]=\"textoBusqueda\" type=\"text\" class=\"form-control input-new-prod\" id=\"addInput\" placeholder=\"\"\r\n                            (blur)=\"onBlurInputItemAdd($event)\"\r\n                            (ngModelChange)=\"onChangeInputItemAdd($event)\"\r\n                            (keydown.arrowdown)=\"keyPressInputTexto($event)('down')\"\r\n                            (keydown.arrowup)=\"keyPressInputTexto($event)('up')\"\r\n                            (keydown.enter)=\"onEnterInputBuscProd($event)\"\r\n                            [disabled]=\"!canAddProduct()\"\r\n                            (focusout)=\"leftProduct($event)\">\r\n\r\n                    <popup-lista *ngIf=\"textoBusqueda && textoBusqueda.length > 0\"\r\n                                    [items]=\"productosBusqueda.filtrados\"\r\n                                    [keysToShow]=\"['descripcion', 'codProducto']\"\r\n                                    [onClickItem]=\"onClickProductoListaLocal\"\r\n                                    [fatherPosition]=\"getOffsetOfAddInput()\">\r\n                    </popup-lista>\r\n                </td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n            <!-- FIN ROW PARA AGREGAR UN PRODUCTO -->\r\n\r\n        </tbody>\r\n\r\n        <tfoot>\r\n\r\n            <tr>\r\n                <td colspan=\"12\" style=\"border-top: none\">\r\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                </td>\r\n            </tr>\r\n        </tfoot>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/components/tablaEmisionRem/tablaEmisionRem.scss":
/***/ (function(module, exports) {

module.exports = "/*Modificacion Dario*/\n:host /deep/ .widgets .data-table-container {\n  width: 100%; }\n:host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n.panel {\n  font-size: 11px; }\n.panel .table .table-column {\n    text-transform: capitalize; }\n.panel .table thead {\n    background: #c2c3d2;\n    color: black;\n    text-shadow: 0 0 3px #fff; }\n.panel .table thead tr th {\n      text-align: center;\n      padding: 6px 4px; }\n.panel .table tbody tr td {\n    text-align: center;\n    padding: 0 4px; }\n.panel .table tbody tr td .datepicker-datelikepicker {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 90%;\n      margin-left: 9%; }\n.panel .table tbody .btn-container-td {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.panel .table tbody .btn-container-td .btn-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      padding-top: 7px; }\n.panel .table tbody .btn-container-td .btn-container .btn-accion {\n        margin: 2%;\n        font-size: 0.9rem;\n        padding: 5px 9px;\n        cursor: pointer;\n        padding-top: 0;\n        display: block; }\n.panel .table tbody .btn-container-td .btn-container .btn-editar i {\n        vertical-align: middle; }\n.panel .table tbody .add-tr .add-td {\n    padding: 0 4px; }\n.panel .table tbody .add-tr .add-td .checkbox-traza {\n      margin-top: 6px; }\n.panel .table tbody .lista-filtrada-items {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.panel .table tbody tr td .input-new-prod {\n    width: 97%;\n    margin: 0 auto; }\n.panel .table tbody .tooltip-add-prod {\n    position: fixed;\n    background: #c3c5d4;\n    padding: 5px 10px;\n    text-align: center;\n    border-radius: 24px;\n    opacity: 0.8;\n    left: 222px;\n    top: 88px;\n    font-size: 11px;\n    -webkit-transition: width 2s;\n    transition: width 2s; }\n.panel .table tbody .row-agregar-producto td {\n    padding: 3px 0px; }\n.tabla-ingreso .form-control .sort-option {\n  text-transform: capitalize; }\n.tabla-ingreso .footer-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.tabla-ingreso .footer-table .add-item-label {\n    font-size: 0.9rem; }\n.tabla-ingreso .footer-table .deposito {\n    margin-right: 2%; }\n.without-padding {\n  padding: 0; }\ntd div div:nth-child(2) {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/components/tablaFormaPago/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/ventas/emisionRemitos/components/tablaFormaPago/tablaFormaPago.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/components/tablaFormaPago/tablaFormaPago.component.ts":
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
var TablaFormaPago = (function () {
    function TablaFormaPago() {
        var _this = this;
        this.disableRest = false;
        // Eventos de cambio que atrapo en EmisionRemito
        this.onAddSelecFormaPago = new core_1.EventEmitter();
        this.onRemoveSelecFormaPago = new core_1.EventEmitter();
        this.seleccionados = [];
        this.seleccionado = null;
        /**
         * Evento change del checkbox
         */
        this.onChangeCheckbox = function (e) { return function (fp) {
            if (e && e.target) {
                var estado = e.target.checked;
                _this.seleccionado = estado ? fp.descripcion : null;
                // Actualizo la lista de seleccioandos del componete emisionRemitos
                estado ?
                    _this.onAddSelecFormaPago.emit(fp) :
                    _this.onRemoveSelecFormaPago.emit(fp);
                // También actualizo la lista seleccionados de este componente (lo necesito para checkear si los checkbox son seleccionables o no)
                estado ?
                    _this.seleccionados.push(fp) :
                    _this.seleccionados = _this.seleccionados.filter(function (fpSelec) { return fpSelec.idFormaPago !== fp.idFormaPago; });
            }
        }; };
        /**
         * Focusea el input de buscar producto, si y solo si es el último checkbox el bluseado
         */
        this.onBlurCheckbox = function (isLast) {
            return isLast && document.getElementById('addInput') ?
                document.getElementById('addInput').focus() : null;
        };
    }
    return TablaFormaPago;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaFormaPago.prototype, "dataTable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaFormaPago.prototype, "disableRest", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TablaFormaPago.prototype, "onAddSelecFormaPago", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TablaFormaPago.prototype, "onRemoveSelecFormaPago", void 0);
TablaFormaPago = __decorate([
    core_1.Component({
        selector: 'tabla-forma-pago',
        template: __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/components/tablaFormaPago/tablaFormaPago.html"),
        styles: [__webpack_require__("./src/app/pages/main/ventas/emisionRemitos/components/tablaFormaPago/tablaFormaPago.scss")]
    }),
    __metadata("design:paramtypes", [])
], TablaFormaPago);
exports.TablaFormaPago = TablaFormaPago;
//# sourceMappingURL=tablaFormaPago.component.js.map

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/components/tablaFormaPago/tablaFormaPago.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabla-forma-pago\">\r\n    <table style=\"width:100%\">\r\n        <tr class=\"table-header\">\r\n            <th></th>\r\n            <th>F.Pago</th>\r\n        </tr>\r\n    \r\n        <tr *ngFor=\"let fp of dataTable; index as indFp; last as isLast\">\r\n            <td>\r\n                <input \r\n                    (blur)=\"onBlurCheckbox(isLast)\" \r\n                    [attr.id]=\"'fp-check-' + indFp\" \r\n                    (change)=\"onChangeCheckbox($event)(fp)\" \r\n                    [disabled]=\"(seleccionado && fp.descripcion != seleccionado && disableRest)\"\r\n                    class=\"checkbox-td\" type=\"checkbox\"/>\r\n            </td>\r\n            <td>{{ fp.descripcion }}</td>\r\n        </tr>\r\n    </table> \r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/components/tablaFormaPago/tablaFormaPago.scss":
/***/ (function(module, exports) {

module.exports = "/*Modificacion Dario*/\n.tabla-forma-pago {\n  height: 112px;\n  overflow: auto; }\n.tabla-forma-pago table .table-header {\n    background: #b8b8bd; }\n.tabla-forma-pago table tr:nth-child(even) {\n    background: #cacad2; }\n.tabla-forma-pago table td {\n    padding: 2px; }\n.tabla-forma-pago table td .checkbox-td {\n      display: block;\n      margin: 2px; }\n"

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/emisionRemitos.component.ts":
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
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var moment = __webpack_require__("./node_modules/moment/moment.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var padron_1 = __webpack_require__("./src/app/models/padron.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var productoPendiente_1 = __webpack_require__("./src/app/models/productoPendiente.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var cotizacion_1 = __webpack_require__("./src/app/models/cotizacion.ts");
var comprobante_1 = __webpack_require__("./src/app/models/comprobante.ts");
var deposito_1 = __webpack_require__("./src/app/models/deposito.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var emisionRemitosService_1 = __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/emisionRemitosService.ts");
var condIva_1 = __webpack_require__("./src/app/models/condIva.ts");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var sisCanje_1 = __webpack_require__("./src/app/models/sisCanje.ts");
var comprobanteRelacionado_1 = __webpack_require__("./src/app/models/comprobanteRelacionado.ts");
var global_state_1 = __webpack_require__("./src/app/global.state.ts");
var gruposParametros_1 = __webpack_require__("./src/constantes/gruposParametros.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var vendedor_1 = __webpack_require__("./src/app/models/vendedor.ts");
var sisModulos_1 = __webpack_require__("./src/constantes/sisModulos.ts");
var comprobanteEncabezado_1 = __webpack_require__("./src/app/models/comprobanteEncabezado.ts");
var listaPrecio_1 = __webpack_require__("./src/app/models/listaPrecio.ts");
var ptoVenta_1 = __webpack_require__("./src/app/models/ptoVenta.ts");
var contrato_1 = __webpack_require__("./src/app/models/contrato.ts");
var relacionCanje_1 = __webpack_require__("./src/app/models/relacionCanje.ts");
var contratosService_1 = __webpack_require__("./src/app/services/contratosService.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var modeloDetalle_1 = __webpack_require__("./src/app/models/modeloDetalle.ts");
var EmisionRemitos = (function () {
    /**
     * Toda la carga de data se hace en el mismo orden en el que está declarado arriba
     */
    function EmisionRemitos(recursoService, emisionRemitosService, utilsService, popupListaService, comprobanteService, _state, router, contratosService) {
        ////////// Listas desplegables //////////
        var _this = this;
        this.recursoService = recursoService;
        this.emisionRemitosService = emisionRemitosService;
        this.utilsService = utilsService;
        this.popupListaService = popupListaService;
        this.comprobanteService = comprobanteService;
        this._state = _state;
        this.router = router;
        this.contratosService = contratosService;
        /////////////////////////////////////////////
        /////////// Objetos Seleccionados ///////////
        /////////////////////////////////////////////
        this.cliente = new padron_1.Padron();
        this.comprobante = new comprobante_1.Comprobante();
        this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
        this.comprobantePesificado = {
            puntoVenta: null,
            numero: null,
        };
        this.comprobantePesificadoInterno = null;
        this.sisCanje = new sisCanje_1.SisCanje();
        this.formasPagoSeleccionadas = [];
        this.numeroCteSelec = new ptoVenta_1.PtoVenta();
        this.factura = new comprobante_1.Comprobante();
        this.dataVendedor = {
            vendedor: new vendedor_1.Vendedor(),
            incluir: false,
        };
        this.listaPrecioSelect = new listaPrecio_1.ListaPrecio();
        this.preservarPrevios = false;
        this.contrato = new contrato_1.Contrato();
        this.relacionCanje = new relacionCanje_1.RelacionCanje();
        this.descuentoOriginal = 0;
        this.precioOriginal = 0;
        //monedas: Subject<Moneda[]> = new Subject();
        this.monedas = [];
        this.productos = new rxjs_1.BehaviorSubject([]);
        this.clientes = {
            todos: [],
            filtrados: new rxjs_1.BehaviorSubject([]),
        };
        this.numerosCte = [];
        this.tituloCardComprobante = "COMPROBANTE";
        this.estadoRelacionadoObligatorio = false;
        this.cbtesAfip = [
            {
                codigoAfip: 1,
                descripcion: "Fact. A",
            },
            {
                codigoAfip: 2,
                descripcion: "Nota Débito A",
            },
            {
                codigoAfip: 6,
                descripcion: "Fact. B",
            },
            {
                codigoAfip: 7,
                descripcion: "Nota Débito B",
            },
        ];
        this.relacionadoConfirmado = false;
        this.disableRest = false;
        this.esCanje = false;
        this.esPesificado = false;
        this.pesificado = false;
        this.marcaPesificado = false;
        this.pesificadoPersisteSn = false;
        this.percep2459 = false;
        this.nroCopias = 3;
        this.preCargaPadron = "";
        /////////////////////////////////////////////
        ////////////////// Otros ////////////////////
        /////////////////////////////////////////////
        // Inhdice del producto enfocado del popup
        this.clienteEnfocadoIndex = -1;
        this.cotizacionDatos = { cotizacion: new cotizacion_1.Cotizacion(), total: 0 };
        this.disabledClienteCustom = false;
        // Suma de todos los subtotales
        this.sumatoriaSubtotales = 0;
        this.isAutorizada = false;
        this.cereales = [];
        this.estadosSisa = [];
        this.estadoSisa = null;
        this.diferidoVto = false;
        this.cereal = null;
        this.condicionesConfirmadas = false;
        this.tablas = {
            columnas: {
                columnasProductos: [],
                columnasTrazabilidad: [],
                columnasCanje: [],
                columnasDetallesFp: [],
                columnasFactura: [],
                columnasRecargo: [],
            },
            datos: {
                productosPend: [],
                subtotalesProductos: [],
                productosCanje: [],
                lotesTraza: [],
                detallesFormaPago: [],
                modelosFactura: [],
                recargoCanjes: [],
            },
        };
        // Porcentaje de grabado
        this.grabandoPorcentaje = 0;
        // Porcentaje de grabado afip;
        this.grabandoPorcentajeAfip = 0;
        ///////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////// Eventos Click /////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////
        this.onClickRemove = function (prodSelect) {
            _.remove(_this.tablas.datos.productosPend, function (prod) {
                return prod.idFactDetalle === prodSelect.idFactDetalle;
            });
            // Actualizo nuevamente la lista de trazables
            _this.actualizarTrazableLotes(prodSelect);
            // Actualizo datos de producto (total neto)
            _this.actualizarDatosProductos();
            // Actualizo la grilla de Factura
            _this.fetchFacturas();
        };
        this.onClickEdit = function (tipoColumnas) { return function (itemSelect) {
            _this.descuentoOriginal = itemSelect.descuento;
            _this.precioOriginal = itemSelect.precio;
            _this.statusPorcentajeCotas = "";
            _this.statusPreciosCotas = "";
            _this.tablas.columnas[tipoColumnas] = _this.tablas.columnas[tipoColumnas].map(function (tabla) {
                var newTabla = tabla;
                if (newTabla.enEdicion !== undefined) {
                    tipoColumnas === "columnasProductos"
                        ? (newTabla.enEdicion = itemSelect.idFactDetalle)
                        : tipoColumnas === "columnasTrazabilidad"
                            ? (newTabla.enEdicion = itemSelect.nroLote)
                            : tipoColumnas === "columnasFactura"
                                ? (newTabla.enEdicion = itemSelect.cuentaContable)
                                : tipoColumnas === "columnasDetallesFp"
                                    ? (newTabla.enEdicion = itemSelect.idFormaPagoDet)
                                    : null;
                }
                return newTabla;
            });
            // Hago focus en el select de imputacion
            setTimeout(function () {
                var idItem = itemSelect.nroLote
                    ? itemSelect.nroLote
                    : itemSelect.idFormaPagoDet
                        ? itemSelect.idFormaPagoDet
                        : itemSelect.producto && itemSelect.idFactDetalle
                            ? itemSelect.idFactDetalle
                            : "000";
                var inputFocusClass = "editar-focus-" + idItem;
                var elementFocus = document.getElementsByClassName(inputFocusClass);
                elementFocus && elementFocus[0] ? elementFocus[0].focus() : null;
            });
            // Cuando edita alguna forma de pago, se sugiere el Total Cte en monto
            if (tipoColumnas && tipoColumnas === "columnasDetallesFp") {
                itemSelect.monto = _this.utilsService.parseDecimalNumber(_this.cotizacionDatos.total + _this.sumatoriaSubtotales);
            }
        }; };
        this.changeClave = function () {
            console.log(_this.comprobante.numerador.ptoVenta.ptoVenta, Number(_this.comprobante.numerador.numerador), _this.cliente.padronCodigo);
            var clave = _this.utilsService.generarClaveNC(_this.comprobante.numerador.ptoVenta.ptoVenta, Number(_this.comprobante.numerador.numerador), _this.cliente.padronCodigo);
            _this.isAutorizada = clave == _this.claveAutorizacion;
        };
        //dario
        this.onClickConfirmEdit = function (tipoColumnas) { return function (itemSelect) {
            // Me fijo si es valida la data ignresada
            var estado = _this.emisionRemitosService.validarAntesDeConfirmar(tipoColumnas)(itemSelect, _this.comprobante.moneda.idMoneda, _this.cotizacionDatos.cotizacion.cotizacion, _this.esPesificado, _this.esCanje);
            // Hago la sumatoria de los subtotales de la factura
            if (tipoColumnas === "columnasFactura") {
                // Actualizo el Total Comprobante sumando todos los precios nuevamente (no le sumo directamente el precio editado porque no es un precio nuevo, sino que ya está y debería sumarle la diferencia editada nomás)
                _this.actualizarSumatoriaSubto();
            }
            if (estado === "ok") {
                // Actualizo datos del producto (si NO son las facturas lo que se edita, o las forma de pago)
                if (tipoColumnas !== "columnasFactura" &&
                    tipoColumnas !== "columnasDetallesFp")
                    _this.actualizarDatosProductos(itemSelect);
                // Todos los atributos 'enEdicion' distintos de undefined y también distintos de null o false, los seteo en false
                _this.tablas.columnas[tipoColumnas] = _this.tablas.columnas[tipoColumnas].map(function (tabla) {
                    var newTabla = tabla;
                    if (newTabla.enEdicion !== undefined &&
                        newTabla.enEdicion) {
                        // Seteo en false asi sale de edicion
                        newTabla.enEdicion = false;
                    }
                    return newTabla;
                });
            }
            else {
                // Si NO es valida, entonces muestro mensajito
                _this.utilsService.showModal("Error")(estado)()();
            }
            if (tipoColumnas == "columnasProductos") {
                // cotas de precios ///
                var permisoCotaPrecio = void 0;
                var permisoModificaPrecio = void 0;
                _this.statusPorcentajeCotas = "";
                _this.statusPreciosCotas = "";
                // cota de %
                var permisoCotaPorcentaje = void 0;
                var permisoModificaPorcentaje = void 0;
                if ((itemSelect.cotaInferior == 0 && itemSelect.cotaSuperior == 0) ||
                    (itemSelect.cotaSuperior == undefined &&
                        itemSelect.cotaSuperior == undefined)) {
                    // no tiene cota debe trabajar con el precio que esta fijado
                    permisoModificaPrecio = false;
                }
                else {
                    permisoModificaPrecio = true;
                    // si no es 0 tongo que validar que el precio este entre las cotas
                    if (itemSelect.precio >= itemSelect.cotaInferior &&
                        itemSelect.precio <= itemSelect.cotaSuperior) {
                        permisoCotaPrecio = true;
                    }
                    else {
                        permisoCotaPrecio = false;
                    }
                }
                // aca tengo dudas si son los dos true o puede ser un false y un true
                if (permisoCotaPrecio == true && permisoCotaPorcentaje == true) {
                    if (true) {
                        if (itemSelect.pendienteOg) {
                            if (Number(itemSelect.pendiente) >
                                Number(itemSelect.pendienteOg)) {
                                alert("Atención !!! No se puede modificar la cantidad del comprobante: El valor ingresado no puede ser mayor al valor Original");
                                itemSelect.pendiente = itemSelect.pendienteOg;
                            }
                        }
                    }
                }
                else {
                    if ((itemSelect.cotaInfPorc == 0 &&
                        itemSelect.cotaSupPorc == 0) ||
                        (itemSelect.cotaInfPorc == undefined &&
                            itemSelect.cotaSupPorc == undefined)) {
                        permisoModificaPorcentaje = false;
                    }
                    else {
                        permisoModificaPorcentaje = true;
                        if (itemSelect.descuento >= itemSelect.cotaInfPorc &&
                            itemSelect.descuento <= itemSelect.cotaSupPorc) {
                            permisoCotaPorcentaje = true;
                        }
                        else {
                            permisoCotaPorcentaje = false;
                        }
                    }
                    if (permisoModificaPrecio == false) {
                        // alert("No se puede modficfar el precio, no hay cotas de precios establecidas, debes trabajar con el precio sugerido")
                        if (_this.precioOriginal != itemSelect.precio) {
                            _this.statusPreciosCotas =
                                "ERROR: No se puede modificar el precio orginal, no hay cotas de precios establecidas para el artículo seleccionado, debe trabajar con el precio sugerido ";
                            itemSelect.precio = _this.precioOriginal;
                        }
                        else {
                            _this.statusPreciosCotas = "";
                        }
                    }
                    else {
                        if (permisoCotaPrecio == false) {
                            _this.statusPreciosCotas =
                                "Error :: El Precio del articulo  no esta dentro de las cotas permitidas ( >= " +
                                    itemSelect.cotaInferior +
                                    " y <= " +
                                    itemSelect.cotaSuperior +
                                    ").";
                            itemSelect.precio = _this.precioOriginal;
                        }
                        else {
                            _this.statusPreciosCotas = "";
                        }
                    }
                    if (permisoModificaPorcentaje == false) {
                        //alert("No se puede modficfar el porcentaje, no hay cotas debes trabajar con el porcenjaje establecido")
                        if (_this.descuentoOriginal != itemSelect.descuento) {
                            _this.statusPorcentajeCotas =
                                "ERROR: No se puede modificar el porcentaje orginal, no hay cotas de porcentajes establecidas para el artículo , debe trabajar con el porcentaje sugerido ";
                            itemSelect.descuento = _this.descuentoOriginal;
                        }
                    }
                    else {
                        if (permisoCotaPorcentaje == false) {
                            _this.statusPorcentajeCotas =
                                "Error :: El Procentaje de descuento  del producto  no esta dentro de las cotas permitidas ( >= " +
                                    itemSelect.cotaInfPorc +
                                    " y <= " +
                                    itemSelect.cotaSupPorc +
                                    ").";
                            itemSelect.descuento = _this.descuentoOriginal;
                        }
                        else {
                            _this.statusPorcentajeCotas = "";
                        }
                    }
                }
            }
            itemSelect = null;
        }; };
        this.buscarCerealesCanje = function () {
            _this.emisionRemitosService.getCerealesCanje().subscribe(function (data) {
                _this.cereales = data.cereales;
            });
        };
        this.buscaEstadosSisa = function (idPadron) {
            _this.emisionRemitosService
                .getEstadosSisa(idPadron)
                .subscribe(function (data) {
                _this.estadosSisa = data.estadosSisa;
                _this.estadosSisa.forEach(function (estado) {
                    if (estado.isCurrent) {
                        _this.estadoSisa = estado;
                    }
                });
            });
        };
        /**
         * Agrega el producto seleccionado a la lista de productosPendientes
         */
        this.onClickProductoLista = function (prodSelec) {
            if (prodSelec) {
                /*const dia = 24 * 60 * 60 * 1000;
                 */ //const diferenciaFechas = Math.round((new Date(this.comprobante.fechaVto.year, this.comprobante.fechaVto.month, this.comprobante.fechaVto.day).getTime() - new Date().getTime()) / dia);
                _this.emisionRemitosService
                    .buscarProducto(prodSelec.idProductos)(_this.listaPrecioSelect.idListaPrecio)(_this.comprobante.moneda.idMoneda)(_this.tipoOperacion.idSisTipoOperacion)(_this.comprobante.tipo.idCteTipo)(_this.comprobante.fechaVto.getFechaFormateada())(_this.esCanje)(_this.cereal)(_this.esPesificado)
                    .subscribe(function (prodEnc) {
                    var auxProdSelect = Object.assign({}, prodEnc);
                    // Seteo el nro del comprobante actual
                    auxProdSelect.numero =
                        _this.utilsService.numeroObjectToString(_this.comprobante.numerador);
                    var existeProd = _this.tablas.datos.productosPend.find(function (prod) {
                        return prod.numero === auxProdSelect.numero &&
                            prod.comprobante === auxProdSelect.comprobante &&
                            prod.producto.codProducto ==
                                auxProdSelect.producto.codProducto;
                    });
                    if (!existeProd) {
                        // this.tablas.datos.productosPend.push(prodEnc);
                        _this.tablas.datos.productosPend.push(auxProdSelect);
                        _this.actualizarDatosProductos();
                    }
                    else {
                        _this.utilsService.showModal("Error")("Ese producto ya fue ingresado de forma directa en este comprobante")()();
                    }
                    // Despues de agregar el producto prosedo a ponerlo en edición
                    _this.onClickEdit("columnasProductos")(auxProdSelect);
                    // Actualizo grilla trazable lotes
                    _this.actualizarTrazableLotes();
                });
            }
        };
        this.limpiarFormulario = function (noBorrar) {
            // Blanqueo los campos
            var auxFecha = _this.comprobante.fechaComprobante;
            _this.comprobante = new comprobante_1.Comprobante();
            _this.comprobante.fechaComprobante = auxFecha;
            _this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
            _this.comprobantePesificado = {
                puntoVenta: null,
                numero: null,
            };
            _this.comprobantePesificadoInterno = null;
            _this.cliente = new padron_1.Padron();
            _this.tablas.datos.productosPend = [];
            _this.tablas.datos.modelosFactura = [];
            // this.cotizacionDatos = { cotizacion: new Cotizacion(), total: 0 };
            _this.deposito = null;
            _this.tablas.datos.detallesFormaPago = [];
            _this.tipoOperacion = null;
            _this.disableRest = false;
            _this.esCanje = false;
            _this.isAutorizada = false;
            _this.claveAutorizacion = null;
            _this.idFactCabRelacionado = null;
            _this.percep2459 = false;
            _this.esPesificado = false;
            _this.cliente.condIva = null;
            _this.marcaPesificado = false;
            _this.pesificadoPersisteSn = false;
            if (!noBorrar || !noBorrar.includes("cotizacion")) {
                _this.cotizacionDatos = { cotizacion: new cotizacion_1.Cotizacion(), total: 0 };
            }
            _this.sumatoriaSubtotales = 0;
        };
        this.onClickCancelar = function () {
            _this.utilsService.showModal("Aviso")("¿Cancelar emision de remito?")(function () {
                _this.limpiarFormulario(["cotizacion"]);
            })({
                tipoModal: "confirmation",
            });
        };
        /**
         * Valida y graba el comprobante
         */
        this.onClickConfirmar = function () {
            return _this.emisionRemitosService.existsProductsWithoutCantidad(_this.tablas.datos.productosPend)
                ? _this.utilsService.showModal("Problema")("Los productos deben tener una cantidad asignada")()()
                : _this.utilsService.showModal("Confirmar")("¿Confirmar emision de comprobante?")(function () {
                    //this.comprobante.tipo.idCteTipo == 77
                    if (_this.comprobante.tipo.requiereClaveAutorizacion == true) {
                        if (_this.claveAutorizacion === "" || _this.claveAutorizacion === null) {
                            _this.utilsService.showModal("Error")("Se requiere que ingrese su clave para continuar.")()();
                        }
                    }
                    alert(_this.ptoVentaAfipRelacionado + " - " + _this.numeroComprobanteAfipRelacionado);
                    _this.actualizarSumatoriaSubto();
                    // Si SI hay intervalo y la fecha SE SALE de el, entonces..
                    if (_this.fechaComprobanteInvalida()) {
                        _this.utilsService.showModal("Error de fecha")("Fecha inv\u00E1lida para este punto de venta (Intervalo permitido: " + moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.numerador.fechaApertura)).format("DD-MM-YYYY") + " al " + moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.numerador.fechaCierre)).format("DD-MM-YYYY") + ")")()();
                    }
                    else {
                        // Activo poircentaje grabado spinbner
                        _this.grabandoPorcentaje = 30;
                        _this.emisionRemitosService
                            .confirmarYEmitirRemito(_this.comprobante)(_this.comprobanteRelacionado)(_this.cliente)(_this.tablas.datos.productosPend)(_this.cotizacionDatos)(_this.sisCanje)(_this.formasPagoSeleccionadas)(_this.factura)(_this.tablas.datos.modelosFactura)(_this.tablas.datos.detallesFormaPago)(_this.deposito)(_this.tablas.datos.lotesTraza)(_this.tipoOperacion)(_this.dataVendedor)(_this.tablas.datos.subtotalesProductos)(_this.listaPrecioSelect)(_this.contrato)(_this.relacionCanje)(_this.cereal)(_this.diferidoVto)(_this.pesificado)(_this.marcaPesificado)(_this.pesificadoPersisteSn)(_this.comprobantePesificadoInterno)(_this.claveAutorizacion)(_this.idFactCabRelacionado)
                            .catch(function (err) {
                            _this.grabandoPorcentaje = 0;
                            _this.grabandoPorcentajeAfip = 0;
                            _this.utilsService.showErrorWithBody(err);
                            return Observable_1.Observable.throw(null);
                        })
                            .subscribe(function (respuesta) {
                            debugger;
                            _this.grabandoPorcentaje = 60;
                            if (_this.comprobante.tipo.cursoLegal) {
                                /*

                                Autorizo en AFIP

                                */
                                _this.grabandoPorcentajeAfip = 35;
                                _this.emisionRemitosService
                                    .autorizarAfip(respuesta.datos.idFactCab, _this.factCabAfipRelacionado)
                                    .catch(function (err) {
                                    _this.grabandoPorcentaje = 0;
                                    _this.grabandoPorcentajeAfip = 0;
                                    _this.blanquearCampos();
                                    _this.utilsService.showErrorWithBody(err, true, function () { return console.log(" Recargo pantalla (TODO: Podría limpiar campo por campo, pero es mas simple y menos costozo recargar la página)"); });
                                    return Observable_1.Observable.throw(null);
                                })
                                    .subscribe(function (respAfip) {
                                    _this.grabandoPorcentajeAfip = 0;
                                    _this.grabandoPorcentaje = 0;
                                    if (respAfip && respAfip.datos) {
                                        var compCreado_1 = new comprobanteEncabezado_1.ComprobanteEncabezado();
                                        compCreado_1.idFactCab = respuesta.datos.idFactCab;
                                        alert("Comprobante " + respAfip.datos.numero + " autorizado con éxito, CAI otorgado: " + respAfip.datos.cai);
                                        compCreado_1.numero = Number("" + _this.comprobante.numerador.ptoVenta.ptoVenta + _this.comprobante.numerador.ptoVenta.ptoVenta
                                            .toString()
                                            .padStart(8, "0"));
                                        _this.blanquearCampos();
                                        /*this.utilsService.showImprimirModalAceptar(
                                            respuesta.control.codigo
                                        )(
                                            `${respuesta.control.descripcion}.
                                                                    CAI: ${respAfip.datos.cai}`
                                        )(() => {
                                            this.recursoService.downloadComp(
                                            compCreado,
                                            null,
                                            this.nroCopias,
                                            this.esCanje
                                            );
                                            this.blanquearCampos();

                                        })(compCreado)(() => {
                                            this.blanquearCampos();
                                        });*/
                                        if (!_this.comprobante.tipo.comprobante.usaContrato) {
                                        }
                                    }
                                });
                                /*

                                FIN AFIP

                                */
                                // no autoriza a afip, cambiar por el codigo de arriba cuando funcione el web service de afip
                                // Modal para imprimir
                                var compCreado_2 = new comprobanteEncabezado_1.ComprobanteEncabezado();
                                compCreado_2.idFactCab =
                                    respuesta.datos.idFactCab;
                                compCreado_2.numero = Number("" + _this.comprobante.numerador.ptoVenta
                                    .ptoVenta + _this.comprobante.numerador.ptoVenta.ptoVenta
                                    .toString()
                                    .padStart(8, "0"));
                                _this.utilsService.showImprimirModalAceptar(respuesta.control.codigo)("" + respuesta.control.descripcion)(function () {
                                    _this.recursoService.downloadComp(compCreado_2, null, _this.nroCopias);
                                    _this.blanquearCampos();
                                })(compCreado_2)(function () {
                                    _this.blanquearCampos();
                                });
                                if (!_this.comprobante.tipo.comprobante
                                    .usaContrato) {
                                    // // Blanqueo los campos
                                }
                            }
                            else {
                                _this.grabandoPorcentaje = 0;
                                var compCreado_3 = new comprobanteEncabezado_1.ComprobanteEncabezado();
                                compCreado_3.idFactCab =
                                    respuesta.datos.idFactCab;
                                compCreado_3.numero = Number("" + _this.comprobante.numerador.ptoVenta
                                    .ptoVenta + _this.comprobante.numerador.ptoVenta.ptoVenta
                                    .toString()
                                    .padStart(8, "0"));
                                _this.utilsService.showImprimirModalAceptar(respuesta.control.codigo)("" + respuesta.control.descripcion)(function () {
                                    _this.recursoService.downloadComp(compCreado_3, null, _this.nroCopias);
                                    _this.blanquearCampos();
                                })(compCreado_3)(function () {
                                    _this.blanquearCampos();
                                });
                                if (!_this.comprobante.tipo.comprobante
                                    .usaContrato) {
                                }
                            }
                            // Genero un contrato nuevo
                            if (_this.comprobante.tipo.comprobante.usaContrato) {
                                _this.blanquearCampos();
                                /*this.contratosService.generarContratoByComprobante(this.cliente, this.getCantidadCanjeReferencia(), this.sisCanje)
                                  .catch(err => {
                                      // Si falla queda por generar el contrato Pendiente. Le aviso al usuario
                                      this.utilsService.showErrorWithBody(err);

                                      return Observable.of({
                                          arraydatos: []
                                      });
                                  })
                                  .subscribe(
                                      resp => {
                                          // Blanqueo los campos
                                          this.blanquearCampos();
                                      }
                                  )*/
                            }
                        });
                    }
                })({ tipoModal: "confirmation" });
        };
        /**
         * Blanquea todos los campos (cuando confirma se usa)
         */
        this.blanquearCampos = function () {
            /*this.grabandoPorcentaje =0;*/
            _this.claveAutorizacion = "";
            var auxFecha = _this.comprobante.fechaComprobante;
            _this.comprobante = new comprobante_1.Comprobante();
            _this.comprobante.fechaComprobante = auxFecha;
            _this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
            _this.comprobantePesificado = {
                puntoVenta: null,
                numero: null,
            };
            _this.comprobantePesificadoInterno = null;
            _this.cliente = new padron_1.Padron();
            _this.cliente.condIva = new condIva_1.CondIva();
            setTimeout(function () {
                _this.cliente.condIva = new condIva_1.CondIva();
            }, 1000); // TODO: Fix horrible, sacar
            _this.tablas.datos.productosPend = [];
            _this.tablas.datos.modelosFactura = [];
            _this.deposito = new deposito_1.Deposito();
            _this.tablas.datos.detallesFormaPago = [];
            _this.tablas.datos.lotesTraza = [];
            _this.condicionesConfirmadas = false;
            _this.diferidoVto = false;
            _this.cereal = null;
            _this.esCanje = false;
            _this.isAutorizada = false;
            _this.claveAutorizacion = null;
            _this.esPesificado = false;
            _this.percep2459 = false;
            _this.nroCopias = 3;
            _this.disableRest = false;
            // Limpio formas pago
            _this.dataTablaFormasPago = null;
            _this.formasPagoSeleccionadas = [];
            _this.codigoAfipRelacionado = null;
            _this.numeroAfipRelacionado = null;
            _this.factCabAfipRelacionado = null;
            _this.relacionadoConfirmado = false;
            _this.ptoVentaAfipRelacionado = null;
            _this.numeroComprobanteAfipRelacionado = null;
            // Limpio lista pre
            _this.listaPrecioSelect = null;
            _this.marcaPesificado = false;
            _this.pesificadoPersisteSn = false;
            // Reinicio radio buttons
            _this.listasPreciosUsuario.subscribe(function (resp) {
                return resp.forEach(function (lp, ind) {
                    var e = document.getElementById("lp-radio-" + ind);
                    e.checked = false;
                });
            });
            // Limpio vendedor
            _this.dataVendedor.vendedor = new vendedor_1.Vendedor();
            _this.dataVendedor.incluir = false;
            // Limpio cotizacion datos
            _this.cotizacionDatos.total = 0;
            _this.sumatoriaSubtotales = 0;
            // Limpio subtotales
            _this.tablas.datos.subtotalesProductos = [];
            // Limpio datos canje
            _this.sisCanje = new sisCanje_1.SisCanje();
            // Focus en input proveedor (TODO SET TIME OUT)
            document.getElementById("clienteSeleccionado")
                ? document.getElementById("clienteSeleccionado").focus()
                : null;
        };
        /**
         * Busca los productos pendientes de acuerdo al comprobante relacionado
         */
        this.onClickBuscarPendientes = function () {
            return _this.emisionRemitosService
                .buscarPendientes(_this.cliente)(_this.comprobanteRelacionado)(_this.comprobante)(_this.tipoOperacion)(_this.listaPrecioSelect)(_this.comprobante.fechaVto.getFechaFormateada())(_this.cereal)(_this.esCanje)(_this.esPesificado)
                .subscribe(function (prodsPend) {
                // Agrego los productos
                if (_this.preservarPrevios) {
                    _this.tablas.datos.productosPend = _this.tablas.datos.productosPend.concat(prodsPend);
                    if (_this.tipoOperacion.idSisTipoOperacion == 5 &&
                        _this.comprobante.tipo.idCteTipo == 75) {
                        _this.tablas.datos.recargoCanjes = prodsPend.slice();
                    }
                }
                else {
                    _this.tablas.datos.productosPend = prodsPend;
                    if (_this.tipoOperacion.idSisTipoOperacion == 5 &&
                        _this.comprobante.tipo.idCteTipo == 75) {
                        _this.tablas.datos.recargoCanjes = prodsPend.slice();
                    }
                }
                // Array de observables
                var actualizacionObser = prodsPend.map(function (pp) {
                    return _this.actualizarSubtotales(pp, { fromBuscaPendiente: true });
                });
                // DESPUES de actualizar todos los subtotales, ahí actualizo datos productos
                Promise.all(actualizacionObser).then(function (fa) {
                    // Actualizo datos de los productos
                    _this.actualizarDatosProductos();
                });
            });
        };
        /**
         * Event on click en la lista del popup de cliente
         */
        this.onClickPopupCliente = function (prove) {
            // Limpio primero el formulario
            _this.limpiarFormulario(["cotizacion"]);
            // Despue sseteo el cliente seleccionado
            _this.cliente = new padron_1.Padron(__assign({}, prove));
            // debugger;
            // Deshabilito la posibilidad de hacer un cliente custom
            _this.disabledClienteCustom = true;
            // Focus siguiente elemento
            document.getElementById("tipoOperacionSelect")
                ? document.getElementById("tipoOperacionSelect").focus()
                : null;
            _this.contratos = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.contratos)({ idPadron: prove.padronCodigo });
        };
        ///////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////// Eventos Blur ////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////
        /**
         * El blur es cuando se hace un leave del input (caundo se apreta click afuera por ejemplo).
         * Acá lo que hago es poner un array vacio como próx valor de los filtrados, cosa que la lista desaparezca porque no hay nada
         * También retorno el cliente seleccionado en el input
         * También checkeo si ya seleccionó cte y pto venta y fecha, y si es así entonces hago la consulta de formas de pago
         */
        this.onBlurInputCliente = function (e) {
            // Al hacer blur (apreta TAB) está intentando agarrar por padronCodigo, asi que lo busco
            var clienteExistente = _this.clientes.filtrados.value.find(function (cli) { return cli.padronCodigo === Number(_this.cliente.padronCodigo); });
            // Vacio filtrados
            _this.clientes.filtrados.next([]);
            // Actualizo cliente seleccionado
            try {
                if (clienteExistente &&
                    clienteExistente.padronCodigo &&
                    clienteExistente.padronApelli) {
                    // Antes de todo, checkeo que tenga cuit. Si NO tiene cuit, no puede continuar
                    if (!clienteExistente.cuit || clienteExistente.cuit <= 0) {
                        // Muestra mensaje cuit no tiene
                        _this.utilsService.showModal("Aviso")("Debe seleccionar un cliente que tenga un cuit")()();
                        _this.cliente = new padron_1.Padron();
                    }
                    else {
                        // Actualizo listas precios
                        /*  this.listasPreciosUsuario = this.recursoService.getRecursoList(resourcesREST.listaPrecios)({
                            codPadron: clienteExistente.padronCodigo
                        });
                        */
                        // Limpio primero el formulario
                        _this.limpiarFormulario(["cotizacion"]);
                        // Despue sseteo el cliente seleccionado
                        _this.cliente = clienteExistente;
                        // Lo busco en la base de facturacion
                        _this.emisionRemitosService
                            .checkIfClientExistInFacturacion(clienteExistente)
                            .then(function (vendedorAsociado) {
                            // Viene en un array pero siempre trae 1 (si lo encuetra, si no lo encuentra trae 0 o null)
                            if (vendedorAsociado) {
                                // Si lo encuentra todo ok, no le pido que lo cree. Solo me guardo el vendedor asociado
                                _this.dataVendedor = {
                                    vendedor: vendedorAsociado,
                                    incluir: true,
                                };
                            }
                            else {
                                // Si NO lo encuentra, le pido que lo cree
                                /*this.utilsService.showModal('Aviso')('Cliente no existente. ¿Desea crearlo?')(()=>{
                                this.router.navigate(
                                    ['/pages/tablas/clientes/nuevo'],
                                    {
                                        queryParams: {
                                            codPadronCliente: clienteExistente.padronCodigo
                                        }
                                    }
                                );
                            })({tipoModal:'confirmation'}, () => {
                                this.dataVendedor = {
                                    vendedor: new Vendedor(),
                                    incluir: false
                                };
                            })*/
                                _this.emisionRemitosService.llenarPadron(_this.cliente);
                            }
                            // Deshabilito los input del customcliente
                            _this.disabledClienteCustom = true;
                            // Hago foco en dropdown tipo
                            document.getElementById("tipoOperacionSelect")
                                ? document
                                    .getElementById("tipoOperacionSelect")
                                    .focus()
                                : null;
                        });
                    }
                }
                else {
                    _this.cliente.padronCodigo = null;
                }
            }
            catch (err) {
                // Muestro error
                if (err && err.nombre && err.descripcion) {
                    _this.utilsService.showModal(err.nombre)(err.descripcion)()();
                }
                // Vacio cliente seleccionado
                _this.cliente = new padron_1.Padron();
            }
        };
        /**
         * Setea la fecha de compra calculandola dado un string en formato 'ddmm', parseando a 'dd/mm/aaaa'
         * También hago otras cosas
         */
        this.onBlurFechaComprobante = function (e) {
            // Actualizo fecha (sobretodo si el formato es 'ddmm')
            _this.comprobante.fechaComprobante =
                _this.utilsService.stringToDateLikePicker(_this.comprobante.fechaComprobante);
            // Actualizo grilla trazable lotes
            _this.actualizarTrazableLotes();
            // Hago foco en el primer checbkox de la sformas de pago (el timeout es necesario para que espere a que se haga la consulta)
            // en gral esta consulta dura poquito (entre 10 y 40 milisegundos). Por eso con 150 milisegundos de espera es mas que suficiente
            setTimeout(function () {
                // Hago focus al siguiente elemento de lps
                var primerCheckBoxFp = document.getElementById("lp-radio-0");
                if (primerCheckBoxFp) {
                    // primerCheckBoxFp.checked = true;
                    primerCheckBoxFp.focus();
                }
            }, 150);
        };
        this.onBlurFechaVencimiento = function (e) {
            // Actualizo fecha (sobretodo si el formato es 'ddmm')
            _this.comprobante.fechaVto = _this.utilsService.stringToDateLikePicker(_this.comprobante.fechaVto);
            if (!_this.comprobante.fechaComprobante) {
                _this.comprobante.fechaVto = null;
                _this.utilsService.showModal("Error")("Ingrese primero la fecha de emisión")()();
            }
            else if (!(_this.comprobante.fechaVto.year >
                _this.comprobante.fechaComprobante.year ||
                (_this.comprobante.fechaVto.year ==
                    _this.comprobante.fechaComprobante.year &&
                    _this.comprobante.fechaVto.month >
                        _this.comprobante.fechaComprobante.month) ||
                (_this.comprobante.fechaVto.year ==
                    _this.comprobante.fechaComprobante.year &&
                    _this.comprobante.fechaVto.month ==
                        _this.comprobante.fechaComprobante.month &&
                    _this.comprobante.fechaVto.day >=
                        _this.comprobante.fechaComprobante.day))) {
                _this.comprobante.fechaVto = null;
                _this.utilsService.showModal("Error")("La fecha de vencimiento debe ser igual o posterior a la de emisión")()();
            }
            else {
                // Actualizo grilla trazable lotes
                _this.actualizarTrazableLotes();
                // Hago foco en el primer checbkox de la sformas de pago (el timeout es necesario para que espere a que se haga la consulta)
                // en gral esta consulta dura poquito (entre 10 y 40 milisegundos). Por eso con 150 milisegundos de espera es mas que suficiente
                setTimeout(function () {
                    // Hago focus al siguiente elemento de lps
                    var primerCheckBoxFp = document.getElementById("lp-radio-0");
                    if (primerCheckBoxFp) {
                        // primerCheckBoxFp.checked = true;
                        primerCheckBoxFp.focus();
                    }
                }, 150);
            }
        };
        /**
         * Evento blur de pto venta y numero en comprobante
         * tipo: puntoVenta o numero
         * keyTipoe: comprobante, comprobanteRelacionado
         */
        this.onBlurNumeroAutocomp = function (e) { return function (tipo) { return function (keyTipo) {
            return (_this[keyTipo][tipo] = _this.emisionRemitosService.autocompNroComp(tipo)(_this[keyTipo]));
        }; }; };
        ///////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////// Otras Eventos ///////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////
        /**
         * Actualizo el deposito seleccionado que me viene de tablaIngreso
         */
        this.onSelectDeposito = function (depSelect) {
            _this.deposito = depSelect;
        };
        /**
         * Evento de cuando se apreta felcha arriba o feclah abajo en input de busca cliente
         */
        this.keyPressInputTexto = function (e) { return function (upOrDown) {
            e.preventDefault();
            // Hace todo el laburo de la lista popup y retorna el nuevo indice seleccionado
            _this.clienteEnfocadoIndex =
                _this.popupListaService.keyPressInputForPopup(upOrDown)(_this.clientes.filtrados.value)(_this.clienteEnfocadoIndex);
        }; };
        /**
         * Evento on enter en el input de buscar cliente
         */
        this.onEnterInputProv = function (e) {
            e.preventDefault();
            _this.clientes.filtrados.subscribe(function (provsLista) {
                // Busco el producto
                var provSelect = provsLista && provsLista.length
                    ? provsLista[_this.clienteEnfocadoIndex]
                    : null;
                // Lo selecciono
                provSelect ? _this.onClickPopupCliente(provSelect) : null;
                // Reseteo el index
                _this.clienteEnfocadoIndex = -1;
            });
        };
        /**
         * Evento change del input del proovedor
         * _.throttle(onChangeInputCliente, 300)
         */
        this.onChangeInputCliente = function (busqueda) {
            // Limpio los clientes
            _this.clientes.filtrados.next([]);
            _this.cliente = new padron_1.Padron();
            if (busqueda && busqueda.length >= 2) {
                _this.findClientes(busqueda);
            }
            // Reseteo el indice
            _this.clienteEnfocadoIndex = -1;
        };
        this.buscandoCliente = false;
        this.findClientes = _.throttle(function (busqueda) {
            _this.buscandoCliente = true;
            _this.recursoService
                .getRecursoList(resoursesREST_1.resourcesREST.padron)({
                grupo: gruposParametros_1.default.cliente,
                elementos: busqueda,
            })
                .subscribe(function (clientes) {
                _this.clientes.filtrados.next(clientes);
                _this.buscandoCliente = false;
            });
        }, 400);
        /**
         * Agrega o elimina una forma pago de las seleccionadas. Tambien muestra detalle de la lista correspondiente
         */
        this.handleFormaPagoSelec = function (fp) { return function (tipoOperacion) {
            // Agrego o elimino
            if (tipoOperacion === "add") {
                if (fp.descripcion == "Canje" ||
                    fp.descripcion == "Dólar Abierto") {
                    _this.formasPagoSeleccionadas = [];
                    _this.formasPagoSeleccionadas.push(fp);
                    _this.disableRest = true;
                    if (_this.comprobante &&
                        _this.comprobante.tipo &&
                        _this.comprobante.tipo.idCteTipo &&
                        _this.comprobante.tipo.idCteTipo == 75) {
                        _this.esCanje = true;
                        _this.diferidoVto = true;
                        if (fp.idFormaPago == 12) {
                            _this.percep2459 = true;
                        }
                    }
                }
                else if (fp.descripcion == "Pesificado") {
                    _this.formasPagoSeleccionadas = [];
                    _this.formasPagoSeleccionadas.push(fp);
                    _this.disableRest = true;
                    if (_this.comprobante &&
                        _this.comprobante.tipo &&
                        _this.comprobante.tipo.idCteTipo &&
                        _this.comprobante.tipo.idCteTipo == 75) {
                        _this.esPesificado = true;
                    }
                }
                else {
                    // Primero los borro (si quedaorn de anbtes)
                    _this.formasPagoSeleccionadas =
                        _this.formasPagoSeleccionadas.filter(function (fpSelec) { return fpSelec.idFormaPago !== fp.idFormaPago; });
                    // Ahora los agrego
                    _this.formasPagoSeleccionadas.push(fp);
                }
            }
            else {
                _this.formasPagoSeleccionadas = _this.formasPagoSeleccionadas.filter(function (fpSelec) { return fpSelec.idFormaPago !== fp.idFormaPago; });
                _this.disableRest = false;
                _this.esCanje = false;
                _this.isAutorizada = false;
                _this.claveAutorizacion = null;
                _this.diferidoVto = false;
                _this.esPesificado = false;
                _this.percep2459 = false;
            }
            // Ahora mappeo los detalles de las formas de pago seleccionadas para mostrarlos en la grilla de el medio
            _this.tablas.datos.detallesFormaPago = _this.formasPagoSeleccionadas
                .map(function (fp) {
                return Object.assign([], fp.detalles).map(function (det) {
                    var auxDet = Object.assign({}, det);
                    auxDet.formaPagoDescrip = fp.descripcion;
                    // Seteo fechaPago
                    auxDet.fechaPago = new dateLikePicker_1.DateLikePicker(moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.fechaVto))
                        .add(auxDet.cantDias, "days")
                        .toDate());
                    //
                    return auxDet;
                });
            })
                .reduce(function (a, b) { return a.slice().concat(b.slice()); }, []); // Aca aplasto el array bidimensional a uno de una dimensión
        }; };
        /**
         * Actualizo subtotales
         */
        this.actualizarSubtotales = function (prod, options) {
            // Si busca pendientes..
            // if (prod.importe === 0 && this.tablas.datos.subtotalesProductos.length <= 0) {
            if (options === void 0) { options = { fromBuscaPendiente: false }; }
            if (options.fromBuscaPendiente && prod.importe === 0) {
                _this.tablas.datos.subtotalesProductos.push({
                    idProducto: prod.producto.idProductos,
                    subtotal: 0,
                    subtotalIva: 0,
                    numeroComp: prod.comprobante,
                    precioDesc: 0,
                    idFactDetalle: prod.idFactDetalle,
                });
            }
            else {
                // Obtengo el nuevo subtotal
                return _this.emisionRemitosService
                    .getCalculoSubtotales(prod)
                    .toPromise()
                    .then(function (nuevoSubtotal) {
                    // Checkeo si hay uno viejo
                    var viejoSubtotal = _this.tablas.datos.subtotalesProductos.find(function (s) { return prod.idFactDetalle === s.idFactDetalle; });
                    // Si hay uno viejo, lo edito. Si NO hay uno viejo, pusheo directamente el nuevo
                    if (viejoSubtotal) {
                        viejoSubtotal.subtotal = nuevoSubtotal.subtotal;
                        viejoSubtotal.subtotalIva = nuevoSubtotal.subtotalIva;
                        viejoSubtotal.precioDesc = nuevoSubtotal.precioDesc;
                    }
                    else {
                        _this.tablas.datos.subtotalesProductos.push(nuevoSubtotal);
                    }
                });
            }
        };
        /**
         * Actualiza el total en cotizacion y otros
         */
        this.actualizarDatosProductos = function (itemSelect) {
            if (_this.estadoRelacionadoObligatorio == true) {
                if (itemSelect > 0) {
                    if (itemSelect.pendiente > itemSelect.original) {
                        alert("Atención !!! No se puede modificar la cantidad del comprobante: El valor ingresado no puede ser mayor al valor Original");
                        itemSelect.pendiente = itemSelect.original;
                    }
                }
            }
            // Si viene un item es porque viene de onClickConfirm
            if (itemSelect) {
                // Actualizo subtotal, y dsps las facturas
                _this.actualizarSubtotales(itemSelect).then(function (resp) {
                    _this.fetchFacturas();
                    _this.actualizarTotalNeto();
                });
            }
            else {
                _this.fetchFacturas();
                _this.actualizarTotalNeto();
            }
        };
        this.actualizarTotalNeto = function () {
            // Es la suma de la columna subtotal (que ya tiene aplicado el descuento)
            _this.cotizacionDatos.total = _this.comprobante.tipo.comprobante
                .incluyeNeto
                ? _.sumBy(_this.tablas.datos.productosPend, function (prod) {
                    // Busco el subtotal
                    var subtotalBuscado = _this.tablas.datos.subtotalesProductos.find(function (st) { return st.idFactDetalle === prod.idFactDetalle; });
                    return subtotalBuscado && subtotalBuscado.subtotal
                        ? subtotalBuscado.subtotal
                        : 0;
                })
                : 0;
        };
        this.actualizarSumatoriaSubto = function () {
            _this.sumatoriaSubtotales =
                _this.comprobante &&
                    _this.comprobante.tipo &&
                    _this.comprobante.tipo.comprobante &&
                    _this.comprobante.tipo.comprobante.incluyeIva
                    ? _.sumBy(_this.tablas.datos.modelosFactura, function (fact) {
                        return Number(fact.importeTotal) ? Number(fact.importeTotal) : 0;
                    })
                    : 0;
        };
        /**
         * Actualiza la grilla de Trazable Lotes
         */
        this.actualizarTrazableLotes = function (prodToDelete) {
            // Agrego los lotes de los productos trazables a la grilla de trazabilidad lotes
            if (_this.tablas.datos.productosPend.length > 0) {
                _this.emisionRemitosService
                    .buscaLotes(_this.tablas.datos.productosPend)(_this.comprobante)
                    .subscribe(function (lotes) {
                    var nuevosLotes = lotes.filter(function (lotNew) {
                        return !_this.tablas.datos.lotesTraza.some(function (lotOld) { return lotOld.idLote === lotNew.idLote; });
                    });
                    _this.tablas.datos.lotesTraza =
                        _this.tablas.datos.lotesTraza.concat(nuevosLotes);
                    // Si se borró algún producto, borro sus lotes correspondientes
                    if (prodToDelete) {
                        _this.tablas.datos.lotesTraza =
                            _this.tablas.datos.lotesTraza.filter(
                            // TODO: Fijarse si está filtrando bien acá. Quizás filtrar por idFactDetalle
                            function (lot) {
                                return lot.idProducto ===
                                    prodToDelete.producto.idProducto;
                            });
                    }
                });
            }
            else {
                _this.tablas.datos.lotesTraza = [];
            }
        };
        /* verificoRelacionadoObligatorio = Si comprobantes relacionadoObligatorio esta en true, no dejo que se puedan agregar articulos porque
          se toman desde los comprobantes relacionados ya cargados (ejemplo remitos)
        */
        this.verificoRelacionadoObligatorio = function (val) {
            if (val == true) {
                return false;
            }
            else {
                return true;
            }
        };
        this.onChangeMoneda = function (monedas) {
            _this.listasPreciosUsuario = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.listaPrecios)({
                codPadron: _this.cliente.padronCodigo,
                codMoneda: monedas.idMoneda,
            });
        };
        /**
         * Trae data que depende del tipo comprobante relacionado
         * También limpia varios campos
         */
        this.onChangeTipoComprobante = function (cteTipoSelect) {
            _this.tiposComprobantesRel = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                sisModulo: sisModulos_1.default.venta,
                idCteTipo: cteTipoSelect.idCteTipo,
                sisTipoOperacion: _this.tipoOperacion.idSisTipoOperacion,
            });
            _this.listasPreciosUsuario = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.listaPrecios)({
                codPadron: _this.cliente.padronCodigo,
                codMoneda: 1,
            });
            //muestro titulo
            _this.tituloCardComprobante =
                "COMPROBANTE: " + cteTipoSelect.comprobante.descripcion;
            // Si trae observaciones, las seteo en el nuevo comprobante que se está creando
            _this.comprobante.observaciones =
                cteTipoSelect.comprobante && cteTipoSelect.comprobante.observaciones
                    ? cteTipoSelect.comprobante.observaciones
                    : null;
            _this.comprobante.numerador = null;
            _this.comprobante.moneda = null;
            _this.comprobante.letraCodigo = null;
            _this.disableRest = false;
            if (cteTipoSelect.comprobante.relacionadoObligatorio == undefined ||
                cteTipoSelect.comprobante.relacionadoObligatorio == false) {
                _this.estadoRelacionadoObligatorio = false;
            }
            else {
                _this.estadoRelacionadoObligatorio = true;
            }
            // Blanqueo todo lo que le sigue
            _this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
            _this.tablas.datos.productosPend = [];
            _this.tablas.datos.modelosFactura = [];
            _this.tablas.datos.detallesFormaPago = [];
            _this.tablas.datos.lotesTraza = [];
            // Limpio formas pago
            _this.dataTablaFormasPago = null;
            _this.formasPagoSeleccionadas = [];
            // Limpio lista pre
            _this.listaPrecioSelect = null;
            // Reinicio radio buttons
            _this.listasPreciosUsuario.subscribe(function (resp) {
                return resp.forEach(function (lp, ind) {
                    var e = document.getElementById("lp-radio-" + ind);
                    e.checked = false;
                });
            });
            // Limpio cotizacion datos
            _this.cotizacionDatos.total = 0;
            _this.sumatoriaSubtotales = 0;
            // Limpio subtotales
            _this.tablas.datos.subtotalesProductos = [];
            // Limpio datos canje
            _this.sisCanje = new sisCanje_1.SisCanje();
            _this.nroCopias = 3;
            if (_this.comprobante.tipo.idCteTipo == 75) {
                _this.buscarCerealesCanje();
                _this.buscaEstadosSisa(_this.cliente.padronCodigo);
            }
            // Actualizo monedas
            _this.monedas = cteTipoSelect.comprobante.monedas;
        };
        /**
         * Busca facturas
         */
        this.fetchFacturas = function () {
            // Busco las facturas de los productos
            if (_this.cliente &&
                _this.tipoOperacion &&
                _this.tablas.datos.productosPend &&
                _this.tablas.datos.productosPend.length > 0) {
                _this.emisionRemitosService
                    .buscaModelos(_this.tablas.datos.productosPend, _this.tablas.datos.subtotalesProductos, _this.comprobante.moneda
                    ? _this.comprobante.moneda.idMoneda
                    : null, _this.cliente.padronCodigo, _this.tipoOperacion.idSisTipoOperacion, _this.comprobante.tipo.idCteTipo, _this.estadoSisa, _this.percep2459)
                    .subscribe(function (modelProds) {
                    _this.tablas.datos.modelosFactura = modelProds;
                    _this.actualizarSumatoriaSubto();
                });
            }
            else {
                _this.tablas.datos.modelosFactura = [];
                _this.sumatoriaSubtotales = 0;
            }
        };
        /**
         * Cuyando cambia el tipo operacion se actualizan los tipos comprobantes
         */
        this.onChangeTipoOperacion = function (tipoOpSelect) {
            _this.recursoService
                .getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                sisTipoOperacion: tipoOpSelect.idSisTipoOperacion,
                sisSitIva: _this.cliente.condIva.descCorta,
            })
                .subscribe(function (data) {
                _this.tiposComprobantes = data;
            });
            _this.depositos = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.depositos)({
                todos: tipoOpSelect.depositoOrigen,
            });
            if (tipoOpSelect.idSisTipoOperacion == 4) {
                _this.emisionRemitosService
                    .buscarFacturasAnticipadas(_this.cliente.padronCodigo)
                    .subscribe(function (encabezados) {
                    if (encabezados.control.codigo == "OK" &&
                        encabezados.arraydatos.length > 0) {
                        var descripcion_1 = "";
                        encabezados.arraydatos.forEach(function (encabezado) {
                            encabezado.detalle.forEach(function (detalle) {
                                descripcion_1 +=
                                    detalle.articulo +
                                        " - " +
                                        detalle.pendiente +
                                        " unidades \n";
                            });
                        });
                        _this.utilsService.showModal("Este cliente tiene facturas anticipadas pendientes")(descripcion_1)()();
                    }
                });
            }
            // Limpio grilla articulos y afines
            _this.tablas.datos.productosPend = [];
            _this.tablas.datos.modelosFactura = [];
            _this.tablas.datos.detallesFormaPago = [];
            _this.tablas.datos.lotesTraza = [];
            _this.comprobante = new comprobante_1.Comprobante();
            _this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
            // Limpio cotizacion datos
            _this.cotizacionDatos.total = 0;
            _this.sumatoriaSubtotales = 0;
        };
        /**
         * Checkea si el resto a pagar es valido
         */
        this.isRestoPagarValid = function () {
            /**
             * El importe no es valido si es CERO y No se permite importe cero
             */
            var importeCeroValido = _this.comprobante &&
                _this.comprobante.tipo &&
                _this.comprobante.tipo.comprobante &&
                _this.cotizacionDatos.total + _this.sumatoriaSubtotales === 0 &&
                _this.comprobante.tipo.comprobante.permiteImporteCero;
            return importeCeroValido || _this.calcRestoPagar() === "0.00";
        };
        /**
         * Calcula el resto pagar
         */
        this.calcRestoPagar = function () {
            var sumMontos = _.sumBy(_this.tablas.datos.detallesFormaPago, function (fPago) { return (Number(fPago.monto) ? Number(fPago.monto) : 0); });
            // Los paréntesis son ilustrativos, ya sabemos que la suma es asociativa y conmutativa
            var restoPagar = _this.utilsService.toLocateString(Number(_this.cotizacionDatos.total +
                _this.sumatoriaSubtotales -
                sumMontos).toFixed(2));
            // const restoPagar = Number(
            //     (this.cotizacionDatos.total + this.sumatoriaSubtotales) - sumMontos
            // ).toFixed(2);
            return restoPagar === "-0.00" ||
                restoPagar === "-0.01" ||
                restoPagar === "0.01"
                ? "0.00"
                : restoPagar;
        };
        this.compareIvaSelect = function (i1, i2) {
            // if (i1 & i2)
            //     debugger;
        };
        this.onBlurCuit = function (ev) {
            // Si el cuit NO es valido
            if (_this.cliente.cuit &&
                _this.cliente.cuit.toString() &&
                !_this.utilsService.validarCuit(_this.cliente.cuit.toString())) {
                _this.utilsService.showModal("Error")("Cuit no válido")(function () {
                    _this.cliente.cuit = null;
                    document.getElementById("cuitCliente")
                        ? document.getElementById("cuitCliente").focus()
                        : null;
                })();
            }
        };
        this.disabledConfirmar = function () {
            var noPermiteImporteCero = _this.comprobante.tipo;
            /*&& this.cotizacionDatos &&
           this.comprobante.tipo.comprobante &&
            this.cotizacionDatos.total + this.sumatoriaSubtotales === 0 &&
            !this.comprobante.tipo.comprobante.permiteImporteCero;
*/
            var datosNoValidos = !_this.emisionRemitosService.checkIfDatosValidosComprobante(_this.comprobante)(_this.cliente)(_this.tablas.datos.productosPend)(_this.tablas.datos.modelosFactura)(_this.deposito)(_this.tablas.datos.lotesTraza);
            var formaPagoNoValido = _this.comprobante &&
                _this.comprobante.tipo &&
                _this.comprobante.tipo.requiereFormaPago &&
                (!_this.tablas.datos.detallesFormaPago ||
                    _this.tablas.datos.detallesFormaPago.length <= 0 ||
                    !_this.isRestoPagarValid());
            var relacionadoNoValido = _this.comprobante &&
                _this.comprobante.tipo &&
                /* (this.comprobante.tipo.idCteTipo == 77 || this.comprobante.tipo.idCteTipo == 76) &&*/
                (!_this.relacionadoConfirmado || !_this.factCabAfipRelacionado);
            return (datosNoValidos ||
                formaPagoNoValido ||
                noPermiteImporteCero ||
                relacionadoNoValido);
        };
        this.compareFnMonedas = function (m1, m2) {
            return m1 && m2 ? m1.idMoneda === m2.idMoneda : m1 === m2;
        };
        /**
         * Actualia formas de pago y productos seleccionables
         */
        this.onChangeListaPrecio = function (lp) {
            _this.listaPrecioSelect = lp;
            // Tabla forma de pago actualizo
            _this.dataTablaFormasPago = lp && lp.formasPago ? lp.formasPago : null;
            // Obtengo los productos que puede agregar a la venta
            _this.recursoService
                .getRecursoList(resoursesREST_1.resourcesREST.productosReducidos)({
                tipo: "reducida",
                listaPrecio: lp.idListaPrecio,
                aptoCanje: _this.tipoOperacion.canje,
                idDeposito: _this.deposito ? _this.deposito.idDeposito : null,
            })
                .subscribe(function (prods) {
                _this.productos.next(prods);
            });
            // Y limpio los productos que tenga agregado actualmente
            // this.tablas.datos.productosPend = [];
            // Si ya hay productos, los filtro por la lp seleccionada
            if (_this.tablas.datos.productosPend &&
                _this.tablas.datos.productosPend.length > 0) {
                _this.onClickBuscarPendientes();
                // this.tablas.datos.productosPend = this.tablas.datos.productosPend
                //     .filter(
                //         pp => pp.idListaPrecio === lp.idListaPrecio
                //     )
            }
        };
        this.fechaComprobanteInvalida = function () {
            return _this.comprobante.numerador &&
                _this.comprobante.numerador.fechaApertura &&
                _this.comprobante.numerador.fechaCierre &&
                !moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.fechaComprobante)).isBetween(moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.numerador.fechaApertura)), moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.numerador.fechaCierre)), "days", "[]");
        };
        this.onBlurPtoVentaCteRel = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobanteRelacionado.puntoVenta
                ? (_this.comprobanteRelacionado.puntoVenta =
                    _this.comprobanteRelacionado.puntoVenta.padStart(4, "0"))
                : null;
        };
        this.onBlurNumeradorCteRel = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobanteRelacionado.numero
                ? (_this.comprobanteRelacionado.numero =
                    _this.comprobanteRelacionado.numero.padStart(8, "0"))
                : null;
        };
        this.onBlurPtoVentaCtePes = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobantePesificado &&
                _this.comprobantePesificado.puntoVenta
                ? (_this.comprobantePesificado.puntoVenta =
                    _this.comprobantePesificado.puntoVenta.padStart(4, "0"))
                : null;
        };
        this.onBlurNumeradorCtePes = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobantePesificado &&
                _this.comprobantePesificado.numero
                ? (_this.comprobantePesificado.numero =
                    _this.comprobantePesificado.numero.padStart(8, "0"))
                : null;
        };
        this.onChangeLetra = function (letraSelect) {
            return (_this.comprobante.numerador =
                letraSelect &&
                    letraSelect.numeradores &&
                    letraSelect.numeradores.length > 0
                    ? letraSelect.numeradores[0]
                    : null);
        };
        this.onChangeContrato = function (cont) {
            _this.sisCanje = cont ? cont.sisCanje : null;
            _this.relacionesCanje = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.relacionesCanje)({
                idSisCanje: _this.sisCanje.idSisCanje,
            });
        };
        this.onChangeProductoCanje = function (sisCanje) {
            _this.relacionesCanje = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.relacionesCanje)({
                idSisCanje: sisCanje.idSisCanje,
            });
        };
        this.compareWithCanje = function (a, b) {
            return a.idSisCanje === b.idSisCanje;
        };
        this.compareWithContrato = function (a, b) {
            return a.idContratos === b.idContratos;
        };
        this.onClickConfirmCondiciones = function () {
            _this.condicionesConfirmadas = true;
        };
        this.onClickCancelarCondiciones = function () {
            _this.condicionesConfirmadas = false;
        };
        this.onClickConfirmRelacionado = function () {
            if (_this.numeroComprobanteAfipRelacionado &&
                _this.ptoVentaAfipRelacionado) {
                var stringNumeroComprobante = _this.numeroComprobanteAfipRelacionado.toString();
                _this.numeroAfipRelacionado = Number(_this.ptoVentaAfipRelacionado.toString() +
                    _.padStart(stringNumeroComprobante, 8, "0"));
                _this.emisionRemitosService
                    .getComprobanteAfip(_this.codigoAfipRelacionado, _this.numeroAfipRelacionado)
                    .subscribe(function (response) {
                    _this.idFactCabRelacionado = response.control.descripcionLarga;
                    _this.utilsService.showModal(response.control.codigo)(response.control.descripcion)()();
                    if (response.control.codigo == "OK") {
                        _this.relacionadoConfirmado = true;
                        _this.factCabAfipRelacionado = Number(response.control.descripcionLarga);
                    }
                });
            }
            else {
                _this.utilsService.showModal("Error")("Complete ambos campos para la búsqueda de comprobante");
            }
        };
        this.onClickCancelarRelacionado = function () {
            _this.relacionadoConfirmado = false;
        };
        this.onClickBuscarPesificado = function () {
            _this.emisionRemitosService
                .buscarComprobantesPesificacion(_this.comprobantePesificado.puntoVenta +
                _this.comprobantePesificado.numero)
                .subscribe(function (response) {
                if (response) {
                    _this.utilsService.showModal("OK")("Comprobante encontrado")()();
                    console.log(response);
                    var valorTotal21_1 = 0;
                    var valorTotal105_1 = 0;
                    _this.marcaPesificado = true;
                    _this.pesificadoPersisteSn = true;
                    _this.comprobantePesificadoInterno = response.numero;
                    if (response.cotDolar <
                        _this.cotizacionDatos.cotizacion.cotizacion) {
                        _this.comprobante.tipo =
                            _this.tiposComprobantes[_this.tiposComprobantes.findIndex(function (value) { return value.idCteTipo === 76; })];
                        _this.comprobante.letraCodigo =
                            _this.comprobante.tipo.letrasCodigos[0];
                        _this.onChangeLetra(_this.comprobante.letraCodigo);
                        //this.onChangeTipoComprobante(this.comprobante.tipo);
                        _this.monedas =
                            _this.comprobante.tipo.comprobante.monedas;
                        _this.comprobante.moneda =
                            _this.monedas[_this.monedas.findIndex(function (value) { return value.idMoneda === 1; })];
                        response.detalle.forEach(function (value) {
                            if (value.ivaPorc == 21) {
                                valorTotal21_1 =
                                    valorTotal21_1 +
                                        value.importe *
                                            (_this.cotizacionDatos.cotizacion
                                                .cotizacion -
                                                response.cotDolar);
                            }
                            else {
                                valorTotal105_1 =
                                    valorTotal105_1 +
                                        value.importe *
                                            (_this.cotizacionDatos.cotizacion
                                                .cotizacion -
                                                response.cotDolar);
                            }
                        });
                        if (response.diferidoVto) {
                            valorTotal21_1 = valorTotal21_1 + valorTotal21_1 * 0.21;
                            valorTotal105_1 =
                                valorTotal105_1 + valorTotal105_1 * 0.105;
                        }
                        _this.tablas.datos.productosPend.push(new productoPendiente_1.ProductoPendiente({
                            item: 0,
                            comprobante: "",
                            numero: "0",
                            original: 0,
                            pendiente: 1,
                            precio: valorTotal21_1 + valorTotal105_1,
                            dolar: 1,
                            moneda: " ",
                            porCalc: 0,
                            ivaPorc: 0,
                            deposito: 0,
                            idFactDetalleImputa: null,
                            idFactCabImputada: null,
                            descuento: 0,
                            tipoDescuento: "%",
                            cantBultos: 0,
                            despacho: "",
                            observaciones: "",
                            itemImputada: 0,
                            producto: {
                                idProductos: 1845,
                                codProducto: "999999",
                                codigoBarra: " ",
                                descripcionCorta: "AJUSTE X TC FAC. " +
                                    _this.comprobantePesificado.puntoVenta +
                                    _this.comprobantePesificado.numero +
                                    " - dolar " +
                                    response.cotDolar.toString(),
                                descripcion: "AJUSTE X TC FAC. " +
                                    _this.comprobantePesificado.puntoVenta +
                                    _this.comprobantePesificado.numero +
                                    " - dolar " +
                                    response.cotDolar.toString(),
                                aptoCanje: false,
                                stock: false,
                                trazable: false,
                                traReceta: false,
                                traInforma: false,
                                gtin: " ",
                                puntoPedido: "0.00",
                                costoReposicion: "0.00",
                                precioVentaProv: "0.00",
                                observaciones: " ",
                                IVA: {
                                    idIVA: 1,
                                    porcIVA: 21,
                                },
                                subRubro: null,
                                rubro: null,
                                unidadCompra: null,
                                unidadVenta: null,
                                editar: false,
                                modeloCab: null,
                                marca: null,
                                cultivos: [],
                                moneda: null,
                            },
                            codigoListaPrecio: null,
                            idListaPrecio: null,
                            importe: valorTotal21_1 + valorTotal105_1,
                            idFactDetalle: "abc",
                            modeloCab: null,
                            diferenciaPrecio: 0,
                            recargo: 0,
                            recargoTotal: 0,
                            diasLibres: 0,
                            diasResultantes: 0,
                            cotaInferior: 0,
                            cotaSuperior: 0,
                        }));
                        _this.tablas.datos.productosPend[0].imputacion.seleccionada =
                            new modeloDetalle_1.ModeloDetalle({
                                idModeloDetalle: 585,
                                orden: 2,
                                descripcion: "IVA",
                                dh: "S",
                                prioritario: false,
                                operador: "*",
                                valor: 21,
                                ctaContable: "200281",
                                planCuenta: {
                                    planCuentas: null,
                                    planDescripcion: null,
                                },
                                sisModulo: 2,
                                tipoModelo: 2,
                                libro: {
                                    idLibro: 29,
                                },
                            });
                        _this.tablas.datos.productosPend[0].imputacion.seleccionada.idSisTipoModelo = 2;
                        _this.tablas.datos.subtotalesProductos.push({
                            idProducto: 1845,
                            subtotal: valorTotal21_1 + valorTotal105_1,
                            subtotalIva: valorTotal21_1 +
                                valorTotal105_1 +
                                valorTotal21_1 * 0.21 +
                                valorTotal105_1 * 0.21,
                            numeroComp: "000000000000",
                            precioDesc: 0,
                            idFactDetalle: "abc",
                        });
                        _this.tablas.datos.modelosFactura.push({
                            cuentaContable: "200281",
                            descripcion: "IVA",
                            importeTotal: valorTotal21_1 * 0.21,
                            porcentaje: 21,
                            idSisTipoModelo: 2,
                            baseImponible: valorTotal21_1,
                            operador: "*",
                            idLibro: 29,
                        });
                        _this.tablas.datos.modelosFactura.push({
                            cuentaContable: "200283",
                            descripcion: "IVA 10,5",
                            importeTotal: valorTotal105_1 * 0.105,
                            porcentaje: 10.5,
                            idSisTipoModelo: 2,
                            baseImponible: valorTotal105_1,
                            operador: "*",
                            idLibro: 29,
                        });
                        _this.tablas.datos.lotesTraza = [];
                        _this.actualizarSumatoriaSubto();
                        _this.actualizarTotalNeto();
                        //this.actualizarDatosProductos();
                    }
                    else if (response.cotDolar >
                        _this.cotizacionDatos.cotizacion.cotizacion) {
                        _this.comprobante.tipo =
                            _this.tiposComprobantes[_this.tiposComprobantes.findIndex(function (value) { return value.idCteTipo === 77; })];
                        _this.comprobante.letraCodigo =
                            _this.comprobante.tipo.letrasCodigos[0];
                        _this.onChangeLetra(_this.comprobante.letraCodigo);
                        //this.onChangeTipoComprobante(this.comprobante.tipo);
                        _this.comprobante.moneda =
                            _this.monedas[_this.monedas.findIndex(function (value) { return value.idMoneda === 1; })];
                        response.detalle.forEach(function (value) {
                            if (value.ivaPorc == 21) {
                                valorTotal21_1 =
                                    valorTotal21_1 +
                                        value.importe *
                                            (response.cotDolar -
                                                _this.cotizacionDatos.cotizacion
                                                    .cotizacion);
                            }
                            else {
                                valorTotal105_1 =
                                    valorTotal105_1 +
                                        value.importe *
                                            (response.cotDolar -
                                                _this.cotizacionDatos.cotizacion
                                                    .cotizacion);
                            }
                        });
                        if (response.diferidoVto) {
                            valorTotal21_1 = valorTotal21_1 + valorTotal21_1 * 0.21;
                            valorTotal105_1 =
                                valorTotal105_1 + valorTotal105_1 * 0.105;
                        }
                        _this.tablas.datos.productosPend.push(new productoPendiente_1.ProductoPendiente({
                            item: 0,
                            comprobante: "",
                            numero: "0",
                            original: 0,
                            pendiente: 1,
                            precio: valorTotal21_1 + valorTotal105_1,
                            dolar: 1,
                            moneda: " ",
                            porCalc: 0,
                            ivaPorc: 0,
                            deposito: 0,
                            idFactDetalleImputa: null,
                            idFactCabImputada: null,
                            descuento: 0,
                            tipoDescuento: "%",
                            cantBultos: 0,
                            despacho: "",
                            observaciones: "",
                            itemImputada: 0,
                            producto: {
                                idProductos: 1845,
                                codProducto: "999999",
                                codigoBarra: " ",
                                descripcionCorta: "AJUSTE X TC FAC. " +
                                    _this.comprobantePesificado.puntoVenta +
                                    _this.comprobantePesificado.numero +
                                    " - dolar " +
                                    response.cotDolar.toString(),
                                descripcion: "AJUSTE X TC FAC. " +
                                    _this.comprobantePesificado.puntoVenta +
                                    _this.comprobantePesificado.numero +
                                    " - dolar " +
                                    response.cotDolar.toString(),
                                aptoCanje: false,
                                stock: false,
                                trazable: false,
                                traReceta: false,
                                traInforma: false,
                                gtin: " ",
                                puntoPedido: "0.00",
                                costoReposicion: "0.00",
                                precioVentaProv: "0.00",
                                observaciones: " ",
                                IVA: {
                                    idIVA: 1,
                                    porcIVA: 21,
                                },
                                subRubro: null,
                                rubro: null,
                                unidadCompra: null,
                                unidadVenta: null,
                                editar: false,
                                modeloCab: null,
                                marca: null,
                                cultivos: [],
                                moneda: null,
                            },
                            codigoListaPrecio: null,
                            idListaPrecio: null,
                            importe: valorTotal21_1 + valorTotal105_1,
                            idFactDetalle: "abc",
                            modeloCab: null,
                            diferenciaPrecio: 0,
                            recargo: 0,
                            recargoTotal: 0,
                            diasLibres: 0,
                            diasResultantes: 0,
                            cotaInferior: 0,
                            cotaSuperior: 0,
                        }));
                        _this.tablas.datos.productosPend[0].imputacion.seleccionada =
                            new modeloDetalle_1.ModeloDetalle({
                                idModeloDetalle: 585,
                                orden: 2,
                                descripcion: "IVA",
                                dh: "S",
                                prioritario: false,
                                operador: "*",
                                valor: 21,
                                ctaContable: "200281",
                                planCuenta: {
                                    planCuentas: null,
                                    planDescripcion: null,
                                },
                                sisModulo: 2,
                                tipoModelo: 2,
                                libro: {
                                    idLibro: 29,
                                },
                            });
                        _this.tablas.datos.productosPend[0].imputacion.seleccionada.idSisTipoModelo = 2;
                        _this.tablas.datos.subtotalesProductos.push({
                            idProducto: 1845,
                            subtotal: valorTotal21_1 + valorTotal105_1,
                            subtotalIva: valorTotal21_1 +
                                valorTotal105_1 +
                                valorTotal21_1 * 0.21 +
                                valorTotal105_1 * 0.21,
                            numeroComp: "000000000000",
                            precioDesc: 0,
                            idFactDetalle: "abc",
                        });
                        _this.tablas.datos.modelosFactura.push({
                            cuentaContable: "200281",
                            descripcion: "IVA",
                            importeTotal: valorTotal21_1 * 0.21,
                            porcentaje: 21,
                            idSisTipoModelo: 2,
                            baseImponible: valorTotal21_1,
                            operador: "*",
                            idLibro: 29,
                        });
                        _this.tablas.datos.modelosFactura.push({
                            cuentaContable: "200283",
                            descripcion: "IVA 10,5",
                            importeTotal: valorTotal105_1 * 0.105,
                            porcentaje: 10.5,
                            idSisTipoModelo: 2,
                            baseImponible: valorTotal105_1,
                            operador: "*",
                            idLibro: 29,
                        });
                        _this.tablas.datos.lotesTraza = [];
                        _this.actualizarSumatoriaSubto();
                        _this.actualizarTotalNeto();
                    }
                    else {
                        _this.utilsService.showModal("ERROR")("Las cotizaciones son iguales")()();
                    }
                }
                else {
                    _this.utilsService.showModal("ERROR")("No se encontró el comprobante")()();
                }
            });
        };
        this.getCantidadCanjeReferencia = function () {
            return _this.comprobante &&
                _this.comprobante.tipo &&
                _this.comprobante.tipo.comprobante &&
                _this.comprobante.tipo.comprobante.usaRelacion
                ? _this.relacionCanje &&
                    _this.tablas.datos.productosPend &&
                    _this.tablas.datos.productosPend.length > 0
                    ? _.sumBy(_this.tablas.datos.productosPend, function (prod) {
                        return Number(prod.pendiente);
                    }) * _this.relacionCanje.factor
                    : 0
                : _this.utilsService.parseDecimalNumber(Number(_this.utilsService.parseDecimal(_this.cotizacionDatos.total)) / _this.sisCanje.precio);
        };
        this.preCargaPadron = "Cargando clientes, espere...";
        this.statusCargaPadron = false;
        this.recursoService
            .getRecursoList(resoursesREST_1.resourcesREST.padron)({
            grupo: gruposParametros_1.default.cliente,
        })
            .subscribe(function (todos) {
            // this.proveedores.todos = proveedores;
            _this.cliente = todos;
            _this.preCargaPadron = "Cliente";
            _this.statusCargaPadron = true;
        });
        this.sisSitIvas = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisSitIva)();
        this.tiposOperacion = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisTipoOperacion)({
            sisModulo: sisModulos_1.default.venta,
        });
        this.tiposOperacion = this.tiposOperacion.map(function (tiposOp) {
            return tiposOp.filter(function (tipoOp) {
                return tipoOp.idSisTipoOperacion == 4 ||
                    tipoOp.idSisTipoOperacion == 10;
            });
        });
        // this.depositos = this.recursoService.getRecursoList(resourcesREST.depositos)({
        //     todos:
        // });
        this.sisCanjes = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisCanjes)();
        // this.listasPreciosUsuario = this.recursoService.getRecursoList(resourcesREST.listaPrecios)();
        ////////// Tablas //////////
        this.tablas.columnas.columnasProductos =
            emisionRemitosService.getColumnsProductos();
        this.tablas.columnas.columnasTrazabilidad =
            emisionRemitosService.getColumnsTrazabilidad();
        this.tablas.columnas.columnasCanje =
            emisionRemitosService.getColumnsCanje();
        this.tablas.columnas.columnasDetallesFp =
            emisionRemitosService.getColumnsDetallesFp();
        this.tablas.columnas.columnasFactura =
            emisionRemitosService.getColumnsFactura();
        this.tablas.columnas.columnasRecargo =
            emisionRemitosService.getColumnsRecargo();
        ////////// Otros //////////
        this.emisionRemitosService
            .getCotizacionDatos()
            .subscribe(function (cotizDatos) { return (_this.cotizacionDatos.cotizacion = cotizDatos); });
        this.tiposComprobantesFactura = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
            sisComprobante: 3,
        });
    }
    EmisionRemitos.prototype.canDeactivate = function () {
        return this.emisionRemitosService.checkPendingChanges(this.comprobante)(this.factura)(this.cliente)(this.comprobanteRelacionado);
    };
    /**
     * Evento que se dispara cuando se selecciona una fecha de emision
     */
    EmisionRemitos.prototype.onModelChangeFechaComp = function (e, d) {
        // Actualizo fecha (sobretodo si el formato es 'ddmm')
        this.comprobante.fechaComprobante =
            this.utilsService.stringToDateLikePicker(this.comprobante.fechaComprobante);
    };
    /**
     * Evento que se dispara cuando se selecciona una fecha de vencimiento
     */
    EmisionRemitos.prototype.onModelChangeFechaVto = function (e, d) {
        // Actualizo fecha (sobretodo si el formato es 'ddmm')
        this.comprobante.fechaVto = this.utilsService.stringToDateLikePicker(this.comprobante.fechaVto);
        if (!this.comprobante.fechaComprobante) {
            this.comprobante.fechaVto = null;
            this.utilsService.showModal("Error")("Ingrese primero la fecha de emisión")()();
        }
        else if (!(this.comprobante.fechaVto.year >
            this.comprobante.fechaComprobante.year ||
            (this.comprobante.fechaVto.year ==
                this.comprobante.fechaComprobante.year &&
                this.comprobante.fechaVto.month >
                    this.comprobante.fechaComprobante.month) ||
            (this.comprobante.fechaVto.year ==
                this.comprobante.fechaComprobante.year &&
                this.comprobante.fechaVto.month ==
                    this.comprobante.fechaComprobante.month &&
                this.comprobante.fechaVto.day >=
                    this.comprobante.fechaComprobante.day))) {
            this.comprobante.fechaVto = null;
            this.utilsService.showModal("Error")("La fecha de vencimiento debe ser igual o posterior a la de emisión")()();
        }
    };
    return EmisionRemitos;
}());
__decorate([
    core_1.HostListener("window:beforeunload"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmisionRemitos.prototype, "canDeactivate", null);
EmisionRemitos = __decorate([
    core_1.Component({
        selector: "emision-remitos",
        template: __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/emisionRemitos.html"),
        styles: [__webpack_require__("./src/app/pages/main/ventas/emisionRemitos/emisionRemitos.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof emisionRemitosService_1.EmisionRemitosService !== "undefined" && emisionRemitosService_1.EmisionRemitosService) === "function" && _b || Object, typeof (_c = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _c || Object, typeof (_d = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _d || Object, typeof (_e = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _e || Object, typeof (_f = typeof global_state_1.GlobalState !== "undefined" && global_state_1.GlobalState) === "function" && _f || Object, typeof (_g = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _g || Object, typeof (_h = typeof contratosService_1.ContratosService !== "undefined" && contratosService_1.ContratosService) === "function" && _h || Object])
], EmisionRemitos);
exports.EmisionRemitos = EmisionRemitos;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=emisionRemitos.component.js.map

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/emisionRemitos.html":
/***/ (function(module, exports) {

module.exports = "<meta http-equiv=\"Cache-Control\" content=\"no-cache, no-store, must-revalidate\">\r\n<meta http-equiv=\"Pragma\" content=\"no-cache\">\r\n<meta http-equiv=\"Expires\" content=\"0\">\r\n<ba-card class=\"emision-remitos\">\r\n\r\n    <form #ventForm=\"ngForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\">\r\n                    <label for=\"cliente\">{{preCargaPadron}}</label>\r\n                <div class=\"form-group  inline-group\">\r\n                    <div class=\"cliente-input-container\" style=\"display: flex; flex-direction: column \">\r\n\r\n                        <input autocomplete=\"off\" #emiRemInput\r\n                            id=\"clienteSeleccionado\"\r\n                            (blur)=\"onBlurInputCliente($event)\"\r\n                            (ngModelChange)=\"onChangeInputCliente($event)\"\r\n                            required\r\n                            name=\"clPadCod\"\r\n                            [disabled]=\"!statusCargaPadron\"\r\n                            [(ngModel)]=\"cliente.padronCodigo\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                            (keyup.enter)=\"onEnterInputProv($event)\" (keydown.arrowdown)=\"keyPressInputTexto($event)('down')\"\r\n                            (keydown.arrowup)=\"keyPressInputTexto($event)('up')\"\r\n\r\n                            >\r\n                        <div\r\n                            class=\"spinner-container\"\r\n                            *ngIf=\"\r\n                                utilsService.ifFocused(emiRemInput)\r\n                                &&\r\n                                (\r\n                                    !cliente ||\r\n                                    !cliente.padronApelli\r\n                                )\r\n                                &&\r\n                                cliente.padronCodigo && cliente.padronCodigo.length > 0\r\n                                &&\r\n                                buscandoCliente\r\n                            \">\r\n                            <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <popup-lista\r\n                *ngIf=\"utilsService.ifFocused(emiRemInput)\"\r\n                [items]=\"clientes.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['padronApelli', 'padronNombre', 'padronCodigo']\"\r\n                [onClickItem]=\"onClickPopupCliente\"\r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('clienteSeleccionado')\"\r\n                >\r\n            </popup-lista>\r\n\r\n            <div class=\"col-sm-3\">\r\n                    <label for=\"nombreCliente\">Razón</label>\r\n                <div class=\"form-group\">\r\n                    <input autocomplete=\"off\" disabled name=\"clPadApe\" type=\"text\" class=\"form-control\"\r\n                        id=\"nombreCliente\" placeholder=\"{{cliente.padronApelli ? cliente.padronApelli + ', ' + cliente.padronNombre : null}}\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-2\">\r\n                    <label for=\"cuit\">CUIT</label>\r\n                <div class=\"form-group inline-group\">\r\n\r\n                    <!-- <input autocomplete=\"off\" name=\"clCuit\" (blur)=\"onBlurCuit($event)\" [disabled]=\"disabledClienteCustom\" [(ngModel)]=\"cliente.cuit\" -->\r\n                    <input autocomplete=\"off\" disabled name=\"clCuit\" (blur)=\"onBlurCuit($event)\" [(ngModel)]=\"cliente.cuit\"\r\n                        type=\"text\" class=\"form-control\" id=\"cuitCliente\" placeholder=\"\">\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div *ngIf=\"disabledClienteCustom\" class=\"col-sm-1\"> -->\r\n            <div class=\"col-sm-1\">\r\n                    <label for=\"cuit\">IVA</label>\r\n                <div class=\"form-group inline-group\">\r\n\r\n                    <!-- <input autocomplete=\"off\" name=\"clDscCort\" disabled [(ngModel)]=\"cliente.condIva.descCorta\" type=\"text\" class=\"form-control\" id=\"cuit\" -->\r\n                    <input autocomplete=\"off\" name=\"clDscCort\" disabled [ngModel]=\"cliente.condIva ? cliente.condIva.descCorta : ''\" type=\"text\" class=\"form-control\" id=\"cuit\"\r\n                        placeholder=\"\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-2\">\r\n                <label for=\"tipoOperacionSelect\">Tipo Operacion:</label>\r\n                <div class=\"form-group inline-group\">\r\n\r\n                    <select\r\n                        id=\"tipoOperacionSelect\"\r\n                        class=\"form-control without-padding\"\r\n                        required name=\"clTipOp\"\r\n                        [(ngModel)]=\"tipoOperacion\"\r\n                        (ngModelChange)=\"onChangeTipoOperacion($event)\"\r\n                        [ngStyle]=\"{padding: '0px 8px 0px 8px'}\"\r\n                        >\r\n                        <option *ngFor=\"let tipoOp of tiposOperacion | async\" [ngValue]=\"tipoOp\">\r\n                            {{tipoOp.descripcion}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-2\">\r\n                 <label class=\"add-item-label\" for=\"depositoInput\">Deposito: </label>\r\n                <div class=\"form-group inline-group\">\r\n\r\n                    <select required [compareWith]=\"utilsService.dropdownCompareWith\" name=\"clDep\" [(ngModel)]=\"deposito\" class=\"form-control without-padding\">\r\n                        <option *ngFor=\"let dep of depositos | async\" [ngValue]=\"dep\">\r\n                            {{dep.descripcion}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"\r\n            dataVendedor.vendedor &&\r\n            dataVendedor.vendedor.idVendedor &&\r\n            dataVendedor.vendedor.idVendedor !== 1\r\n        \" class=\"row\">\r\n            <div class=\"input-vend\">\r\n                <label for=\"idInputVendedor\">Vendedor:</label>\r\n                <input autocomplete=\"off\" disabled name=\"clAuxNomCom\" [(ngModel)]=\"dataVendedor.vendedor.auxNombreCompleto\" type=\"text\" class=\"form-control\"\r\n                    id=\"idInputVendedor\">\r\n            </div>\r\n            <div class=\"checkbox-vend\">\r\n                <ba-checkbox name=\"clDtVenInc\" [(ngModel)]=\"dataVendedor.incluir\" [label]=\"'Incluir'\" [ngModelOptions]=\"{standalone: true}\"></ba-checkbox>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row custom-card-container\">\r\n            <custom-card class=\"col-sm-5\" title=\"{{ tituloCardComprobante }}\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-sm-4\">\r\n                        <div class=\"form-group inline-group\">\r\n                            <label for=\"cteTipo\">Cte:</label>\r\n                            <select required name=\"clCompTip\" [(ngModel)]=\"comprobante.tipo\"\r\n                                    (ngModelChange)=\"onChangeTipoComprobante($event)\"\r\n                                class=\"form-control without-padding\" [ngStyle]=\"{padding: '1px 8px 0px 8px'}\" id=\"cteTipo\">\r\n                                <option *ngFor=\"let tipoComp of tiposComprobantes\" [ngValue]=\"tipoComp\">\r\n                                    {{ tipoComp.descCorta }} {{ tipoComp.comprobante.referencia }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-1\" style=\"padding: 0;\">\r\n                        <div class=\"form-group inline-group\">\r\n                            <select *ngIf=\"comprobante && comprobante.tipo && comprobante.tipo.letrasCodigos\" required\r\n                                name=\"letraSelct\"\r\n                                [(ngModel)]=\"comprobante.letraCodigo\"\r\n                                (ngModelChange)=\"onChangeLetra($event)\"\r\n                                class=\"form-control without-padding\"\r\n                                id=\"letraCodId\"\r\n                                >\r\n                                <option *ngFor=\"let lc of comprobante.tipo.letrasCodigos\" [ngValue]=\"lc\">\r\n                                    {{ lc.letra.letra }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-7\">\r\n                        <div *ngIf=\"!(\r\n                            comprobante.letraCodigo && comprobante.letraCodigo.numeradores\r\n                        )\" class=\"form-group inline-group\">\r\n                            <label for=\"cteNro\">Nro:</label>\r\n                            <select required [(ngModel)]=\"comprobante.numerador\" id=\"selectPtoVentaNum\" class=\"form-control\" [ngStyle]=\"{padding: '1px 8px 0px 8px'}\" name=\"clCompNro\">\r\n                                <option [ngValue]=\"null\">\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"\r\n                            comprobante.letraCodigo && comprobante.letraCodigo.numeradores\r\n                        \" class=\"form-group inline-group\">\r\n                            <label for=\"cteNro\">Nro:</label>\r\n\r\n                            <select\r\n                                required id=\"selectPtoVentaNum\" class=\"form-control\"\r\n                                [ngStyle]=\"{padding: '1px 8px 0px 8px'}\"\r\n                                name=\"clCompNro\"\r\n                                [(ngModel)]=\"comprobante.numerador\">\r\n                                <option *ngFor=\"let upNum of comprobante.letraCodigo.numeradores\" [ngValue]=\"upNum\">\r\n                                    {{\r\n                                    upNum.ptoVenta.ptoVenta.toString().padStart(4, '0')\r\n                                    }} - {{\r\n                                    upNum.numerador.toString().padStart(8, '0')\r\n                                    }}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <!-- <div class=\"col-sm-5\"></div> -->\r\n                    <div class=\"col-sm-5\">\r\n                        <div class=\"form-group inline-group\">\r\n                            <label for=\"cteMoneda\">Moneda:</label>\r\n                            <select\r\n                                required\r\n                                [compareWith]=\"compareFnMonedas\"\r\n                                name=\"compMoneda\"\r\n                                [(ngModel)]=\"comprobante.moneda\"\r\n                                (ngModelChange)=\"onChangeMoneda($event)\"\r\n                                class=\"form-control without-padding\" [ngStyle]=\"{padding: '2px 8px 0px 8px'}\" id=\"cteMoneda\">\r\n                                <option *ngFor=\"let mon of monedas\" [ngValue]=\"mon\">\r\n                                    {{mon.descripcion}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-7\">\r\n                        <div class=\"form-group inline-group last-child-custom-card\">\r\n                            <label for=\"fechaComprobante\">Emisión: </label>\r\n                            <div class=\"input-group\">\r\n                                <!-- Deshabilito la fecha si NÓ está seleccionado el cliente, el tipo comprobante y seteado el ptoventa -->\r\n                                <input autocomplete=\"off\" required\r\n                                    (blur)=\"onBlurFechaComprobante($event)\"\r\n                                    (keyup.enter)=\"onBlurFechaComprobante($event)\"\r\n                                    class=\"form-control\"\r\n                                    placeholder=\"dd/mm/aaaa\"\r\n                                    name=\"dp1\" [(ngModel)]=\"comprobante.fechaComprobante\"\r\n                                    ngbDatepicker (ngModelChange)=\"onModelChangeFechaComp($event, dComp)\" #dComp=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"dComp.toggle()\" type=\"button\"\r\n                                        style=\"height: 100%;\">\r\n                                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-7\">\r\n                        <div class=\"form-group inline-group last-child-custom-card\">\r\n                            <label for=\"fechaVencimiento\">Vencimiento: </label>\r\n                            <div class=\"input-group\">\r\n                                <!-- Deshabilito la fecha si NÓ está seleccionado el cliente, el tipo comprobante y seteado el ptoventa -->\r\n                                <input autocomplete=\"off\" required\r\n                                    (blur)=\"onBlurFechaVencimiento($event)\"\r\n                                    (keyup.enter)=\"onBlurFechaVencimiento($event)\"\r\n                                    class=\"form-control\"\r\n                                    placeholder=\"dd/mm/aaaa\"\r\n                                    name=\"dp2\" [(ngModel)]=\"comprobante.fechaVto\"\r\n                                    ngbDatepicker (ngModelChange)=\"onModelChangeFechaVto($event, dVto)\" #dVto=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"dVto.toggle()\" type=\"button\"\r\n                                        style=\"height: 100%;\">\r\n                                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                    <div class=\"each-input\">\r\n                        <label for=\"nroCopias\">Nº Copias:</label>\r\n                        <select\r\n                            required\r\n                            class=\"form-control without-padding cond-cotiza copias-select\"\r\n                            name=\"nroCopias\"\r\n                            [(ngModel)]=\"nroCopias\"\r\n                            id=\"nroCopias\">\r\n                            <option [ngValue]=\"1\">\r\n                                1\r\n                            </option>\r\n                            <option [ngValue]=\"2\">\r\n                                2\r\n                            </option>\r\n                            <option [ngValue]=\"3\">\r\n                                3\r\n                            </option>\r\n                            <option [ngValue]=\"4\">\r\n                                4\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-4\" *ngIf=\"comprobante && comprobante.tipo && comprobante.tipo.idCteTipo && comprobante.tipo.requiereClaveAutorizacion == true\">\r\n\r\n                            <div class=\"each-input\">\r\n                                <label for=\"claveAutorizacion\">Clave</label>\r\n                             <input [(ngModel)]=\"claveAutorizacion\" id = \"claveAutorizacion\"\r\n                             name=\"claveAutorizacion\"\r\n                             (ngModelChange)=\"changeClave()\"\r\n                             class=\"\"\r\n                             type=\"password\"\r\n                             class=\"form-control edit-input size-control\"  >\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </custom-card>\r\n\r\n            <ngb-tabset [destroyOnHide]=false class=\"col-sm-7 tabs-forma-pago\">\r\n                <ngb-tab title=\"Forma de Pago\">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"fpago-content\">\r\n                            <table class=\"fpago-lista-precio-tab\">\r\n                                <tr class=\"table-header\">\r\n                                    <th></th>\r\n                                    <th>Lista Precio</th>\r\n                                    <th>Condiciones</th>\r\n                                </tr>\r\n\r\n                                <tr *ngFor=\"let lp of listasPreciosUsuario | async; index as indLp; last as isLast\">\r\n                                    <td>\r\n                                        <input autocomplete=\"off\"\r\n                                            [attr.id]=\"'lp-radio-' + indLp\"\r\n                                            type=\"radio\"\r\n                                            name=\"lista-radio\"\r\n                                            [value]=\"lp\"\r\n                                            (change)=\"\r\n                                                onChangeListaPrecio(lp)\r\n                                            \"/>\r\n                                    </td>\r\n                                    <td>{{ lp.codigoLista }}</td>\r\n                                    <td>{{ lp.condiciones }}</td>\r\n                                </tr>\r\n                            </table>\r\n\r\n                            <tabla-forma-pago\r\n                                class=\"fpago-tabla\"\r\n                                [dataTable]=\"dataTablaFormasPago\"\r\n                                [disableRest]=\"disableRest\"\r\n                                (onAddSelecFormaPago)=\"handleFormaPagoSelec($event)('add')\"\r\n                                (onRemoveSelecFormaPago)=\"handleFormaPagoSelec($event)('remove')\">\r\n                            </tabla-forma-pago>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Cereal\" [disabled]=\"(comprobante && comprobante.tipo && comprobante.tipo.idCteTipo && comprobante.tipo.idCteTipo != 75) || !(esCanje)\">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"canje-padding\">\r\n                            <div class=\"form-group inline-group\">\r\n                                <div class=\"each-input\"><label for=\"estadoSisa\">Estado Sisa:</label>\r\n                                    <select\r\n                                        required\r\n                                        class=\"form-control without-padding cond-cotiza\"\r\n                                        name=\"estadoSisa\"\r\n                                        [(ngModel)]=\"estadoSisa\"\r\n                                        id=\"estadoSisa\">\r\n                                        <option *ngFor=\"let estado of estadosSisa\" [ngValue]=\"estado\">\r\n                                            {{estado.codEstado}} - {{estado.percepIva}}%\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group inline-group\">\r\n                                <div class=\"each-input\"><label for=\"cereal\">Cereal:</label>\r\n                                    <select\r\n                                        required\r\n                                        class=\"form-control without-padding cond-cotiza\"\r\n                                        name=\"cereal\"\r\n                                        [(ngModel)]=\"cereal\"\r\n                                        id=\"cereal\">\r\n                                        <option *ngFor=\"let cereal of cereales\" [ngValue]=\"cereal.cerealCodigo.cerealCodigo\">\r\n                                            {{cereal.cerealCodigo.cerealCodigo}} - {{cereal.cerealCodigo.nombre}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--<div class=\"canje-container\">\r\n                            <div class=\"canje-content\">\r\n                                <div class=\"canje-item\">\r\n                                    <label for=\"tipoCompra\">Contrato:</label>\r\n                                    <select\r\n                                        name=\"clsisContra\"\r\n                                        [(ngModel)]=\"contrato\"\r\n                                        [disabled]=\"\r\n                                            (!tipoOperacion || tipoOperacion.canje !== true) ||\r\n                                            (comprobante && comprobante.tipo && comprobante.tipo.comprobante && !comprobante.tipo.comprobante.usaContrato)\r\n                                        \"\r\n                                        (ngModelChange)=\"onChangeContrato($event)\"\r\n                                        class=\"form-control without-padding\" id=\"selectContrato\">\r\n\r\n                                        <option [ngValue]=\"null\">Ninguno</option>\r\n                                        <option *ngFor=\"let con of contratos | async\" [ngValue]=\"con\">\r\n                                            {{ con.contratoNro }}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n\r\n\r\n\r\n                                <div class=\"canje-item\">\r\n                                    <label for=\"tipoCompra\">Producto:</label>\r\n                                    <select\r\n                                        [disabled]=\"\r\n                                            (comprobante && comprobante.tipo && comprobante.tipo.comprobante && comprobante.tipo.comprobante.usaContrato)\r\n                                            &&\r\n                                            (\r\n                                                (!tipoOperacion || tipoOperacion.canje !== true)\r\n                                                ||\r\n                                                contrato\r\n                                            )\r\n                                        \"\r\n                                        [compareWith]=\"compareWithCanje\"\r\n                                        (ngModelChange)=\"onChangeProductoCanje($event)\"\r\n                                        name=\"clsisCnj\"\r\n                                        [(ngModel)]=\"sisCanje\"\r\n                                        class=\"form-control without-padding\" id=\"selectCanje\">\r\n                                        <option *ngFor=\"let canje of sisCanjes | async\" [ngValue]=\"canje\">\r\n                                            {{ canje.descripcion }}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                                <div    *ngIf=\"\r\n                                            comprobante && comprobante.tipo &&\r\n                                            comprobante.tipo.comprobante &&\r\n                                            comprobante.tipo.comprobante.usaRelacion\r\n                                        \"\r\n                                        class=\"canje-item\">\r\n                                    <label for=\"selectRelCanje\">Relaciones:</label>\r\n                                    <select\r\n                                        name=\"relCanjeName\"\r\n                                        [(ngModel)]=\"relacionCanje\"\r\n                                        class=\"form-control without-padding\" id=\"selectRelCanje\">\r\n\r\n                                        <option *ngFor=\"let rc of relacionesCanje | async\" [ngValue]=\"rc\">\r\n                                            {{ rc.descripcion }}, {{ rc.factor }}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"canje-content\">\r\n                                <div class=\"canje-item\">\r\n\r\n                                    <label  class=\"precio-ref\">Precio Ref: </label>\r\n                                    <label>{{ sisCanje && sisCanje.precio ? utilsService.parseDecimal(sisCanje.precio) : ''}}</label>\r\n                                </div>\r\n                                <div class=\"canje-item fecha-item\">\r\n\r\n                                    <label  for=\"fechaVto\">Fec Vto: </label>\r\n                                    <label>{{\r\n                                        contrato && contrato.idContratos ?\r\n                                        utilsService.prettyDate(contrato.fechaVto)\r\n                                        :\r\n                                        utilsService.dateToString(sisCanje.fechaVto)\r\n                                    }}</label>\r\n                                </div>\r\n                                <div class=\"canje-item\">\r\n                                    <label  for=\"interes\">Interes:</label>\r\n                                    <label>{{sisCanje.interes}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>-->\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Comprobante Relacionado\">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"cte-rel-container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group inline-group\">\r\n                                        <label for=\"cteRelTipo\">Cte:</label>\r\n\r\n                                        <select id=\"cteRelSelect\" name=\"clCompRelTi\" [(ngModel)]=\"comprobanteRelacionado.tipo\" class=\"form-control without-padding\"\r\n                                            [ngStyle]=\"{padding: '2px 8px 0px 8px'}\" id=\"cteRelTipo\">\r\n                                            <option *ngFor=\"let tipoComp of tiposComprobantesRel | async\" [ngValue]=\"tipoComp\">\r\n                                                {{tipoComp.descripcion}}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group inline-group\">\r\n                                        <label for=\"cteNro\">Nro:</label>\r\n                                        <input autocomplete=\"off\" [attr.disabled]=\"comprobanteRelacionado.todosLosPendientes ? '' : null\"\r\n                                            (blur)=\"onBlurPtoVentaCteRel($event)\"\r\n                                            maxlength=\"4\"\r\n                                            [(ngModel)]=\"comprobanteRelacionado.puntoVenta\"\r\n                                            type=\"text\" class=\"form-control pre-numero-input\"\r\n                                            name=\"clPtoVentRel\"\r\n                                            id=\"puntoVenta\" placeholder=\"\">\r\n                                        <input autocomplete=\"off\" [attr.disabled]=\"comprobanteRelacionado.todosLosPendientes ? '' : null\"\r\n                                            (blur)=\"onBlurNumeradorCteRel($event)\"\r\n                                            maxlength=\"8\"\r\n                                            name=\"clNroRel\"\r\n                                            [(ngModel)]=\"comprobanteRelacionado.numero\" type=\"text\" class=\"form-control\"\r\n                                            id=\"numero\" placeholder=\"\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"checkbox-todoPendiente\">\r\n                                        <ba-checkbox\r\n                                            name=\"clTodsPends\"\r\n                                            [(ngModel)]=\"comprobanteRelacionado.todosLosPendientes\"\r\n                                            [label]=\"'Todos los pendientes'\"\r\n                                            [ngModelOptions]=\"{standalone: true}\"\r\n                                            [disabled]=\"\r\n                                                comprobante && comprobante.tipo &&\r\n                                                comprobante.tipo.comprobante && !comprobante.tipo.comprobante.relacionadosMultiples\r\n                                            \"\r\n                                            >\r\n                                        </ba-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <ba-checkbox\r\n                                            name=\"preservarPrevios\"\r\n                                            [(ngModel)]=\"preservarPrevios\"\r\n                                            [label]=\"'Preservar artículos previos'\"\r\n                                            [disabled]=\"\r\n                                            false\r\n                                            \"\r\n                                            >\r\n                                    </ba-checkbox>\r\n                                </div>\r\n\r\n                                <div class=\"col-sm-3 btn-container\">\r\n                                    <button\r\n                                        [disabled]=\"\r\n                                            !comprobanteRelacionado.todosLosPendientes &&\r\n                                            !(\r\n                                                comprobanteRelacionado.puntoVenta &&\r\n                                                comprobanteRelacionado.numero\r\n                                            )\r\n                                            ||\r\n                                            !(\r\n                                                cliente &&\r\n                                                cliente.padronCodigo\r\n                                            )\r\n                                            || (comprobante && comprobante.tipo && comprobante.tipo.idCteTipo && comprobante.tipo.idCteTipo == 75 && formasPagoSeleccionadas && formasPagoSeleccionadas.length == 1 && formasPagoSeleccionadas[0].descripcion == 'Canje' && !cereal)\r\n                                        \"\r\n                                        (click)=\"onClickBuscarPendientes()\"\r\n                                        type=\"submit\" class=\"btn btn-primary\">\r\n                                        Buscar\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Pesificación\">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"cte-rel-container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group inline-group\">\r\n                                        <label for=\"dolarPesificacion\">Cot. Dólar:</label>\r\n                                        <input autocomplete=\"off\"\r\n                                            [(ngModel)]=\"cotizacionDatos.cotizacion.cotizacion\"\r\n                                            type=\"number\" class=\"form-control pre-numero-input\"\r\n                                            name=\"dolarPesificacion\"\r\n                                            id=\"dolarPesificacion\">\r\n                                    </div>\r\n                                    <div class=\"form-group inline-group\">\r\n                                        <label for=\"pesificadoNro\">Nro:</label>\r\n                                        <input autocomplete=\"off\"\r\n                                            (blur)=\"onBlurPtoVentaCtePes($event)\"\r\n                                            maxlength=\"4\"\r\n                                            [(ngModel)]=\"comprobantePesificado.puntoVenta\"\r\n                                            type=\"text\" class=\"form-control pre-numero-input\"\r\n                                            name=\"clPtoVentPes\"\r\n                                            id=\"puntoVentaPesificado\" placeholder=\"\">\r\n                                        <input autocomplete=\"off\"\r\n                                            (blur)=\"onBlurNumeradorCtePes($event)\"\r\n                                            maxlength=\"8\"\r\n                                            name=\"clNroPes\"\r\n                                            [(ngModel)]=\"comprobantePesificado.numero\" type=\"text\" class=\"form-control\"\r\n                                            id=\"numeroPesificado\" placeholder=\"\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                                <div class=\"col-sm-3 btn-container\">\r\n                                    <button\r\n                                        [disabled]=\"\r\n                                            !(\r\n                                                comprobantePesificado.puntoVenta &&\r\n                                                comprobantePesificado.numero\r\n                                            )\r\n                                        \"\r\n                                        (click)=\"onClickBuscarPesificado()\"\r\n                                        type=\"submit\" class=\"btn btn-primary\">\r\n                                        Pesificar\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n            </ngb-tabset>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <ngb-tabset [destroyOnHide]=false class=\"col-sm-12 tabs-ingreso\">\r\n                <ngb-tab title=\"Articulos\">\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <tabla-emision-rem  [data]=\"tablas.datos.productosPend\"\r\n                                            [columns]=\"tablas.columnas.columnasProductos\"\r\n                                            [remove]=\"onClickRemove\"\r\n                                            [edit]=\"onClickEdit('columnasProductos')\"\r\n                                            [confirmEdit]=\"onClickConfirmEdit('columnasProductos')\"\r\n                                            [onClickProductoLista]=\"onClickProductoLista\"\r\n                                            [enableAddItem]=\"verificoRelacionadoObligatorio(estadoRelacionadoObligatorio)\"\r\n                                            [subtotales]=\"tablas.datos.subtotalesProductos\"\r\n                                            [productosObservable]=\"productos\"\r\n                                            [comprobante]=\"comprobante\"\r\n                                            [checkPrecio]=\"false\"\r\n                                            [claveAutorizacion]=\"isAutorizada\">\r\n                        </tabla-emision-rem>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Trazable Lotes\">\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <tabla-emision-rem  [data]=\"tablas.datos.lotesTraza\"\r\n                                            [columns]=\"tablas.columnas.columnasTrazabilidad\"\r\n                                            [edit]=\"onClickEdit('columnasTrazabilidad')\"\r\n                                            [confirmEdit]=\"onClickConfirmEdit('columnasTrazabilidad')\">\r\n                        </tabla-emision-rem>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Forma Pago\">\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <tabla-emision-rem [data]=\"tablas.datos.detallesFormaPago\" [columns]=\"tablas.columnas.columnasDetallesFp\"\r\n                            [edit]=\"onClickEdit('columnasDetallesFp')\" [confirmEdit]=\"onClickConfirmEdit('columnasDetallesFp')\">\r\n                        </tabla-emision-rem>\r\n\r\n                        <div class=\"resto-pagar\">\r\n                            <label class=\"resto-pagar-content\">Resto Pagar: {{ calcRestoPagar() }}</label>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Canje Referencia\">\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <table *ngIf=\"sisCanje\" class=\"table-canje-referencia\">\r\n                            <tr>\r\n                                <td>Articulo</td>\r\n                                <td style=\"text-align: right\">Cantidad</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{ sisCanje.descripcion }}</td>\r\n                                <td style=\"text-align: right\">{{\r\n                                    getCantidadCanjeReferencia()\r\n                                }}</td>\r\n                            </tr>\r\n                        </table>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n\r\n                <ngb-tab title=\"\">\r\n                    <ng-template ngbTabTitle>\r\n                        <div>Subtotales</div>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <div *ngIf=\"comprobante.tipo && comprobante.tipo.comprobante.idSisComprobantes === 6\" class=\"row factura-filters\">\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group inline-group\">\r\n                                    <label for=\"cteTipo\">Cte:</label>\r\n                                    <select [compareWith]=\"utilsService.dropdownCompareWith\" required name=\"clFactTip\" [(ngModel)]=\"factura.tipo\" class=\"form-control without-padding\" [ngStyle]=\"{padding: '1px 8px 0px 8px'}\"\r\n                                        id=\"cteTipo\">\r\n                                        <option *ngFor=\"let tipoComp of tiposComprobantesFactura | async\" [ngValue]=\"tipoComp\">\r\n                                            {{tipoComp.descCorta}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"factura && factura.tipo && factura.tipo.letrasCodigos\" class=\"col-sm-1\">\r\n                                <div class=\"form-group inline-group\">\r\n                                    <select required name=\"clFactLetra\" [(ngModel)]=\"factura.letraCodigo\" class=\"form-control\" id=\"cteTipoFactura\">\r\n                                        <option *ngFor=\"let lcf of factura.tipo.letrasCodigos\" [ngValue]=\"lcf\">\r\n                                            {{ lcf.letra.letra }}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-2\">\r\n\r\n                                <div *ngIf=\"!(factura.tipo && factura.tipo.numerador)\" class=\"form-group inline-group\">\r\n                                    <label for=\"cteNro\">Nro:</label>\r\n                                    <select required disabled id=\"selectPtoVentaNumFac\" class=\"form-control\" [ngStyle]=\"{padding: '1px 8px 0px 8px'}\" name=\"clCompNro\">\r\n                                        <option [ngValue]=\"null\">\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"factura.tipo && factura.tipo.numerador\" class=\"form-group inline-group\">\r\n                                    <label for=\"selectPtoVentaNumFac\">Nro:</label>\r\n\r\n                                    <select required id=\"selectPtoVentaNumFac\" class=\"form-control\" [ngStyle]=\"{padding: '1px 8px 0px 8px'}\"\r\n                                        name=\"factNro\" [(ngModel)]=\"factura.numerador\">\r\n                                        <option *ngFor=\"let upNum of factura.tipo.numerador\" [ngValue]=\"upNum\">\r\n                                            {{\r\n                                            upNum.ptoVenta.ptoVenta.toString().padStart(4, '0')\r\n                                            }} - {{\r\n                                            upNum.ptoVenta.ptoVenta.toString().padStart(8, '0')\r\n                                            }}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group inline-group last-child-custom-card\">\r\n                                    <label for=\"fechaComprobante\">Fecha Contable</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input autocomplete=\"off\"\r\n                                            (blur)=\"factura.fechaComprobante = utilsService.stringToDateLikePicker(factura.fechaComprobante)\"\r\n                                            (keyup.enter)=\"onCalculateFecha($event)('fechaContable')('factura')\" class=\"form-control\"\r\n                                            placeholder=\"dd/mm/aaaa\" name=\"dp3\" [(ngModel)]=\"factura.fechaComprobante\"\r\n                                            ngbDatepicker\r\n                                            #dComp=\"ngbDatepicker\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <button class=\"btn btn-outline-secondary\" (click)=\"dComp.toggle()\" type=\"button\"\r\n                                                style=\"height: 100%;\">\r\n                                                <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group inline-group last-child-custom-card\">\r\n                                    <label for=\"fechaVto\">Fecha Vto</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input autocomplete=\"off\"\r\n                                            (blur)=\"factura.fechaVto = utilsService.stringToDateLikePicker(factura.fechaVto)\"\r\n                                            (keyup.enter)=\"onCalculateFecha($event)('fechaVto')('factura')\"\r\n                                            id=\"fechaVtoFactura\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp4\"\r\n                                            [(ngModel)]=\"factura.fechaVto\" ngbDatepicker #dVto=\"ngbDatepicker\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <button class=\"btn btn-outline-secondary\" (click)=\"dVto.toggle()\" type=\"button\"\r\n                                                style=\"height: 100%;\">\r\n                                                <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"subtotales-container\">\r\n                            <!-- <div class=\"subtotales-titulo\">\r\n                                <p>Subtotales</p>\r\n                            </div> -->\r\n\r\n                            <div class=\"subtotales-content\">\r\n                                <tabla-emision-rem\r\n                                    [data]=\"tablas.datos.modelosFactura\"\r\n                                    [columns]=\"tablas.columnas.columnasFactura\"\r\n                                    [edit]=\"onClickEdit('columnasFactura')\"\r\n                                    [confirmEdit]=\"onClickConfirmEdit('columnasFactura')\"\r\n                                    [comprobante]=\"comprobante\"\r\n                                    [tablaSubtotales]=\"true\"\r\n                                    >\r\n                                </tabla-emision-rem>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Canje cereales\"\r\n                [disabled]=\"\r\n                        !(comprobante && comprobante.tipo && comprobante.tipo.idCteTipo && comprobante.tipo.idCteTipo == 75 && esCanje)\r\n                    \">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"container\">\r\n                            <div class=\"each-input check\">\r\n                                <input [disabled]=\"condicionesConfirmadas\" class=\"align-check\" name=\"diferidoVto\" [(ngModel)]=\"diferidoVto\" type=\"checkbox\">Diferir total del comprobante al vencimiento\r\n                            </div>\r\n                            <!--<div class=\"each-input\"><label for=\"cereal\">Cereal:</label>\r\n                                <select\r\n                                    [disabled]=\"condicionesConfirmadas\"\r\n                                    required\r\n                                    class=\"form-control without-padding cond-cotiza\"\r\n                                    name=\"cereal\"\r\n                                    [(ngModel)]=\"cereal\"\r\n                                    id=\"cereal\">\r\n                                    <option *ngFor=\"let cereal of cereales\" [ngValue]=\"cereal.cerealCodigo.cerealCodigo\">\r\n                                        {{cereal.cerealCodigo.cerealCodigo}} - {{cereal.cerealCodigo.nombre}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>-->\r\n                            <div class=\"col-sm-12 btn-container-2\">\r\n                                <button\r\n                                        name=\"confirmaCondiciones\"\r\n                                        [disabled]=\"condicionesConfirmadas\"\r\n                                        (click)=\"onClickConfirmCondiciones()\"\r\n                                        class=\"btn btn-primary btn-ingreso-from btn-space\"\r\n                                        >\r\n                                    Confirmar\r\n                                </button>\r\n\r\n                                <button [disabled]=\"!condicionesConfirmadas\" (click)=\"onClickCancelarCondiciones()\" class=\"btn btn-primary btn-space btn-ingreso-from\">\r\n                                    Cancelar\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Recargo Canje\" [disabled]=\"\r\n                !(comprobante && comprobante.tipo && comprobante.tipo.idCteTipo && comprobante.tipo.idCteTipo == 75 && esCanje)\r\n            \">\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <tabla-emision-rem  [data]=\"tablas.datos.productosPend\"\r\n                                            [columns]=\"tablas.columnas.columnasRecargo\"\r\n                                            [onClickProductoLista]=\"onClickProductoLista\"\r\n                                            [subtotales]=\"tablas.datos.subtotalesProductos\"\r\n                                            [productosObservable]=\"productos\"\r\n                                            [comprobante]=\"comprobante\">\r\n                        </tabla-emision-rem>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Comprobante Autorizado\"\r\n                [disabled]=\"\r\n                        !(\r\n                        comprobante &&\r\n                        comprobante.tipo &&\r\n                        (comprobante.tipo.idCteTipo == 77\r\n                         || comprobante.tipo.idCteTipo == 76))\r\n                    \">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"container\">\r\n                            <div class=\"each-input same-line\">\r\n                                <div>Tipo de comprobante: </div>\r\n                                <select\r\n                                    [disabled]=\"relacionadoConfirmado\"\r\n                                    required\r\n                                    class=\"form-control without-padding cond-cotiza\"\r\n                                    name=\"codigoAfipRelacionado\"\r\n                                    [(ngModel)]=\"codigoAfipRelacionado\"\r\n                                    id=\"codigoAfipRelacionado\">\r\n                                    <option *ngFor=\"let cbte of cbtesAfip\" [ngValue]=\"cbte.codigoAfip\">\r\n                                        {{cbte.codigoAfip}} - {{cbte.descripcion}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"each-input same-line\">\r\n                                <div>Número del comprobante autorizado:</div>\r\n\r\n                                <input [disabled]=\"relacionadoConfirmado\" class=\"form-control max-length-half\" name=\"ptoVentaAfipRelacionado\" [(ngModel)]=\"ptoVentaAfipRelacionado\" type=\"number\">\r\n                                <input [disabled]=\"relacionadoConfirmado\" class=\"form-control max-length\" name=\"numeroComprobanteAfipRelacionado\" [(ngModel)]=\"numeroComprobanteAfipRelacionado\" type=\"number\">\r\n                            </div>\r\n                            <!--<div class=\"each-input\"><label for=\"cereal\">Cereal:</label>\r\n                                <select\r\n                                    [disabled]=\"condicionesConfirmadas\"\r\n                                    required\r\n                                    class=\"form-control without-padding cond-cotiza\"\r\n                                    name=\"cereal\"\r\n                                    [(ngModel)]=\"cereal\"\r\n                                    id=\"cereal\">\r\n                                    <option *ngFor=\"let cereal of cereales\" [ngValue]=\"cereal.cerealCodigo.cerealCodigo\">\r\n                                        {{cereal.cerealCodigo.cerealCodigo}} - {{cereal.cerealCodigo.nombre}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>-->\r\n                            <div class=\"col-sm-12 btn-container-2\">\r\n                                <button\r\n                                        name=\"relacionadoConfirmado\"\r\n                                        [disabled]=\"relacionadoConfirmado\"\r\n                                        (click)=\"onClickConfirmRelacionado()\"\r\n                                        class=\"btn btn-primary btn-ingreso-from btn-space\"\r\n                                        >\r\n                                    Confirmar\r\n                                </button>\r\n\r\n                                <button [disabled]=\"!relacionadoConfirmado\" (click)=\"onClickCancelarRelacionado()\" class=\"btn btn-primary btn-space btn-ingreso-from\">\r\n                                    Cancelar\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n\r\n                </ngb-tab>\r\n\r\n\r\n            </ngb-tabset>\r\n\r\n            <custom-card *ngIf=\"statusPreciosCotas || statusPorcentajeCotas  \"  class=\"col-sm-12 card-observaciones card-flex-column-reverse\" title=\"Validaciones\">\r\n\r\n                <div *ngIf=\"statusPreciosCotas\"  class=\"col-sm-12 tabs-ingreso;\" >\r\n                    <div class=\"statusCotas\"><li> {{statusPreciosCotas}}</li></div>\r\n                </div>\r\n                <div *ngIf=\"statusPorcentajeCotas\"  class=\"col-sm-12 tabs-ingreso;\" >\r\n                    <div class=\"statusCotas\"><li> {{statusPorcentajeCotas}}</li></div>\r\n                </div>\r\n            </custom-card>\r\n\r\n\r\n        </div>\r\n        <br>\r\n        <div class=\"row custom-card-container\">\r\n            <custom-card class=\"col-sm-5 card-observaciones card-flex-column-reverse\" title=\"Observaciones\">\r\n                <textarea name=\"clObser\" [(ngModel)]=\"comprobante.observaciones\" class=\"form-control text-area-observaciones\" id=\"observaciones\"></textarea>\r\n            </custom-card>\r\n\r\n            <div class=\"col-sm-5 card-total card-flex-column-reverse\">\r\n\r\n                <custom-card class=\" \" title=\"Totales\">\r\n                    <div class=\"card-total-content\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div>\r\n                                    <label class=\"titulo-cotizacion\">Cotizacion Dolar: </label>\r\n                                    <label>{{cotizacionDatos.cotizacion.cotizacion}}</label>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div id=\"fechaComprobante\">\r\n                                    <label class=\"titulo-cotizacion\">Fecha: </label>\r\n                                    <label>{{cotizacionDatos.cotizacion.fechaCotizacion | date:'dd/MM/yyyy'}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"row\">\r\n                            <div class=\"total-comprobante col-sm-6\">\r\n                                <label class=\"titulo-cotizacion\">Total Comprobante: </label>\r\n                                <label>{{cotizacionDatos.total}}</label>\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"total-comprobante col-sm-6 total-item\">\r\n                                <label class=\"titulo-cotizacion\">Total Neto: </label>\r\n                                <label>{{utilsService.parseDecimal(cotizacionDatos.total)}}</label>\r\n                            </div>\r\n\r\n                            <div class=\"total-comprobante col-sm-6 total-item\">\r\n                                <label class=\"titulo-cotizacion\">Total Cte: </label>\r\n                                <label>{{utilsService.parseDecimal(cotizacionDatos.total + sumatoriaSubtotales)}}</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </custom-card>\r\n            </div>\r\n<!-- [disabled]=\"disabledConfirmar()\" -->\r\n            <custom-card class=\"col-sm-2 card-flex-column-reverse\" title=\"\">\r\n                <div class=\"col-sm-12 btn-container\">\r\n                    <button [disabled]=\"disabledConfirmar()\" (click)=\"onClickConfirmar()\" class=\"btn btn-primary btn-ingreso-from\">\r\n                        Confirmar\r\n                    </button>\r\n                    <button (click)=\"onClickCancelar()\" class=\"btn btn-primary btn-ingreso-from\">\r\n                        Cancelar\r\n                    </button>\r\n                </div>\r\n            </custom-card>\r\n        </div>\r\n    </form>\r\n</ba-card>\r\n\r\n\r\n<div *ngIf=\"grabandoPorcentaje !== 0\" class=\"spinner-container-2\">\r\n    <p class=\"title\">\r\n        Guardando Comprobante\r\n    </p>\r\n    <p><ngb-progressbar [value]=\"grabandoPorcentaje\" type=\"info\"></ngb-progressbar></p>\r\n</div>\r\n\r\n<div *ngIf=\"grabandoPorcentajeAfip !== 0\"  class=\"spinner-container-2\">\r\n    <p class=\"title\">\r\n        Autorizando comprobante en afip, aguarde un momento\r\n    </p>\r\n    <p><ngb-progressbar [value]=\"grabandoPorcentajeAfip\" type=\"info\"></ngb-progressbar></p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/emisionRemitos.scss":
/***/ (function(module, exports) {

module.exports = ".emision-remitos {\n  font-size: 11px; }\n  .emision-remitos .col-sm-3 {\n    -webkit-box-flex: 0px;\n        -ms-flex: 0px;\n            flex: 0px;\n    min-width: 25%; }\n  .emision-remitos .checkbox-todoPendiente {\n    padding-left: 5%; }\n  .emision-remitos .statusCotas {\n    color: red;\n    padding-bottom: 0px; }\n  .emision-remitos .tabs-ingreso {\n    padding: 1.5%; }\n  .emision-remitos .tabs-ingreso .subtotales-container {\n      padding: 0 5% 1%; }\n  .emision-remitos .tabs-ingreso .subtotales-container .subtotales-titulo {\n        font-size: 1rem; }\n  .emision-remitos .tabs-ingreso .subtotales-container .subtotales-content {\n        border-radius: 7px;\n        background: #d4d4de; }\n  .emision-remitos .tabs-ingreso .subtotales-container .subtotales-content td {\n          border-top: 0px !important; }\n  .emision-remitos .tabs-ingreso .resto-pagar {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n  .emision-remitos .tabs-ingreso .resto-pagar .resto-pagar-content {\n        padding: 5px 3px 3px; }\n  .emision-remitos .lista-filtrada-proveedores {\n    position: absolute;\n    z-index: 9999999;\n    /* opacity: 0; */\n    top: 81px;\n    left: 77px; }\n  .emision-remitos .tipo-compra-dropdown {\n    padding: 0 2%;\n    margin-bottom: 1px; }\n  .emision-remitos .custom-card .custom-card-content .inline-group .without-padding {\n    padding: 2px 8px 0px 8px !important; }\n  .emision-remitos .custom-card .custom-card-content .observaciones {\n    margin-bottom: 2px; }\n  .emision-remitos .custom-card-container .card-observaciones .observaciones {\n    padding: 1%; }\n  .emision-remitos .custom-card-container .card-total .card-total-content {\n    padding: 1.7%; }\n  .emision-remitos .custom-card-container .card-total .deposito {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .emision-remitos .custom-card-container .card-total .deposito div {\n      margin-bottom: 5px;\n      width: 50%; }\n  .emision-remitos .btn-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .emision-remitos .btn-container .btn-ingreso-from {\n      float: none;\n      margin: 7% 0; }\n  .emision-remitos .total-comprobante {\n    padding-top: 2%; }\n  .emision-remitos .titulo-cotizacion {\n    font-weight: bold; }\n  .emision-remitos .card-flex-column-reverse {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  .emision-remitos .pre-numero-input {\n    width: 30%;\n    margin-right: 3px; }\n  .emision-remitos .tabs-forma-pago .fpago-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .emision-remitos .tabs-forma-pago .fpago-content .fpago-tabla {\n      width: 30%; }\n  .emision-remitos .tabs-forma-pago .fpago-content .txt-area-container {\n      width: 48%; }\n  .emision-remitos .tabs-forma-pago .fpago-content .txt-area-container .text-area-forma-pago {\n        height: 78px;\n        color: #000;\n        font-size: 0.8rem; }\n  .emision-remitos .tabs-forma-pago .fpago-content .fpago-lista-precio-tab {\n      width: 70%; }\n  .emision-remitos .tabs-forma-pago .fpago-content .fpago-lista-precio-tab .table-header {\n        background: #b8b8bd; }\n  .emision-remitos .tabs-forma-pago .fpago-content .fpago-lista-precio-tab tr:nth-child(even) {\n        background: #cacad2; }\n  .emision-remitos .tabs-forma-pago .fpago-content .fpago-lista-precio-tab td {\n        padding: 2px; }\n  .emision-remitos .tabs-forma-pago .fpago-content .fpago-lista-precio-tab td .checkbox-td {\n          display: block;\n          margin: 2px; }\n  .emision-remitos .tabs-forma-pago .canje-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 0% 1.4%;\n    padding: 7px 7px 2px; }\n  .emision-remitos .tabs-forma-pago .canje-container .canje-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n  .emision-remitos .tabs-forma-pago .canje-container .canje-content .canje-item {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 40%; }\n  .emision-remitos .tabs-forma-pago .canje-container .canje-content .canje-item label {\n          white-space: nowrap;\n          margin: 5px 4px 4px;\n          padding-top: 4px; }\n  .emision-remitos .tabs-forma-pago .canje-container .canje-content .canje-item input, .emision-remitos .tabs-forma-pago .canje-container .canje-content .canje-item select {\n          margin: 4px 0;\n          max-height: 25px; }\n  .emision-remitos .tabs-forma-pago .canje-container .canje-content .fecha-item input {\n        margin: 0;\n        max-height: 30px; }\n  .emision-remitos .tabs-forma-pago .canje-container :first-child {\n      margin-bottom: 2%; }\n  .emision-remitos .tabs-forma-pago .cte-rel-container {\n    padding: 1% 2% 2%; }\n  .emision-remitos .input-vend {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 2px 14px 10px;\n    font-size: 0.7rem; }\n  .emision-remitos .input-vend > label {\n      margin-right: 10px;\n      margin: 0;\n      padding: 5px 7px 1px 1px; }\n  .emision-remitos .checkbox-vend {\n    padding: 4px 2px 0px; }\n  .emision-remitos .spinner-container {\n    padding-top: 5.3px;\n    right: 21px;\n    position: absolute; }\n  .emision-remitos .table-canje-referencia {\n    width: 98%;\n    margin: 9px 13px; }\n  .emision-remitos .table-canje-referencia tr:first-child {\n      background: #d4d4de;\n      font-weight: bold;\n      margin: 5px; }\n  .emision-remitos .table-canje-referencia tr td {\n      padding: 5px; }\n  .container {\n  padding-left: 1.5rem; }\n  .each-input {\n  margin-bottom: 5px; }\n  .cond-cotiza {\n  display: inline;\n  width: 8rem !important; }\n  .same-line {\n  display: fleX;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .max-length {\n  width: 8rem; }\n  .canje-padding {\n  padding: 5px; }\n  .modal-body {\n  white-space: pre-line; }\n  .modal-sm {\n  max-width: 400px !important; }\n  .copias-select {\n  width: 10px !important;\n  padding: 0px 8px; }\n  .max-length-half {\n  width: 4rem; }\n  .check {\n  display: block;\n  padding-left: 15px;\n  text-indent: -15px; }\n  .align-check {\n  width: 13px;\n  height: 13px;\n  padding: 0;\n  margin: 0;\n  vertical-align: bottom;\n  position: relative;\n  top: -1px;\n  *overflow: hidden; }\n  .without-padding {\n  padding: 0; }\n  .inline-flex {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n  .btn-container-2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row; }\n  .btn-space {\n  margin-left: 10px; }\n  :host /deep/ .emision-remitos .tabs-ingreso .tab-content {\n  padding: 2px 0px !important; }\n  .spinner-container-2 {\n  position: absolute;\n  top: 40%;\n  left: 23%;\n  display: block;\n  min-width: 47%;\n  z-index: 9999;\n  background: #d4d4dede;\n  padding: 3%;\n  border-radius: 12px; }\n  .spinner-container-2 .title {\n    text-align: center;\n    font-size: 1rem;\n    padding-bottom: 3px;\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n  .alert-danger {\n  background-color: #f44336;\n  /* Red */ }\n  .alert-success {\n  background-color: #36f456; }\n  .alert {\n  padding: 20px;\n  color: white;\n  margin-bottom: 15px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/pages/main/ventas/emisionRemitos/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/ventas/emisionRemitos/emisionRemitos.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/ventas/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/ventas/ventas.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/ventas/ventas.component.ts":
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
var Ventas = (function () {
    function Ventas() {
    }
    return Ventas;
}());
Ventas = __decorate([
    core_1.Component({
        selector: 'ventas',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], Ventas);
exports.Ventas = Ventas;
//# sourceMappingURL=ventas.component.js.map

/***/ }),

/***/ "./src/app/pages/main/ventas/ventas.module.ts":
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
var ventas_routing_1 = __webpack_require__("./src/app/pages/main/ventas/ventas.routing.ts");
var _1 = __webpack_require__("./src/app/pages/main/ventas/index.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var SharedModule_1 = __webpack_require__("./src/app/pages/main/SharedModule.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var PendingChangesGuard_1 = __webpack_require__("./src/app/guards/PendingChangesGuard.ts");
var emisionRemitos_1 = __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/index.ts");
var emisionRemitosService_1 = __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/emisionRemitosService.ts");
var tablaEmisionRem_component_1 = __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/components/tablaEmisionRem/tablaEmisionRem.component.ts");
var tablaFormaPago_1 = __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/components/tablaFormaPago/index.ts");
var contratosService_1 = __webpack_require__("./src/app/services/contratosService.ts");
var filesService_1 = __webpack_require__("./src/app/services/filesService.ts");
var VentasModule = (function () {
    function VentasModule() {
    }
    return VentasModule;
}());
VentasModule = __decorate([
    core_1.NgModule({
        imports: [
            ventas_routing_1.routing,
            ng_bootstrap_1.NgbTabsetModule,
            SharedModule_1.SharedModule,
            ng_bootstrap_1.NgbProgressbarModule
        ],
        declarations: [
            _1.Ventas,
            tablaEmisionRem_component_1.TablaEmisionRem,
            tablaFormaPago_1.TablaFormaPago,
            emisionRemitos_1.EmisionRemitos
        ],
        providers: [
            recursoService_1.RecursoService,
            authService_1.AuthService,
            utilsService_1.UtilsService,
            emisionRemitosService_1.EmisionRemitosService,
            contratosService_1.ContratosService,
            PendingChangesGuard_1.PendingChangesGuard,
            filesService_1.FilesService
        ],
        exports: [
            tablaEmisionRem_component_1.TablaEmisionRem,
            tablaFormaPago_1.TablaFormaPago
        ]
    })
], VentasModule);
exports.VentasModule = VentasModule;
//# sourceMappingURL=ventas.module.js.map

/***/ }),

/***/ "./src/app/pages/main/ventas/ventas.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var _1 = __webpack_require__("./src/app/pages/main/ventas/index.ts");
var emisionRemitos_1 = __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/index.ts");
var PendingChangesGuard_1 = __webpack_require__("./src/app/guards/PendingChangesGuard.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _1.Ventas,
        children: [
            { path: 'emision-remito', component: emisionRemitos_1.EmisionRemitos, canDeactivate: [PendingChangesGuard_1.PendingChangesGuard] },
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=ventas.routing.js.map

/***/ })

});
//# sourceMappingURL=ventas.module.chunk.js.map