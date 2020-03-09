import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/alumnos' },
  { path: 'alumnos', component: ListaAlumnosComponent, canActivate: [LoginGuard] },
  { path: 'alumnos/:alumnoId', component: DetalleComponent, canActivate: [LoginGuard] },
  { path: 'formulario', component: FormularioComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
