import { Banco } from '../classes/banco';
import { Evento } from '../classes/evento';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Deseo } from '../classes/deseo';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Invitado } from '../classes/invitado';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

  public datepick: any;
  public timepick: {hour: number, minute: number} = { hour: 19, minute: 0 };

  // ################################# //

  public step1: boolean;
  public step2: boolean;

  // ################################# //
  public evento: Evento = new Evento();

  public nuevosDeseos: Deseo[] = [];

  public nuevoInvitado: Invitado = new Invitado();

  public invitados: Invitado[] = [
    new Invitado(null, '', '', '', 'Isaac', 'Méndez', null, null, 'isaac@gmail.com'),
    new Invitado(null, '', '', '', 'René', 'Gonzalez', null, null, 'rene@gmail.com'),
    new Invitado(null, '', '', '', 'Hugo', 'Hernandez', null, null, 'hugo@gmail.com')
  ];

  public newEmail: string;

  public deseoSeleccionado: Deseo;

  constructor( 
    private currencyPipe: CurrencyPipe,
    private calendar: NgbCalendar,
    private router: Router
  ) { }

  ngOnInit() {
    this.step1 = true;
    this.step2 = false;
    // ##### INICIALIZAR LOS SELECTS
    this.listBancos = [
      { id: 1, itemName: 'BANCO DE CHILE' },
      { id: 2, itemName: 'BANCO INTERNACIONAL' },
      { id: 3, itemName: 'SCOTIABANK CHILE' },
      { id: 4, itemName: 'BANCO DE CREDITO E INVERSIONES' },
      { id: 5, itemName: 'BANCO BICE' },
      { id: 6, itemName: 'HSBC BANK (CHILE)' },
      { id: 7, itemName: 'BANCO SANTANDER-CHILE' },
      { id: 8, itemName: 'ITAÚ CORPBANCA' },
      { id: 9, itemName: 'BANCO SECURITY' },
      { id: 10, itemName: 'BANCO FALABELLA' },
      { id: 11, itemName: 'BANCO RIPLEY' },
      { id: 12, itemName: 'RABOBANK CHILE' },
      { id: 13, itemName: 'BANCO CONSORCIO' },
      { id: 14, itemName: 'BANCO PENTA' },
      { id: 15, itemName: 'BANCO BILBAO VIZCAYA ARGENTARIA, CHILE (BBVA)' },
      { id: 16, itemName: 'BANCO BTG PACTUAL CHILE' },
      { id: 17, itemName: 'BANCO DEL ESTADO DE CHILE' }
    ];

    this.listBancosSettings = {
      singleSelection: true,
      text: 'Seleccione Banco',
      enableSearchFilter: false,
      showCheckbox: false
    };

    this.listDeseos = [
      { id: 1, itemName: 'Alegría' },
      { id: 2, itemName: 'Amor' },
      { id: 3, itemName: 'Bondad' },
      { id: 4, itemName: 'Gozo' },
      { id: 5, itemName: 'Humildad' },
      { id: 6, itemName: 'Paciencia' },
      { id: 7, itemName: 'Paz'  }
    ];

    this.listDeseosSettings = {
      singleSelection: true,
      text: 'Seleccione Deseo',
      enableSearchFilter: false,
      showCheckbox: false
    };

    this.listTipoCuenta = [
      { id: 'CC', itemName: 'Cuenta Corriente' },
      { id: 'CV', itemName: 'Cuenta Vista' },
      { id: 'CR', itemName: 'Cuenta RUT' }
    ];

    this.listTipoCuentaSettings = {
      singleSelection: true,
      text: 'Seleccione Tipo de Cuenta',
      enableSearchFilter: false,
      showCheckbox: false
    };

    this.datepick = this.calendar.getToday();
  }

  onBancoSelect( banco: any ) {
    console.log( banco );
    this.evento.banco = new Banco( banco.id, banco.itemName, true );
  }

  onTipoCuentaSelect( newTC: any ) {
    console.log( newTC );
    this.evento.tipoCuenta = newTC;
  }

  onDeseoSelec( deseo: any ) {
    this.deseoSeleccionado = new Deseo(deseo.id, deseo.itemName);
  }

  onClickAddDeseo() {
    if ( this.deseoSeleccionado === null || this.listDeseosSelected.length === 0 ) {
      Swal.fire('Asociar deseo', 'Debe seleccionar un deseo antes de asociarlo al evento.', 'warning');
    } else {
      this.nuevosDeseos.push( new Deseo(this.deseoSeleccionado.id, this.deseoSeleccionado.nombre, true) );
      this.listDeseos.forEach( ( v, i ) => {
        if ( v.id === this.deseoSeleccionado.id ) {
          this.listDeseos.splice( i, 1 );
        }
      });
      this.deseoSeleccionado = null;
      this.listDeseosSelected = [];
    }
  }

  onDateSelected( newDate: any ) {
    console.log( newDate );
    this.datepick = newDate;
  }

  nextPage() {
    const timestr = this.timepick.hour + ':' + this.timepick.minute;
    const datestr = this.datepick.year + '-' + this.datepick.month + '-' + this.datepick.day;
    this.evento.fechaEvento = new Date( datestr + ' ' + timestr );
    console.log( this.evento );
    this.step1 = false;
    this.step2 = true;
  }

  agregarInvitado() {
    console.log( 'Nuevo invitado: ', this.nuevoInvitado );
    this.invitados.push( this.nuevoInvitado );
    this.nuevoInvitado = new Invitado();
  }

  removerInvitado( i: Invitado ) {
    Swal.fire('Invitado', `¿Retirar invitación para ${ i.firstname }?`, 'warning').then((v) => {
      if ( v ) {
        console.log('Invitado eliminado: ', i );
        this.invitados.forEach( (e, index) => {
          if ( e === i ) {
            this.invitados.splice( index, 1 );
          }
        });
      }
    });
  }


  terminarEvento() {
    Swal.fire('Nuevo evento', 'Evento creado con éxito', 'success').then(() => {
      this.router.navigate(['/home']);
    });
  }

  eliminarFilaDeseo( d: Deseo ) {
    Swal.fire('Eliminar deseo', '¿Desea eliminar realmente este deseo?', 'warning').then(( rsp ) => {
      if ( rsp ) {
        let delDeseo = [];
        this.nuevosDeseos.forEach((e, index) => {
          if (e === d) {
            delDeseo = this.nuevosDeseos.splice(index, 1);
          }
        });
        this.listDeseos.push({ id: delDeseo[0].id, itemName: delDeseo[0].nombre });
        this.listDeseos = this.listDeseos.sort( (a, b) => a.id - b.id );
      }
    });
  }
}
