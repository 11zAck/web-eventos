import { TestBed, getTestBed } from '@angular/core/testing';
import { TransbankService } from './transbank.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
import { RequestPayment } from '../classes/tbk/request-objtects';


describe('TransbankService', () => {

  let service: TransbankService;
  let dummyParams;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransbankService]
    });
    service     = TestBed.get(TransbankService);
    dummyParams = new RequestPayment('1029', '12345678901', '0987654321');
  });

  describe('#requestPayment', () => {
    expect(service).toBeTruthy();

    it('should return an Observable<ResponsePayment>', () => {
      service.requestPayment( dummyParams ).subscribe( result => {
        expect(result).toBeDefined();
      });
    });
  });
});
