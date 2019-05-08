import { Banco } from './classes/banco';
import { Evento } from './classes/evento';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.scss']
})
export class NuevoEventoComponent implements OnInit {

  public evento: Evento = new Evento();

  public bancos: Array<Banco> = [
    new Banco( 1, "BANCO DE CHILE", true ),
    new Banco( 2, "BANCO INTERNACIONAL", true ),
    new Banco( 3, "SCOTIABANK CHILE", true ),
    new Banco( 4, "BANCO DE CREDITO E INVERSIONES", true ),
    new Banco( 5, "BANCO BICE", true ),
    new Banco( 6, "HSBC BANK (CHILE)", true ),
    new Banco( 7, "BANCO SANTANDER-CHILE", true ),
    new Banco( 8, "ITAÚ CORPBANCA", true ),
    new Banco( 9, "BANCO SECURITY", true ),
    new Banco( 10, "BANCO FALABELLA", true ),
    new Banco( 11, "BANCO RIPLEY", true ),
    new Banco( 12, "RABOBANK CHILE", true ),
    new Banco( 13, "BANCO CONSORCIO", true ),
    new Banco( 14, "BANCO PENTA", true ),
    new Banco( 15, "BANCO BILBAO VIZCAYA ARGENTARIA, CHILE (BBVA)", true ),
    new Banco( 16, "BANCO BTG PACTUAL CHILE", true ),
    new Banco( 17, "BANCO DEL ESTADO DE CHILE", true )
  ];


  constructor() {

  }

  ngOnInit() {

  }

  nextPage(){
    console.log( this.evento );
  }

}
