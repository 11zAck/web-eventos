import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Evento } from '../classes/evento';
import { Observable } from 'rxjs';
import { EventosService } from '../service/eventos.service';
import { Invitado } from '../classes/invitado';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

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
    private eventosService: EventosService,
    private location: Location
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
    Swal.fire({
      title: 'Invitado',
      text: `¿Retirar invitación para ${i.firstname} ${i.lastname}?`,
      type: 'warning',
      showConfirmButton: true,
      confirmButtonText: 'Continuar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'btn-primary btn-round',
        cancelButton: 'btn-round'
      }
    }).then((v) => {
      if (v.value) {
        console.log('Invitado eliminado: ', i);
        /*
        this.evento.invitados.forEach((e, index) => {
          if (e === i) {
            //this.evento.invitados.splice(index, 1);
          }
        });
        */
        this.eventosService.removeInvitado( this.evento.id, i.email );
      }
    });
  }

  agregarInvitado() {
    console.log('Nuevo invitado: ', this.nuevoInvitado);
    this.evento.invitados.push(this.nuevoInvitado);
    this.eventosService.addInvitado( this.evento.id, this.nuevoInvitado );
    this.nuevoInvitado = new Invitado();
  }

  regresar() {
    this.location.back();
  }

}
