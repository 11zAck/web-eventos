import { Banco } from '../classes/banco';
import { Evento } from '../classes/evento';
import { Component, OnInit } from '@angular/core';
import { Deseo } from '../classes/deseo';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Invitado } from '../classes/invitado';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EventosService } from '../service/eventos.service';
import { Listado } from '../classes/listado';

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

  // ###### DROPDOWN TIPO EVENTO ##### //
  listEventType = [
    { id: 1, itemName: 'Aniversario' },
    { id: 2, itemName: 'BabyShower' },
    { id: 3, itemName: 'Cumpleaños' },
    { id: 4, itemName: 'Bautizo' },
  ];
  listSelectedEventType = [];
  listSettingsEventType =
    {
      singleSelection: true,
      text: 'Selecciona el tipo de evento',
      enableSearchFilter: false,
      showCheckbox: false
    };

  // ################################# //

  public datepick: any;
  public timepick: {hour: number, minute: number} = { hour: 19, minute: 0 };

  // ################################# //

  public step1: boolean;
  public step2: boolean;

  // ################################# //
  public evento: Evento = new Evento();
  public nuevoInvitado: Invitado = new Invitado();
  public invitados: Invitado[] = [];
  public newEmail: string;


  constructor(
    private calendar: NgbCalendar,
    private router: Router,
    private eventoService: EventosService
  ) { }

  ngOnInit() {
    this.step1 = true;
    this.step2 = false;

    // ##### INICIALIZAR LOS SELECTS
    this.eventoService.getListadoBancos().subscribe( (data: Listado[]) => {
      this.listBancos = JSON.parse(JSON.stringify(data));
    }, ( error ) => {
      // tslint:disable-next-line: no-console
      console.debug('No logramos obtener el listado de bancos disponibles.');
      this.listBancos = [];
    }, () => {
      this.listBancosSettings = {
        singleSelection: true,
        text: 'Seleccione Banco',
        enableSearchFilter: false,
        showCheckbox: false
      };
    });

    this.eventoService.getDeseosDisponibles().subscribe( (data: Listado[]) => {
      this.listDeseos = JSON.parse(JSON.stringify(data));
    }, (error) => {
      // tslint:disable-next-line: no-console
      console.debug('No pudimos obtener el listado de deseos disponibles.');
      this.listDeseos = [];
    }, () => {
      this.listDeseosSelected = JSON.parse( JSON.stringify(this.listDeseos) );
      this.listDeseosSettings = {
        text: 'Seleccione Deseo',
        selectAllText: 'Seleccionar todos',
        unSelectAllText: 'Deseleccionar todos'
      };
    });

    this.eventoService.getListadoTipoCuenta().subscribe( (data: Listado[]) => {
      this.listTipoCuenta = JSON.parse(JSON.stringify(data));
    }, ( error ) => {
      // tslint:disable-next-line: no-console
      console.debug('No logramos obtener los tipos de cuenta.');
      this.listTipoCuenta = [];
    }, () => {
      this.listTipoCuentaSettings = {
        singleSelection: true,
        text: 'Seleccione Tipo de Cuenta',
        enableSearchFilter: false,
        showCheckbox: false
      };
    });

    this.datepick = this.calendar.getToday();

  }

  onSelectEventType( tipoEvento: any ) {
    console.log( tipoEvento );
    this.evento.tipoEvento = tipoEvento.id;
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
    console.log( deseo );
  }

  async onClickAddDeseo() {
    const { value: deseo } = await Swal.fire({
      title: 'Tu nuevo deseo',
      input: 'text',
      inputPlaceholder: 'Ingresa el nombre de tu deseo'
    });

    if ( deseo ) {
      const cantidadDeseos = this.listDeseos.length;
      const nuevoDeseo = { id: cantidadDeseos + 1, itemName: deseo };
      this.listDeseos.push( nuevoDeseo );
      this.listDeseosSelected.push( JSON.parse(JSON.stringify( nuevoDeseo )));
    }

  }

  onDateSelected( newDate: any ) {
    console.log( newDate );
    this.datepick = newDate;
  }

  async nextPage() {
    if ( this.formularioIncompleto() ) {
      await Swal.fire(
        'Evento incompleto',
        'Existen campos sin completar',
        'warning');
    } else {
      const timestr = this.timepick.hour + ':' + this.timepick.minute;
      const datestr = this.datepick.year + '-' + this.datepick.month + '-' + this.datepick.day;
      this.evento.fechaEvento = new Date( datestr + ' ' + timestr );
      this.evento.deseos = JSON.parse(JSON.stringify(this.listDeseosSelected));
      this.evento.tipoEvento = (this.listSelectedEventType.pop()).id;

      this.eventoService.addEvento( this.evento ).subscribe( (data: Evento) => {
        // tslint:disable-next-line: no-console
        console.debug('Evento guardado: ', data);
        console.log('Identificador. data.id:' + data.id + ', evento.id: ' + this.evento.id );
      }, (error) => {
        // tslint:disable-next-line: no-console
        console.debug('Error guardar evento');
      }, () => {
        console.log( 'Siguiente página, se agrega evento: ', this.evento );
        this.step1 = false;
        this.step2 = true;
      });
    }

  }

  private formularioIncompleto(): boolean {
    if ( this.listSelectedEventType == null || this.listSelectedEventType.length === 0 ) { return true; }
    if ( this.evento.titulo == null || this.evento.titulo.length === 0 ) { return true; }
    if ( this.evento.direccion == null || this.evento.direccion.length === 0 ) { return true; }
    if ( this.evento.banco == null ) { return true; }
    if ( this.evento.numeroCuenta == null || this.evento.numeroCuenta.length === 0 ) { return true; }
    if ( this.evento.tipoCuenta == null ) { return true; }
    if ( this.evento.emailCuenta == null || this.evento.emailCuenta.length === 0 ) { return true; }
    if ( this.evento.telefono == null || this.evento.telefono.length === 0 ) { return true; }
    if ( this.listDeseosSelected == null || this.listDeseosSelected.length === 0 ) { return true; }
    return false;
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

    console.log('Almacenando invitados...');
    const cantidadInvitados = this.invitados.length;
    let invitadosGuardados = 0;
    this.invitados.forEach( (i, ndx) => {
      this.eventoService.addInvitado( this.evento.id, i ).subscribe( (data: Invitado) => {
        // tslint:disable-next-line: no-console
        console.debug('Invitado guardado: ', data);
      }, (error) => {
        // tslint:disable-next-line: no-console
        console.debug('Error guardar invitado');
      }, () => {
        invitadosGuardados++;
      });
    });

    if ( invitadosGuardados === cantidadInvitados ) {
      Swal.fire(
        'Nuevo evento',
        'Evento creado con éxito. Tus invitados serán notificados durante los próximo minutos.',
        'success')
      .then(() => {
        this.router.navigate(['/eventos']);
      });
    } else {
      Swal.fire(
        'Nuevo evento',
        'Tuvimos un inconveniente al almacenar tu evento o sus invitados.',
        'error');
    }
  }

}
