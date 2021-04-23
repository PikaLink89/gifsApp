import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtbuscar') txtbuscar:ElementRef<HTMLInputElement>;

  constructor( private GifsService : GifsService){

  }
buscar(){

  const valor = this.txtbuscar.nativeElement.value;
  
  this.GifsService.buscarGifs(valor);

  this.txtbuscar.nativeElement.value='';
}

}
