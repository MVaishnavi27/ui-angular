import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../stockexchange.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Stockexchange } from '../stockexchange';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {
  constructor(private stockexservice:StockexchangeService) { }  
  stockexchange : Stockexchange=new Stockexchange();  
  submitted = false;  
 ngOnInit() {
    this.submitted=false; 
  }
  stockexsaveform=new FormGroup({ 
    stockexid:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
   stockexchange:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
   brief:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),   
 contactaddress:new FormControl('',[Validators.required,Validators.minLength(1)]),  
   remarks:new FormControl('' , [Validators.required , Validators.minLength(3) ] )
 });  
 
 saveStockex(saveStockex){  
   this.stockexchange=new Stockexchange();
   this.stockexchange.stockexid=this.Stockexid.value;       
   this.stockexchange.stockexchange=this.Stockexchange.value; 
   this.stockexchange.brief=this.Brief.value;  
   this.stockexchange.contactaddress=this.Contactaddress.value;
   this.stockexchange.remarks=this.Remarks.value;  
   this.submitted = true;  
   this.save();  
 }  
 
  
    
  
  save() {  
    this.stockexservice.saveStockExchange(this.stockexchange)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.stockexchange = new Stockexchange();   
  }  
  get Stockexid(){  
    return this.stockexsaveform.get('stockexid');  
  }  
  
  get Stockexchange(){  
    return this.stockexsaveform.get('stockexchange');  
  }  
  get Contactaddress(){  
    return this.stockexsaveform.get('contactaddress');  
  }  
  get Brief(){  
    return this.stockexsaveform.get('brief');  
  }  

  get Remarks(){  
    return this.stockexsaveform.get('remarks');  
  }  
  
  saveStockexForm(){  
    this.submitted=false;  
    this.stockexsaveform.reset();  
  }  
}



