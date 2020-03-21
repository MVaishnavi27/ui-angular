import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipos } from './Ipos';
@Injectable({

  providedIn: 'root'

})

export class IposerviceService {

  private baseUrl = 'http://localhost:8081/Ipos/ipos/';
  constructor(private http: HttpClient) { }

  getAllIpos(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'getAllIpos');
  }
  saveIpos(ipos: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'saveIpos', ipos);
  }

  deleteIpos(ipoid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteIpos/${ipoid}`);
  }

  findOneInAll5(ipoid: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/findOneInAll5/${ipoid}`);
  }

  updateIpos(ipoid: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateIpos/${ipoid}`, ipoid);
  }

}

