import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { NuevoEventoComponent } from './eventos/nuevo-evento.component';
import { EditarEventoComponent } from './eventos/editar-evento.component';
import { HomeLoginComponent } from './home/home-login.component';

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
    HomeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
