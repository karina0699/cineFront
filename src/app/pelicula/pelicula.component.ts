import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';
import { PeliculaService } from '../servicios/pelicula-service.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();

  peliculas: any[] = [];

  constructor( private peliculaService: PeliculaService, private router: Router) { }
  
  ngOnInit(): void {
    this.listar();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

  listar(){
    this.peliculaService.listar().subscribe((resp: any) => {
      this.peliculas = resp;
      this.dtTrigger.next;
    });
  }

  
  editar(id: Number): void{
    this.router.navigate(['/editar/', id]);
  }

  agregar(): void{
    this.router.navigate(['/agregar']);
  }

 /* guardar(form){
    this.peliculaService
      .crear(form)
      .subscribe((result: any) => {
        this.listar();
      });
  }

  actualizar(form): any {
    this.peliculaService
      .actualizar(form.id_usuario, form)
      .subscribe((result: any) => {
        this.listar();
      });
  }*/

  eliminar(id_usuario: number) {
    this.peliculaService
      .eliminar(id_usuario)
      .subscribe((result: any) => {
        this.listar();
      });
  }

}
