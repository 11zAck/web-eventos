import { Banco } from './classes/banco';
import { Evento } from './classes/evento';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DeseoAsociado } from './classes/deseo-asociado';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.scss']
})
export class NuevoEventoComponent implements OnInit {

  public evento: Evento = new Evento();

  public bancoSeleccionado: Banco = new Banco();

  public bancos: Array<Banco> = [
    new Banco( 1, 'BANCO DE CHILE', true ),
    new Banco( 2, 'BANCO INTERNACIONAL', true ),
    new Banco( 3, 'SCOTIABANK CHILE', true ),
    new Banco( 4, 'BANCO DE CREDITO E INVERSIONES', true ),
    new Banco( 5, 'BANCO BICE', true ),
    new Banco( 6, 'HSBC BANK (CHILE)', true ),
    new Banco( 7, 'BANCO SANTANDER-CHILE', true ),
    new Banco( 8, 'ITAÚ CORPBANCA', true ),
    new Banco( 9, 'BANCO SECURITY', true ),
    new Banco( 10, 'BANCO FALABELLA', true ),
    new Banco( 11, 'BANCO RIPLEY', true ),
    new Banco( 12, 'RABOBANK CHILE', true ),
    new Banco( 13, 'BANCO CONSORCIO', true ),
    new Banco( 14, 'BANCO PENTA', true ),
    new Banco( 15, 'BANCO BILBAO VIZCAYA ARGENTARIA, CHILE (BBVA)', true ),
    new Banco( 16, 'BANCO BTG PACTUAL CHILE', true ),
    new Banco( 17, 'BANCO DEL ESTADO DE CHILE', true )
  ];

  public deseos: DeseoAsociado[] = [
    { id: 1, nombre: 'Amor', cantidad: 10, valor: 20000, total: 200000  },
    { id: 2, nombre: 'Paz', cantidad: 20, valor: 5000, total: 100000 },
    { id: 3, nombre: 'Bondad', cantidad: 15, valor: 10000, total: 150000 }
  ];

  constructor( private currencyPipe: CurrencyPipe ) {
  }

  ngOnInit() {

  }

  onChangeBanco( newBanco ) {
    console.log( newBanco );
    this.bancoSeleccionado = newBanco;
    this.evento.banco = this.bancoSeleccionado;
  }

  nextPage() {
    console.log( this.evento );
  }

}
