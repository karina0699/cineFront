import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
  {path: "listar" , component:PeliculaComponent},
  {path: "agregar" , component:AgregarComponent},
  {path: "editar/:id" , component:EditarComponent},
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
