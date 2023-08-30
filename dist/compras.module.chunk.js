webpackJsonp(["compras.module"],{

/***/ "./src/app/models/tablaCompra.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Modelo auxiliar para comprobanteCompra
var TablaCompra = (function () {
    function TablaCompra(tablaCompra) {
        if (tablaCompra) {
            this.columnas = tablaCompra.columnas;
            this.datos = tablaCompra.datos;
        }
        else {
            this.columnas = {
                columnasProductos: [],
                columnasTrazabilidad: [],
                columnasFactura: [],
                columnasDetallesFp: []
            };
            this.datos = {
                productosPend: [],
                modelosFactura: [],
                detallesFormaPago: []
            };
        }
    }
    return TablaCompra;
}());
exports.TablaCompra = TablaCompra;
//# sourceMappingURL=tablaCompra.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/compras.component.ts":
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
var Compras = (function () {
    function Compras() {
    }
    return Compras;
}());
Compras = __decorate([
    core_1.Component({
        selector: 'compras',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], Compras);
exports.Compras = Compras;
//# sourceMappingURL=compras.component.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/compras.module.ts":
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
var compras_routing_1 = __webpack_require__("./src/app/pages/main/compras/compras.routing.ts");
var _1 = __webpack_require__("./src/app/pages/main/compras/index.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var SharedModule_1 = __webpack_require__("./src/app/pages/main/SharedModule.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var tablaIngreso_1 = __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/components/tablaIngreso/index.ts");
var comprobanteCompra_1 = __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/index.ts");
var comprobanteCompraService_1 = __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/comprobanteCompraService.ts");
var tablaFormaPagoComp_1 = __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/components/tablaFormaPagoComp/index.ts");
var emisionRemitosService_1 = __webpack_require__("./src/app/pages/main/ventas/emisionRemitos/emisionRemitosService.ts");
var PendingChangesGuard_1 = __webpack_require__("./src/app/guards/PendingChangesGuard.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var ComprasModule = (function () {
    function ComprasModule() {
    }
    return ComprasModule;
}());
ComprasModule = __decorate([
    core_1.NgModule({
        imports: [
            compras_routing_1.routing,
            ng_bootstrap_1.NgbTabsetModule,
            ng_bootstrap_1.NgbProgressbarModule,
            SharedModule_1.SharedModule
        ],
        declarations: [
            _1.Compras,
            comprobanteCompra_1.ComprobanteCompra,
            tablaIngreso_1.TablaIngreso,
            tablaFormaPagoComp_1.TablaFormaPagoComp
        ],
        providers: [
            recursoService_1.RecursoService,
            authService_1.AuthService,
            utilsService_1.UtilsService,
            comprobanteCompraService_1.ComprobanteCompraService,
            emisionRemitosService_1.EmisionRemitosService,
            PendingChangesGuard_1.PendingChangesGuard,
            comprobanteService_1.ComprobanteService
        ],
        exports: [
            tablaIngreso_1.TablaIngreso,
            tablaFormaPagoComp_1.TablaFormaPagoComp
        ]
    })
], ComprasModule);
exports.ComprasModule = ComprasModule;
//# sourceMappingURL=compras.module.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/compras.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var _1 = __webpack_require__("./src/app/pages/main/compras/index.ts");
var comprobanteCompra_1 = __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/index.ts");
var PendingChangesGuard_1 = __webpack_require__("./src/app/guards/PendingChangesGuard.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _1.Compras,
        children: [
            { path: 'comprobante-compra', component: comprobanteCompra_1.ComprobanteCompra, canDeactivate: [PendingChangesGuard_1.PendingChangesGuard] }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=compras.routing.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/components/tablaFormaPagoComp/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/compras/comprobanteCompra/components/tablaFormaPagoComp/tablaFormaPagoComp.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/components/tablaFormaPagoComp/tablaFormaPagoComp.component.ts":
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
var TablaFormaPagoComp = (function () {
    function TablaFormaPagoComp() {
        var _this = this;
        // Eventos de cambio que atrapo en EmisionRemito
        this.onAddSelecFormaPago = new core_1.EventEmitter();
        this.onRemoveSelecFormaPago = new core_1.EventEmitter();
        this.seleccionados = [];
        /**
         * Checkea si se puede seleccionar o no
         */
        this.checkIfSeleccionable = function (fp) {
            return true;
        };
        // this.seleccionados.some(fpSelec => fpSelec.listaPrecio.idListaPrecio !== fp.listaPrecio.idListaPrecio)
        /**
         * Evento change del checkbox
         */
        this.onChangeCheckbox = function (e) { return function (fp) {
            if (e && e.target) {
                var estado = e.target.checked;
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
    return TablaFormaPagoComp;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaFormaPagoComp.prototype, "dataTable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaFormaPagoComp.prototype, "moneda", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TablaFormaPagoComp.prototype, "onAddSelecFormaPago", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TablaFormaPagoComp.prototype, "onRemoveSelecFormaPago", void 0);
TablaFormaPagoComp = __decorate([
    core_1.Component({
        selector: 'tabla-forma-pago-comp',
        template: __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/components/tablaFormaPagoComp/tablaFormaPagoComp.html"),
        styles: [__webpack_require__("./src/app/pages/main/compras/comprobanteCompra/components/tablaFormaPagoComp/tablaFormaPagoComp.scss")],
    }),
    __metadata("design:paramtypes", [])
], TablaFormaPagoComp);
exports.TablaFormaPagoComp = TablaFormaPagoComp;
//# sourceMappingURL=tablaFormaPagoComp.component.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/components/tablaFormaPagoComp/tablaFormaPagoComp.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabla-forma-pago-comp\">\r\n    <table style=\"width:100%\">\r\n        <tr class=\"table-header\">\r\n            <th></th>\r\n            <th>F.Pago</th>\r\n            <th>Detalle</th>\r\n        </tr>\r\n    \r\n        <tr *ngFor=\"let fp of dataTable | async; index as indFp; last as isLast\">\r\n            <td>\r\n                <input \r\n                    (blur)=\"onBlurCheckbox(isLast)\" \r\n                    [attr.id]=\"'fp-check-' + indFp\" \r\n                    (change)=\"onChangeCheckbox($event)(fp)\" \r\n                    [attr.disabled]=\"moneda ? null : 'disabled'\"\r\n                    class=\"checkbox-td\" type=\"checkbox\"/>\r\n            </td>\r\n            <td>{{ fp.descripcion }}</td>\r\n            <td>{{ fp.descripcion }}</td>\r\n        </tr>\r\n    </table> \r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/components/tablaFormaPagoComp/tablaFormaPagoComp.scss":
/***/ (function(module, exports) {

module.exports = "/*Modificacion Dario*/\n.tabla-forma-pago-comp {\n  height: 112px;\n  overflow: auto; }\n.tabla-forma-pago-comp table .table-header {\n    background: #b8b8bd; }\n.tabla-forma-pago-comp table tr:nth-child(even) {\n    background: #cacad2; }\n.tabla-forma-pago-comp table td {\n    padding: 2px; }\n.tabla-forma-pago-comp table td .checkbox-td {\n      display: block;\n      margin: 2px; }\n"

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/components/tablaIngreso/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/compras/comprobanteCompra/components/tablaIngreso/tablaIngreso.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/components/tablaIngreso/tablaIngreso.component.ts":
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
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var productoReducido_1 = __webpack_require__("./src/app/models/productoReducido.ts");
var TablaIngreso = (function () {
    function TablaIngreso(utilsService, recursoService, popupListaService) {
        var _this = this;
        this.utilsService = utilsService;
        this.recursoService = recursoService;
        this.popupListaService = popupListaService;
        this.showTooltip = false;
        // Datos de mierda que me da paja sacar por miedo a romper todo
        this.sortBy = "nombre";
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortOrder = "asc";
        // Fin datos de mierda
        // Reusabilidad tabla
        this.enableAddItem = false;
        this.productosBusqueda = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.productoSeleccionado = new productoReducido_1.ProductoReducido();
        // Inhdice del producto enfocado del popup
        this.productoEnfocadoIndex = -1;
        this.customsBlur = null;
        this.customLoseFocus = null;
        this.prodFocus = false;
        // Indica si es o no es la tabla de subtotales
        this.tablaSubtotales = false;
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
        /**
         * Evento change del input de codProducto
         */
        this.onChangeInputItemAdd = function (textoBuscado) {
            if (textoBuscado) {
                _this.productosBusqueda.filtrados.next(_this.productosBusqueda.todos.filter(function (prodPend) {
                    return prodPend.codProducto
                        .toString()
                        .includes(textoBuscado.toString().toLowerCase()) ||
                        prodPend.descripcion
                            .toString()
                            .toLowerCase()
                            .includes(textoBuscado.toString().toLowerCase());
                }
                // prodPend => prodPend.producto.codProducto.toString().includes(
                //     textoBuscado.toString().toLowerCase()
                // ) ||
                // prodPend.producto.descripcion.toString().toLowerCase().includes(
                //     textoBuscado.toString().toLowerCase()
                // )
                ));
            }
        };
        /**
         * Busca el producto y limpia la lista
         */
        this.onBlurInputItemAdd = function (eventInput) {
            // Busco si ingresó un cód producto
            var codIngre = eventInput && eventInput.currentTarget
                ? eventInput.currentTarget.value
                : null;
            // Si lo ingresó, lo busco en la lista de filtrados
            if (codIngre) {
                // Busco el producto en la lista
                var prodBuscado = _this.productosBusqueda.filtrados
                    .getValue()
                    .find(function (p) { return p.codProducto === codIngre; });
                // Si lo encontré, lo selecciono. Sinó, no.
                prodBuscado ? _this.onClickProductoListaLocal(prodBuscado) : null;
            }
            setTimeout(function () { return _this.productosBusqueda.filtrados.next([]); }, 100);
            // También reseteo el indice de busqueda
            _this.productoEnfocadoIndex = -1;
            _this.prodFocus = false;
        };
        /**
         * Retorna el offset del input add
         */
        this.getOffsetOfAddInput = function () {
            return _this.utilsService.getOffset(document.getElementById("addInput"));
        };
        /**
         * Setea la fecha de compra calculandola dado un string en formato 'ddmm', parseando a 'dd/mm/aaaa'
         */
        this.onCalculateFecha = function (e) { return function (key) { return function (subkey) { return function (item) {
            // if (!item[key][subkey] || typeof item[key][subkey] !== 'string') {
            //     item[key][subkey] = '';
            //     return;
            // }
            if (!item[key][subkey]) {
                return;
            }
            item[key][subkey] = _this.utilsService.stringToDateLikePicker(item[key][subkey]);
            // Hago focus en el prox input
            subkey === "fechaElab"
                ? document.getElementById("fecha-fechaVto").focus()
                : null;
            // Confirmo edicion despues de hacer blur en el último campo
            subkey === "fechaVto" ? _this.confirmEdit(item) : null;
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
                var prodSelect = prodsLista && prodsLista.length
                    ? prodsLista[_this.productoEnfocadoIndex]
                    : null;
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
            _this.textoBusqueda = "";
            _this.onClickProductoLista(prodSelect);
        };
        /**
         * Retorna la clase del input que se va a poner en edicio y enfocar primero, cuando se apreta en editar
         */
        this.getClassInputEditable = function (item) { return function (col) {
            if (item) {
                var idItem = item.cuentaContable
                    ? item.cuentaContable
                    : item.idFormaPagoDet
                        ? item.idFormaPagoDet
                        :
                            item.producto && item.idFactDetalle
                                ? item.idFactDetalle + "-" + item.numero
                                : "000";
                return "form-control edit-input" + (col.editarFocus ? " editar-focus-" + idItem : "");
            }
        }; };
        // Cheackea si esta en edicion
        this.checkIfEditOn = function (item) { return function (col) {
            return col.enEdicion &&
                // (item.producto && item.producto.idProductos && col.enEdicion === item.producto.idProductos) ||
                // (item.producto && item.producto.idProductos && col.enEdicion === `${item.producto.idProductos}-${item.numero}`) ||
                ((item.producto &&
                    item.idFactDetalle &&
                    col.enEdicion === item.idFactDetalle + "-" + item.numero) ||
                    (item.cuentaContable && col.enEdicion === item.cuentaContable) ||
                    (item.idFormaPagoDet && col.enEdicion === item.idFormaPagoDet));
        }; };
        this.getPositionTooltip = function () {
            var fatherPosition = _this.getOffsetOfAddInput();
            return {
                top: fatherPosition.top - 2 + "px",
                left: fatherPosition.left + 115 + "px",
            };
        };
        /**
         * Retorna la function blur de una columna dada (si esta tiene custom blur)
         */
        // getFunctionBlurOfColumn = (col) => {
        //     if (col && col.customBlur) {
        //         return this.customsBlur[col.customBlur];
        //     }
        // }
        this.force2decimals = function (item) { return function (col) {
            return item && col && col.decimal
                ? (item[col.key] = parseFloat(item[col.key]).toFixed(2))
                : item[col.key];
        }; };
        recursoService
            .getRecursoList(resoursesREST_1.resourcesREST.productosReducidos)({
            tipo: "reducida",
        })
            .subscribe(function (prods) {
            // debugger;
            _this.productosBusqueda.todos = prods;
            _this.productosBusqueda.filtrados.next(prods);
        });
    }
    TablaIngreso.prototype.toInt = function (num) {
        return +num;
    };
    /**
     * Obtiene el style a partir de una columna
     * @param col
     */
    TablaIngreso.prototype.getStyleFromCol = function (col) {
        var styles = {
            width: col.ancho,
            "border-top": "none",
        };
        //console.log(col.decimal);
        return styles;
    };
    /**
     * Este método checkea el tipo de dato de la key y la parsea de acuerdo a el. Por ejemplo, si es boolean retrona 'si' en 'true' y 'no' en 'false'
     * @param key
     */
    TablaIngreso.prototype.parseKey = function (key) {
        var tipoDato = typeof key;
        // debugger;
        if (tipoDato === "boolean") {
            return key ? "Si" : "No";
        }
        if (tipoDato === "object") {
            // Me fijo el nombre de la clase del objeto
            if (key &&
                (key.constructor.name === "DateLikePicker" ||
                    (key.year && key.month && key.day))) {
                return "" + (key.day < 10 ? "0" : "") + key.day + "/" + (key.month < 10 ? "0" : "") + key.month + "/" + key.year;
            }
        }
        if (tipoDato === "number") {
            return key.toLocaleString();
        }
        return key;
    };
    // Checkea si pongo el 'tick' para finalizar la edicion.
    TablaIngreso.prototype.checkIfShowTick = function (item) {
        if (this.columns) {
            return this.columns.some(function (col) {
                return (col.enEdicion &&
                    ((item.cuentaContable &&
                        col.enEdicion === item.cuentaContable) ||
                        (item.idFormaPagoDet &&
                            col.enEdicion === item.idFormaPagoDet)));
            });
        }
    };
    TablaIngreso.prototype.modelChanged = function (event) {
        event.value = parseFloat(event.value).toFixed(2);
    };
    // agregar un elemento a la lista duplicando el registro al que se hizo click y creando una copia 
    // rescribiendo el indice 
    TablaIngreso.prototype.agregarElemento = function (item, idMaximo) {
        debugger;
        var xMax = Math.max.apply(null, this.data.map(function (o) { return o.item; }));
        var temp = JSON.parse(JSON.stringify(item));
        temp.item = xMax + 1;
        this.data.push(JSON.parse(JSON.stringify(temp)));
    };
    TablaIngreso.prototype.borrarItem = function (item, index) {
        this.data.splice(index, 1);
    };
    return TablaIngreso;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "enableAddItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "columns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "edit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "add", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "remove", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "confirmEdit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "comprobante", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "onClickProductoLista", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "customsBlur", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "customLoseFocus", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablaIngreso.prototype, "tablaSubtotales", void 0);
TablaIngreso = __decorate([
    core_1.Component({
        selector: "tabla-ingreso",
        template: __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/components/tablaIngreso/tablaIngreso.html"),
        styles: [__webpack_require__("./src/app/pages/main/compras/comprobanteCompra/components/tablaIngreso/tablaIngreso.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _a || Object, typeof (_b = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _b || Object, typeof (_c = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _c || Object])
], TablaIngreso);
exports.TablaIngreso = TablaIngreso;
var _a, _b, _c;
//# sourceMappingURL=tablaIngreso.component.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/components/tablaIngreso/tablaIngreso.html":
/***/ (function(module, exports) {

module.exports = "<!-- [mfRowsOnPage]=\"rowsOnPage\" -->\r\n<div class=\"panel panel-default tabla-ingreso\">\r\n    <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"  [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n        <thead class=\"head-table\">\r\n            <tr>\r\n                <th *ngIf=\"edit || remove\" style=\"width: 10%; border-top: none;\"></th>\r\n                <!-- Recorro y muestro las columnas recibidas en el input -->\r\n                <th class=\"table-column\" *ngFor=\"let col of columns\" [ngStyle]=\"getStyleFromCol(col)\" [ngClass]=\"col.customClass ? col.customClass : 'text-align: left;'\">\r\n                    <mfDefaultSorter by=\"name\">{{col.nombre}}</mfDefaultSorter>\r\n                </th>\r\n            </tr>\r\n\r\n        </thead>\r\n\r\n        \r\n                    \r\n                   \r\n\r\n        <tbody #tbodyref>\r\n            <tr *ngFor=\"let item of mf.data; let i = index\">\r\n                <!-- BOTONES EDITAR Y BORRAR -->\r\n                <td *ngIf=\" edit || remove\" class=\"btn-container\">\r\n                    <div  *ngIf=\"add && item.comprobante === 'OC'\" (click)=\"agregarElemento(item, mf.data.length)\" class=\"btn-accion btn-add\">\r\n                        <i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div *ngIf=\"edit\" (click)=\"edit(item)\" class=\"btn-accion btn-editar\">\r\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div *ngIf=\"remove\" (click)=\"borrarItem(item,i)\" class=\"btn-accion btn-remover\">\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                    <div *ngIf=\"checkIfShowTick(item)\" (click)=\"confirmEdit(item)\" class=\"btn-accion btn-remover\">\r\n                        <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                   \r\n                    \r\n                </td>\r\n                <!-- FIN BOTONES EDITAR Y BORRAR -->\r\n\r\n                <!-- ACA MUESTRA LA DATA -->\r\n                <td *ngFor=\"let col of columns\" [ngClass]=\"col.customClass ? col.customClass : 'text-align: left;'\">\r\n                    <!-- Si SI tiene subkey -->\r\n                    <div *ngIf=\"col.subkey\">\r\n                        <!-- Si NO esta en edicion -->\r\n                        <div *ngIf=\"!checkIfEditOn(item)(col)\">\r\n\r\n                            \r\n                            <div *ngIf=\"col.decimal\">\r\n                                {{utilsService.parseDecimal(item[col.key][col.subkey])}}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"!col.decimal\">\r\n                                {{parseKey(item[col.key][col.subkey])}}\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <!-- Si SI está en edicion -->\r\n                        <div *ngIf=\"checkIfEditOn(item)(col)\">\r\n                            <input *ngIf=\" (col.nombre !== 'trazable' && col.key !== 'trazabilidad') ||\r\n                                            (col.key === 'trazabilidad' &&   col.subkey !== 'fechaElab' && col.subkey !== 'fechaVto' )\"\r\n                                    [(ngModel)]=\"item[col.key][col.subkey]\"\r\n                                    style=\"margin: 4px 6px;\"\r\n                                    type=\"text\"\r\n                                    (blur)=\"col && col.customBlur ? customsBlur[col.customBlur](item, $event) : null\"\r\n                                    [ngClass]=\"getClassInputEditable(item)(col)\"\r\n                                    id=\"inputSubKey\"\r\n                                    placeholder=\"\">\r\n\r\n                            <div *ngIf=\"col.key === 'trazabilidad' && (col.subkey === 'fechaElab' || col.subkey === 'fechaVto')\" class=\"datepicker-datelikepicker\">\r\n                                <input [attr.id]=\"'fecha-' + col.subkey\" (blur)=\"onCalculateFecha($event)(col.key)(col.subkey)(item)\" (keyup.enter)=\"onCalculateFecha($event)(col.key)(col.subkey)(item)\" class=\"form-control\" placeholder=\"dd-mm-yyyy\" name=\"dp\" [(ngModel)]=\"item[col.key][col.subkey]\" ngbDatepicker #dComp=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"dComp.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div *ngIf=\"col.nombre === 'item' && !col.decimal\">\r\n                         {{ item.item }}\r\n                    </div>\r\n                   \r\n                    <!-- Si NO tiene subkey -->\r\n                    <div *ngIf=\"!col.subkey\">\r\n\r\n                        <!-- Si NO está en edicion -->\r\n                        <div *ngIf=\"!checkIfEditOn(item)(col)\">\r\n                            <div *ngIf=\"\r\n                                col.nombre !== 'imputacion' && \r\n                                !col.decimal && \r\n                                !(\r\n                                    col.elementoFinalBlur && \r\n                                    comprobante && comprobante.tipo &&\r\n                                    comprobante.tipo.comprobante && \r\n                                    (\r\n                                        (\r\n                                            !tablaSubtotales &&\r\n                                            !comprobante.tipo.comprobante.incluyeNeto\r\n                                        ) ||\r\n                                        (\r\n                                            tablaSubtotales &&\r\n                                            !comprobante.tipo.comprobante.incluyeIva\r\n                                        )\r\n\r\n                                    )\r\n                                )\r\n                                \">\r\n                                {{parseKey(item[col.key])}}\r\n                            </div>\r\n\r\n                            <!-- <div    style=\"background: #ff000061;\" -->\r\n                            <div    style=\"color: #c10000;\"\r\n                                    *ngIf=\"\r\n                                        col.elementoFinalBlur && \r\n                                        comprobante && comprobante.tipo &&\r\n                                        comprobante.tipo.comprobante && \r\n                                        (\r\n                                            (\r\n                                                !tablaSubtotales &&\r\n                                                !comprobante.tipo.comprobante.incluyeNeto\r\n                                            ) ||\r\n                                            (\r\n                                                tablaSubtotales &&\r\n                                                !comprobante.tipo.comprobante.incluyeIva\r\n                                            )\r\n\r\n                                        )\r\n                                    \">\r\n                                {{ utilsService.parseDecimal(item[col.key]) }}\r\n                            </div>\r\n\r\n                            <!-- CASOS PARTICULARES -->\r\n                            <div *ngIf=\"col.nombre === 'imputacion' && !col.decimal\">\r\n                                {{ item[col.key] && item[col.key].seleccionada ? item[col.key].seleccionada.descripcion : ''}}\r\n                            </div>\r\n                           \r\n                            \r\n\r\n\r\n                            <div *ngIf=\"\r\n                                col.decimal && col.key !== 'precio' && \r\n                                !(\r\n                                    col.elementoFinalBlur && \r\n                                    comprobante && comprobante.tipo &&\r\n                                    comprobante.tipo.comprobante && \r\n                                    (\r\n                                        (\r\n                                            !tablaSubtotales &&\r\n                                            !comprobante.tipo.comprobante.incluyeNeto\r\n                                        ) ||\r\n                                        (\r\n                                            tablaSubtotales &&\r\n                                            !comprobante.tipo.comprobante.incluyeIva\r\n                                        )\r\n\r\n                                    )\r\n                                )\r\n                            \">\r\n                                {{ utilsService.parseDecimal(item[col.key]) }}\r\n                            </div>\r\n\r\n                            <div *ngIf=\"\r\n                                col.decimal && col.key === 'precio' && \r\n                                !(\r\n                                    col.elementoFinalBlur && \r\n                                    comprobante && comprobante.tipo &&\r\n                                    comprobante.tipo.comprobante && \r\n                                    (\r\n                                        (\r\n                                            !tablaSubtotales &&\r\n                                            !comprobante.tipo.comprobante.incluyeNeto\r\n                                        ) ||\r\n                                        (\r\n                                            tablaSubtotales &&\r\n                                            !comprobante.tipo.comprobante.incluyeIva\r\n                                        )\r\n\r\n                                    )\r\n                                )\r\n                            \">\r\n                                {{ \r\n                                    utilsService.toThreeDecimals(item[col.key])\r\n                                }}\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Si SI está en edicion -->\r\n                        <!-- [(ngModel)]=\"item[col.key]\" -->\r\n                        <div *ngIf=\"checkIfEditOn(item)(col)\">\r\n                            <input  *ngIf=\" (\r\n                                        col.nombre !== 'imputacion' && \r\n                                        col.nombre !== 'monto' &&\r\n                                        col.key !== 'trazabilidad' && \r\n                                        !col.elementoFinalBlur)\"\r\n                                    [(ngModel)]=\"item[col.key]\"\r\n                                    style=\"margin: 4px 6px; text-align: end;\" type=\"text\"\r\n                                    class=\"form-control edit-input\"\r\n                                    id=\"inputSubKey\"\r\n                                    [ngClass]=\"getClassInputEditable(item)(col)\"\r\n                                    (blur)=\"col && col.customBlur ? customsBlur[col.customBlur](item, $event) : null\"\r\n                                    >\r\n\r\n                                    <!-- (blur)=\"getFunctionBlurOfColumn(col) ? getFunctionBlurOfColumn(col)(item) : null\" -->\r\n\r\n                            <!-- ULTIMO INPUT EDITABLE. CAPTURO EL BLUR -->\r\n                            <input  *ngIf=\"\r\n                                        col.elementoFinalBlur && \r\n                                        comprobante && comprobante.tipo &&\r\n                                        comprobante.tipo.comprobante && \r\n                                        (\r\n                                            (\r\n                                                !tablaSubtotales && \r\n                                                comprobante.tipo.comprobante.incluyeNeto\r\n                                            ) ||\r\n                                            (\r\n                                                tablaSubtotales && \r\n                                                comprobante.tipo.comprobante.incluyeIva\r\n                                            )\r\n                                        )\r\n                                    \"\r\n                                    [(ngModel)]=\"item[col.key]\"  \r\n                                    style=\"margin: 4px 6px; text-align: end;\" \r\n                                    type=\"text\"\r\n                                    class=\"form-control edit-input\" \r\n                                    id=\"inputSubKey\" \r\n                                    (blur)=\"confirmEdit(item)\" \r\n                                    [ngClass]=\"getClassInputEditable(item)(col)\">\r\n                            <!-- FIN ULTIMO INPUT EDITABLE -->\r\n\r\n                            <!-- CASOS PARTICULARES -->\r\n\r\n                            <input  \r\n                                *ngIf=\"col.nombre === 'monto'\"\r\n                                type=\"number\"\r\n                                [(ngModel)]=\"item[col.key]\"\r\n                                style=\"margin: 4px 6px; text-align: end;\" \r\n                                class=\"form-control edit-input\"\r\n                                id=\"inputSubKey\"\r\n                                step=\".01\"\r\n                                (ngModelChange)=\"modelChanged($event)\"\r\n                                [ngClass]=\"getClassInputEditable(item)(col)\"\r\n                                (blur)=\"col && col.customBlur ? customsBlur[col.customBlur](item, $event) : null\"\r\n                                >\r\n\r\n                                <!-- [ngClass]=\"'form-control without-padding editar-focus-' + item.producto.idProductos+'-'+item.numero\" -->\r\n                            <select *ngIf=\"col.nombre === 'imputacion'\"\r\n                                    [(ngModel)]=\"item[col.key].seleccionada\"\r\n                                    [ngClass]=\"'form-control without-padding editar-focus-' + item.idFactDetalle+'-'+item.numero\"\r\n                                    >\r\n                                <option *ngFor=\"let impu of item[col.key].todas\" [ngValue]=\"impu\">\r\n                                    {{impu.descripcion}}\r\n                                </option>\r\n                            </select>\r\n\r\n                            <input  *ngIf=\"\r\n                                        col.elementoFinalBlur && \r\n                                        comprobante && comprobante.tipo &&\r\n                                        comprobante.tipo.comprobante && \r\n                                        (\r\n                                            (\r\n                                                !tablaSubtotales &&\r\n                                                !comprobante.tipo.comprobante.incluyeNeto\r\n                                            ) ||\r\n                                            (\r\n                                                tablaSubtotales &&\r\n                                                !comprobante.tipo.comprobante.incluyeIva\r\n                                            )\r\n                                        )\r\n                                    \"\r\n                                    [(ngModel)]=\"item[col.key]\"  \r\n                                    style=\"margin: 4px 6px; text-align: end; color: #c10000;\" \r\n                                    type=\"text\"\r\n                                    class=\"form-control edit-input\" \r\n                                    id=\"inputSubKey\" \r\n                                    (blur)=\"confirmEdit(item)\" \r\n                                    [ngClass]=\"getClassInputEditable(item)(col)\">\r\n\r\n                            <!-- FIN CASOS PARTICULARES -->\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <!-- FIN DE MUESTREO DE DATA -->\r\n\r\n            </tr>\r\n\r\n            <div class=\"tooltip-add-prod\" *ngIf=\"showTooltip && (!comprobante || !comprobante.numerador || !comprobante.numerador.ptoVenta || !comprobante.numerador.ptoVenta.ptoVenta || !comprobante.numerador.ptoVenta.ptoVenta)\" [ngStyle]=\"getPositionTooltip()\">\r\n                <span>\r\n                    Debe completar el nro de comprobante antes de agregar productos\r\n                </span>\r\n            </div>\r\n\r\n            <!-- ROW PARA AGREGAR UN PRODUCTO -->\r\n            <tr *ngIf=\"enableAddItem\">\r\n                <td></td>\r\n                <td (mouseenter) = \"showTooltip = true\"  (mouseleave) = \"showTooltip = false\">\r\n                    <input  [(ngModel)]=\"textoBusqueda\" type=\"text\" class=\"form-control input-new-prod\" id=\"addInput\" placeholder=\"\"\r\n                            (blur)=\"onBlurInputItemAdd($event)\"\r\n                            (focus)=\"prodFocus = true\"\r\n                            (ngModelChange)=\"onChangeInputItemAdd($event)\"\r\n                            (keydown.arrowdown)=\"keyPressInputTexto($event)('down')\"\r\n                            (keydown.arrowup)=\"keyPressInputTexto($event)('up')\"\r\n                            (keydown.enter)=\"onEnterInputBuscProd($event)\"\r\n                            [disabled]=\"!comprobante || !comprobante.numerador || !comprobante.numerador.ptoVenta || !comprobante.numerador.ptoVenta.ptoVenta || !comprobante.numerador.ptoVenta.ptoVenta\"\r\n                            >\r\n\r\n                    <!-- *ngIf=\"textoBusqueda && textoBusqueda.length > 0\" -->\r\n                    <popup-lista    *ngIf=\"prodFocus\"\r\n                                    [items]=\"productosBusqueda.filtrados\"\r\n                                    [keysToShow]=\"['descripcion', 'codProducto', 'codProductoOriginal']\"\r\n                                    [onClickItem]=\"onClickProductoListaLocal\"\r\n                                    [fatherPosition]=\"getOffsetOfAddInput()\">\r\n                    </popup-lista>\r\n                </td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n            <!-- FIN ROW PARA AGREGAR UN PRODUCTO -->\r\n\r\n        </tbody>\r\n<!-- \r\n        <tfoot>\r\n            <tr>\r\n                <td colspan=\"12\" style=\"border-top: none\">\r\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                </td>\r\n            </tr>\r\n        </tfoot>\r\n        -->\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/components/tablaIngreso/tablaIngreso.scss":
/***/ (function(module, exports) {

module.exports = "/*Modificacion Dario*/\n:host /deep/ .widgets .data-table-container {\n  width: 100%; }\n:host /deep/ .widgets .data-table-container .panel-heading {\n    margin-top: 25px; }\n.panel {\n  font-size: 11px; }\n.panel .table .table-column {\n    text-transform: capitalize; }\n.panel .table thead {\n    background: #c2c3d2;\n    color: black;\n    text-shadow: 0 0 3px #fff; }\n.panel .table thead tr th {\n      padding: 5px 8px; }\n.panel .table tbody tr td {\n    padding: 0 8px; }\n.panel .table tbody tr td .datepicker-datelikepicker {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 90%;\n      margin-left: 9%; }\n.panel .table tbody .btn-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    padding: 7px 5px 0px;\n    margin-top: 7px; }\n.panel .table tbody .btn-container .btn-accion {\n      margin: 2%;\n      font-size: 0.9rem;\n      padding: 5px 9px;\n      cursor: pointer;\n      padding-top: 0; }\n.panel .table tbody .btn-container .btn-editar i {\n      vertical-align: middle; }\n.panel .table tbody .add-tr .add-td {\n    padding: 0 4px; }\n.panel .table tbody .add-tr .add-td .checkbox-traza {\n      margin-top: 6px; }\n.panel .table tbody .lista-filtrada-items {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n.panel .table tbody tr td .input-new-prod {\n    width: 97%;\n    margin: 0 auto;\n    margin: 5px auto; }\n.panel .table tbody .tooltip-add-prod {\n    position: fixed;\n    background: #c3c5d4;\n    padding: 5px 10px;\n    text-align: center;\n    border-radius: 24px;\n    opacity: 0.8;\n    left: 222px;\n    top: 90px;\n    font-size: 11px;\n    -webkit-transition: width 2s;\n    transition: width 2s; }\n.tabla-ingreso .form-control .sort-option {\n  text-transform: capitalize; }\n.tabla-ingreso .footer-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.tabla-ingreso .footer-table .add-item-label {\n    font-size: 0.9rem; }\n.tabla-ingreso .footer-table .deposito {\n    margin-right: 2%; }\n.without-padding {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/comprobanteCompra.component.ts":
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
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var cotizacion_1 = __webpack_require__("./src/app/models/cotizacion.ts");
var comprobante_1 = __webpack_require__("./src/app/models/comprobante.ts");
var comprobanteRelacionado_1 = __webpack_require__("./src/app/models/comprobanteRelacionado.ts");
var deposito_1 = __webpack_require__("./src/app/models/deposito.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var comprobanteCompraService_1 = __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/comprobanteCompraService.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var gruposParametros_1 = __webpack_require__("./src/constantes/gruposParametros.ts");
var tablaCompra_1 = __webpack_require__("./src/app/models/tablaCompra.ts");
var numerador_1 = __webpack_require__("./src/app/models/numerador.ts");
var sisModulos_1 = __webpack_require__("./src/constantes/sisModulos.ts");
var comprobanteEncabezado_1 = __webpack_require__("./src/app/models/comprobanteEncabezado.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var ComprobanteCompra = (function () {
    /**
     * Toda la carga de data se hace en el mismo orden en el que está declarado arriba
     */
    function ComprobanteCompra(recursoService, comprobanteCompraService, comprobanteService, utilsService, popupListaService, router, configProgressBar, authService) {
        var _this = this;
        this.recursoService = recursoService;
        this.comprobanteCompraService = comprobanteCompraService;
        this.comprobanteService = comprobanteService;
        this.utilsService = utilsService;
        this.popupListaService = popupListaService;
        this.router = router;
        this.authService = authService;
        /////////////////////////////////////////////
        /////////// Modelos Comprobante /////////////
        /////////////////////////////////////////////
        this.proveedorSeleccionado = new padron_1.Padron();
        this.comprobante = new comprobante_1.Comprobante();
        this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
        this.factura = new comprobante_1.Comprobante();
        this.cotizacionDatos = { cotizacion: new cotizacion_1.Cotizacion(), total: 0 };
        // seteo el estado obligatorio por defecto en falso
        this.estadoRelacionadoObligatorio = false;
        this.estadoEdicionCantidadProducto = false;
        this.precioOriginal = [];
        this.depositosAMostrar = [];
        this.filtro = {};
        this.agregarElemento = false;
        this.pesificado = false;
        this.dolarizadoAlVto = false;
        this.interesMensualCompra = 0.0;
        this.canjeInsumos = false;
        this.tipoCambio = "divisa";
        this.condicionesConfirmadas = false;
        // Indice del producto enfocado del popup
        this.proveedorEnfocadoIndex = -1;
        // Suma de todos los subtotales
        this.sumatoriaSubtotales = 0;
        // Fps seleccionadas
        this.formasPagoSeleccionadas = [];
        this.preCargaPadron = "";
        // monedas: Observable<Moneda[]>;
        this.monedas = new rxjs_1.Subject();
        this.tituloCardComprobante = "COMPROBANTE";
        this.proveedores = {
            filtrados: new rxjs_1.BehaviorSubject([]),
        };
        this.letras = [];
        this.ajusteConfirmado = false;
        this.valorRealFactura = null;
        this.valorCalculadoFactura = null;
        // Si es 0, no se muestra el 'cargando'.
        this.valueGuardandoCompro = 0;
        /**
         * Blurs customs
         */
        this.customsBlurProduct = {
            calculateImporte: function (item, ev) {
                if (_this.estadoEdicionCantidadProducto == false) {
                    item.importe = item.pendiente * Number(item.precio);
                    _this.utilsService.onBlurInputNumber(ev);
                }
            },
        };
        this.tablas = new tablaCompra_1.TablaCompra();
        ////////////////////////////////////////////
        //////////////// PopupLista ////////////////
        ////////////////////////////////////////////
        this.popupLista = {
            onClickListProv: function (prove) {
                _this.proveedorSeleccionado = new padron_1.Padron(__assign({}, prove));
                // Focus siguiente elemento
                document.getElementById("tipoOperacionSelect")
                    ? document.getElementById("tipoOperacionSelect").focus()
                    : null;
            },
            getOffsetOfInputProveedor: function () {
                return _this.utilsService.getOffset(document.getElementById("inputProveedor"));
            },
        };
        ///////////////////////////////// Eventos OnClick /////////////////////////////////
        this.onCLickAdd = function (prodSelect) {
            _this.agregarElemento = true;
            return true;
        };
        this.onClickRemove = function (prodSelect) {
            _.remove(_this.tablas.datos.productosPend, function (prod) {
                // return prod.producto.idProductos === prodSelect.producto.idProductos && prod.numero === prodSelect.numero;
                return prod.idFactDetalle === prodSelect.idFactDetalle;
            });
            _.remove(_this.precioOriginal, function (obj) {
                // return prod.producto.idProductos === prodSelect.producto.idProductos && prod.numero === prodSelect.numero;
                return obj.idFactDetalle === prodSelect.idFactDetalle;
            });
            // Actualizo totales y eso
            _this.actualizarDatosProductos();
        };
        this.onClickEdit = function (tipoColumnas) { return function (itemSelect) {
            _this.tablas.columnas[tipoColumnas] = _this.tablas.columnas[tipoColumnas].map(function (tabla) {
                var newTabla = tabla;
                if (newTabla.enEdicion !== undefined) {
                    // tipoColumnas === 'columnasProductos' ? newTabla.enEdicion = itemSelect.producto.idProductos :
                    // tipoColumnas === 'columnasProductos' ? newTabla.enEdicion = `${itemSelect.producto.idProductos}-${itemSelect.numero}` :
                    // tipoColumnas === 'columnasTrazabilidad' ? newTabla.enEdicion = `${itemSelect.producto.idProductos}-${itemSelect.numero}` :
                    tipoColumnas === "columnasProductos"
                        ? (newTabla.enEdicion = itemSelect.idFactDetalle + "-" + itemSelect.numero)
                        : tipoColumnas === "columnasTrazabilidad"
                            ? (newTabla.enEdicion = itemSelect.idFactDetalle + "-" + itemSelect.numero)
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
                var idItem = itemSelect.cuentaContable
                    ? itemSelect.cuentaContable
                    : itemSelect.idFormaPagoDet
                        ? itemSelect.idFormaPagoDet
                        :
                            // itemSelect.producto && itemSelect.producto.idProductos ? `${itemSelect.producto.idProductos}-${itemSelect.numero}` : '000';
                            itemSelect.producto && itemSelect.idFactDetalle
                                ? itemSelect.idFactDetalle + "-" + itemSelect.numero
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
        this.onClickConfirmCondiciones = function () {
            _this.condicionesConfirmadas = true;
        };
        this.onClickCancelarCondiciones = function () {
            _this.condicionesConfirmadas = false;
        };
        this.onClickConfirmAjuste = function () {
            var totalActual = _this.cotizacionDatos.total + _this.sumatoriaSubtotales;
            if (_this.valorRealFactura &&
                totalActual > 0 &&
                _this.valorRealFactura > 0) {
                if (_this.comprobante.moneda.idMoneda == 1 &&
                    Math.abs(_this.valorRealFactura - totalActual) < 10) {
                    _this.tablas.datos.productosPend[0].importe +=
                        _this.valorRealFactura - totalActual;
                    _this.tablas.datos.detallesFormaPago[0].monto +=
                        _this.valorRealFactura - totalActual;
                    _this.actualizarDatosProductos(true);
                    _this.refreshMontoDetallesFormaPago(true);
                    _this.ajusteConfirmado = true;
                    _this.utilsService.showModal("Éxito")("El ajuste se realizó correctamente")()();
                }
                else if (_this.comprobante.moneda.idMoneda == 2 &&
                    Math.abs(_this.valorRealFactura / _this.cotizacionDolarEditada -
                        totalActual) < 0.2) {
                    _this.tablas.datos.productosPend[0].importe +=
                        _this.valorRealFactura / _this.cotizacionDolarEditada -
                            totalActual;
                    _this.tablas.datos.detallesFormaPago[0].monto +=
                        _this.valorRealFactura / _this.cotizacionDolarEditada -
                            totalActual;
                    _this.actualizarDatosProductos(true);
                    _this.refreshMontoDetallesFormaPago(true);
                    _this.ajusteConfirmado = true;
                    _this.utilsService.showModal("Éxito")("El ajuste se realizó correctamente")()();
                }
                else {
                    _this.utilsService.showModal("Error")("La diferencia de totales es muy grande, contacte al gerente")()();
                }
            }
            else {
                _this.utilsService.showModal("Error")("Complete todos los campos e ingrese productos para ajustar")()();
            }
        };
        this.onClickCancelarAjuste = function () {
            _this.ajusteConfirmado = false;
        };
        this.onClickConfirmEdit = function (tipoColumnas) { return function (itemSelect) {
            // Todos los atributos 'enEdicion' distintos de undefined y también distintos de null o false, los seteo en false
            _this.tablas.columnas[tipoColumnas] = _this.tablas.columnas[tipoColumnas].map(function (tabla) {
                var newTabla = tabla;
                if (newTabla.enEdicion !== undefined && newTabla.enEdicion) {
                    // Seteo en false asi sale de edicion
                    newTabla.enEdicion = false;
                }
                return newTabla;
            });
            // Hago la sumatoria de los subtotales de la factura
            if (tipoColumnas === "columnasFactura") {
                if (_this.comprobante.moneda.idMoneda === 2) {
                    itemSelect.importeArs =
                        itemSelect.importeTotal * _this.cotizacionDolarEditada;
                }
                // Actualizo el Total Comprobante sumando todos los precios nuevamente (no le sumo directamente el precio editado porque no es un precio nuevo, sino que ya está y debería sumarle la diferencia editada nomás)
                _this.actualizarSumatoriaSubto();
                _this.refreshMontoDetallesFormaPago();
            }
            if (tipoColumnas === "columnasProductos") {
                // Cuando edita alguna cantidad, la cantidad no puede ser superior a la que esta cargada originalmente (salvo que sea = 0)
                /*if (this.estadoRelacionadoObligatorio == true) {
                    if (itemSelect.pendiente > itemSelect.original) {
                        alert("Atención !!! No se puede modificar la cantidad del comprobante: El valor ingresado no puede ser mayor al valor Original")
                        itemSelect.pendiente = itemSelect.original;
                        itemSelect.importe = itemSelect.original * Number(itemSelect.precio)
                        this.estadoEdicionCantidadProducto = true;
                    }
                } else {
    
                }*/
                _this.estadoEdicionCantidadProducto = false;
                // Actualizo el importe si y solo si esta editando productos, y si el importe viene modificado
                // Si el importe es 0, es la primer edicion por lo que calculo el importe
                if (itemSelect.importe === 0) {
                    itemSelect.importe =
                        itemSelect.pendiente * Number(itemSelect.precio);
                }
                else {
                    // Si el importe es igual al importe previo, entonces el importe NO se editó, por lo que seguramte se editó la cantidad o el precio y debo recalcular el importe
                    if (itemSelect.importe === itemSelect.auxPreviusImporte) {
                        itemSelect.importe =
                            itemSelect.pendiente * Number(itemSelect.precio);
                    }
                }
                // Guardo el importe para usarlo en la proxima edicion
                itemSelect.auxPreviusImporte = itemSelect.importe;
                // Refresco detalles forma pago casos particulares [SOLO si la grilla es la de articulos]
                _this.refreshMontoDetallesFormaPago();
            }
            // Actualizo datos del producto (si NO son las facturas lo que se edita)
            if (tipoColumnas !== "columnasFactura" &&
                tipoColumnas !== "columnasDetallesFp") {
                _this.actualizarDatosProductos();
            }
        }; };
        /**
         * Busca los productos pendientes de acuerdo al comprobante relacionado
         */
        this.onClickBuscarPendientes = function () {
            return _this.comprobanteCompraService
                .buscarPendientes(_this.proveedorSeleccionado)(_this.comprobanteRelacionado)(_this.comprobante)(_this.tipoOpSelect)
                .subscribe(function (prodsPend) {
                // Agrego los productos
                // this.tablas.datos.productosPend = _.uniqWith(
                //     this.tablas.datos.productosPend.concat(prodsPend),
                //     (a:ProductoPendiente,b:ProductoPendiente) =>    a.producto.idProductos === b.producto.idProductos &&
                //                                                     a.numero === b.numero
                // );
                // Borro los prods agregados anteriormente y los remplazo por estos que vienen acá
                _this.tablas.datos.productosPend = prodsPend;
                for (var i = 0; i < _this.tablas.datos.productosPend.length; i++) {
                    _this.precioOriginal.push({
                        idFactDetalle: _this.tablas.datos.productosPend[i]
                            .idFactDetalle,
                        precio: _this.tablas.datos.productosPend[i].precio,
                    });
                }
                _this.tablas.datos.productosPend.forEach(function (item, index) {
                    item.item = index;
                });
                console.log(_this.tablas.datos.productosPend);
                // Actualizo datos de los productos
                _this.actualizarDatosProductos();
                _this.refreshMontoDetallesFormaPago();
            }, function (error) { return _this.utilsService.decodeErrorResponse(error); });
        };
        /**
         * Agrega el producto seleccionado a la lista de productosPendientes
         */
        this.onClickProductoLista = function (prodSelec) {
            // Busco el producto seleccionado
            _this.comprobanteCompraService
                .buscarProducto(prodSelec.idProductos, _this.comprobante.moneda.idMoneda)
                .subscribe(function (prodEnc) {
                var auxProdSelect = Object.assign({}, prodEnc);
                // Seteo el nro del comprobante actual
                auxProdSelect.numero = _this.utilsService.numeroObjectToString(_this.comprobante.numerador);
                // Checkeo que no exista
                var existeProd = _this.tablas.datos.productosPend.find(function (prod) { return prod.idFactDetalle === auxProdSelect.idFactDetalle; }
                // prod => prod.producto.idProductos === auxProdSelect.producto.idProductos &&
                //         prod.numero === auxProdSelect.numero
                );
                if (!existeProd) {
                    _this.precioOriginal.push({
                        idFactDetalle: auxProdSelect.idFactDetalle,
                        precio: auxProdSelect.precio,
                    });
                    _this.tablas.datos.productosPend.push(_this.cotizacionDolarEditada > 0 &&
                        auxProdSelect.producto.moneda.descripcion ===
                            "u$s" &&
                        _this.comprobante.moneda.idMoneda === 1
                        ? __assign({}, auxProdSelect, { precio: (_this.cotizacionDolarEditada *
                                _this.precioOriginal[_this.precioOriginal.length - 1].precio) /
                                _this.cotizacionDatos.cotizacion
                                    .cotizacion }) : auxProdSelect);
                    _this.actualizarDatosProductos();
                }
                // Despues de agregar el producto procedo a ponerlo en edición
                _this.onClickEdit("columnasProductos")(auxProdSelect);
            });
        };
        this.onClickCancelar = function () {
            return _this.utilsService.showModal("Aviso")("¿Cancelar comprobante?")(function () {
                // Blanqueo los campos
                var auxFecha = _this.comprobante.fechaComprobante;
                _this.comprobante = new comprobante_1.Comprobante();
                _this.comprobante.fechaComprobante = auxFecha;
                _this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
                _this.proveedorSeleccionado = new padron_1.Padron();
                _this.tablas.datos.productosPend = [];
                _this.precioOriginal = [];
                _this.condicionesConfirmadas = false;
                _this.pesificado = false;
                _this.dolarizadoAlVto = false;
                _this.ajusteConfirmado = false;
                _this.valorRealFactura = null;
                _this.valorCalculadoFactura = null;
                _this.interesMensualCompra = 0.0;
                _this.canjeInsumos = false;
                _this.tipoCambio = "divisa";
                _this.tablas.datos.modelosFactura = [];
                // this.cotizacionDatos = { cotizacion: new Cotizacion(), total: 0 };
                _this.depositoSelec = new deposito_1.Deposito();
                _this.tablas.datos.detallesFormaPago = [];
                _this.cotizacionDolarEditada =
                    _this.cotizacionDatos.cotizacion.cotizacion;
            })({
                tipoModal: "confirmation",
            });
        };
        /**
         * Valida que la fecha ingresada esté en el intervalo permitido por el numerador
         */
        this.fechaComprobanteInvalida = function () {
            return _this.comprobante.numerador &&
                _this.comprobante.numerador.fechaApertura &&
                _this.comprobante.numerador.fechaCierre &&
                !moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.fechaComprobante)).isBetween(moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.numerador.fechaApertura)), moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.numerador.fechaCierre)), "days", "[]");
        };
        /**
         * Valida y graba el comprobante
         */
        this.onClickConfirmar = function () {
            return _this.utilsService.showModal("Aviso")("¿Confirmar comprobante?")(function () {
                if (_this.fechaComprobanteInvalida()) {
                    // Y le aviso
                    _this.utilsService.showModal("Error de fecha")("Fecha inv\u00E1lida para este punto de venta (Intervalo permitido: " + moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.numerador.fechaApertura)).format("DD-MM-YYYY") + " al " + moment(_this.utilsService.dateLikePickerToDate(_this.comprobante.numerador.fechaCierre)).format("DD-MM-YYYY") + ")")()();
                    return;
                }
                else {
                    // Spinner bar
                    _this.valueGuardandoCompro = 50;
                    // Actualizo las facturas antes de confirmar
                    _this.comprobanteCompraService
                        .buscaModelos(_this.tablas.datos.productosPend, _this.comprobante.moneda
                        ? _this.comprobante.moneda.idMoneda
                        : null, _this.proveedorSeleccionado.padronCodigo)
                        .subscribe(function (modelProds) {
                        // this.tablas.datos.modelosFactura = modelProds;
                        _this.actualizarSumatoriaSubto();
                        _this.comprobanteCompraService.confirmarYGrabarComprobante(_this.comprobante)(_this.comprobanteRelacionado)(_this.proveedorSeleccionado)(_this.tablas.datos.productosPend)(_this.tablas.datos.modelosFactura)(_this.cotizacionDolarEditada > 0
                            ? __assign({}, _this.cotizacionDatos, { cotizacion: __assign({}, _this.cotizacionDatos
                                    .cotizacion, { cotizacion: _this.cotizacionDolarEditada }) }) : _this.cotizacionDatos)(_this.depositoSelec)(_this.tablas.datos.detallesFormaPago)(_this.factura)(_this.tipoOpSelect)(_this.pesificado)(_this.dolarizadoAlVto)(_this.interesMensualCompra)(_this.canjeInsumos)(_this.tipoCambio)
                            .catch(function (err) {
                            // Saco spinner
                            _this.valueGuardandoCompro = 0;
                            return Observable_1.Observable.throw(null);
                        })
                            .subscribe(function (respuesta) {
                            // Saco spinner
                            _this.valueGuardandoCompro = 0;
                            // Modal para imprimir
                            var compCreado = new comprobanteEncabezado_1.ComprobanteEncabezado();
                            compCreado.idFactCab =
                                respuesta.datos.idFactCab;
                            compCreado.numero = Number("" + _this.comprobante.numerador.ptoVenta
                                .ptoVenta + _this.comprobante.numerador.ptoVenta.ptoVenta
                                .toString()
                                .padStart(8, "0"));
                            _this.utilsService.showImprimirModal(respuesta.control.codigo)(respuesta.control.descripcion)(function () {
                                return _this.recursoService.downloadComp(compCreado);
                            })(compCreado);
                            _this.llamarFunction(compCreado.idFactCab);
                            // this.utilsService.showModal(respuesta.control.codigo)(respuesta.control.descripcion)()();
                            // Blanqueo los campos
                            var auxFecha = _this.comprobante.fechaComprobante;
                            _this.comprobante = new comprobante_1.Comprobante();
                            _this.comprobante.fechaComprobante = auxFecha;
                            _this.comprobanteRelacionado =
                                new comprobanteRelacionado_1.ComprobanteRelacionado();
                            _this.proveedorSeleccionado = new padron_1.Padron();
                            _this.tablas.datos.productosPend = [];
                            _this.precioOriginal = [];
                            _this.condicionesConfirmadas = false;
                            _this.pesificado = false;
                            _this.dolarizadoAlVto = false;
                            _this.interesMensualCompra = 0.0;
                            _this.canjeInsumos = false;
                            _this.ajusteConfirmado = false;
                            _this.valorRealFactura = null;
                            _this.valorCalculadoFactura = null;
                            _this.tipoCambio = "divisa";
                            _this.tablas.datos.modelosFactura = [];
                            // this.cotizacionDatos = { cotizacion: new Cotizacion(), total: 0 };
                            _this.cotizacionDatos.total = 0;
                            _this.sumatoriaSubtotales = 0;
                            // this.depositoSelec = new Deposito()
                            _this.depositoSelec = null;
                            _this.tablas.datos.detallesFormaPago = [];
                            _this.cotizacionDolarEditada =
                                _this.cotizacionDatos.cotizacion.cotizacion;
                            // Refresco formas pago
                            _this.dataTablaFormasPago =
                                _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.formaPago)({
                                    codPadron: _this.proveedorSeleccionado
                                        ? _this.proveedorSeleccionado
                                            .padronCodigo
                                        : null,
                                    idSisModulo: sisModulos_1.default.compra,
                                });
                            // this.dataTablaFormasPago = null;
                            // this.tipoOpSelect = new SisTipoOperacion();
                            _this.tipoOpSelect = null;
                            // Focus en input proveedor (TODO SET TIME OUT)
                            document.getElementById("inputProveedor")
                                ? document
                                    .getElementById("inputProveedor")
                                    .focus()
                                : null;
                        });
                    });
                }
            })({
                tipoModal: "confirmation",
            });
        };
        ///////////////////////////////// Eventos (Distintos de onclick) /////////////////////////////////
        /**
         * Actualiza el total en cotizacion y los modelosFactura
         */
        this.llamarFunction = function (idFactCab) {
            _this.comprobanteService.mandaMailPdf(idFactCab);
        };
        this.actualizarDatosProductos = function (evitarSubtotal) {
            // Si tipoComprobante no incluye neto, el total es 0
            _this.cotizacionDatos.total = _this.comprobante.tipo.comprobante
                .incluyeNeto
                ? _.sumBy(_this.tablas.datos.productosPend, function (prod) {
                    return Number(prod.importe) ? Number(prod.importe) : 0;
                })
                : 0;
            // Busco las facturas de los productos
            if (!evitarSubtotal) {
                if (_this.tablas.datos.productosPend &&
                    _this.tablas.datos.productosPend.length > 0) {
                    _this.comprobanteCompraService
                        .buscaModelos(_this.tablas.datos.productosPend, _this.comprobante.moneda
                        ? _this.comprobante.moneda.idMoneda
                        : null, _this.proveedorSeleccionado.padronCodigo)
                        .subscribe(function (modelProds) {
                        _this.tablas.datos.modelosFactura = modelProds;
                        _this.tablas.datos.modelosFactura =
                            _this.tablas.datos.modelosFactura.map(function (element) {
                                return (element = __assign({}, element, { importeArs: _this.comprobante.moneda.idMoneda === 2
                                        ? element.importeTotal *
                                            _this.cotizacionDolarEditada
                                        : element.importeTotal }));
                            });
                        _this.actualizarSumatoriaSubto();
                    });
                }
                else {
                    _this.tablas.datos.modelosFactura = [];
                    _this.sumatoriaSubtotales = 0;
                }
            }
        };
        /**
         * Evento change del input del proovedor
         */
        this.onChangeInputProveedor = function (busqueda) {
            _this.proveedorSeleccionado = new padron_1.Padron();
            if (busqueda && busqueda.length >= 2) {
                _this.findProveedores(busqueda);
            }
            // Reseteo el indice
            _this.proveedorEnfocadoIndex = -1;
        };
        this.buscandoProveedor = false;
        this.findProveedores = _.throttle(function (busqueda) {
            _this.buscandoProveedor = true;
            _this.proveedores.filtrados.next([]);
            _this.recursoService
                .getRecursoList(resoursesREST_1.resourcesREST.padron)({
                grupo: gruposParametros_1.default.proveedor,
                elementos: busqueda,
            })
                .subscribe(function (proveedores) {
                _this.proveedores.filtrados.next(proveedores);
                _this.buscandoProveedor = false;
            });
        }, 400);
        /**
         * El blur es cuando se hace un leave del input (caundo se apreta click afuera por ejemplo).
         * Acá lo que hago es poner un array vacio como próx valor de los filtrados, cosa que la lista desaparezca porque no hay nada
         * También retorno el proveedor seleccionado en el input
         */
        this.onBlurInputProv = function (e) {
            // Actualizo proveedor seleccionado
            try {
                if (_this.proveedorSeleccionado &&
                    _this.proveedorSeleccionado.padronCodigo) {
                    _this.proveedorSeleccionado =
                        _this.proveedores.filtrados.value.find(function (prov) {
                            return prov.padronCodigo ===
                                Number(_this.proveedorSeleccionado.padronCodigo);
                        });
                    // Lo busco en la base de facturacion
                    _this.comprobanteCompraService
                        .checkIfProvExistInFacturacion(_this.proveedorSeleccionado)
                        .then(function (resp) {
                        // Si pasa, todo ok
                        // debugger;
                    })
                        .catch(function (err) {
                        // Si NO lo encuentra, le pido que lo cree
                        _this.utilsService.showModal("Aviso")("Proveedor no existente en nuestra base. ¿Desea crearlo?")(function () {
                            _this.router.navigate(["/pages/tablas/proveedores/nuevo"], {
                                queryParams: {},
                            });
                        })({ tipoModal: "confirmation" }, function () {
                            // this.dataVendedor = {
                            //     vendedor: new Vendedor(),
                            //     incluir: false
                            // };
                        });
                    });
                }
                // Vacio filtrados
                _this.proveedores.filtrados.next([]);
            }
            catch (err) {
                // Muestro error
                if (err && err.nombre && err.descripcion) {
                    _this.utilsService.showModal(err.nombre)(err.descripcion)()();
                }
                // Vacio proveedor seleccionado
                _this.proveedorSeleccionado = new padron_1.Padron();
            }
        };
        /**
         * Setea la fecha de compra calculandola dado un string en formato 'ddmm', parseando a 'dd/mm/aaaa'
         */
        this.onCalculateFecha = function (e) { return function (keyFecha) { return function (objetoContenedor) {
            // Si selecciona en el datePicker (el evento es una fecha de datelikepiker)
            if (e && e.day && e.month) {
                var fechaLikePicker = new dateLikePicker_1.DateLikePicker(null, e);
                if (keyFecha === "fechaComprobante") {
                    _this[objetoContenedor][keyFecha] = fechaLikePicker;
                }
            }
            if (!_this[objetoContenedor][keyFecha] ||
                (typeof _this[objetoContenedor][keyFecha] !== "string" &&
                    !_this[objetoContenedor][keyFecha].day &&
                    !_this[objetoContenedor][keyFecha].month))
                return;
            // La guardo
            _this[objetoContenedor][keyFecha] =
                _this.utilsService.stringToDateLikePicker(_this[objetoContenedor][keyFecha]);
            // Hago focus en el prox input
            // (keyFecha==='fechaComprobante') || (keyFecha==='fechaContable') ?
            //     document.getElementById(`fechaVto${this.utilsService.upperFirstLetter(objetoContenedor)}`).focus() : null;
        }; }; };
        /**
         * Evento blur de pto venta y numero en comprobante
         * tipo: puntoVenta o numero
         * keyTipoe: comprobante, comprobanteRelacionado
         */
        this.onBlurNumeroAutocomp = function (e) { return function (tipo) { return function (keyTipo) {
            return (_this[keyTipo][tipo] = _this.comprobanteCompraService.autocompNroComp(tipo)(_this[keyTipo]));
        }; }; };
        /**
         * Actualizo el deposito seleccionado que me viene de tablaIngreso
         */
        this.onSelectDeposito = function (depSelect) {
            _this.depositoSelec = depSelect;
        };
        /**
         * Evento de cuando se apreta felcha arriba o feclah abajo en input de busca proveedor
         */
        this.keyPressInputTexto = function (e) { return function (upOrDown) {
            e.preventDefault();
            // Hace todo el laburo de la lista popup y retorna el nuevo indice seleccionado
            _this.proveedorEnfocadoIndex =
                _this.popupListaService.keyPressInputForPopup(upOrDown)(_this.proveedores.filtrados.value)(_this.proveedorEnfocadoIndex);
        }; };
        /**
         * Evento on enter en el input de buscar proveedor
         */
        this.onEnterInputProv = function (e) {
            e.preventDefault();
            _this.proveedores.filtrados.subscribe(function (provsLista) {
                // Busco el producto
                var provSelect = provsLista && provsLista.length
                    ? provsLista[_this.proveedorEnfocadoIndex]
                    : null;
                // Lo selecciono
                provSelect ? _this.popupLista.onClickListProv(provSelect) : null;
                // Reseteo el index
                _this.proveedorEnfocadoIndex = -1;
            });
        };
        /**
         * Agrega o elimina una forma pago de las seleccionadas. Tambien muestra detalle de la lista correspondiente
         */
        this.handleFormaPagoSelec = function (fp) { return function (tipoOperacion) {
            // Agrego o elimino
            if (tipoOperacion === "add") {
                // Primero los borro (si quedaorn de anbtes)
                _this.formasPagoSeleccionadas = _this.formasPagoSeleccionadas.filter(function (fpSelec) { return fpSelec.idFormaPago !== fp.idFormaPago; });
                // Ahora los agrego
                _this.formasPagoSeleccionadas.push(fp);
            }
            else {
                _this.formasPagoSeleccionadas = _this.formasPagoSeleccionadas.filter(function (fpSelec) { return fpSelec.idFormaPago !== fp.idFormaPago; });
            }
            // Ahora mappeo los detalles de las formas de pago seleccionadas para mostrarlos en la grilla de el medio
            _this.tablas.datos.detallesFormaPago = _this.formasPagoSeleccionadas
                .map(function (fp) {
                return Object.assign([], fp.detalles).map(function (det) {
                    var auxDet = Object.assign({}, det);
                    auxDet.formaPagoDescrip = fp.descripcion;
                    return auxDet;
                });
            })
                .reduce(function (a, b) { return a.slice().concat(b.slice()); }, []); // Aca aplasto el array bidimensional a uno de una dimensión
            // Caso especial: La forma de pago seleccionada es contado, por lo que detalles va a ser length === 1. Entonces le sugieron que el monto a pagar sea el mismo que el resto a pagar
            _this.refreshMontoDetallesFormaPago();
        }; };
        /**
         * Refresca el monto. Es un caso particular
         */
        this.refreshMontoDetallesFormaPago = function (noCambiarOriginal) {
            if (_this.tablas.datos.detallesFormaPago &&
                _this.tablas.datos.detallesFormaPago.length === 1) {
                // Esto es un horror, pero me da paja mejorarlo
                setTimeout(function () {
                    var auxDetalleMutado = Object.assign({}, _this.tablas.datos.detallesFormaPago[0]);
                    auxDetalleMutado.monto =
                        _this.cotizacionDatos.total + _this.sumatoriaSubtotales;
                    var nuevosDetalles = [auxDetalleMutado];
                    _this.tablas.datos.detallesFormaPago = nuevosDetalles;
                    if (!noCambiarOriginal) {
                        _this.valorCalculadoFactura = 0;
                        _this.tablas.datos.detallesFormaPago.forEach(function (detalle) {
                            _this.valorCalculadoFactura += detalle.monto;
                        });
                    }
                    // debugger;
                }, 1000);
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
        /**
         * Evento cuando cambio cteTipo en comprobante
         */
        this.onChangeCteTipo = function (cteTipoSelect) {
            _this.tiposComprobantesRel = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                sisModulo: sisModulos_1.default.compra,
                idCteTipo: cteTipoSelect.idCteTipo,
                sisTipoOperacion: _this.tipoOpSelect.idSisTipoOperacion,
            });
            _this.tituloCardComprobante =
                "COMPROBANTE: " + cteTipoSelect.descripcion;
            _this.comprobante.numerador = new numerador_1.Numerador();
            if (cteTipoSelect.comprobante.relacionadoObligatorio == true) {
                _this.estadoRelacionadoObligatorio = true;
            }
            else {
                _this.estadoRelacionadoObligatorio = false;
            }
            // Actualizo total cotizacion (si no incluye neto, es 0)
            // this.cotizacionDatos.total =
            //     this.comprobante.tipo.comprobante.incluyeNeto ?
            //         _.sumBy(
            //             this.tablas.datos.productosPend,
            //             (prod) => Number(prod.importe) ? Number(prod.importe) : 0
            //         ) : 0;
            // // Actualizo sumatoria subtotales
            // this.actualizarSumatoriaSubto();
            // Blanqueo todo lo que le sigue
            _this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
            _this.tablas.datos.productosPend = [];
            _this.precioOriginal = [];
            _this.tablas.datos.modelosFactura = [];
            _this.tablas.datos.detallesFormaPago = [];
            _this.pesificado = false;
            _this.condicionesConfirmadas = false;
            _this.dolarizadoAlVto = false;
            _this.interesMensualCompra = 0.0;
            _this.canjeInsumos = false;
            _this.tipoCambio = "divisa";
            // Limpio formas pago
            // this.dataTablaFormasPago = null;
            // this.formasPagoSeleccionadas = [];
            // Limpio cotizacion datos
            _this.cotizacionDatos.total = 0;
            _this.sumatoriaSubtotales = 0;
            // Actualizo monedas
            _this.monedas.next(cteTipoSelect.comprobante.monedas);
        };
        // HARD Codign Exxxxtreme
        this.compareFnMonedas = function (m1, m2) {
            return m1 && m2 ? m1.idMoneda === m2.idMoneda : m1 === m2;
        };
        // m1 ? m1.idMoneda === 1 : false
        /**
         * Busca facturas
         */
        this.fetchFacturas = function () {
            // Busco las facturas de los productos
            _this.comprobanteCompraService
                .buscaModelos(_this.tablas.datos.productosPend, _this.comprobante.moneda
                ? _this.comprobante.moneda.idMoneda
                : null, _this.proveedorSeleccionado.padronCodigo)
                .subscribe(function (modelProds) {
                _this.tablas.datos.modelosFactura = modelProds;
                _this.tablas.datos.modelosFactura =
                    _this.tablas.datos.modelosFactura.map(function (element) {
                        return (element = __assign({}, element, { importeArs: _this.comprobante.moneda.idMoneda === 2
                                ? element.importeTotal *
                                    _this.cotizacionDolarEditada
                                : element.importeTotal }));
                    });
                _this.actualizarSumatoriaSubto();
            });
        };
        /**
         * Cuyando cambia el tipo operacion se actualizan los tipos comprobantes
         */
        this.onChangeTipoOperacion = function (tipoOpSelect) {
            _this.depositosAMostrar = [];
            _this.tiposComprobantes = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                sisTipoOperacion: tipoOpSelect.idSisTipoOperacion,
                sisSitIva: _this.proveedorSeleccionado && _this.proveedorSeleccionado.condIva
                    ? _this.proveedorSeleccionado.condIva.descCorta
                    : null,
            });
            //this.depositosAMostrar = this.depositosFiltrados.map(tiposOpDepositos => tiposOpDepositos.idSisTipoOperacion == tipoOpSelect.idSisTipoOperacion);
            for (var i = 0; i < _this.allDepositos.length; i++) {
                if (_.includes(_this.filtro[tipoOpSelect.idSisTipoOperacion], _this.allDepositos[i].idDeposito)) {
                    _this.depositosAMostrar.push(_this.allDepositos[i]);
                }
            }
            if (_this.depositosAMostrar.length === 0) {
                _this.depositosAMostrar = _this.allDepositos;
            }
            /*this.depositos = this.recursoService.getRecursoList(resourcesREST.depositos)({
                todos: tipoOpSelect.depositoDestino
            });*/
            _this.limpioComprobanteYGrilla();
        };
        this.limpioComprobanteYGrilla = function () {
            // Limpio grillas y datos comprobante
            _this.comprobante = new comprobante_1.Comprobante();
            _this.comprobanteRelacionado = new comprobanteRelacionado_1.ComprobanteRelacionado();
            _this.tablas.datos.productosPend = [];
            _this.precioOriginal = [];
            _this.pesificado = false;
            _this.condicionesConfirmadas = false;
            _this.dolarizadoAlVto = false;
            _this.interesMensualCompra = 0.0;
            _this.canjeInsumos = false;
            _this.tipoCambio = "divisa";
            _this.tablas.datos.modelosFactura = [];
            _this.cotizacionDatos.total = 0;
            _this.sumatoriaSubtotales = 0;
            _this.depositoSelec = null;
            _this.tablas.datos.detallesFormaPago = [];
            _this.cotizacionDolarEditada =
                _this.cotizacionDatos.cotizacion.cotizacion;
            // Refresco formas pago
            _this.dataTablaFormasPago = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.formaPago)({
                codPadron: _this.proveedorSeleccionado
                    ? _this.proveedorSeleccionado.padronCodigo
                    : null,
                idSisModulo: sisModulos_1.default.compra,
            });
        };
        /**
         * Checkea si el resto a pagar es valido
         */
        this.isRestoPagarValid = function () {
            if (_this.comprobante.tipo.requiereFormaPago) {
                /*
                 * El importe no es valido si es CERO y No se permite importe cero
                 */
                var importeCeroValido = _this.comprobante &&
                    _this.comprobante.tipo &&
                    _this.comprobante.tipo.comprobante &&
                    _this.cotizacionDatos.total + _this.sumatoriaSubtotales === 0 &&
                    _this.comprobante.tipo.comprobante.permiteImporteCero;
                return (importeCeroValido ||
                    _this.calcRestoPagar() === "0.00" ||
                    _this.calcRestoPagar() === "0");
            }
            else {
                return true;
            }
        };
        /**
         * Calcula el resto pagar
         */
        this.calcRestoPagar = function () {
            var sumMontos = _.sumBy(_this.tablas.datos.detallesFormaPago, function (fPago) { return (Number(fPago.monto) ? Number(fPago.monto) : 0); });
            // Los paréntesis son ilustrativos, ya sabemos que la suma es asociativa y conmutativa
            var restoPagar = _this.utilsService.toLocateString2(Number(_this.cotizacionDatos.total +
                _this.sumatoriaSubtotales -
                sumMontos).toFixed(2));
            /*console.log(restoPagar);
            restoPagar = parseFloat(restoPagar);
            console.log(restoPagar);*/
            return restoPagar === "-0.00" ? "0.00" : restoPagar;
        };
        // onBlurNumeroCteRelacionado = (evento) => {
        //     this.onBlurNumeroAutocomp(evento)('numero')('comprobanteRelacionado')
        //     // Focus en input para agregar producto
        //     document.getElementById('addInput') ? document.getElementById('addInput').focus() : null
        // }
        this.onBlurOrEnterFechaComp = function ($event) {
            _this.onCalculateFecha($event)("fechaComprobante")("comprobante");
            // Hago foco en el primer checbkox de la sformas de pago (el timeout es necesario para que espere a que se haga la consulta)
            // en gral esta consulta dura poquito (entre 10 y 40 milisegundos). Por eso con 150 milisegundos de espera es mas que suficiente
            setTimeout(function () {
                // Hago focus al siguiente elemento (la lista de forma pagos, primer elemento)
                var primerCheckBoxFp = document.getElementById("fp-check-0");
                if (primerCheckBoxFp) {
                    // primerCheckBoxFp.checked = true;
                    primerCheckBoxFp.focus();
                }
            }, 150);
        };
        this.onBlurOrEnterFechaVtoComp = function ($event) {
            _this.onCalculateFecha($event)("fechaVto")("comprobante");
            // Hago foco en el primer checbkox de la sformas de pago (el timeout es necesario para que espere a que se haga la consulta)
            // en gral esta consulta dura poquito (entre 10 y 40 milisegundos). Por eso con 150 milisegundos de espera es mas que suficiente
            setTimeout(function () {
                // Hago focus al siguiente elemento (la lista de forma pagos, primer elemento)
                var primerCheckBoxFp = document.getElementById("fp-check-0");
                if (primerCheckBoxFp) {
                    // primerCheckBoxFp.checked = true;
                    primerCheckBoxFp.focus();
                }
            }, 150);
        };
        this.onBlurOrEnterFechaContableComp = function ($event) {
            _this.onCalculateFecha($event)("fechaContable")("comprobante");
            // Hago foco en el primer checbkox de la sformas de pago (el timeout es necesario para que espere a que se haga la consulta)
            // en gral esta consulta dura poquito (entre 10 y 40 milisegundos). Por eso con 150 milisegundos de espera es mas que suficiente
            setTimeout(function () {
                // Hago focus al siguiente elemento (la lista de forma pagos, primer elemento)
                var primerCheckBoxFp = document.getElementById("fp-check-0");
                if (primerCheckBoxFp) {
                    // primerCheckBoxFp.checked = true;
                    primerCheckBoxFp.focus();
                }
            }, 150);
        };
        /**
         * En seleccionado por defectp giardp ptoventa y numerador
         */
        this.onChangePtoVentaNro = function (selectNumerador) {
            // this.comprobante.fechaComprobante = new DateLikePicker(
            //     new Date(selectNumerador.fechaApertura)
            // );
        };
        // ngIfNumeradorComprobante = () => {
        //     if (
        //         !(
        //             this.comprobante &&
        //             this.comprobante.letraCodigo &&
        //             this.comprobante.letraCodigo.numeradores &&
        //             this.comprobante.letraCodigo.numeradores.length > 0
        //         )
        //     ) {
        //         if (!this.comprobante.numerador || !this.comprobante.numerador.ptoVenta) {
        //             if (!this.comprobante.numerador) {
        //                 this.comprobante.numerador = new Numerador();
        //             }
        //             this.comprobante.numerador.ptoVenta = new PtoVenta();
        //         }
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
        // ngIfNumeradorFactura = () => {
        //     if (
        //         !(
        //             this.factura &&
        //             this.factura.letraCodigo &&
        //             this.factura.letraCodigo.numeradores &&
        //             this.factura.letraCodigo.numeradores.length > 0
        //         )
        //     ) {
        //         if (!this.factura.numerador) {
        //             this.factura.numerador = new Numerador();
        //         }
        //         if (!this.factura.numerador.ptoVenta) {
        //             this.factura.numerador.ptoVenta = new PtoVenta();
        //         }
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
        this.onBlurPtoVenta = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobante.numerador &&
                _this.comprobante.numerador.ptoVenta
                ? (_this.comprobante.numerador.ptoVenta.ptoVenta =
                    _this.comprobante.numerador.ptoVenta.ptoVenta.padStart(4, "0"))
                : null;
        };
        this.onBlurNumerador = function (e) {
            return _this.utilsService.onBlurInputNumber(e) &&
                _this.comprobante.numerador &&
                _this.comprobante.numerador.numerador
                ? (_this.comprobante.numerador.numerador =
                    _this.comprobante.numerador.numerador.padStart(8, "0"))
                : null;
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
        this.onChangeLetra = function (letraSelect) {
            return (_this.comprobante.numerador =
                letraSelect &&
                    letraSelect.numeradores &&
                    letraSelect.numeradores.length > 0
                    ? letraSelect.numeradores[0]
                    : null);
        };
        /**
         * Deshabilita btn grabar de acuerdo a diferentes parámetors
         */
        this.isDisabledConfirm = function () {
            // const auxPermiteImporteCero = this.comprobante.tipo && this.comprobante.tipo.comprobante ?
            //     this.comprobante.tipo.comprobante.permiteImporteCero : false;
            var datosNoValidos = !_this.comprobanteCompraService.checkIfDatosValidosComprobante(_this.comprobante)(_this.proveedorSeleccionado)(_this.tablas.datos.productosPend)(_this.tablas.datos.modelosFactura)(_this.depositoSelec);
            // Si permite importe cero, la forma de pago NO se controla (por eso retorno false)
            var formaPagoNoValido = _this.comprobante &&
                _this.comprobante.tipo &&
                _this.comprobante.tipo.requiereFormaPago &&
                (!_this.tablas.datos.detallesFormaPago ||
                    _this.tablas.datos.detallesFormaPago.length <= 0);
            var restoPagarNoValido = _this.tablas.datos.detallesFormaPago &&
                _this.tablas.datos.detallesFormaPago.length > 0 &&
                !_this.isRestoPagarValid();
            var noPermiteImporteCero = _this.cotizacionDatos &&
                _this.comprobante.tipo &&
                _this.comprobante.tipo.comprobante &&
                _this.cotizacionDatos.total + _this.sumatoriaSubtotales === 0 &&
                !_this.comprobante.tipo.comprobante.permiteImporteCero;
            var condicionesComercializacionNoValidas = _this.comprobante &&
                _this.comprobante.tipo &&
                _this.comprobante.tipo.comprobante &&
                _this.comprobante.tipo.comprobante.idSisComprobantes == 4
                ? !_this.condicionesConfirmadas
                : false;
            return (datosNoValidos ||
                restoPagarNoValido ||
                formaPagoNoValido ||
                noPermiteImporteCero ||
                condicionesComercializacionNoValidas);
        };
        this.onChangeCotDolar = function () {
            if (_this.tablas.datos.productosPend &&
                _this.tablas.datos.productosPend.length > 0 &&
                _this.cotizacionDolarEditada > 0 &&
                _this.comprobante.moneda.idMoneda != 2) {
                var tablaProductos = _this.tablas.datos.productosPend.map(function (element, i) {
                    if (element.moneda === "u$s" ||
                        element.producto.moneda.descripcion === "u$s") {
                        var nuevoPrecio = (_this.cotizacionDolarEditada *
                            _this.precioOriginal[i].precio) /
                            _this.cotizacionDatos.cotizacion.cotizacion;
                        return __assign({}, element, { precio: nuevoPrecio, importe: nuevoPrecio * element.pendiente });
                    }
                    else {
                        return element;
                    }
                });
                _this.tablas.datos.productosPend = tablaProductos;
                _this.actualizarDatosProductos();
            }
            if (_this.comprobante.moneda.idMoneda === 2) {
                for (var i = 0; i < _this.tablas.datos.modelosFactura.length; i++) {
                    _this.tablas.datos.modelosFactura[i].importeArs =
                        _this.tablas.datos.modelosFactura[i].importeTotal *
                            _this.cotizacionDolarEditada;
                }
            }
        };
        this.onMonedaChange = function (event) {
            if (event.idMoneda === 2) {
                _this.tablas.columnas.columnasFactura =
                    _this.comprobanteCompraService.getColumnsFacturaDolares();
            }
            else {
                _this.tablas.columnas.columnasFactura =
                    _this.comprobanteCompraService.getColumnsFactura();
            }
        };
        this.comprobante.numerador = new numerador_1.Numerador();
        ////////// Barra de progreso ///////////
        configProgressBar.max = 100;
        configProgressBar.striped = true;
        configProgressBar.animated = true;
        configProgressBar.type = "success";
        this.preCargaPadron = "Cargando proovedores, espere...";
        this.statusCargaPadron = false;
        ////////// Listas desplegables  //////////
        this.tiposOperacion = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisTipoOperacion)({
            sisModulo: 1,
        });
        // this.monedas = this.recursoService.getRecursoList(resourcesREST.sisMonedas)();
        // this.depositos = this.recursoService.getRecursoList(resourcesREST.depositos)();
        this.tiposComprobantesFactura = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
            sisComprobante: 2,
        });
        this.dataTablaFormasPago = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.formaPago)({
            codPadron: this.proveedorSeleccionado
                ? this.proveedorSeleccionado.padronCodigo
                : null,
            idSisModulo: sisModulos_1.default.compra,
        });
        ////////// Proveedores  //////////
        this.recursoService
            .getRecursoList(resoursesREST_1.resourcesREST.padron)({
            grupo: gruposParametros_1.default.proveedor,
        })
            .subscribe(function (proveedores) {
            // this.proveedores.todos = proveedores;
            _this.proveedores.filtrados.next(proveedores);
            _this.preCargaPadron = "Proovedor";
            _this.statusCargaPadron = true;
        });
        ////////// Tablas //////////
        this.tablas.columnas.columnasProductos =
            comprobanteCompraService.getColumnsProductos();
        this.tablas.columnas.columnasTrazabilidad =
            comprobanteCompraService.getColumnsTrazabilidad();
        this.tablas.columnas.columnasFactura =
            comprobanteCompraService.getColumnsFactura();
        this.tablas.columnas.columnasDetallesFp =
            comprobanteCompraService.getColumnsDetallesFp();
        this.recursoService
            .getRecursoList(resoursesREST_1.resourcesREST.tiposOpDepositos)()
            .subscribe(function (data) {
            _this.sisTiposOpDepositos = data;
            for (var i = 0; i < _this.sisTiposOpDepositos.length; i++) {
                if (!_this.filtro[_this.sisTiposOpDepositos[i].idSisTipoOperacion]) {
                    _this.filtro[_this.sisTiposOpDepositos[i].idSisTipoOperacion] = [];
                }
                _this.filtro[_this.sisTiposOpDepositos[i].idSisTipoOperacion].push(_this.sisTiposOpDepositos[i].idDepositos);
            }
        });
        this.recursoService
            .getRecursoList(resoursesREST_1.resourcesREST.depositos)({
            todos: 1,
        })
            .subscribe(function (data) {
            _this.allDepositos = data;
        });
        ////////// Otros //////////
        this.comprobanteCompraService
            .getCotizacionDatos()
            .subscribe(function (cotizDatos) {
            _this.cotizacionDatos.cotizacion = cotizDatos;
            _this.cotizacionDolarEditada = cotizDatos.cotizacion;
        });
    }
    // Checkea cambios antes de salir
    ComprobanteCompra.prototype.canDeactivate = function () {
        return this.comprobanteCompraService.checkPendingChanges(this.comprobante)(this.factura)(this.proveedorSeleccionado)(this.comprobanteRelacionado);
    };
    ComprobanteCompra.prototype.ngAfterViewInit = function () {
        // Focus en input proveedor
        document.getElementById("inputProveedor")
            ? document.getElementById("inputProveedor").focus()
            : null;
    };
    return ComprobanteCompra;
}());
__decorate([
    core_1.HostListener("window:beforeunload"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComprobanteCompra.prototype, "canDeactivate", null);
ComprobanteCompra = __decorate([
    core_1.Component({
        selector: "comprobante-compra",
        template: __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/comprobanteCompra.html"),
        styles: [__webpack_require__("./src/app/pages/main/compras/comprobanteCompra/comprobanteCompra.scss")],
        providers: [ng_bootstrap_1.NgbProgressbarConfig],
    })
    /**
     * Form reutilizable
     */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof comprobanteCompraService_1.ComprobanteCompraService !== "undefined" && comprobanteCompraService_1.ComprobanteCompraService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object, typeof (_d = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _d || Object, typeof (_e = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _e || Object, typeof (_f = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _f || Object, typeof (_g = typeof ng_bootstrap_1.NgbProgressbarConfig !== "undefined" && ng_bootstrap_1.NgbProgressbarConfig) === "function" && _g || Object, typeof (_h = typeof authService_1.AuthService !== "undefined" && authService_1.AuthService) === "function" && _h || Object])
], ComprobanteCompra);
exports.ComprobanteCompra = ComprobanteCompra;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=comprobanteCompra.component.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/comprobanteCompra.html":
/***/ (function(module, exports) {

module.exports = "<ba-card class=\"comprobante-compra\">\r\n    <form #compForm=\"ngForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-2\">\r\n                <label for=\"proveedorSeleccionado\">{{preCargaPadron}}</label>\r\n                <div class=\"form-group inline-group\">\r\n\r\n                    <input  #inputProveedorDom\r\n                            autocomplete=\"off\"\r\n                            id=\"inputProveedor\"\r\n                            (blur)=\"onBlurInputProv($event)\"\r\n                            (ngModelChange)=\"onChangeInputProveedor($event)\"\r\n                            [(ngModel)]=\"proveedorSeleccionado.padronCodigo\"\r\n                            name=\"padronCod\"\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            placeholder=\"\"\r\n                            (keyup.enter)=\"onEnterInputProv($event)\"\r\n                            (keydown.arrowdown)=\"keyPressInputTexto($event)('down')\"\r\n                            (keydown.arrowup)=\"keyPressInputTexto($event)('up')\"\r\n                            required\r\n                            >\r\n\r\n                    <div\r\n                        class=\"spinner-prov-container\"\r\n                        *ngIf=\"\r\n                            utilsService.ifFocused(inputProveedorDom)\r\n                            &&\r\n                            (\r\n                                !proveedorSeleccionado ||\r\n                                !proveedorSeleccionado.padronApelli\r\n                            )\r\n                            &&\r\n                            proveedorSeleccionado && proveedorSeleccionado.padronCodigo && proveedorSeleccionado.padronCodigo.length > 0\r\n                            &&\r\n                            buscandoProveedor\r\n                        \">\r\n                        <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <popup-lista    *ngIf=\"utilsService.ifFocused(inputProveedorDom)\"\r\n                            [items]=\"proveedores.filtrados.asObservable().distinctUntilChanged()\"\r\n                            [keysToShow]=\"['padronApelli', 'padronNombre', 'padronCodigo']\"\r\n                            [onClickItem]=\"popupLista.onClickListProv\"\r\n                            [fatherPosition]=\"popupLista.getOffsetOfInputProveedor()\">\r\n            </popup-lista>\r\n\r\n            <div class=\"col-sm-3\">\r\n                <label for=\"cuit\">NOMBRE Y APELLIDO</label>\r\n                <div class=\"form-group\">\r\n                    <input autocomplete=\"off\"  [disabled]=\"true\" name=\"padronApellido\" [(ngModel)]=\"proveedorSeleccionado.padronApelli\" type=\"text\" class=\"form-control\" id=\"nombreProveedor\" placeholder=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <label for=\"cuit\">CUIT</label>\r\n                <div class=\"form-group inline-group\">\r\n\r\n                    <input autocomplete=\"off\"  [disabled]=\"true\" name=\"cuitPadr\" [(ngModel)]=\"proveedorSeleccionado.cuit\" type=\"text\" class=\"form-control\" id=\"cuit\" placeholder=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n                <label for=\"iva\">SIT.</label>\r\n                <div class=\"form-group inline-group\">\r\n\r\n                    <input autocomplete=\"off\"  [disabled]=\"true\" name=\"descCortaIva\" [ngModel]=\"proveedorSeleccionado.condIva ? proveedorSeleccionado.condIva.descCorta : ''\" type=\"text\" class=\"form-control\" id=\"iva\" placeholder=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <label for=\"tipoOperacionSelect\">Tipo Operacion:</label>\r\n                <div class=\"form-group inline-group\">\r\n\r\n                    <select\r\n                        required\r\n                        class=\"form-control without-padding\"\r\n                        name=\"tipoOPselec\"\r\n                        [(ngModel)]=\"tipoOpSelect\"\r\n                        (ngModelChange)=\"onChangeTipoOperacion($event)\"\r\n                        [ngStyle]=\"{padding: '0px 8px 0px 8px'}\" id=\"tipoOperacionSelect\">\r\n                        <option *ngFor=\"let tipoOp of tiposOperacion | async\" [ngValue]=\"tipoOp\">\r\n                            {{tipoOp.descripcion}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n                <label class=\"add-item-label\" for=\"depositoInput\">Deposito: </label>\r\n                <div class=\"form-group inline-group\">\r\n                      <select required [compareWith]=\"utilsService.dropdownCompareWith\" name=\"depoSelect\" [(ngModel)]=\"depositoSelec\" class=\"form-control without-padding\">\r\n                        <option *ngFor=\"let dep of depositosAMostrar\" [ngValue]=\"dep\">\r\n                            {{dep.descripcion}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row custom-card-container\">\r\n            <custom-card class=\"col-sm-6 card-flex-column\" title=\"{{ tituloCardComprobante }}\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-4 without-padding\">\r\n                        <div class=\"col-sm-6 inline-flex\">\r\n                            <div class=\"form-group inline-group\">\r\n                                <label for=\"cteTipo\">Cte:</label>\r\n                                <select\r\n                                    id=\"cteTipo\" name=\"compTipoSelect\" required\r\n                                    class=\"form-control without-padding\" [ngStyle]=\"{ padding: '1px 8px 0px 8px', 'min-width': '55px', 'margin-top': '1px' }\"\r\n                                    [(ngModel)]=\"comprobante.tipo\"\r\n                                    (ngModelChange)=\"onChangeCteTipo($event)\"\r\n                                    >\r\n                                    <option *ngFor=\"let tipoComp of tiposComprobantes | async\" [ngValue]=\"tipoComp\">\r\n                                        {{tipoComp.descCorta}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-5 inline-flex\">\r\n                            <div class=\"form-group inline-group\">\r\n                                <select\r\n                                    *ngIf=\"comprobante && comprobante.tipo && comprobante.tipo.letrasCodigos\"\r\n                                    id=\"cteTipo\" class=\"form-control without-padding\" name=\"letraSelct\" required\r\n                                    [ngStyle]=\"{padding: '1px 2px 0px 8px', 'min-width': '55px'}\"\r\n                                    [(ngModel)]=\"comprobante.letraCodigo\"\r\n                                    (ngModelChange)=\"onChangeLetra($event)\"\r\n                                    >\r\n                                    <option *ngFor=\"let lc of comprobante.tipo.letrasCodigos\" [ngValue]=\"lc\">\r\n                                        {{ lc.letra.letra }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-5 without-padding\">\r\n                        <div [ngStyle]=\"{'justify-content': 'center'}\" class=\"form-group inline-group\">\r\n                            <label for=\"cteNro\">Nro:</label>\r\n                            <div *ngIf=\"\r\n                                comprobante &&\r\n                                comprobante.letraCodigo &&\r\n                                comprobante.letraCodigo.numeradores &&\r\n                                comprobante.letraCodigo.numeradores.length > 0\r\n                                \">\r\n                                <select     required\r\n                                            id=\"selectPtoVentaNum\"\r\n                                            class=\"form-control\"\r\n                                            [ngStyle]=\"{padding: '1px 8px 0px 8px'}\"\r\n                                            name=\"compNumerador\"\r\n                                            [(ngModel)]=\"comprobante.numerador\"\r\n                                            (ngModelChange)=\"onChangePtoVentaNro($event)\"\r\n                                            >\r\n                                    <option *ngFor=\"let upNum of comprobante.letraCodigo.numeradores\" [ngValue]=\"upNum\">\r\n                                        {{\r\n                                            upNum.ptoVenta.ptoVenta.toString().padStart(4, '0')\r\n                                        }} - {{\r\n                                            upNum.numerador.toString().padStart(8, '0')\r\n                                        }}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                            <!-- *ngIf=\"ngIfNumeradorComprobante()\" -->\r\n                            <div\r\n                                *ngIf=\"comprobanteService.comprobanteContainNumerador(comprobante)\"\r\n                                [ngStyle]=\"{display: 'flex'}\"\r\n                                >\r\n                                <input autocomplete=\"off\"   required\r\n                                        maxlength=\"4\"\r\n                                        (blur)=\"\r\n                                            onBlurPtoVenta($event)\r\n                                        \"\r\n                                        name=\"compPtoVenta\"\r\n                                        [(ngModel)]=\"comprobante.numerador.ptoVenta.ptoVenta\"\r\n                                        type=\"text\" class=\"form-control pre-numero-input text-right\" id=\"puntoVenta\" placeholder=\"\">\r\n\r\n                                <input autocomplete=\"off\"   required\r\n                                        maxlength=\"8\"\r\n                                        (blur)=\"\r\n                                            onBlurNumerador($event)\r\n                                        \"\r\n                                        name=\"compNumero\"\r\n                                        [(ngModel)]=\"comprobante.numerador.numerador\"\r\n                                        type=\"text\" class=\"form-control text-right\" id=\"numero\" placeholder=\"\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                        <div class=\"form-group inline-group\">\r\n                            <label for=\"cteMoneda\">Moneda:</label>\r\n                            <select required [compareWith]=\"compareFnMonedas\" name=\"compMoneda\" [(ngModel)]=\"comprobante.moneda\" (ngModelChange)=\"onMonedaChange($event)\" class=\"form-control without-padding\" [ngStyle]=\"{padding: '2px 8px 0px 8px'}\" id=\"cteMoneda\">\r\n                                <option *ngFor=\"let mon of monedas | async\" [ngValue]=\"mon\">\r\n                                    {{mon.descripcion}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group inline-group last-child-custom-card\">\r\n                            <label for=\"fechaComprobante\">Fecha Emisión: </label>\r\n                            <div class=\"input-group\">\r\n                                <input autocomplete=\"off\"   required\r\n                                        [disabled]=\"\r\n                                    !comprobante ||\r\n                                    !comprobante.letraCodigo ||\r\n                                    (\r\n                                        comprobante &&\r\n                                        comprobante.letraCodigo &&\r\n                                        comprobante.letraCodigo.numeradores &&\r\n                                        comprobante.letraCodigo.numeradores.length > 0 &&\r\n                                        (\r\n                                            !comprobante.numerador || !comprobante.numerador.fechaApertura\r\n                                        )\r\n                                    )\r\n                                \"\r\n                                        (ngModelChange)=\"onCalculateFecha($event)('fechaComprobante')('comprobante')\"\r\n                                        (blur)=\"onCalculateFecha($event)('fechaComprobante')('comprobante')\"\r\n                                        (keyup.enter)=\"onCalculateFecha($event)('fechaComprobante')('comprobante')\"\r\n                                        class=\"form-control\"\r\n                                        placeholder=\"dd/mm/aaaa\"\r\n                                        name=\"fechaComp\"\r\n                                        [(ngModel)]=\"comprobante.fechaComprobante\"\r\n                                        ngbDatepicker\r\n                                        #dComp=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"dComp.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group inline-group last-child-custom-card\">\r\n                            <label for=\"fechaVto\">Fecha Vencimiento: </label>\r\n                            <div class=\"input-group\">\r\n                                <input autocomplete=\"off\"   required\r\n                                [disabled]=\"\r\n                                    !comprobante ||\r\n                                    !comprobante.letraCodigo ||\r\n                                    (\r\n                                        comprobante &&\r\n                                        comprobante.letraCodigo &&\r\n                                        comprobante.letraCodigo.numeradores &&\r\n                                        comprobante.letraCodigo.numeradores.length > 0 &&\r\n                                        (\r\n                                            !comprobante.numerador || !comprobante.numerador.fechaApertura\r\n                                        )\r\n                                    )\r\n                                \"\r\n                                        id=\"fechaVtoComprobante\"\r\n                                        (blur)=\"onBlurOrEnterFechaVtoComp($event)\"\r\n                                        (keyup.enter)=\"onBlurOrEnterFechaVtoComp($event)\"\r\n                                        class=\"form-control\"\r\n                                        placeholder=\"dd/mm/aaaa\"\r\n                                        name=\"dVto\"\r\n                                        [(ngModel)]=\"comprobante.fechaVto\" ngbDatepicker #dVto=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"dVto.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"form-group inline-group last-child-custom-card\">\r\n                            <label for=\"fechaContable\">Fecha Contable: </label>\r\n                            <div class=\"input-group\">\r\n                                <input autocomplete=\"off\"   required\r\n                                [disabled]=\"\r\n                                    !comprobante ||\r\n                                    !comprobante.letraCodigo ||\r\n                                    (\r\n                                        comprobante &&\r\n                                        comprobante.letraCodigo &&\r\n                                        comprobante.letraCodigo.numeradores &&\r\n                                        comprobante.letraCodigo.numeradores.length > 0 &&\r\n                                        (\r\n                                            !comprobante.numerador || !comprobante.numerador.fechaApertura\r\n                                        )\r\n                                    )\r\n                                \"\r\n                                        id=\"fechaContableComprobante\"\r\n                                        (blur)=\"onBlurOrEnterFechaContableComp($event)\"\r\n                                        (keyup.enter)=\"onBlurOrEnterFechaContableComp($event)\"\r\n                                        class=\"form-control\"\r\n                                        placeholder=\"dd/mm/aaaa\"\r\n                                        name=\"dCble\"\r\n                                        [(ngModel)]=\"comprobante.fechaContable\" ngbDatepicker #dCble=\"ngbDatepicker\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-secondary\" (click)=\"dCble.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n           </custom-card>\r\n           <div class=\"col-sm-6 comp-rel-card-container\">\r\n           <ngb-tabset [destroyOnHide]=false class=\"col-sm-12 tabs-opciones\">\r\n                    <ngb-tab title=\"Forma de Pago\">\r\n                        <ng-template ngbTabContent>\r\n                            <div class=\"fpago-content\">\r\n                                <tabla-forma-pago-comp      class=\"fpago-tabla\"\r\n                                                            [moneda]=\"comprobante.moneda\"\r\n                                                            [dataTable]=\"dataTablaFormasPago\"\r\n                                                            (onAddSelecFormaPago)=\"handleFormaPagoSelec($event)('add')\"\r\n                                                            (onRemoveSelecFormaPago)=\"handleFormaPagoSelec($event)('remove')\">\r\n                                </tabla-forma-pago-comp>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Comprobante Relacionado\">\r\n                        <ng-template ngbTabContent>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group inline-group\">\r\n                                        <label for=\"cteRelTipo\">Cte:</label>\r\n\r\n                                        <select id=\"cteRelSelect\" name=\"tipoCompRel\"\r\n                                         [(ngModel)]=\"comprobanteRelacionado.tipo\"\r\n                                         class=\"form-control without-padding\"\r\n                                         [ngStyle]=\"{padding: '2px 8px 0px 8px'}\" id=\"cteRelTipo\">\r\n\r\n                                            <option *ngFor=\"let tipoComp of tiposComprobantesRel | async\" [ngValue]=\"tipoComp\">\r\n                                                {{tipoComp.descripcion}}\r\n                                            </option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-7\">\r\n                                    <div class=\"form-group inline-group\">\r\n                                        <label for=\"cteNro\">Nro:</label>\r\n                                        <!-- (blur)=\"onBlurNumeroAutocomp($event)('puntoVenta')('comprobanteRelacionado')\"  -->\r\n                                        <input autocomplete=\"off\"  maxlength=\"4\"\r\n                                            name=\"ptoVentaCompRel\"\r\n                                            [attr.disabled]=\"comprobanteRelacionado.todosLosPendientes ? '' : null\"\r\n                                            (blur)=\"onBlurPtoVentaCteRel($event)\"\r\n                                            [(ngModel)]=\"comprobanteRelacionado.puntoVenta\"\r\n                                            type=\"text\"\r\n                                            class=\"form-control pre-numero-input text-right\"\r\n                                            id=\"puntoVenta\" placeholder=\"\">\r\n                                        <input autocomplete=\"off\"\r\n                                            maxlength=\"8\"\r\n                                            name=\"nroCompRel\"\r\n                                            [attr.disabled]=\"comprobanteRelacionado.todosLosPendientes ? '' : null\"\r\n                                            (blur)=\"onBlurNumeradorCteRel($event)\"\r\n                                            [(ngModel)]=\"comprobanteRelacionado.numero\"\r\n                                            type=\"text\"\r\n                                            class=\"form-control text-right\" id=\"numero\" placeholder=\"\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-9\">\r\n                                    <div class=\"checkbox-todoPendiente\">\r\n                                        <ba-checkbox\r\n                                                        [(ngModel)]=\"comprobanteRelacionado.todosLosPendientes\"\r\n                                                        name=\"todosPendient\"\r\n                                                        [label]=\"'Todos los pendientes'\"\r\n                                                        [ngModelOptions]=\"{standalone: true}\">\r\n                                        </ba-checkbox>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-sm-3 btn-container\">\r\n                                    <button [disabled]=\"\r\n                                        !comprobanteRelacionado.todosLosPendientes &&\r\n                                        !(\r\n                                            comprobanteRelacionado.puntoVenta &&\r\n                                            comprobanteRelacionado.numero\r\n                                        ) ||\r\n                                        !(\r\n                                            proveedorSeleccionado &&\r\n                                            proveedorSeleccionado.padronCodigo\r\n                                        )\r\n                                    \" (click)=\"onClickBuscarPendientes()\" type=\"submit\" class=\"btn btn-primary\">Buscar</button>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                </ngb-tabset>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <ngb-tabset [destroyOnHide]=false class=\"col-sm-12 tabs-ingreso\">\r\n                <ngb-tab title=\"Articulos\">\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <tabla-ingreso  [data]=\"tablas.datos.productosPend\"  id=\"tbl-ingreso\"\r\n                                        [columns]=\"tablas.columnas.columnasProductos\"\r\n                                        [remove]=\"onClickRemove\"\r\n                                        [add]=\"comprobante\"\r\n                                        [edit]=\"onClickEdit('columnasProductos')\"\r\n                                        [confirmEdit]=\"onClickConfirmEdit('columnasProductos')\"\r\n                                        [onClickProductoLista]=\"onClickProductoLista\"\r\n                                        [enableAddItem]=\"verificoRelacionadoObligatorio(estadoRelacionadoObligatorio)\"\r\n                                        [comprobante]=\"comprobante\"\r\n                                        [customsBlur]=\"customsBlurProduct\"\r\n                                        >\r\n                        </tabla-ingreso>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab\r\n                    title=\"Trazabilidad\"\r\n                    [disabled]=\"\r\n                        comprobante &&\r\n                        comprobante.tipo &&\r\n                        comprobante.tipo.comprobante &&\r\n                        comprobante.tipo.comprobante.idSisComprobantes !== 1 \">\r\n\r\n\r\n\r\n\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <tabla-ingreso  [data]=\"comprobanteCompraService.getOnlyTrazables(tablas.datos.productosPend)\"\r\n                                        [columns]=\"tablas.columnas.columnasTrazabilidad\"\r\n                                        [edit]=\"onClickEdit('columnasTrazabilidad')\"\r\n                                        [confirmEdit]=\"onClickConfirmEdit('columnasTrazabilidad')\"\r\n                                        [onClickProductoLista]=\"onClickProductoLista\">\r\n                        </tabla-ingreso>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <!-- <div (click)=\"fetchFacturas()\">Subtotales</div> -->\r\n                        <div [ngStyle]=\"{padding: '1px 8px 0px 8px'}\">Subtotales</div>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <div *ngIf=\"comprobante.tipo && comprobante.tipo.comprobante.idSisComprobantes === 1\" class=\"row factura-filters\">\r\n                            <div class=\"col-sm-2\">\r\n                                <div class=\"form-group inline-group\">\r\n                                    <label for=\"cteTipo\">Cte:</label>\r\n                                    <select name=\"tipoFactu\" [(ngModel)]=\"factura.tipo\" class=\"form-control without-padding\"\r\n                                     [ngStyle]=\"{padding: '1px 8px 0px 8px'}\" id=\"cteTipo\">\r\n                                        <option *ngFor=\"let tipoComp of tiposComprobantesFactura | async\" [ngValue]=\"tipoComp\">\r\n                                            {{tipoComp.descCorta}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-1\">\r\n                                <div class=\"form-group inline-group\">\r\n                                    <select *ngIf=\"factura && factura.tipo && factura.tipo.letrasCodigos\" name=\"letraFactu\"\r\n                                        [(ngModel)]=\"factura.letraCodigo\" class=\"form-control\" id=\"cteTipoFactura\">\r\n                                        <option *ngFor=\"let lc of factura.tipo.letrasCodigos\" [ngValue]=\"lc\">\r\n                                            {{ lc.letra.letra }}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n\r\n                                <div *ngIf=\"\r\n                                    factura &&\r\n                                    factura.letraCodigo &&\r\n                                    factura.letraCodigo.numeradores &&\r\n                                    factura.letraCodigo.numeradores.length > 0\r\n                                    \">\r\n                                    <select     id=\"selectPtoVentaNum\"\r\n                                                class=\"form-control\"\r\n                                                [ngStyle]=\"{padding: '1px 8px 0px 8px'}\"\r\n                                                [(ngModel)]=\"factura.numerador\"\r\n                                                name=\"nroFactu\">\r\n                                        <option *ngFor=\"let upNum of factura.letraCodigo.numeradores\" [ngValue]=\"upNum\">\r\n                                            {{\r\n                                                upNum.ptoVenta.ptoVenta.toString().padStart(4, '0')\r\n                                            }} - {{\r\n                                                upNum.numerador.toString().padStart(8, '0')\r\n                                            }}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                                <!-- !(\r\n                                    factura &&\r\n                                    factura.tipo &&\r\n                                    factura.tipo.numerador &&\r\n                                    factura.tipo.numerador.length > 0\r\n                                    ) -->\r\n                                    <!-- *ngIf=\"ngIfNumeradorFactura()\"  -->\r\n                                    <div\r\n                                        *ngIf=\"comprobanteService.comprobanteContainNumerador(factura)\"\r\n                                        class=\"form-group inline-group\">\r\n                                    <label for=\"cteNro\">Nro:</label>\r\n\r\n                                    <input autocomplete=\"off\"   required\r\n                                        maxlength=\"4\"\r\n                                        (blur)=\"\r\n                                            factura.numerador && factura.numerador.ptoVenta ?\r\n                                                factura.numerador.ptoVenta.ptoVenta = factura.numerador.ptoVenta.ptoVenta.toString().padStart(4, '0') : null\r\n                                        \"\r\n                                        name=\"ptoVentaFact\"\r\n                                        [(ngModel)]=\"factura.numerador.ptoVenta.ptoVenta\"\r\n                                        type=\"text\" class=\"form-control pre-numero-input text-right\" id=\"puntoVentaFact\" placeholder=\"\">\r\n                                    <input autocomplete=\"off\"   required\r\n                                        maxlength=\"8\"\r\n                                        (blur)=\"\r\n                                            factura.numerador.numerador = factura.numerador.numerador.toString().padStart(8, '0')\r\n                                        \"\r\n                                        name=\"numeroFact\"\r\n                                        [(ngModel)]=\"factura.numerador.numerador\"\r\n                                        type=\"text\" class=\"form-control text-right\" id=\"numeroFact\" placeholder=\"\">\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group inline-group last-child-custom-card\">\r\n                                    <label for=\"fechaComprobante\">Fecha Contable</label>\r\n                                    <div class=\"input-group\">\r\n\r\n                                        <input autocomplete=\"off\"\r\n                                                (blur)=\"onCalculateFecha($event)('fechaContable')('factura')\"\r\n                                                (keyup.enter)=\"onCalculateFecha($event)('fechaContable')('factura')\"\r\n                                                class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" [(ngModel)]=\"factura.fechaContable\" ngbDatepicker #dComp=\"ngbDatepicker\">\r\n                                        <!-- <input autocomplete=\"off\"  class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" [(ngModel)]=\"factura.fechaContable\" ngbDatepicker #dComp=\"ngbDatepicker\"> -->\r\n                                        <div class=\"input-group-append\">\r\n                                            <button class=\"btn btn-outline-secondary\" (click)=\"dComp.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                                <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group inline-group last-child-custom-card\">\r\n                                    <label for=\"fechaVto\">Fecha Vto</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input autocomplete=\"off\"   (blur)=\"onCalculateFecha($event)('fechaVto')('factura')\"\r\n                                                (keyup.enter)=\"onCalculateFecha($event)('fechaVto')('factura')\"\r\n                                                id=\"fechaVtoFactura\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" [(ngModel)]=\"factura.fechaVto\" ngbDatepicker #dVto=\"ngbDatepicker\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <button class=\"btn btn-outline-secondary\" (click)=\"dVto.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                                                <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"subtotales-container\">\r\n                            <div class=\"subtotales-titulo\">\r\n                                <p>Subtotales</p>\r\n                            </div>\r\n\r\n                            <div class=\"subtotales-content\">\r\n                                <tabla-ingreso  [data]=\"tablas.datos.modelosFactura\"\r\n                                                [columns]=\"tablas.columnas.columnasFactura\"\r\n                                                [edit]=\"onClickEdit('columnasFactura')\"\r\n                                                [confirmEdit]=\"onClickConfirmEdit('columnasFactura')\"\r\n                                                [tablaSubtotales]=\"true\"\r\n                                                [comprobante]=\"comprobante\"\r\n                                                >\r\n                                </tabla-ingreso>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Forma Pago\">\r\n                    <ng-template ngbTabContent>\r\n                        <tabla-ingreso  [data]=\"tablas.datos.detallesFormaPago\"\r\n                                        [columns]=\"tablas.columnas.columnasDetallesFp\"\r\n                                        [edit]=\"onClickEdit('columnasDetallesFp')\"\r\n                                        [confirmEdit]=\"onClickConfirmEdit('columnasDetallesFp')\">\r\n                        </tabla-ingreso>\r\n\r\n                        <div class=\"resto-pagar\">\r\n                            <label class=\"resto-pagar-content\">Resto Pagar: {{ calcRestoPagar() }}</label>\r\n                        </div>\r\n\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab\r\n                    title=\"Cond. Comercialización\"\r\n                    [disabled]=\"\r\n                        comprobante &&\r\n                        comprobante.tipo &&\r\n                        comprobante.tipo.comprobante &&\r\n                        comprobante.tipo.comprobante.idSisComprobantes !== 4\r\n                    \">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"container\">\r\n                            <div class=\"each-input check\">\r\n                                <input [disabled]=\"condicionesConfirmadas\" class=\"align-check\" name=\"pesificado\" [(ngModel)]=\"pesificado\" type=\"checkbox\">Pesificado\r\n                                <input [disabled]=\"condicionesConfirmadas\" class=\"align-check\" name=\"dolarizadoAlVto\" [(ngModel)]=\"dolarizadoAlVto\" type=\"checkbox\">Dolarizado al vencimiento\r\n                                <input [disabled]=\"condicionesConfirmadas\" class=\"align-check\" name=\"canjeInsumos\" [(ngModel)]=\"canjeInsumos\" type=\"checkbox\">Canje insumos\r\n                            </div>\r\n                            <div class=\"each-input\"><label for=\"interesMensualCompra\">Interés mensual de compra:</label>\r\n                            <input [disabled]=\"condicionesConfirmadas\" autocomplete=\"off\"   required\r\n                                            maxlength=\"6\"\r\n                                            name=\"interesMensualCompra\"\r\n                                            [(ngModel)]=\"interesMensualCompra\"\r\n                                            type=\"number\" class=\"form-control cond-cotiza pre-numero-input text-right\" id=\"interesMensualCompra\" placeholder=\"\">%</div>\r\n                            <div class=\"each-input\"><label for=\"tipoCambio\">Tipo de cambio:</label>\r\n                                <select\r\n                                    [disabled]=\"condicionesConfirmadas\"\r\n                                    required\r\n                                    class=\"form-control without-padding cond-cotiza\"\r\n                                    name=\"tipoCambio\"\r\n                                    [(ngModel)]=\"tipoCambio\"\r\n                                    id=\"tipoCambio\">\r\n                                    <option [value]=\"'divisa'\">\r\n                                        Divisa\r\n                                    </option>\r\n                                    <option [value]=\"'billete'\">\r\n                                        Billete\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-sm-12 btn-container-2\">\r\n                                <button\r\n                                        name=\"confirmaCondiciones\"\r\n                                        [disabled]=\"condicionesConfirmadas\"\r\n                                        (click)=\"onClickConfirmCondiciones()\"\r\n                                        class=\"btn btn-primary btn-ingreso-from btn-space\"\r\n                                        >\r\n                                    Confirmar\r\n                                </button>\r\n\r\n                                <button [disabled]=\"!condicionesConfirmadas\" (click)=\"onClickCancelarCondiciones()\" class=\"btn btn-primary btn-space btn-ingreso-from\">\r\n                                    Cancelar\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab\r\n                    title=\"Ajuste total\"\r\n                    [disabled]=\"\r\n                        comprobante &&\r\n                        comprobante.tipo &&\r\n                        comprobante.tipo.comprobante &&\r\n                        comprobante.tipo.comprobante.idSisComprobantes !== 2\r\n                    \">\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"container\">\r\n                            <div class=\"each-input\"><label for=\"valorRealFactura\">Total de la factura (AR$):</label>\r\n                            <input [disabled]=\"ajusteConfirmado\" autocomplete=\"off\"   required\r\n                                            maxlength=\"6\"\r\n                                            name=\"valorRealFactura\"\r\n                                            [(ngModel)]=\"valorRealFactura\"\r\n                                            type=\"number\" class=\"form-control cond-cotiza pre-numero-input text-right\" id=\"valorRealFactura\" placeholder=\"\">\r\n                                            <div class=\"tooltip\">i\r\n                                                <span class=\"tooltiptext\">Ingrese el valor real total de la factura en AR$, este debe poseer una diferencia menor a 10 AR$ con el total calculado por el sistema, caso contrario contacte al gerente.</span>\r\n                                              </div></div>\r\n                            <div class=\"col-sm-12 btn-container-2\">\r\n                                <button\r\n                                        name=\"ajusteConfirmado\"\r\n                                        [disabled]=\"ajusteConfirmado\"\r\n                                        (click)=\"onClickConfirmAjuste()\"\r\n                                        class=\"btn btn-primary btn-ingreso-from btn-space\"\r\n                                        >\r\n                                    Confirmar\r\n                                </button>\r\n\r\n                                <button [disabled]=\"!ajusteConfirmado\" (click)=\"onClickCancelarAjuste()\" class=\"btn btn-primary btn-space btn-ingreso-from\">\r\n                                    Cancelar\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ngb-tab>\r\n            </ngb-tabset>\r\n        </div>\r\n\r\n        <div class=\"row custom-card-container\">\r\n            <custom-card class=\"col-sm-5 card-observaciones card-flex-column\" title=\"Observaciones\">\r\n                <textarea name=\"obserss\" [(ngModel)]=\"comprobante.observaciones\" class=\"form-control text-area-observaciones\" id=\"observaciones\"></textarea>\r\n            </custom-card>\r\n\r\n            <div class=\"col-sm-5 card-total card-flex-column\">\r\n\r\n                <custom-card title=\"Totales\">\r\n                    <div class=\"card-total-content\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"total-item\">\r\n                                    <label class=\"titulo-cotizacion\">Cotizacion Dolar: </label>\r\n                                    <!--<label>{{utilsService.parseDecimal(cotizacionDatos.cotizacion.cotizacion)}}</label>-->\r\n                                    <input autocomplete=\"off\"   required\r\n                                        maxlength=\"6\"\r\n                                        name=\"cotDolarEditada\"\r\n                                        [(ngModel)]=\"cotizacionDolarEditada\"\r\n                                        (ngModelChange)=\"onChangeCotDolar()\"\r\n                                        type=\"text\" class=\"form-control pre-numero-input text-right\" id=\"cotDolarEditada\" placeholder=\"\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"total-item\" id=\"fechaComprobante\">\r\n                                    <label class=\"titulo-cotizacion\">Fecha: </label>\r\n                                    <label>{{cotizacionDatos.cotizacion.fechaCotizacion | date:'dd/MM/yyyy'}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"total-comprobante col-sm-6 total-item\">\r\n                                <label class=\"titulo-cotizacion\">Total Neto: </label>\r\n                                <label>{{utilsService.parseDecimal(cotizacionDatos.total)}}</label>\r\n                            </div>\r\n\r\n                            <div class=\"total-comprobante col-sm-6 total-item\">\r\n                                <label class=\"titulo-cotizacion\">Total Cte: </label>\r\n                                <label>{{utilsService.parseDecimal(cotizacionDatos.total + sumatoriaSubtotales)}}</label>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"comprobante.moneda && comprobante.moneda.idMoneda == 2\" class=\"row\">\r\n                            <div class=\"total-comprobante col-sm-6 total-item\">\r\n                                <label class=\"titulo-cotizacion\">Total Neto(AR$): </label>\r\n                                <label>{{utilsService.parseDecimal(cotizacionDatos.total * cotizacionDolarEditada)}}</label>\r\n                            </div>\r\n\r\n                            <div class=\"total-comprobante col-sm-6 total-item\">\r\n                                <label class=\"titulo-cotizacion\">Total Cte(AR$): </label>\r\n                                <label>{{utilsService.parseDecimal((cotizacionDatos.total + sumatoriaSubtotales) * cotizacionDolarEditada)}}</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </custom-card>\r\n                           <!-- [disabled]=\"isDisabledConfirm()\"-->\r\n            </div>\r\n\r\n            <custom-card class=\"col-sm-2 card-flex-column\" title=\"_\">\r\n                <div class=\"col-sm-12 btn-container\">\r\n                    <button   [disabled]=isDisabledConfirm()\r\n                            (click)=\"onClickConfirmar()\"\r\n                            class=\"btn btn-primary btn-ingreso-from\">\r\n                        Confirmar\r\n                    </button>\r\n\r\n                    <button (click)=\"onClickCancelar()\" class=\"btn btn-primary btn-ingreso-from\">\r\n                        Cancelar\r\n                    </button>\r\n                </div>\r\n            </custom-card>\r\n        </div>\r\n    </form>\r\n</ba-card>\r\n\r\n<div *ngIf=\"valueGuardandoCompro !== 0\" class=\"spinner-container\">\r\n    <p class=\"title\">\r\n        Guardando Comprobante\r\n    </p>\r\n    <p><ngb-progressbar [value]=\"valueGuardandoCompro\" type=\"info\"></ngb-progressbar></p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/comprobanteCompra.scss":
/***/ (function(module, exports) {

module.exports = ".comprobante-compra {\n  font-size: 10px; }\n  .comprobante-compra .checkbox-todoPendiente {\n    padding-left: 5%; }\n  .comprobante-compra .tabs-ingreso {\n    padding: 1.5%; }\n  .comprobante-compra .tabs-ingreso .subtotales-container {\n      padding: 0 5% 1%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n  .comprobante-compra .tabs-ingreso .subtotales-container .subtotales-titulo {\n        font-size: 1rem;\n        margin: 3px 24px 0px 0; }\n  .comprobante-compra .tabs-ingreso .subtotales-container .subtotales-content {\n        border-radius: 7px;\n        background: #d4d4de;\n        width: 90%; }\n  .comprobante-compra .tabs-ingreso .subtotales-container .subtotales-content td {\n          border-top: 0px !important; }\n  .comprobante-compra .tabs-ingreso .resto-pagar {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n  .comprobante-compra .tabs-ingreso .resto-pagar .resto-pagar-content {\n        padding: 5px 3px 3px; }\n  .comprobante-compra .lista-filtrada-proveedores {\n    position: absolute;\n    z-index: 9999999;\n    /* opacity: 0; */\n    top: 81px;\n    left: 77px; }\n  .comprobante-compra .tipo-compra-dropdown {\n    padding: 0 2%;\n    margin-bottom: 1px; }\n  .comprobante-compra .custom-card .custom-card-content .inline-group .without-padding {\n    padding: 2px 8px 0px 8px !important; }\n  .comprobante-compra .custom-card .custom-card-content .observaciones {\n    margin-bottom: 2px; }\n  .comprobante-compra .custom-card-container .card-observaciones .observaciones {\n    padding: 1%; }\n  .comprobante-compra .custom-card-container .card-total .card-total-content {\n    padding: 1.7%; }\n  .comprobante-compra .custom-card-container .card-total .card-total-content .total-item {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n  .comprobante-compra .custom-card-container .deposito {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-top: 8px; }\n  .comprobante-compra .custom-card-container .deposito div {\n      margin-bottom: 5px;\n      width: 50%; }\n  .comprobante-compra .custom-card-container .deposito .padding-content {\n      margin-bottom: 0 !important; }\n  .comprobante-compra .custom-card-container .card-comprobantes :host /deep/ .custom-card {\n    height: auto !important; }\n  .comprobante-compra .btn-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .comprobante-compra .btn-container .btn-ingreso-from {\n      float: none;\n      margin: 7% 0; }\n  .comprobante-compra .total-comprobante {\n    padding-top: 2%; }\n  .comprobante-compra .titulo-cotizacion {\n    font-weight: bold; }\n  .comprobante-compra .card-flex-column {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .comprobante-compra .pre-numero-input {\n    width: 30%;\n    margin-right: 3px; }\n  .comprobante-compra .comp-relacionado-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .comprobante-compra .tabs-opciones {\n    display: block; }\n  .comprobante-compra .tabs-opciones .fpago-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n  .comprobante-compra .tabs-opciones .fpago-content .fpago-tabla {\n        width: 100%; }\n  .comprobante-compra .tabs-opciones .fpago-content .txt-area-container {\n        width: 48%; }\n  .comprobante-compra .tabs-opciones .fpago-content .txt-area-container .text-area-forma-pago {\n          height: 78px;\n          color: #000;\n          font-size: 0.8rem; }\n  .comprobante-compra .tabs-opciones .fpago-content .txt-area-container .txt-header {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n  .comprobante-compra .tabs-opciones .fpago-content .txt-area-container .txt-header > select {\n            width: 18%;\n            height: 19px;\n            margin: 0px 8px 6px; }\n  .comprobante-compra .tabs-opciones .fpago-content .txt-area-container .txt-header > label {\n            margin-top: 2px; }\n  .comprobante-compra .spinner-prov-container {\n    padding-top: 5.3px;\n    right: 21px;\n    position: absolute; }\n  .without-padding {\n  padding: 0 !important;\n  padding-left: 2px !important; }\n  .inline-flex {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n  .spinner-container {\n  position: absolute;\n  top: 40%;\n  left: 23%;\n  display: block;\n  min-width: 47%;\n  z-index: 9999;\n  background: #d4d4dede;\n  padding: 3%;\n  border-radius: 12px; }\n  .spinner-container .title {\n    text-align: center;\n    font-size: 1rem;\n    padding-bottom: 3px;\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n  .cond-cotiza {\n  display: inline;\n  width: 7rem !important; }\n  .container {\n  padding-left: 1.5rem; }\n  .each-input {\n  margin-bottom: 5px; }\n  .check {\n  display: block;\n  padding-left: 15px;\n  text-indent: -15px; }\n  .align-check {\n  width: 13px;\n  height: 13px;\n  padding: 0;\n  margin: 0;\n  vertical-align: bottom;\n  position: relative;\n  top: -1px;\n  *overflow: hidden; }\n  :host /deep/ .comprobante-compra .tabs-ingreso .tab-content {\n  padding: 2px 0px !important; }\n  .btn-container-2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row; }\n  .btn-space {\n  margin-left: 10px; }\n  /* Tooltip container */\n  .tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  /* If you want dots under the hoverable text */ }\n  /* Tooltip text */\n  .tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  /* Position the tooltip text */\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -60px;\n  /* Fade in tooltip */\n  opacity: 0;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s; }\n  /* Tooltip arrow */\n  .tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent; }\n  /* Show the tooltip text when you mouse over the tooltip container */\n  .tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/pages/main/compras/comprobanteCompra/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/compras/comprobanteCompra/comprobanteCompra.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/compras/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/compras/compras.component.ts"));
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=compras.module.chunk.js.map