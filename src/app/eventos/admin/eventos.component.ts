import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../classes/evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: Evento[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const e: Evento = new Evento();
    e.nombre = 'Aniversario';
    e.fechaEvento = new Date('2019-10-30');
    this.eventos.push( e );
  }

  editarEvento( e: Evento ) {
    console.log('Evento: ', e);
    this.router.navigate(['/editar-evento', { id: e.id } ]);
  }

}
