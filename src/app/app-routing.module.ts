import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/alumnos' },
  { path: 'alumnos', component: ListaAlumnosComponent },
  { path: 'alumnos/:alumnoId', component: DetalleComponent },
  { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
