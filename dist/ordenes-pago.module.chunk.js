webpackJsonp(["ordenes-pago.module"],{

/***/ "./src/app/models/comprobantes-pago.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FiltroComprobantePago = (function () {
    function FiltroComprobantePago() {
        this.autorizada = "Todas";
        this.codProductoDesde = "null";
        this.codProductoHasta = "null";
        this.comprobanteModulo = 1;
        this.comprobanteNumero = 0;
        this.comprobanteTipo = 73;
        this.fechaDesde = "1900-01-01";
        this.fechaHasta = "2100-01-01";
        this.idDeposito = 0;
        this.idEstado = 0;
        this.idProducto = 0;
        this.idSisTipoOperacion = 1;
        this.idVendedor = 0;
        this.padCodigo = null;
        this.pendiente = 1;
        this.moneda = 13;
        this.despacho = "";
        this.listaPrecios = 0;
    }
    return FiltroComprobantePago;
}());
exports.FiltroComprobantePago = FiltroComprobantePago;
var FormaPago = (function () {
    function FormaPago() {
        this.descripcion = "";
        this.editar = false;
        this.formaPagoDet = [];
        this.idFormaPago = 0;
        this.listaPrecios = [];
        this.tipo = {
            descripcion: "",
            idSisFormaPago: 0,
        };
    }
    return FormaPago;
}());
exports.FormaPago = FormaPago;
var FormaPagoDet = (function () {
    function FormaPagoDet() {
        this.cantDias = 0;
        this.ctaContable = "";
        this.detalle = "";
        this.idFormaPagoDet = 0;
        this.planCuenta = {
            planCuentas: 0,
            planDescripcion: "",
        };
        this.porcentaje = 0;
    }
    return FormaPagoDet;
}());
exports.FormaPagoDet = FormaPagoDet;
var TotalesPagoProveedores = (function () {
    function TotalesPagoProveedores() {
        this.importeDolar = 0;
        this.importePesos = 0;
        this.dolarOPAplicadas = 0;
        this.pesosOPAplicadas = 0;
        this.saldoPesos = 0;
        this.saldoDolar = 0;
    }
    return TotalesPagoProveedores;
}());
exports.TotalesPagoProveedores = TotalesPagoProveedores;
var TotalesOrdenesPago = (function () {
    function TotalesOrdenesPago() {
        this.importeDolar = 0;
        this.importePesificado = 0;
        this.pendienteUsd = 0;
        this.pendientePesos = 0;
        this.suPagoUsd = 0;
        this.suPagoPesos = 0;
        this.totalDifCotizacion = 0;
    }
    return TotalesOrdenesPago;
}());
exports.TotalesOrdenesPago = TotalesOrdenesPago;
var PagoProveedoresTable = (function () {
    function PagoProveedoresTable() {
        this.importeDolar = 0;
        this.importePesificado = 0;
        this.pendienteUsd = 0;
        this.pendientePesos = 0;
        this.suPagoUsd = 0;
        this.suPagoPesos = 0;
        this.totalDifCotizacion = 0;
    }
    return PagoProveedoresTable;
}());
exports.PagoProveedoresTable = PagoProveedoresTable;
var GrabarOrdenesPago = (function () {
    function GrabarOrdenesPago() {
        this.idFactCab = 0;
        this.idCteTipo = 0;
        this.numero = 0;
        this.fechaEmision = "";
        this.idPadron = 0;
        this.idMoneda = 0;
        this.nombre = "";
        this.cuit = "";
        this.codigoPostal = "";
        this.cotDolar = 0;
        this.idSisTipoOperacion = 0;
        this.idSisOperacionComprobante = 0;
        this.idUsuario = 0;
        this.fechaAutorizacion = "";
        this.numeroReciboCaja = 0;
        this.pagoCerrado = 0;
        this.idNumero = 0;
        this.ordenPagoCabecera = false;
        this.ordenPagoDetalle = false;
        this.ordenPagoFormaPago = false;
        this.ordenPagoPie = false;
        this.grillaComprobantes = [];
        this.grillaSubTotales = [new GrillaSubTotales(), new GrillaSubTotales()];
        this.grillaFormaPago = [];
    }
    return GrabarOrdenesPago;
}());
exports.GrabarOrdenesPago = GrabarOrdenesPago;
var GrillaComprobantes = (function () {
    function GrillaComprobantes() {
        this.idDetalle = 0;
        this.item = 0;
        this.pagadoDolar = 0;
        this.importePesificado = 0;
        this.idFormaPago = 0;
        this.cotDolarFact = 0;
        this.difContizacion = 0;
        this.idIva = 0;
        this.ivaDifContizacion = 0;
        this.idFactCabComp = 0;
    }
    return GrillaComprobantes;
}());
exports.GrillaComprobantes = GrillaComprobantes;
var GrillaSubTotales = (function () {
    function GrillaSubTotales() {
        this.idImpuesto = 0;
        this.detalle = "";
        this.alicuota = 0;
        this.importeBase = 0;
        this.importeImpuesto = 0;
        this.numeroRetencion = 0;
        this.operador = "";
    }
    return GrillaSubTotales;
}());
exports.GrillaSubTotales = GrillaSubTotales;
var GrillaFormaPago = (function () {
    function GrillaFormaPago() {
        this.idOpFormaPago = 0;
        this.idOPCab = 0;
        this.idFormaPago = -1;
        this.importe = 0;
        this.fechaAcreditacion = "";
        this.numero = 0;
        this.detalle = "";
    }
    return GrillaFormaPago;
}());
exports.GrillaFormaPago = GrillaFormaPago;
//# sourceMappingURL=comprobantes-pago.js.map

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/buscar-cliente/buscar-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"provider-wrapper\">\r\n  <label>Proveedor</label>\r\n\r\n  <input #inputProveedorDom autocomplete=\"off\" id=\"inputProveedor\" (blur)=\"onBlurInputProv($event)\"\r\n    (ngModelChange)=\"onChangeInputProveedor($event)\" [(ngModel)]=\"proveedorSeleccionado.padronCodigo\"\r\n    name=\"padronCod\" type=\"text\" class=\"form-control\" placeholder=\"\" (keyup.enter)=\"onEnterInputProv($event)\"\r\n    (keydown.arrowdown)=\"keyPressInputTexto($event)('down')\" (keydown.arrowup)=\"keyPressInputTexto($event)('up')\"\r\n    required>\r\n  <input autocomplete=\"off\" [disabled]=\"true\" name=\"padronApellido\"\r\n    [(ngModel)]=\"proveedorSeleccionado.padronApelli\" type=\"text\" class=\"form-control\" id=\"nombreProveedor\"\r\n    placeholder=\"\">\r\n</div>\r\n<popup-lista *ngIf=\"utilsService.ifFocused(inputProveedorDom)\"\r\n[items]=\"proveedores.filtrados.asObservable().distinctUntilChanged()\"\r\n[keysToShow]=\"['padronApelli', 'padronNombre', 'padronCodigo']\" [onClickItem]=\"popupLista.onClickListProv\"\r\n[fatherPosition]=\"popupLista.getOffsetOfInputProveedor()\">\r\n</popup-lista>"

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/buscar-cliente/buscar-cliente.component.scss":
/***/ (function(module, exports) {

module.exports = ".provider-wrapper {\n  margin: 0 0 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n  .provider-wrapper input {\n    border: 1px solid gray;\n    height: 26px;\n    margin-right: 26px; }\n  label {\n  margin: 0 10px 0 0; }\n  .common-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n  .common-border-radius {\n  border-radius: 7px; }\n"

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/buscar-cliente/buscar-cliente.component.ts":
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
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var gruposParametros_1 = __webpack_require__("./src/constantes/gruposParametros.ts");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var comprobanteCompraService_1 = __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/comprobanteCompraService.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var padron_1 = __webpack_require__("./src/app/models/padron.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var ordenes_pago_service_1 = __webpack_require__("./src/app/services/ordenes-pago.service.ts");
var BuscarClienteComponent = (function () {
    function BuscarClienteComponent(comprobanteCompraService, popupListaService, recursoService, utilsService, router, ordenesPagoService) {
        var _this = this;
        this.comprobanteCompraService = comprobanteCompraService;
        this.popupListaService = popupListaService;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.router = router;
        this.ordenesPagoService = ordenesPagoService;
        this.proveedores = {
            filtrados: new rxjs_1.BehaviorSubject([])
        };
        this.proveedorSeleccionado = new padron_1.Padron();
        this.proveedorEnfocadoIndex = -1;
        this.onBlurInputProv = function (e) {
            try {
                if (_this.proveedorSeleccionado && _this.proveedorSeleccionado.padronCodigo) {
                    _this.proveedorSeleccionado = _this.proveedores.filtrados.value.find(function (prov) { return prov.padronCodigo === Number(_this.proveedorSeleccionado.padronCodigo); });
                    _this.ordenesPagoService.proveedorSeleccionado = JSON.parse(JSON.stringify(_this.proveedorSeleccionado));
                    console.log('proveedor en service', _this.ordenesPagoService.proveedorSeleccionado);
                }
                _this.proveedores.filtrados.next([]);
            }
            catch (err) {
                if (err && err.nombre && err.descripcion) {
                    _this.utilsService.showModal(err.nombre)(err.descripcion)()();
                }
                _this.proveedorSeleccionado = new padron_1.Padron();
            }
        };
        this.onChangeInputProveedor = function (busqueda) {
            _this.proveedorSeleccionado = new padron_1.Padron();
            if (busqueda && busqueda.length >= 2) {
                _this.findProveedores(busqueda);
            }
            _this.proveedorEnfocadoIndex = -1;
        };
        this.onEnterInputProv = function (e) {
            e.preventDefault();
            _this.proveedores.filtrados.subscribe(function (provsLista) {
                var provSelect = provsLista && provsLista.length ? provsLista[_this.proveedorEnfocadoIndex] : null;
                provSelect ? _this.popupLista.onClickListProv(provSelect) : null;
                _this.proveedorEnfocadoIndex = -1;
            });
        };
        this.keyPressInputTexto = function (e) { return function (upOrDown) {
            e.preventDefault();
            _this.proveedorEnfocadoIndex =
                _this.popupListaService.keyPressInputForPopup(upOrDown)(_this.proveedores.filtrados.value)(_this.proveedorEnfocadoIndex);
        }; };
        this.buscandoProveedor = false;
        this.findProveedores = _.throttle(function (busqueda) {
            _this.buscandoProveedor = true;
            _this.proveedores.filtrados.next([]);
            _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.padron)({
                grupo: gruposParametros_1.default.proveedor,
                elementos: busqueda
            }).subscribe(function (proveedores) {
                _this.proveedores.filtrados.next(proveedores);
                _this.buscandoProveedor = false;
            });
        }, 400);
        this.popupLista = {
            onClickListProv: function (prove) {
                _this.proveedorSeleccionado = new padron_1.Padron(__assign({}, prove));
                document.getElementById('tipoOperacionSelect') ? document.getElementById('tipoOperacionSelect').focus() : null;
            },
            getOffsetOfInputProveedor: function () { return _this.utilsService.getOffset(document.getElementById('inputProveedor')); }
        };
    }
    BuscarClienteComponent.prototype.ngOnInit = function () {
    };
    return BuscarClienteComponent;
}());
BuscarClienteComponent = __decorate([
    core_1.Component({
        selector: 'app-buscar-cliente',
        template: __webpack_require__("./src/app/pages/main/ordenes-pago/buscar-cliente/buscar-cliente.component.html"),
        styles: [__webpack_require__("./src/app/pages/main/ordenes-pago/buscar-cliente/buscar-cliente.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof comprobanteCompraService_1.ComprobanteCompraService !== "undefined" && comprobanteCompraService_1.ComprobanteCompraService) === "function" && _a || Object, typeof (_b = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _b || Object, typeof (_c = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _c || Object, typeof (_d = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object, typeof (_f = typeof ordenes_pago_service_1.OrdenesPagoService !== "undefined" && ordenes_pago_service_1.OrdenesPagoService) === "function" && _f || Object])
], BuscarClienteComponent);
exports.BuscarClienteComponent = BuscarClienteComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=buscar-cliente.component.js.map

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/generar-op/generar-op.component.html":
/***/ (function(module, exports) {

module.exports = "<ba-card class=\"generar-op\">\r\n  <h2>ORDENES DE PAGO</h2>\r\n  <h5 *ngIf=\"ordenesSeleccionadas.length > 0\">{{getTypeFP(ordenesSeleccionadas[0])}}\r\n  </h5>\r\n  <div class=\"tipoOC-wrapper\">\r\n    <div class=\"title\">\r\n      Tipo de comprobante:\r\n    </div>\r\n    <select disabled class=\"select-item\" name=\"select\" [(ngModel)]=\"tipoOrdenCompraSeleccionado\">\r\n      <option *ngFor=\"let tipoOC of tiposOrdenCompra\" [ngValue]=\"tipoOC.idCteTipo\">{{tipoOC.comprobante.descripcion}}\r\n      </option>\r\n    </select>\r\n  </div>\r\n  <div *ngIf=\"ordenesSeleccionadas.length > 0\" class=\"table-container\">\r\n    <div class=\"head \">\r\n      <div *ngFor=\"let headItem of headTitleList\" class=\"common-item head-item\">\r\n        {{headItem}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"items-wrapper\">\r\n      <div *ngFor=\"let orden of ordenesSeleccionadas; let i = index\" class=\"item-rows\">\r\n        <!-- fecha factura pendiente -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{orden.fechaEmi | date: 'dd/MM/yyyy'}}</div>\r\n        <!-- nombre proveedor -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">\r\n          {{ordenesPagoService.proveedorSeleccionado.padronApelli}}</div>\r\n        <!-- cuenta corriente -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{orden.idPadron}}</div>\r\n        <!-- numero documento -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{orden.numero}}</div>\r\n        <!-- tipo comprobante FC OP NC ND -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{orden.comprobante}}</div>\r\n        <!-- importe total dolarizado dependiendo del caso -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ? orden.importeTotal\r\n          /\r\n          orden.cotDolar : orden.importeTotal) | number:'1.1-2'}}</div>\r\n        <!-- cotizacion dolar al momento de emitir la factura -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{ orden.cotDolar | number:'1.1-2'}}\r\n        </div>\r\n        <!-- importe pesificado -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ? orden.importeTotal\r\n          :\r\n          orden.importeTotal * orden.cotDolar) | number:'1.1-2'}}</div>\r\n        <!-- fecha vencimiento -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{orden.fechaVence | date: 'dd/MM/yyyy'}}</div>\r\n        <!-- forma pago -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{getTypeFP(orden)}}</div>\r\n        <!-- total usd -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ? 0 :\r\n          (orden.importeTotal - orden.importePendiente)) | number:'1.1-2'}}</div>\r\n        <!-- total pesos -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ?\r\n          (orden.importeTotal - orden.importePendiente) : 0)|\r\n          number:'1.1-2'}}</div>\r\n        <!-- pendiente usd -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ? 0 :\r\n          orden.importePendiente) | number:'1.1-2'}}</div>\r\n        <!-- pendiente pesos -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ?\r\n          orden.importePendiente : 0 ) | number:'1.1-2'}}</div>\r\n        <!-- su pago usd input -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">\r\n          <input (input)=\"onchagePay($event, orden)\" [disabled]=\"orden.idmoneda == 1\" [(ngModel)]=\"orden.suPagoUsd\"\r\n            class=\"input-number\" min=\"0\" [max]=\"orden.importePendiente\" type=\"number\">\r\n        </div>\r\n        <!-- su pago pesos input -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">\r\n          <input (input)=\"onchagePay($event, orden)\" [disabled]=\"!(orden.idmoneda == 1)\" [(ngModel)]=\"orden.suPagoPesos\"\r\n            class=\"input-number\" type=\"number\" min=\"0\" [max]=\"orden.importePendiente\">\r\n        </div>\r\n        <!-- fecha de hoy -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{today | date: 'dd/MM/yyyy'}}</div>\r\n        <!-- cotizacion hoy dolar -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">\r\n          {{ordenesPagoService.cotizacionDolar[0]?.cotizacion}}</div>\r\n        <!-- diferencia de cotizacion -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{calcDifCot(orden) | number:'1.1-2'}}\r\n        </div>\r\n        <!-- iva 21 -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{calcIva(orden) | number:'1.1-2'}}\r\n        </div>\r\n        <!-- total diferencia cotizacion -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{calcTotDifCot(orden) |\r\n          number:'1.1-2'}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"item-rows total-row\">\r\n      <div class=\"common-item select-item select-check\">Totales</div>\r\n      <div class=\"common-item total-background\" *ngFor=\"let whiteCol of [1,1,1,1]\"></div>\r\n      <div class=\"common-item total-background\"> {{total.importeDolar | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> </div>\r\n      <div class=\"common-item total-background\"> {{total.importePesificado | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\" *ngFor=\"let whiteCol of [1,1,1,1]\"></div>\r\n      <div class=\"common-item total-background\"> {{total.pendienteUsd | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{total.pendientePesos | number:'1.1-2'}}</div>\r\n      <div class=\"common-item total-background\"> {{total.suPagoUsd | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{total.suPagoPesos | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\" *ngFor=\"let whiteCol of [1,1,1,1]\"></div>\r\n      <div class=\"common-item total-background\"> {{total.totalDifCotizacion | number:'1.1-2'}} </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-content\">\r\n    <!-- GRILLA SUBTOTALES -->\r\n    <div class=\"left-content\">\r\n      <div class=\"head top-row-radius\">\r\n        Subtotales\r\n      </div>\r\n      <div class=\"item p-row \">\r\n        <div class=\"label common-box\"> Total Comprobantes </div>\r\n        <div class=\"number common-box\">{{total.suPagoPesos | number:'1.1-2'}} </div>\r\n      </div>\r\n      <div class=\"item\">\r\n        <div class=\"label common-box\">Total Dif Cotizacion </div>\r\n        <div class=\"number common-box\">{{total.totalDifCotizacion | number:'1.1-2'}} </div>\r\n      </div>\r\n      <div class=\"item p-row\">\r\n        <div class=\"label common-box\">Subtotal OP </div>\r\n        <div class=\"number common-box\"> {{(total.totalDifCotizacion + total.suPagoPesos) | number:'1.1-2'}} </div>\r\n      </div>\r\n      <div class=\"item\">\r\n        <div class=\"label common-box\">Ret IG</div>\r\n        <div class=\"number common-box\">\r\n          <input [(ngModel)]=\"retIG\" class=\"input-number\" type=\"number\" min=\"0\">\r\n        </div>\r\n      </div>\r\n      <div class=\"item p-row\">\r\n        <div class=\"label common-box\">Numero retencion IG</div>\r\n        <div class=\"number common-box\">\r\n          <input [(ngModel)]=\"numRetencionIG\" (keypress)=\"keyPress($event)\" class=\"input-number\" type=\"number\" min=\"0\">\r\n        </div>\r\n      </div>\r\n      <div class=\"item p-row\">\r\n        <div class=\"label common-box\">Ret IIBB</div>\r\n        <div class=\"number common-box\">\r\n          <input [(ngModel)]=\"retIIBB\" class=\"input-number\" type=\"number\" min=\"0\">\r\n        </div>\r\n      </div>\r\n      <div class=\"item p-row\">\r\n        <div class=\"label common-box\">Numero retencion IIBB</div>\r\n        <div class=\"number common-box\">\r\n          <input [(ngModel)]=\"numRetencionIIBB\" (keypress)=\"keyPress($event)\" class=\"input-number\" type=\"number\" min=\"0\">\r\n        </div>\r\n      </div>\r\n      <div class=\"item total-row bot-row-radius\">\r\n        <div class=\"label common-box\">Neto a pagar</div>\r\n        <div class=\"number common-box\">\r\n          {{(total.totalDifCotizacion + total.suPagoPesos - retIG - retIIBB) | number:'1.1-2'}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- GRILLA FORMA PAGO -->\r\n    <div class=\"right-content\">\r\n      <div class=\"head\">\r\n        <div class=\"head-title common-box\"> Forma pago </div>\r\n        <div class=\"head-title common-box\"> Importe </div>\r\n        <div class=\"head-title common-box\"> Fecha acreditacion </div>\r\n        <div class=\"head-title common-box\"> Nro </div>\r\n        <div class=\"head-title common-box\"> Observación </div>\r\n        <div class=\"head-title common-box\"> Acciones </div>\r\n      </div>\r\n      <div class=\"rows-content\">\r\n        <div *ngFor=\"let formaPago of listaGrillaFormaPago;let i = index\" [ngClass]=\"{'p-row': (i % 2) != 0}\"\r\n          class=\"common-row\">\r\n          <div class=\"common-box\">\r\n            <select class=\"select-item\" name=\"select\" [(ngModel)]=\"formaPago.idFormaPago\">\r\n              <option disabled selected value=\"-1\">-</option>\r\n              <option *ngFor=\"let forma of formasPago\" [ngValue]=\"forma.formaPagoDet[0]?.idFormaPagoDet\">\r\n                {{forma.descripcion}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"number common-box\">\r\n            <input [(ngModel)]=\"formaPago.importe\" class=\"input-number\" type=\"number\" min=\"0\">\r\n          </div>\r\n          <div class=\"common-box\">\r\n            <div class=\"date-container\">\r\n              <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" [(ngModel)]=\"formaPago.fechaAcreditacion\"\r\n                ngbDatepicker #dFrom=\"ngbDatepicker\">\r\n              <div>\r\n                <button class=\"btn btn-outline-secondary button-calendar\" (click)=\"dFrom.toggle()\" type=\"button\">\r\n                  <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"number common-box\">\r\n            <input [(ngModel)]=\"formaPago.numero\" class=\"input-number\" type=\"number\" min=\"0\">\r\n          </div>\r\n          <div class=\"common-box\">\r\n            <input [(ngModel)]=\"formaPago.detalle\" class=\"input-number\" type=\"text\">\r\n          </div>\r\n          <div class=\"common-box\">\r\n            <i class=\"ion-trash-b btn\" (click)=\"ereaseRow(i)\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"common-row\">\r\n          <div class=\"common-box\"></div>\r\n          <div class=\"number common-box\"></div>\r\n          <div class=\"common-box\"></div>\r\n          <div class=\"number common-box\"></div>\r\n          <div class=\"common-box\"></div>\r\n          <div class=\"common-box\">\r\n            <i class=\"ion-plus-round btn\" (click)=\"addRow()\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"common-row total-row bot-row-radius\">\r\n          <div class=\"common-box\">Saldo OP</div>\r\n          <div class=\"common-box number\">{{getTotalOP() | number:'1.1-2'}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"button-OP-wrapper\">\r\n    <button [disabled]=\"getTotalOP() != 0 || validateOP()\" (click)=\"generateOP()\" class=\"btn\" type=\"button\">\r\n      Grabar orden de pago\r\n    </button>\r\n  </div>\r\n</ba-card>"

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/generar-op/generar-op.component.scss":
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0 10px 0 0; }\n\n.common-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  text-align: center; }\n\n.common-border-radius {\n  border-radius: 7px; }\n\n.generar-op {\n  background-color: white; }\n\n.filter-wrapper {\n  background: #efefef;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 15px;\n  border-radius: 7px; }\n\n.filter-wrapper .provider-wrapper {\n    margin: 0 0 10px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content; }\n\n.filter-wrapper .provider-wrapper input {\n      border: 1px solid gray;\n      height: 26px; }\n\n.filter-wrapper .btn-select {\n    border: 1px solid gray;\n    color: black;\n    text-transform: capitalize; }\n\n.filter-wrapper .date-item {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    margin-right: 10px; }\n\n.filter-wrapper .date-item input {\n      border-radius: 7px 0 0 7px !important;\n      height: 26px; }\n\n.filter-wrapper .date-item button {\n      border-color: gray;\n      border-left: none;\n      border-radius: 0 7px 7px 0; }\n\n.filter-wrapper .date-item button:hover {\n        -webkit-transform: none;\n                transform: none; }\n\n.filter-wrapper .from-to-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.filter-wrapper .button-search-wrapper {\n    margin: 15px 0 0 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n.filter-wrapper .button-search-wrapper button {\n      height: 100%;\n      background: black;\n      color: white;\n      margin-right: 10px; }\n\n.table-container {\n  overflow: auto;\n  max-height: 80vh;\n  margin: 20px 0 0;\n  border-radius: 7px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%; }\n\n.table-container::-webkit-scrollbar-track {\n    background: white; }\n\n.table-container::-webkit-scrollbar-thumb {\n    background: #888;\n    border-radius: 8px;\n    width: 7px; }\n\n.table-container::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\n.table-container .head {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1; }\n\n.table-container .head-item {\n    background-color: #c2c3d2;\n    text-align: center;\n    font-weight: bold; }\n\n.table-container .select-check {\n    background-color: #fafafa; }\n\n.table-container .common-item {\n    width: 110px;\n    min-width: 110px;\n    padding: 10px 5px;\n    text-align: center; }\n\n.table-container .items-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.table-container .item-rows {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.table-container .select-item {\n    text-align: center;\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0;\n    -moz-text-align-last: center;\n         text-align-last: center; }\n\n.p-row {\n  background-color: #e1e1e1; }\n\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.footer-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 20px 0;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  overflow: auto; }\n\n.footer-content .common-box {\n    width: 130px;\n    padding: 5px;\n    text-align: center; }\n\n.footer-content .left-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-right: 50px; }\n\n.footer-content .left-content .head {\n      background-color: #c2c3d2;\n      text-align: center;\n      font-size: 13px;\n      height: 40px;\n      width: 260px;\n      margin: 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      font-weight: bold; }\n\n.footer-content .right-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.footer-content .right-content .head {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border-radius: 7px 7px 0 0;\n      background-color: #c2c3d2; }\n\n.footer-content .right-content .head .head-title {\n        font-weight: bold;\n        text-align: center;\n        font-size: 13px;\n        height: 40px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n\n.footer-content .right-content .rows-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n\n.footer-content .right-content .common-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n\n.footer-content .item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: 0; }\n\n.footer-content .label {\n    font-size: 13px;\n    text-align: left; }\n\n.footer-content .number {\n    font-size: 13px;\n    text-align: right; }\n\n.footer-content .total-row {\n    background-color: rgba(0, 0, 0, 0.25);\n    padding: 5px 0px; }\n\n.footer-content .top-row-radius {\n    border-radius: 7px 7px 0 0; }\n\n.footer-content .bot-row-radius {\n    border-radius: 0 0 7px 7px; }\n\n.tipoOC-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #efefef;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 15px;\n  border-radius: 7px; }\n\n.tipoOC-wrapper .title {\n    font-weight: bold; }\n\n.tipoOC-wrapper select {\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    text-align: center;\n    padding: 2px 12px;\n    -moz-text-align-last: center;\n         text-align-last: center;\n    margin-left: 12px; }\n\n.select-item {\n  width: 100%;\n  text-align: center;\n  padding: 2px;\n  -moz-text-align-last: center;\n       text-align-last: center; }\n\n.date-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.date-container .button-calendar {\n    height: 100%;\n    padding: 2px;\n    margin-left: 2px; }\n\n/* Hide the browser's default checkbox */\n\n.container-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  bottom: 0;\n  height: 20px;\n  width: 20px;\n  background: none;\n  border: 2px solid black !important;\n  border-radius: 5px; }\n\n.container-checkbox input:checked ~ .checkmark {\n  background-color: black;\n  border-radius: 5px; }\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n.container-checkbox input:checked ~ .checkmark:after {\n  display: block; }\n\n.container-checkbox input:enabled ~ .checkmark {\n  padding: 0; }\n\n.container-checkbox .checkmark:after {\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.total-row {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0; }\n\n.total-row .total-background {\n    background: white;\n    text-align: right; }\n\n.button-OP-wrapper {\n  margin-top: 15px; }\n\n.button-OP-wrapper button {\n    height: 100%;\n    background: #c1c1d0;\n    border-color: #c1c1d0;\n    color: #000;\n    margin-right: 10px; }\n\n.input-number {\n  width: 100%;\n  text-align: right; }\n\n.text-right {\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/generar-op/generar-op.component.ts":
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
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var comprobantes_pago_1 = __webpack_require__("./src/app/models/comprobantes-pago.ts");
var localStorageService_1 = __webpack_require__("./src/app/services/localStorageService.ts");
var ordenes_pago_service_1 = __webpack_require__("./src/app/services/ordenes-pago.service.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var GenerarOpComponent = (function () {
    function GenerarOpComponent(ordenesPagoService, localStorageService, utilsService, router, location) {
        this.ordenesPagoService = ordenesPagoService;
        this.localStorageService = localStorageService;
        this.utilsService = utilsService;
        this.router = router;
        this.location = location;
        this.headTitleList = [
            "Fecha fact pend",
            "Proveedor",
            "Cta Cte",
            "N° Documento",
            "Tipo Doc",
            "Importe USD",
            "TC Fact",
            "Pesificado",
            "Vto",
            "Forma de pago",
            "Total Pagos u$s",
            "Total Pagos $",
            "Pendiente u$s",
            "Pendiente $",
            "Su PAGO U$S",
            "Su PAGO $",
            "Fecha pago",
            "TC pago",
            "Dif Cotiz",
            "IVA 21",
            "Total Dif Cot",
        ];
        this.formasPago = [];
        this.formaSeleccionada = "-";
        this.ordenesSeleccionadas = [];
        this.total = new comprobantes_pago_1.TotalesOrdenesPago();
        this.today = new Date();
        this.listaGrillaFormaPago = [new comprobantes_pago_1.GrillaFormaPago()];
        this.retIG = 0;
        this.retIIBB = 0;
        this.numRetencionIIBB = 0;
        this.numRetencionIG = 0;
        this.tiposOrdenCompra = [];
        this.tipoOrdenCompraSeleccionado = 85;
        this.dataOPRequest = new comprobantes_pago_1.GrabarOrdenesPago(); // con esta data se graba la orden
    }
    GenerarOpComponent.prototype.ngOnInit = function () {
        if (!this.ordenesPagoService.ordenesSeleccionadas ||
            this.ordenesPagoService.ordenesSeleccionadas.length === 0) {
            this.router.navigate(["/pages/ordenesPagoCompras/pago-proveedores"]);
            return;
        }
        if (this.ordenesPagoService.ordenesSeleccionadas) {
            this.ordenesSeleccionadas = JSON.parse(JSON.stringify(this.ordenesPagoService.ordenesSeleccionadas));
            this.setTotal();
        }
        this.obtenerFormaPago();
        this.getUserInfo();
        this.obtenerTipoOrdenPago();
        this.obtenerTiposOrdenCompra();
    };
    GenerarOpComponent.prototype.obtenerTiposOrdenCompra = function () {
        var _this = this;
        this.ordenesPagoService.obtenerTiposOrdenCompra()
            .then(function (resp) {
            _this.tiposOrdenCompra = resp.arraydatos;
            console.log('tiposOrdenCompra', _this.tiposOrdenCompra);
        })
            .catch(function (error) { return console.log(error); });
    };
    GenerarOpComponent.prototype.getUserInfo = function () {
        this.operador = this.localStorageService.getObject(environment_1.environment.localStorage.perfil);
        this.cuenta = this.localStorageService.getObject(environment_1.environment.localStorage.cuenta);
    };
    GenerarOpComponent.prototype.getTypeFP = function (orden) {
        if (orden.idmoneda == 1)
            return "Pesificado";
        if (orden.idmoneda == 2 && !orden.dolarizadoAlVto)
            return "Dolar fijo";
        if (orden.idmoneda == 2 && orden.dolarizadoAlVto)
            return "Dolar abierto";
    };
    GenerarOpComponent.prototype.obtenerTipoOrdenPago = function () {
        this.ordenesPagoService.getTipoOrdenPago()
            .then(function (resp) {
            console.log('obtenerTipoOrdenPago', resp);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    GenerarOpComponent.prototype.obtenerFormaPago = function () {
        var _this = this;
        this.ordenesPagoService.getFormaPago()
            .then(function (resp) {
            _this.formasPago = resp.arraydatos.filter(function (resp) {
                return resp.idFormaPago == 8 ||
                    resp.idFormaPago == 9 ||
                    resp.idFormaPago == 11 ||
                    resp.idFormaPago == 12 ||
                    resp.idFormaPago == 13 ||
                    resp.idFormaPago == 14;
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    GenerarOpComponent.prototype.setTotal = function () {
        var _this = this;
        this.resetTotal();
        this.ordenesSeleccionadas.forEach(function (itemOp) {
            if (!itemOp.importeTotal && itemOp.importeTotal !== 0) {
                itemOp.importeTotal = 0;
            }
            _this.total.importeDolar += itemOp.idmoneda == 1
                ? itemOp.importeTotal / itemOp.cotDolar
                : itemOp.importeTotal;
            _this.total.importePesificado += itemOp.idmoneda == 1
                ? itemOp.importeTotal : itemOp.importeTotal * itemOp.cotDolar;
            _this.total.pendientePesos += itemOp.idmoneda == 1
                ? itemOp.importePendiente : 0;
            _this.total.pendienteUsd += itemOp.idmoneda == 1
                ? 0 : itemOp.importePendiente;
            _this.total.suPagoPesos += !!itemOp.suPagoPesos
                ? itemOp.suPagoPesos
                : 0;
            _this.total.suPagoUsd += !!itemOp.suPagoUsd ? itemOp.suPagoUsd : 0;
            _this.total.totalDifCotizacion += _this.calcTotDifCot(itemOp);
        });
    };
    GenerarOpComponent.prototype.resetTotal = function () {
        this.total = new comprobantes_pago_1.TotalesOrdenesPago();
    };
    GenerarOpComponent.prototype.calcDifCot = function (orden) {
        if (!orden.suPagoUsd)
            return 0;
        if (orden.dolarizadoAlVto) {
            var cotizacionDolar = this.ordenesPagoService.cotizacionDolar[0].cotizacion -
                orden.cotDolar;
            return cotizacionDolar * orden.suPagoUsd;
        }
        return 0;
    };
    GenerarOpComponent.prototype.calcTotDifCot = function (orden) {
        if (!(orden.dolarizadoAlVto) || !orden.suPagoUsd)
            return 0;
        return this.calcDifCot(orden) + this.calcIva(orden);
    };
    GenerarOpComponent.prototype.calcIva = function (orden) {
        if (!(orden.dolarizadoAlVto) || !orden.suPagoUsd)
            return 0;
        var iva = 0.21;
        return ((this.ordenesPagoService.cotizacionDolar[0].cotizacion - orden.cotDolar) * orden.suPagoUsd * iva);
    };
    GenerarOpComponent.prototype.generateOP = function () {
        var _this = this;
        this.agregarDatosGenerales();
        this.dataOPRequest.grillaFormaPago = JSON.parse(JSON.stringify(this.listaGrillaFormaPago));
        this.agregarGrillaSubtotales();
        this.agregarGrillaComprobantes();
        this.formatearFormaDePago();
        console.log(this.dataOPRequest);
        this.ordenesPagoService.grabaOrdenesDePago(this.dataOPRequest)
            .then(function (resp) {
            console.log(resp);
            _this.ordenesPagoService.ordenesDePago = [];
            _this.location.back();
            _this.utilsService.showModal('Aviso')('Comprobante grabado con exito')()('confirmation');
            _this.getPdf(resp.datos.idOpCab);
        })
            .catch(function (error) { return console.log(error); });
    };
    GenerarOpComponent.prototype.getPdf = function (idOpCab) {
        this.ordenesPagoService.obtenerPdf({ nroCopias: 1, idOpCab: idOpCab })
            .subscribe(function (resp) {
            var bodyResp = resp['_body'];
            var newBlob = new Blob([bodyResp], { type: "application/pdf" });
            // IE
            // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            //     window.navigator.msSaveOrOpenBlob(newBlob);
            //     return;
            // }
            var data = window.URL.createObjectURL(newBlob);
            var link = document.createElement('a');
            link.href = data;
            // link.download="fileBody.pdf";
            link.download = idOpCab + ".pdf";
            link.click();
            // Firefox
            setTimeout(function () {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
            }, 100);
        });
    };
    GenerarOpComponent.prototype.agregarDatosGenerales = function () {
        this.dataOPRequest.codigoPostal = this.operador.sucursal.codigoPostal;
        this.operador;
        this.dataOPRequest.cotDolar = this.ordenesPagoService.cotizacionDolar[0].cotizacion;
        this.dataOPRequest.cuit = this.ordenesSeleccionadas[0].cuit;
        this.dataOPRequest.fechaAutorizacion = "1900-01-01"; //  por defecto en 1900-01-01
        this.dataOPRequest.fechaEmision = this.utilsService.formatearFecha('yyyy-mm-dd')(new Date()); //  fecha hoy
        this.dataOPRequest.idCteTipo = 85; // es un combo ,por ahora va 85
        this.dataOPRequest.idFactCab = 0; //  mandar en 0 
        this.dataOPRequest.idMoneda = 1; //  mandar en 1 osea en pesos
        this.dataOPRequest.idNumero = this.buscarTipoOrdenCompra()[0].letrasCodigos[0].numeradores[0].idCteNumerador;
        this.dataOPRequest.idPadron = this.ordenesPagoService.proveedorSeleccionado.padronCodigo; // va  id padron 
        this.dataOPRequest.idSisOperacionComprobante = 127; // mandar fijo 127 por ahora
        this.dataOPRequest.idSisTipoOperacion = 14; // va 14
        this.dataOPRequest.idUsuario = this.cuenta.id; //  va el id del usuario que autoriza 
        this.dataOPRequest.nombre = this.ordenesPagoService.proveedorSeleccionado.padronApelli;
        this.dataOPRequest.numero = this.generarNroComprobante();
        this.dataOPRequest.numeroReciboCaja = 0; // va 0
        // booleanos
        this.dataOPRequest.ordenPagoCabecera = true; // mandar todo en true
        this.dataOPRequest.ordenPagoDetalle = true; // mandar todo en true
        this.dataOPRequest.ordenPagoFormaPago = true; // mandar todo en true
        this.dataOPRequest.ordenPagoPie = true; // mandar todo en true
        //----------  ---------
        this.dataOPRequest.pagoCerrado = 0;
    };
    GenerarOpComponent.prototype.getRandomInt = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1000; }
        return Math.floor(Math.random() * (max - min)) + min;
    };
    GenerarOpComponent.prototype.generarNroComprobante = function () {
        var found = this.buscarTipoOrdenCompra();
        var numerador = found[0].letrasCodigos[0].numeradores[0];
        var cantidadCeros = "";
        for (var index = 0; index < (8 - numerador.numerador.toString().length); index++) {
            cantidadCeros += "0";
        }
        var numeroGenerado = numerador.ptoVenta.idPtoVenta + cantidadCeros + numerador.numerador;
        return parseInt(numeroGenerado);
    };
    GenerarOpComponent.prototype.buscarTipoOrdenCompra = function () {
        var _this = this;
        return this.tiposOrdenCompra.filter(function (tipoOC) {
            return tipoOC.idCteTipo == _this.tipoOrdenCompraSeleccionado;
        });
    };
    GenerarOpComponent.prototype.agregarGrillaSubtotales = function () {
        var _this = this;
        this.dataOPRequest.grillaSubTotales.forEach(function (subTotal, i) {
            subTotal.importeBase = _this.total.suPagoPesos; // es total comprobantes
            console.log('totales', _this.total, _this.total.totalDifCotizacion);
            subTotal.alicuota = _this.total.totalDifCotizacion;
            if (i == 0)
                subTotal.detalle = "retIG";
            if (i == 1)
                subTotal.detalle = "retIIBB";
            if (i == 0)
                subTotal.importeImpuesto = _this.retIG;
            if (i == 1)
                subTotal.importeImpuesto = _this.retIIBB;
            if (i == 0)
                subTotal.numeroRetencion = _this.numRetencionIG;
            if (i == 1)
                subTotal.numeroRetencion = _this.numRetencionIIBB;
            subTotal.operador = _this.operador.idPerfil.toString(); //
        });
    };
    GenerarOpComponent.prototype.agregarGrillaComprobantes = function () {
        var _this = this;
        this.dataOPRequest.grillaComprobantes = this.ordenesSeleccionadas.map(function (orden, index) {
            var grilla = new comprobantes_pago_1.GrillaComprobantes();
            grilla.cotDolarFact = _this.ordenesSeleccionadas[0].dolarizadoAlVto ?
                _this.ordenesPagoService.cotizacionDolar[0].cotizacion
                : orden.cotDolar; // en la que es dolar fijo .. es la de la factura.. y la que es dolar libre es la cotizacion actual de la tabla de dolar
            grilla.difContizacion = _this.calcDifCot(orden);
            grilla.idDetalle = 0; //probar mandar en 0
            grilla.idFormaPago = _this.buscarFormaPago(orden);
            grilla.idIva = 1; //mandar en 1 iva
            grilla.importePesificado = orden.suPagoPesos;
            grilla.item = index; //mandar el orden que se muestra 
            grilla.ivaDifContizacion = _this.calcIva(orden);
            grilla.pagadoDolar = orden.suPagoUsd; //su pago usd
            grilla.idFactCabComp = orden.idFactCab;
            return grilla;
        });
    };
    GenerarOpComponent.prototype.formatearFormaDePago = function () {
        var _this = this;
        this.dataOPRequest.grillaFormaPago.forEach(function (formaPago) {
            formaPago.fechaAcreditacion = _this.utilsService.formatearFecha('yyyy-mm-dd')(formaPago.fechaAcreditacion);
        });
    };
    GenerarOpComponent.prototype.buscarFormaPago = function (orden) {
        return 0;
    };
    GenerarOpComponent.prototype.onchagePay = function (event, orden) {
        var el = event.target;
        var valueInput = parseFloat(el.value);
        if (valueInput > orden.importePendiente) {
            el.value = orden.importePendiente.toString();
            this.ordenesSeleccionadas.forEach(function (item) {
                if (item.idFactCab == orden.idFactCab) {
                    orden.idmoneda == 1 ? item.suPagoPesos = orden.importePendiente : item.suPagoUsd = orden.importePendiente;
                }
                ;
            });
            this.setTotal();
            return this.onchagePay(event, orden);
        }
        if (orden.idmoneda == 1) {
            if (orden.dolarizadoAlVto) {
                orden.suPagoUsd = parseFloat((valueInput / this.ordenesPagoService.cotizacionDolar[0].cotizacion).toFixed(2));
            }
            else {
                orden.suPagoUsd = parseFloat((valueInput / orden.cotDolar).toFixed(2));
            }
        }
        else {
            if (orden.dolarizadoAlVto) {
                orden.suPagoPesos = parseFloat((this.ordenesPagoService.cotizacionDolar[0].cotizacion * valueInput).toFixed(2));
            }
            else {
                orden.suPagoPesos = parseFloat((orden.cotDolar * valueInput).toFixed(2));
            }
        }
        this.setTotal();
    };
    GenerarOpComponent.prototype.addRow = function () {
        this.listaGrillaFormaPago.push(new comprobantes_pago_1.GrillaFormaPago());
    };
    GenerarOpComponent.prototype.ereaseRow = function (i) {
        this.listaGrillaFormaPago.splice(i, 1);
    };
    GenerarOpComponent.prototype.getTotalOP = function () {
        var pagoNeto = this.total.totalDifCotizacion + this.total.suPagoPesos - this.retIG - this.retIIBB;
        var importes = this.listaGrillaFormaPago.reduce(function (accumulator, currentValue) { return accumulator + currentValue.importe; }, 0);
        var total = Number.parseFloat(importes.toFixed(2)) - Number.parseFloat(pagoNeto.toFixed(2));
        return total;
    };
    GenerarOpComponent.prototype.validateOP = function () {
        var found = this.ordenesSeleccionadas.find(function (orden) { return orden.suPagoPesos == 0; });
        if (found)
            return true;
        found = this.ordenesSeleccionadas.find(function (orden) { return orden.suPagoUsd == 0; });
        if (found)
            return true;
        found = this.ordenesSeleccionadas.find(function (orden) { return orden.suPagoPesos == undefined; });
        if (found)
            return true;
        found = this.ordenesSeleccionadas.find(function (orden) { return orden.suPagoUsd == undefined; });
        if (found)
            return true;
        var found2 = this.listaGrillaFormaPago.find(function (lista) { return (lista.fechaAcreditacion == undefined || lista.fechaAcreditacion == "Invalid date" || lista.fechaAcreditacion == ""); });
        if (found2)
            return true;
        return false;
    };
    GenerarOpComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode((event).charCode);
        if (!pattern.test(inputChar))
            event.preventDefault();
    };
    return GenerarOpComponent;
}());
GenerarOpComponent = __decorate([
    core_1.Component({
        selector: "app-generar-op",
        template: __webpack_require__("./src/app/pages/main/ordenes-pago/generar-op/generar-op.component.html"),
        styles: [__webpack_require__("./src/app/pages/main/ordenes-pago/generar-op/generar-op.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ordenes_pago_service_1.OrdenesPagoService !== "undefined" && ordenes_pago_service_1.OrdenesPagoService) === "function" && _a || Object, typeof (_b = typeof localStorageService_1.LocalStorageService !== "undefined" && localStorageService_1.LocalStorageService) === "function" && _b || Object, typeof (_c = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _e || Object])
], GenerarOpComponent);
exports.GenerarOpComponent = GenerarOpComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=generar-op.component.js.map

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/lista-op/lista-op.component.html":
/***/ (function(module, exports) {

module.exports = "<ba-card class=\"lista-op\">\r\n  <div class=\"filter-wrapper\">\r\n    <div class=\"\">\r\n      <app-buscar-cliente></app-buscar-cliente>\r\n    </div>\r\n    <div class=\" from-to-wrapper\">\r\n      <div class=\"input-group date-item\">\r\n        <label>Desde: </label>\r\n        <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" [(ngModel)]=\"fromDate\" ngbDatepicker\r\n          #dFrom=\"ngbDatepicker\">\r\n        <div>\r\n          <button class=\"btn btn-outline-secondary\" (click)=\"dFrom.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-group date-item\">\r\n        <label>Hasta: </label>\r\n        <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" [(ngModel)]=\"toDate\" ngbDatepicker\r\n          #dTo=\"ngbDatepicker\">\r\n        <div>\r\n          <button class=\"btn btn-outline-secondary\" (click)=\"dTo.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"button-search-wrapper\">\r\n      <button class=\"btn\" (click)=\"getListOrdenesPago()\" type=\"button\">\r\n        Buscar Ordenes de pago\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"listaOP.length > 0\" class=\"table-container\">\r\n    <div class=\"head \">\r\n      <div class=\"common-item head-item select-item\">\r\n      </div>\r\n      <div *ngFor=\"let headItem of headTitleList\" class=\"common-item head-item\">\r\n        {{headItem}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"items-wrapper\">\r\n      <div *ngFor=\"let itemOP of listaOP; let i = index\" class=\"item-rows\">\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item select-item select-check\">\r\n          <label class=\"container-checkbox\">\r\n            <input (click)=\"selectOrden($event,itemOP)\" type=\"checkbox\">\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n        </div>\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{itemOP.fechaEmision | date: 'dd/MM/yyyy'}}</div>\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{itemOP.numero}}</div>\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{getTotalComprobante(itemOP) | number:'1.1-2'}}\r\n        </div>\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{getTotalDifCot(itemOP) | number:'1.1-2'}}</div>\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{getTotalIva(itemOP) | number:'1.1-2'}}</div>\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{itemOP.pie[0].importeBase | number:'1.1-2'}}\r\n        </div>\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{itemOP.pie[0].importeImpuesto +\r\n          itemOP.pie[1].importeImpuesto | number:'1.1-2'}}</div>\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{getTotalOP(itemOP) | number:'1.1-2'}}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"item-rows total-row\">\r\n      <div class=\"common-item select-item select-check\">Totales</div>\r\n      <div class=\"common-item total-background\" *ngFor=\"let whiteCol of [1,1]\"></div>\r\n      <div class=\"common-item total-background\"> {{totales.totalComprobante | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{totales.totalDifCot | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{totales.totalIvaDifCot | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{totales.totalSubtotalOP | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{totales.totalImpuestos | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{totales.totalOrdenesPago | number:'1.1-2'}} </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"listaOP.length > 0\" class=\"button-OP-wrapper\">\r\n    <button [disabled]=\"ordenesSeleccionadas.length == 0\" class=\"btn\" (click)=\"emitOP()\" type=\"button\">\r\n      Emitir\r\n    </button>\r\n    <button [disabled]=\"ordenesSeleccionadas.length == 0\" class=\"btn\" (click)=\"cancelOP()\" type=\"button\">\r\n      Anular\r\n    </button>\r\n  </div>\r\n</ba-card>"

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/lista-op/lista-op.component.scss":
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0 10px 0 0; }\n\n.common-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content; }\n\n.common-border-radius {\n  border-radius: 7px; }\n\n.lista-op {\n  background-color: white; }\n\n.filter-wrapper {\n  background: #efefef;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 15px;\n  border-radius: 7px; }\n\n.filter-wrapper .provider-wrapper {\n    margin: 0 0 10px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content; }\n\n.filter-wrapper .provider-wrapper input {\n      border: 1px solid gray;\n      height: 26px; }\n\n.filter-wrapper .btn-select {\n    border: 1px solid gray;\n    color: black;\n    text-transform: capitalize; }\n\n.filter-wrapper .date-item {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    margin-right: 10px; }\n\n.filter-wrapper .date-item input {\n      border-radius: 7px 0 0 7px !important;\n      height: 26px; }\n\n.filter-wrapper .date-item button {\n      border-color: gray;\n      border-left: none;\n      border-radius: 0 7px 7px 0; }\n\n.filter-wrapper .date-item button:hover {\n        -webkit-transform: none;\n                transform: none; }\n\n.filter-wrapper .from-to-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.filter-wrapper .button-search-wrapper {\n    margin: 15px 0 0 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n.filter-wrapper .button-search-wrapper button {\n      height: 100%;\n      background: #c1c1d0;\n      border-color: #c1c1d0;\n      color: #000;\n      margin-right: 10px; }\n\n.table-container {\n  overflow: auto;\n  max-height: 80vh;\n  margin: 20px 0 0;\n  border-radius: 7px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%; }\n\n.table-container::-webkit-scrollbar-track {\n    background: white; }\n\n.table-container::-webkit-scrollbar-thumb {\n    background: #888;\n    border-radius: 8px;\n    width: 7px; }\n\n.table-container::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\n.table-container .head {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1; }\n\n.table-container .select-check {\n    background-color: #fafafa; }\n\n.table-container .p-row {\n    background-color: #e1e1e1; }\n\n.table-container .common-item {\n    width: 110px;\n    min-width: 110px;\n    padding: 10px 5px;\n    text-align: right; }\n\n.table-container .head-item {\n    background-color: #c2c3d2;\n    text-align: center; }\n\n.table-container .items-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.table-container .item-rows {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.table-container .select-item {\n    width: 50px;\n    min-width: 50px;\n    text-align: center;\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0; }\n\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n\n.container-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n  padding: 0; }\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  bottom: 0;\n  height: 20px;\n  width: 20px;\n  max-width: 20px;\n  background: none;\n  border: 2px solid black !important;\n  border-radius: 5px;\n  padding: 0; }\n\n.container-checkbox input:checked ~ .checkmark {\n  background-color: black;\n  border-radius: 5px;\n  padding: 0; }\n\n.container-checkbox input:disabled ~ .checkmark {\n  opacity: 0.5;\n  padding: 0; }\n\n.container-checkbox input:enabled ~ .checkmark {\n  padding: 0; }\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  padding: 0; }\n\n.container-checkbox input:checked ~ .checkmark:after {\n  display: block;\n  padding: 0; }\n\n.container-checkbox .checkmark:after {\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  max-width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  padding: 0; }\n\n.total-row {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0; }\n\n.total-row .total-background {\n    background: white; }\n\n.button-OP-wrapper {\n  margin-top: 15px; }\n\n.button-OP-wrapper button {\n    height: 100%;\n    background: #c1c1d0;\n    border-color: #c1c1d0;\n    color: #000;\n    margin-right: 10px; }\n\n.button-OP-wrapper :first-child {\n  margin-right: 30px; }\n"

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/lista-op/lista-op.component.ts":
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
var core_2 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ordenes_pago_service_1 = __webpack_require__("./src/app/services/ordenes-pago.service.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var buscar_cliente_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/buscar-cliente/buscar-cliente.component.ts");
var ListaOpComponent = (function () {
    function ListaOpComponent(ordenesPagoService, utilsService, elementRef) {
        this.ordenesPagoService = ordenesPagoService;
        this.utilsService = utilsService;
        this.elementRef = elementRef;
        this.listaOP = [];
        this.filters = {
            idEmpresa: 2,
            idFacCab: 1760,
            idPadron: null,
            fechaDesde: '2020-01-01',
            fechaHasta: '2021-05-10'
        };
        this.totales = {
            totalComprobante: 0,
            totalDifCot: 0,
            totalIvaDifCot: 0,
            totalSubtotalOP: 0,
            totalImpuestos: 0,
            totalOrdenesPago: 0
        };
        this.headTitleList = ["Comprobante Fecha", "Número OP", "Total Comprobante", "Total Dif cotización", "Iva por Dif Cotiz", "Subtotal OP", "Total Impuestos", "Total Orden Pago"];
        this.ordenesSeleccionadas = [];
    }
    ListaOpComponent.prototype.ngOnInit = function () {
    };
    ListaOpComponent.prototype.getListOrdenesPago = function () {
        var _this = this;
        this.checkForm();
        console.log(this.filters);
        this.ordenesPagoService.buscarOrdenesPago(this.filters)
            .then(function (resp) {
            _this.listaOP = resp.arraydatos;
            _this.setTotals();
            console.log(_this.listaOP);
        })
            .catch(function (err) { return _this.utilsService.decodeErrorResponse(err); });
    };
    ListaOpComponent.prototype.viewOP = function () {
    };
    ListaOpComponent.prototype.emitOP = function () {
        var _this = this;
        this.ordenesSeleccionadas.forEach(function (orden) {
            _this.ordenesPagoService.obtenerPdf({ idOpCab: orden.idOPCab, nroCopias: 1 })
                .subscribe(function (resp) {
                var bodyResp = resp['_body'];
                var newBlob = new Blob([bodyResp], { type: "application/pdf" });
                // IE
                // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                //   window.navigator.msSaveOrOpenBlob(newBlob);
                //   return;
                // }
                var data = window.URL.createObjectURL(newBlob);
                var link = document.createElement('a');
                link.href = data;
                link.download = orden.numero + ".pdf";
                link.click();
                // Firefox
                setTimeout(function () {
                    // For Firefox it is necessary to delay revoking the ObjectURL
                    window.URL.revokeObjectURL(data);
                }, 100);
            });
        });
    };
    ListaOpComponent.prototype.checkForm = function () {
        this.filters.idPadron = this.buscarClienteComponent.proveedorSeleccionado.padronCodigo ? this.buscarClienteComponent.proveedorSeleccionado.padronCodigo : 0;
        this.filters.fechaDesde = this.utilsService.formatearFecha('yyyy-mm-dd')(this.fromDate);
        this.filters.fechaHasta = this.utilsService.formatearFecha('yyyy-mm-dd')(this.toDate);
    };
    ListaOpComponent.prototype.cancelOP = function () {
        var _this = this;
        this.ordenesSeleccionadas.forEach(function (orden) {
            _this.ordenesPagoService.borrarComprobanteOrdenPago(orden.idOPCab)
                .then(function (resp) {
                console.log(resp);
                _this.utilsService.showModal('Aviso')('Comprobante anulado con exito')()('confirmation');
                _this.getListOrdenesPago();
            })
                .catch(function (error) { return console.log(error); });
        });
        this.ordenesPagoService.ordenesDePago = [];
    };
    ListaOpComponent.prototype.selectOrden = function (event, orden) {
        if (event.target.checked) {
            this.ordenesSeleccionadas.push(JSON.parse(JSON.stringify(orden)));
        }
        else {
            this.deleteItemFromSelected(orden);
        }
    };
    ListaOpComponent.prototype.deleteItemFromSelected = function (orden) {
        var index = this.ordenesSeleccionadas.findIndex(function (item) { return item.numero == orden.numero; });
        this.ordenesSeleccionadas.splice(index, 1);
    };
    ListaOpComponent.prototype.getTotalOP = function (itemOP) {
        var sum = 0;
        itemOP.formaPago.forEach(function (orden) { return sum += orden.importe; });
        return sum;
    };
    ListaOpComponent.prototype.getTotalDifCot = function (itemOP) {
        var sum = 0;
        itemOP.detalle.forEach(function (detalle) { return sum += detalle.difCotizacion; });
        return sum;
    };
    ListaOpComponent.prototype.getTotalComprobante = function (itemOP) {
        var sum = 0;
        itemOP.detalle.forEach(function (detalle) { return sum += detalle.importePesificado; });
        return sum;
    };
    ListaOpComponent.prototype.getTotalIva = function (itemOP) {
        var iva = 0.21;
        return this.getTotalDifCot(itemOP) * iva;
    };
    ListaOpComponent.prototype.resetTotales = function () {
        this.totales.totalComprobante = 0;
        this.totales.totalDifCot = 0;
        this.totales.totalIvaDifCot = 0;
        this.totales.totalSubtotalOP = 0;
        this.totales.totalImpuestos = 0;
        this.totales.totalOrdenesPago = 0;
    };
    ListaOpComponent.prototype.setTotals = function () {
        var _this = this;
        this.resetTotales();
        this.listaOP.forEach(function (itemOP) {
            _this.totales.totalComprobante += _this.getTotalComprobante(itemOP);
            _this.totales.totalDifCot += _this.getTotalDifCot(itemOP);
            _this.totales.totalIvaDifCot += _this.getTotalIva(itemOP);
            _this.totales.totalSubtotalOP += itemOP.pie[0].importeBase;
            _this.totales.totalImpuestos += (itemOP.pie[0].importeImpuesto + itemOP.pie[1].importeImpuesto);
            _this.totales.totalOrdenesPago += _this.getTotalOP(itemOP);
        });
    };
    return ListaOpComponent;
}());
__decorate([
    core_2.ViewChild(buscar_cliente_component_1.BuscarClienteComponent),
    __metadata("design:type", typeof (_a = typeof buscar_cliente_component_1.BuscarClienteComponent !== "undefined" && buscar_cliente_component_1.BuscarClienteComponent) === "function" && _a || Object)
], ListaOpComponent.prototype, "buscarClienteComponent", void 0);
ListaOpComponent = __decorate([
    core_2.Component({
        selector: 'app-lista-op',
        template: __webpack_require__("./src/app/pages/main/ordenes-pago/lista-op/lista-op.component.html"),
        styles: [__webpack_require__("./src/app/pages/main/ordenes-pago/lista-op/lista-op.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof ordenes_pago_service_1.OrdenesPagoService !== "undefined" && ordenes_pago_service_1.OrdenesPagoService) === "function" && _b || Object, typeof (_c = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _c || Object, typeof (_d = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _d || Object])
], ListaOpComponent);
exports.ListaOpComponent = ListaOpComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=lista-op.component.js.map

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/ordenes-pago-routing.module.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var generar_op_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/generar-op/generar-op.component.ts");
var lista_op_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/lista-op/lista-op.component.ts");
var ordenes_pago_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/ordenes-pago.component.ts");
var pago_proveedores_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/pago-proveedores/pago-proveedores.component.ts");
var routes = [
    {
        path: '',
        component: ordenes_pago_component_1.OrdenesPagoComponent,
        children: [
            { path: 'pago-proveedores', component: pago_proveedores_component_1.PagoProveedoresComponent },
            { path: 'generar-op', component: generar_op_component_1.GenerarOpComponent },
            { path: 'listar-ordenes-pago', component: lista_op_component_1.ListaOpComponent },
        ]
    }
];
var OrdenesPagoRoutingModule = (function () {
    function OrdenesPagoRoutingModule() {
    }
    return OrdenesPagoRoutingModule;
}());
OrdenesPagoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], OrdenesPagoRoutingModule);
exports.OrdenesPagoRoutingModule = OrdenesPagoRoutingModule;
//# sourceMappingURL=ordenes-pago-routing.module.js.map

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/ordenes-pago.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/ordenes-pago.component.ts":
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
var ordenes_pago_service_1 = __webpack_require__("./src/app/services/ordenes-pago.service.ts");
var OrdenesPagoComponent = (function () {
    function OrdenesPagoComponent(ordenesPagoService) {
        this.ordenesPagoService = ordenesPagoService;
    }
    OrdenesPagoComponent.prototype.ngOnInit = function () {
        this.ordenesPagoService.getCotizacionDolar();
    };
    return OrdenesPagoComponent;
}());
OrdenesPagoComponent = __decorate([
    core_1.Component({
        selector: 'app-ordenes-pago',
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("./src/app/pages/main/ordenes-pago/ordenes-pago.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof ordenes_pago_service_1.OrdenesPagoService !== "undefined" && ordenes_pago_service_1.OrdenesPagoService) === "function" && _a || Object])
], OrdenesPagoComponent);
exports.OrdenesPagoComponent = OrdenesPagoComponent;
var _a;
//# sourceMappingURL=ordenes-pago.component.js.map

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/ordenes-pago.module.ts":
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
var ordenes_pago_routing_module_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/ordenes-pago-routing.module.ts");
var ordenes_pago_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/ordenes-pago.component.ts");
var pago_proveedores_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/pago-proveedores/pago-proveedores.component.ts");
var generar_op_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/generar-op/generar-op.component.ts");
var lista_op_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/lista-op/lista-op.component.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var SharedModule_1 = __webpack_require__("./src/app/pages/main/SharedModule.ts");
var comprobanteCompraService_1 = __webpack_require__("./src/app/pages/main/compras/comprobanteCompra/comprobanteCompraService.ts");
var buscar_cliente_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/buscar-cliente/buscar-cliente.component.ts");
var OrdenesPagoModule = (function () {
    function OrdenesPagoModule() {
    }
    return OrdenesPagoModule;
}());
OrdenesPagoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ordenes_pago_routing_module_1.OrdenesPagoRoutingModule,
            ng_bootstrap_1.NgbTabsetModule,
            ng_bootstrap_1.NgbProgressbarModule,
            SharedModule_1.SharedModule,
            ng_bootstrap_1.NgbDropdownModule,
        ],
        declarations: [ordenes_pago_component_1.OrdenesPagoComponent, pago_proveedores_component_1.PagoProveedoresComponent, generar_op_component_1.GenerarOpComponent, lista_op_component_1.ListaOpComponent, buscar_cliente_component_1.BuscarClienteComponent],
        providers: [
            comprobanteCompraService_1.ComprobanteCompraService,
        ]
    })
], OrdenesPagoModule);
exports.OrdenesPagoModule = OrdenesPagoModule;
//# sourceMappingURL=ordenes-pago.module.js.map

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/pago-proveedores/pago-proveedores.component.html":
/***/ (function(module, exports) {

module.exports = "<ba-card class=\"pago-proveedores\">\r\n  <div class=\"filter-wrapper\">\r\n    <div class=\"\">\r\n      <app-buscar-cliente></app-buscar-cliente>\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\" from-to-wrapper\">\r\n      <div class=\"input-group date-item\">\r\n        <label>Desde: </label>\r\n        <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" [(ngModel)]=\"fromDate\" ngbDatepicker\r\n          #dFrom=\"ngbDatepicker\">\r\n        <div>\r\n          <button class=\"btn btn-outline-secondary\" (click)=\"dFrom.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-group date-item\">\r\n        <label>Hasta: </label>\r\n        <input class=\"form-control\" placeholder=\"dd/mm/yyyy\" name=\"dp\" [(ngModel)]=\"toDate\" ngbDatepicker\r\n          #dTo=\"ngbDatepicker\">\r\n        <div>\r\n          <button class=\"btn btn-outline-secondary\" (click)=\"dTo.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- <div class=\"\">\r\n      <div class=\"common-item\">\r\n        <label>Forma de pago: </label>\r\n        <div ngbDropdown class=\"d-inline-block\">\r\n          <button class=\"btn btn-outline-secondary btn-select common-border-radius\" id=\"dropdownMenu1\"\r\n            ngbDropdownToggle>{{selectedFilter}}</button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" ngbDropdownMenu>\r\n            <button (click)=\"selectFilter('dolar abierto')\" ngbDropdownItem class=\"dropdown-item\">dolar abierto</button>\r\n            <button (click)=\"selectFilter('pesificado')\" ngbDropdownItem class=\"dropdown-item\">pesificado</button>\r\n            <button (click)=\"selectFilter('todas')\" ngbDropdownItem class=\"dropdown-item\">todas</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"button-search-wrapper\">\r\n      <button class=\"btn\" (click)=\"getOrdenesPago()\" type=\"button\">\r\n        Buscar comprobantes\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"ordenesPago.length > 0\" class=\"table-container\">\r\n    <div class=\"head \">\r\n      <div class=\"common-item head-item select-item\">\r\n      </div>\r\n      <div *ngFor=\"let headItem of headTitleList\" [ngClass]=\"{'select-item': headItem == 'Tipo' }\"\r\n        class=\"common-item head-item\">\r\n        {{headItem}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"items-wrapper\">\r\n      <div *ngFor=\"let orden of ordenesPago; let i = index\" class=\"item-rows\">\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item select-item select-check\">\r\n          <label class=\"container-checkbox\">\r\n            <input [disabled]=\"selectedPayOrder && getTypeFP(orden) != selectedPayOrder\"\r\n              (click)=\"selectOrden($event,orden)\" type=\"checkbox\">\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n        </div>\r\n        <!-- fecha comprobante -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{orden.fechaEmi | date: 'dd/MM/yyyy'}}</div>\r\n        <!-- numero de documento -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{orden.numero}}</div>\r\n        <!-- tipo documento -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item select-item\">{{orden.comprobante}}</div>\r\n        <!-- importe dolares -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ? 0 :\r\n          orden.importeTotal) |\r\n          number:'1.1-2'}}</div>\r\n        <!-- tipo de cambio -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{ (orden.idmoneda == 1 ? null :\r\n          orden.idFormaPago == 13 ?\r\n          ordenesPagoService.cotizacionDolar[0]?.cotizacion : orden.cotDolar) | number:'1.1-2'}}</div>\r\n        <!-- importe en pesos -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{orden.idmoneda == 1 ?\r\n          orden.importeTotal : 0 |\r\n          number:'1.1-2'}}</div>\r\n        <!-- fecha vencimiento -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{orden.fechaVence | date: 'dd/MM/yyyy'}}</div>\r\n        <!-- forma de pago -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item\">{{getTypeFP(orden)}}</div>\r\n        <!-- total orden de pago aplicadas USD -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ? 0 :\r\n          (orden.importeTotal - orden.importePendiente))|\r\n          number:'1.1-2'}}</div>\r\n        <!-- total orden de pago aplicadas pesos -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ?\r\n          (orden.importeTotal - orden.importePendiente) : 0) |\r\n          number:'1.1-2'}}</div>\r\n        <!-- saldo pendiente dolares -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ? 0 :\r\n          orden.importePendiente) | number:'1.1-2'}}</div>\r\n        <!-- saldo pendiente pesos -->\r\n        <div [ngClass]=\"{'p-row': (i % 2) != 0}\" class=\"common-item text-right\">{{(orden.idmoneda == 1 ?\r\n          orden.importePendiente : 0 )| number:'1.1-2'}} </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"item-rows total-row\">\r\n      <div class=\"common-item select-item select-check\">Totales</div>\r\n      <div class=\"common-item total-background\" *ngFor=\"let whiteCol of [1,1]\"></div>\r\n      <div class=\"common-item total-background select-item\"></div>\r\n      <div class=\"common-item total-background\"> {{totales.importeDolar | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> </div>\r\n      <div class=\"common-item total-background\"> {{totales.importePesos | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\" *ngFor=\"let whiteCol of [1,1]\"></div>\r\n      <div class=\"common-item total-background\"> {{totales.dolarOPAplicadas | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{totales.pesosOPAplicadas | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{totales.saldoPesos | number:'1.1-2'}} </div>\r\n      <div class=\"common-item total-background\"> {{totales.saldoDolar | number:'1.1-2'}} </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"ordenesPago.length > 0\" class=\"button-OP-wrapper\">\r\n    <button [disabled]=\"ordenesSeleccionadas.length == 0\" class=\"btn\" (click)=\"generateOP()\" type=\"button\">\r\n      Generar orden de pago\r\n    </button>\r\n  </div>\r\n</ba-card>"

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/pago-proveedores/pago-proveedores.component.scss":
/***/ (function(module, exports) {

module.exports = "label {\n  margin: 0 10px 0 0; }\n\n.common-item {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  text-align: center; }\n\n.common-border-radius {\n  border-radius: 7px; }\n\n.pago-proveedores {\n  background-color: white; }\n\n.filter-wrapper {\n  background: #efefef;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 15px;\n  border-radius: 7px; }\n\n.filter-wrapper .btn-select {\n    border: 1px solid gray;\n    color: black;\n    text-transform: capitalize;\n    background: white; }\n\n.filter-wrapper .date-item {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    margin-right: 10px; }\n\n.filter-wrapper .date-item input {\n      border-radius: 7px 0 0 7px !important;\n      height: 26px; }\n\n.filter-wrapper .date-item button {\n      border-color: gray;\n      border-left: none;\n      border-radius: 0 7px 7px 0; }\n\n.filter-wrapper .date-item button:hover {\n        -webkit-transform: none;\n                transform: none; }\n\n.filter-wrapper .from-to-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.filter-wrapper .button-search-wrapper {\n    margin: 15px 0 0 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n\n.filter-wrapper .button-search-wrapper button {\n      height: 100%;\n      margin-right: 10px;\n      background: #c1c1d0;\n      border-color: #c1c1d0;\n      color: #000; }\n\n.table-container {\n  overflow: auto;\n  max-height: 60vh;\n  margin: 20px 0 0;\n  border-radius: 7px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%; }\n\n.table-container::-webkit-scrollbar-track {\n    background: white; }\n\n.table-container::-webkit-scrollbar-thumb {\n    background: #888;\n    border-radius: 8px;\n    width: 7px; }\n\n.table-container::-webkit-scrollbar-thumb:hover {\n    background: #555; }\n\n.table-container .head {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1; }\n\n.table-container .head-item {\n    background-color: #c2c3d2;\n    font-weight: bold;\n    text-align: center; }\n\n.table-container .select-check {\n    background-color: #fafafa; }\n\n.table-container .p-row {\n    background-color: #e1e1e1; }\n\n.table-container .common-item {\n    width: 8%;\n    min-width: 8%;\n    padding: 10px 5px; }\n\n.table-container .items-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.table-container .item-rows {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n\n.table-container .select-item {\n    width: 6%;\n    min-width: 6%;\n    text-align: center;\n    position: -webkit-sticky;\n    position: sticky;\n    left: 0; }\n\n.container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.container-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n  max-width: 0;\n  padding: 0; }\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  bottom: 0;\n  height: 20px;\n  width: 20px;\n  max-width: 20px;\n  background: none;\n  border: 2px solid black !important;\n  border-radius: 5px;\n  padding: 0; }\n\n.container-checkbox input:checked ~ .checkmark {\n  background-color: black;\n  border-radius: 5px;\n  padding: 0; }\n\n.container-checkbox input:disabled ~ .checkmark {\n  opacity: 0.5;\n  padding: 0; }\n\n.container-checkbox input:enabled ~ .checkmark {\n  padding: 0; }\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n  padding: 0; }\n\n.container-checkbox input:checked ~ .checkmark:after {\n  display: block;\n  padding: 0; }\n\n.container-checkbox .checkmark:after {\n  left: 6px;\n  top: 2px;\n  width: 5px;\n  max-width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  padding: 0; }\n\n.total-row {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: -1px; }\n\n.total-row .total-background {\n    background: white;\n    text-align: right; }\n\n.button-OP-wrapper {\n  margin-top: 15px; }\n\n.button-OP-wrapper button {\n    height: 100%;\n    background: #c1c1d0;\n    border-color: #c1c1d0;\n    color: #000;\n    margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/pages/main/ordenes-pago/pago-proveedores/pago-proveedores.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var comprobantes_pago_1 = __webpack_require__("./src/app/models/comprobantes-pago.ts");
var ordenes_pago_service_1 = __webpack_require__("./src/app/services/ordenes-pago.service.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var buscar_cliente_component_1 = __webpack_require__("./src/app/pages/main/ordenes-pago/buscar-cliente/buscar-cliente.component.ts");
var PagoProveedoresComponent = (function () {
    function PagoProveedoresComponent(ordenesPagoService, utilsService, router) {
        this.ordenesPagoService = ordenesPagoService;
        this.utilsService = utilsService;
        this.router = router;
        this.filters = new comprobantes_pago_1.FiltroComprobantePago();
        this.totales = new comprobantes_pago_1.TotalesPagoProveedores();
        this.ordenesSeleccionadas = [];
        this.ordenesPago = [];
        this.selectedFilter = "todas";
        this.headTitleList = [
            "Fecha de comprobante",
            "Número",
            "Tipo",
            "Importe Dólar",
            "Tipo de cambio",
            "Importe Pesos",
            "Fecha Vencimiento",
            "Forma de Pago",
            "Total Orden Pago aplicadas dólar",
            "Total Orden Pago aplicadas Pesos",
            "Saldo Pendiente Dólar",
            "Saldo Pendiente Pesos",
        ];
    }
    PagoProveedoresComponent.prototype.ngOnInit = function () {
        this.obtenerOrdenesGuardadas();
    };
    PagoProveedoresComponent.prototype.obtenerOrdenesGuardadas = function () {
        this.ordenesPago = JSON.parse(JSON.stringify(this.ordenesPagoService.ordenesDePago));
        if (this.ordenesPago && this.ordenesPago.length > 0)
            this.setTotalValues();
    };
    PagoProveedoresComponent.prototype.getOrdenesPago = function () {
        var _this = this;
        this.checkForm();
        console.log(this.filters);
        this.ordenesPagoService
            .buscarComprobantesOrdenesPago(this.filters)
            .then(function (resp) {
            _this.ordenesPago = resp.arraydatos
                .filter(function (item) {
                return item.cuit === _this.ordenesPagoService.proveedorSeleccionado.cuit.toString();
            });
            _this.ordenesPago = _this.ordenesPago.sort(function (a, b) {
                var date1 = new Date(a.fechaVence).getTime();
                var date2 = new Date(b.fechaVence).getTime();
                if (date1 > date2)
                    return 1;
                if (date1 < date2)
                    return -1;
                return 0;
            });
            // this.setDiferentPayOrderTypes(); // solo para testing
            _this.setTotalValues();
            _this.ordenesPagoService.ordenesDePago = JSON.parse(JSON.stringify(_this.ordenesPago));
            if (_this.ordenesPago.length === 0)
                _this.utilsService.showModal('Aviso')('No existen comprobantes para este proveedor')()('confirmation');
            console.log(_this.ordenesPago);
        })
            .catch(function (err) { return _this.utilsService.decodeErrorResponse(err); });
    };
    PagoProveedoresComponent.prototype.setDiferentPayOrderTypes = function () {
        this.ordenesPago.forEach(function (itemOp, i) {
            if (i < 50 && itemOp.idmoneda == 2)
                itemOp.dolarizadoAlVto = true;
        });
    };
    PagoProveedoresComponent.prototype.setDataToShow = function () { };
    PagoProveedoresComponent.prototype.selectFilter = function (filter) {
        this.selectedFilter = filter;
    };
    PagoProveedoresComponent.prototype.checkForm = function () {
        console.log(this.buscarClienteComponent.proveedorSeleccionado);
        this.filters.padCodigo =
            this.buscarClienteComponent.proveedorSeleccionado.padronCodigo;
        if (this.fromDate && this.toDate) {
            this.filters.fechaDesde = this.utilsService.formatearFecha("yyyy-mm-dd")(this.fromDate);
            this.filters.fechaHasta = this.utilsService.formatearFecha("yyyy-mm-dd")(this.toDate);
        }
    };
    PagoProveedoresComponent.prototype.generateOP = function () {
        console.log("generate op");
        this.ordenesPagoService.ordenesSeleccionadas = JSON.parse(JSON.stringify(this.ordenesSeleccionadas));
        this.router.navigate(["/pages/ordenesPagoCompras/generar-op"]);
    };
    PagoProveedoresComponent.prototype.selectOrden = function (event, orden) {
        if (event.target.checked) {
            this.ordenesSeleccionadas.push(JSON.parse(JSON.stringify(orden)));
            if (this.ordenesSeleccionadas.length === 1) {
                this.selectedPayOrder = this.getTypeFP(orden);
            }
        }
        else {
            this.deleteItemFromSelected(orden);
            if (this.ordenesSeleccionadas.length === 0) {
                this.selectedPayOrder = null;
            }
        }
        console.log(this.ordenesSeleccionadas);
    };
    PagoProveedoresComponent.prototype.deleteItemFromSelected = function (orden) {
        var index = this.ordenesSeleccionadas.findIndex(function (item) { return item.numero == orden.numero; });
        this.ordenesSeleccionadas.splice(index, 1);
    };
    PagoProveedoresComponent.prototype.setTotalValues = function () {
        var _this = this;
        this.ordenesPago.forEach(function (itemOP) {
            _this.totales.importeDolar += itemOP.idmoneda == 1
                ? 0 : itemOP.importeTotal;
            _this.totales.importePesos += itemOP.idmoneda == 1
                ? itemOP.importeTotal : 0;
            _this.totales.dolarOPAplicadas += itemOP.idmoneda == 1
                ? 0 : (itemOP.importeTotal - itemOP.importePendiente);
            _this.totales.pesosOPAplicadas += itemOP.idmoneda == 1
                ? (itemOP.importeTotal - itemOP.importePendiente) : 0;
            _this.totales.saldoPesos += itemOP.idmoneda == 1
                ? 0 : itemOP.importePendiente;
            _this.totales.saldoDolar += itemOP.idmoneda == 1
                ? itemOP.importePendiente : 0;
        });
        console.log(this.totales);
    };
    PagoProveedoresComponent.prototype.getTypeFP = function (orden) {
        if (orden.idmoneda == 1)
            return "Pesificado";
        if (orden.idmoneda == 2 && !orden.dolarizadoAlVto)
            return "Dolar fijo";
        if (orden.idmoneda == 2 && orden.dolarizadoAlVto)
            return "Dolar abierto";
    };
    return PagoProveedoresComponent;
}());
__decorate([
    core_1.ViewChild(buscar_cliente_component_1.BuscarClienteComponent),
    __metadata("design:type", typeof (_a = typeof buscar_cliente_component_1.BuscarClienteComponent !== "undefined" && buscar_cliente_component_1.BuscarClienteComponent) === "function" && _a || Object)
], PagoProveedoresComponent.prototype, "buscarClienteComponent", void 0);
PagoProveedoresComponent = __decorate([
    core_1.Component({
        selector: "app-pago-proveedores",
        template: __webpack_require__("./src/app/pages/main/ordenes-pago/pago-proveedores/pago-proveedores.component.html"),
        styles: [__webpack_require__("./src/app/pages/main/ordenes-pago/pago-proveedores/pago-proveedores.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof ordenes_pago_service_1.OrdenesPagoService !== "undefined" && ordenes_pago_service_1.OrdenesPagoService) === "function" && _b || Object, typeof (_c = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], PagoProveedoresComponent);
exports.PagoProveedoresComponent = PagoProveedoresComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=pago-proveedores.component.js.map

/***/ })

});
//# sourceMappingURL=ordenes-pago.module.chunk.js.map