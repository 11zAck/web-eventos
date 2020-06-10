import { AuthService } from './../auth/service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss']
})
export class HomeLoginComponent implements OnInit {

  formulario;

  constructor(
    private fbuild: FormBuilder,
    private authService: AuthService
  ) {
    this.formulario = fbuild.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

}
