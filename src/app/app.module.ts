import { DatepickerComponent } from './shared/datepicker/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './default/page-not-found.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoEventoComponent } from './eventos/admin/nuevo-evento.component';
import { EditarEventoComponent } from './eventos/admin/editar-evento.component';
import { HomeLoginComponent } from './home/home-login.component';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeCL from '@angular/common/locales/es-CL';
import { SharedModule } from './shared/shared.module';
import { SoyInvitadoComponent } from './eventos/invitado/soy-invitado.component';
import { EventoInvitadoComponent } from './eventos/invitado/evento-invitado.component';
import { EventosComponent } from './eventos/admin/eventos.component';

registerLocaleData(localeCL);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NuevoEventoComponent,
    EditarEventoComponent,
    HomeLoginComponent,
    DatepickerComponent,
    SoyInvitadoComponent,
    EventoInvitadoComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularMultiSelectModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    CurrencyPipe,
    {provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
