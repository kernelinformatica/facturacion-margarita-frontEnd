webpackJsonp(["comprobantes.module"],{

/***/ "./src/app/pages/main/comprobantes/comprobantes.component.ts":
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
var Comprobantes = (function () {
    function Comprobantes() {
    }
    return Comprobantes;
}());
Comprobantes = __decorate([
    core_1.Component({
        selector: 'comprobantes',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [])
], Comprobantes);
exports.Comprobantes = Comprobantes;
//# sourceMappingURL=comprobantes.component.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/comprobantes.module.ts":
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
var comprobantes_routing_1 = __webpack_require__("./src/app/pages/main/comprobantes/comprobantes.routing.ts");
var _1 = __webpack_require__("./src/app/pages/main/comprobantes/index.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var SharedModule_1 = __webpack_require__("./src/app/pages/main/SharedModule.ts");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var authService_1 = __webpack_require__("./src/app/services/authService.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var consultaComprobante_component_1 = __webpack_require__("./src/app/pages/main/comprobantes/consultaComprobante/consultaComprobante.component.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var consultaImputaciones_1 = __webpack_require__("./src/app/pages/main/comprobantes/consultaImputaciones/index.ts");
var imputacionesService_1 = __webpack_require__("./src/app/services/imputacionesService.ts");
var consultaLibrosIva_1 = __webpack_require__("./src/app/pages/main/comprobantes/consultaLibrosIva/index.ts");
var imputaciones_1 = __webpack_require__("./src/app/pages/main/comprobantes/imputaciones/index.ts");
var consultaComprobanteAnticipado_1 = __webpack_require__("./src/app/pages/main/comprobantes/consultaComprobanteAnticipado/index.ts");
var pesificacion_1 = __webpack_require__("./src/app/pages/main/comprobantes/pesificacion/index.ts");
var ComprobantesModule = (function () {
    function ComprobantesModule() {
    }
    return ComprobantesModule;
}());
ComprobantesModule = __decorate([
    core_1.NgModule({
        imports: [
            comprobantes_routing_1.routing,
            SharedModule_1.SharedModule,
            ng_bootstrap_1.NgbTabsetModule
        ],
        declarations: [
            _1.Comprobantes,
            consultaComprobante_component_1.ConsultaComprobante,
            consultaImputaciones_1.ConsultaImputaciones,
            consultaLibrosIva_1.ConsultaLibrosIva,
            imputaciones_1.ModificaImputaciones,
            consultaComprobanteAnticipado_1.ConsultaComprobanteAnticipado,
            pesificacion_1.Pesificacion
        ],
        providers: [
            recursoService_1.RecursoService,
            authService_1.AuthService,
            utilsService_1.UtilsService,
            comprobanteService_1.ComprobanteService,
            imputacionesService_1.ImputacionesService
        ],
        exports: []
    })
], ComprobantesModule);
exports.ComprobantesModule = ComprobantesModule;
//# sourceMappingURL=comprobantes.module.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/comprobantes.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var _1 = __webpack_require__("./src/app/pages/main/comprobantes/index.ts");
var consultaComprobante_1 = __webpack_require__("./src/app/pages/main/comprobantes/consultaComprobante/index.ts");
var consultaImputaciones_1 = __webpack_require__("./src/app/pages/main/comprobantes/consultaImputaciones/index.ts");
var consultaLibrosIva_1 = __webpack_require__("./src/app/pages/main/comprobantes/consultaLibrosIva/index.ts");
var imputaciones_1 = __webpack_require__("./src/app/pages/main/comprobantes/imputaciones/index.ts");
var consultaComprobanteAnticipado_1 = __webpack_require__("./src/app/pages/main/comprobantes/consultaComprobanteAnticipado/index.ts");
var pesificacion_1 = __webpack_require__("./src/app/pages/main/comprobantes/pesificacion/index.ts");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: _1.Comprobantes,
        children: [
            { path: 'consulta', component: consultaComprobante_1.ConsultaComprobante },
            { path: 'imputaciones', component: consultaImputaciones_1.ConsultaImputaciones },
            { path: 'libros-iva', component: consultaLibrosIva_1.ConsultaLibrosIva },
            { path: 'modiImputaciones', component: imputaciones_1.ModificaImputaciones },
            { path: 'consulta-comprobante-anticipado', component: consultaComprobanteAnticipado_1.ConsultaComprobanteAnticipado },
            { path: 'proceso-pesificacion', component: pesificacion_1.Pesificacion }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=comprobantes.routing.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaComprobante/consultaComprobante.component.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var recursoService_1 = __webpack_require__("./src/app/services/recursoService.ts");
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var sisModulo_1 = __webpack_require__("./src/app/models/sisModulo.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var producto_1 = __webpack_require__("./src/app/models/producto.ts");
var sisEstado_1 = __webpack_require__("./src/app/models/sisEstado.ts");
var padron_1 = __webpack_require__("./src/app/models/padron.ts");
var deposito_1 = __webpack_require__("./src/app/models/deposito.ts");
var tipoComprobante_1 = __webpack_require__("./src/app/models/tipoComprobante.ts");
var comprobante_1 = __webpack_require__("./src/app/models/comprobante.ts");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var gruposParametros_1 = __webpack_require__("./src/constantes/gruposParametros.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var vendedor_1 = __webpack_require__("./src/app/models/vendedor.ts");
var ptoVenta_1 = __webpack_require__("./src/app/models/ptoVenta.ts");
var sisTipoOperacion_1 = __webpack_require__("./src/app/models/sisTipoOperacion.ts");
var numerador_1 = __webpack_require__("./src/app/models/numerador.ts");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var ConsultaComprobante = (function () {
    function ConsultaComprobante(recursoService, utilsService, comprobanteService, popupListaService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.comprobanteService = comprobanteService;
        this.popupListaService = popupListaService;
        this.resourcesREST = resoursesREST_1.resourcesREST;
        this.productos = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.padrones = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.padronEnfocadoIndex = -1;
        this.productoEnfocadoIndex = -1;
        this.EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        this.EXCEL_EXTENSION = '.xlsx';
        // Lo uso cuando busca específicamente por nro y pto venta
        this.comprobante = new comprobante_1.Comprobante();
        this.fechasFiltro = {
            desde: new dateLikePicker_1.DateLikePicker(),
            hasta: new dateLikePicker_1.DateLikePicker()
        };
        this.sisModuloSelec = new sisModulo_1.SisModulo();
        this.tipoComprobanteSelec = new tipoComprobante_1.TipoComprobante();
        this.productoSelec = new producto_1.Producto();
        this.productoDesde = new producto_1.Producto();
        this.productoHasta = new producto_1.Producto();
        this.focusProductoHasta = false;
        this.focusProductoDesde = false;
        this.focusProductoSelec = false;
        this.sisEstadoSelec = new sisEstado_1.SisEstado();
        this.padronSelec = new padron_1.Padron();
        this.depositoSelec = new deposito_1.Deposito();
        this.vendedorSelec = new vendedor_1.Vendedor();
        this.sisTipoOpSelect = new sisTipoOperacion_1.SisTipoOperacion();
        this.totalNetoComp = 0;
        this.totalComp = 0;
        this.idTipoFechaSeleccionada = 0;
        this.compEncabezados = new rxjs_1.BehaviorSubject([]);
        this.compDetalles = new rxjs_1.BehaviorSubject([]);
        this.estadoAfip = 'Todas';
        this.columnasTablaHeader = ["comprobante", "numero", "fechaEmi", "idPadron", "cuit", "cotDolar", "imputada", "importeNeto", "importeTotal", "tipoOperacion"];
        this.columnasTablaDetalles = ["comprobante", "numero", "fechaEmision", "codProducto", "articulo", "original", "pendiente", "precio", "importe", "precioDesc", "deposito"];
        this.isLoading = false;
        /**
         * Cuando se cambia un módulo se actualiza la lista de tiposComprobantes
         */
        this.onChangeSisModulo = function (moduloSelec) {
            _this.tipoComprobantes = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                'sisModulo': moduloSelec.idSisModulos
            });
            // this.sisTipoOperaciones
        };
        this.onChangeFiltroFechas = function () {
            /*Al seleccionar el combo de tipo de fecha para el filtro*/
        };
        this.onClickBuscar = function () {
            _this.isLoading = true;
            // Busco los encabezados
            // Me suscribo a los cambios de los encabezados y en cada actualizacion de estos, actualizo también todos los detalles
            // Aprovecho a fijarme si la cantidad es 0. En ese caso, muestro mensaje
            _this.comprobanteService.buscarComprobantes(_this.comprobante)(_this.fechasFiltro)(_this.idTipoFechaSeleccionada)(_this.sisModuloSelec)(_this.tipoComprobanteSelec)(_this.productoSelec)(_this.sisEstadoSelec)(_this.padronSelec)(_this.depositoSelec)(_this.vendedorSelec)(_this.sisTipoOpSelect)(_this.estadoAfip)(_this.productoDesde.codProducto)(_this.productoHasta.codProducto).subscribe(function (encabezados) {
                // Actualizo encabezados
                _this.compEncabezados.next(encabezados);
                encabezados && encabezados.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron comprobantes con esas condiciones')()() : null;
                _this.isLoading = false;
                // Actualizo detalles
                _this.compDetalles.next(_this.utilsService.flatMap(function (encabezado) { return encabezado.detalle; }, encabezados));
                _this.totalComp = 0;
                _this.totalNetoComp = 0;
                for (var i = 0; i < _this.compEncabezados.value.length; i++) {
                    _this.totalComp = _this.totalComp + _this.compEncabezados.value[i].importeTotal;
                    _this.totalNetoComp = _this.totalNetoComp + _this.compEncabezados.value[i].importeNeto;
                }
                _this.isLoading = false;
            });
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
        this.onBlurPtoVenta = function (e) { return _this.comprobante && _this.comprobante.numerador && _this.comprobante.numerador.ptoVenta ?
            _this.comprobante.numerador.ptoVenta.ptoVenta = _this.comprobante.numerador.ptoVenta.ptoVenta.padStart(4, '0') : null; };
        this.onBlurNumerador = function (e) { return _this.comprobante && _this.comprobante.numerador ?
            _this.comprobante.numerador.numerador = _this.comprobante.numerador.numerador.padStart(8, '0') : null; };
        /**
         * On click buscar
         */
        this.onClickReporte = function (tipo) {
            _this.comprobanteService.generarReportes(tipo)(_this.comprobante)(_this.fechasFiltro)(_this.sisModuloSelec)(_this.tipoComprobanteSelec)(_this.productoSelec)(_this.sisEstadoSelec)(_this.padronSelec)(_this.depositoSelec)(_this.vendedorSelec)(_this.sisTipoOpSelect)(_this.estadoAfip)(_this.productoDesde.codProducto)(_this.productoHasta.codProducto)(_this.idTipoFechaSeleccionada)
                .subscribe(function (resp) {
                if (resp) {
                    _this.utilsService.downloadBlob(resp['_body'], tipo);
                }
            });
        };
        this.onClickReporteExcel = function (tipo) {
            _this.comprobanteService.generarReportesExcel(tipo)(_this.comprobante)(_this.fechasFiltro)(_this.sisModuloSelec)(_this.tipoComprobanteSelec)(_this.productoSelec)(_this.sisEstadoSelec)(_this.padronSelec)(_this.depositoSelec)(_this.vendedorSelec)(_this.sisTipoOpSelect)(_this.estadoAfip)(_this.productoDesde.codProducto)(_this.productoHasta.codProducto)(_this.idTipoFechaSeleccionada)
                .subscribe(function (resp) {
                if (resp) {
                    _this.utilsService.downloadBlob(resp['_body'], tipo);
                }
            });
        };
        this.keyPressInputTexto = function (e) { return function (upOrDown) {
            e.preventDefault();
            // Hace todo el laburo de la lista popup y retorna el nuevo indice seleccionado
            _this.padronEnfocadoIndex =
                _this.popupListaService.keyPressInputForPopup(upOrDown)(_this.padrones.filtrados.value)(_this.padronEnfocadoIndex);
        }; };
        this.onEnterInputProv = function (e) {
            e.preventDefault();
            _this.padrones.filtrados.subscribe(function (provsLista) {
                // Busco el producto
                var provSelect = provsLista && provsLista.length
                    ? provsLista[_this.padronEnfocadoIndex]
                    : null;
                // Lo selecciono
                provSelect ? _this.popupLista.onClickListProv(provSelect) : null;
                // Reseteo el index
                _this.padronEnfocadoIndex = -1;
            });
        };
        this.popupLista = {
            onClickListProv: function (prove) {
                _this.padronSelec = new padron_1.Padron(__assign({}, prove));
            },
            getOffsetOfInputProveedor: function () {
                return _this.utilsService.getOffset(document.getElementById("padronSelec"));
            },
        };
        // Buscador cli/prov
        this.onChangeCliProv = function (busqueda) {
            _this.padronSelec = new padron_1.Padron();
            if (busqueda && busqueda.length >= 2) {
                _this.findPadrones(busqueda);
            }
            // Reseteo el indice
            _this.padronEnfocadoIndex = -1;
        };
        this.buscandoPadron = false;
        this.findPadrones = _.throttle(function (busqueda) {
            _this.buscandoPadron = true;
            _this.padrones.filtrados.next([]);
            _this.recursoService
                .getRecursoList(resoursesREST_1.resourcesREST.padron)({
                grupo: gruposParametros_1.default.proveedor,
                elementos: busqueda,
            })
                .subscribe(function (proveedores) {
                _this.padrones.filtrados.next(proveedores);
                _this.buscandoPadron = false;
            });
        }, 400);
        this.onClickPopupPadron = function (prove) { return _this.padronSelec = new padron_1.Padron(__assign({}, prove)); };
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
        this.autorizarComprobante = function (compBusc) {
            // Activo spinner
            compBusc.isBeingAuthorized = true;
            _this.comprobanteService.autorizarAfip(compBusc.idFactCab)
                .subscribe(function (respAfip) {
                compBusc.isBeingAuthorized = false;
                _this.utilsService.showImprimirModal('OK')(respAfip.control.descripcion + ". \n                    CAI: " + respAfip.datos.cai)(function () { return _this.recursoService.downloadComp(compBusc); })(compBusc);
                _this.onClickBuscar();
            });
        };
        /**
         * Onclick borrar comprobante
         */
        this.pideClaveAntesdeBorrarComprobante = function (comp) {
            /*
             this.utilsService.showModal(
                 'Seguridad'
             )(
                 'Esta operación require autorización'
             )(
                 () => {
                     this.comprobanteService.borrarComprobante(comp).subscribe((resp: any) => {
                         const theBody = this.utilsService.parseBody(resp);
                         this.utilsService.showModal(
                             theBody.control.codigo
                         )(
                             theBody.control.descripcion
                         )(
                             () => {
                                 // Actualizo grilla
                                 this.onClickBuscar();
                             }
                         )();
                     })
                 }
             )({
                 tipoModal: 'verificaClave'
             });
             */
            _this.borrarComprobante(comp);
        };
        this.borrarComprobante = function (comp) {
            _this.utilsService.showModal('Borrar comprobante')('¿Estás seguro de borrarlo?')(function () {
                _this.comprobanteService.borrarComprobante(comp).subscribe(function (resp) {
                    var theBody = _this.utilsService.parseBody(resp);
                    _this.utilsService.showModal(theBody.control.codigo)(theBody.control.descripcion)(function () {
                        // Actualizo grilla
                        _this.onClickBuscar();
                    })();
                });
            })({
                tipoModal: 'confirmation'
            });
        };
        this.validatingForm = new forms_1.FormGroup({
            modalFormAvatarPassword: new forms_1.FormControl('', forms_1.Validators.required)
        });
        // Es necesario
        this.comprobante.numerador = new numerador_1.Numerador();
        this.comprobante.numerador.ptoVenta = new ptoVenta_1.PtoVenta();
        this.sisModulos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisModulos)();
        this.sisEstados = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisEstados)();
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)()
            .subscribe(function (productos) {
            _this.productos.todos = productos;
            _this.productos.filtrados.next([]);
        });
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.padron)({ grupo: gruposParametros_1.default.cliente })
            .subscribe(function (padrones) {
            _this.padrones.todos = padrones;
            _this.padrones.filtrados.next([]);
        });
        this.depositos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.depositos)();
        this.vendedores = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.vendedor)();
        this.sisTipoOperaciones = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisTipoOperacion)();
    }
    Object.defineProperty(ConsultaComprobante.prototype, "modalFormAvatarPassword", {
        get: function () {
            return this.validatingForm.get('modalFormAvatarPassword');
        },
        enumerable: true,
        configurable: true
    });
    ConsultaComprobante.prototype.exportarAExcel = function (json, excelFileName) {
        /* const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
         const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
         const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
         this.grabarArchivoExcel(excelBuffer, excelFileName);*/
    };
    ConsultaComprobante.prototype.grabarArchivoExcel = function (buffer, fileName) {
        /*const data: Blob = new Blob([buffer], {
          type: this.EXCEL_TYPE
        });
        const today = new Date();
        const date = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate() + '_';
        const time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
        const name = fileName + date + time;*/
        // FileSaver.saveAs(data, name + this.EXCEL_EXTENSION);
    };
    ConsultaComprobante.prototype.onFocusHasta = function () {
        this.focusProductoHasta = true;
    };
    ConsultaComprobante.prototype.onBlurHasta = function () {
        this.focusProductoHasta = false;
    };
    ConsultaComprobante.prototype.onFocusDesde = function () {
        this.focusProductoDesde = true;
    };
    ConsultaComprobante.prototype.onBlurDesde = function () {
        this.focusProductoDesde = false;
    };
    ConsultaComprobante.prototype.onFocusSelec = function () {
        this.focusProductoSelec = true;
    };
    ConsultaComprobante.prototype.onBlurSelec = function () {
        this.focusProductoSelec = false;
    };
    return ConsultaComprobante;
}());
ConsultaComprobante = __decorate([
    core_1.Component({
        selector: 'consulta-comprobante',
        styles: [__webpack_require__("./src/app/pages/main/comprobantes/consultaComprobante/consultaComprobante.scss")],
        template: __webpack_require__("./src/app/pages/main/comprobantes/consultaComprobante/consultaComprobante.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object, typeof (_d = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _d || Object])
], ConsultaComprobante);
exports.ConsultaComprobante = ConsultaComprobante;
var _a, _b, _c, _d;
//# sourceMappingURL=consultaComprobante.component.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaComprobante/consultaComprobante.html":
/***/ (function(module, exports) {

module.exports = "<ba-card\r\n    class=\"consulta-comprobante criterio-busqueda\"\r\n    toggleBtn=\"true\"\r\n    cardTitle=\"Filtros\"\r\n    headerMin=\"true\"\r\n>\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"data-comprobante-content\">\r\n            <div class=\"input-row\">\r\n                <div class=\"item-input\">\r\n                    <label for=\"comprobante\">Módulo: </label>\r\n                    <select\r\n                        [compareWith]=\"utilsService.dropdownCompareWith\"\r\n                        [(ngModel)]=\"sisModuloSelec\"\r\n                        (ngModelChange)=\"onChangeSisModulo($event)\"\r\n                        class=\"form-control select-input\"\r\n                        id=\"sisModuloSelec\"\r\n                    >\r\n                        <option\r\n                            *ngFor=\"let modulo of sisModulos | async\"\r\n                            [ngValue]=\"modulo\"\r\n                        >\r\n                            {{modulo.descripcion}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"item-input\">\r\n                    <label for=\"comprobante\">Tipo: </label>\r\n                    <select\r\n                        [compareWith]=\"utilsService.dropdownCompareWith\"\r\n                        [(ngModel)]=\"tipoComprobanteSelec\"\r\n                        class=\"form-control select-input\"\r\n                        id=\"tipoComprobanteSelec\"\r\n                    >\r\n                        <option\r\n                            [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.cteTipo)\"\r\n                        >\r\n                            Todos\r\n                        </option>\r\n                        <option\r\n                            *ngFor=\"let tipo of tipoComprobantes | async\"\r\n                            [ngValue]=\"tipo\"\r\n                        >\r\n                            {{tipo.descCorta}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"input-row\">\r\n                <div class=\"item-input nro-cte\">\r\n                    <label for=\"desde\">Nro: </label>\r\n                    <input\r\n                        maxlength=\"4\"\r\n                        (blur)=\"onBlurPtoVenta($event)\"\r\n                        [(ngModel)]=\"comprobante.numerador.ptoVenta.ptoVenta\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right\"\r\n                        id=\"ptoVentaCte\"\r\n                        placeholder=\"\"\r\n                    />\r\n                    <input\r\n                        maxlength=\"8\"\r\n                        (blur)=\"onBlurNumerador($event)\"\r\n                        [(ngModel)]=\"comprobante.numerador.numerador\"\r\n                        type=\"text\"\r\n                        class=\"form-control text-right\"\r\n                        id=\"nroCte\"\r\n                        placeholder=\"\"\r\n                    />\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"data-comprobante-content\">\r\n            <div class=\"input-row flex-end-row\">\r\n                <div class=\"item-input\">\r\n                    <label for=\"por\">Por: </label>\r\n                    <div class=\"input-group date-picker-fecha\">\r\n                        <select\r\n                            [(ngModel)]=\"idTipoFechaSeleccionada\"\r\n                            (ngModelChange)=\"onChangeFiltroFechas($event)\"\r\n                            class=\"form-control select-input\"\r\n                            id=\"sisFiltroFechas\"\r\n                        >\r\n                            <option value=\"1\" id=\"filtroFechaEmi\">\r\n                                Fecha Emisión\r\n                            </option>\r\n                            <option id=\"filtroFechaVence\" value=\"2\">\r\n                                Fecha Vencimiento\r\n                            </option>\r\n                            <option id=\"filtroFechaContabilizacion\" value=\"3\">\r\n                                Fecha Contable\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"item-input\">\r\n                    <div class=\"input-group date-picker-fecha\">\r\n                        <input\r\n                            (blur)=\"onCalculateFecha($event)('desde')\"\r\n                            class=\"form-control\"\r\n                            placeholder=\"dd/mm/aaaa\"\r\n                            name=\"dp\"\r\n                            [(ngModel)]=\"fechasFiltro.desde\"\r\n                            ngbDatepicker\r\n                            #dDesd=\"ngbDatepicker\"\r\n                        />\r\n                        <div class=\"input-group-append\">\r\n                            <button\r\n                                class=\"btn btn-outline-secondary\"\r\n                                (click)=\"dDesd.toggle()\"\r\n                                type=\"button\"\r\n                                style=\"height: 100%\"\r\n                            >\r\n                                <img\r\n                                    src=\"assets/img/calendar-icon.svg\"\r\n                                    style=\"\r\n                                        width: 1.2rem;\r\n                                        height: 1rem;\r\n                                        cursor: pointer;\r\n                                    \"\r\n                                />\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"item-input\">\r\n                    <label for=\"al\">al</label>\r\n\r\n                    <div class=\"input-group date-picker-fecha\">\r\n                        <input\r\n                            (blur)=\"onCalculateFecha($event)('hasta')\"\r\n                            id=\"fechaHasta\"\r\n                            class=\"form-control\"\r\n                            placeholder=\"dd/mm/aaaa\"\r\n                            name=\"dp\"\r\n                            [(ngModel)]=\"fechasFiltro.hasta\"\r\n                            ngbDatepicker\r\n                            #dHast=\"ngbDatepicker\"\r\n                        />\r\n                        <div class=\"input-group-append\">\r\n                            <button\r\n                                class=\"btn btn-outline-secondary\"\r\n                                (click)=\"dHast.toggle()\"\r\n                                type=\"button\"\r\n                                style=\"height: 100%\"\r\n                            >\r\n                                <img\r\n                                    src=\"assets/img/calendar-icon.svg\"\r\n                                    style=\"\r\n                                        width: 1.2rem;\r\n                                        height: 1rem;\r\n                                        cursor: pointer;\r\n                                    \"\r\n                                />\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"padronSelec\">Clie/Prov</label>\r\n\r\n                <input\r\n                    #inputProveedorDom\r\n                    autocomplete=\"off\"\r\n                    id=\"padronSelec\"\r\n                    (ngModelChange)=\"onChangeCliProv($event)\"\r\n                    [(ngModel)]=\"padronSelec.padronCodigo\"\r\n                    name=\"padronSelec\"\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"\"\r\n                    (keyup.enter)=\"onEnterInputProv($event)\"\r\n                    (keydown.arrowdown)=\"keyPressInputTexto($event)('down')\"\r\n                    (keydown.arrowup)=\"keyPressInputTexto($event)('up')\"\r\n                    required\r\n                />\r\n                <div\r\n                    class=\"spinner-prov-container\"\r\n                    *ngIf=\"\r\n                            utilsService.ifFocused(inputProveedorDom)\r\n                            &&\r\n                            (\r\n                                !padronSelec ||\r\n                                !padronSelec.padronApelli\r\n                            )\r\n                            &&\r\n                            padronSelec && padronSelec.padronCodigo && padronSelec.padronCodigo.length > 0\r\n                            &&\r\n                            buscandoPadron\r\n                        \"\r\n                >\r\n                    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <div>\r\n                    <input\r\n                        autocomplete=\"off\"\r\n                        [disabled]=\"true\"\r\n                        name=\"padronApellido\"\r\n                        [(ngModel)]=\"padronSelec.padronApelli\"\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"nombreProveedor\"\r\n                        placeholder=\"\"\r\n                    />\r\n                </div>\r\n            </div>\r\n            <popup-lista\r\n                *ngIf=\"padronSelec.padronCodigo && padronSelec.padronCodigo.length > 0\"\r\n                [items]=\"padrones.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['padronApelli', 'padronNombre', 'padronCodigo']\"\r\n                [onClickItem]=\"onClickPopupPadron\"\r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('padronSelec')\"\r\n            >\r\n            </popup-lista>\r\n        </div>\r\n\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"productoDesde\" class=\"min-width\"\r\n                    >Prod. Desde:</label\r\n                >\r\n                <input\r\n                    id=\"productoDesde\"\r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    (focus)=\"onFocusDesde()\"\r\n                    (blur)=\"onBlurDesde()\"\r\n                    name=\"productoDesde\"\r\n                    [(ngModel)]=\"productoDesde.codProducto\"\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"\"\r\n                />\r\n            </div>\r\n\r\n            <popup-lista\r\n                *ngIf=\"productoDesde.codProducto && productoDesde.codProducto.length > 0 && focusProductoDesde\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\"\r\n                [onClickItem]=\"onClickPopupProductoDesde\"\r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoDesde')\"\r\n            >\r\n            </popup-lista>\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"productoHasta\" class=\"min-width\"\r\n                    >Prod. Hasta:</label\r\n                >\r\n                <input\r\n                    id=\"productoHasta\"\r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    (focus)=\"onFocusHasta()\"\r\n                    (blur)=\"onBlurHasta()\"\r\n                    name=\"productoHasta\"\r\n                    [(ngModel)]=\"productoHasta.codProducto\"\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    placeholder=\"\"\r\n                />\r\n            </div>\r\n\r\n            <popup-lista\r\n                *ngIf=\"productoHasta.codProducto && productoHasta.codProducto.length > 0 && focusProductoHasta\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\"\r\n                [onClickItem]=\"onClickPopupProductoHasta\"\r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoHasta')\"\r\n            >\r\n            </popup-lista>\r\n        </div>\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Depósito</label>\r\n                <select\r\n                    [compareWith]=\"utilsService.dropdownCompareWith\"\r\n                    [(ngModel)]=\"depositoSelec\"\r\n                    class=\"form-control select-input\"\r\n                    id=\"depositoSelec\"\r\n                >\r\n                    <option\r\n                        [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.depositos)\"\r\n                    >\r\n                        Todos\r\n                    </option>\r\n                    <option\r\n                        *ngFor=\"let dep of depositos | async\"\r\n                        [ngValue]=\"dep\"\r\n                    >\r\n                        {{dep.descripcion + ', ' + dep.codigoDep}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Estado: </label>\r\n                <select\r\n                    [compareWith]=\"utilsService.dropdownCompareWith\"\r\n                    [(ngModel)]=\"sisEstadoSelec\"\r\n                    class=\"form-control select-input\"\r\n                    id=\"sisEstadoSelec\"\r\n                >\r\n                    <option\r\n                        [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.sisEstados)\"\r\n                    >\r\n                        Todos\r\n                    </option>\r\n                    <option\r\n                        *ngFor=\"let modulo of sisEstados | async\"\r\n                        [ngValue]=\"modulo\"\r\n                    >\r\n                        {{modulo.descripcion}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Vendedor: </label>\r\n                <select\r\n                    [compareWith]=\"utilsService.dropdownCompareWith\"\r\n                    [(ngModel)]=\"vendedorSelec\"\r\n                    class=\"form-control select-input\"\r\n                    id=\"vendedorSelec\"\r\n                >\r\n                    <option\r\n                        [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.vendedor)\"\r\n                    >\r\n                        Todos\r\n                    </option>\r\n                    <option\r\n                        *ngFor=\"let vend of vendedores | async\"\r\n                        [ngValue]=\"vend\"\r\n                    >\r\n                        {{ vend.auxNombreCompleto }}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"input-row flex-end-row\"> -->\r\n        <div\r\n            class=\"input-row\"\r\n            style=\"justify-content: space-between; display: flex\"\r\n        >\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Estado Afip: </label>\r\n                <select\r\n                    [compareWith]=\"utilsService.dropdownCompareWith\"\r\n                    [(ngModel)]=\"estadoAfip\"\r\n                    class=\"form-control select-input\"\r\n                    id=\"idEstadoAfip\"\r\n                >\r\n                    <option value=\"Todas\">Todas</option>\r\n                    <option value=\"Si\">Autorizadas</option>\r\n                    <option value=\"No\">No Autorizadas</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Tipo Operacion: </label>\r\n                <select\r\n                    [compareWith]=\"utilsService.dropdownCompareWith\"\r\n                    [(ngModel)]=\"sisTipoOpSelect\"\r\n                    class=\"form-control select-input\"\r\n                    id=\"tipoOpSelec\"\r\n                >\r\n                    <option\r\n                        [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.sisTipoOperacion)\"\r\n                    >\r\n                        Todos\r\n                    </option>\r\n                    <option\r\n                        *ngFor=\"let sto of sisTipoOperaciones | async\"\r\n                        [ngValue]=\"sto\"\r\n                    >\r\n                        {{ sto.descripcion }} [{{ sto.modulo.descripcion }}]\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"btn-container item-input\">\r\n                <button\r\n                    id=\"btnBuscar\"\r\n                    [disabled]=\"!idTipoFechaSeleccionada ||\r\n                                    !fechasFiltro.desde ||\r\n                                    !fechasFiltro.desde.day ||\r\n                                    !fechasFiltro.hasta ||\r\n                                    !fechasFiltro.hasta.day ||\r\n                                    !sisModuloSelec || !sisModuloSelec.idSisModulos\"\r\n                    (click)=\"onClickBuscar()\"\r\n                    class=\"btn btn-primary\"\r\n                >\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                    Buscar\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ba-card>\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n</div>\r\n\r\n\r\n<!-- <ngb-tabset *ngIf=\"(compEncabezados | async)?.length > 0\" class=\"col-sm-12 tabset-consulta\"> -->\r\n<ngb-tabset\r\n    *ngIf=\"!isLoading && (compEncabezados | async)?.length > 0\"\r\n    class=\"col-sm-12 tabset-consulta\"\r\n>\r\n\r\n    <ngb-tab title=\"Comprobantes\">\r\n\r\n        <ng-template ngbTabContent>\r\n            <table\r\n                style=\"table-layout: fixed; width: 100%\"\r\n                class=\"table table-striped table-consulta-comp\"\r\n                [mfData]=\"compEncabezados | async\"\r\n                #mf=\"mfDataTable\"\r\n            >\r\n                <thead>\r\n                    <tr>\r\n                        <td style=\"width: 1.5%\"></td>\r\n                        <th style=\"width: 4%\">Comp</th>\r\n                        <th class=\"text-right\">Numero</th>\r\n                        <th>Emisión</th>\r\n                        <!--\r\n                            <th>Vence</th>\r\n                        <th>Contable</th>\r\n                        -->\r\n                        <th class=\"text-right\" style=\"width: 4%\">Cli/Pro</th>\r\n                        <th style=\"width: 8%\">Nombre</th>\r\n                        <!-- <th class=\"text-right\">Cuit</th> -->\r\n                        <th class=\"text-right\">Dolar</th>\r\n                        <th style=\"width: 3%\">Mon</th>\r\n                        <th style=\"width: 3%\">Imp</th>\r\n                        <th>Modulo</th>\r\n                        <th class=\"text-right\">Neto</th>\r\n                        <th class=\"text-right\">Total</th>\r\n                        <th class=\"text-right\">Tipo Op</th>\r\n                        <th style=\"width: 3%\" class=\"text-right\">Aut</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let compBusc of mf.data\">\r\n                        <tr class=\"comprobante-tr\">\r\n                            <td\r\n                                style=\"width: 1.5%\"\r\n                                class=\"btn-toggle\"\r\n                                (click)=\"compBusc.showDetalles = !compBusc.showDetalles\"\r\n                            >\r\n                                <i\r\n                                    *ngIf=\"!compBusc.showDetalles\"\r\n                                    class=\"fa fa-caret-right\"\r\n                                    aria-hidden=\"true\"\r\n                                ></i>\r\n                                <i\r\n                                    *ngIf=\"compBusc.showDetalles\"\r\n                                    class=\"fa fa-caret-down\"\r\n                                    aria-hidden=\"true\"\r\n                                ></i>\r\n                            </td>\r\n                            <td style=\"width: 10%\">\r\n                                {{ compBusc.comprobante }}\r\n                            </td>\r\n                            <td class=\"text-right td-nowrap\">\r\n                                {{ formatNumero(compBusc.numero) }}\r\n                            </td>\r\n                            <td>\r\n                                {{\r\n                                utilsService.formatearFecha('DD/MM/YYYY')(compBusc.fechaEmi)\r\n                                }}\r\n                            </td>\r\n                            <!-- <td>{{ utilsService.formatearFecha('DD/MM/YYYY')(compBusc.fechaVence) }}</td>\r\n                            <td>{{ utilsService.formatearFecha('DD/MM/YYYY')(compBusc.fechaConta) }}</td>-->\r\n                            <td class=\"text-right\" style=\"width: 4%\">\r\n                                {{ compBusc.idPadron }}\r\n                            </td>\r\n                            <td style=\"width: 15%\">{{ compBusc.nombre }}</td>\r\n                            <!-- <td class=\"text-right\" style=\"width:10%;\">{{ compBusc.cuit }}</td> -->\r\n                            <td class=\"text-right\">\r\n                                {{ utilsService.parseDecimal(compBusc.cotDolar)\r\n                                }}\r\n                            </td>\r\n                            <td style=\"width: 3%\">{{ compBusc.moneda }}</td>\r\n                            <td style=\"width: 3%\">{{ compBusc.imputada }}</td>\r\n                            <td>{{ compBusc.modulo }}</td>\r\n                            <td class=\"text-right\">\r\n                                {{\r\n                                utilsService.parseDecimal(compBusc.importeNeto)\r\n                                }}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{\r\n                                utilsService.parseDecimal(compBusc.importeTotal)\r\n                                }}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{ compBusc.tipoOperacion }}\r\n                            </td>\r\n                            <td style=\"width: 3%\" class=\"text-right\">\r\n                                {{ compBusc.autorizada }}\r\n                            </td>\r\n\r\n                            <td style=\"display: flex\">\r\n                                <div\r\n                                    (click)=\"comprobanteService.downloadComp(compBusc, null)\"\r\n                                    class=\"btn-accion\"\r\n                                >\r\n                                    <i\r\n                                        *ngIf=\"!compBusc.isDownloading\"\r\n                                        class=\"fa fa-print\"\r\n                                        aria-hidden=\"true\"\r\n                                    ></i>\r\n                                    <i\r\n                                        *ngIf=\"compBusc.isDownloading\"\r\n                                        class=\"fa fa-spinner fa-spin\"\r\n                                        aria-hidden=\"true\"\r\n                                    ></i>\r\n                                </div>\r\n                                <div\r\n                                    *ngIf=\"compBusc.idCteTipo == 75 && compBusc.tipoOperacion == 'Canje'\"\r\n                                    (click)=\"comprobanteService.downloadComp(compBusc, 'contratoCanje')\"\r\n                                    class=\"btn-accion\"\r\n                                >\r\n                                    <i\r\n                                        class=\"fa fa-handshake-o\"\r\n                                        aria-hidden=\"true\"\r\n                                    ></i>\r\n                                    <!--<i *ngIf=\"compBusc.isDownloading\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>-->\r\n                                </div>\r\n                                <div\r\n                                    *ngIf=\"compBusc.idCteTipo == 75 && compBusc.tipoOperacion == 'Canje'\"\r\n                                    (click)=\"comprobanteService.downloadComp(compBusc, 'documentoCanje')\"\r\n                                    class=\"btn-accion\"\r\n                                >\r\n                                    <i\r\n                                        class=\"fa fa-book\"\r\n                                        aria-hidden=\"true\"\r\n                                    ></i>\r\n                                    <!--<i *ngIf=\"compBusc.isDownloading\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>-->\r\n                                </div>\r\n                                <div\r\n                                    *ngIf=\"compBusc && compBusc.autorizada === 'No'\"\r\n                                    (click)=\"autorizarComprobante(compBusc)\"\r\n                                    class=\"btn-accion\"\r\n                                >\r\n                                    <i\r\n                                        *ngIf=\"!compBusc.isBeingAuthorized\"\r\n                                        class=\"fa fa-key\"\r\n                                        aria-hidden=\"true\"\r\n                                    ></i>\r\n                                    <i\r\n                                        *ngIf=\"compBusc.isBeingAuthorized\"\r\n                                        class=\"fa fa-spinner fa-spin\"\r\n                                        aria-hidden=\"true\"\r\n                                    ></i>\r\n                                </div>\r\n                                <div\r\n                                    *ngIf=\"compBusc && compBusc.permiteBorrado === 'Si'\"\r\n                                    (click)=\"pideClaveAntesdeBorrarComprobante(compBusc)\"\r\n                                    class=\"btn-accion\"\r\n                                >\r\n                                    <i\r\n                                        class=\"fa fa-trash\"\r\n                                        aria-hidden=\"true\"\r\n                                    ></i>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr\r\n                            *ngIf=\"compBusc.showDetalles\"\r\n                            class=\"detalles-comp-tr\"\r\n                        >\r\n                            <td colspan=\"1\"></td>\r\n                            <td class=\"detalles-titulo\" colspan=\"1\"></td>\r\n                            <td class=\"detalles-tabla-td\" colspan=\"14\">\r\n                                <!-- <table style=\"table-layout: fixed; width: 100%;\" class=\"table-inner\" style=\"width:100%; background: #d6d6d67a;\"> -->\r\n                                <table\r\n                                    style=\"table-layout: fixed; width: 100%\"\r\n                                    class=\"table-inner\"\r\n                                    style=\"width: 100%; background: #174c6640\"\r\n                                >\r\n                                    <tr>\r\n                                        <th>Producto</th>\r\n                                        <th>Descripción</th>\r\n                                        <th class=\"text-right\">Cantidad</th>\r\n                                        <th class=\"text-right\">Pendiente</th>\r\n                                        <th class=\"text-right\">Precio</th>\r\n                                        <th class=\"text-right\">Importe</th>\r\n                                        <th class=\"text-right\">Precio Desc</th>\r\n                                        <th class=\"text-right\">Descuento</th>\r\n                                        <th class=\"text-right\">Unidad Desc</th>\r\n                                        <th class=\"text-right\">Deposito</th>\r\n                                    </tr>\r\n                                    <tr\r\n                                        *ngFor=\"let compDet of compBusc.detalle\"\r\n                                    >\r\n                                        <td>{{ compDet.codProducto }}</td>\r\n                                        <td>{{ compDet.articulo }}</td>\r\n                                        <td class=\"text-right\">\r\n                                            {{\r\n                                            utilsService.parseDecimal(compDet.original)\r\n                                            }}\r\n                                        </td>\r\n                                        <td class=\"text-right\">\r\n                                            {{\r\n                                            utilsService.parseDecimal(compDet.pendiente)\r\n                                            }}\r\n                                        </td>\r\n                                        <td class=\"text-right\">\r\n                                            {{\r\n                                            utilsService.toThreeDecimals(compDet.precio)\r\n                                            }}\r\n                                        </td>\r\n                                        <td class=\"text-right\">\r\n                                            {{ utilsService.parseDecimal(\r\n                                            (compDet.importe) ) }}\r\n                                        </td>\r\n                                        <td class=\"text-right\">\r\n                                            {{\r\n                                            utilsService.toThreeDecimals(compDet.precioDesc)\r\n                                            }}\r\n                                        </td>\r\n                                        <td class=\"text-right\">\r\n                                            {{ compDet.descuento }}\r\n                                        </td>\r\n                                        <td class=\"text-right\">\r\n                                            {{ compDet.unidadDescuento }}\r\n                                        </td>\r\n                                        <td class=\"text-right\">\r\n                                            {{ compDet.deposito }}\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                        <tr\r\n                            *ngIf=\"compBusc.showDetalles && compBusc.idCteTipo === 70\"\r\n                            class=\"detalles-comp-tr\"\r\n                        >\r\n                            <td colspan=\"1\"></td>\r\n                            <td class=\"detalles-titulo\" colspan=\"1\">\r\n                                <div class=\"detalles-titulo-text\">Cond. de</div>\r\n                                <div class=\"detalles-titulo-text\">Comer.</div>\r\n                            </td>\r\n                            <td class=\"detalles-tabla-td\" colspan=\"14\">\r\n                                <!-- <table style=\"table-layout: fixed; width: 100%;\" class=\"table-inner\" style=\"width:100%; background: #d6d6d67a;\"> -->\r\n                                <table\r\n                                    style=\"table-layout: fixed; width: 100%\"\r\n                                    class=\"table-inner\"\r\n                                    style=\"width: 100%; background: #174c6640\"\r\n                                >\r\n                                    <tr>\r\n                                        <th>Pesificado</th>\r\n                                        <th>Dolarizado al vto.</th>\r\n                                        <th class=\"text-right\">\r\n                                            Interés Mensual de Compra\r\n                                        </th>\r\n                                        <th>Canje Insumos</th>\r\n                                        <th>Tipo de cambio</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            {{ compBusc.pesificado ? 'SI' : 'NO'\r\n                                            }}\r\n                                        </td>\r\n                                        <td>\r\n                                            {{ compBusc.dolarizadoAlVto ? 'SI' :\r\n                                            'NO' }}\r\n                                        </td>\r\n                                        <td class=\"text-right\">\r\n                                            {{ compBusc.interesMensualCompra }}%\r\n                                        </td>\r\n                                        <td>\r\n                                            {{ compBusc.canjeInsumos ? 'SI' :\r\n                                            'NO' }}\r\n                                        </td>\r\n                                        <td>{{ compBusc.tipoCambio }}</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                    </ng-container>\r\n                </tbody>\r\n                <!-- <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"16\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            --></table>\r\n            <div class=\"total-container\">\r\n                <span class=\"title-text\">Neto</span>:\r\n                {{utilsService.parseDecimal(totalNetoComp)}}\r\n                <span class=\"title-text total-span\">Total</span>:\r\n                {{utilsService.parseDecimal(totalComp)}}\r\n            </div>\r\n            <br />\r\n            <hr />\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"btn-imprimir-container\">\r\n                        <button\r\n                            style=\"margin: 0 19px\"\r\n                            (click)=\"onClickReporte('cabecera')\"\r\n                            type=\"submit\"\r\n                            class=\"btn btn-secondary\"\r\n                        >\r\n                            <i\r\n                                style=\"padding-right: 4px\"\r\n                                class=\"fa fa-file-text-o\"\r\n                                aria-hidden=\"true\"\r\n                            ></i>\r\n                            Reporte\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <div class=\"btn-imprimir-container\">\r\n                        <button\r\n                            style=\"margin: 0 19px\"\r\n                            (click)=\"this.utilsService.descargarArchivoCsv(mf.data,  columnasTablaHeader, 'consultaDeComprobante')\"\r\n                            type=\"submit\"\r\n                            class=\"btn btn-secondary\"\r\n                        >\r\n                            <i\r\n                                style=\"padding-right: 8px\"\r\n                                class=\"fa fa-file-excel-o\"\r\n                                aria-hidden=\"true\"\r\n                            ></i>\r\n                            Descargar Excel/Csv\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br />\r\n        </ng-template>\r\n    </ngb-tab>\r\n\r\n    <ngb-tab title=\"Detalles\">\r\n        <ng-template ngbTabContent>\r\n            <table\r\n                style=\"table-layout: fixed; width: 100%\"\r\n                class=\"table table-striped\"\r\n                [mfData]=\"compDetalles | async\"\r\n                #mf=\"mfDataTable\"\r\n            >\r\n                <thead>\r\n                    <tr>\r\n                        <th>Cte</th>\r\n                        <th>Número</th>\r\n                        <th>Fec. Cte.</th>\r\n                        <th>Producto</th>\r\n                        <th>Descripción</th>\r\n                        <th class=\"text-right\">Cantidad</th>\r\n                        <th class=\"text-right\">Pendiente</th>\r\n                        <th class=\"text-right\">Precio</th>\r\n                        <th class=\"text-right\">Importe</th>\r\n                        <th class=\"text-right\">Precio Desc</th>\r\n                        <th class=\"text-right\">Aplicación</th>\r\n                        <th class=\"text-right\">Unidad</th>\r\n                        <th class=\"text-right\">Depósito</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let compDet of mf.data\">\r\n                        <td>{{ compDet.comprobante }}</td>\r\n                        <td class=\"td-nowrap\">\r\n                            {{ formatNumero(compDet.numero) }}\r\n                        </td>\r\n                        <td>\r\n                            {{\r\n                            utilsService.formatearFecha('DD/MM/YYYY')(compDet.fechaEmision)\r\n                            }}\r\n                        </td>\r\n                        <td>{{ compDet.codProducto }}</td>\r\n                        <td>{{ compDet.articulo }}</td>\r\n                        <td class=\"text-right\">\r\n                            {{ utilsService.parseDecimal(compDet.original) }}\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            {{ utilsService.parseDecimal(compDet.pendiente) }}\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            {{ utilsService.toThreeDecimals(compDet.precio) }}\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            {{ utilsService.parseDecimal( (compDet.pendiente) *\r\n                            (compDet.precio) ) }}\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            {{ utilsService.toThreeDecimals(\r\n                            (compDet.precioDesc) ) }}\r\n                        </td>\r\n                        <td class=\"text-right\">{{ compDet.descuento }}</td>\r\n                        <td class=\"text-right\">\r\n                            {{ compDet.unidadDescuento }}\r\n                        </td>\r\n                        <td class=\"text-right\">{{ compDet.deposito }}</td>\r\n                    </tr>\r\n                </tbody>\r\n                <!--\r\n                <tfoot >\r\n\r\n                    <tr>\r\n                        <td colspan=\"12\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n                -->\r\n            </table>\r\n            <div class=\"btn-imprimir-container\">\r\n                <button\r\n                    style=\"margin: 0 19px; margin-top: 20px\"\r\n                    (click)=\"this.utilsService.descargarArchivoCsv(mf.data, columnasTablaDetalles, 'detallesDeComprobantes')\"\r\n                    type=\"submit\"\r\n                    class=\"btn btn-secondary\"\r\n                >\r\n                    <i\r\n                        style=\"padding-right: 4px\"\r\n                        class=\"fa fa-file-text-o\"\r\n                        aria-hidden=\"true\"\r\n                    ></i>\r\n                    Exportar a Excel/Csv\r\n                </button>\r\n            </div>\r\n            <div class=\"btn-imprimir-container\">\r\n                <button\r\n                    style=\"margin: 0 19px; margin-top: 20px\"\r\n                    (click)=\"onClickReporte('detalle')\"\r\n                    type=\"submit\"\r\n                    class=\"btn btn-secondary\"\r\n                >\r\n                    <i\r\n                        style=\"padding-right: 4px\"\r\n                        class=\"fa fa-file-text-o\"\r\n                        aria-hidden=\"true\"\r\n                    ></i>\r\n                    Reporte\r\n                </button>\r\n            </div>\r\n        </ng-template>\r\n    </ngb-tab>\r\n\r\n    <ngb-tab title=\"Resúmen\">\r\n        <ng-template ngbTabContent> </ng-template>\r\n    </ngb-tab>\r\n</ngb-tabset>\r\n"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaComprobante/consultaComprobante.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-comprobante > .card {\n  margin-bottom: 2px;\n  font-size: 10px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda {\n    font-size: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 50%;\n    padding: 0 1%;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 2px;\n      margin-bottom: 10px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > input {\n          margin: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > label {\n          margin-bottom: 5px;\n          margin-top: 3px;\n          padding-right: 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .flex-end-row {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-title {\n      width: 20%;\n      font-weight: 350;\n      margin: 5px 0 2px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content {\n      width: 98.8%;\n      font-size: 11px;\n      border: solid 1px #c2c2c7;\n      border-radius: 7px;\n      margin: 0px 8px 14px 0px;\n      padding: 6px 5px 0px 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .item-input {\n        width: 50%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .filtro-fechas {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 70%;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .filtro-fechas > label {\n          width: 7%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .filtro-fechas > input {\n          width: 49px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .filtro-fechas > input:last-child {\n          width: 100px;\n          margin-right: 0; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > label {\n          width: 7%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input {\n          width: 49px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input:last-child {\n          width: 152px;\n          margin-right: 0; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .flex-end-with-padding {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 1%; }\n\n:host /deep/ .tabset-consulta {\n  font-size: 11px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > td {\n    border: none;\n    padding: 10px 12px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > th {\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > .td-right {\n    text-align: right !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead tr th {\n    padding: 7px 10px;\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead td {\n    padding: 7px 5px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp .btn-accion {\n    cursor: pointer;\n    margin: 8px 6px 0; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-titulo {\n    font-size: 1.2rem;\n    font-size: 0.9rem;\n    font-weight: bold; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td {\n    padding: 0 !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td tr th {\n      font-size: 11px;\n      border: solid 0px;\n      font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle {\n    cursor: pointer; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle:hover {\n    background: #c7c7c7; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > td {\n    padding: 1px 12px; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > th {\n    padding: 4px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta .btn-imprimir-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin: 1% -0.8%; }\n\n.popup-spinner {\n  position: fixed;\n  z-index: 9999999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 151px;\n  padding: 5px 9px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: white;\n  border: solid 1px #e0e0e0;\n  border-radius: 6px 9px 0px 0px;\n  margin-top: 4px; }\n\n.width-5 {\n  width: 5%; }\n\n.table > thead > tr > th {\n  white-space: normal !important; }\n\n.spinner-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2rem;\n  margin: 14px 0;\n  background: #fafafa;\n  padding: 10px 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  color: #213742; }\n\n.total-container {\n  padding: 0.5rem; }\n\n.title-text {\n  font-weight: bold; }\n\n.total-span {\n  padding-left: 2rem; }\n\n.min-width {\n  min-width: 70px; }\n\n.btn-imprimir-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin: 1% -0.8%; }\n"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaComprobante/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/comprobantes/consultaComprobante/consultaComprobante.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaComprobanteAnticipado/consultaComprobanteAnticipado.component.ts":
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
var sisModulo_1 = __webpack_require__("./src/app/models/sisModulo.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var producto_1 = __webpack_require__("./src/app/models/producto.ts");
var sisEstado_1 = __webpack_require__("./src/app/models/sisEstado.ts");
var padron_1 = __webpack_require__("./src/app/models/padron.ts");
var deposito_1 = __webpack_require__("./src/app/models/deposito.ts");
var tipoComprobante_1 = __webpack_require__("./src/app/models/tipoComprobante.ts");
var comprobante_1 = __webpack_require__("./src/app/models/comprobante.ts");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var gruposParametros_1 = __webpack_require__("./src/constantes/gruposParametros.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var vendedor_1 = __webpack_require__("./src/app/models/vendedor.ts");
var ptoVenta_1 = __webpack_require__("./src/app/models/ptoVenta.ts");
var sisTipoOperacion_1 = __webpack_require__("./src/app/models/sisTipoOperacion.ts");
var numerador_1 = __webpack_require__("./src/app/models/numerador.ts");
var ConsultaComprobanteAnticipado = (function () {
    function ConsultaComprobanteAnticipado(recursoService, utilsService, comprobanteService, popupListaService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.comprobanteService = comprobanteService;
        this.popupListaService = popupListaService;
        this.resourcesREST = resoursesREST_1.resourcesREST;
        this.productos = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.padrones = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.padronEnfocadoIndex = -1;
        this.productoEnfocadoIndex = -1;
        // Lo uso cuando busca específicamente por nro y pto venta
        this.comprobante = new comprobante_1.Comprobante();
        this.fechasFiltro = {
            desde: new dateLikePicker_1.DateLikePicker(),
            hasta: new dateLikePicker_1.DateLikePicker()
        };
        this.sisModuloSelec = new sisModulo_1.SisModulo();
        this.tipoComprobanteSelec = new tipoComprobante_1.TipoComprobante();
        this.tipoComprobanteSelec2 = new tipoComprobante_1.TipoComprobante();
        this.productoSelec = new producto_1.Producto();
        this.productoDesde = new producto_1.Producto();
        this.productoHasta = new producto_1.Producto();
        this.focusProductoHasta = false;
        this.focusProductoDesde = false;
        this.focusProductoSelec = false;
        this.sisEstadoSelec = new sisEstado_1.SisEstado();
        this.padronSelec = new padron_1.Padron();
        this.depositoSelec = new deposito_1.Deposito();
        this.vendedorSelec = new vendedor_1.Vendedor();
        this.sisTipoOpSelect = new sisTipoOperacion_1.SisTipoOperacion();
        this.totalNetoComp = 0;
        this.totalComp = 0;
        this.compEncabezados = new rxjs_1.BehaviorSubject([]);
        this.compDetalles = new rxjs_1.BehaviorSubject([]);
        this.estadoAfip = 'Todas';
        this.isLoading = false;
        /**
         * Cuando se cambia un módulo se actualiza la lista de tiposComprobantes
         */
        this.onChangeSisModulo = function (moduloSelec) {
            _this.tipoComprobantes = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                'sisModulo': moduloSelec.idSisModulos
            });
            // this.sisTipoOperaciones
        };
        /**
         * On click buscar
         */
        this.onClickBuscar = function () {
            _this.isLoading = true;
            // Busco los encabezados
            // Me suscribo a los cambios de los encabezados y en cada actualizacion de estos, actualizo también todos los detalles
            // Aprovecho a fijarme si la cantidad es 0. En ese caso, muestro mensaje
            _this.comprobanteService.buscarComprobantesAnticipados(_this.comprobante)(_this.fechasFiltro)(_this.sisModuloSelec)(_this.tipoComprobanteSelec)(_this.tipoComprobanteSelec2)(_this.productoSelec)(_this.sisEstadoSelec)(_this.padronSelec)(_this.depositoSelec)(_this.vendedorSelec)(_this.sisTipoOpSelect)(_this.estadoAfip)(_this.productoDesde.codProducto)(_this.productoHasta.codProducto)
                .subscribe(function (encabezados) {
                // Actualizo encabezados
                _this.compEncabezados.next(encabezados);
                encabezados && encabezados.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron comprobantes con esas condiciones')()() : null;
                // Actualizo detalles
                _this.compDetalles.next(_this.utilsService.flatMap(function (encabezado) { return encabezado.detalle; }, encabezados));
                _this.totalComp = 0;
                _this.totalNetoComp = 0;
                for (var i = 0; i < _this.compEncabezados.value.length; i++) {
                    _this.totalComp = _this.totalComp + _this.compEncabezados.value[i].importeTotal;
                    _this.totalNetoComp = _this.totalNetoComp + _this.compEncabezados.value[i].importeNeto;
                }
                _this.isLoading = false;
            });
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
        this.onBlurPtoVenta = function (e) { return _this.comprobante && _this.comprobante.numerador && _this.comprobante.numerador.ptoVenta ?
            _this.comprobante.numerador.ptoVenta.ptoVenta = _this.comprobante.numerador.ptoVenta.ptoVenta.padStart(4, '0') : null; };
        this.onBlurNumerador = function (e) { return _this.comprobante && _this.comprobante.numerador ?
            _this.comprobante.numerador.numerador = _this.comprobante.numerador.numerador.padStart(8, '0') : null; };
        /**
         * On click buscar
         */
        this.onClickReporte = function (tipo) {
            _this.comprobanteService.generarReportes(tipo)(_this.comprobante)(_this.fechasFiltro)(_this.sisModuloSelec)(_this.tipoComprobanteSelec)(_this.productoSelec)(_this.sisEstadoSelec)(_this.padronSelec)(_this.depositoSelec)(_this.vendedorSelec)(_this.sisTipoOpSelect)(_this.estadoAfip)(_this.productoDesde.codProducto)(_this.productoHasta.codProducto)(0)
                .subscribe(function (resp) {
                if (resp) {
                    _this.utilsService.downloadBlob(resp['_body'], tipo);
                }
            });
        };
        // Buscador cli/prov
        this.onChangeCliProv = function (busqueda) {
            if (busqueda && busqueda.length === 0) {
                _this.padrones.filtrados.next([]);
            }
            else {
                _this.padrones.filtrados.next(_this.comprobanteService.filtrarPadrones(_this.padrones.todos, busqueda));
            }
            _this.padronEnfocadoIndex = -1;
        };
        this.onClickPopupPadron = function (prove) { return _this.padronSelec = new padron_1.Padron(__assign({}, prove)); };
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
        this.autorizarComprobante = function (compBusc) {
            // Activo spinner
            compBusc.isBeingAuthorized = true;
            _this.comprobanteService.autorizarAfip(compBusc.idFactCab)
                .subscribe(function (respAfip) {
                compBusc.isBeingAuthorized = false;
                _this.utilsService.showImprimirModal('OK')(respAfip.control.descripcion + ". \n                    CAI: " + respAfip.datos.cai)(function () { return _this.recursoService.downloadComp(compBusc); })(compBusc);
                _this.onClickBuscar();
            });
        };
        /**
         * Onclick borrar comprobante
         */
        this.borrarComprobante = function (comp) {
            _this.utilsService.showModal('Borrar comprobante')('¿Estás seguro de borrarlo?')(function () {
                _this.comprobanteService.borrarComprobante(comp).subscribe(function (resp) {
                    var theBody = _this.utilsService.parseBody(resp);
                    _this.utilsService.showModal(theBody.control.codigo)(theBody.control.descripcion)(function () {
                        // Actualizo grilla
                        _this.onClickBuscar();
                    })();
                });
            })({
                tipoModal: 'confirmation'
            });
        };
        // Es necesario
        this.comprobante.numerador = new numerador_1.Numerador();
        this.comprobante.numerador.ptoVenta = new ptoVenta_1.PtoVenta();
        this.sisModulos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisModulos)();
        this.sisEstados = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisEstados)();
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)()
            .subscribe(function (productos) {
            _this.productos.todos = productos;
            _this.productos.filtrados.next([]);
        });
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.padron)({ grupo: gruposParametros_1.default.cliente })
            .subscribe(function (padrones) {
            _this.padrones.todos = padrones;
            // this.padrones.filtrados.next(padrones);
            _this.padrones.filtrados.next([]);
        });
        this.depositos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.depositos)();
        this.vendedores = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.vendedor)();
        this.sisTipoOperaciones = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisTipoOperacion)();
    }
    ConsultaComprobanteAnticipado.prototype.onFocusHasta = function () {
        this.focusProductoHasta = true;
    };
    ConsultaComprobanteAnticipado.prototype.onBlurHasta = function () {
        this.focusProductoHasta = false;
    };
    ConsultaComprobanteAnticipado.prototype.onFocusDesde = function () {
        this.focusProductoDesde = true;
    };
    ConsultaComprobanteAnticipado.prototype.onBlurDesde = function () {
        this.focusProductoDesde = false;
    };
    ConsultaComprobanteAnticipado.prototype.onFocusSelec = function () {
        this.focusProductoSelec = true;
    };
    ConsultaComprobanteAnticipado.prototype.onBlurSelec = function () {
        this.focusProductoSelec = false;
    };
    return ConsultaComprobanteAnticipado;
}());
ConsultaComprobanteAnticipado = __decorate([
    core_1.Component({
        selector: 'consulta-comprobante-anticipado',
        styles: [__webpack_require__("./src/app/pages/main/comprobantes/consultaComprobanteAnticipado/consultaComprobanteAnticipado.scss")],
        template: __webpack_require__("./src/app/pages/main/comprobantes/consultaComprobanteAnticipado/consultaComprobanteAnticipado.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object, typeof (_d = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _d || Object])
], ConsultaComprobanteAnticipado);
exports.ConsultaComprobanteAnticipado = ConsultaComprobanteAnticipado;
var _a, _b, _c, _d;
//# sourceMappingURL=consultaComprobanteAnticipado.component.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaComprobanteAnticipado/consultaComprobanteAnticipado.html":
/***/ (function(module, exports) {

module.exports = "<ba-card \r\n    class=\"consulta-comprobante criterio-busqueda\" \r\n    toggleBtn=\"true\"\r\n    cardTitle=\"Filtros\"\r\n    headerMin=\"true\"\r\n    >\r\n\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"data-comprobante-title\">\r\n            Comprobante\r\n        </div>\r\n        <div class=\"data-comprobante-content\">\r\n            <div class=\"input-row\">\r\n                <div class=\"item-input\">\r\n                    <label for=\"comprobante\">Módulo: </label>\r\n                    <select \r\n                        [compareWith]=\"utilsService.dropdownCompareWith\" \r\n                        [(ngModel)]=\"sisModuloSelec\" \r\n                        (ngModelChange)=\"onChangeSisModulo($event)\"\r\n                        class=\"form-control select-input\" id=\"sisModuloSelec\">\r\n                        <option *ngFor=\"let modulo of sisModulos | async\" [ngValue]=\"modulo\">\r\n                            {{modulo.descripcion}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"item-input\">\r\n                    <label for=\"comprobante\">Tipo: </label>\r\n                    <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"tipoComprobanteSelec\" class=\"form-control select-input\"\r\n                        id=\"tipoComprobanteSelec\">\r\n                        <option *ngFor=\"let tipo of tipoComprobantes | async\" [ngValue]=\"tipo\">\r\n                            {{tipo.descCorta}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"input-row\">\r\n                <div class=\"item-input nro-cte\">\r\n                    <label class=\"longer-label\" for=\"comprobante\">Tipo 2: </label>\r\n                    <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"tipoComprobanteSelec2\" class=\"form-control select-input\"\r\n                        id=\"tipoComprobanteSelec2\">\r\n                        <option *ngFor=\"let tipo of tipoComprobantes | async\" [ngValue]=\"tipo\">\r\n                            {{tipo.descCorta}}\r\n                        </option>\r\n                    </select>\r\n                    <label for=\"desde\">Nro: </label>\r\n                    <input \r\n                        maxlength=\"4\" \r\n                        (blur)=\"onBlurPtoVenta($event)\" \r\n                        [(ngModel)]=\"comprobante.numerador.ptoVenta.ptoVenta\" type=\"text\" class=\"form-control text-right\" id=\"ptoVentaCte\" placeholder=\"\">\r\n                    <input \r\n                        maxlength=\"8\" \r\n                        (blur)=\"onBlurNumerador($event)\" \r\n                        [(ngModel)]=\"comprobante.numerador.numerador\" type=\"text\" class=\"form-control text-right\" id=\"nroCte\" placeholder=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"desde\">Desde</label>\r\n                <div class=\"input-group date-picker-fecha\">\r\n                    <input (blur)=\"onCalculateFecha($event)('desde')\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" [(ngModel)]=\"fechasFiltro.desde\"\r\n                        ngbDatepicker #dDesd=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dDesd.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"al\">al</label>\r\n\r\n                <div class=\"input-group date-picker-fecha\">\r\n                    <input (blur)=\"onCalculateFecha($event)('hasta')\" id=\"fechaHasta\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\"\r\n                        [(ngModel)]=\"fechasFiltro.hasta\" ngbDatepicker #dHast=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dHast.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"input-row flex-end-row\">\r\n\r\n            <!--<div class=\"item-input\">\r\n                <label for=\"productoSelec\">Producto</label>\r\n                <input id=\"productoSelec\" \r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    (focus)=\"onFocusSelec()\"\r\n                    (blur)=\"onBlurSelec()\"\r\n                    name=\"productoSelec\"\r\n                    [(ngModel)]=\"productoSelec.codProducto\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"productoSelec.codProducto && productoSelec.codProducto.length > 0 && focusProductoSelec\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\" \r\n                [onClickItem]=\"onClickPopupProducto\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoSelec')\">\r\n            </popup-lista>-->\r\n            \r\n            <div class=\"item-input\">\r\n                <label for=\"padronSelec\">Clie/Prov</label>\r\n                <input id=\"padronSelec\" \r\n                    (ngModelChange)=\"onChangeCliProv($event)\"\r\n                    \r\n                    name=\"padronSelec\"\r\n                    [(ngModel)]=\"padronSelec.padronCodigo\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"padronSelec.padronCodigo && padronSelec.padronCodigo.length > 0\"\r\n                [items]=\"padrones.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['padronApelli', 'padronCodigo']\" \r\n                [onClickItem]=\"onClickPopupPadron\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('padronSelec')\">\r\n            </popup-lista>\r\n            \r\n\r\n        </div>\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"productoDesde\" class=\"min-width\">Prod. Desde:</label>\r\n                <input id=\"productoDesde\" \r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    (focus)=\"onFocusDesde()\"\r\n                    (blur)=\"onBlurDesde()\"\r\n                    name=\"productoDesde\"\r\n                    [(ngModel)]=\"productoDesde.codProducto\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"productoDesde.codProducto && productoDesde.codProducto.length > 0 && focusProductoDesde\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\" \r\n                [onClickItem]=\"onClickPopupProductoDesde\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoDesde')\">\r\n            </popup-lista>\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"productoHasta\" class=\"min-width\">Prod. Hasta:</label>\r\n                <input id=\"productoHasta\" \r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    (focus)=\"onFocusHasta()\"\r\n                    (blur)=\"onBlurHasta()\"\r\n                    name=\"productoHasta\"\r\n                    [(ngModel)]=\"productoHasta.codProducto\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"productoHasta.codProducto && productoHasta.codProducto.length > 0 && focusProductoHasta\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\" \r\n                [onClickItem]=\"onClickPopupProductoHasta\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoHasta')\">\r\n            </popup-lista>\r\n        </div>\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Depósito</label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"depositoSelec\" class=\"form-control select-input\" id=\"depositoSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.depositos)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let dep of depositos | async\" [ngValue]=\"dep\">\r\n                        {{dep.descripcion + ', ' + dep.codigoDep}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Estado: </label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"sisEstadoSelec\" class=\"form-control select-input\" id=\"sisEstadoSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.sisEstados)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let modulo of sisEstados | async\" [ngValue]=\"modulo\">\r\n                        {{modulo.descripcion}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Vendedor: </label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"vendedorSelec\" class=\"form-control select-input\" id=\"vendedorSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.vendedor)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let vend of vendedores | async\" [ngValue]=\"vend\">\r\n                        {{ vend.auxNombreCompleto }}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"input-row flex-end-row\"> -->\r\n        <div class=\"input-row\" style=\"justify-content: space-between; display: flex;\">\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Estado Afip: </label>\r\n                <select \r\n                    [compareWith]=\"utilsService.dropdownCompareWith\" \r\n                    [(ngModel)]=\"estadoAfip\" \r\n                    class=\"form-control select-input\"\r\n                    id=\"idEstadoAfip\">\r\n                    <option value=\"Todas\">\r\n                        Todas\r\n                    </option>\r\n                    <option value=\"Si\">\r\n                        Autorizadas\r\n                    </option>\r\n                    <option value=\"No\">\r\n                        No Autorizadas\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Tipo Operacion: </label>\r\n                <select \r\n                    [compareWith]=\"utilsService.dropdownCompareWith\" \r\n                    [(ngModel)]=\"sisTipoOpSelect\" \r\n                    class=\"form-control select-input\" \r\n                    id=\"tipoOpSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.sisTipoOperacion)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let sto of sisTipoOperaciones | async\" [ngValue]=\"sto\">\r\n                        {{ sto.descripcion }} [{{ sto.modulo.descripcion }}]\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"btn-container item-input\">\r\n                <button id=\"btnBuscar\"\r\n                        [disabled]=\"!fechasFiltro.desde ||\r\n                                    !fechasFiltro.desde.day ||\r\n                                    !fechasFiltro.hasta ||\r\n                                    !fechasFiltro.hasta.day ||\r\n                                    !sisModuloSelec || !sisModuloSelec.idSisModulos\r\n                                    || !tipoComprobanteSelec.descCorta\r\n                                    || !tipoComprobanteSelec2.descCorta\"\r\n                        (click)=\"onClickBuscar()\"\r\n                        class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                    Buscar\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</ba-card>\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n</div>\r\n\r\n<!-- <ngb-tabset *ngIf=\"(compEncabezados | async)?.length > 0\" class=\"col-sm-12 tabset-consulta\"> -->\r\n<ngb-tabset *ngIf=\"!isLoading && (compEncabezados | async)?.length > 0\" class=\"col-sm-12 tabset-consulta\">\r\n    <ngb-tab title=\"Comprobantes\">\r\n        <ng-template ngbTabContent>\r\n            <table style=\"table-layout: fixed; width: 100%;\" class=\"table table-striped table-consulta-comp\" [mfData]=\"compEncabezados | async\" #mf=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n                <thead>\r\n                    <tr>\r\n                        <td style=\"width:1.5%\"></td>\r\n                        <th style=\"width:4%\">Comp</th>\r\n                        <th class=\"text-right\">Numero</th>\r\n                        <th>Fecha Emi</th>\r\n                        <th class=\"text-right\" style=\"width:4%\">Cli/Pro</th>\r\n                        <th style=\"width:8%\">Nombre</th>\r\n                        <th class=\"text-right\">Cuit</th>\r\n                        <th class=\"text-right\">Dolar</th>\r\n                        <th style=\"width:3%\">Mon</th>\r\n                        <th style=\"width:3%\">Imp</th>\r\n                        <th>Modulo</th>\r\n                        <th class=\"text-right\">Neto</th>\r\n                        <th class=\"text-right\">Total</th>\r\n                        <th class=\"text-right\">Tipo Op</th>\r\n                        <th style=\"width:3%\" class=\"text-right\">Aut</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let compBusc of mf.data\">\r\n                        <tr class=\"comprobante-tr\">\r\n                            <td style=\"width:1.5%\" class=\"btn-toggle\" (click)=\"compBusc.showDetalles = !compBusc.showDetalles\">\r\n                                <i *ngIf=\"!compBusc.showDetalles\" class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                                <i *ngIf=\"compBusc.showDetalles\" class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\r\n                            </td>\r\n                            <td style=\"width:4%\">{{ compBusc.comprobante }}</td>\r\n                            <td class=\"text-right td-nowrap\">{{ formatNumero(compBusc.numero) }}</td>\r\n                            <td>{{ utilsService.formatearFecha('DD/MM/YYYY')(compBusc.fechaEmi) }}</td>\r\n                            <td class=\"text-right\" style=\"width:4%\">{{ compBusc.idPadron }}</td>\r\n                            <td style=\"width:8%\">{{ compBusc.nombre }}</td>\r\n                            <td class=\"text-right\">{{ compBusc.cuit }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(compBusc.cotDolar) }}</td>\r\n                            <td style=\"width:3%\">{{ compBusc.moneda }}</td>\r\n                            <td style=\"width:3%\">{{ compBusc.imputada }}</td>\r\n                            <td>{{ compBusc.modulo }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(compBusc.importeNeto) }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(compBusc.importeTotal) }}</td>\r\n                            <td class=\"text-right\">{{ compBusc.tipoOperacion }}</td>\r\n                            <td style=\"width:3%\" class=\"text-right\">{{ compBusc.autorizada }}</td>\r\n\r\n                            <td style=\"display: flex;\">\r\n                                <div (click)=\"comprobanteService.downloadComp(compBusc, null)\" class=\"btn-accion\">\r\n                                    <i *ngIf=\"!compBusc.isDownloading\" class=\"fa fa-print\" aria-hidden=\"true\"></i>\r\n                                    <i *ngIf=\"compBusc.isDownloading\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                                <div *ngIf=\"compBusc.idCteTipo == 75 && compBusc.tipoOperacion == 'Canje'\" (click)=\"comprobanteService.downloadComp(compBusc, 'contratoCanje')\" class=\"btn-accion\">\r\n                                    <i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>\r\n                                    <!--<i *ngIf=\"compBusc.isDownloading\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>-->\r\n                                </div>\r\n                                <div *ngIf=\"compBusc.idCteTipo == 75 && compBusc.tipoOperacion == 'Canje'\" (click)=\"comprobanteService.downloadComp(compBusc, 'documentoCanje')\" class=\"btn-accion\">\r\n                                    <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\r\n                                    <!--<i *ngIf=\"compBusc.isDownloading\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>-->\r\n                                </div>\r\n                                <div \r\n                                    *ngIf=\"compBusc && compBusc.autorizada === 'No'\"\r\n                                    (click)=\"autorizarComprobante(compBusc)\" \r\n                                    class=\"btn-accion\">\r\n                                    <i *ngIf=\"!compBusc.isBeingAuthorized\" class=\"fa fa-key\" aria-hidden=\"true\"></i>\r\n                                    <i *ngIf=\"compBusc.isBeingAuthorized\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                                <div\r\n                                    *ngIf=\"compBusc && compBusc.permiteBorrado === 'Si'\"\r\n                                    (click)=\"borrarComprobante(compBusc)\" \r\n                                    class=\"btn-accion\">\r\n                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                        \r\n                        <tr *ngIf=\"compBusc.showDetalles\" class=\"detalles-comp-tr\">\r\n                            <td colspan=\"1\">\r\n\r\n                            </td>\r\n                            <td class=\"detalles-titulo\" colspan=\"1\">\r\n                                <div class=\"detalles-titulo-text\">\r\n                                    Detalles\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"detalles-tabla-td\" colspan=\"14\">\r\n                                <!-- <table style=\"table-layout: fixed; width: 100%;\" class=\"table-inner\" style=\"width:100%; background: #d6d6d67a;\"> -->\r\n                                <table style=\"table-layout: fixed; width: 100%;\" class=\"table-inner\" style=\"width:100%; background: #174c6640;\">\r\n                                    <tr>\r\n                                        <th>Producto</th>\r\n                                        <th>Descripción</th>\r\n                                        <th class=\"text-right\">Cantidad</th>\r\n                                        <th class=\"text-right\">Pendiente</th>\r\n                                        <th class=\"text-right\">Precio</th>\r\n                                        <th class=\"text-right\">Importe</th>\r\n                                        <th class=\"text-right\">Precio Desc</th>\r\n                                        <th class=\"text-right\">Descuento</th>\r\n                                        <th class=\"text-right\">Unidad Desc</th>\r\n                                        <th class=\"text-right\">Deposito</th>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let compDet of compBusc.detalle\">\r\n                                        <td>{{ compDet.codProducto }}</td>\r\n                                        <td>{{ compDet.articulo }}</td>\r\n                                        <td class=\"text-right\">{{ utilsService.parseDecimal(compDet.original) }}</td>\r\n                                        <td class=\"text-right\">{{ utilsService.parseDecimal(compDet.pendiente) }}</td>\r\n                                        <td class=\"text-right\">{{ \r\n                                            utilsService.toThreeDecimals(compDet.precio)\r\n                                        }}</td>\r\n                                        <td class=\"text-right\">{{ utilsService.parseDecimal(\r\n                                            (compDet.importe)\r\n                                        ) }}</td>\r\n                                        <td class=\"text-right\">{{ \r\n                                            utilsService.toThreeDecimals(compDet.precioDesc) \r\n                                        }}</td>\r\n                                        <td class=\"text-right\">{{ compDet.descuento }}</td>\r\n                                        <td class=\"text-right\">{{ compDet.unidadDescuento }}</td>\r\n                                        <td class=\"text-right\">{{ compDet.deposito }}</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"compBusc.showDetalles && compBusc.idCteTipo === 70\" class=\"detalles-comp-tr\">\r\n                            <td colspan=\"1\">\r\n\r\n                            </td>\r\n                            <td class=\"detalles-titulo\" colspan=\"1\">\r\n                                <div class=\"detalles-titulo-text\">\r\n                                    Cond. de\r\n                                </div>\r\n                                <div class=\"detalles-titulo-text\">\r\n                                    Comer.\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"detalles-tabla-td\" colspan=\"14\">\r\n                                <!-- <table style=\"table-layout: fixed; width: 100%;\" class=\"table-inner\" style=\"width:100%; background: #d6d6d67a;\"> -->\r\n                                <table style=\"table-layout: fixed; width: 100%;\" class=\"table-inner\" style=\"width:100%; background: #174c6640;\">\r\n                                    <tr>\r\n                                        <th>Pesificado</th>\r\n                                        <th>Dolarizado al vto.</th>\r\n                                        <th class=\"text-right\">Interés Mensual de Compra</th>\r\n                                        <th>Canje Insumos</th>\r\n                                        <th>Tipo de cambio</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>{{ compBusc.pesificado ? 'SI' : 'NO' }}</td>\r\n                                        <td>{{ compBusc.dolarizadoAlVto ? 'SI' : 'NO' }}</td>\r\n                                        <td class=\"text-right\">{{ compBusc.interesMensualCompra }}%</td>\r\n                                        <td>{{ compBusc.canjeInsumos ? 'SI' : 'NO' }}</td>\r\n                                        <td>{{ compBusc.tipoCambio }}</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                    </ng-container>\r\n                            \r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"16\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n            <div class=\"total-container\"><span class=\"title-text\">Neto</span>: {{utilsService.parseDecimal(totalNetoComp)}} <span class=\"title-text total-span\">Total</span>: {{utilsService.parseDecimal(totalComp)}}</div>\r\n\r\n            <div class=\"btn-imprimir-container\">\r\n                <button style=\"margin: 0 19px;\" (click)=\"onClickReporte('cabecera')\" type=\"submit\" class=\"btn btn-secondary\">\r\n                    <i style=\"padding-right: 4px\" class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\r\n                    Reporte\r\n                </button>\r\n            </div>\r\n\r\n        </ng-template>\r\n    </ngb-tab>\r\n\r\n    <ngb-tab title=\"Detalles\">\r\n        <ng-template ngbTabContent>\r\n\r\n            <table style=\"table-layout: fixed; width: 100%;\" class=\"table table-striped\" [mfData]=\"compDetalles | async\" #mf=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Cte</th>\r\n                        <th>Número</th>\r\n                        <th>Fec. Cte.</th>\r\n                        <th>Producto</th>\r\n                        <th>Descripción</th>\r\n                        <th class=\"text-right\">Cantidad</th>\r\n                        <th class=\"text-right\">Pendiente</th>\r\n                        <th class=\"text-right\">Precio</th>\r\n                        <th class=\"text-right\">Importe</th>\r\n                        <th class=\"text-right\">Precio Desc</th>\r\n                        <th class=\"text-right\">Aplicación</th>\r\n                        <th class=\"text-right\">Unidad</th>\r\n                        <th class=\"text-right\">Depósito</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let compDet of mf.data\">\r\n                        <td>{{ compDet.comprobante }}</td>\r\n                        <td class=\"td-nowrap\">{{ formatNumero(compDet.numero) }}</td>\r\n                        <td>{{ utilsService.formatearFecha('DD/MM/YYYY')(compDet.fechaEmision) }}</td>\r\n                        <td>{{ compDet.codProducto }}</td>\r\n                        <td>{{ compDet.articulo }}</td>\r\n                        <td class=\"text-right\">{{ utilsService.parseDecimal(compDet.original) }}</td>\r\n                        <td class=\"text-right\">{{ utilsService.parseDecimal(compDet.pendiente) }}</td>\r\n                        <td class=\"text-right\">{{ utilsService.toThreeDecimals(compDet.precio) }}</td>\r\n                        <td class=\"text-right\">{{ utilsService.parseDecimal(\r\n                            (compDet.pendiente) * (compDet.precio)\r\n                        ) }}</td>\r\n                        <td class=\"text-right\">{{ utilsService.toThreeDecimals(\r\n                            (compDet.precioDesc)\r\n                        ) }}</td>\r\n                        <td class=\"text-right\">{{ compDet.descuento }}</td>\r\n                        <td class=\"text-right\">{{ compDet.unidadDescuento }}</td>\r\n                        <td class=\"text-right\">{{ compDet.deposito }}</td>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"12\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n\r\n            <div class=\"btn-imprimir-container\">\r\n                <button style=\"margin: 0 19px;\" (click)=\"onClickReporte('detalle')\" type=\"submit\" class=\"btn btn-secondary\">\r\n                    <i style=\"padding-right: 4px\" class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\r\n                    Reporte\r\n                </button>\r\n            </div>\r\n\r\n        </ng-template>\r\n    </ngb-tab>\r\n\r\n    <ngb-tab title=\"Resúmen\">\r\n        <ng-template ngbTabContent>\r\n        </ng-template>\r\n    </ngb-tab>\r\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaComprobanteAnticipado/consultaComprobanteAnticipado.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-comprobante > .card {\n  margin-bottom: 2px;\n  font-size: 11px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda {\n    font-size: 11px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 50%;\n    padding: 0 1%;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 2px;\n      margin-bottom: 10px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > input {\n          margin: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > label {\n          margin-bottom: 5px;\n          margin-top: 3px;\n          padding-right: 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .flex-end-row {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-title {\n      width: 20%;\n      font-weight: 350;\n      margin: 5px 0 2px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content {\n      width: 98.8%;\n      font-size: 11px;\n      border: solid 1px #c2c2c7;\n      border-radius: 7px;\n      margin: 0px 8px 14px 0px;\n      padding: 6px 5px 0px 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .item-input {\n        width: 50%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > label {\n          width: 7%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input {\n          width: 49px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input:last-child {\n          width: 152px;\n          margin-right: 0; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .flex-end-with-padding {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 1%; }\n\n:host /deep/ .tabset-consulta {\n  font-size: 11px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > td {\n    border: none;\n    padding: 10px 12px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > th {\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > .td-right {\n    text-align: right !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead tr th {\n    padding: 7px 10px;\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead td {\n    padding: 7px 5px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp .btn-accion {\n    cursor: pointer;\n    margin: 8px 6px 0; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-titulo {\n    font-size: 1.2rem;\n    font-size: 0.9rem;\n    font-weight: bold; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td {\n    padding: 0 !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td tr th {\n      font-size: 11px;\n      border: solid 0px;\n      font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle {\n    cursor: pointer; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle:hover {\n    background: #c7c7c7; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > td {\n    padding: 1px 12px; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > th {\n    padding: 4px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta .btn-imprimir-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin: 1% -0.8%; }\n\n.popup-spinner {\n  position: fixed;\n  z-index: 9999999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 151px;\n  padding: 5px 9px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: white;\n  border: solid 1px #e0e0e0;\n  border-radius: 6px 9px 0px 0px;\n  margin-top: 4px; }\n\n.width-5 {\n  width: 5%; }\n\n.table > thead > tr > th {\n  white-space: normal !important; }\n\n.spinner-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2rem;\n  margin: 14px 0;\n  background: #fafafa;\n  padding: 10px 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  color: #213742; }\n\n.total-container {\n  padding: 0.5rem; }\n\n.title-text {\n  font-weight: bold; }\n\n.total-span {\n  padding-left: 2rem; }\n\n.min-width {\n  min-width: 70px; }\n\n.longer-label {\n  width: 100px !important; }\n"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaComprobanteAnticipado/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/comprobantes/consultaComprobanteAnticipado/consultaComprobanteAnticipado.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaImputaciones/consultaImputaciones.component.ts":
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
var sisModulo_1 = __webpack_require__("./src/app/models/sisModulo.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var producto_1 = __webpack_require__("./src/app/models/producto.ts");
var sisEstado_1 = __webpack_require__("./src/app/models/sisEstado.ts");
var padron_1 = __webpack_require__("./src/app/models/padron.ts");
var deposito_1 = __webpack_require__("./src/app/models/deposito.ts");
var tipoComprobante_1 = __webpack_require__("./src/app/models/tipoComprobante.ts");
var comprobante_1 = __webpack_require__("./src/app/models/comprobante.ts");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var gruposParametros_1 = __webpack_require__("./src/constantes/gruposParametros.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var vendedor_1 = __webpack_require__("./src/app/models/vendedor.ts");
var ptoVenta_1 = __webpack_require__("./src/app/models/ptoVenta.ts");
var imputacionesService_1 = __webpack_require__("./src/app/services/imputacionesService.ts");
var sisTipoOperacion_1 = __webpack_require__("./src/app/models/sisTipoOperacion.ts");
var numerador_1 = __webpack_require__("./src/app/models/numerador.ts");
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
var ConsultaImputaciones = (function () {
    function ConsultaImputaciones(recursoService, utilsService, comprobanteService, popupListaService, imputacionesService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.comprobanteService = comprobanteService;
        this.popupListaService = popupListaService;
        this.imputacionesService = imputacionesService;
        this.resourcesREST = resoursesREST_1.resourcesREST;
        this.productos = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.padrones = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.padronEnfocadoIndex = -1;
        this.productoEnfocadoIndex = -1;
        this.idTipoFechaSeleccionada = 1;
        // Lo uso cuando busca específicamente por nro y pto venta
        this.comprobante = new comprobante_1.Comprobante();
        this.fechasFiltro = {
            desde: new dateLikePicker_1.DateLikePicker(),
            hasta: new dateLikePicker_1.DateLikePicker()
        };
        this.sisModuloSelec = new sisModulo_1.SisModulo();
        this.tipoComprobanteSelec = new tipoComprobante_1.TipoComprobante();
        this.productoSelec = new producto_1.Producto();
        this.sisEstadoSelec = new sisEstado_1.SisEstado();
        this.padronSelec = new padron_1.Padron();
        this.depositoSelec = new deposito_1.Deposito();
        this.vendedorSelec = new vendedor_1.Vendedor();
        this.sisTipoOpSelect = new sisTipoOperacion_1.SisTipoOperacion();
        this.compEncabezados = new rxjs_1.BehaviorSubject([]);
        this.compDetalles = new rxjs_1.BehaviorSubject([]);
        // Los comprobantes imputados (del comprobante seleccionado en ese momento)
        this.imputaciones = new rxjs_1.BehaviorSubject([]);
        this.isLoading = false;
        /**
         * Cuando se cambia un módulo se actualiza la lista de tiposComprobantes
         */
        this.onChangeSisModulo = function (moduloSelec) {
            return _this.tipoComprobantes = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                'sisModulo': moduloSelec.idSisModulos
            });
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
        /**
         * Evento blur de pto venta y numero en comprobante
         * tipo: puntoVenta o numero
         * keyTipoe: comprobante, comprobanteRelacionado
         */
        this.onBlurNumeroAutocomp = function (e) { return function (tipo) { return function (keyTipo) {
            return _this[keyTipo][tipo] = _this.utilsService.autocompNroComp(tipo)(_this[keyTipo]);
        }; }; };
        // Buscador cli/prov
        this.onChangeCliProv = function (busqueda) {
            _this.padronSelec = new padron_1.Padron();
            if (busqueda && busqueda.length >= 2) {
                _this.findPadrones(busqueda);
            }
            // Reseteo el indice
            _this.padronEnfocadoIndex = -1;
        };
        this.buscandoPadron = false;
        this.findPadrones = _.throttle(function (busqueda) {
            debugger;
            _this.buscandoPadron = true;
            _this.padrones.filtrados.next([]);
            _this.recursoService
                .getRecursoList(resoursesREST_1.resourcesREST.padron)({
                grupo: gruposParametros_1.default.proveedor,
                elementos: busqueda,
            })
                .subscribe(function (proveedores) {
                _this.padrones.filtrados.next(proveedores);
                _this.buscandoPadron = false;
            });
        }, 400);
        this.onClickPopupPadron = function (prove) { return _this.padronSelec = new padron_1.Padron(__assign({}, prove)); };
        this.keyPressInputTexto = function (e) { return function (upOrDown) {
            e.preventDefault();
            // Hace todo el laburo de la lista popup y retorna el nuevo indice seleccionado
            _this.padronEnfocadoIndex =
                _this.popupListaService.keyPressInputForPopup(upOrDown)(_this.padrones.filtrados.value)(_this.padronEnfocadoIndex);
        }; };
        this.onEnterInputProv = function (e) {
            e.preventDefault();
            _this.padrones.filtrados.subscribe(function (provsLista) {
                // Busco el producto
                var provSelect = provsLista && provsLista.length
                    ? provsLista[_this.padronEnfocadoIndex]
                    : null;
                // Lo selecciono
                provSelect ? _this.popupLista.onClickListProv(provSelect) : null;
                // Reseteo el index
                _this.padronEnfocadoIndex = -1;
            });
        };
        this.popupLista = {
            onClickListProv: function (prove) {
                _this.padronSelec = new padron_1.Padron(__assign({}, prove));
            },
            getOffsetOfInputProveedor: function () {
                return _this.utilsService.getOffset(document.getElementById("padronSelec"));
            },
        };
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
        /**
         * On click buscar
         */
        this.onClickBuscar = function () {
            _this.isLoading = true;
            // Limpio tablas
            _this.compEncabezados.next([]);
            _this.compDetalles.next([]);
            _this.imputaciones.next([]);
            // Si fechaDesde es 
            _this.comprobanteService.buscarComprobantes(_this.comprobante)(_this.fechasFiltro)(_this.idTipoFechaSeleccionada)(_this.sisModuloSelec)(_this.tipoComprobanteSelec)(_this.productoSelec)(_this.sisEstadoSelec)(_this.padronSelec)(_this.depositoSelec)(_this.vendedorSelec)(_this.sisTipoOpSelect)(null)(null)(null)
                .subscribe(function (encabezados) {
                // Actualizo encabezados
                _this.compEncabezados.next(encabezados);
                encabezados && encabezados.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron comprobantes con esas condiciones')()() : null;
                _this.isLoading = false;
            });
        };
        /**
         * Cuando se clickea un comprobante, se actualizan los detalles de abajo
         */
        this.actualizarImputaciones = function (compBusc) {
            _this.imputacionesService.getImputacionesByComp(compBusc)
                .subscribe(function (resp) { return _this.imputaciones.next(resp); });
        };
        /**
         * Actualiza:
         * - Detalles
         * - Imputaciones
         */
        this.onClickComprobante = function (compBusc) {
            _this.compSeleccionado = compBusc;
            _this.impuSeleccionado = null;
            _this.imputacionesService.getProductosPendientes(compBusc)
                .subscribe(function (detalles) { return _this.compDetalles.next(detalles); });
            _this.actualizarImputaciones(compBusc);
        };
        /**
         * Actualizar detalles de abajo
         */
        this.onClickImputacion = function (impu) {
            _this.impuSeleccionado = impu;
            _this.imputacionesService.getProductosPendientes(impu)
                .subscribe(function (detalles) { return _this.compDetalles.next(detalles); });
        };
        this.comprobante.numerador = new numerador_1.Numerador();
        this.comprobante.numerador.ptoVenta = new ptoVenta_1.PtoVenta(); // Es necesario
        this.sisModulos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisModulos)();
        this.sisEstados = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisEstados)();
        // this.productos = this.recursoService.getRecursoList(resourcesREST.productos)();
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)()
            .subscribe(function (productos) {
            _this.productos.todos = productos;
            _this.productos.filtrados.next([]);
        });
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.padron)({ grupo: gruposParametros_1.default.cliente })
            .subscribe(function (padrones) {
            _this.padrones.todos = padrones;
            // this.padrones.filtrados.next(padrones);
            _this.padrones.filtrados.next([]);
        });
        this.depositos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.depositos)();
        this.vendedores = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.vendedor)();
        this.sisTipoOperaciones = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisTipoOperacion)();
    }
    return ConsultaImputaciones;
}());
ConsultaImputaciones = __decorate([
    core_1.Component({
        selector: 'consulta-imputaciones',
        styles: [__webpack_require__("./src/app/pages/main/comprobantes/consultaImputaciones/consultaImputaciones.scss")],
        template: __webpack_require__("./src/app/pages/main/comprobantes/consultaImputaciones/consultaImputaciones.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object, typeof (_d = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _d || Object, typeof (_e = typeof imputacionesService_1.ImputacionesService !== "undefined" && imputacionesService_1.ImputacionesService) === "function" && _e || Object])
], ConsultaImputaciones);
exports.ConsultaImputaciones = ConsultaImputaciones;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=consultaImputaciones.component.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaImputaciones/consultaImputaciones.html":
/***/ (function(module, exports) {

module.exports = "<ba-card \r\n    class=\"consulta-imputaciones criterio-busqueda\"\r\n    toggleBtnExtra=\"true\"\r\n    cardTitle=\"Filtros\"\r\n    headerMin=\"true\"\r\n    >\r\n\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"data-comprobante-title\">\r\n            Comprobante\r\n        </div>\r\n        <div class=\"data-comprobante-content\">\r\n            <div class=\"input-row\">\r\n                <div class=\"item-input\">\r\n                    <label for=\"comprobante\">Módulo: </label>\r\n                    <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"sisModuloSelec\" (ngModelChange)=\"onChangeSisModulo($event)\"\r\n                        class=\"form-control select-input\" id=\"sisModuloSelec\">\r\n                        <option *ngFor=\"let modulo of sisModulos | async\" [ngValue]=\"modulo\">\r\n                            {{modulo.descripcion}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"item-input\">\r\n                    <label for=\"comprobante\">Tipo: </label>\r\n                    <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"tipoComprobanteSelec\" class=\"form-control select-input\"\r\n                        id=\"tipoComprobanteSelec\">\r\n                        <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.cteTipo)\">\r\n                            Todos\r\n                        </option>\r\n                        <option *ngFor=\"let tipo of tipoComprobantes | async\" [ngValue]=\"tipo\">\r\n                            {{tipo.descCorta}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"input-row\">\r\n                <div class=\"item-input nro-cte\">\r\n                    <label for=\"desde\">Nro: </label>\r\n                    <input maxlength=\"4\" (blur)=\"onBlurNumeroAutocomp($event)('puntoVenta')('comprobante')\" \r\n                        [(ngModel)]=\"comprobante.numerador.ptoVenta.ptoVenta\" type=\"text\" class=\"form-control text-right\" id=\"ptoVentaCte\" placeholder=\"\">\r\n                    <input maxlength=\"8\" (blur)=\"onBlurNumeroAutocomp($event)('numero')('comprobante')\" \r\n                        [(ngModel)]=\"comprobante.numerador.numerador\" type=\"text\" class=\"form-control text-right\" id=\"nroCte\" placeholder=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"desde\">Desde</label>\r\n                <div class=\"input-group date-picker-fecha\">\r\n                    <input (blur)=\"onCalculateFecha($event)('desde')\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\" [(ngModel)]=\"fechasFiltro.desde\"\r\n                        ngbDatepicker #dDesd=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dDesd.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"al\">al</label>\r\n\r\n                <div class=\"input-group date-picker-fecha\">\r\n                    <input (blur)=\"onCalculateFecha($event)('hasta')\" id=\"fechaHasta\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"dp\"\r\n                        [(ngModel)]=\"fechasFiltro.hasta\" ngbDatepicker #dHast=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\" (click)=\"dHast.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                            <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"input-row flex-end-row\">\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"productoSelec\">Producto</label>\r\n                <input id=\"productoSelec\" \r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    \r\n                    name=\"productoSelec\"\r\n                    [(ngModel)]=\"productoSelec.codProducto\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"productoSelec.codProducto && productoSelec.codProducto.length > 0\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\" \r\n                [onClickItem]=\"onClickPopupProducto\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoSelec')\">\r\n            </popup-lista>\r\n            \r\n            <div class=\"item-input\">\r\n               <!-- <label for=\"padronSelec\">Clie/Prov</label>\r\n                <input id=\"padronSelec\" \r\n                    (ngModelChange)=\"onChangeCliProv($event)\"\r\n                    \r\n                    name=\"padronSelec\"\r\n                    [(ngModel)]=\"padronSelec.padronCodigo\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n        -->\r\n\r\n        <label for=\"padronSelec\">Clie/Prov</label>\r\n               \r\n\r\n        <input  #inputProveedorDom\r\n        autocomplete=\"off\"\r\n        id=\"padronSelec\"\r\n        (ngModelChange)=\"onChangeCliProv($event)\"\r\n        [(ngModel)]=\"padronSelec.padronCodigo\"\r\n        name=\"padronSelec\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"\"\r\n        (keyup.enter)=\"onEnterInputProv($event)\"\r\n        (keydown.arrowdown)=\"keyPressInputTexto($event)('down')\"\r\n        (keydown.arrowup)=\"keyPressInputTexto($event)('up')\"\r\n        required\r\n        \r\n        >\r\n        <div \r\n            class=\"spinner-prov-container\"\r\n            *ngIf=\"\r\n                utilsService.ifFocused(inputProveedorDom) \r\n                &&\r\n                (\r\n                    !padronSelec ||\r\n                    !padronSelec.padronApelli\r\n                ) \r\n                &&\r\n                padronSelec && padronSelec.padronCodigo && padronSelec.padronCodigo.length > 0\r\n                &&\r\n                buscandoPadron\r\n            \">\r\n        <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n        <div >\r\n            <input autocomplete=\"off\"  [disabled]=\"true\" name=\"padronApellido\" [(ngModel)]=\"padronSelec.padronApelli\" type=\"text\" class=\"form-control\" id=\"nombreProveedor\" placeholder=\"\">\r\n        </div>\r\n    </div> \r\n\r\n            <popup-lista \r\n                *ngIf=\"padronSelec.padronCodigo && padronSelec.padronCodigo.length > 0\"\r\n                [items]=\"padrones.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['padronApelli', 'padronNombre', 'padronCodigo']\"\r\n                [onClickItem]=\"onClickPopupPadron\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('padronSelec')\">\r\n            </popup-lista>\r\n            \r\n\r\n        </div>\r\n        <div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Depósito</label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"depositoSelec\" class=\"form-control select-input\" id=\"depositoSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.depositos)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let dep of depositos | async\" [ngValue]=\"dep\">\r\n                        {{dep.descripcion + ', ' + dep.codigoDep}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Estado: </label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"sisEstadoSelec\" class=\"form-control select-input\" id=\"sisEstadoSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.sisEstados)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let modulo of sisEstados | async\" [ngValue]=\"modulo\">\r\n                        {{modulo.descripcion}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Vendedor: </label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"vendedorSelec\" class=\"form-control select-input\" id=\"vendedorSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.vendedor)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let vend of vendedores | async\" [ngValue]=\"vend\">\r\n                        {{ vend.auxNombreCompleto }}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"input-row flex-end-row\"> -->\r\n        <div class=\"input-row\" style=\"justify-content: space-between; display: flex;\">\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Tipo Operacion: </label>\r\n                <select \r\n                    [compareWith]=\"utilsService.dropdownCompareWith\" \r\n                    [(ngModel)]=\"sisTipoOpSelect\" \r\n                    class=\"form-control select-input\" \r\n                    id=\"tipoOpSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.sisTipoOperacion)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let sto of sisTipoOperaciones | async\" [ngValue]=\"sto\">\r\n                        {{ sto.descripcion }} [{{ sto.modulo.descripcion }}]\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n\r\n            <div class=\"btn-container item-input\">\r\n                <button id=\"btnBuscar\"\r\n                        [disabled]=\"!fechasFiltro.desde ||\r\n                                    !fechasFiltro.desde.day ||\r\n                                    !fechasFiltro.hasta ||\r\n                                    !fechasFiltro.hasta.day ||\r\n                                    !sisModuloSelec || !sisModuloSelec.idSisModulos\"\r\n                        (click)=\"onClickBuscar()\"\r\n                        class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                    Buscar\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</ba-card>\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n</div>\r\n\r\n<div class=\"impu-container\">\r\n\r\n    <div class=\"compro-impu-container\">\r\n\r\n        <ba-card class=\"comprobante-container\" toggleBtn=\"true\">\r\n            <div class=\"mini-title\">\r\n                Comprobantes\r\n            </div>\r\n\r\n            <table \r\n                class=\"table table-striped table-consulta-comp\" \r\n                [mfData]=\"compEncabezados | async\"\r\n                #mfEnca=\"mfDataTable\" \r\n                mfRowsOnPage=\"10\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Tipo</th>\r\n                        <th class=\"text-right\">Numero</th>\r\n                        <th class=\"text-right\">Fecha</th>\r\n                        <th class=\"text-left\">Clie/Prov</th>\r\n                        <th class=\"text-left\">Tipo Op</th>\r\n                        <th class=\"text-left\">Imp</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!-- En el ngClass con compSeleccionado.fechaEmision, si es FALSE siginfica que NO es una imputacion -->\r\n                    <tr \r\n                        *ngFor=\"let compBusc of mfEnca.data\" \r\n                        (click)=\"onClickComprobante(compBusc)\" \r\n                        class=\"comprobante-tr\"\r\n                        [ngClass]=\"{\r\n                            'comprobante-tr-select': compSeleccionado && compBusc && \r\n                                compSeleccionado.idFactCab === compBusc.idFactCab\r\n                        }\"\r\n                        >\r\n                        <td>{{ compBusc.comprobante }}</td>\r\n                        <td class=\"text-right td-nowrap\">{{ formatNumero(compBusc.numero) }}</td>\r\n                        <td class=\"text-right\">{{ utilsService.formatearFecha('DD/MM/YYYY')(compBusc.fechaEmi) }}</td>  \r\n                        <td class=\"text-left\">{{ compBusc.nombre }}</td>  \r\n                        <td class=\"text-left\">{{ compBusc.nombre }}</td>  \r\n                        <td class=\"text-left\">{{ compBusc.imputada }}</td>  \r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"12\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </ba-card>\r\n\r\n        <ba-card class=\"comprobante-container\" toggleBtn=\"true\">\r\n            <div class=\"mini-title\">\r\n                Imputaciones\r\n            </div>\r\n            <table \r\n                class=\"table table-striped table-consulta-comp\" \r\n                [mfData]=\"imputaciones | async\" \r\n                #mfImpu=\"mfDataTable\" \r\n                mfRowsOnPage=\"10\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Tipo</th>\r\n                        <th class=\"text-right\">Numero</th>\r\n                        <th class=\"text-right\">Fecha</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let impu of mfImpu.data\">\r\n                        <!-- En el ngClass con compSeleccionado.fechaEmision, si es true siginfica que es una imputacion -->\r\n                        <!-- [ngClass]=\"{\r\n                            'comprobante-tr-select': compSeleccionado && impu && \r\n                                compSeleccionado.idFactCab === impu.idFactCab &&\r\n                                compSeleccionado.fechaEmision\r\n                        }\" -->\r\n                        <tr \r\n                            class=\"comprobante-tr\" \r\n                            (click)=\"onClickImputacion(impu)\"\r\n                            [ngClass]=\"{\r\n                                'imputacion-tr-select': impuSeleccionado && impu && \r\n                                    impuSeleccionado.idFactCab === impu.idFactCab\r\n                            }\"\r\n                            >\r\n                            <td>{{ impu.descCorta }}</td>\r\n                            <td class=\"text-right td-nowrap\">{{ formatNumero(impu.numero) }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.formatearFecha('DD/MM/YYYY')(impu.fechaEmision) }}</td>                        \r\n                        </tr>\r\n                    </ng-container>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"12\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </ba-card>\r\n\r\n\r\n    </div>\r\n\r\n    \r\n    <ba-card class=\"productos-container\" toggleBtn=\"true\">\r\n        <table class=\"table table-striped\" [mfData]=\"compDetalles | async\" #mfDet=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Cte</th>\r\n                    <th>Número</th>\r\n                    <th>Fec. Cte.</th>\r\n                    <th>Producto</th>\r\n                    <th>Descripción</th>\r\n                    <th class=\"text-right\">Cantidad</th>\r\n                    <th class=\"text-right\">Pendiente</th>\r\n                    <th class=\"text-right\">Precio</th>\r\n                    <th class=\"text-right\">Neto</th>\r\n                    <th class=\"text-right\">Depósito</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let compDet of mfDet.data\">\r\n                    <td>{{ compDet.comprobante }}</td>\r\n                    <td class=\"td-nowrap\">{{ formatNumero(compDet.numero) }}</td>\r\n                    <td>{{ utilsService.formatearFecha('DD/MM/YYYY')(compDet.fechaEmision) }}</td>\r\n                    <td class=\"text-right\">{{ compDet.producto.codProducto }}</td>\r\n                    <td>{{ compDet.producto.descripcion }}</td>\r\n                    <td class=\"text-right\">{{ utilsService.parseDecimal(compDet.original) }}</td>\r\n                    <td class=\"text-right\">{{ utilsService.parseDecimal(compDet.pendiente) }}</td>\r\n                    <td class=\"text-right\">{{ utilsService.toThreeDecimals(compDet.precio) }}</td>\r\n                    <td class=\"text-right\">{{ utilsService.parseDecimal(compDet.importe) }}</td>\r\n                    <td class=\"text-right\">{{ compDet.deposito }}</td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n                <tr>\r\n                    <td colspan=\"12\">\r\n                        <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n            </tfoot>\r\n        </table>\r\n    </ba-card>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaImputaciones/consultaImputaciones.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-imputaciones > .card {\n  margin-bottom: 2px;\n  font-size: 10px; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda {\n    font-size: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 50%;\n    padding: 0 1%;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .input-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 2px;\n      margin-bottom: 10px; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .input-row > .item-input {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0 5px; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .input-row > .item-input > input {\n          margin: 0 5px; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .input-row > .item-input > label {\n          margin-bottom: 5px;\n          margin-top: 3px;\n          white-space: nowrap;\n          padding-right: 5px; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .flex-end-row {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .data-comprobante-title {\n      width: 20%;\n      font-weight: 350;\n      margin: 5px 0 2px; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .data-comprobante-content {\n      width: 98.8%;\n      border: solid 1px #c2c2c7;\n      border-radius: 7px;\n      margin: 0px 8px 14px 0px;\n      padding: 6px 5px 0px 5px; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .item-input {\n        width: 50%; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > label {\n          width: 7%; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input {\n          width: 49px; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input:last-child {\n          width: 152px;\n          margin-right: 0; }\n\n:host /deep/ .consulta-imputaciones > .card > .card-body .flex-end-with-padding {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 1%; }\n\n.impu-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.impu-container .compro-impu-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin-top: 1%; }\n\n.impu-container .compro-impu-container ba-card {\n      width: 48%; }\n\n.impu-container .compro-impu-container .comprobante-tr {\n      cursor: pointer; }\n\n.impu-container .compro-impu-container .comprobante-tr:hover {\n      background: #c5c5c5; }\n\n.impu-container .compro-impu-container .comprobante-tr-select {\n      background: #174c6657; }\n\n.impu-container .compro-impu-container .imputacion-tr-select {\n      background: #17662b57; }\n\n.impu-container .mini-title {\n    margin-bottom: 0.8rem;\n    /* padding: 1px 14px; */\n    font-size: 0.9rem;\n    text-align: center; }\n\n.popup-spinner {\n  position: fixed;\n  z-index: 9999999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 151px;\n  padding: 5px 9px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: white;\n  border: solid 1px #e0e0e0;\n  border-radius: 6px 9px 0px 0px;\n  margin-top: 4px; }\n\ntable tbody > tr > td {\n  padding: 0 13px !important; }\n\n.spinner-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2rem;\n  margin: 14px 0;\n  background: #fafafa;\n  padding: 10px 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  color: #213742; }\n"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaImputaciones/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/comprobantes/consultaImputaciones/consultaImputaciones.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaLibrosIva/consultaLibrosIva.component.ts":
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
var resoursesREST_1 = __webpack_require__("./src/constantes/resoursesREST.ts");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var ConsultaLibrosIva = (function () {
    function ConsultaLibrosIva(recursoService, utilsService, comprobanteService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.comprobanteService = comprobanteService;
        this.fecDesde = new dateLikePicker_1.DateLikePicker();
        this.fecHasta = new dateLikePicker_1.DateLikePicker();
        this.onImprimir = function () {
            _this.comprobanteService.imprimirLibrosIva(_this.sisModulo, _this.fecDesde, _this.fecHasta)
                .subscribe(function (resp) {
                if (resp) {
                    _this.utilsService.downloadBlob(resp['_body'], 'libros-iva');
                }
            });
        };
        this.sisModulos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisModulos)();
    }
    return ConsultaLibrosIva;
}());
ConsultaLibrosIva = __decorate([
    core_1.Component({
        selector: 'consulta-libros-iva',
        styles: [__webpack_require__("./src/app/pages/main/comprobantes/consultaLibrosIva/consultaLibrosIva.scss")],
        template: __webpack_require__("./src/app/pages/main/comprobantes/consultaLibrosIva/consultaLibrosIva.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object])
], ConsultaLibrosIva);
exports.ConsultaLibrosIva = ConsultaLibrosIva;
var _a, _b, _c;
//# sourceMappingURL=consultaLibrosIva.component.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaLibrosIva/consultaLibrosIva.html":
/***/ (function(module, exports) {

module.exports = "<ba-card class=\"consulta-libros-iva\" toggleBtn=\"true\" cardTitle=\"Libros Iva\" headerMin=\"true\">\r\n\r\n    <div class=\"filtros-container\">\r\n        <div class=\"form-group item\">\r\n            <label for=\"idLibro\">Modulo</label>\r\n            <select required name=\"libr\" [(ngModel)]=\"sisModulo\" class=\"form-control\" id=\"idLibro\">\r\n                <option *ngFor=\"let sm of sisModulos | async\" [ngValue]=\"sm\">\r\n                    {{ sm.descripcion }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group item\">\r\n            <label for=\"idFecDesde\">Fecha Desde:</label>\r\n            <div class=\"input-group\">\r\n                <input required id=\"idFecDesde\" name=\"fecDesdeName\" class=\"form-control\" placeholder=\"dd/mm/yyyy\"\r\n                    (blur)=\"fecDesde = utilsService.stringToDateLikePicker(fecDesde)\"\r\n                    [(ngModel)]=\"fecDesde\" ngbDatepicker #dDesde=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"dDesde.toggle()\" type=\"button\"\r\n                        style=\"height: 100%;\">\r\n                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group item\">\r\n            <label for=\"idFecHasta\">Fecha Hasta:</label>\r\n            <div class=\"input-group\">\r\n                <input required id=\"idFecHasta\" name=\"fecHastaName\" class=\"form-control\" placeholder=\"dd/mm/yyyy\"\r\n                    (blur)=\"fecHasta = utilsService.stringToDateLikePicker(fecHasta)\"\r\n                    [(ngModel)]=\"fecHasta\" ngbDatepicker #dHasta=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"dHasta.toggle()\" type=\"button\"\r\n                        style=\"height: 100%;\">\r\n                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"btn-container\">\r\n            <button (click)=\"onImprimir()\" type=\"submit\" class=\"btn btn-primary\" id=\"idBtnBuscar\">Imprimir</button>\r\n        </div>\r\n    </div>\r\n\r\n</ba-card>"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaLibrosIva/consultaLibrosIva.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-libros-iva > .card {\n  margin-bottom: 2px; }\n\n:host /deep/ .consulta-libros-iva > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ .consulta-libros-iva > .card > .card-body .flex-end-with-padding {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 1%; }\n\n:host /deep/ .consulta-libros-iva > .card > .card-body .filtros-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n:host /deep/ .consulta-libros-iva > .card > .card-body .filtros-container .btn-container {\n      margin-left: 19px;\n      margin-top: 15px; }\n"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/consultaLibrosIva/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/comprobantes/consultaLibrosIva/consultaLibrosIva.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/imputaciones/imputaciones.component.ts":
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
var sisModulo_1 = __webpack_require__("./src/app/models/sisModulo.ts");
var utilsService_1 = __webpack_require__("./src/app/services/utilsService.ts");
var comprobanteService_1 = __webpack_require__("./src/app/services/comprobanteService.ts");
var producto_1 = __webpack_require__("./src/app/models/producto.ts");
var sisEstado_1 = __webpack_require__("./src/app/models/sisEstado.ts");
var padron_1 = __webpack_require__("./src/app/models/padron.ts");
var deposito_1 = __webpack_require__("./src/app/models/deposito.ts");
var tipoComprobante_1 = __webpack_require__("./src/app/models/tipoComprobante.ts");
var comprobante_1 = __webpack_require__("./src/app/models/comprobante.ts");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var comprobanteEncabezado_1 = __webpack_require__("./src/app/models/comprobanteEncabezado.ts");
var imputacionesService_1 = __webpack_require__("./src/app/services/imputacionesService.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var gruposParametros_1 = __webpack_require__("./src/constantes/gruposParametros.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var vendedor_1 = __webpack_require__("./src/app/models/vendedor.ts");
var ptoVenta_1 = __webpack_require__("./src/app/models/ptoVenta.ts");
var sisTipoOperacion_1 = __webpack_require__("./src/app/models/sisTipoOperacion.ts");
var numerador_1 = __webpack_require__("./src/app/models/numerador.ts");
var productoPendiente_1 = __webpack_require__("./src/app/models/productoPendiente.ts");
var ModificaImputaciones = (function () {
    function ModificaImputaciones(recursoService, utilsService, comprobanteService, popupListaService, imputacionesService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.comprobanteService = comprobanteService;
        this.popupListaService = popupListaService;
        this.imputacionesService = imputacionesService;
        this.resourcesREST = resoursesREST_1.resourcesREST;
        this.productos = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.padrones = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.padronEnfocadoIndex = -1;
        this.productoEnfocadoIndex = -1;
        // Lo uso cuando busca específicamente por nro y pto venta
        this.comprobante = new comprobante_1.Comprobante();
        this.fechasFiltro = {
            desde: new dateLikePicker_1.DateLikePicker(),
            hasta: new dateLikePicker_1.DateLikePicker()
        };
        this.sisModuloSelec = new sisModulo_1.SisModulo();
        this.tipoComprobanteSelecImputador = new tipoComprobante_1.TipoComprobante();
        this.tipoComprobanteSelecImputado = new tipoComprobante_1.TipoComprobante();
        this.ptoVentaSelecImputado = null;
        this.nroSelecImputado = null;
        this.ptoVentaSelecImputador = null;
        this.nroSelecImputador = null;
        this.productoHasta = new producto_1.Producto();
        this.focusProductoHasta = false;
        this.productoSelec = new producto_1.Producto();
        this.sisEstadoSelec = new sisEstado_1.SisEstado();
        this.padronSelec = new padron_1.Padron();
        this.depositoSelec = new deposito_1.Deposito();
        this.vendedorSelec = new vendedor_1.Vendedor();
        this.sisTipoOpSelect = new sisTipoOperacion_1.SisTipoOperacion();
        this.compEncabezados = new rxjs_1.BehaviorSubject([]);
        this.compDetalles = new rxjs_1.BehaviorSubject([]);
        this.enableEdit = false;
        this.enableEditIndex = null;
        this.imputadores = new rxjs_1.BehaviorSubject([]);
        this.imputados = new rxjs_1.BehaviorSubject([]);
        this.imputador = new productoPendiente_1.ProductoPendiente();
        this.imputado = new productoPendiente_1.ProductoPendiente();
        this.estadoAfip = 'Todas';
        this.isLoading = false;
        this.isLoadingImputadores = false;
        this.isLoadingImputados = false;
        /**
         * Cuando se cambia un módulo se actualiza la lista de tiposComprobantes
         */
        this.onChangeSisModulo = function (moduloSelec) {
            _this.tipoComprobantes = _this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.cteTipo)({
                'sisModulo': moduloSelec.idSisModulos
            });
            // this.sisTipoOperaciones
        };
        /**
         * On click buscar
         */
        this.onClickBuscar = function () {
            _this.isLoading = true;
            _this.isLoadingImputadores = true;
            _this.isLoadingImputados = true;
            _this.imputado = new productoPendiente_1.ProductoPendiente();
            _this.imputador = new productoPendiente_1.ProductoPendiente();
            // Busco los encabezados
            // Me suscribo a los cambios de los encabezados y en cada actualizacion de estos, actualizo también todos los detalles
            // Aprovecho a fijarme si la cantidad es 0. En ese caso, muestro mensaje
            //console.log(this.comprobante, this.fechasFiltro, this.sisModuloSelec, this.tipoComprobanteSelec, this.productoSelec, this.sisEstadoSelec, this.padronSelec, this.depositoSelec, this.vendedorSelec, this.sisTipoOpSelect, this.estadoAfip);
            var compEncImputador = new comprobanteEncabezado_1.ComprobanteEncabezado({ idFactCab: 0, numero: _this.ptoVentaSelecImputado && _this.nroSelecImputado ? Number(_this.ptoVentaSelecImputado + _this.nroSelecImputado) : 0, idPadron: _this.padronSelec.padronCodigo ? _this.padronSelec.padronCodigo : 0, nombre: null, cuit: null, cotDolar: 0, modulo: _this.sisModuloSelec.descripcion, comprobante: "RE", moneda: null, imputada: null, fechaEmi: null, fechaVence: null, fechaConta: null, detalle: [], idCteTipo: _this.tipoComprobanteSelecImputador.idCteTipo, importeNeto: 0, importeTotal: 0, autorizada: null, tipoOperacion: _this.sisTipoOpSelect.descripcion, permiteBorrado: false, pesificado: false, dolarizadoAlVto: false, interesMensualCompra: 0.00, canjeInsumos: false, tipoCambio: 'divisa', master: null });
            var compEncImputado = new comprobanteEncabezado_1.ComprobanteEncabezado({ idFactCab: 0, numero: _this.ptoVentaSelecImputador + _this.nroSelecImputador ? Number(_this.ptoVentaSelecImputador + _this.nroSelecImputador) : 0, idPadron: _this.padronSelec.padronCodigo ? _this.padronSelec.padronCodigo : 0, nombre: null, cuit: null, cotDolar: 0, modulo: _this.sisModuloSelec.descripcion, comprobante: "FV", moneda: null, imputada: null, fechaEmi: null, fechaVence: null, fechaConta: null, detalle: [], idCteTipo: _this.tipoComprobanteSelecImputado.idCteTipo, importeNeto: 0, importeTotal: 0, autorizada: null, tipoOperacion: _this.sisTipoOpSelect.descripcion, permiteBorrado: false, pesificado: false, dolarizadoAlVto: false, interesMensualCompra: 0.00, canjeInsumos: false, tipoCambio: 'divisa', master: null });
            /*this.comprobanteService.buscarComprobantes(this.comprobante)(this.fechasFiltro)(this.sisModuloSelec)(this.tipoComprobanteSelecImputador)(this.productoSelec)(this.sisEstadoSelec)(this.padronSelec)(this.depositoSelec)(this.vendedorSelec)(this.sisTipoOpSelect)(this.estadoAfip)
                
                .subscribe(encabezados => {
                    // Actualizo encabezados
                    this.compEncabezados.next(encabezados);
    
                    encabezados && encabezados.length === 0 ?
                        this.utilsService.showModal('Aviso')('No se encontraron comprobantes con esas condiciones')()() : null;
    
                    // Actualizo detalles
                    this.compDetalles.next(
                        this.utilsService.flatMap(
                            (encabezado: ComprobanteEncabezado) => encabezado.detalle,
                            encabezados
                        )
                    );
                    
    
    
                })*/
            _this.imputacionesService.getProductosPendientesProd(compEncImputador, _this.productoSelec.codProducto).subscribe(function (datos) {
                _this.imputadores.next(datos);
                datos && datos.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron comprobantes imputadores con esas condiciones')()() : null;
                _this.isLoadingImputadores = false;
            });
            _this.imputacionesService.getProductosPendientesProd(compEncImputado, _this.productoSelec.codProducto).subscribe(function (datos) {
                _this.imputados.next(datos);
                datos && datos.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron comprobantes para imputar con esas condiciones')()() : null;
                _this.isLoadingImputados = false;
            });
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
        this.onClickPopupProductoHasta = function (prod) {
            return _this.productoHasta = new producto_1.Producto(__assign({}, prod));
        };
        this.onBlurPtoVentaImputado = function (e) { return _this.ptoVentaSelecImputado ?
            _this.ptoVentaSelecImputado = _this.ptoVentaSelecImputado.padStart(4, '0') : null; };
        this.onBlurPtoVentaImputador = function (e) { return _this.ptoVentaSelecImputador ?
            _this.ptoVentaSelecImputador = _this.ptoVentaSelecImputador.padStart(4, '0') : null; };
        this.onBlurNumeradorImputado = function (e) { return _this.nroSelecImputado ?
            _this.nroSelecImputado = _this.nroSelecImputado.padStart(8, '0') : null; };
        this.onBlurNumeradorImputador = function (e) { return _this.nroSelecImputador ?
            _this.nroSelecImputador = _this.nroSelecImputador.padStart(8, '0') : null; };
        /**
         * On click buscar
         */
        /*onClickReporte = (tipo) => {
            this.comprobanteService.generarReportes(tipo)(this.comprobante)(this.fechasFiltro)(this.sisModuloSelec)(this.tipoComprobanteSelec)(this.productoSelec)(this.sisEstadoSelec)(this.padronSelec)(this.depositoSelec)(this.vendedorSelec)(this.sisTipoOpSelect)(this.estadoAfip)
                .subscribe(resp => {
                    if (resp) {
                        this.utilsService.downloadBlob(resp['_body'], tipo);
                    }
                })
    
        }*/
        // Buscador cli/prov
        this.onChangeCliProv = function (busqueda) {
            if (busqueda && busqueda.length === 0) {
                _this.padrones.filtrados.next([]);
            }
            else {
                _this.padrones.filtrados.next(_this.comprobanteService.filtrarPadrones(_this.padrones.todos, busqueda));
            }
            _this.padronEnfocadoIndex = -1;
        };
        this.onClickPopupPadron = function (prove) { return _this.padronSelec = new padron_1.Padron(__assign({}, prove)); };
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
        this.autorizarComprobante = function (compBusc) {
            // Activo spinner
            compBusc.isBeingAuthorized = true;
            _this.comprobanteService.autorizarAfip(compBusc.idFactCab)
                .subscribe(function (respAfip) {
                compBusc.isBeingAuthorized = false;
                _this.utilsService.showImprimirModal('OK')(respAfip.control.descripcion + ". \n                    CAI: " + respAfip.datos.cai)(function () { return _this.recursoService.downloadComp(compBusc); })(compBusc);
                _this.onClickBuscar();
            });
        };
        /**
         * Onclick borrar comprobante
         */
        this.borrarComprobante = function (comp) {
            _this.utilsService.showModal('Borrar comprobante')('¿Estás seguro de borrarlo?')(function () {
                _this.comprobanteService.borrarComprobante(comp).subscribe(function (resp) {
                    var theBody = _this.utilsService.parseBody(resp);
                    _this.utilsService.showModal(theBody.control.codigo)(theBody.control.descripcion)(function () {
                        // Actualizo grilla
                        _this.onClickBuscar();
                    })();
                });
            })({
                tipoModal: 'confirmation'
            });
        };
        // Es necesario
        this.comprobante.numerador = new numerador_1.Numerador();
        this.comprobante.numerador.ptoVenta = new ptoVenta_1.PtoVenta();
        this.sisModulos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisModulos)();
        this.sisEstados = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisEstados)();
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.productos)()
            .subscribe(function (productos) {
            _this.productos.todos = productos;
            _this.productos.filtrados.next([]);
        });
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.padron)({ grupo: gruposParametros_1.default.cliente })
            .subscribe(function (padrones) {
            _this.padrones.todos = padrones;
            // this.padrones.filtrados.next(padrones);
            _this.padrones.filtrados.next([]);
        });
        this.depositos = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.depositos)();
        this.vendedores = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.vendedor)();
        this.sisTipoOperaciones = this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.sisTipoOperacion)();
    }
    ModificaImputaciones.prototype.onFocusHasta = function () {
        this.focusProductoHasta = true;
    };
    ModificaImputaciones.prototype.onBlurHasta = function () {
        this.focusProductoHasta = false;
    };
    ModificaImputaciones.prototype.enableEditMethod = function (e, i, idFactDetalle) {
        setTimeout(function () {
            // Esto nos asegura que el elemento a focusear ya existe
            document.getElementById("focus").focus();
        }, 0);
        var indexModificar = this.imputadores.value.findIndex(function (element) { return element.idFactDetalle === idFactDetalle; });
        this.pendienteEditor = this.imputadores.value[indexModificar].pendiente.toString();
        this.enableEdit = true;
        this.enableEditIndex = i;
        console.log(i, e);
    };
    ModificaImputaciones.prototype.cancel = function () {
        console.log('cancel');
        this.enableEditIndex = null;
    };
    ModificaImputaciones.prototype.saveSegment = function (i, idFactDetalle) {
        var indexModificar = this.imputadores.value.findIndex(function (element) { return element.idFactDetalle === idFactDetalle; });
        this.imputadores.value[indexModificar].pendiente = Number(this.pendienteEditor);
        this.pendienteEditor = null;
        this.cantidadImputada = this.imputadores.value[i].pendiente;
        this.enableEditIndex = null;
    };
    ModificaImputaciones.prototype.setImputador = function (i, idFactDetalle) {
        var indexModificar = this.imputadores.value.findIndex(function (element) { return element.idFactDetalle === idFactDetalle; });
        if (this.imputado) {
            if (this.imputadores.value[indexModificar].idFactDetalle != this.imputado.idFactDetalle
                && this.imputadores.value[indexModificar].comprobante != this.imputado.comprobante)
                this.imputador = this.imputadores.value[indexModificar];
            this.cantidadImputada = this.imputadores.value[indexModificar].pendiente;
        }
        else {
            this.imputador = this.imputadores.value[indexModificar];
            this.cantidadImputada = this.imputadores.value[indexModificar].pendiente;
        }
    };
    ModificaImputaciones.prototype.setImputado = function (i, idFactDetalle) {
        var indexModificar = this.imputados.value.findIndex(function (element) { return element.idFactDetalle === idFactDetalle; });
        if (this.imputador) {
            if (this.imputados.value[indexModificar].idFactDetalle != this.imputador.idFactDetalle
                && this.imputados.value[indexModificar].comprobante != this.imputador.comprobante)
                this.imputado = this.imputados.value[indexModificar];
        }
        else {
            this.imputado = this.imputados.value[indexModificar];
        }
    };
    ModificaImputaciones.prototype.onClickCancelar = function () {
        this.fullClear();
    };
    ModificaImputaciones.prototype.fullClear = function () {
        this.imputador = new productoPendiente_1.ProductoPendiente();
        this.imputado = new productoPendiente_1.ProductoPendiente();
    };
    ModificaImputaciones.prototype.isDisabledConfirm = function () {
        var isSameType = (!(this.imputado && this.imputador && this.cantidadImputada) || this.imputado.comprobante == this.imputador.comprobante);
        var isDifferentProduct = (!(this.imputado && this.imputador && this.cantidadImputada) || this.imputado.producto.codProducto != this.imputador.producto.codProducto);
        var cantidadSupera = (!(this.imputado && this.imputador && this.cantidadImputada) || Math.abs(this.cantidadImputada) > this.imputado.pendiente);
        //console.log(this.cantidadImputada, this.imputado.pendiente, Math.abs(this.cantidadImputada) > this.imputado.pendiente);
        //console.log(isSameType, isDifferentProduct, cantidadSupera);
        return isSameType || isDifferentProduct || cantidadSupera;
    };
    ModificaImputaciones.prototype.onClickConfirmar = function () {
        var _this = this;
        if (this.imputado && this.imputador && this.cantidadImputada) {
            this.imputacionesService.setImputaciones(this.imputador.idFactDetalle, this.imputado.idFactDetalle, this.cantidadImputada).subscribe(function (data) {
                if (data.control.codigo == 'OK') {
                    _this.utilsService.showModal('Éxito')('La imputación se grabó correctamente')()();
                }
                else {
                    _this.utilsService.showModal('Aviso')('No se pudo grabar la imputación')()();
                }
            });
            this.fullClear();
        }
    };
    return ModificaImputaciones;
}());
ModificaImputaciones = __decorate([
    core_1.Component({
        selector: 'modimputaciones',
        styles: [__webpack_require__("./src/app/pages/main/comprobantes/imputaciones/imputaciones.scss")],
        template: __webpack_require__("./src/app/pages/main/comprobantes/imputaciones/imputaciones.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object, typeof (_d = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _d || Object, typeof (_e = typeof imputacionesService_1.ImputacionesService !== "undefined" && imputacionesService_1.ImputacionesService) === "function" && _e || Object])
], ModificaImputaciones);
exports.ModificaImputaciones = ModificaImputaciones;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=imputaciones.component.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/imputaciones/imputaciones.html":
/***/ (function(module, exports) {

module.exports = "<ba-card \r\n    class=\"consulta-comprobante criterio-busqueda\" \r\n    toggleBtn=\"true\"\r\n    cardTitle=\"Filtros\"\r\n    headerMin=\"true\"\r\n    >\r\n\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"data-comprobante-title\">\r\n            Comprobante\r\n        </div>\r\n        <div class=\"data-comprobante-content\">\r\n            <div class=\"input-row\">\r\n                <div class=\"item-input\">\r\n                    <label for=\"comprobante\">Módulo: </label>\r\n                    <select \r\n                        [compareWith]=\"utilsService.dropdownCompareWith\" \r\n                        [(ngModel)]=\"sisModuloSelec\" \r\n                        (ngModelChange)=\"onChangeSisModulo($event)\"\r\n                        class=\"form-control select-input\" id=\"sisModuloSelec\">\r\n                        <option *ngFor=\"let modulo of sisModulos | async\" [ngValue]=\"modulo\">\r\n                            {{modulo.descripcion}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"input-row\">\r\n                <div class=\"item-input nro-cte\">\r\n                    <label for=\"nroImputado\">Nro Imputado: </label>\r\n                    <input \r\n                        maxlength=\"4\" \r\n                        (blur)=\"onBlurPtoVentaImputado($event)\" \r\n                        [(ngModel)]=\"ptoVentaSelecImputado\" type=\"text\" class=\"form-control text-right\" id=\"ptoVentaImputado\" placeholder=\"\">\r\n                    <input \r\n                        maxlength=\"8\" \r\n                        (blur)=\"onBlurNumeradorImputado($event)\" \r\n                        [(ngModel)]=\"nroSelecImputado\" type=\"text\" class=\"form-control text-right\" id=\"nroImputado\" placeholder=\"\">\r\n                </div>\r\n                <div class=\"item-input nro-cte\">\r\n                    <label for=\"nroImputador\">Nro Imputador: </label>\r\n                    <input \r\n                        maxlength=\"4\" \r\n                        (blur)=\"onBlurPtoVentaImputador($event)\" \r\n                        [(ngModel)]=\"ptoVentaSelecImputador\" type=\"text\" class=\"form-control text-right\" id=\"ptoVentaImputador\" placeholder=\"\">\r\n                    <input \r\n                        maxlength=\"8\" \r\n                        (blur)=\"onBlurNumeradorImputador($event)\" \r\n                        [(ngModel)]=\"nroSelecImputador\" type=\"text\" class=\"form-control text-right\" id=\"nroImputador\" placeholder=\"\">\r\n                </div>\r\n            </div>\r\n            <div class=\"input-row\">\r\n                    <div class=\"tipos-comp item-input\">\r\n                            <label class=\"label-tipo\" for=\"tipoImputador\">Tipo Imputado: </label>\r\n                                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"tipoComprobanteSelecImputador\" class=\"form-control select-input\"\r\n                                    id=\"tipoComprobanteSelec\">\r\n                                    <option *ngFor=\"let tipo of tipoComprobantes | async\" [ngValue]=\"tipo\">\r\n                                        {{tipo.descCorta}}\r\n                                    </option>\r\n                                </select>\r\n                        </div>\r\n                <div class=\"tipos-comp item-input\">\r\n                    <label class=\"label-tipo\" for=\"tipoImputado\">Tipo Imputador: </label>\r\n                        <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"tipoComprobanteSelecImputado\" class=\"form-control select-input\"\r\n                            id=\"tipoComprobanteSelec\">\r\n                            <option *ngFor=\"let tipo of tipoComprobantes | async\" [ngValue]=\"tipo\">\r\n                                {{tipo.descCorta}}\r\n                            </option>\r\n                        </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"data-busqueda\">\r\n        <div class=\"input-row flex-end-row\">\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"productoSelec\">Producto</label>\r\n                <input id=\"productoSelec\" \r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    \r\n                    name=\"productoSelec\"\r\n                    [(ngModel)]=\"productoSelec.codProducto\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"productoSelec.codProducto && productoSelec.codProducto.length > 0\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\" \r\n                [onClickItem]=\"onClickPopupProducto\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoSelec')\">\r\n            </popup-lista>\r\n            \r\n            <div class=\"item-input\">\r\n                <label for=\"padronSelec\">Clie/Prov</label>\r\n                <input id=\"padronSelec\" \r\n                    (ngModelChange)=\"onChangeCliProv($event)\"\r\n                    \r\n                    name=\"padronSelec\"\r\n                    [(ngModel)]=\"padronSelec.padronCodigo\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"padronSelec.padronCodigo && padronSelec.padronCodigo.length > 0\"\r\n                [items]=\"padrones.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['padronApelli', 'padronCodigo']\" \r\n                [onClickItem]=\"onClickPopupPadron\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('padronSelec')\">\r\n            </popup-lista>\r\n            \r\n\r\n        </div>\r\n        <!--<div class=\"input-row flex-end-row\">\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Depósito</label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"depositoSelec\" class=\"form-control select-input\" id=\"depositoSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.depositos)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let dep of depositos | async\" [ngValue]=\"dep\">\r\n                        {{dep.descripcion + ', ' + dep.codigoDep}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Estado: </label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"sisEstadoSelec\" class=\"form-control select-input\" id=\"sisEstadoSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.sisEstados)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let modulo of sisEstados | async\" [ngValue]=\"modulo\">\r\n                        {{modulo.descripcion}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Vendedor: </label>\r\n                <select [compareWith]=\"utilsService.dropdownCompareWith\" [(ngModel)]=\"vendedorSelec\" class=\"form-control select-input\" id=\"vendedorSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.vendedor)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let vend of vendedores | async\" [ngValue]=\"vend\">\r\n                        {{ vend.auxNombreCompleto }}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <-- <div class=\"input-row flex-end-row\"> -!->\r\n        <div class=\"input-row flex-end-row\">\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Estado Afip: </label>\r\n                <select \r\n                    [compareWith]=\"utilsService.dropdownCompareWith\" \r\n                    [(ngModel)]=\"estadoAfip\" \r\n                    class=\"form-control select-input\"\r\n                    id=\"idEstadoAfip\">\r\n                    <option value=\"Todas\">\r\n                        Todas\r\n                    </option>\r\n                    <option value=\"Si\">\r\n                        Autorizadas\r\n                    </option>\r\n                    <option value=\"No\">\r\n                        No Autorizadas\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"comprobante\">Tipo Operacion: </label>\r\n                <select \r\n                    [compareWith]=\"utilsService.dropdownCompareWith\" \r\n                    [(ngModel)]=\"sisTipoOpSelect\" \r\n                    class=\"form-control select-input\" \r\n                    id=\"tipoOpSelec\">\r\n                    <option [ngValue]=\"utilsService.getInstanciaVacia(resourcesREST.sisTipoOperacion)\">\r\n                        Todos\r\n                    </option>\r\n                    <option *ngFor=\"let sto of sisTipoOperaciones | async\" [ngValue]=\"sto\">\r\n                        {{ sto.descripcion }} [{{ sto.modulo.descripcion }}]\r\n                    </option>\r\n                </select>\r\n            </div>\r\n\r\n\r\n        </div>-->\r\n        <div class=\"input-row flex-end-row\">\r\n\r\n            <!--<div class=\"item-input\">\r\n                <label for=\"padronSelec\">Clie/Prov</label>\r\n                <input id=\"padronSelec\" \r\n                    (ngModelChange)=\"onChangeCliProv($event)\"\r\n                    \r\n                    name=\"padronSelec\"\r\n                    [(ngModel)]=\"padronSelec.padronCodigo\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n            <popup-lista \r\n                *ngIf=\"padronSelec.padronCodigo && padronSelec.padronCodigo.length > 0\"\r\n                [items]=\"padrones.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['padronApelli', 'padronCodigo']\" \r\n                [onClickItem]=\"onClickPopupPadron\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('padronSelec')\">\r\n            </popup-lista>\r\n\r\n            <div class=\"item-input\">\r\n                <label for=\"productoHasta\" class=\"min-width\">Prod. Hasta:</label>\r\n                <input id=\"productoHasta\" \r\n                    (ngModelChange)=\"onChangeProducto($event)\"\r\n                    (focus)=\"onFocusHasta()\"\r\n                    (blur)=\"onBlurHasta()\"\r\n                    name=\"productoHasta\"\r\n                    [(ngModel)]=\"productoHasta.codProducto\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"productoHasta.codProducto && productoHasta.codProducto.length > 0 && focusProductoHasta\"\r\n                [items]=\"productos.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['codProducto', 'descripcion']\" \r\n                [onClickItem]=\"onClickPopupProductoHasta\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('productoHasta')\">\r\n            </popup-lista>-->\r\n\r\n                <div class=\"btn-container item-input\">\r\n                        <button id=\"btnBuscar\"\r\n                                [disabled]=\"!fechasFiltro.desde ||\r\n                                            !fechasFiltro.desde.day ||\r\n                                            !fechasFiltro.hasta ||\r\n                                            !fechasFiltro.hasta.day ||\r\n                                            !sisModuloSelec || !sisModuloSelec.idSisModulos\r\n                                            || !tipoComprobanteSelecImputado.idCteTipo\r\n                                            || !tipoComprobanteSelecImputador.idCteTipo\"\r\n                                (click)=\"onClickBuscar()\"\r\n                                class=\"btn btn-primary\">\r\n                            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                            Buscar\r\n                        </button>\r\n                    </div>\r\n        </div>\r\n    </div>\r\n\r\n</ba-card>\r\n\r\n<div *ngIf=\"isLoadingImputadores || isLoadingImputados\" class=\"spinner-container\">\r\n    <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n</div>\r\n<div class=\"outerContainer\">\r\n    <ngb-tabset *ngIf=\"!isLoadingImputadores && (imputadores | async)?.length > 0\" class=\"col-sm-12 tabset-consulta tab-container-1\">\r\n        <ngb-tab title=\"Detalles\">\r\n            <ng-template ngbTabContent>\r\n\r\n                <table style=\"table-layout: fixed; width: 100%;\" class=\"table table-striped\" [mfData]=\"imputadores | async\" #mf=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"width1\">Cte</th>\r\n                            <th class=\"width2\">Número</th>\r\n                            <th class=\"width4\">Prod.</th>\r\n                            <th class=\"width5\">Descripción</th>\r\n                            <th class=\"width6 text-right\">Cant.</th>\r\n                            <th class=\"width7 text-right\">Pend.</th>\r\n                            <th class=\"width8\"></th>\r\n                            <th class=\"width9\"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let imp of mf.data; let i = index\">\r\n                            <td>{{ imp.comprobante }}</td>\r\n                            <td class=\"td-nowrap\">{{ formatNumero(imp.numero) }}</td>\r\n                            <td>{{ imp.producto.codProducto }}</td>\r\n                            <td>{{ imp.producto.descripcion }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(imp.original) }}</td>\r\n                            <td class=\"text-right\">\r\n                                <span *ngIf=\"enableEditIndex != i\">{{ utilsService.parseDecimal(imp.pendiente) }}</span>\r\n                                <input class=\"form-control pre-numero-input text-right pendiente-input\" id=\"focus\" (keydown.Tab)=\"saveSegment(i)\" type=\"text\" [(ngModel)]=\"pendienteEditor\" *ngIf=\"enableEdit && enableEditIndex == i\"/>\r\n                            </td>\r\n                            <td class=\"cell\">\r\n                                <div *ngIf=\"i != enableEditIndex || enableEditIndex == null\" (click)=\"enableEditMethod($event, i, imp.idFactDetalle)\" class=\"btn-accion btn-editar\">\r\n                                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                                <div *ngIf=\"enableEdit && enableEditIndex == i\" (click)=\"saveSegment(i, imp.idFactDetalle)\" class=\"btn-accion btn-remover\">\r\n                                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"cell\">\r\n                                <input class=\"select btn-accion\" type=\"radio\" name=\"imputador\" id=\"i\" (click)=\"setImputador(i, imp.idFactDetalle)\">\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"8\">\r\n                                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n    <ngb-tabset *ngIf=\"!isLoadingImputados && (imputados | async)?.length > 0\" class=\"col-sm-12 tabset-consulta tab-container-2\">\r\n        <ngb-tab class=\"light-colour\" title=\"Detalles\">\r\n            <ng-template ngbTabContent>\r\n\r\n                <table style=\"table-layout: fixed; width: 100%;\" class=\"table table-striped\" [mfData]=\"imputados | async\" #mf=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"width1\">Cte</th>\r\n                            <th class=\"width2\">Número</th>\r\n                            <th class=\"width4\">Prod.</th>\r\n                            <th class=\"width5\">Descripción</th>\r\n                            <th class=\"width6 text-right\">Cant.</th>\r\n                            <th class=\"width7 text-right\">Pend.</th>\r\n                            <th class=\"width9\"></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let imp of mf.data; let i = index\">\r\n                            <td>{{ imp.comprobante }}</td>\r\n                            <td class=\"td-nowrap\">{{ formatNumero(imp.numero) }}</td>\r\n                            <td>{{ imp.producto.codProducto }}</td>\r\n                            <td>{{ imp.producto.descripcion }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(imp.original) }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(imp.pendiente) }}</td>\r\n                            <td class=\"cell\">\r\n                                <input *ngIf=\"imputador && (imp.idFactDetalle != imputador.idFactDetalle\r\n                                && imp.comprobante != imputador.comprobante\r\n                                && imp.producto.codProducto == imputador.producto.codProducto)\" class=\"select btn-accion\" type=\"radio\" name=\"imputado\" id=\"i\" (click)=\"setImputado(i, imp.idFactDetalle)\">\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"7\">\r\n                                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </ng-template>\r\n        </ngb-tab>\r\n        \r\n    </ngb-tabset>\r\n    <!--<data-tables  mfRowsOnPage=\"10\" <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                tituloTabla=\"Imputadores\"\r\n                class=\"data-table-productos\" \r\n                baCardClase=\"with-scroll with-box-shadow-custom\"\r\n                [data]=\"imputadores | async\" \r\n                [columns]=\"imputadoresColumnas\"\r\n                [edit]=\"onClickEdit\" \r\n                [remove]=\"onClickRemove\" \r\n                [confirmEdit]=\"onClickConfirmEdit\"\r\n                [deletable]=\"false\"\r\n                [selectable]=\"true\"\r\n                [function]=\"setImputador\"\r\n                >\r\n    </data-tables>\r\n    <div *ngIf=\"imputador != undefined\">\r\n        <data-tables  \r\n            tituloTabla=\"Imputados\"\r\n            class=\"data-table-productos\" \r\n            baCardClase=\"with-scroll with-box-shadow-custom\"\r\n            [data]=\"imputados | async\" \r\n            [columns]=\"imputadosColumnas\"\r\n            [edit]=\"onClickEdit\" \r\n            [remove]=\"onClickRemove\" \r\n            [confirmEdit]=\"onClickConfirmEdit\"\r\n            [enableEditDelete]=\"true\" \r\n            [selectable]=\"true\"\r\n            [function]=\"setImputado\"\r\n            [disable]=\"selectablesArray\"\r\n            [deletable]=\"false\"\r\n        >\r\n        </data-tables>\r\n    </div>-->\r\n    \r\n    \r\n</div>\r\n\r\n<button [disabled]=\"isDisabledConfirm()\"\r\n        (click)=\"onClickConfirmar()\" \r\n        class=\"btn btn-primary btn-ingreso-from\">\r\n    Confirmar\r\n</button>"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/imputaciones/imputaciones.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-comprobante > .card {\n  margin-bottom: 2px;\n  font-size: 10px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda {\n    font-size: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 60%;\n    padding: 0 1%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 2px;\n      margin-bottom: 10px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > input {\n          margin: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > label {\n          margin-bottom: 5px;\n          margin-top: 3px;\n          padding-right: 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > .label-tipo {\n          margin-bottom: 5px;\n          margin-top: 3px;\n          padding-right: 5px;\n          width: 50%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .flex-end-row {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-title {\n      width: 20%;\n      font-weight: 350;\n      margin: 5px 0 2px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content {\n      width: 98.8%;\n      font-size: 10px;\n      border: solid 1px #c2c2c7;\n      border-radius: 7px;\n      margin: 0px 8px 14px 0px;\n      padding: 6px 5px 0px 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .item-input {\n        width: 50%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .tipos-comp {\n        width: 100%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input {\n          width: 49px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input:last-child {\n          width: 152px;\n          margin-right: 0; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .flex-end-with-padding {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 1%; }\n\n:host /deep/ .tabset-consulta {\n  font-size: 10px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > td {\n    border: none;\n    padding: 10px 12px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > th {\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > .td-right {\n    text-align: right !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead tr th {\n    padding: 7px 10px;\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead td {\n    padding: 7px 5px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp .btn-accion {\n    cursor: pointer;\n    margin: 8px 6px 0; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-titulo {\n    font-size: 1.2rem;\n    font-size: 0.9rem;\n    font-weight: bold; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td {\n    padding: 0 !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td tr th {\n      font-size: 10px;\n      border: solid 0px;\n      font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle {\n    cursor: pointer; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle:hover {\n    background: #c7c7c7; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > td {\n    padding: 1px 12px; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > th {\n    padding: 4px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta .btn-imprimir-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin: 1% -0.8%; }\n\n.popup-spinner {\n  position: fixed;\n  z-index: 9999999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 151px;\n  padding: 5px 9px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: white;\n  border: solid 1px #e0e0e0;\n  border-radius: 6px 9px 0px 0px;\n  margin-top: 4px; }\n\n.width-5 {\n  width: 5%; }\n\n.table > thead > tr > th {\n  white-space: normal !important; }\n\n.spinner-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2rem;\n  margin: 14px 0;\n  background: #fafafa;\n  padding: 10px 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  color: #213742; }\n\n.outerContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.tab-container-1 {\n  max-width: 50%;\n  padding: 0; }\n\n.tab-container-2 {\n  max-width: 50%;\n  padding: 0; }\n\n.width1 {\n  width: 5%; }\n\n.width2 {\n  width: 10%; }\n\n.width3 {\n  width: 10%; }\n\n.width4 {\n  width: 10%; }\n\n.width5 {\n  width: 25%; }\n\n.width6 {\n  width: 5%; }\n\n.width7 {\n  width: 5%; }\n\n.width8 {\n  width: 5%; }\n\n.width9 {\n  width: 5%; }\n\n.select {\n  margin-top: 0.2rem;\n  margin-left: -0.5rem; }\n\n.data-table-productos .row .card {\n  -webkit-box-shadow: 0 0px 26px 0 rgba(0, 0, 0, 0.25) !important;\n          box-shadow: 0 0px 26px 0 rgba(0, 0, 0, 0.25) !important;\n  margin: 0% 1.6% !important;\n  margin-bottom: 24px !important; }\n\n.pendiente-input {\n  width: 3rem;\n  margin-left: -15px; }\n"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/imputaciones/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/comprobantes/imputaciones/imputaciones.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/comprobantes/comprobantes.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/pesificacion/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/pages/main/comprobantes/pesificacion/pesificacion.component.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/pesificacion/pesificacion.component.ts":
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
var padron_1 = __webpack_require__("./src/app/models/padron.ts");
var dateLikePicker_1 = __webpack_require__("./src/app/models/dateLikePicker.ts");
var rxjs_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var gruposParametros_1 = __webpack_require__("./src/constantes/gruposParametros.ts");
var popup_lista_service_1 = __webpack_require__("./src/app/pages/reusable/otros/popup-lista/popup-lista-service.ts");
var Pesificacion = (function () {
    function Pesificacion(recursoService, utilsService, comprobanteService, popupListaService) {
        var _this = this;
        this.recursoService = recursoService;
        this.utilsService = utilsService;
        this.comprobanteService = comprobanteService;
        this.popupListaService = popupListaService;
        this.resourcesREST = resoursesREST_1.resourcesREST;
        this.padrones = { todos: [], filtrados: new rxjs_1.BehaviorSubject([]) };
        this.padronEnfocadoIndex = -1;
        this.productoEnfocadoIndex = -1;
        this.fechasFiltro = {
            emisionDesde: new dateLikePicker_1.DateLikePicker(),
            emisionHasta: new dateLikePicker_1.DateLikePicker(),
            vencimientoDesde: new dateLikePicker_1.DateLikePicker(),
            vencimientoHasta: new dateLikePicker_1.DateLikePicker()
        };
        this.padronSelec = new padron_1.Padron();
        this.isLoading = false;
        this.compEncabezados = new rxjs_1.BehaviorSubject([]);
        this.compDetalles = new rxjs_1.BehaviorSubject([]);
        /**
         * On click buscar
         */
        this.onClickBuscar = function () {
            _this.isLoading = true;
            // Busco los encabezados
            // Me suscribo a los cambios de los encabezados y en cada actualizacion de estos, actualizo también todos los detalles
            // Aprovecho a fijarme si la cantidad es 0. En ese caso, muestro mensaje
            _this.comprobanteService.buscarComprobantesPesificacion(_this.fechasFiltro)(_this.padronSelec)
                .subscribe(function (encabezados) {
                // Actualizo encabezados
                _this.compEncabezados.next(encabezados);
                encabezados && encabezados.length === 0 ?
                    _this.utilsService.showModal('Aviso')('No se encontraron comprobantes con esas condiciones')()() : null;
                // Actualizo detalles
                _this.compDetalles.next(_this.utilsService.flatMap(function (encabezado) { return encabezado.detalle; }, encabezados));
                _this.isLoading = false;
            });
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
        /**
         * Setea la fecha de compra calculandola dado un string en formato 'ddmm', parseando a 'dd/mm/aaaa'
         */
        this.onCalculateFecha = function (e) { return function (keyFecha) {
            if (!_this.fechasFiltro[keyFecha] || typeof _this.fechasFiltro[keyFecha] !== 'string')
                return;
            _this.fechasFiltro[keyFecha] = _this.utilsService.stringToDateLikePicker(_this.fechasFiltro[keyFecha]);
        }; };
        // Buscador cli/prov
        this.onChangeCliProv = function (busqueda) {
            if (busqueda && busqueda.length === 0) {
                _this.padrones.filtrados.next([]);
            }
            else {
                _this.padrones.filtrados.next(_this.comprobanteService.filtrarPadrones(_this.padrones.todos, busqueda));
            }
            _this.padronEnfocadoIndex = -1;
        };
        this.onClickPopupPadron = function (prove) { return _this.padronSelec = new padron_1.Padron(__assign({}, prove)); };
        this.recursoService.getRecursoList(resoursesREST_1.resourcesREST.padron)({ grupo: gruposParametros_1.default.cliente })
            .subscribe(function (padrones) {
            _this.padrones.todos = padrones;
            // this.padrones.filtrados.next(padrones);
            _this.padrones.filtrados.next([]);
        });
        this.recursoService.getCotizacionDatos().subscribe(function (cotizDatos) {
            _this.cotizacionActual = cotizDatos.cotizacion;
        });
    }
    return Pesificacion;
}());
Pesificacion = __decorate([
    core_1.Component({
        selector: 'pesificacion',
        styles: [__webpack_require__("./src/app/pages/main/comprobantes/pesificacion/pesificacion.scss")],
        template: __webpack_require__("./src/app/pages/main/comprobantes/pesificacion/pesificacion.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof recursoService_1.RecursoService !== "undefined" && recursoService_1.RecursoService) === "function" && _a || Object, typeof (_b = typeof utilsService_1.UtilsService !== "undefined" && utilsService_1.UtilsService) === "function" && _b || Object, typeof (_c = typeof comprobanteService_1.ComprobanteService !== "undefined" && comprobanteService_1.ComprobanteService) === "function" && _c || Object, typeof (_d = typeof popup_lista_service_1.PopupListaService !== "undefined" && popup_lista_service_1.PopupListaService) === "function" && _d || Object])
], Pesificacion);
exports.Pesificacion = Pesificacion;
var _a, _b, _c, _d;
//# sourceMappingURL=pesificacion.component.js.map

/***/ }),

/***/ "./src/app/pages/main/comprobantes/pesificacion/pesificacion.html":
/***/ (function(module, exports) {

module.exports = "<ba-card \r\n    class=\"consulta-comprobante criterio-busqueda\" \r\n    toggleBtn=\"true\"\r\n    cardTitle=\"Filtros\"\r\n    headerMin=\"true\"\r\n    >    \r\n    <div class=\"data-busqueda\">\r\n        <div class=\"item-input\">\r\n            <label for=\"emisionDesde\">Emision desde</label>\r\n            <div class=\"input-group date-picker-fecha\">\r\n                <input (blur)=\"onCalculateFecha($event)('emisionDesde')\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"emisionDesde\" [(ngModel)]=\"fechasFiltro.emisionDesde\"\r\n                    ngbDatepicker #eDesde=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"eDesde.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item-input\">\r\n            <label for=\"emisionHasta\">Emision hasta</label>\r\n            <div class=\"input-group date-picker-fecha\">\r\n                <input (blur)=\"onCalculateFecha($event)('emisionHasta')\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"emisionHasta\" [(ngModel)]=\"fechasFiltro.emisionHasta\"\r\n                    ngbDatepicker #eHasta=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"eHasta.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item-input\">\r\n            <label for=\"vencimientoDesde\">Vencimiento desde</label>\r\n            <div class=\"input-group date-picker-fecha\">\r\n                <input (blur)=\"onCalculateFecha($event)('vencimientoDesde')\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"vencimientoDesde\" [(ngModel)]=\"fechasFiltro.vencimientoDesde\"\r\n                    ngbDatepicker #vDesde=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"vDesde.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item-input\">\r\n            <label for=\"vencimientoHasta\">Vencimiento hasta</label>\r\n            <div class=\"input-group date-picker-fecha\">\r\n                <input (blur)=\"onCalculateFecha($event)('vencimientoHasta')\" class=\"form-control\" placeholder=\"dd/mm/aaaa\" name=\"vencimientoHasta\" [(ngModel)]=\"fechasFiltro.vencimientoHasta\"\r\n                    ngbDatepicker #vHasta=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" (click)=\"vHasta.toggle()\" type=\"button\" style=\"height: 100%;\">\r\n                        <img src=\"assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--<div class=\"input-row flex-end-row\">-->\r\n            \r\n            <div class=\"item-input\">\r\n                <label for=\"padronSelec\">Clie/Prov</label>\r\n                <input id=\"padronSelec\" \r\n                    (ngModelChange)=\"onChangeCliProv($event)\"\r\n                    \r\n                    name=\"padronSelec\"\r\n                    [(ngModel)]=\"padronSelec.padronCodigo\" type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                    >\r\n            </div>\r\n    \r\n            <popup-lista \r\n                *ngIf=\"padronSelec.padronCodigo && padronSelec.padronCodigo.length > 0\"\r\n                [items]=\"padrones.filtrados.asObservable().distinctUntilChanged()\"\r\n                [keysToShow]=\"['padronApelli', 'padronCodigo']\" \r\n                [onClickItem]=\"onClickPopupPadron\" \r\n                [fatherPosition]=\"popupListaService.getOffsetOfInputCliente('padronSelec')\">\r\n            </popup-lista>\r\n            \r\n\r\n        <!--</div>-->\r\n        \r\n\r\n        <!-- <div class=\"input-row flex-end-row\"> -->\r\n        <div class=\"input-row\" style=\"justify-content: space-between; display: flex;\">\r\n            \r\n            <div class=\"btn-container item-input\">\r\n                <button id=\"btnBuscar\"\r\n                        [disabled]=\"!fechasFiltro.vencimientoDesde ||\r\n                                    !fechasFiltro.vencimientoDesde.day ||\r\n                                    !fechasFiltro.vencimientoHasta ||\r\n                                    !fechasFiltro.vencimientoHasta.day ||\r\n                                    !padronSelec.padronCodigo\"\r\n                        (click)=\"onClickBuscar()\"\r\n                        class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                    Buscar\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</ba-card>\r\n\r\n<div class=\"data-divider\">\r\n    <ngb-tabset class=\"col-sm-8 tabset-consulta\">\r\n        <ngb-tab title=\"Asiento\">\r\n            <ng-template ngbTabContent>\r\n                <table style=\"table-layout: fixed; width: 100%;\" class=\"table table-striped table-consulta-comp\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width:10%\">Ingreso</th>\r\n                            <th style=\"width:10%\">Asiento</th>\r\n                            <th style=\"width:15%\">Plan Cuentas</th>\r\n                            <th style=\"width:20%\">Detalle</th>\r\n                            <th class=\"text-right\" style=\"width:15%\">Importe</th>\r\n                            <th style=\"width:10%\">Vencimiento</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"masterSelec\">\r\n                        <ng-container *ngFor=\"let master of masterSelec\">\r\n                            <tr class=\"comprobante-tr\">\r\n                                <td style=\"width:10%\">{{ utilsService.formatearFecha('DD/MM/YYYY')(master.ingreso) }}</td>\r\n                                <td style=\"width:10%\">{{ master.asiento }}</td>\r\n                                <td style=\"width:15%\">{{ master.planCuentas }}</td>\r\n                                <td style=\"width:35%\">{{ master.detalle }}</td>\r\n                                <td class=\"text-right\" style=\"width:20%\">{{ utilsService.parseDecimal(master.importe) }}</td>\r\n                                <td style=\"width:10%\">{{ utilsService.formatearFecha('DD/MM/YYYY')(master.vencimiento) }}</td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </tbody>\r\n                </table>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n    <ngb-tabset class=\"col-sm-4 tabset-consulta\">\r\n        <ngb-tab title=\"Datos\">\r\n            <ng-template ngbTabContent>\r\n                <div class=\"calculos-structure\">\r\n                    <div class=\"item-input\">\r\n                        <label>Dólar actual:</label>\r\n                        <label *ngIf=\"cotizacionActual\">{{ cotizacionActual }}</label>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</div>\r\n<ngb-tabset *ngIf=\"!isLoading && (compEncabezados | async)?.length > 0\" class=\"col-sm-12 tabset-consulta\">\r\n    <ngb-tab title=\"Comprobantes\">\r\n        <ng-template ngbTabContent>\r\n            <table style=\"table-layout: fixed; width: 100%;\" class=\"table table-striped table-consulta-comp\" [mfData]=\"compEncabezados | async\" #mf=\"mfDataTable\" mfRowsOnPage=\"10\">\r\n                <thead>\r\n                    <tr>\r\n                        <td style=\"width:1.5%\"></td>\r\n                        <th style=\"width:4%\">Comp</th>\r\n                        <th class=\"text-right\">Numero</th>\r\n                        <th>Fecha Emi</th>\r\n                        <th class=\"text-right\" style=\"width:4%\">Cli/Pro</th>\r\n                        <th style=\"width:8%\">Nombre</th>\r\n                        <th class=\"text-right\">Cuit</th>\r\n                        <th class=\"text-right\">Dolar</th>\r\n                        <th style=\"width:3%\">Mon</th>\r\n                        <th style=\"width:3%\">Imp</th>\r\n                        <th>Modulo</th>\r\n                        <th class=\"text-right\">Neto</th>\r\n                        <th class=\"text-right\">Total</th>\r\n                        <th class=\"text-right\">Tipo Op</th>\r\n                        <th style=\"width:3%\" class=\"text-right\"></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <ng-container *ngFor=\"let compBusc of mf.data\">\r\n                        <tr class=\"comprobante-tr\">\r\n                            <td style=\"width:1.5%\" class=\"btn-toggle\" (click)=\"compBusc.showDetalles = !compBusc.showDetalles\">\r\n                                <i *ngIf=\"!compBusc.showDetalles\" class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\r\n                                <i *ngIf=\"compBusc.showDetalles\" class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\r\n                            </td>\r\n                            <td style=\"width:4%\">{{ compBusc.comprobante }}</td>\r\n                            <td class=\"text-right td-nowrap\">{{ formatNumero(compBusc.numero) }}</td>\r\n                            <td>{{ utilsService.formatearFecha('DD/MM/YYYY')(compBusc.fechaEmi) }}</td>\r\n                            <td class=\"text-right\" style=\"width:4%\">{{ compBusc.idPadron }}</td>\r\n                            <td style=\"width:8%\">{{ compBusc.nombre }}</td>\r\n                            <td class=\"text-right\">{{ compBusc.cuit }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(compBusc.cotDolar) }}</td>\r\n                            <td style=\"width:3%\">{{ compBusc.moneda }}</td>\r\n                            <td style=\"width:3%\">{{ compBusc.imputada }}</td>\r\n                            <td>{{ compBusc.modulo }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(compBusc.importeNeto) }}</td>\r\n                            <td class=\"text-right\">{{ utilsService.parseDecimal(compBusc.importeTotal) }}</td>\r\n                            <td class=\"text-right\">{{ compBusc.tipoOperacion }}</td>\r\n                            <td style=\"width:3%\" class=\"text-right\">{{ compBusc.autorizada }}</td>\r\n\r\n                            <td style=\"display: flex;\">\r\n                                \r\n                            </td>\r\n                        </tr>\r\n                        \r\n                        <tr *ngIf=\"compBusc.showDetalles\" class=\"detalles-comp-tr\">\r\n                            <td colspan=\"1\">\r\n\r\n                            </td>\r\n                            <td class=\"detalles-titulo\" colspan=\"1\">\r\n                                <div class=\"detalles-titulo-text\">\r\n                                    Detalles\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"detalles-tabla-td\" colspan=\"14\">\r\n                                <!-- <table style=\"table-layout: fixed; width: 100%;\" class=\"table-inner\" style=\"width:100%; background: #d6d6d67a;\"> -->\r\n                                <table style=\"table-layout: fixed; width: 100%;\" class=\"table-inner\" style=\"width:100%; background: #174c6640;\">\r\n                                    <tr>\r\n                                        <th>Producto</th>\r\n                                        <th>Descripción</th>\r\n                                        <th class=\"text-right\">Cantidad</th>\r\n                                        <th class=\"text-right\">Pendiente</th>\r\n                                        <th class=\"text-right\">Precio</th>\r\n                                        <th class=\"text-right\">Importe</th>\r\n                                        <th class=\"text-right\">Precio Desc</th>\r\n                                        <th class=\"text-right\">Descuento</th>\r\n                                        <th class=\"text-right\">Unidad Desc</th>\r\n                                        <th class=\"text-right\">Deposito</th>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let compDet of compBusc.detalle\">\r\n                                        <td>{{ compDet.codProducto }}</td>\r\n                                        <td>{{ compDet.articulo }}</td>\r\n                                        <td class=\"text-right\">{{ utilsService.parseDecimal(compDet.original) }}</td>\r\n                                        <td class=\"text-right\">{{ utilsService.parseDecimal(compDet.pendiente) }}</td>\r\n                                        <td class=\"text-right\">{{ \r\n                                            utilsService.toThreeDecimals(compDet.precio)\r\n                                        }}</td>\r\n                                        <td class=\"text-right\">{{ utilsService.parseDecimal(\r\n                                            (compDet.importe)\r\n                                        ) }}</td>\r\n                                        <td class=\"text-right\">{{ \r\n                                            utilsService.toThreeDecimals(compDet.precioDesc) \r\n                                        }}</td>\r\n                                        <td class=\"text-right\">{{ compDet.descuento }}</td>\r\n                                        <td class=\"text-right\">{{ compDet.unidadDescuento }}</td>\r\n                                        <td class=\"text-right\">{{ compDet.deposito }}</td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>\r\n                        </tr>\r\n                    </ng-container>\r\n                            \r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"16\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </ng-template>\r\n    </ngb-tab>\r\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/pages/main/comprobantes/pesificacion/pesificacion.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .consulta-comprobante > .card {\n  margin-bottom: 2px;\n  font-size: 11px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda {\n    font-size: 11px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    padding: 0 1%;\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 2px;\n      margin-bottom: 10px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > input {\n          margin: 0 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .input-row > .item-input > label {\n          margin-bottom: 5px;\n          margin-top: 3px;\n          padding-right: 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .flex-end-row {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-title {\n      width: 20%;\n      font-weight: 350;\n      margin: 5px 0 2px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content {\n      width: 98.8%;\n      font-size: 11px;\n      border: solid 1px #c2c2c7;\n      border-radius: 7px;\n      margin: 0px 8px 14px 0px;\n      padding: 6px 5px 0px 5px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .item-input {\n        width: 50%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > label {\n          width: 7%; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input {\n          width: 49px; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .data-busqueda .data-comprobante-content > .input-row .nro-cte > input:last-child {\n          width: 152px;\n          margin-right: 0; }\n\n:host /deep/ .consulta-comprobante > .card > .card-body .flex-end-with-padding {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 1%; }\n\n:host /deep/ .tabset-consulta {\n  font-size: 11px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > td {\n    border: none;\n    padding: 10px 12px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > th {\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-striped > tbody > tr > .td-right {\n    text-align: right !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead tr th {\n    padding: 7px 10px;\n    padding: 14px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp thead td {\n    padding: 7px 5px; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane .table-consulta-comp .btn-accion {\n    cursor: pointer;\n    margin: 8px 6px 0; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-titulo {\n    font-size: 1.2rem;\n    font-size: 0.9rem;\n    font-weight: bold; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td {\n    padding: 0 !important; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .detalles-comp-tr .detalles-tabla-td tr th {\n      font-size: 11px;\n      border: solid 0px;\n      font-weight: 500; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle {\n    cursor: pointer; }\n\n:host /deep/ .tabset-consulta > .tab-content > .tab-pane tbody .btn-toggle:hover {\n    background: #c7c7c7; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > td {\n    padding: 1px 12px; }\n\n:host /deep/ .tabset-consulta .table-inner > tbody > tr > th {\n    padding: 4px 12px;\n    font-weight: 500; }\n\n:host /deep/ .tabset-consulta .btn-imprimir-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin: 1% -0.8%; }\n\n.popup-spinner {\n  position: fixed;\n  z-index: 9999999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 151px;\n  padding: 5px 9px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: white;\n  border: solid 1px #e0e0e0;\n  border-radius: 6px 9px 0px 0px;\n  margin-top: 4px; }\n\n.width-5 {\n  width: 5%; }\n\n.table > thead > tr > th {\n  white-space: normal !important; }\n\n.spinner-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2rem;\n  margin: 14px 0;\n  background: #fafafa;\n  padding: 10px 4px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);\n  color: #213742; }\n\n.total-container {\n  padding: 0.5rem; }\n\n.title-text {\n  font-weight: bold; }\n\n.total-span {\n  padding-left: 2rem; }\n\n.min-width {\n  min-width: 70px; }\n\n.data-divider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly; }\n"

/***/ }),

/***/ "./src/app/services/imputacionesService.ts":
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
var ImputacionesService = (function () {
    function ImputacionesService(authService, localStorageService) {
        var _this = this;
        this.authService = authService;
        this.localStorageService = localStorageService;
        this.getImputacionesByComp = function (compBusc) {
            return _this.authService.getImputacionesByComp(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token, compBusc).map(function (resp) { return resp.array; });
        };
        // ).map(resp => resp.datos.detalle)
        /**
         * Dada una imputacion obtiene los productios pendientes
         */
        this.getProductosPendientes = function (compEnca) {
            return _this.authService.buscaPendientes(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token, compEnca.idCteTipo, compEnca.numero, compEnca.idPadron, null, null, null, 0)
                .map(function (respuesta) { return respuesta.arraydatos.map(function (prodPend) { return new productoPendiente_1.ProductoPendiente(prodPend); }); });
        };
        this.getProductosPendientesProd = function (compEnca, codigoProd) {
            return _this.authService.buscaPendientesProd(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token, compEnca.idCteTipo, compEnca.numero, compEnca.idPadron, null, null, null, 0, codigoProd)
                .map(function (respuesta) { return respuesta.arraydatos.map(function (prodPend) { return new productoPendiente_1.ProductoPendiente(prodPend); }); });
        };
        this.setImputaciones = function (idFactDetalle, idFactDetalleImputa, cantidadImputada) {
            return _this.authService.setImputaciones(_this.localStorageService.getObject(environment_1.environment.localStorage.acceso).token, idFactDetalle, idFactDetalleImputa, cantidadImputada).map(function (resp) {
                console.log(resp);
                return resp;
            });
        };
    }
    return ImputacionesService;
}());
ImputacionesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof authService_1.AuthService !== "undefined" && authService_1.AuthService) === "function" && _a || Object, typeof (_b = typeof localStorageService_1.LocalStorageService !== "undefined" && localStorageService_1.LocalStorageService) === "function" && _b || Object])
], ImputacionesService);
exports.ImputacionesService = ImputacionesService;
var _a, _b;
//# sourceMappingURL=imputacionesService.js.map

/***/ })

});
//# sourceMappingURL=comprobantes.module.chunk.js.map