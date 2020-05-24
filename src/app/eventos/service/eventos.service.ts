import { Invitado } from './../classes/invitado';
import { Injectable } from '@angular/core';
import { Evento } from '../classes/evento';
import { BANCOS, TIPO_CUENTA, DESEOS, EVENTOS } from './data.json';
import { Observable, of } from 'rxjs';
import { Listado } from '../classes/listado';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventos: Evento[];

  constructor() { }

  getEventos(): Observable<Evento[]> { return of(EVENTOS); }

  getEventoById( id: number ): Observable<Evento> {
    let evento: Evento = null;
    let i = 0;
    const size = EVENTOS.length;
    while ( evento === null && i < size ) {
      if ( (+EVENTOS[i].id) === (+id) ) {
        evento = EVENTOS[i] as Evento;
      }
      i++;
    }
    return of( evento );
  }

  getListadoBancos(): Observable<Listado[]> { return of(BANCOS); }

  getListadoTipoCuenta(): Observable<Listado[]> { return of(TIPO_CUENTA); }

  getDeseosDisponibles(): Observable<Listado[]> { return of(DESEOS); }

  addEvento( e: Evento ): Observable<Evento> {
    const newId = EVENTOS.length + 1 ;
    e.id = newId;
    EVENTOS.push(e);
    return of( e );
  }

  addInvitado( idEvento: number, i: Invitado ): Observable<Invitado> {
    const ndx = EVENTOS.findIndex( (e) => e.id === idEvento  );
    const evento: Evento = EVENTOS[ndx];
    evento.invitados.push(i);
    return of( i );
  }

}
