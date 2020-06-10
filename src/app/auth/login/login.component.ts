import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  formulario;
  public focus = false;
  public focus1 = false;
  private usuario: Usuario = new Usuario();

  constructor(
    private fbuild: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formulario = fbuild.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {

      if ( this.authService.isAuthenticated() ) {
        swal.fire('Login', 'Su sesión ya está activa', 'info');
        this.router.navigate(['/home']);
      }
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');

      const footer = document.getElementsByTagName('footer')[0];
      footer.classList.add('bg-transparent', 'text-white');
  }

  ngOnDestroy() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');

      const footer = document.getElementsByTagName('footer')[0];
      footer.classList.remove('bg-transparent', 'text-white');
  }

  public loginUsuario(): void {
    if ( !this.formulario.valid ) {
      swal.fire( 'Login', 'Usuario o contraseña inválidos.', 'warning' );
    } else {
      this.usuario.username = this.formulario.value.usuario;
      this.usuario.password = this.formulario.value.password;
      console.log( 'SUBMIT: ', this.usuario );
      this.authService.login(this.usuario).subscribe( response => {
        console.log(response);
        const payload = JSON.parse(atob(response.access_token.split('.')[1]));
        console.log(payload);
        this.authService.guardarToken(response.access_token);
        this.authService.guardarUsuario(response.access_token);

        const usuario = this.authService.usuario;

        swal.fire('Login', `Hola ${payload.user_name}, has iniciado sesión con éxito`, 'success');
        this.router.navigate(['/home']);

      }, err => {
        if (err.status === 400) {
          swal.fire('Error', 'Usuaio o clave incorrecta', 'error');
        }
      });
    }
  }

}
