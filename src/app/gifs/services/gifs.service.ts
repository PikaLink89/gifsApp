import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey :string ='b3SH9Mch5rxj2Jtgzwnpn31OLw8YavrD';

  private _historial: string[] = [];

  public resultados: any[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient){}
  buscarGifs(query: string = ''){

    query = query.trim().toLowerCase(); //recibe en minuscula

    //Este if comprueba que dentro del array no este ya el string que esta recibiendo
    if(!this._historial.includes( query )){ //si query no esta dentro del array entonces..

      this._historial.unshift(query); //unshift inserta al inicio
      this._historial = this._historial.splice(0,10); //Tamaño de 10 maximo del array

      
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=b3SH9Mch5rxj2Jtgzwnpn31OLw8YavrD&q=${query}&limit=10`)
    .subscribe( (resp:any) =>{
      console.log(resp.data)
      this.resultados = resp.data; 
    });  
    

    
    }
  }
  