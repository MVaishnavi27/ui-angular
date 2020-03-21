import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Companydata } from './companydata';

@Injectable({



 providedIn: 'root'



})



export class SectorserviceService {



 private baseUrl = 'http://localhost:8081/Sectors/sectors/';

 constructor(private http: HttpClient) { }



 getAllSectors(): Observable<any> {

  return this.http.get(`${this.baseUrl}` + 'getAllSectors');

 }

 saveSectors(sectors: object): Observable<object> {

  return this.http.post(`${this.baseUrl}` + 'saveSectors', sectors);

 }



 deleteSectors(sectorid: Number): Observable<any> {

  return this.http.delete(`${this.baseUrl}/deleteSectors/${sectorid}`);

 }



 findOneInAll4(sectorid: Number): Observable<any> {



  return this.http.get(`${this.baseUrl}/findOneInAll4/${sectorid}`);

 }



 updateSectors(sectorid: Number, value: any): Observable<any> {

  return this.http.put(`${this.baseUrl}/updateUser/${sectorid}`, value);

 }



}



64 