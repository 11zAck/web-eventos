import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndpoint = '';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {  }

  registrarUsuario( usuario: Usuario ): Observable<Usuario> {
    return this.http.post( this.urlEndpoint, usuario, {headers: this.headers } );
  }


}
