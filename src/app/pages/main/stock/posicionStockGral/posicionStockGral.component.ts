import { Component } from '@angular/core';
import { RecursoService } from '../../../../services/recursoService';
import { resourcesREST } from 'constantes/resoursesREST';
import { UtilsService } from '../../../../services/utilsService';
import { ComprobanteService } from '../../../../services/comprobanteService';
import { Producto } from '../../../../models/producto';
import { DateLikePicker } from '../../../../models/dateLikePicker';

import { Observable, BehaviorSubject } from 'rxjs';
import { PopupListaService } from 'app/pages/reusable/otros/popup-lista/popup-lista-service';

@Component({
    selector: 'posicion-stock-gral',
    styleUrls: ['./posicionStockGral.scss'],
    templateUrl: './posicionStockGral.html'
})
export class PosicionStockGral {
    resourcesREST = resourcesREST;
    
    productos: { todos: Producto[]; filtrados: BehaviorSubject<Producto[]> } = { todos: [], filtrados: new BehaviorSubject([]) }
    
    productoEnfocadoIndex: number = -1;

    filtroNulos: boolean = false;
    fechasFiltro: {
        desde: DateLikePicker,
        hasta: DateLikePicker
    } = {
        desde: new DateLikePicker(),
        hasta: new DateLikePicker()
    }

    productoSelec: Producto = new Producto();
    productoDesde: Producto = new Producto();
    productoHasta: Producto = new Producto();
    focusProductoHasta = false;
    focusProductoDesde = false;
    focusProductoSelec = false;
    posicionesStock: BehaviorSubject<any[]> = new BehaviorSubject([]);

    

    isLoading = false;

    constructor(
        private recursoService: RecursoService,
        public utilsService: UtilsService,
        private comprobanteService: ComprobanteService,
        private popupListaService: PopupListaService
    ) {

        this.recursoService.getRecursoList(resourcesREST.productos)()
            .subscribe(productos => {
                this.productos.todos = productos;
                this.productos.filtrados.next([]);
            })
    }

    /**
     * On click buscar
     */
    onClickBuscar = () => {
        this.isLoading = true;

        // Busco los encabezados
        // Me suscribo a los cambios de los encabezados y en cada actualizacion de estos, actualizo también todos los detalles
        // Aprovecho a fijarme si la cantidad es 0. En ese caso, muestro mensaje
        this.recursoService.getPosicionStockGral(this.fechasFiltro)(this.productoDesde.codProducto)(this.productoHasta.codProducto)
            
            .subscribe(posStock => {
                if(this.filtroNulos) {
                    this.posicionesStock.next(posStock.filter(element => element.saldo != 0));
                } else {
                    this.posicionesStock.next(posStock);
                }
                posStock && posStock.length === 0 ?
                    this.utilsService.showModal('Aviso')('No se encontraron posiciones de stock con esas condiciones')()() : null;

                this.isLoading = false;
            })

    }

    /**
     * Setea la fecha de compra calculandola dado un string en formato 'ddmm', parseando a 'dd/mm/aaaa'
     */
    onCalculateFecha = (e) => (keyFecha) => {
        if (!this.fechasFiltro[keyFecha] || typeof this.fechasFiltro[keyFecha] !== 'string') return;
        
        this.fechasFiltro[keyFecha] = this.utilsService.stringToDateLikePicker(this.fechasFiltro[keyFecha]);

        // Hago focus en el prox input y luego al boton buscar
        (keyFecha==='desde') ? document.getElementById("fechaHasta").focus() : 
            (keyFecha==='hasta') ? document.getElementById("btnBuscar").focus() : null;
        

    }

    // Buscador producto
    onChangeProducto = (busqueda) => {
        if (busqueda && busqueda.length === 0) {
            this.productos.filtrados.next([]);    
        } else {
            this.productos.filtrados.next(
                this.comprobanteService.filtrarProductos(this.productos.todos, busqueda)
            );
        }

        this.productoEnfocadoIndex = -1;
    }

    onClickPopupProducto = (prod: Producto) => 
        this.productoSelec = new Producto({...prod})

    onClickPopupProductoDesde = (prod: Producto) => 
        this.productoDesde = new Producto({...prod})

    onClickPopupProductoHasta = (prod: Producto) => 
        this.productoHasta = new Producto({...prod})

    onFocusHasta() {
        this.focusProductoHasta = true;
    }

    onBlurHasta() {
        this.focusProductoHasta = false;
    }

    onFocusDesde() {
        this.focusProductoDesde = true;
    }

    onBlurDesde() {
        this.focusProductoDesde = false;
    }

    onFocusSelec() {
        this.focusProductoSelec = true;
    }

    onBlurSelec() {
        this.focusProductoSelec = false;
    }

}