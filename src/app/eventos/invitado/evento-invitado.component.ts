import { Component, OnInit } from '@angular/core';

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

  // ###### OTRAS PROPIEDADES DE CLASE ###### //


  /**
   * Constructor
   */
  constructor() { }

  ngOnInit() {
    this.listDeseos = [
      { id: 1, itemName: 'Alegría' },
      { id: 2, itemName: 'Amor' },
      { id: 3, itemName: 'Bondad' },
      { id: 4, itemName: 'Gozo' },
      { id: 5, itemName: 'Humildad' },
      { id: 6, itemName: 'Paciencia' },
      { id: 7, itemName: 'Paz' }
    ];

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
