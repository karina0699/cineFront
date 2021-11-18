import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { PeliculaService } from "../servicios/pelicula-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UtilidadService } from "../servicios/utilidad.service";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  actores: any[] = [];
  directores: any[] = [];
  clasificaciones: any[] = [];
  idiomas: any[] = [];
  submitted = false;

  constructor(
    private route: Router,
    private peliculaService: PeliculaService,
    private activatedRoute: ActivatedRoute,
    private servicioUtil: UtilidadService,
    public fb: FormBuilder,
  ) { 
    this.obtenerClasificaciones();
    this.obtenerActores();
    this.obtenerDirectores();
    this.obtenerIdiomas();
  }

  ngOnInit(): void {
  }

  formRegistrar = this.fb.group({
    nombre_pelicula: ["", [Validators.required]],
    trailer: ["", [Validators.required]],
    duracion: ["", [Validators.required]],
    //portada: ["", [Validators.required]],
    sipnosis: ["", [Validators.required]],
    fk_director_pelicula: ["", [Validators.required]],
    fk_idioma: ["", [Validators.required]],
    fk_clasificacion: ["", [Validators.required]],
    fk_actor_reparto: ["", [Validators.required]],
  });

  obtenerActores() {
    this.servicioUtil.obtenerActores().subscribe((resp: any) => {
      this.actores = resp;
    });
  }

  obtenerDirectores() {
    this.servicioUtil.obtenerDirectores().subscribe((resp: any) => {
      this.directores = resp;
    });
  }

  obtenerClasificaciones() {
    return this.servicioUtil.obtenerClasificaciones().subscribe((resp: any) => {
      this.clasificaciones = resp;
    });
  }

  obtenerIdiomas() {
    this.servicioUtil.obtenerIdiomas().subscribe((resp: any) => {
      this.idiomas = resp;
    });
  }

  get registerFormControl() {
    return this.formRegistrar.controls;
  }

    onSubmit() {
      this.submitted = true;
      console.table(this.formRegistrar.value);
      if (this.formRegistrar.valid) {
        this.peliculaService
        .crear(this.formRegistrar.value)
        .subscribe((result: any) => {
          alert('Registro salvado');
          this.volver();
        });
      }else{
        alert('¡Faltan campos!');
      }
  }

  volver(){
    this.route.navigateByUrl('/listar');
  }

}
