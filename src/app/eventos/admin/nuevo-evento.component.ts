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
  public invitados: Invitado[] = [];
  public newEmail: string;
  public deseoSeleccionado: Deseo;

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
      this.listBancos = data;
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
      this.listDeseos = data;
    }, (error) => {
      // tslint:disable-next-line: no-console
      console.debug('No pudimos obtener el listado de deseos disponibles.');
      this.listDeseos = [];
    }, () => {
      this.listDeseosSettings = {
        singleSelection: true,
        text: 'Seleccione Deseo',
        enableSearchFilter: false,
        showCheckbox: false
      };
    });

    this.eventoService.getListadoTipoCuenta().subscribe( (data: Listado[]) => {
      this.listTipoCuenta = data;
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
      this.evento.deseos = this.nuevosDeseos;

      this.eventoService.addEvento( this.evento ).subscribe( (data: Evento) => {
        // tslint:disable-next-line: no-console
        console.debug('Evento guardado: ', data);
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
    if ( this.evento.titulo == null || this.evento.titulo.length === 0 ) { return true; }
    if ( this.evento.direccion == null || this.evento.direccion.length === 0 ) { return true; }
    if ( this.evento.banco == null ) { return true; }
    if ( this.evento.numeroCuenta == null || this.evento.numeroCuenta.length === 0 ) { return true; }
    if ( this.evento.tipoCuenta == null || this.evento.tipoCuenta.length === 0 ) { return true; }
    if ( this.evento.emailCuenta == null || this.evento.emailCuenta.length === 0 ) { return true; }
    if ( this.evento.telefono == null || this.evento.telefono.length === 0 ) { return true; }
    if ( this.nuevosDeseos == null || this.nuevosDeseos.length === 0 ) { return true; }
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
