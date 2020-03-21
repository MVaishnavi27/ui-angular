import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({

 providedIn: 'root'

})

export class StockpriceService {

 private baseUrl = 'http://localhost:8081/StockPrice/stockprice';



 constructor(private http:HttpClient) { }

 getAllStockPrice(): Observable<any> {





  return this.http.get(`${this.baseUrl}`+'/getAllStockPrice');



  }



  saveStockPrice(stockprice: object): Observable<object> {







  return this.http.post(`${this.baseUrl}`+'/saveStockPrice', stockprice);



  }



  deleteStockPrice(stockexchange: String): Observable<any> {







   return this.http.delete(`${this.baseUrl}/deleteStockPrice/${stockexchange}`);







  }



  findOneInAll2(stockexchange: String): Observable<any> {







   return this.http.get(`${this.baseUrl}/findOneInAll2/${stockexchange}`);



  }



  updateStockPrice(stockexchange: String, value: any): Observable<any> {



   return this.http.put(`${this.baseUrl}/updateStockPrice/${stockexchange}`, value);



  }

  getmultiplelinechart(): Observable<any> {

    return this.http.get(`${this.baseUrl}`+'/multiplelinechart');
  
   }
  
   uploadFile(file: File, stockexchange: String): Observable<any> {
  
    let url = this.baseUrl + "uploadfile/" + stockexchange;
  
    const formdata: FormData = new FormData();
  
    formdata.append('file', file);
  
    return this.http.post(url, formdata);
  
  
  
   }

  }



