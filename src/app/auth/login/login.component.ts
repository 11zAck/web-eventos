import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');

      var footer = document.getElementsByTagName('footer')[0];
      footer.classList.add('bg-transparent','text-white');
  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');

      var footer = document.getElementsByTagName('footer')[0];
      footer.classList.remove('bg-transparent','text-white');
  }
}
