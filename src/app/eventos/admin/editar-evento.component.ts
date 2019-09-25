import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Evento } from '../classes/evento';
import { Observable } from 'rxjs';
import { ServicioEventosService } from '../service/servicio-eventos.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {

  evento$: Observable<Evento>;
  evento: Evento;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioEvento: ServicioEventosService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      const id: number = params.id;
      console.log('Evento id: ' + id );

      this.servicioEvento.getEventoById(id).subscribe();
    });
  }

}
