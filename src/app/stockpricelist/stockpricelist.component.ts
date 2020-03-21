import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockpriceService } from '../stockprice.service';
import { Stockprice } from '../stockprice';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stockpricelist',
  templateUrl: './stockpricelist.component.html',
  styleUrls: ['./stockpricelist.component.css']
})
export class StockpricelistComponent implements OnInit {
  
  isupdated: boolean;

  constructor(private router :Router,private stockpriceservice: StockpriceService) { }

  stockpriceList: Observable<Stockprice[]>;  
  ngOnInit() {

    this.stockpriceservice.getAllStockPrice().subscribe(data => {

      this.stockpriceList = data;

    })

  }
  deleteStockPrice(stockprice: Stockprice) {  
    this.stockpriceservice.deleteStockPrice(stockprice.stockexchange)  
      .subscribe(  
        data => {  
       console.log(data);
          this.stockpriceservice.getAllStockPrice().subscribe(data =>{  
            this.stockpriceList =data})
          },

        error=>console.log(error));  
  }  
  updateStockPrice(stockprice: Stockprice) {

    window.localStorage.removeItem("update-stockexchange");
    window.localStorage.setItem("update-stockexchange", stockprice.stockexchange.toString());
    this.router.navigate(['stockprice']);
    };
   
     stockpriceupdateform = new FormGroup({
    companyname: new FormControl(),
    stockexchange: new FormControl(),
     currentprice: new FormControl(),
  
    date: new FormControl(),
    time: new FormControl(),
  
  
   });
  
  
   get Companyname() {
  
  
  
    return this.stockpriceupdateform.get('companyname');
  
  
    
   }
  
   get Stockexchange() {
  
  
  
    return this.stockpriceupdateform.get('stockexchange');
  
  
  
   }
  
  
  
   get Currentprice(){
  
  
  
    return this.stockpriceupdateform.get('currentprice');
  
  
  
   }
  
   get Date() {
  
    return this.stockpriceupdateform.get('date');
  
   }
  
   get Time() {
  
  
  
    return this.stockpriceupdateform.get('time');
  
  
  
   }
  

   changeisUpdate() {
  
    this.isupdated = false;
  
   }
 
  

}

 