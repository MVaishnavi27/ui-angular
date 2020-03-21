import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockexchangeService } from '../stockexchange.service';
import { Observable } from 'rxjs';
import { Stockexchange } from '../Stockexchange';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stockexchangelist',
  templateUrl: './stockexchangelist.component.html',
  styleUrls: ['./stockexchangelist.component.css']
})
export class StockexchangelistComponent implements OnInit {

  isupdated: boolean;

  constructor(private router :Router,private stockexchangeservice: StockexchangeService) { }

  stockexchangeList: Observable<Stockexchange[]>;  
  ngOnInit() {

    this.stockexchangeservice.getAllStockExchange().subscribe(data => {

      this.stockexchangeList = data;

    })

  }
  deleteStockExchange(stockexchange: Stockexchange) {  
    this.stockexchangeservice.deleteStockExchange(stockexchange.stockexid)  
      .subscribe(  
        data => {  
       console.log(data);
          this.stockexchangeservice.getAllStockExchange().subscribe(data =>{  
            this.stockexchangeList =data})
          },

        error=>console.log(error));  
  }  
  updateStockExchange(stockexchange: Stockexchange) {

    window.localStorage.removeItem("update-stockexid");
    window.localStorage.setItem("update-stockexid", stockexchange.stockexid.toString());
    this.router.navigate(['stockexchange']);
    };
   
     stockexchangeupdateform = new FormGroup({
    stockexid: new FormControl(),
    stockexchange: new FormControl(),
  
    brief: new FormControl(),
  
    remarks: new FormControl(),
  
    contactaddress: new FormControl(),
  
   });
  
  
   get Stockexid() {
  
  
  
    return this.stockexchangeupdateform.get('stockexid');
  
  
    
   }
  
   get Stockexchange() {
  
  
  
    return this.stockexchangeupdateform.get('stockexchange');
  
  
  
   }
  
  
  
   get Brief (){
  
  
  
    return this.stockexchangeupdateform.get('brief');
  
  
  
   }
  
   get Contactaddress(){
  
    return this.stockexchangeupdateform.get('contactaddress');
  
   }
  
   get Remarks () {
  
    return this.stockexchangeupdateform.get('remarks');
  
   }
  
   changeisUpdate() {
  
    this.isupdated = false;
  
   }
 
  

}

 