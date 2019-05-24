import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soy-invitado',
  templateUrl: './soy-invitado.component.html',
  styleUrls: ['./soy-invitado.component.scss']
})
export class SoyInvitadoComponent implements OnInit {

  codigo: string = '';

  constructor() { }

  ngOnInit() {
  }

}
