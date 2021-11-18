import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../modelo/pelicula.model";
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
  selector: "app-editar",
  templateUrl: "./editar.component.html",
  styleUrls: ["./editar.component.css"],
})

export class EditarComponent implements OnInit {
  pelicula: any;
  actores: any[] = [];
  directores: any[] = [];
  clasificaciones: any[] = [];
  idiomas: any[] = [];
  idPelicula: any;
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

    this.activatedRoute.params.subscribe((param) => {
      this.idPelicula = param.id;
      this.obtener(param.id);
    });
  }

  formActualizar = this.fb.group({
    nombre_pelicula: ["", [Validators.required]],
    trailer: ["", [Validators.required]],
    duracion: ["", [Validators.required]],
    //portada: ["", [Validators.required]],
    sipnosis: ["", [Validators.required]],
    estatus: ["", [Validators.required]],
    fk_director_pelicula: ["", [Validators.required]],
    fk_idioma: ["", [Validators.required]],
    fk_clasificacion: ["", [Validators.required]],
    fk_actor_reparto: ["", [Validators.required]],
  });

  ngOnInit(): void {}

  obtener(id: number) {
    this.peliculaService.obtener(id).subscribe((resp: any) => {
      this.pelicula = resp;
      console.log(this.pelicula);
      this.formActualizar.patchValue({
        nombre_pelicula: this.pelicula.nombre_pelicula,
        trailer: this.pelicula.trailer,
        duracion: this.pelicula.duracion,
        //portada: this.pelicula.portada,
        sipnosis: this.pelicula.sipnosis,
        estatus: this.pelicula.estatus,
        fk_director_pelicula: this.pelicula.fk_director_pelicula,
        fk_clasificacion: this.pelicula.fk_clasificacion,
        fk_idioma: this.pelicula.fk_idioma,
        fk_actor_reparto: this.pelicula.fk_actor_reparto,
      });
    });
  }

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
    return this.formActualizar.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.table(this.formActualizar.value);
    if (this.formActualizar.valid) {
      this.peliculaService
      .actualizar(this.idPelicula, this.formActualizar.value)
      .subscribe((result: any) => {
        alert('Registro actualizado');
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
