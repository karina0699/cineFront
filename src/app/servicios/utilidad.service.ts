import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilidadService {
  url = "http://localhost:8000";


  constructor(private http: HttpClient) { }

  obtenerActores() {
    return this.http.get(`${this.url}/actor/listar`);
  }

  obtenerClasificaciones() {
    return this.http.get(`${this.url}/clasificacion/listar`);
  }

  obtenerIdiomas() {
    return this.http.get(`${this.url}/idioma/listar`);
  }

  obtenerDirectores() {
    return this.http.get(`${this.url}/director/listar`);
  }

}
