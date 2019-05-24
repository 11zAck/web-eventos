import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './default/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NuevoEventoComponent } from './eventos/nuevo-evento.component';
import { EditarEventoComponent } from './eventos/editar-evento.component';
import { SoyInvitadoComponent } from './eventos/soy-invitado.component';

const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'new-event', component: NuevoEventoComponent},
  {path: 'edit-event', component: EditarEventoComponent},
  {path: 'soy-invitado', component: SoyInvitadoComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
