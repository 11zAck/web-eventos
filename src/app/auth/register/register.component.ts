import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  f_nombre;
  f_apellido;
  f_email;
  focus1;

  constructor(private element : ElementRef) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('signup-page');
    var footer = document.getElementsByTagName('footer')[0];
    footer.classList.add('bg-transparent','text-white');
    var btnRegister = document.getElementById('item-register');
    btnRegister.classList.add('d-none');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('signup-page');
    var footer = document.getElementsByTagName('footer')[0];
    footer.classList.remove('bg-transparent','text-white');
    var btnRegister = document.getElementById('item-register');
    btnRegister.classList.remove('d-none');
  }

  input_focusin(nombre: any){
    nombre.classList.add('input-group-focus');
  }

}
