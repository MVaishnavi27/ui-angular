import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stockexchange } from './Stockexchange';
@Injectable({

  providedIn: 'root'

})

export class StockexchangeService {
  

  private baseUrl = 'http://localhost:8081/StockExchange/stockexchange/';
  constructor(private http: HttpClient) { }

  getAllStockExchange(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'getAllStockExchange');
  }
  saveStockExchange(stockexchange: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'saveStockExchange', stockexchange);
  }

  deleteStockExchange(stockexid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteStockExchange/${stockexid}`);
  }

  findOneInAll3(stockexid: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/findOneInAll3/${stockexid}`);
  }

  updateStockExchange(stockexid: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateStockExchange/${stockexid}`, stockexid);
  }

}


