import { Injectable } from '@angular/core';
import { RequestPayment, ResponsePayment } from '../classes/tbk/request-objtects';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransbankService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  requestPayment( requestParams: RequestPayment): Observable<ResponsePayment> {
    return this.http.get(environment.urlTransbankService,
      {
        headers: this.headers,
        params: {
          amount: requestParams.amount,
          'session-id': requestParams.sessionId,
          'buy-order': requestParams.buyOrder
        }
      }
    ).pipe(
      map(response => response as ResponsePayment)
    );
  }

}
