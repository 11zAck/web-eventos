import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Evento } from '../classes/evento';
import { Observable } from 'rxjs';
import { EventosService } from '../service/eventos.service';
import { Invitado } from '../classes/invitado';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss']
})
export class EditarEventoComponent implements OnInit {

  evento$: Observable<Evento>;
  evento: Evento;
  nuevoInvitado: Invitado = new Invitado();

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventosService: EventosService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      const id: number = params.id;
      console.log('Evento id: ' + id );

      this.eventosService.getEventoById(id).subscribe((evento) => {
        this.evento = evento;
      });
    });
  }

  removerInvitado(i: Invitado) {
    Swal.fire('Invitado', `¿Retirar invitación para ${i.firstname}?`, 'warning').then((v) => {
      if (v) {
        console.log('Invitado eliminado: ', i);
        this.evento.invitados.forEach((e, index) => {
          if (e === i) {
            this.evento.invitados.splice(index, 1);
          }
        });
      }
    });
  }

  agregarInvitado() {
    console.log('Nuevo invitado: ', this.nuevoInvitado);
    this.evento.invitados.push(this.nuevoInvitado);
    this.nuevoInvitado = new Invitado();
  }



}
