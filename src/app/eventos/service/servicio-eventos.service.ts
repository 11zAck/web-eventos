import { Injectable } from '@angular/core';
import { Evento } from '../classes/evento';
import { BANCOS, TIPO_CUENTA, DESEOS, EVENTOS } from './data.json';
import { Listado } from '../classes/listado';

@Injectable({
  providedIn: 'root'
})
export class ServicioEventosService {

  constructor() { }

  getEventos(): Evento[] { return EVENTOS; }

  getListadoBancos(): Listado[] { return BANCOS; }

  getListadoTipoCuenta(): Listado[] { return TIPO_CUENTA; }

  getDeseosDisponibles(): Listado[] { return DESEOS; }

  getEventoById(id: number): any {
    return;
  }

}
