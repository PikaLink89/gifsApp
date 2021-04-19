import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtbuscar') txtbuscar:ElementRef<HTMLInputElement>;

buscar(){

  const valor = this.txtbuscar.nativeElement.value;
  console.log(valor);

  this.txtbuscar.nativeElement.value='';
}

}
