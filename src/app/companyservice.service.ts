import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companydata } from './companydata';
@Injectable({

  providedIn: 'root'

})

export class CompanyserviceService {

  private baseUrl = 'http://localhost:8081/CompanyData/companydata/';
  constructor(private http: HttpClient) { }

  getAllCompanyData(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'getAllCompanyData');
  }
  saveCompanyData(company: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'saveCompanyData', company);
  }

  deleteCompanyData(companyname: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteCompanyData/${companyname}`);
  }

  findOneInAll6(companyname: String): Observable<any> {

    return this.http.get(`${this.baseUrl}/findOneInAll6/${companyname}`);
  }

  updateCompanyData(companyname: String, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateUser/${companyname}`, value);
  }

}

