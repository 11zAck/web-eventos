import { Component, OnInit } from '@angular/core';
import { Evento } from '../classes/evento';
import { Deseo } from '../classes/deseo';
import { DeseoAsociado } from '../classes/deseo-asociado';
import { formatCurrency } from '@angular/common';
import { Router } from '@angular/router';

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
  deseoAsociado: DeseoAsociado;
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
