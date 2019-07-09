import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Evento } from '../classes/evento';
import { Observable } from 'rxjs';
import { ServicioEventosService } from '../../service/servicio-eventos.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {

  evento$: Observable<Evento>;
  idEvento: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioEvento: ServicioEventosService
  ) { }

  ngOnInit() {
    /*
    this.evento$ = this.activatedRoute.paramMap.subscribe(
      ( params: ParamMap ) => {
        this.idEvento = +params.get('id');
        return 
      })
    );
    */
  }

}
