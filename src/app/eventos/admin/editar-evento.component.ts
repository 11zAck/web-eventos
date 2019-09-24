import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    this.activatedRoute.paramMap.subscribe( params => {
      const id: number = +params.get('id');
    })
    console.log( this.evento );
  }

}
