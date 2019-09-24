import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Evento } from '../classes/evento';
import { ServicioEventosService } from '../service/servicio-eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: Evento[];

  constructor(
    private eventoService: ServicioEventosService,
    private router: Router
  ) {
    this.eventos = this.eventoService.getEventos();
  }

  ngOnInit() {
    const e: Evento = new Evento();
    e.titulo = 'Aniversario';
    e.fechaEvento = new Date('2019-10-30');
    this.eventos.push( e );
  }

  editarEvento( e: Evento ) {
    console.log('Editar evento [' + e.id + ']');
    this.router.navigate(['/editar-evento', { id: e.id } ]);
  }

}
