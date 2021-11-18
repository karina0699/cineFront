import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
   url = "http://localhost:8000/pelicula";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(`${this.url}/listar`);
  }

  crear(datos:any){
    return this.http.post(`${this.url}/crear`, datos);
  }
  
  actualizar(id: number, datos: any){
    return this.http.put(`${this.url}/actualizar/${id}`, datos);
  }
  
  eliminar(id: number){
    return this.http.put(`${this.url}/eliminar/${id}`, null);
    
  }
  
  obtener(id: number){
    return this.http.get(`${this.url}/obtener/${id}`);
  }

}





