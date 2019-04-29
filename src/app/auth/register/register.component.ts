import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  fNombre;
  fApellido;
  fEmail;
  focus1;
  terms;
  formActivated;

  public usuario: Usuario = new Usuario();

  constructor(private element: ElementRef) {
    this.formActivated = true;
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('signup-page');
    const footer = document.getElementsByTagName('footer')[0];
    footer.classList.add('bg-transparent', 'text-white');
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('signup-page');
    const footer = document.getElementsByTagName('footer')[0];
    footer.classList.remove('bg-transparent', 'text-white');
  }

  input_focusin(nombre: any) {
    nombre.classList.add('input-group-focus');
  }

  public create(): void {
    console.log('CLICK');
    console.log( this.usuario );
    console.log( this.terms );
    this.formActivated = false;
  }

}
