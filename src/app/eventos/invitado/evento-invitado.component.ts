import { Component, OnInit } from '@angular/core';
import { Evento } from '../classes/evento';
import { Deseo } from '../classes/deseo';
import { DeseoAsociado } from '../classes/deseo-asociado';

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
  valorDeseoAsoc: number = 0;

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
      new DeseoAsociado(1, 'Alegria', 1000, 3000 ),
      new DeseoAsociado(2, 'Amor', 1000, 5000 ),
      new DeseoAsociado(3, 'Bondad', 1000, 3500 ),
      new DeseoAsociado(4, 'Gozo', 1000, 5400 ),
      new DeseoAsociado(5, 'Humildad', 1000, 9800 ),
      new DeseoAsociado(6, 'Paciencia', 1000, 2500 ),
      new DeseoAsociado(7, 'Paz', 1000, 3400 )
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
    const deseoUnico: {id: number, itemName: string } = this.listDeseosSelected[0];
    let deseoAsociado: DeseoAsociado = null;
    this.evento.deseos.forEach( (v, i) => {
      if ( v.id === deseoUnico.id ) {
        deseoAsociado = v;
      }
    });
    console.log( deseoAsociado );
    this.valorDeseoAsoc = deseoAsociado.valor;
  }

}
