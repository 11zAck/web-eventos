import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../classes/evento';

@Injectable({
  providedIn: 'root'
})
export class ServicioEventosService {

  public eventoTest: Evento = new Evento();

  constructor() { }

}
