import { Component, OnInit } from '@angular/core';
import { Evento } from '../classes/evento';
import { Deseo } from '../classes/deseo';

@Component({
  selector: 'app-evento-invitado',
  templateUrl: './evento-invitado.component.html',
  styleUrls: ['./evento-invitado.component.scss']
})
export class EventoInvitadoComponent implements OnInit {

  // ###### DROPDOWN DESEOS ###### //

  listDeseos = [];
  listDeseosSelected = [];
  listDeseosSettings = {};

  // ###### PROPIEDADES DE CLASE ###### //
  evento: Evento = new Evento();

  /**
   * Constructor
   */
  constructor() { 
    this.evento.nombre = "Aniversario de prueba";
    this.evento.fechaEvento = new Date();
    this.evento.horaEvento = new Date();
    this.evento.descripcion = "Este es el 30° aniversario de mis padres";
    this.evento.direccion = "Nueva esperanza 345, Puente Alto";
    this.evento.deseos = [
      new Deseo(1, 'Alegria' ),
      new Deseo(2, 'Amor' ),
      new Deseo(3, 'Bondad' ),
      new Deseo(4, 'Gozo' ),
      new Deseo(5, 'Humildad' ),
      new Deseo(6, 'Paciencia' ),
      new Deseo(7, 'Paz' )
    ];
    this.listDeseos = this.evento.listDeseosToSelect();
  }

  ngOnInit() {

    this.listDeseosSettings = {
      singleSelection: true,
      text: 'Seleccione Deseo',
      enableSearchFilter: false,
      showCheckbox: false
    };
  }

  onDeseoSelect( deseo ): void {
    console.log( 'Deseo seleccionado: ', deseo );
  }

}
