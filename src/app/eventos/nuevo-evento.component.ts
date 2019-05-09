import { Banco } from './classes/banco';
import { Evento } from './classes/evento';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DeseoAsociado } from './classes/deseo-asociado';
import { CurrencyPipe } from '@angular/common';
import { Deseo } from './classes/deseo';

declare var $: any;

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.scss']
})
export class NuevoEventoComponent implements OnInit {
  // http://cuppalabs.github.io/components/multiselectDropdown/#Themes-and-Theming
  // ###### DROPDOWN DESEOS ###### //

  listDeseos = [];
  listDeseosSelected = [];
  listDeseosSettings = {};

  // ###### DROPDOWN BANCOS ###### //

  listBancos = [];
  listBancosSelected = [];
  listBancosSettings = {};

  // ###### DROPDOWN TIPOCUENTA ###### //

  listTipoCuenta = [];
  listTipoCuentaSelected = [];
  listTipoCuentaSettings = {};

  // ################################# //
  
  public evento: Evento = new Evento();

  public bancoSeleccionado: Banco = new Banco();

  public nuevosDeseos: DeseoAsociado[] = [];

  public deseoSeleccionado: Deseo;

  public bancos: Array<Banco> = [
    new Banco(  1, 'BANCO DE CHILE', true ),
    new Banco(  2, 'BANCO INTERNACIONAL', true ),
    new Banco(  3, 'SCOTIABANK CHILE', true ),
    new Banco(  4, 'BANCO DE CREDITO E INVERSIONES', true ),
    new Banco(  5, 'BANCO BICE', true ),
    new Banco(  6, 'HSBC BANK (CHILE)', true ),
    new Banco(  7, 'BANCO SANTANDER-CHILE', true ),
    new Banco(  8, 'ITAÚ CORPBANCA', true ),
    new Banco(  9, 'BANCO SECURITY', true ),
    new Banco( 10, 'BANCO FALABELLA', true ),
    new Banco( 11, 'BANCO RIPLEY', true ),
    new Banco( 12, 'RABOBANK CHILE', true ),
    new Banco( 13, 'BANCO CONSORCIO', true ),
    new Banco( 14, 'BANCO PENTA', true ),
    new Banco( 15, 'BANCO BILBAO VIZCAYA ARGENTARIA, CHILE (BBVA)', true ),
    new Banco( 16, 'BANCO BTG PACTUAL CHILE', true ),
    new Banco( 17, 'BANCO DEL ESTADO DE CHILE', true )
  ];

  constructor( private currencyPipe: CurrencyPipe ) {
  }

  ngOnInit() {

    this.listBancos = [
      { "id": 1,"itemName":'BANCO DE CHILE' },
      { "id": 2,"itemName":'BANCO INTERNACIONAL' },
      { "id": 3,"itemName":'SCOTIABANK CHILE' },
      { "id": 4,"itemName":'BANCO DE CREDITO E INVERSIONES' },
      { "id": 5,"itemName":'BANCO BICE' },
      { "id": 6,"itemName":'HSBC BANK (CHILE)' },
      { "id": 7,"itemName":'BANCO SANTANDER-CHILE' },
      { "id": 8,"itemName":'ITAÚ CORPBANCA' },
      { "id": 9,"itemName":'BANCO SECURITY' },
      { "id":10,"itemName":'BANCO FALABELLA' },
      { "id":11,"itemName":'BANCO RIPLEY' },
      { "id":12,"itemName":'RABOBANK CHILE' },
      { "id":13,"itemName":'BANCO CONSORCIO' },
      { "id":14,"itemName":'BANCO PENTA' },
      { "id":15,"itemName":'BANCO BILBAO VIZCAYA ARGENTARIA, CHILE (BBVA)' },
      { "id":16,"itemName":'BANCO BTG PACTUAL CHILE' },
      { "id":17,"itemName":'BANCO DEL ESTADO DE CHILE' }
    ];

    this.listBancosSettings = {
      singleSelection: true,
      text:'Seleccione Banco',
      enableSearchFilter: false
    };

    this.listDeseos = [
      { 'id': 1, 'itemName': 'Alegría' },
      { 'id': 2, 'itemName': 'Amor' },
      { 'id': 3, 'itemName': 'Bondad' },
      { 'id': 4, 'itemName': 'Gozo' },
      { 'id': 5, 'itemName': 'Humildad' },
      { 'id': 6, 'itemName': 'Paciencia' },
      { 'id': 7, 'itemName': 'Paz'  }
    ];

    this.listDeseosSettings = {
      singleSelection: true,
      text:'Seleccione Deseo',
      enableSearchFilter: false
    };

  }

  onChangeBanco( newBanco ) {
    console.log( newBanco );
    this.bancoSeleccionado = newBanco;
    this.evento.banco = this.bancoSeleccionado;
  }

  onChangeDeseo( newDeseo ) {
    console.log( newDeseo );
    this.deseoSeleccionado = newDeseo;
  }

  onClickAddDeseo() {
    let d = new DeseoAsociado( this.deseoSeleccionado.id, this.deseoSeleccionado.nombre );
    this.nuevosDeseos.push( d );
  }

  nextPage() {
    console.log( this.evento );
  }

}
