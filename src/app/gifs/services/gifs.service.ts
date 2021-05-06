import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey :string ='b3SH9Mch5rxj2Jtgzwnpn31OLw8YavrD';

  private servicioUrl :string='https://api.giphy.com/v1/gifs';

  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient){

    if(localStorage.getItem('historial')!=null){
      this._historial = JSON.parse(localStorage.getItem('historial')); //2. cargamos el historial que almacenamos antes y lo pasamos de json a string

    }

    if(localStorage.getItem('resultados')!=null){
      this.resultados = JSON.parse(localStorage.getItem('resultados')); //2. cargamos resultados de local para mostrar los gifs

    }
  }
  buscarGifs(query: string = ''){

    query = query.trim().toLowerCase(); //recibe en minuscula

    //Este if comprueba que dentro del array no este ya el string que esta recibiendo
    if(!this._historial.includes( query )){ //si query no esta dentro del array entonces..

      this._historial.unshift(query); //unshift inserta al inicio
      this._historial = this._historial.splice(0,10); //Tamaño de 10 maximo del array

      localStorage.setItem('historial', JSON.stringify(this._historial)); //1. Almacenamos en local el historial, lo tiene que guardar como un string, por lo que usamos el json.stringfy

      
    }

    const params = new HttpParams().
    set('api_key', this.apiKey)
    .set('limit','10')
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
    .subscribe( (resp) =>{
      console.log(resp.data)
      this.resultados = resp.data;

      localStorage.setItem('resultados', JSON.stringify(this.resultados)); //1. Almacenamos en local los resultados para mostrar los gifs

    });  
    

    
    }
  }
  