import { Component, OnInit } from '@angular/core';
import { Evento } from '../classes/evento';
import { formatCurrency } from '@angular/common';
import { Router } from '@angular/router';
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
  deseoAsociado: Deseo;
  valorDeseoAsoc: number = 0;
  cantidadDeseo: number = 0;
  totalValor: string = '0';

  step1: boolean = true;
  step2: boolean = false;
  /**
   * Constructor
   */
  constructor(
    private router: Router
  ) {
    this.evento.titulo = "Aniversario de prueba";
    this.evento.fechaEvento = new Date();
    this.evento.descripcion = "Este es el 30° aniversario de mis padres";
    this.evento.direccion = "Nueva esperanza 345, Puente Alto";
    this.evento.deseos = [
      new Deseo(1, 'Alegria', true, 1000 ),
      new Deseo(2, 'Amor', true, 1000 ),
      new Deseo(3, 'Bondad', true, 1000),
      new Deseo(4, 'Gozo', true, 1000),
      new Deseo(5, 'Humildad', true, 1000),
      new Deseo(6, 'Paciencia', true, 1000),
      new Deseo(7, 'Paz', true, 1500 )
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
    this.step1 = true;
  }

  onDeseoSelect( deseo ): void {
    const deseoUnico: {id: number, itemName: string } = this.listDeseosSelected[0];
    this.deseoAsociado = null;
    this.evento.deseos.forEach( (v, i) => {
      if ( v.id === deseoUnico.id ) {
        this.deseoAsociado = v;
      }
    });
    this.valorDeseoAsoc = this.deseoAsociado.valor;
  }

  onInputCantidad( ): void {
    this.totalValor = formatCurrency( this.cantidadDeseo * this.valorDeseoAsoc, 'es_CL', '$ ', 'CLP');
  }

  clickContinuar() {
    // this.router.navigate(['/pre-pago']);
    this.step1 = false;
    this.step2 = true;
  }

  clickRegresar() {
    this.step2 = false;
    this.step1 = true;
  }

  clickPagar() {
    console.log('Pagar');
  }

}
