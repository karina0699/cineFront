import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculaService } from './servicios/pelicula-service.service';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UtilidadService } from './servicios/utilidad.service';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    EditarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeliculaService, UtilidadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
