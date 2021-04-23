import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query: string = ''){

    query = query.trim().toLowerCase(); //recibe en minuscula

    //Este if comprueba que dentro del array no este ya el string que esta recibiendo
    if(!this._historial.includes( query )){ //si query no esta dentro del array entonces..

      this._historial.unshift(query); //unshift inserta al inicio
      this._historial = this._historial.splice(0,10); //Tamaño de 10 maximo del array
    }

    

    console.log(this._historial);
  }
}
