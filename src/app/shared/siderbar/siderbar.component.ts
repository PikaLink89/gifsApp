import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { BusquedaComponent } from '../../gifs/busqueda/busqueda.component';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: [
  ]
})
export class SiderbarComponent {

  constructor(private GifsService: GifsService) {

    
   }
   
  get historial(){

    return this.GifsService.historial;
  }

  buscar (terminoBusqueda: string){
   this.GifsService.buscarGifs(terminoBusqueda); //envía al servicio lo que tiene que buscar al hacer click
  }

}
