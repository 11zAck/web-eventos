import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './default/page-not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NuevoEventoComponent } from './eventos/admin/nuevo-evento.component';
import { EditarEventoComponent } from './eventos/admin/editar-evento.component';
import { SoyInvitadoComponent } from './eventos/invitado/soy-invitado.component';
import { EventoInvitadoComponent } from './eventos/invitado/evento-invitado.component';
import { EventosComponent } from './eventos/admin/eventos.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'nuevo', component: NuevoEventoComponent},
  { path: 'editar-evento/:id', component: EditarEventoComponent},
  { path: 'soy-invitado', component: SoyInvitadoComponent},
  { path: 'evento-invitado', component: EventoInvitadoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
