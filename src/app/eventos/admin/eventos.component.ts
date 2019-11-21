import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Evento } from '../classes/evento';
import { EventosService } from '../service/eventos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: Evento[];

  constructor(
    private eventosService: EventosService,
    private router: Router,
    private location: Location
  ) {
    this.eventosService.getEventos().subscribe(
      (eventos) => {
        this.eventos = eventos;
      }
    );
  }

  ngOnInit() {
    const e: Evento = new Evento();
  }

  editarEvento( e: Evento ) {
    console.log('Editar evento [' + e.id + ']');
    this.router.navigate(['/editar-evento/' + e.id ]);
  }

}
